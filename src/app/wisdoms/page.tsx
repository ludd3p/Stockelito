'use client'
import { useEffect, useState } from "react";
import { WisdomPage } from "../components/Wisdoms/WisdomPage";
import { NewsSliderProps } from "../components/News/NewsSlider";
import { getNewsPosts } from "../../../sanity/sanity-utils";


export default function Page() {
    const [wisdoms, setWisdoms] = useState([]);

    useEffect(() => {
        const fetchNewsPosts = async () => {
            const newsData = await getNewsPosts();
            setWisdoms(newsData);
        };

        fetchNewsPosts();
    }, [setWisdoms]);
    return <WisdomPage wisdoms={wisdoms} />;
}