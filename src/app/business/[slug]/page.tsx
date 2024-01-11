'use client'
import { useEffect, useState } from "react";
import { getBusiness } from "../../../../sanity/sanity-utils";
import { Business } from "../../../../Types/SanityTypes";
import { useParams } from "next/navigation";
import { PortableText } from "@portabletext/react";

const Page = () => {
    const { slug } = useParams();
    const [business, setBusiness] = useState<Business | undefined>();

    useEffect(() => {
        const fetchBusiness = async () => {        
            if (slug && typeof slug === 'string') {
                const businessData = await getBusiness(slug);
                console.log(businessData);
                setBusiness(businessData);
            }
        };

        fetchBusiness();

    }, [slug]);

    return (
        <div>
            <h1>Namn här</h1>
            <h1>{business?.businessName}</h1>
            <PortableText value={business?.content ?? []} />
        </div>
    );
};

export default Page;
