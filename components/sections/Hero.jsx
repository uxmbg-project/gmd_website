"use client";

import Link from "next/link";

export default function Hero({ Heading, subtitle, backgroundImage }) {
  return (
    <section
      className="relative w-full h-[400px] md:h-[400px] lg:h-[400px] overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Overlay for content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/40">
        <h1 className="text-4xl font-[Open_Sans] md:text-6xl font-extrabold text-white opacity-75 mb-4">
          {Heading}
        </h1>

        <div className="text-lg md:text-2xl text-white/90 mb-6 opacity-90 max-w-xl">
          {subtitle}
          <div className="mx-auto mt-2 w-24 h-1 bg-[#E62600] rounded"></div>
        </div>
        {/* Uncomment if you want a button */}
        <Link href="/claim-form" className="bg-[#E62600] mt-10 text-white hover:bg-white hover:text-black font-semibold py-3 px-8 rounded-lg transition duration-300">
          Make A Claim
        </Link>
      </div>

      {/* Decorative Bottom Skew */}
      <div className="absolute bottom-0 left-0 w-full h-20 -z-10 overflow-hidden">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0 L1440,100 L1440,0 Z"
            fill="#E62600"
            shapeRendering="crispEdges"
          />
        </svg>
      </div>
    </section>
  );
}
