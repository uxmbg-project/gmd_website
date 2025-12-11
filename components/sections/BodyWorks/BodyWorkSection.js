'use client'
import { ArrowUpToLineIcon } from 'lucide-react'
import HeadingLeftImageRight from '../../common/HeadingLeftImageRight'
import HeadingWithImageSlider from '../../common/HeadingWithImageSlider'
import ServiceHero from '../../common/ServiceHero'


const BodyWorkSection = () => {
  return (
    <div>
      <ServiceHero
        title="🎨 Body Repairs & Smash Repair Excellence"
        content="We specialize in high-quality body repairs, from removing minor door dings to restoring vehicles after major collisions. Our highly skilled panel beaters and spray painters guarantee excellence."
        backgroundImage='/images/services/BodyWorkHero.png'
      />

      <HeadingLeftImageRight 
        heading="Restoring Your Vehicle to Factory Perfection"
        content="We specialize in high-quality body repairs, from removing minor door dings to restoring vehicles after major collisions. Our highly skilled panel beaters and spray painters guarantee excellence."
        image="/images/services/BodyWork.jpeg"
      />

      <HeadingWithImageSlider
        heading=" Smash Repair & Panel Beating"
        icon={<ArrowUpToLineIcon className="text-red-600" />}
        points={[
          "Accident Repair: Comprehensive repair of all collision damage, adhering strictly to manufacturer repair methods.",
          "Chassis & Frame Alignment: We use advanced measuring systems to accurately return your vehicle's structural integrity to factory specifications.",
          "Panel Replacement & Repair: Expert repair or replacement of damaged doors, fenders, bonnets, and quarter panels.",
          "Paintless Dent Removal (PDR): Cost-effective repair for minor dents and hail damage, preserving the original paint finish."
        ]}
        // Pass images as image1 and image2 for sliding
        image1="/images/services/BodyWork1.jpg"
        image2="/images/services/BodyWork2.jpeg"
      />
    </div>
  )
}

export default BodyWorkSection
