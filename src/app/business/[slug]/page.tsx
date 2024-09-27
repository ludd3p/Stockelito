import { Business } from "../../../../Types/SanityTypes";
import { scrapeBusiness } from "../../../../data/scraper";
import { getBusinesses, getBusiness } from "../../../../sanity/sanity-utils";
import BusinessPage from "./BusinessPage";
import { MarketDataItem } from "../../../../data/scraper";

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
    let scrapedData: MarketDataItem = { slug: "", data: [] };
    if (params.slug) {
        const slug = decodeURIComponent(params.slug);
        // Getting url from sanity instead of slug
        const businessData: Business = await getBusiness(slug);
        if (businessData && businessData.diUrl){
            scrapedData = await getBusinessData(businessData.diUrl)
        } 
        return <BusinessPage id={slug} data={scrapedData}/>;
    }
    const emptyData: MarketDataItem = { slug: "", data: [] };
    return <BusinessPage id="" data={scrapedData} />;
}