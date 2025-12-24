"use client";

import RoundImageCard from "./RoundImageCard";
import CarouselWrapper from "../wrappers/CarouselWrapper";
import SectionHeading from "../features/SectionHeading";

const SlideableCard = ({
  sectionTitle,
  subtitle,
  data = [],
}) => {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50 dark:bg-gray-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        {sectionTitle && (
          <div className="mb-6 sm:mb-10 md:mb-12">
            <SectionHeading
              sectiontitle={sectionTitle}
              subtitle={subtitle}
            />
          </div>
        )}

        {/* Carousel */}
        {data?.length > 0 ? (
          <div className="mt-6 sm:mt-10">
            <CarouselWrapper>
              {data.map((item, index) => (
                <div
                  key={index}
                  className="
                    keen-slider__slide 
                    px-2 sm:px-3 md:px-4 
                    flex 
                    py-10
                    justify-center
                    w-full
                  "
                >
                  <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm">
                    <RoundImageCard
                      title={item.title}
                      content={item.content}
                      image={item.image}
                    />
                  </div>
                </div>
              ))}
            </CarouselWrapper>
          </div>
        ) : (
          <p className="text-center text-gray-500 text-base sm:text-lg mt-6">
            No items available.
          </p>
        )}
      </div>
    </section>
  );
};

export default SlideableCard;
