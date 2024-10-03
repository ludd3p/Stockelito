import { Business } from "../../../../Types/SanityTypes";
import { getBusinesses } from "../../../../sanity/sanity-utils";
import BusinessMenuItem from "./BusinessMenuItem";
import { useEffect, useState } from "react";

const BusinessMenu = () => {
    const [businesses, setBusinesses] = useState<Business[]>([]);
    const [startTransition, setStartTransition] = useState(false); // State to trigger animation

    useEffect(() => {
        const fetchNewsPosts = async () => {
            const businessData = await getBusinesses();
            setBusinesses(businessData);
        };

        fetchNewsPosts();
    }, []);

    // Trigger transition
    const handleMouseEnter = () => {
        setStartTransition(true);
    };

    return (
        <div className="w-full" style={{ height: "85vh", marginTop: "10%" }}>
            <div className="items-center" style={{ marginTop: "84px" }}>
                <div className="flex justify-center items-center h-screen relative"
                    style={{ position: 'relative' }}>

                    {/*Div för att trigga hover*/}
                    <div
                        className={`fire-ball absolute w-36 h-36 bg-blue-500 rounded-full cursor-pointer transition-opacity duration-1000 ease-in-out ${startTransition ? 'opacity-0' : 'opacity-50'}`}
                        style={{
                            top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                        }}
                        onMouseEnter={handleMouseEnter}
                    >
                    </div>

                    {businesses.map((business: Business, index: number) => {
                        const radius = 750;
                        const startAngle = 1.8 / Math.PI;
                        const endAngle = 0.8 * Math.PI;
                        const theta = startAngle + (endAngle - startAngle) * (index / (businesses.length - 1));

                        const finalX = 600 + radius * Math.cos(theta);
                        const tiltEffect = -50;
                        const finalY = -150 + radius * Math.sin(theta) - Math.sin(index * Math.PI / (businesses.length - 1)) * tiltEffect + 25;

                        const initialX = 650;
                        const initialY = 700;

                        return (
                            <div
                                key={business._id}
                                className={`absolute w-12 h-12 rounded-full transition-all ease-out`}
                                style={{
                                    top: `${startTransition ? finalY : initialY}px`,
                                    left: `${startTransition ? finalX : initialX}px`,
                                    opacity: startTransition ? 1 : 0,
                                    transitionDuration: '1500ms',
                                    transitionProperty: 'top, left, opacity'
                                }}
                            >
                                <BusinessMenuItem {...business} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default BusinessMenu;
