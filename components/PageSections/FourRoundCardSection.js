"use client";
import RoundImageCard from "../common/RoundImageCard";

const FourRoundImageSection = ({ cards }) => {
  return (
    <div className="px-4 my-10 md:px-10 lg:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <RoundImageCard
            key={index}
            title={card.title}
            content={card.content}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
};

export default FourRoundImageSection;
