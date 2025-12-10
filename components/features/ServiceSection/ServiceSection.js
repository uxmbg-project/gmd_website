"use client";

import SectionHeading from "../SectionHeading";
import ServicesCarousel from "./ServiceCarouselWrapper";
import ServiceCard from "./ServiceCard";

const ServiceSection = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading sectiontitle="Our Services" subtitle="Keeping your car running at its best with expert workmanship and attention to detail." />
        <ServicesCarousel>
          <ServiceCard
            title="Cooling System"
            description="Our team can quickly fix the cooling system of your engine: flush it, check connections, hoses, and cap, and also conduct a pressure test."
          />
          <ServiceCard
            title="Air Condition Service"
            description="Our professional technicians will examine your car’s air conditioner, replace the lubricating oil, and carry out a system leak test."
          />
          <ServiceCard
            title="Brake & Suspension Check"
            description="Full brake & suspension inspection to keep your ride safe and smooth."
          />
          <ServiceCard
            title="Air Induction Cleanup"
            description="With the help of specialized equipment, our technicians will do all needed cleaning — including intake valves."
          />
        </ServicesCarousel>
      </div>
    </section>
  );
};

export default ServiceSection;
