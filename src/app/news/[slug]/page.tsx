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
        <div className="flex flex-col items-center py-10 w-full max-w-7xl mx-auto">
            <h1>{news?.newsTitle}</h1>
            <div className="max-w-4xl rounded-xl w-4/5 bg-black bg-opacity-10 dark:bg-white dark:bg-opacity-10 py-2 px-10">
                <PortableText value={news?.content ?? []} />
            </div>
            
        </div>
    );
};

export default Page;
