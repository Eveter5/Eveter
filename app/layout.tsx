import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Eveter - Professional Video Editing",
  description: "Turn raw footage into cinematic masterpiece with expert editing!",
  icons: {
    icon: "/logo-bg.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet" />
        </head>
        <body className={`${poppins.className} flex flex-col min-h-screen`} >
          <Navbar />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </body>
    </html>
  )
}



import './globals.css'
