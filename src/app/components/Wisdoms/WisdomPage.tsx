import { NewsItem } from "../../../../Types/SanityTypes";
import { WisdomCard } from "./WisdomCard";

interface WisdomPageProps {
    wisdoms: NewsItem[];
}

export const WisdomPage = ({ wisdoms }: WisdomPageProps) => {

    return (
        <div className="pt-32 max-w-5xl">
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 md:p-8">
                <h1 className="text-4xl font-bold mb-6 text-center">Wisdoms</h1>
                <div className="flex flex-wrap justify-start -mx-4">
                    {wisdoms.map((wisdom) => (
                        <WisdomCard key={wisdom._id} wisdom={wisdom}></WisdomCard>
                    ))}
                </div>
            </div>
        </div>
    );
};