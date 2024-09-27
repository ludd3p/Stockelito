'use client'
import { useEffect, useState } from "react";
import { getBusiness } from "../../../../sanity/sanity-utils";
import { Business } from "../../../../Types/SanityTypes";
import { PortableText } from "@portabletext/react";
import './styles.css';
import NewsSlider from "@/app/components/News/NewsSlider";
import { MarketDataItem } from "../../../../data/scraper";
import Image from "next/image";
import TwitterTimeline from "@/app/components/TwitterTimeline/TwitterTimeline";
import { TwitterSpecific } from "@/app/components/TwitterSpecifik/TwitterSpecific";
import dynamic from "next/dynamic";
import { SymbolOverview } from "react-ts-tradingview-widgets";

interface BusinessPageProps {
    id: string;
    data: MarketDataItem;
}

const SymbolOverviewNoSSR = dynamic(
    () => import("react-ts-tradingview-widgets").then((w) => w.SymbolOverview),
    {
        ssr: false,
    }
);

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


    if (!business) return(
        <div className="mt-16 w-full text-center">No bizniz</div>
        );

    return (

        <div className="flex mt-12 w-full">


            <div className="w-1/2 p-4">
                <div className="mb-4">
                    <div className="flex gap-4 items-center">
                        <Image width={120} height={120} src={business?.businessLogo || "/magic-balls.png"} alt="" />
                        <h2 className="text-xl font-bold mb-0">{`${business?.businessName} (${business?.businessTicker})`}</h2>
                    </div>
                    <p>{business?.businessText}</p>
                </div>
                <div className="mb-4">
                {business?.tradingViewSymbol && (
                    <SymbolOverview 
                        width="100%"
                        colorTheme="dark"
                        chartType="area"
                        downColor="#800080"
                        borderDownColor="#800080"
                        wickDownColor="#800080"
                        dateFormat="dd MMM 'yy"
                        timeHoursFormat="24-hours"
                        symbols={[
                            [business.tradingViewSymbol]
                        ]} />
                        )}

                    <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-4 justify-between bg-black bg-opacity-10 dark:bg-white dark:bg-opacity-10 max-w-4xl rounded-xl 
                         p-2 mx-auto mt-10">
                        {data.data.length > 0 ? (
                            data.data.map((item, index) => (
                                <div key={index} className="m-2">
                                    <p className="text-lg">{item.title}</p>
                                    <p className="text-sm">{item.value}</p>
                                </div>
                            ))
                        ) : (
                            <p>Ingen data tillgänglig </p>
                        )}
                    </div>
                </div>
                <div className="mb-4">
                    <h2 className="text-lg font-bold">Company Vision</h2>
                    <p>Visions and Goals</p>
                </div>
                <div className="mb-4">
                    <h2 className="text-lg font-bold">Key Statistics</h2>
                    <p>Important statistics.</p>
                </div>
                <div className="mb-4">
                    <h2 className="text-lg font-bold">Company Information</h2>
                    <PortableText value={business?.content ?? []} />
                </div>
            </div>


            <div className="w-1/2 mt-2">
                <div className="space-y-4" >
                    {business?.twitterTimelineUrl
                        ?
                        <TwitterTimeline twitterUrl={business?.twitterTimelineUrl || ""} />
                        :
                        <TwitterSpecific twitterIds={business.twitterIds || []} />}

                </div>
            </div>
        </div >
        //     <div className="max-w-4xl rounded-xl 
        //                  p-2 mx-auto mt-10">
        //         <h2 className="mb-0">Nyckeltal</h2>
        //        
        //     </div>
        //     <NewsSlider type={business?.businessName} />
        // </div>
    );
};

