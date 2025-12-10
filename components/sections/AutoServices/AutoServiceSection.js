'use client'

import { ArrowUpToLineIcon } from 'lucide-react'
import HeadingLeftImageRight from '../../common/HeadingLeftImageRight'
import HeadingWithImageSlider from '../../common/HeadingWithImageSlider'
import ServiceHero from '../../common/ServiceHero'


const AutoServiceSection = () => {
  return (
    <div>
      <ServiceHero
        title="⚙️ Auto Services (Mechanical & Maintenance)"
        content="We specialize in high-quality repair services, restoring your car to factory perfection with expert care."
      />

      <HeadingLeftImageRight 
        heading="Reliable Mechanics for Peak Performance"
        content="At GMD Auto & Smash Repair, our certified mechanical team provides comprehensive maintenance and repair to keep your car safe and running efficiently. We service all makes and models with integrity and expertise."
        image="/images/services/AutoRepair1.jpg"
      />

      <HeadingWithImageSlider
        heading=" Smash Repair & Panel Beating"
        icon={<ArrowUpToLineIcon className="text-red-600" />}
        points={[
          "Logbook Servicing: We perform manufacturer-scheduled maintenance using approved parts and fluids, ensuring your warranty remains valid.",
          "Minor Service: Essential oil and filter change, fluid top-ups, and 60-point safety check.",
          "Major Service: Comprehensive inspection, replacement of filters (air, fuel, cabin), spark plugs, and detailed performance checks.",
        ]}
        // Pass images as image1 and image2 for sliding
        image1="/images/services/AutoRepair2.jpg"
        image2="/images/services/AutoRepair3.jpg"
      />
    </div>
  )
}

export default AutoServiceSection
