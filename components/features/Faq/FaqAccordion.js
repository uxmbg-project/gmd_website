"use client";

import { useState } from "react";

const accordionData = [
  {
    title: "Can I still use Auto Services if I am not a member?",
    description:
      "Yes, you can! But by joining our GMD Auto Rewards Program you can become a member and get a 10% discount on labour performed by RAC",
  },
  {
    title: "Does your logbook servicing protect my new car warranty?",
    description:
      "Yes, Auto Services is fully qualified to service new cars, adhering to all manufacturers' requirements and ensuring your car receives the required service without voiding your new car warranty.",
  },
  {
    title: "Where can the mobile mechanic work from?",
    description:
      "Our Mobile Mechanic van will conveniently come to your home or workplace on weekdays within selected Perth Metro areas. Mobile car servicing, repairs and inspections can only be performed on safe, even ground.",
  },
  {
    title: "Do you service electric vehicles?",
    description:
      "Yes, we service electric vehicles. We offer EV Essential Services and Logbook Service options available at all 10 of our Auto Services centres.",
  },
];

const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="w-full flex justify-center py-24">
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
