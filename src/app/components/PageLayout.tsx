'use client'
import { ThemeProvider } from "next-themes"
import Header from "./Header"
import Footer from "./Footer"



export default function PageLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <ThemeProvider defaultTheme="system" attribute="class">
                <Header />
                <main className="flex flex-col items-center py-10 w-full max-w-7xl mx-auto">
                    {children}
                </main>
                <Footer />
            </ThemeProvider>
        </div>
    )
}
