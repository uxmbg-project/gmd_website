"use client";

import { Check } from "lucide-react";

const ServicePackages = ({
  heading = "Our Service Packages",
  subheading = "Choose the package that best suits your vehicle and budget",
  packages = [],
}) => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-24 text-center dark:bg-white dark:text-black">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
      <p className="text-gray-600 mb-14 max-w-2xl mx-auto">{subheading}</p>

      <div className="grid md:grid-cols-3 gap-8">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className={`relative rounded-3xl p-8 text-left transition hover:shadow-lg ${
              index === 1
                ? "border-2 border-red-600 bg-red-50 scale-105"
                : "border border-gray-200 bg-white"
            }`}
          >
            {/* Extra Badge */}
            {pkg.extraTitle && (
              <span className="absolute -top+10 left-1/2 -translate-x-1/2 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {pkg.extraTitle}
              </span>
            )}

            {/* Main Badge / Title */}
            <span
              className={`absolute -top-4 left-1/2 -translate-x-1/2 text-xs font-semibold px-4 py-1 rounded-full ${
                index === 1 ? "bg-red-600 text-white" : "bg-gray-200 text-gray-800"
              }`}
            >
              {pkg.title}
            </span>

            <p className="text-gray-600 mb-6 mt-10">{pkg.description}</p>

            <ul className="space-y-4">
              {pkg.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-red-600 mt-1" />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicePackages;
