'use client'
import TopPart from "./components/BusinessMenu/BusinessMenu"
import News from "./components/News/News"
import Horoscope from "./components/Horoscope/Horoscope"
import Hero from "./components/Hero/Hero"

export default function Home() {

  return (
    <div className="flex flex-col items-center pb-10 w-full max-w-7xl mx-auto">
      <Hero />
      <TopPart />
      <Horoscope />
      <News />
    </div>
  )
}