'use client'
import { ThemeProvider } from "next-themes"
import Header from "./components/Header"
import TopPart from "./components/TopPart/TopPart"
import Footer from "./components/Footer"
import News from "./components/News/News"
import Horoscope from "./components/Horoscope/Horoscope"
export default function Home() {
  return (
    <div className="flex flex-col items-center py-10 w-full max-w-7xl mx-auto">
        <TopPart />
        <Horoscope />
        <News />
    </div>
  )
}
