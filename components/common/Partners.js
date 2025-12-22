"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const partnersData = [
  { name: "Platinum Taxi Rideshare Club", logo: "/images/partners/partner1.png" },
  { name: "Cams Club", logo: "/images/partners/partner2.png" },
  { name: "UXMBG Group", logo: "/images/partners/partner3.png" },
  { name: "Platinum Panel Repairs", logo: "/images/partners/partner4.png" },
  { name: "Partner 5", logo: "/images/partners/partner5.png" },
  { name: "Partner 6", logo: "/images/partners/partner6.png" },
];

const PartnersSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <section className="relative pb-10 py-5 bg-gray-50 dark:bg-gray-50 ">
      {/* Centered Arrow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
        <svg
          className="w-16 h-16 text-red-600 animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-8 mt-2">
        <span className="text-red-600 uppercase text-xs tracking-widest font-semibold">
          Our Partners
        </span>
        <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-black">
          Trusted by Industry Leaders
        </h2>
      </div>

      {/* Partners Grid */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {partnersData.map((partner, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="flex items-center justify-center p-2"
          >
            {partner.logo ? (
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-12 md:h-16 object-contain"
              />
            ) : (
              <span className="text-gray-900 dark:text-white font-semibold text-sm md:text-base text-center">
                {partner.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
