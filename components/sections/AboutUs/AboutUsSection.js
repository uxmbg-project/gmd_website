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
        Heading="Complete Auto Care You Can Trust"
        subtitle="Smash Repairs, Vehicle Servicing & Expert Support for Fault and Not-At-Fault Insurance Claims"
        backgroundImage="/images/Hero/HeroThree.jpg"
      />

     

      {/* WHY US */}
      <section className="max-w-6xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3
              data-aos="fade-up"
              className="text-3xl text-center font-bold mb-6"
            >
              Company Values
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
                "Integrity: We operate with strong ethical standards in every aspect of our business, ensuring honesty, transparency, and trust in all our services.",
                "Customer-Focused: We believe in building genuine relationships through friendly service, open communication, and a commitment to understanding our customers’ needs.",
                "Innovation: We continuously improve our processes, tools, and skills to deliver better results, smarter solutions, and greater value for our customers.",
                "Commitment to Excellence: Our success is driven by a dedicated, highly trained team that brings energy, professionalism, and full commitment to every vehicle we service.",
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

      <section className="max-w-6xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE BLOCK – LEFT */}
          <div
            data-aos="fade-right"
            className="relative h-72 md:h-[420px] rounded-3xl overflow-hidden border border-gray-200 bg-gray-100"
          >
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-medium">
              <img
                src="/images/services/GMDAbout.png"
                className="object-contain"
                alt="GMD Auto Group"
              />
            </div>
          </div>

          {/* CONTENT – RIGHT */}
          <div>
            <h3
              data-aos="fade-up"
              className="text-3xl text-center font-bold mb-6"
            >
              Who We Are & What We Do
            </h3>

            <p
              data-aos="fade-up"
              className="text-gray-600 mb-8"
            >
              GMD Auto Group is a trusted automotive service provider dedicated to delivering reliable, high-quality vehicle care. We specialize in mechanical servicing, smash repairs, and insurance claim support, ensuring every vehicle is handled with precision and professionalism.
              Our focus is on honest pricing, quality workmanship, and dependable service, helping customers make informed decisions and keep their vehicles performing at their best. Backed by a team of highly trained professionals, GMD Auto Group provides automotive solutions you can trust — every time.
            </p>

            <ul className="space-y-5">
              {[
                // "Integrity: We operate with strong ethical standards in every aspect of our business, ensuring honesty, transparency, and trust in all our services.",
                // "Customer-Focused: We believe in building genuine relationships through friendly service, open communication, and a commitment to understanding our customers’ needs.",
              ].map((item, i) => (
                <li
                  key={i}
                  data-aos="fade-left"
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



