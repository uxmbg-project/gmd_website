'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const HeadingWithTwoImages = ({
  heading,
  icon,
  points = [],
  image1,
  image2,
  alt1 = 'Image 1',
  alt2 = 'Image 2',
}) => {
  const images = [
    { src: image1, alt: alt1 },
    { src: image2, alt: alt2 },
  ].filter(img => img.src)

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (images.length < 2) return

    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">

        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <div className="flex items-center justify-center md:justify-start gap-3">
            {icon && <span className="text-4xl">{icon}</span>}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600">{heading}</h2>
          </div>

          <ul className="space-y-3">
            {points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm sm:text-base md:text-lg">
                <span className="flex-shrink-0 w-3 h-3 bg-red-500 rounded-full mt-2 animate-pulse"></span>
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Sliding Images */}
        <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0 relative">
          <AnimatePresence mode="wait">
            {images[currentIndex] && (
              <motion.img
                key={images[currentIndex].src}
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                initial={{ x: 200, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -200, opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] aspect-square rounded-xl object-cover shadow-2xl"
              />
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}

export default HeadingWithTwoImages
