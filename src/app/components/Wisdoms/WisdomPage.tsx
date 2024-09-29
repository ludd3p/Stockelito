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
                    ))}
                </div>
            </div>
        </div>
    );
};