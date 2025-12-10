import React from 'react'
import Hero from '../../components/sections/Hero'
import OurServiceSection from '../../components/sections/OurServices/OurServiceSection'

const page = () => {
  return (
    <div>
      <Hero Heading="We Provide Best Services" subtitle="All the services are given below please check it" />
      <OurServiceSection />
    </div>
  )
}

export default page