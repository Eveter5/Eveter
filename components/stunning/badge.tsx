import type { ReactNode } from "react"

interface BadgeProps {
  children: ReactNode
  className?: string
}

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <div
      className={`
      inline-flex items-center px-3 py-1 
      rounded-full text-xs font-medium
      bg-white/10 text-white
      backdrop-blur-md border border-white/20
      ${className}
    `}
    >
      {children}
    </div>
  )
}

