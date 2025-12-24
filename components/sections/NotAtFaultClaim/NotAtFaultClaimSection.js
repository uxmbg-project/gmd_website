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
        title="Hassle-Free Not At Fault Claims Across Australia" 
        heading="GMD Auto Group delivers Australia’s leading Not At Fault Claim service." 
        content="Being involved in a car accident can be stressful. At GMD Auto Group, we ensure that if you weren’t at fault, all costs are recovered from the at-fault driver. This means you incur no out-of-pocket expenses while we manage your claim professionally and efficiently." 
        image="/images/NotAtFaultClaim/FamilyGoing.jpg"
      />

      {/* Four Cards Section */}
      <FourRoundImageSection cards={cardData} />

      <NoImageCardSection 
        heading="How the Not At Fault Claim Process Works"
        cards={cardsData2}
        bgColor="bg-gray-100" // dimmed background
      />

      {/* Second Hero Section */}
      <TextRightImageLeft 
        title="Fast, Transparent & Stress-Free" 
        heading="We handle your claim from start to finish" 
        content="Our expert team manages every step of your Not At Fault Claim, from paperwork to communication with insurers. You can focus on getting back on the road, knowing your claim is being handled quickly and fairly." 
        image="/images/NotAtFaultClaim/FamilyGoing.jpg"
      />
    </div>
  );
};

export default NotAtFaultClaimSection;
