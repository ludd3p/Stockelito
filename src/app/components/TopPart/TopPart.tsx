import { Business } from "../../../../Types/SanityTypes";
import { getBusiness } from "../../../../sanity/sanity-utils";
import TopPartItem from "./TopPartItem";
import { useEffect, useState } from "react";
const TopPart = () => {
    const [business, setBusiness] = useState([]);

    useEffect(() => {
        const fetchNewsPosts = async () => {
            const businessData = await getBusiness();
            setBusiness(businessData);
        };

        fetchNewsPosts();
    }, []);

    const itemsForRow1 = business.slice(0, 5);
    const itemsForRow2 = business.slice(5, 9);
    const itemsForRow3 = business.slice(9, 14);

    return (
        <div className="w-full items-center">
            <div className="grid text-center lg:w-full  lg:grid-cols-5 place-items-center">
                {itemsForRow1.map((business: Business) => (
                    <TopPartItem key={business._id} {...business} />
                ))}
            </div>
            <div className="grid text-center lg:w-full  lg:grid-cols-4 place-items-center px-[10%]">
                {itemsForRow2.map((business: Business) => (
                    <TopPartItem key={business._id} {...business} />
                ))}
            </div>
            <div className="grid text-center lg:w-full lg:grid-cols-5 place-items-center">
                {itemsForRow3.map((business: Business) => (
                    <TopPartItem key={business._id} {...business} />
                ))}
            </div>
        </div>
    )

}
export default TopPart;