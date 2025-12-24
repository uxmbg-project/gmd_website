"use client";
import React from "react";
import NoImageCard from "../common/NoImageCard";
import SectionHeader from "../features/SectionHeading";

const NoImageCardSection = ({ heading, cards, bgColor = "bg-gray-50" }) => {
  return (
    <section className={`${bgColor} py-20`}>
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 space-y-16">

        {/* Section Header */}
        {heading && (
          <div className="text-center">
            <SectionHeader 
              sectiontitle={heading} 
              subtitle="GMD Auto Group ensures fast, reliable, and professional auto repair services. From accident repairs to routine maintenance, we restore your vehicle with precision and care."
            />
          </div>
        )}

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className="flex justify-center"
            >
              <NoImageCard
                heading={card.heading}
                content={card.content}
                className="max-w-sm w-full text-center bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 hover:bg-gradient-to-r hover:from-red-50 hover:via-red-100 hover:to-red-50"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NoImageCardSection;
