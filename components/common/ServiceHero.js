'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const ServiceHero = ({
  title = "Service Title",
  content = "Service description goes here.",
  backgroundImage = "/images/default-bg.jpg", // dynamic background
}) => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <section className="relative w-full overflow-hidden h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px]">
      {/* Tilted Background */}
      <div className="absolute inset-0 -z-10 transform -skew-y-3 origin-top-left">
        <div className="relative w-full h-full">
          <Image
            src={backgroundImage}
            alt={title}
            fill
            className="object-cover object-center"
            priority
          />
          {/* Optional overlay for readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      </div>

      {/* Content Wrapper */}
      <div className="relative max-w-3xl mx-auto px-4 text-center flex flex-col items-center justify-center h-full">
        {/* Logo */}
        <div className="mb-6">
          <Image 
            src='/logo/logo.png'
            alt="logo"
            width={60}
            height={80}
            className='bg-white rounded-2xl'
          />
        </div>

        {/* Title */}
        <h1
          data-aos="fade-up"
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-2"
        >
          {title}
        </h1>

        {/* Divider */}
        <div
          data-aos="fade-up"
          className="w-16 h-1 bg-white rounded mb-3"
        ></div>

        {/* Content */}
        <p
          data-aos="fade-up"
          className="text-white/90 text-sm sm:text-base md:text-lg max-w-2xl"
        >
          {content}
        </p>
      </div>
    </section>
  );
};

export default ServiceHero;
