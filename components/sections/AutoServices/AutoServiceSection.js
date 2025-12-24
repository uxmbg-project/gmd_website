'use client'

import { ArrowUpToLineIcon } from 'lucide-react'
import HeadingLeftImageRight from '../../common/HeadingLeftImageRight'
import HeadingWithImageSlider from '../../common/HeadingWithImageSlider'
import ServiceHero from '../../common/ServiceHero'
import TextRightImageLeft from '../../common/TextRightImageLeft'
import HorizontalProcess from '../../common/HorizontalProcess'
import ServicePackages from '../../common/ServicePackages'




const AutoServiceSection = () => {
  return (
    <div className=''>
      <ServiceHero
        title="Mechanical & Maintenance"
        content="We specialize in high-quality repair services, restoring your car to factory perfection with expert care."
        backgroundImage="/images/services/MaintinanceOne.jpg"
      />

      <HeadingLeftImageRight 
        heading="Oil Change & Regular Service"
        content="Keep your engine running smoothly with our expert oil change services, using high-quality oils tailored to your vehicle’s needs. Ensure your car’s reliability and performance with our thorough regular servicing, covering all makes and models with professional care."
        image="/images/services/AutoRepair1.jpg"
      />

      <ServicePackages
        heading="Mechanical Service Packages"
        subheading="Flexible service options designed to suit every vehicle and driving need"
        packages={[
          {
            price: "$145 / Month",
            title: "Standard",
            description: "Essential maintenance to keep your vehicle running smoothly",
            points: [
              "Engine oil and filter change",
              "Wheel nut Torque",
              "Air Filter Cleaning",
              "Headlight Check",
              "Tyre Air pressure Check",
              "Coolant Top up",
            ],
          },
          {
            extraTitle:"Most Popular",
            price: "$285 / Month",
            title: "Classic",
            description: "Comprehensive servicing for improved performance and safety",
            featured: true,
            points: [
              "Everything in Standard Package",
              "Cooland Flush (if needed)",
              "Brake Fluid Top up",
              "Windscreen wipers replace(if needed)",
              "Pre Scan/Post Scan",
              "Brake Adjustment (if needed)",
            ],
          },
          {
            price: "$650 / Month",
            title: "Ultimate",
            description: "Complete care for long-term reliability and peace of mind",
            points: [
              "Everything in Classic Package",
              "Brake Bleeding and replenishment",
              "Brake Replacement",
              "Exterior Car Wash",
              "Complete Vehicle Interior Vaccum",
              "Car Interior DEtailing",
              "All remaining safety checks",
              "Courtesy Vehicle will be provided",

            ],
          },
        ]}
      />


      <HeadingWithImageSlider
        heading="Mechanical & Maintenance"
        points={[
          <span>
            <strong>Logbook Servicing:</strong> Manufacturer-scheduled maintenance using approved parts and fluids to ensure your vehicle warranty remains valid and your car runs smoothly.
          </span>,
          <span>
            <strong>Minor Service:</strong> Essential oil and filter changes, fluid top-ups, and a thorough 60-point safety inspection.
          </span>,
          <span>
            <strong>Major Service:</strong> Comprehensive inspection including replacement of air, fuel, and cabin filters, spark plugs, and detailed performance checks.
          </span>,
        ]}
        image1="/images/services/MaintinanceOne.jpg"
        image2="/images/services/MaintinanceTwo.jpg"
      />


      <HorizontalProcess
        heading="Tyre Change Process"
        subheading="Step-by-step process for safe and efficient tyre replacement"
        points={[
          "Book your appointment online or call us",
          "Vehicle inspection and wheel check",
          "Tyre replacement or rotation",
          "Alignment and balancing",
          "Drive away safely with confidence",
        ]}
      />

    </div>
  )
}

export default AutoServiceSection
