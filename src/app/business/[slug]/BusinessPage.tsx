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
        <div className="flex flex-col items-center py-10 w-full max-w-7xl mx-auto">
            <h1>{business?.businessName}</h1>
            <div className="max-w-4xl rounded-xl w-4/5 bg-black bg-opacity-10 dark:bg-white dark:bg-opacity-10 py-2 px-10 mb-10">
                <PortableText value={business?.content ?? []} />
            </div>
            <div className="grid grid-cols-4 max-w-4xl rounded-xl bg-black bg-opacity-10 dark:bg-white dark:bg-opacity-10 p-2">
                {data.data.length > 0 ? (
                    data.data.map((item, index) => (
                        <div key={index}>
                            <p className="text-lg">{item.title}</p>
                            <p>{item.value}</p>
                        </div>
                    ))
                ) : (
                    <p>No data available</p>
                )}
            </div>
            <NewsSlider type={business?.businessName} />
        </div>
    );
};

