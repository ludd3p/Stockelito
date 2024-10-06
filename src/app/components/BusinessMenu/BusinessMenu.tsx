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

    const handleMouseEnter = () => {
        setStartTransition(true);
    };


    return (
        <div className="w-full">
            <div className="items-center">
                <div className="flex justify-center items-center h-screen relative">
                    {/* Div to trigger hover */}
                    {!startTransition && (
                        <div
                            className={`fire-ball absolute w-36 h-36 bg-blue-500 rounded-full transition-opacity duration-1000 ease-in-out ${startTransition ? 'opacity-0' : 'opacity-50'}`}
                            style={{
                                top: '72.5%',
                                left: '50.5%',
                                transform: 'translate(-50%, -50%)',
                            }}
                            onMouseEnter={handleMouseEnter}
                        ></div>
                    )}

                    {businesses.map((business: Business, index: number) => {
                        const radius = 55; // Radius in percentage of the smaller dimension
                        const startAngle = 1.8 / Math.PI;
                        const endAngle = 0.8 * Math.PI;
                        const theta = startAngle + (endAngle - startAngle) * (index / (businesses.length - 1));

                        // Calculate final positions based on percentage of viewport width and height
                        const finalXPercent = 45 + radius * Math.cos(theta); // Centered horizontally
                        const tiltEffect = -5; // Smaller tilt for responsiveness
                        const finalYPercent = 23.5 + radius * Math.sin(theta) - Math.sin(index * Math.PI / (businesses.length - 1)) * tiltEffect;

                        // Initial positions for animation start
                        const initialXPercent = 50.5;  // Start near the center horizontally
                        const initialYPercent = 85;    // Just below the fire-ball


                        return (
                            <div
                                key={business._id}
                                className={`absolute w-12 h-12 rounded-full transition-all ease-out`}
                                style={{
                                    top: `${startTransition ? finalYPercent : initialYPercent}%`,
                                    left: `${startTransition ? finalXPercent : initialXPercent}%`,
                                    opacity: startTransition ? 1 : 0,
                                    transitionDuration: '1500ms',
                                    transitionProperty: 'top, left, opacity',
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
