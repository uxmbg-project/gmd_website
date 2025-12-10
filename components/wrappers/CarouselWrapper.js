"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function CarouselWrapper({ children }) {
  const [sliderRef] = useKeenSlider({
    loop: true,

    breakpoints: {
      "(min-width: 480px)": {
        slides: { perView: 1.3, spacing: 12 },
      },
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 20 },
      },
      "(min-width: 1280px)": {
        slides: { perView: 4, spacing: 20 },
      },
    },

    slides: { perView: 1, spacing: 10 },
  });

  return (
    <div ref={sliderRef} className="keen-slider">
      {children}
    </div>
  );
}
