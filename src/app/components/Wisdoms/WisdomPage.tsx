import Image from "next/image";
import { NewsItem } from "../../../../Types/SanityTypes";

interface WisdomPageProps {
    wisdoms: NewsItem[];
}

export const WisdomPage = ({ wisdoms }: WisdomPageProps) => {
    return (
        <div className="pt-16 max-w-5xl">
            <h1 className="text-4xl font-bold mb-6 text-center">Wisdoms</h1>
            <div className="flex flex-wrap justify-start -mx-4">
                {wisdoms.map((wisdom: NewsItem) => (
                    <div
                        key={wisdom._id}
                        className="w-full sm:w-1/2 lg:w-1/3 p-4 flex justify-center"
                    >
                        <div className="bg-white p-6 rounded-lg shadow-lg w-80 h-96 flex flex-col" style={{ position: 'relative' }}>
                            <h2 className="text-2xl font-bold mb-4 text-black">{wisdom.newsTitle}</h2>
                            <p className="text-black flex-grow">{wisdom.newsText}</p>
                            {wisdom.isFulfilled && <div style={{ width: "30px", height: "30px", position: "absolute", top: -15, right: -15 }}><Image width="30" height="30" alt="noreferer" src="/magic-balls.png" /></div>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};