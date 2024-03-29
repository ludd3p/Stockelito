import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="w-full py-16" style={{ position: "absolute", zIndex: -1, height: "100vh",backgroundImage:"url('https://i.imgur.com/TbV6yHt.png')",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundPosition:"bottom" }}>
            <div className="container px-4 mx-auto flex flex-col lg:flex-row items-center justify-center lg:gap-12">
                {/* <Image
                    alt="Hero"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom w-full lg:w-1/2 lg:aspect-square lg:order-last"
                    height="550"
                    src="/Stonks_emoji.svg"
                    width="550"
                /> */}
                {/* <div className="flex flex-col justify-center space-y-4 lg:w-1/2 mt-3">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
                            Framtidens företag handplockade för dig
                        </h1>
                        <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                            Ta chansen att lära dig om framtidens vinnare, vi delar med oss av exklusiva intervjuer och analyser för att ge dig största möjliga stonks.
                        </p>
                    </div>
                    <div className="flex flex-col xs:flex-row gap-2">
                        <Link
                            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                            href="/business/spgarn+ab"
                        >
                            Köp SPGARN AB
                        </Link>
                        <Link
                            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                            href="/business/luddito"
                        >
                            Köp Luddito
                        </Link>
                    </div>
                </div> */}
            </div>
        </section>
    );
}
