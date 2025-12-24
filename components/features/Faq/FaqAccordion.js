"use client";

import { useState } from "react";

const accordionData = [
  {
    title: "Do you provide accident repair services?",
    description:
      "Yes! GMD Auto Group specializes in accident and smash repairs. Our team ensures your vehicle is restored to its original condition using high-quality parts and expert techniques.",
  },
  {
    title: "Do you service all car makes and models?",
    description:
      "Absolutely. We provide mechanical and maintenance services for all car makes and models, including sedans, SUVs, vans, and electric vehicles.",
  },
  {
    title: "Do you handle insurance claims for repairs?",
    description:
      "Yes. Our team can assist with insurance claim processes for accident repairs, ensuring a smooth and hassle-free experience for you.",
  },
  {
    title: "Do you service electric vehicles?",
    description:
      "Yes. GMD Auto Group offers essential and logbook services for electric vehicles at all of our centers, keeping your EV safe and fully functional.",
  },
  {
    title: "How long does a typical repair or service take?",
    description:
      "Repair and service times depend on the scope of work. Minor servicing can be completed in a few hours, while major accident repairs may take several days. We always provide an estimated timeline.",
  },
  {
    title: "Do you use genuine parts for repairs?",
    description:
      "Yes. We use high-quality, manufacturer-approved parts to ensure safety, reliability, and longevity for every vehicle we repair or service.",
  },
];


const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="w-full flex justify-center py-4">
      <div className="w-full max-w-5xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {accordionData.map((item, i) => (
          <div key={i} className="w-full">
            {/* Question Button */}
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-start py-5 text-left border-b border-gray-700 hover:border-[#E62600] transition group"
            >
              <span className="text-lg font-semibold text-black group-hover:text-[#E62600] transition">
                {item.title}
              </span>

              {/* Arrow Icon */}
              <svg
                className={`w-6 h-6 ml-3 transform transition-transform ${
                  openIndex === i ? "rotate-180 text-[#E62600]" : "text-black"
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m5 15 7-7 7 7" />
              </svg>
            </button>

            {/* Answer Section */}
            <div
              className={`transition-all duration-300 overflow-hidden ${
                openIndex === i
                  ? "max-h-48 opacity-100 py-4 border-b-2 border-[#E62600]"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-black text-base leading-relaxed pr-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default FaqAccordion;
