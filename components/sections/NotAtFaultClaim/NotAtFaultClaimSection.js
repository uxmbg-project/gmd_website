"use client";
import { cardData, cardsData2 } from '../../../app/data/NotAtFaultClaimData';
import TextLeftImageRight from '../../common/TextLeftImageRight';
import TextRightImageLeft from '../../common/TextRightImageLeft';
import FourRoundImageSection from '../../PageSections/FourRoundCardSection';
import NoImageCardSection from '../../PageSections/NoImageCardSection';

const NotAtFaultClaimSection = () => {

  return (
    <div className="space-y-16 pt-15">

      {/* Hero Section */}
      <TextLeftImageRight 
        title="Stress Free Not At Fault Claims in Australia" 
        heading="National Motor Claims provides Australia’s top Not At Fault Claim service." 
        content="We know that being involved in a car accident can be a very stressful experience. We also understand that you shouldn’t be at a loss for an accident caused by another driver’s mistake.
        All the costs for a Not At Fault Car Accident Claim are claimed from the At Fault Driver. This means there is No Cost to you for using our service, provided that you were Not At Fault." 
        image="/images/NotAtFaultClaim/FamilyGoing.jpg"
      />

      {/* Four Cards Section */}
      <FourRoundImageSection cards={cardData} />

      <NoImageCardSection 
        heading="How Does The Not At Fault Claims Process Work?"
        cards={cardsData2}
        bgColor="bg-gray-100" // dimmed background
      />

      {/* Second Hero Section */}
      <TextRightImageLeft 
        title="Quick & Hassle-Free Process" 
        heading="We make your Not At Fault Claim process seamless." 
        content="Our team handles everything from start to finish. You can focus on getting back on the road while we ensure your claim is processed efficiently and fairly." 
        image="/images/NotAtFaultClaim/FamilyGoing.jpg"
      />


      
    </div>
  );
};

export default NotAtFaultClaimSection;
