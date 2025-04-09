"use client"

import type React from "react"

import { useEffect, useState } from "react"

interface LightBarProps {
  theme?: string
  className?: string
}

export default function LightBar({ theme = "emerald", className = "" }: LightBarProps) {
  const [colors, setColors] = useState({
    color500: "#10b981", // emerald-500 default
    color400: "#34d399", // emerald-400 default
  })

  useEffect(() => {
    // This would normally format colors from a theme, but we'll use hardcoded values for now
    const formatThemeColors = (theme: string) => {
      if (theme === "emerald") {
        return {
          "500": "#10b981",
          "400": "#34d399",
        }
      } else if (theme === "green") {
        return {
          "500": "#00ff4c",
          "400": "#4ade80",
        }
      }
      // Default to emerald
      return {
        "500": "#10b981",
        "400": "#34d399",
      }
    }

    const themeColors = formatThemeColors(theme)
    setColors({
      color500: themeColors["500"],
      color400: themeColors["400"],
    })
  }, [theme])

  return (
    <div
      className={`light-bar relative flex min-h-screen flex-col items-center justify-center bg-black overflow-hidden z-0 ${className}`}
    >
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        {/* Left gradient */}
        <div
          className="absolute inset-auto right-1/2 h-56 w-[30rem] bg-gradient-conic from-emerald-500 via-black to-transparent text-white [--conic-position:from_70deg_at_center_top]"
          style={
            {
              "--tw-gradient-from": `${colors.color500} var(--tw-gradient-from-position)`,
            } as React.CSSProperties
          }
        />

        {/* Right gradient */}
        <div
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-black to-emerald-500 text-white [--conic-position:from_290deg_at_center_top]"
          style={
            {
              "--tw-gradient-to": `${colors.color500} var(--tw-gradient-to-position)`,
            } as React.CSSProperties
          }
        />

        {/* Middle blur */}
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl" />

        {/* Backdrop blur */}
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />

        {/* Top glow */}
        <div
          className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full opacity-50 blur-3xl"
          style={{ backgroundColor: colors.color500 }}
        />

        {/* Bottom glow */}
        <div
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full blur-2xl"
          style={{ backgroundColor: colors.color400 }}
        />

        {/* Thin line */}
        <div
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] blur-sm"
          style={{ backgroundColor: colors.color400 }}
        />

        {/* Bottom mask */}
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-black" />
      </div>
    </div>
  )
}

