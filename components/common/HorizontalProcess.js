"use client";

import { motion } from "framer-motion";

export default function VerticalProcess({
  heading,
  subheading,
  points = [], // array of strings
}) {
  return (
    <section className="py-16 px-4 bg-gray-50">
      {/* Heading */}
      {heading && (
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          {heading}
        </h2>
      )}

      {/* Subheading */}
      {subheading && (
        <p className="text-lg md:text-xl text-gray-700 text-center mb-12 max-w-2xl mx-auto">
          {subheading}
        </p>
      )}

      {/* Vertical Process */}
      <div className="relative flex flex-col items-center gap-12 max-w-xl mx-auto">
        {points.map((point, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            className="flex flex-col items-center text-center relative"
          >
            {/* Vertical line */}
            {index < points.length - 1 && (
              <div className="absolute top-12 w-px h-12 bg-gray-300"></div>
            )}

            {/* Numbered Dot */}
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#E62600] text-white font-semibold z-10">
              {index + 1}
            </div>

            {/* Point Text */}
            <p className="text-gray-700 text-lg mt-4 max-w-xs">{point}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
