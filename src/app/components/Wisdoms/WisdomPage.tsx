import Image from "next/image";
import { NewsItem } from "../../../../Types/SanityTypes";

interface WisdomPageProps {
    wisdoms: NewsItem[];
}

export const WisdomPage = ({ wisdoms }: WisdomPageProps) => {
    return (
        <div className="pt-32 max-w-5xl">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 md:p-8">
                <h1 className="text-4xl font-bold mb-6 text-center">Wisdoms</h1>
                <div className="flex flex-wrap justify-start -mx-4">
                    {wisdoms.map((wisdom: NewsItem) => (
                        <div
                            key={wisdom._id}
                            className="w-full sm:w-1/2 lg:w-1/3 p-4 flex justify-center"
                        >
                            <div className="bg-white p-6 rounded-lg shadow-lg w-80 h-96 flex flex-col relative">
                                {/* Top-left image */}
                                <div className="absolute -top-4 -left-4 w-10 h-10">
                                    <Image width="40" height="40" alt="corner image 1" src="tarot-card-dark.svg" />
                                </div>

                                {/* Top-right image */}
                                <div className="absolute -top-4 -right-4 w-10 h-10">
                                    <Image width="40" height="40" alt="corner image 2" src="tarot-card-dark.svg" />
                                </div>

                                {/* Bottom-left image */}
                                <div className="absolute -bottom-4 -left-4 w-10 h-10">
                                    <Image width="40" height="40" alt="corner image 3" src="tarot-card-dark.svg" />
                                </div>

                                {/* Bottom-right image */}
                                <div className="absolute -bottom-4 -right-4 w-10 h-10">
                                    <Image width="40" height="40" alt="corner image 4" src="tarot-card-dark.svg" />
                                </div>

                                <h2 className="text-2xl font-bold mb-4 text-black">{wisdom.newsTitle}</h2>
                                <p className="text-black flex-grow">{wisdom.newsText}</p>

                                {/* Check icon if fulfilled */}
                                {wisdom.isFulfilled && (
                                    <div style={{ width: "30px", height: "30px", position: "absolute", top: -15, right: -15 }}>
                                        <Image width="30" height="30" alt="noreferer" src="/check-icon.png" />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};