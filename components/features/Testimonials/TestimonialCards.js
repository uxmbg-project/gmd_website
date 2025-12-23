// components/TestimonialSlider.jsx
"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import React, { useEffect } from "react";

const testimonials = [
  { name: "Suleman Yousaf", quote: "Did my car service, experience was great and prices are very economical as well." },
  { name: "Mary Yram", quote: "I’d like to extend my sincere thanks to the team at GMD Smash and Auto Repair for the excellent service and care in repairing my vehicle. The work was completed efficiently and to a high standard. I truly appreciate your professionalism and attention to detail. I would highly recommend this work shop. I will visit you again for sure." },
  { name: "Naveen Dhull", quote: "Thanks all staff. Great workshop with good management i had accident ,, car was damaged they fixed it very committed time as well so fast. Thanks." },
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
