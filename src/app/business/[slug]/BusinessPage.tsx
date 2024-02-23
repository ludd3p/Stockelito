'use client'
import { useEffect, useState } from "react";
import { getBusiness } from "../../../../sanity/sanity-utils";
import { Business } from "../../../../Types/SanityTypes";
import { PortableText } from "@portabletext/react";
import './styles.css';
import NewsSlider from "@/app/components/News/NewsSlider";
import { MarketDataItem } from "../../../../data/scraper";

interface BusinessPageProps {
    id: string;
    data: MarketDataItem;
}

export default function BusinessPage({ id, data }: BusinessPageProps) {
    const slug = id;
    const [business, setBusiness] = useState<Business | undefined>();

    useEffect(() => {
        const fetchBusiness = async () => {
            if (slug && typeof slug === 'string') {
                const businessData = await getBusiness(slug);
                setBusiness(businessData);
            }
        };

        fetchBusiness();

    }, [slug]);

    return (
        <div className="flex flex-col py-10 w-full max-w-7xl mx-auto">
            <div className="max-w-4xl md:w-4/5 mx-auto space-y-4 mt-4 px-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl/none">{business?.businessName}</h1>
                <PortableText value={business?.content ?? []} />
            </div>
            <div className="max-w-4xl rounded-xl 
                         p-2 mx-auto mt-10">
                <h2 className="mb-0">Nyckeltal</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-between bg-black bg-opacity-10 dark:bg-white dark:bg-opacity-10">
                    {data.data.length > 0 ? (
                        data.data.map((item, index) => (
                            <div key={index} className="m-1">
                                <p className="text-lg">{item.title}</p>
                                <p className="text-sm">{item.value}</p>
                            </div>
                        ))
                    ) : (
                        <p>Ingen data tillgänglig </p>
                    )}
                </div>
            </div>
            <NewsSlider type={business?.businessName} />
        </div>
    );
};

