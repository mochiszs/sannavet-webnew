"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Slide {
  url: string
  alt: string
}

interface ImageSliderProps {
  slides: Slide[]
}

export default function ImageSlider({ slides }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }

  // Auto slide
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(slideInterval)
  }, [currentIndex])

  return (
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
      <Image
        src={slides[currentIndex].url || "/placeholder.svg"}
        alt={slides[currentIndex].alt}
        fill
        className="object-cover"
        priority
      />

      {/* Left Arrow */}
      <div className="absolute top-1/2 left-4 -translate-y-1/2 cursor-pointer">
        <button
          onClick={prevSlide}
          className="p-2 bg-black/30 rounded-full text-white hover:bg-black/50 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
      </div>

      {/* Right Arrow */}
      <div className="absolute top-1/2 right-4 -translate-y-1/2 cursor-pointer">
        <button
          onClick={nextSlide}
          className="p-2 bg-black/30 rounded-full text-white hover:bg-black/50 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-3 h-3 rounded-full ${currentIndex === slideIndex ? "bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${slideIndex + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

