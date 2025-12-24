"use client";

const GMDSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Tilted Red Background */}
      <div className="absolute inset-0 z-0 transform -skew-y-3 origin-top-left bg-red-600" />

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 text-center flex flex-col items-center py-16 md:py-20">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
          About GMD Auto Group
        </h2>

        {/* Underline */}
        <div className="w-16 h-1 bg-black rounded mb-4" />

        {/* Subtitle */}
        <p className="text-white/90 text-base md:text-lg max-w-xl">
          At <strong>GMD Auto Group</strong>, we provide professional automotive services with precision, reliability, and care. Our mission is to ensure every vehicle leaves our workshop safe, fully serviced, and performing at its best.
        </p>

        {/* Highlight Paragraph */}
        <p className="text-white/90 text-sm md:text-base mt-4 max-w-xl">
          From routine maintenance to comprehensive repairs and insurance support, we combine expertise and dedication to deliver automotive solutions you can trust.
        </p>

      </div>
    </section>
  );
};

export default GMDSection;
