import SectionHeading from "../SectionHeading"
import IconCard from "./IconCard"

const ChoosingUsSection = () => {
  return (
    <div className="bg-gray-100 dark:gray-100- m-10">
        <SectionHeading sectiontitle="Why Choosing Us" subtitle="You and your car are important to usm so we want to give you the best car service possible" />
        <div className="flex">
            <IconCard />
        </div>
    </div>
  )
}

export default ChoosingUsSection