"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export default function Hero({ Heading, subtitle, backgroundImage }) {
  return (
    <section
      className="relative w-full h-[500px] overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/40">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className={`${playfair.className} text-4xl md:text-6xl font-semibold text-white mb-4 leading-tight`}
        >
          {Heading}
        </motion.h1>

        {/* Subtitle (keep clean & readable) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-2xl text-white/90 max-w-xl tracking-wide"
        >
          {subtitle}
        </motion.p>

        {/* Accent Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "6rem" }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="mt-4 h-1 bg-[#E62600] rounded"
        />

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="mt-10"
        >
          <Link
            href="/claim-form"
            className="inline-block bg-[#E62600] text-white hover:bg-white hover:text-black font-semibold py-3 px-8 rounded-lg transition duration-300"
          >
            Make A Claim
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
