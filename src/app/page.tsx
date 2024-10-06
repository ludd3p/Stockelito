'use client'
import TopPart from "./components/BusinessMenu/BusinessMenu"
import News from "./components/News/News"
import Hero from "./components/Hero/Hero"
import { useEffect, useState } from "react"

export default function Home() {

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // This hook listens for window resize and checks the screen size
  useEffect(() => {
    const checkScreenSize = () => {
      const isSmall = window.innerWidth <= 1023; // 1024px width is typical for 13" devices
      setIsSmallScreen(isSmall);
    };

    // Check screen size on load and on resize
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);


  if (isSmallScreen) { return <div className="flex justify-center items-center h-[80vh] w-full text-2xl text-center">Stockelito does not currently support small devices</div> }

  return (
    <div className="flex flex-col items-center pb-10 w-full max-w-7xl mx-auto">
      <Hero />
      <News />
    </div>
  )
}