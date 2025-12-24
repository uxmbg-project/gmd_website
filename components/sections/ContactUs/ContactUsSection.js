'use client'

import React, { useEffect, useState } from 'react'
import Hero from '../Hero'

const locations = {
  WA: {
    state: 'Western Australia',
    address: "50 Sussex St, Maylands WA 6051",
    phone: "08 6377 3774",
    email: "workshopwa@gmdautogroup.com.au",
  },
  TAS: {
    state: 'Tasmania',
    address: "66 Charles St, Moonah TAS 7009",
    phone: "03 6146 2220",
    email: "workshoptas@gmdautogroup.com.au",
  },
  DEFAULT: {
    state: 'Australia',
    phone: '+61 400 000 000',
    email: 'info@gmdautogroup.com',
    address: 'Australia',
  },
}

const ContactUsSection = () => {
  const [location, setLocation] = useState(locations.DEFAULT)

  useEffect(() => {
    try {
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

      if (timeZone.includes('Perth')) {
        setLocation(locations.WA)
      } else if (timeZone.includes('Hobart')) {
        setLocation(locations.TAS)
      }
    } catch (error) {
      setLocation(locations.DEFAULT)
    }
  }, [])

  return (
    <div className="bg-white text-black">
      {/* HERO */}
      <Hero
        Heading="Get in Touch with GMD Auto Group"
        subtitle="Contact us for expert smash repairs, vehicle servicing, and help with fault or not-at-fault insurance claims."
        backgroundImage="/images/Hero/HeroFour.jpg"
      />

      {/* INTRO */}
      <section className="max-w-5xl mx-auto px-4 py-16 text-center">
        <span className="text-red-600 text-xs uppercase tracking-widest font-semibold">
          Contact Us
        </span>

        <h2 className="text-3xl md:text-4xl font-extrabold mt-4 mb-4">
          Proudly Serving {location.state}
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto">
          You’re viewing contact details for our <strong>{location.state}</strong> team.
          Reach out and we’ll assist you with expert automotive solutions.
        </p>
      </section>

      {/* LOCATION CARDS */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Phone */}
          <div className="rounded-2xl border border-gray-200 p-6 text-center hover:shadow-md transition">
            <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
              Phone
            </p>
            <p className="text-lg font-semibold text-red-600">
              {location.phone}
            </p>
          </div>

          {/* Email */}
          <div className="rounded-2xl border border-gray-200 p-6 text-center hover:shadow-md transition">
            <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
              Email
            </p>
            <p className="text-lg font-semibold">
              {location.email}
            </p>
          </div>

          {/* Address */}
          <div className="rounded-2xl border border-gray-200 p-6 text-center hover:shadow-md transition">
            <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
              Address
            </p>
            <p className="text-lg font-semibold">
              {location.address}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-5 text-center">
        <h3 className="text-2xl font-bold mb-3">
          Need Help With Your Vehicle?
        </h3>
        <p className="text-gray-600 mb-6">
          Fill out the form below and our {location.state} team will contact you shortly.
        </p>
      </section>
    </div>
  )
}

export default ContactUsSection
