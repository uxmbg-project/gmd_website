'use client'
import { ArrowUpToLineIcon } from 'lucide-react'
import HeadingLeftImageRight from '../../common/HeadingLeftImageRight'
import HeadingWithImageSlider from '../../common/HeadingWithImageSlider'
import ServiceHero from '../../common/ServiceHero'


const TowingServicesSection = () => {
  return (
    <div>
      <ServiceHero
        title="🛣️ Towing Services"
        content="When the unexpected happens, GMD Auto is here to help. We offer reliable, fast, and safe towing services for breakdowns and accidents across the region."
      />

      <HeadingLeftImageRight 
        heading="Available 24/7 When You Need Us Most"
        content="When the unexpected happens, GMD Auto is here to help. We offer reliable, fast, and safe towing services for breakdowns and accidents across the region."
        image="/images/OilChange.png"
      />

      <HeadingWithImageSlider
        heading="Emergency 24-Hour Towing"
        icon={<ArrowUpToLineIcon className="text-red-600" />}
        points={[
          "Accident Towing: We arrive quickly, secure your vehicle, and transport it directly to our secure workshop for assessment and repair.",
          "Breakdown Towing: If your car won't start or breaks down, we'll get it to our facility or a location of your choice.",
          "Local & Long-Distance Towing: Services available for short transports or longer journeys.",
          "Prompt Response Time: Our dedicated fleet is on standby for quick dispatch.",
          "Direct Workshop Access: Tow your vehicle directly to our facility for immediate repair scheduling and quotes."
        ]}
        // Pass images as image1 and image2 for sliding
        image1="/images/OilChange.png"
        image2="/images/NotAtFaultClaim/FamilyGoing.jpg"
      />
    </div>
  )
}

export default TowingServicesSection
