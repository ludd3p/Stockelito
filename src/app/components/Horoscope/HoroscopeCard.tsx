import Image from "next/image";
import { Horoscope } from "../../../../Types/SanityTypes";

const HoroscopeCard = (horoscope: Horoscope) => {
    return (
        <div className="flex flex-row justify-center items-center  bg-black bg-opacity-10 dark:bg-white dark:bg-opacity-10 rounded-xl 
                        h-40 w-5/6 md:w-3/4 lg:w-1/2 overflow-hidden px-3 py-3 gap-2">
            {horoscope.image && (
                <div className="hidden sm:flex flex-col justify-center items-center w-1/4 h-full">
                    <Image
                        src={horoscope.image}
                        width={150}
                        height={50}
                        alt="Stonks"
                    />
                </div>
            )}
            <div className="flex flex-col relative w-3/4 h-full items-center">
                <h1 className="text-xl lg:text-2xl">{horoscope.title}</h1>
                <p className="lg:text-l text-center">{horoscope.text}</p>
            </div>
        </div>
    )
}
export default HoroscopeCard;