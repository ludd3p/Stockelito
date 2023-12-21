import Image from "next/image";

const BottomPartHoroscope = () => {
    return (
        <div className="flex flex-row justify-center items-center  bg-zinc-300 text-black rounded-xl 
                        h-40 w-4/5 lg:w-2/5 overflow-hidden px-3 py-3 ">
            <div className="flex flex-col justify-center items-center w-1/4 h-full">
                <Image
                    src="/stonks.jpg"
                    width={150}
                    height={50}
                    alt="Stonks"
                />
            </div>
            <div className="flex flex-col relative w-3/4 h-full items-center">
                <h1 className="text-xl lg:text-2xl">Horoskop</h1>
                <p className="lg:text-[18px]">Veckans horoskop är sälj smöret</p>
            </div>
        </div>

    )
}
export default BottomPartHoroscope;