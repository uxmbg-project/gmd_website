'use client'
import { ArrowUpToLineIcon } from 'lucide-react'
import HeadingLeftImageRight from '../../common/HeadingLeftImageRight'
import HorizontalProcess from '../../common/HorizontalProcess'
import HeadingWithImageSlider from '../../common/HeadingWithImageSlider'
import ServiceHero from '../../common/ServiceHero'


const BodyWorkSection = () => {
  return (
    <div>
      <ServiceHero
        title="Body Repairs & Smash Repair Excellence"
        content="We specialize in high-quality body repairs, from removing minor door dings to restoring vehicles after major collisions. Our highly skilled panel beaters and spray painters guarantee excellence."
        backgroundImage='/images/services/BodyWorks/BodyWorkOne.jpg'
      />

      <HeadingLeftImageRight 
        heading="Restoring Your Vehicle to Factory Perfection"
        content="We specialize in high-quality body repairs, from removing minor door dings to restoring vehicles after major collisions. Our highly skilled panel beaters and spray painters guarantee excellence."
        image="/images/services/BodyWorks/BodyWorkOne.jpg"
      />

      <HorizontalProcess
        heading="Body Works & Smash Repair Process"
        subheading="Our step-by-step process to restore your vehicle to perfect condition"
        points={[
          "Book your appointment online or call us to report damage",
          "Expert assessment of the damage and consultation",
          "Panel beating and dent repair using certified techniques",
          "Painting, finishing, and detailing for a flawless look",
          "Final inspection and quality check before returning your car",
        ]}
      />


      <HeadingWithImageSlider
        heading="Smash Repair & Panel Beating"
        points={[
          <span>
            <strong>Accident Repair:</strong> Comprehensive repair of all collision damage, following manufacturer-approved repair methods to restore your vehicle safely and efficiently.
          </span>,
          <span>
            <strong>Chassis & Frame Alignment:</strong> Advanced measuring systems ensure your vehicle’s structural integrity is returned to factory specifications.
          </span>,
          <span>
            <strong>Panel Replacement & Repair:</strong> Expert repair or replacement of damaged doors, fenders, bonnets, and quarter panels for a flawless finish.
          </span>,
          <span>
            <strong>Paintless Dent Removal (PDR):</strong> Cost-effective solution for minor dents and hail damage while preserving the original paint finish.
          </span>,
          <span>
            <strong>Spray Painting & Refinishing:</strong> Professional color-matched painting and finishing to restore the vehicle’s original appearance.
          </span>,
          <span>
            <strong>Detailing & Quality Check:</strong> Thorough inspection and detailing after repairs to ensure your vehicle looks and drives like new.
          </span>,
        ]}
        image1="/images/services/BodyWork1.jpg"
        image2="/images/services/BodyWork2.jpeg"
        />
      </div>

  )
}

export default BodyWorkSection
