"use client";
import { cardData } from '../../../app/data/NotAtFaultCareHireData';
import SlideableCard from '../../common/SlideableCard';
import TextLeftImageRight from '../../common/TextLeftImageRight';
import TextRightImageLeft from '../../common/TextRightImageLeft';

const NotAtFaultCarHireSection = () => {

  return (
    <div className="space-y-16 pt-15">

      {/* Hero Section */}
      <TextLeftImageRight 
        title="Not At Fault? You’re Eligible For Replacement Car Hire!" 
        heading="If another driver caused the accident, you’re entitled to a Not At Fault Car Hire – whether you have insurance or not." 
        content="While your car is being assessed or repaired, we’ll arrange Same Day Delivery of a replacement vehicle straight to your doorstep. 
                 GMD Auto Group then handles the recovery of costs from the at-fault party, ensuring you stay mobile without stress. 
                 Contact our team today and get back on the road with a fully serviced Courtesy Car."
        image="/images/NotAtFaultHireCar/NotAtFaultHireCar1.jpg"
      />

      {/* Fleet Section */}
      {/* <SlideableCard 
        sectionTitle="Our Fleet of Replacement Vehicles" 
        subtitle="We provide a wide range of Not At Fault Hire Cars for all our clients, from sedans to SUVs." 
        data={cardData}
      /> */}

      {/* Second Hero Section */}
      <TextRightImageLeft 
        title="Why Choose Not At Fault Car Hire Over Your Insurance?" 
        heading="You don’t need to make an insurance claim to get a replacement vehicle." 
        content="Whether you’re insured or not, you’re entitled to a replacement car if you were not at fault. 
                 Most of our clients do have insurance, yet they prefer GMD Auto Group’s hassle-free, boutique Not At Fault Car Hire service. 
                 Skip the insurance delays and get back on the road quickly with our professional support."
        image="/images/NotAtFaultHireCar/NotAtFaultHireCar2.jpeg"
      />

    </div>
  );
};

export default NotAtFaultCarHireSection;
