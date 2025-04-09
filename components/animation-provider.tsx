"use client"

import { useEffect } from "react"

export default function AnimationProvider() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }
      })
    }, observerOptions)

    document.querySelectorAll(".service-card, .portfolio-item, .testimonial-card").forEach((el) => {
      observer.observe(el)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return null
}

