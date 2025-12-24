import TextLeftImageRight from '../../common/TextLeftImageRight'
import TextRightImageLeft from '../../common/TextRightImageLeft'

const AccidentReplacementVehicleSection = () => {
  return (
    <div className='pt-10 dark:bg-white'> 
        <TextLeftImageRight 
            title="Accident Replacement Vehicles You Can Count On"
            heading="Not at Fault? Get a Replacement Vehicle Quickly"
            content="At GMD Auto Group, we understand that being involved in an accident can be stressful. That's why we provide a fleet of accident replacement vehicles across Australia, ready to be delivered when you need them most. Contact our team today, and we’ll arrange a replacement vehicle for you—often on the same day."
            image="/images/AccidentReplacement/AccidentReplacement1.jpg"
        />

        <TextRightImageLeft 
            title="Clean, Safe, and Ready for You"
            heading="Every Vehicle Thoroughly Cleaned and Sanitized"
            content="All our replacement vehicles are professionally cleaned and disinfected after every use. We follow strict hygiene protocols to ensure your safety and peace of mind while using our accident replacement vehicles."
            image="/images/services/HandingOverKeys.jpg"
        />
    </div>
  )
}

export default AccidentReplacementVehicleSection
