import { useEffect, useState } from "react";
import { getHoroscope } from "../../../../sanity/sanity-utils";
import { Horoscope } from "../../../../Types/SanityTypes";
import HoroscopeCard from "./HoroscopeCard";

const Horoscope = () => {

    const [horoscope, setHoroscope] = useState<Horoscope>();

    useEffect(() => {
      const fetchHoroscope = async () => {
        const horoscopeData = await getHoroscope();
        setHoroscope(horoscopeData);
      };
  
      fetchHoroscope();
      
    }, []);
  

    return (
        <div className="flex flex-col w-full items-center mt-10">
            <div>Veckans horoskop</div>
            {horoscope && <HoroscopeCard {...horoscope} />}
        </div>

    )
}

export default Horoscope;