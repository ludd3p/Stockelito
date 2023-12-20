'use client'
import { ThemeProvider } from "next-themes"
import Header from "./components/Header"
import TopPart from "./components/TopPart/TopPart"
import MiddlePart from "./components/MiddlePart/MiddlePart"
import Footer from "./components/Footer"
export default function Home() {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <Header />
      <main className="flex min-h-screen flex-col items-center py-10 max-w-7xl mx-auto">
        <TopPart />
        <MiddlePart />
        <Footer />
      </main>

    </ThemeProvider>
  )
}
