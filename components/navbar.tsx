"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Menu } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute("href")
    if (href && href.startsWith("#")) {
      const targetId = href.substring(1)
      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <a href="#home" onClick={handleNavLinkClick} className="logo hover:scale-105 transition-transform duration-300">
        EVETER
      </a>
      <button className="menu-toggle" onClick={toggleMenu}>
        <Menu />
      </button>
      <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <a href="#home" onClick={handleNavLinkClick}>
          HOME
        </a>
        <a href="#case-study" onClick={handleNavLinkClick}>
          CASE STUDY
        </a>
        <a href="#testimonials" onClick={handleNavLinkClick}>
          TESTIMONIALS
        </a>
        <a href="#marquee-section" onClick={handleNavLinkClick}>
          COMMUNITY APPROVED
        </a>
        <a href="#portfolio" onClick={handleNavLinkClick}>
          PORTFOLIO
        </a>
        <a href="#contact" onClick={handleNavLinkClick}>
          CONTACT
        </a>
      </div>
    </nav>
  )
}

