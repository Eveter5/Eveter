"use client"

import type { ReactNode } from "react"

interface GlassBorderButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
}

export default function GlassBorderButton({ children, className = "", onClick }: GlassBorderButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        relative px-6 py-3 rounded-full 
        bg-white/5
        text-white font-medium
        backdrop-blur-md
        border border-white/20
        shadow-lg
        transition-all duration-500
        hover:shadow-white/20 hover:border-white/40
        hover:scale-105
        active:scale-95
        ${className}
      `}
      style={{
        transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
    </button>
  )
}

