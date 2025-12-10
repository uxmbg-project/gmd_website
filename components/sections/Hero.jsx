"use client";

export default function Hero({Heading, subtitle}) {
  return (
    <section className="relative bg-red-600 w-full h-[400px] md:h-[400px] lg:h-[400px] overflow-hidden">
      
      {/* Overlay for content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          {Heading}
        </h1>
        <p className="text-lg md:text-2xl text-white/90 mb-6 max-w-xl">
          {subtitle}
        </p>
        <button className="bg-white text-red-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition duration-300">
          Get Started
        </button>
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
