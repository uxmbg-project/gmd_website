import SectionHeading from '../SectionHeading'
import ConsultationCard from './ConsultationCard'
import ConsultationContent from './ConsultationContent'

const ConsultationSection = () => {
  return (
    <div className="my-8 px-4">
      <SectionHeading sectiontitle="Your Concern Is Our Priority" subtitle="Your comfort, safety, and satisfaction always come first with us." />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start p-10">
        <ConsultationCard />
        <ConsultationContent />
      </div>
    </div>
  )
}

export default ConsultationSection
