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
        title="StressNot At Fault? You're Eligible For Accident Car Hire!" 
        heading="If you’re not at fault for the car accident, you’re eligible for Not At Fault Car Hire – whether you have insurance or not." 
        content="Whilst your damaged car is waiting to be assessed, we’ll organise Same Day Delivery of a rental vehicle to your doorstep. Then we’ll work on recovering the costs from the at fault party so your car can be repaired.
                Speak with us today and we’ll get you back on the road with Courtesy Car Hire."

        image="/images/NotAtFaultClaim/FamilyGoing.jpg"
      />

      <SlideableCard 
        sectionTitle="Our Fleet of Not At Fault Hire Cars" 
        subtitle="We offer a wide variety of Not At Fault Hire Cars for our clients." 
        data={cardData}/>

      {/* Second Hero Section */}
      <TextRightImageLeft 
        title="Why Not At Fault Car Hire Instead Of Going Through Your Insurer?" 
        heading="You don’t need to submit an insurance claim if you have insurance." 
        content="You’re still eligible for a rental car after an accident. Insured and Uninsured drivers have the same rights when they are Not At Fault.
                You would be surprised to hear most of our Not At Fault Car Hire clients DO have insurance cover.Our clients prefer our boutique Not At Fault Accident Car Hire Service rather than going through their car insurance company." 
        image="/images/NotAtFaultClaim/FamilyGoing.jpg"
      />


      
    </div>
  );
};

export default NotAtFaultCarHireSection;
