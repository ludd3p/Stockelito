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
                className="bg-white p-6 rounded-lg shadow-lg w-80 h-96 flex flex-col relative"
                style={{
                    backgroundImage: 'url("/tarot-card-light.svg")',
                    backgroundSize: 'contain', // Ensures the image covers the entire div
                    backgroundPosition: 'center', // Centers the image within the div
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
