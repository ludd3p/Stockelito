'use client'
import { ThemeProvider, useTheme } from "next-themes"
import Header from "./Header"
import Footer from "./Footer"
import { useEffect } from "react"



export default function PageLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const { theme, setTheme } = useTheme();
    useEffect(() => {
        setTheme('dark');
        localStorage.setItem('theme', 'dark');
    }, [setTheme]);
    return (
        <div>
            <ThemeProvider defaultTheme={theme} attribute="class">
                <Header />
                <main className="flex flex-col items-center w-full max-w-7xl mx-auto top-0">
                    {children}
                </main>
                <Footer />
            </ThemeProvider>
        </div>
    )
}
