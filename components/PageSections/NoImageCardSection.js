"use client";
import React from "react";
import NoImageCard from "../common/NoImageCard";
import SectionHeader from "../features/SectionHeading";

const NoImageCardSection = ({ heading, cards, bgColor = "bg-gray-50" }) => {
  return (
    <section className={`${bgColor} py-16`}>
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-20 space-y-12">

        {/* Section Header */}
        {heading && (
          <div className="text-center">
            <SectionHeader sectiontitle={heading} subtitle="GMD Auto Repairs provides fast, reliable, and stress-free auto repair services. From accident repairs to maintenance, we ensure your vehicle is restored to top condition with expert care and quality service."/>
          </div>
        )}

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch justify-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex justify-center"
            >
              <NoImageCard
                heading={card.heading}
                content={card.content}
                className="max-w-sm w-full text-center"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NoImageCardSection;
