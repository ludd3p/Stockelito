import { useEffect, useState } from "react";
import { getHoroscope } from "../../../../sanity/sanity-utils";
import { Horoscope } from "../../../../Types/SanityTypes";

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
    <section className="w-full md:p-6 mt-16">
      <div className="container  max-w-3xl mx-auto px-2">
        <div className="flex flex-col gap-2">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl/none mb-0">Veckans horoskop</h2>
            <p className="text-gray-500 dark:text-gray-400 md:px-3 mt-0">{horoscope?.title}</p>
          </div>
          <div className="mx-auto max-w-2xl">
            <p>{horoscope?.text}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Horoscope;