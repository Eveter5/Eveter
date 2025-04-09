"use client"

import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface VerticalVideoCarouselProps {
  videos: {
    id: string
    title: string
    src: string
  }[]
}

export default function VerticalVideoCarousel({ videos }: VerticalVideoCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Center the first video on initial load and when window resizes
  useEffect(() => {
    const handleResize = () => centerVideo(activeIndex)

    // Initial centering with a slight delay to ensure DOM is ready
    const timer = setTimeout(() => centerVideo(0), 100)

    // Add resize listener
    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      clearTimeout(timer)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Update the centerVideo function to have bouncy scrolling
  const centerVideo = (index: number) => {
    if (isAnimating) return

    const container = scrollContainerRef.current
    if (!container) return

    const videoElements = container.querySelectorAll(".vertical-video-item")
    if (!videoElements.length || !videoElements[index]) return

    setIsAnimating(true)

    const videoElement = videoElements[index] as HTMLElement

    // Get container and video dimensions
    const containerWidth = container.clientWidth
    const videoWidth = videoElement.offsetWidth

    // Calculate the exact position to center the video
    const scrollPosition = videoElement.offsetLeft - (containerWidth - videoWidth) / 2

    // Scroll to position with enhanced smooth behavior
    container.scrollTo({
      left: Math.max(0, scrollPosition),
      behavior: "smooth",
    })

    setActiveIndex(index)

    // Update arrow visibility and reset animation state
    setTimeout(() => {
      setShowLeftArrow(container.scrollLeft > 10)
      setShowRightArrow(container.scrollLeft + container.clientWidth < container.scrollWidth - 10)
      setIsAnimating(false)
    }, 800) // Match this with the animation duration
  }

  const scroll = (direction: "left" | "right") => {
    if (isAnimating) return

    const newIndex = direction === "left" ? Math.max(0, activeIndex - 1) : Math.min(videos.length - 1, activeIndex + 1)
    centerVideo(newIndex)
  }

  const handleScroll = () => {
    if (isAnimating) return

    const container = scrollContainerRef.current
    if (!container) return

    // Update arrow visibility
    setShowLeftArrow(container.scrollLeft > 10)
    setShowRightArrow(container.scrollLeft + container.clientWidth < container.scrollWidth - 10)

    // Find which video is closest to the center
    const containerCenter = container.scrollLeft + container.clientWidth / 2
    const videoElements = container.querySelectorAll(".vertical-video-item")

    let closestIndex = 0
    let closestDistance = Number.POSITIVE_INFINITY

    videoElements.forEach((video, index) => {
      const videoElement = video as HTMLElement
      const videoCenter = videoElement.offsetLeft + videoElement.offsetWidth / 2
      const distance = Math.abs(containerCenter - videoCenter)

      if (distance < closestDistance) {
        closestDistance = distance
        closestIndex = index
      }
    })

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex)
    }
  }

  return (
    <div className="relative w-full my-8 overflow-hidden">
      {/* Navigation Arrows */}
      {showLeftArrow && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-30 bg-black rounded-full p-3 text-white hover:bg-black/90 transition-all"
          aria-label="Previous video"
          disabled={isAnimating}
        >
          <ChevronLeft size={24} className="text-white" />
        </button>
      )}

      {showRightArrow && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-30 bg-black rounded-full p-3 text-white hover:bg-black/90 transition-all"
          aria-label="Next video"
          disabled={isAnimating}
        >
          <ChevronRight size={24} className="text-white" />
        </button>
      )}

      {/* Video Container */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto overflow-y-hidden scrollbar-hide py-10 snap-x snap-mandatory"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          scrollSnapType: "x mandatory",
        }}
        onScroll={handleScroll}
      >
        {videos.map((video, index) => (
          <div key={video.id} className="flex-shrink-0 min-w-full flex justify-center items-center px-4 snap-center">
            {/* Update the video item class to use the bouncy animation */}
            <div
              className={`vertical-video-item w-[60%] md:w-[45%] lg:w-[35%] xl:w-[30%] rounded-lg transition-all duration-800 relative ${
                index === activeIndex ? "scale-100 opacity-100 z-10" : "scale-95 opacity-80 z-0"
              }`}
              style={{
                boxShadow:
                  index === activeIndex
                    ? "0 0 25px 5px rgba(0, 255, 76, 0.6), 0 0 40px 10px rgba(0, 255, 76, 0.3)"
                    : "0 0 15px 3px rgba(0, 255, 76, 0.3), 0 0 30px 5px rgba(0, 255, 76, 0.15)",
                transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
              onClick={() => centerVideo(index)}
            >
              {/* Ambient glow effect */}
              <div
                className="absolute inset-0 -z-10 blur-xl opacity-30 rounded-3xl"
                style={{
                  background: "radial-gradient(circle at center, rgba(0, 255, 76, 0.5) 0%, rgba(0, 255, 76, 0) 70%)",
                  transform: "scale(1.2)",
                }}
              ></div>

              {/* Fixed aspect ratio container */}
              <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
                <iframe
                  src={video.src}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

