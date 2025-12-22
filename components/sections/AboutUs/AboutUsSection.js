"use client";

import { useEffect } from "react";
import Hero from "../Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const AboutUsSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="bg-white text-black overflow-hidden">
      {/* HERO */}
      <Hero
        Heading="GMD Autos & Smash Repairs"
        subtitle="Modern automotive care built on trust and precision"
        backgroundImage="/images/PlanBackground.png"
      />

      {/* INTRO */}
      <section className="max-w-6xl mx-auto px-4 pt-20 text-center">
        <span
          data-aos="fade-up"
          className="text-red-600 text-xs uppercase tracking-widest font-semibold"
        >
          Who We Are
        </span>

        <h2
          data-aos="fade-up"
          className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 leading-tight"
        >
          Precision Automotive Services <br className="hidden md:block" />
          You Can Trust
        </h2>

        <p
          data-aos="fade-up"
          className="text-gray-600 max-w-3xl mx-auto text-base md:text-lg"
        >
          At <strong>GMD Auto Group</strong>, we provide comprehensive automotive solutions designed with 
          our customers in mind. From regular servicing to accident repair, 
          our team of skilled technicians ensures your vehicle is in safe, reliable hands.

        </p>
      </section>

      {/* STATS */}
      <section className="max-w-6xl mx-auto px-4 mt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "5+", label: "Years Experience" },
            { value: "1,000+", label: "Vehicles Serviced" },
            { value: "100%", label: "Certified Technicians" },
            { value: "99%", label: "Customer Satisfaction" },
          ].map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center hover:shadow-md transition"
            >
              <h3 className="text-3xl font-extrabold text-red-600">
                {item.value}
              </h3>
              <p className="text-sm text-gray-600 mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="max-w-6xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3
              data-aos="fade-up"
              className="text-3xl font-bold mb-6"
            >
              Why Choose GMD Auto Group
            </h3>

            <p
              data-aos="fade-up"
              className="text-gray-600 mb-8"
            >
              We focus on long-term reliability, transparency, and attention to
              detail — ensuring every vehicle leaves our workshop safe and
              performing at its best.
            </p>

            <ul className="space-y-5">
              {[
                "Advanced diagnostic equipment and tooling",
                "OEM-quality parts and precise workmanship",
                "Clear communication with honest pricing",
                "Efficient turnaround times",
              ].map((item, i) => (
                <li
                  key={i}
                  data-aos="fade-right"
                  data-aos-delay={i * 100}
                  className="flex items-start gap-4"
                >
                  <span className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full border border-red-600 text-red-600 text-sm">
                    ✓
                  </span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* IMAGE BLOCK */}
          <div
            data-aos="fade-left"
            className="relative h-72 md:h-[420px] rounded-3xl overflow-hidden border border-gray-200 bg-gray-100"
          >
            {/* Replace with real image later */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
              <img src="/images/services/GMDAbout.png" className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h3
          data-aos="fade-up"
          className="text-3xl md:text-4xl font-extrabold mb-6"
        >
          Book With Confidence
        </h3>

        <p
          data-aos="fade-up"
          className="text-gray-600 max-w-2xl mx-auto mb-8"
        >
          From smash repairs to mechanical servicing, GMD Auto Group delivers
          dependable automotive solutions you can rely on.
        </p>

        <Link
          data-aos="fade-up"
          href="/contact"
          className="inline-flex items-center gap-2 border border-red-600 text-red-600 px-10 py-4 rounded-full font-semibold hover:bg-red-600 hover:text-white transition"
        >
          Contact Us
        </Link>
      </section>
    </div>
  );
};

export default AboutUsSection;



