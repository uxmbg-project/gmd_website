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

  useEffect(() => {
    slider.current?.update();
  }, [slider]);

  return (
    <div className="relative max-w-3xl mx-auto px-4">
      <div ref={sliderRef} className="keen-slider">
        {testimonials.map((t, idx) => (
          <div key={idx} className="keen-slider__slide w-full flex flex-col items-center justify-center p-6 sm:p-12">
            {/* Avatar from the web */}
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-4">
              <img
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=E62600&color=fff&size=128`}
                alt={t.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Quote Card */}
            <div className="rounded-xl p-8 text-center">
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-700 mb-4">“{t.quote}”</p>
              <h4 className="text-xl font-semibold text-red-600">— {t.name}</h4>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => slider.current?.prev()}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white/80 dark:bg-gray-700/80 hover:bg-white dark:hover:bg-gray-700/80 p-2 rounded-full shadow-md"
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
