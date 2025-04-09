"use client"

import { useRef, useEffect } from "react"

interface VolumetricLightProps {
  className?: string
  intensity?: number
  angle?: number
}

export default function VolumetricLight({ className = "", intensity = 0.3, angle = 45 }: VolumetricLightProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      drawLight()
    }

    // Draw the volumetric light
    const drawLight = () => {
      const width = canvas.width
      const height = canvas.height

      // Clear canvas
      ctx.clearRect(0, 0, width, height)

      // Create gradient for the light beam
      const angleRad = (angle * Math.PI) / 180
      const beamLength = Math.sqrt(width * width + height * height)
      const startX = 0
      const startY = 0
      const endX = startX + Math.cos(angleRad) * beamLength
      const endY = startY + Math.sin(angleRad) * beamLength

      const gradient = ctx.createLinearGradient(startX, startY, endX, endY)
      gradient.addColorStop(0, `rgba(255, 255, 255, ${intensity})`)
      gradient.addColorStop(0.5, `rgba(255, 255, 255, ${intensity * 0.5})`)
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)")

      // Draw the light beam
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.moveTo(startX, startY)
      ctx.lineTo(width, 0)
      ctx.lineTo(0, height)
      ctx.closePath()
      ctx.fill()

      // Add some noise to the beam for texture
      for (let i = 0; i < 100; i++) {
        const x = Math.random() * width * 0.8
        const y = Math.random() * height * 0.5
        const size = Math.random() * 2 + 0.5
        const alpha = Math.random() * 0.05 + 0.02

        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Initialize
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [intensity, angle])

  return <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full pointer-events-none ${className}`} />
}

