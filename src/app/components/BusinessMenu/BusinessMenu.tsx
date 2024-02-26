import { Business } from "../../../../Types/SanityTypes";
import { getBusinesses } from "../../../../sanity/sanity-utils";
import BusinessMenuItem from "./BusinessMenuItem";
import { useEffect, useState } from "react";
const BusinessMenu = () => {
    const [business, setBusiness] = useState([]);

    useEffect(() => {
        const fetchNewsPosts = async () => {
            const businessData = await getBusinesses();
            setBusiness(businessData);
        };

        fetchNewsPosts();
    }, []);

    const itemsForRow1 = business.slice(0, 5);
    const itemsForRow2 = business.slice(5, 9);
    const itemsForRow3 = business.slice(9, 14);

    return (
        <div className="w-full">
            <h1 className="w-fit ml-[5%] text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl/none mb-2">Våra favoriter</h1>
            <div className="items-center">
                <div className="grid text-center w-full  grid-cols-5 place-items-center">
                    {itemsForRow1.map((business: Business) => (
                        <BusinessMenuItem key={business._id} {...business} />
                    ))}
                </div>
                <div className="grid text-center w-full  grid-cols-4 place-items-center px-[10%]">
                    {itemsForRow2.map((business: Business) => (
                        <BusinessMenuItem key={business._id} {...business} />
                    ))}
                </div>
                <div className="grid text-center w-full grid-cols-5 place-items-center">
                    {itemsForRow3.map((business: Business) => (
                        <BusinessMenuItem key={business._id} {...business} />
                    ))}
                </div>
            </div>
        </div>
    )

}
export default BusinessMenu;