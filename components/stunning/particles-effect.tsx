"use client"

import { useRef, useEffect } from "react"

interface ParticlesEffectProps {
  density?: number
  size?: number
  className?: string
}

export default function ParticlesEffect({ density = 256, size = 1.5, className = "" }: ParticlesEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])

  interface Particle {
    x: number
    y: number
    vx: number
    vy: number
    size: number
    color: string
    alpha: number
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      initParticles()
    }

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = []
      for (let i = 0; i < density; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          size: Math.random() * size + 0.5,
          color: "#ffffff",
          alpha: Math.random() * 0.5 + 0.2,
        })
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -1
        }

        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -1
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.alpha})`
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    // Initialize
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Start animation
    const animationId = requestAnimationFrame(animate)

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [density, size])

  return <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full ${className}`} />
}

