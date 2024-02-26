'use client'
import { useEffect, useState } from "react";
import { getNewsPost } from "../../../../sanity/sanity-utils";
import { NewsItem } from "../../../../Types/SanityTypes";
import { useParams } from "next/navigation";
import { PortableText } from "@portabletext/react";
import './styles.css'

const Page = () => {
    const { slug } = useParams();
    const [news, setNews] = useState<NewsItem | undefined>();

    useEffect(() => {
        const fetchNews = async () => {        
            if (slug && typeof slug === 'string') {
                const newsData = await getNewsPost(slug);
                setNews(newsData);
            }
        };

        fetchNews();

    }, [slug]);

    return (
        <div className="flex flex-col items-center pt-16 pb-4 w-full max-w-7xl mx-auto">
            <h1>{news?.newsTitle}</h1>
            <div className="max-w-4xl w-4/5 px-10 space-y-4">
                <PortableText value={news?.content ?? []} />
            </div>
            
        </div>
    );
};

export default Page;
