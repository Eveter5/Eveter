"use client"

import type { ReactNode } from "react"

interface TyndallEffectProps {
  children: ReactNode
  particles?: ReactNode
  className?: string
}

export default function TyndallEffect({ children, particles, className = "" }: TyndallEffectProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {children}
      {particles}
    </div>
  )
}

