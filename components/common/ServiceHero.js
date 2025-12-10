'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceHero = ({ title = "Service Title", content = "Service description goes here." }) => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      {/* Tilted Background */}
      <div className="absolute inset-0 -z-10 transform -skew-y-3 origin-top-left">
        <div className="bg-red-600 w-full h-full"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative max-w-3xl mx-auto px-4 text-center flex flex-col items-center py-20 md:py-28">
        {/* Title */}
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4"
        >
          {title}
        </h1>

        {/* Underline / Divider */}
        <div
          data-aos="fade-up"
          className="w-20 h-1 bg-black rounded mb-6"
        ></div>

        {/* Content */}
        <p
          data-aos="fade-up"
          className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl"
        >
          {content}
        </p>
      </div>
    </section>
  );
};

export default ServiceHero;
