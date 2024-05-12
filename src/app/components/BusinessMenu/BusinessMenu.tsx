import { Business } from "../../../../Types/SanityTypes";
import { getBusinesses } from "../../../../sanity/sanity-utils";
import BusinessMenuItem from "./BusinessMenuItem";
import { useEffect, useState } from "react";


const BusinessMenu = () => {
    const [businesses, setBusinesses] = useState([]);

    useEffect(() => {
        const fetchNewsPosts = async () => {
            const businessData = await getBusinesses();
            setBusinesses(businessData);
        };

        fetchNewsPosts();
    }, []);


    return (
        <div className="w-full" style={{ height: "85vh", marginTop: "10%" }}>
            <div className="items-center" style={{ marginTop: "84px" }}>
                <div className="flex justify-center items-center h-screen relative" >
                    {businesses.map((business: Business, index: number) => {
                        const radius = 750; // Large radius for a wide spread
                        // Start and end angles to create an arc covering 60% of a full circle
                        const startAngle = 1.8 / Math.PI; // Starts just after the top right
                        const endAngle = 0.8 * Math.PI;
                        const theta = startAngle + (endAngle - startAngle) * (index / (businesses.length - 1));
                        // Calculate x and y positions based on the theta angle
                        const x = 600 + radius * Math.cos(theta);
                        // Increase the tilt effect to make it more pronounced
                        const tiltEffect = -50; // Increased tilt effect for greater visual impact
                        // Adjust y for a more dramatic tilt, with more influence from the sine function
                        const y = -150 + radius * Math.sin(theta) - Math.sin(index * Math.PI / (businesses.length - 1)) * tiltEffect;
                        return (
                            <div key={business._id} className={`absolute w-12 h-12 rounded-full`} style={{
                                top: `${y}px`, left: `${x}px`
                            }}>
                                <BusinessMenuItem  {...business} />
                            </div>
                        )
                    }
                    )}
                </div>
            </div>
        </div >
    )
}
export default BusinessMenu;