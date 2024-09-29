import { useEffect, useState } from "react";
import { getHoroscope } from "../../../../sanity/sanity-utils";
import { Horoscope } from "../../../../Types/SanityTypes";
import Image from "next/image";

const HoroscopeComponent = () => {

  const [horoscopeItem, setHoroscope] = useState<Horoscope>();

  useEffect(() => {
    const fetchHoroscope = async () => {
      const horoscopeData = await getHoroscope();
      setHoroscope(horoscopeData);
    };

    fetchHoroscope();

  }, []);


  return (
    <section className="w-full md:p-6 mt-32">
      <div className="container">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-1/2 flex justify-center items-center">
              <Image src={horoscopeItem?.image || ""} alt="Avatar" width={300} height={300} />
            </div>
            <div className="md:w-1/2 space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl mb-0">Månadens horoskop</h2>
              <p className="text-gray-500 dark:text-gray-400 mt-0">{horoscopeItem?.title}</p>
              <p>{horoscopeItem?.text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HoroscopeComponent;