import { NewsItem } from "../../../../Types/SanityTypes";
import Image from "next/image";

export const WisdomCard = ({ wisdom }: { wisdom: NewsItem }) => {
    const createdAt = new Date(wisdom._createdAt);
    const formattedDate = createdAt.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    });

    const formattedTime = createdAt.toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
    });
    return (
        <div
            key={wisdom._id}
            className="w-full sm:w-1/2 lg:w-1/3 p-4 flex justify-center"
        >
            <div
                className="p-6 rounded-lg flex flex-col relative"
                style={{
                    backgroundImage: 'url("/tarot-card-light.svg")',
                    backgroundSize: 'cover', // Ensures the image covers the entire div while maintaining its aspect ratio
                    backgroundPosition: 'center', // Centers the image within the div
                    textShadow: "-1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white, 1px 1px 0 white",
                    width: '100%', // Make the card fill the entire width of its parent container
                    height: "450px", // Set a fixed height, or adjust as necessary for your design
                    maxWidth: '300px', // Ensures the card doesn’t get too large on bigger screens
                    backgroundRepeat: 'no-repeat' // Prevents the background from repeating
                }}
            >
                <h2 className="text-2xl font-bold mb-4 text-black">{wisdom.newsTitle}</h2>
                <p className="text-black flex-grow">{wisdom.newsText}</p>
                <div>
                    <p className="ml-auto text-sm w-fit text-gray-500">Skrivet {formattedDate} kl. {formattedTime}</p>
                </div>
                {/* Check icon if fulfilled */}
                {wisdom.isFulfilled && (
                    <div
                        style={{
                            width: "30px",
                            height: "30px",
                            position: "absolute",
                            top: -15,
                            right: -15,
                        }}
                    >
                        <Image
                            width="30"
                            height="30"
                            alt="check icon"
                            src="/check-icon.png"
                        />
                    </div>
                )}
            </div>
        </div>
    );
};