import { Business } from "../../../../Types/SanityTypes";
import { scrapeBusiness } from "../../../../data/scraper";
import { getBusinesses, getBusiness } from "../../../../sanity/sanity-utils";
import BusinessPage from "./BusinessPage";


export async function generateStaticParams() {
    const businesses = await getBusinesses();
    return businesses.map((business: Business) => ({
        slug: `${business.slug}`,
    }));
}

async function getBusinessData(slug: string) {
    return await scrapeBusiness(slug);
}

export default async function Page({ params }: { params: { slug: string}}) {
    const slug = decodeURIComponent(params.slug);
    const businessData: Business = await getBusiness(slug);
    const scrapedData = await getBusinessData(businessData.diUrl);
    return <BusinessPage id={slug} data={scrapedData}/>;
}