"use client"

import type React from "react"

import { Twitter, Youtube } from "lucide-react"

export default function Footer() {
  const scrollToHome = (e: React.MouseEvent) => {
    e.preventDefault()
    const homeSection = document.getElementById("home")
    if (homeSection) {
      homeSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  return (
    <footer>
      <a
        href="#home"
        onClick={scrollToHome}
        className="logo hover:scale-105 transition-transform duration-300"
        style={{ display: "inline-block" }}
      >
        EVETER
      </a>
      <div className="social-links">
        <a href="https://x.com/EveterVideo" target="_blank" rel="noopener noreferrer">
          <Twitter />
        </a>
        <a href="https://www.youtube.com/@EveterVideoEditor" target="_blank" rel="noopener noreferrer">
          <Youtube />
        </a>
      </div>
      <p>&copy; 2025 Eveter. All rights reserved.</p>
    </footer>
  )
}

