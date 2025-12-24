'use client'
import { ArrowUpToLineIcon } from 'lucide-react'
import HeadingLeftImageRight from '../../common/HeadingLeftImageRight'
import HeadingWithImageSlider from '../../common/HeadingWithImageSlider'
import ServiceHero from '../../common/ServiceHero'


const WindScreenReplacementSection = () => {
  return (
    <div>
      <ServiceHero
        title="Windscreen Replacement & Auto Glass Services"
        content="Your windscreen is a critical structural component of your vehicle, providing up to 45% of the cabin's structural integrity in a frontal collision and preventing the roof from collapsing in a rollover. At GMD Auto & Smash Repair, we ensure that your auto glass is repaired or replaced safely, quickly, and professionally."
        backgroundImage='/images/services/WindSreenService/WindScreenOne.jpg'
      />

      <HeadingLeftImageRight 
        heading="Why Choose GMD for Auto Glass?"
        content="Whether the damage is too large to repair or the screen is severely cracked, we provide a complete replacement service."
        image="/images/services/WindScreen.jpg"
      />

      <HeadingWithImageSlider
        heading="Windscreen Replacement (Front Glass)"
        points={[
          "Chip & Crack Assessment: We first determine if the damage can be repaired or if a full replacement is necessary.",
          "Precision Installation: Our process includes careful removal of the old glass, preparing the frame, and installing the new windscreen with industry-leading bonding agents for maximum safety and sealing.",
          "Safe Drive Away Time: We advise you on the necessary 'safe drive away time' to ensure the adhesive is cured enough for structural integrity.",
          "State-of-the-Art Equipment: We use the latest diagnostic and calibration tools to accurately restore the functionality of your ADAS systems.",
          "Guaranteed Accuracy: Ensures your safety features function correctly immediately after installation."
        ]}
        // Pass images as image1 and image2 for sliding
        image1="/images/services/WindScreen1.jpg"
        image2="/images/services/WindScreen2.jpg"
      />
    </div>
  )
}

export default WindScreenReplacementSection
