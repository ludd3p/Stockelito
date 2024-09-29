import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import PageLayout from './components/PageLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Stockelito',
  description: 'Hand picked stocks',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  )
}
