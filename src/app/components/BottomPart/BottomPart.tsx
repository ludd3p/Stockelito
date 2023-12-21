import { useEffect, useState } from "react";
import BottomPartHoroscope from "./BottomPartHoroscope";
import { getHoroscope } from "../../../../sanity/sanity-utils";
import { Horoscope } from "../../../../Types/SanityTypes";

const BottomPart = () => {

    const [horoscope, setHoroscope] = useState<Horoscope>();

    useEffect(() => {
      const fetchHoroscope = async () => {
        const horoscopeData = await getHoroscope();
        setHoroscope(horoscopeData);
        console.log(horoscopeData)
      };
  
      fetchHoroscope();
      
    }, []);
  

    return (
        <div className="flex flex-col w-full items-center">
            <div>Veckans horoskop</div>
            {horoscope && <BottomPartHoroscope {...horoscope} />}
        </div>

    )
}

export default BottomPart;