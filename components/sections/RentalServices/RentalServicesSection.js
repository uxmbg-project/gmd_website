'use client'
import { ArrowUpToLineIcon } from 'lucide-react'
import HeadingLeftImageRight from '../../common/HeadingLeftImageRight'
import HeadingWithImageSlider from '../../common/HeadingWithImageSlider'
import ServiceHero from '../../common/ServiceHero'


const RentalServicesSection = () => {
  return (
    <div>
      <ServiceHero
        title="🚗 Rental & Courtesy Services"
        content="We understand being without your car is inconvenient. GMD Auto offers flexible rental and courtesy car solutions while your vehicle is in our workshop for repairs."
      />

      <HeadingLeftImageRight 
        heading="Keeping You on the Road During Repairs"
        content="We understand being without your car is inconvenient. GMD Auto offers flexible rental and courtesy car solutions while your vehicle is in our workshop for repairs."
        image="/images/services/RentalImage.jpg"
      />

      <HeadingWithImageSlider
        heading="Vehicle Rental Options"
        icon={<ArrowUpToLineIcon className="text-red-600" />}
        points={[
          "Courtesy Vehicles: Available for short-term mechanical or minor body repairs (subject to availability).",
          "Replacement Hire Cars: We partner with leading rental agencies to secure a suitable replacement vehicle for the duration of your service or smash repair.",
          "Insurance Hire: If your smash repair is covered by insurance, we can help facilitate a hire car claim through your policy (check your specific coverage).",
        ]}
        // Pass images as image1 and image2 for sliding
        image1="/images/services/RentalImage2.jpg"
        image2="/images/services/RentalImage3.jpeg"
      />
    </div>
  )
}

export default RentalServicesSection
