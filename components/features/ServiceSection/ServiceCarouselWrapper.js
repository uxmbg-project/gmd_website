"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function ServicesCarousel({ children }) {
  const [sliderRef] = useKeenSlider({
    loop: true,
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 20 },
      },
    },
    slides: { perView: 1, spacing: 10 },
  });

  return (
    <div ref={sliderRef} className="keen-slider py-6">
      {children}
    </div>
  );
}
