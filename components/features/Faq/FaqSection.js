import SectionHeading from '../SectionHeading'
import FaqAccordion from './FaqAccordion'
const FaqSection = () => {
  return (
    <div>
        <SectionHeading sectiontitle="Answering Your Questions" subtitle="We have made the conditions for using our carsharing service as simple as possible. If you still have any questions, please contact us in any convenient way." />
        <FaqAccordion />
    </div>
  )
}

export default FaqSection