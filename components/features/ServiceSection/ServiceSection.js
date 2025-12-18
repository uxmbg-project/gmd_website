"use client";
import SectionHeading from "../SectionHeading";
import ServicesCarousel from "./ServiceCarouselWrapper";
import ServiceCard from "./ServiceCard";

const servicesData = [
  {
    title: "Auto Services",
    description:
      "At GMD Auto & Smash Repair, our certified mechanical team provides comprehensive maintenance and repair to keep your car safe and running efficiently. We service all makes and models with integrity and expertise.",
    imageSrc: "/images/services/AutoRepair.png",
    link: "/services/auto-services",
  },
  {
    title: "Body Repairs",
    description:
      "We specialize in high-quality body repairs, from removing minor door dings to restoring vehicles after major collisions. Our highly skilled panel beaters and spray painters guarantee excellence.",
    imageSrc: "/images/services/BodyRepair.png",
    link: "/services/body-works",
  },
  {
    title: "Towing Services",
    description:
      "When the unexpected happens, GMD Auto is here to help. We offer reliable, fast, and safe towing services for breakdowns and accidents across the region.",
    imageSrc: "/images/Towing.png",
    link: "/services/towing-services",
  },
  {
    title: "Rental & Courtesy Services",
    description:
      "We understand being without your car is inconvenient. GMD Auto offers flexible rental and courtesy car solutions while your vehicle is in our workshop for repairs.",
    imageSrc: "/images/services/Car.png",
    link: "/services/rental-services",
  },
  {
    title: "Windscreen Replacement",
    description:
      "Your windscreen is a critical structural component of your vehicle, providing up to 45% of the cabin's structural integrity in a frontal collision and preventing the roof from collapsing in a rollover.",
    imageSrc: "/images/services/WindScreen.png",
    link: "/services/wind-screen-replacement",
  },
];

const ServiceSection = () => {
  return (
    <section className="py-12 bg-gray-50 dark:bg-white dark:text-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          sectiontitle="Our Services"
          subtitle="Keeping your car running at its best with expert workmanship and attention to detail."
        />
        <ServicesCarousel>
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
              link={service.link}
            />
          ))}
        </ServicesCarousel>
      </div>
    </section>
  );
};

export default ServiceSection;
