// components/TestimonialSlider.jsx
"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import React, { useEffect } from "react";

const testimonials = [
  { name: "John Doe", quote: "Fantastic service! My car has never run smoother. Highly recommend!" },
  { name: "Jane Smith", quote: "Great staff and prompt repairs — they treated my car like their own." },
  { name: "Alice Johnson", quote: "Very professional and transparent. I appreciated the updates and quality of work." },
];

export default function TestimonialSlider() {
  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: { perView: 1, spacing: 0 },
  });

  // If content dynamically changes, update slider
  useEffect(() => {
    slider.current?.update();
  }, [slider]);

  return (
    <div className="relative max-w-3xl mx-auto px-4">
      <div ref={sliderRef} className="keen-slider">
        {testimonials.map((t, idx) => (
          <div key={idx} className="keen-slider__slide w-full flex items-center justify-center p-6 sm:p-12">
            <div className=" rounded-xl  p-8 text-center">
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-4">“{t.quote}”</p>
              <h4 className="text-xl font-semibold text-red-600">— {t.name}</h4>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => slider.current?.prev()}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-700/80 hover:bg-white dark:hover:bg-gray-600 p-2 rounded-full shadow-md"
      >
        &lt;
      </button>
      <button
        onClick={() => slider.current?.next()}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-700/80 hover:bg-white dark:hover:bg-gray-600 p-2 rounded-full shadow-md"
      >
        &gt;
      </button>
    </div>
  );
}
