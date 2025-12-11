import React from 'react'
import Hero from '../Hero'
import AboutUsContent from './AboutUsContent'

const AboutUsSection = () => {
  return (
    <div>
        <Hero Heading="GMD Autos & Smash Repairs" subtitle="What you want to know About Us?" backgroundImage="/images/PlanBackground.png"/>
        <AboutUsContent />
    </div>
  )
}

export default AboutUsSection