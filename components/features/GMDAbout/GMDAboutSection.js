"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const GMDSection = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Tilted Red Background */}
      <div className="absolute inset-0 -z-10 transform -skew-y-3 -skew-y-3 origin-top-left">
        <div className="bg-red-600 w-full h-full"></div>
      </div>
      

      {/* Content Wrapper */}
      <div className="relative max-w-2xl mx-auto px-4 text-center flex flex-col items-center py-16 md:py-20">

        {/* Heading */}
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-extrabold text-white mb-2"
        >
          About GMD Auto Group
        </h2>

        {/* White Underline */}
        <div
          data-aos="fade-up"
          className="w-16 h-1 bg-black rounded mb-4"
        ></div>

        {/* Subtitle */}
        <p
          data-aos="fade-up"
          className="text-white/90 text-base md:text-lg max-w-xl"
        >
          GMD delivers professional automotive solutions with passion, expertise, and dedication.
        </p>

        {/* Short Highlight Paragraph */}
        <p
          data-aos="fade-up"
          className="text-white/90 text-sm md:text-base mt-4 max-w-xl"
        >
          Reliable car services tailored to your needs, ensuring safety, efficiency, and performance.
        </p>

      </div>
    </section>
  );
};

export default GMDSection;
