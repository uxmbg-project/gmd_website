'use client'

import React, { useState } from 'react'
import YourDetails from './steps/YourDetails'
import OffendingVehicle from './steps/OffendingVehicle'
import AccidentDetails from './steps/AccidentDetails'
import AuthorityToAct from './steps/AuthorityToAct'
import { send } from '@emailjs/browser'
import { initialFormData } from '../../app/data/ClaimFormFieldsStateData'

const ClaimForm = () => {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState(initialFormData)

  const handleNext = () => setStep(prev => prev + 1)
  const handlePrev = () => setStep(prev => prev - 1)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          // DRIVER DETAILS
          driver_first_name: formData.driver.firstName,
          driver_last_name: formData.driver.lastName,
          driver_email: formData.driver.email,
          driver_phone: formData.driver.phone,
          driver_address: formData.driver.address,
          driver_suburb: formData.driver.suburb,
          driver_state: formData.driver.state,
          driver_postcode: formData.driver.postcode,
          driver_dob: formData.driver.dob,
          driver_licence: formData.driver.licenceNo,
          driver_licence_expiry: formData.driver.licenceExpiry,

          // ACCIDENT DETAILS
          accident_place: formData.accident.place,
          accident_date: formData.accident.accidentDate,
          accident_time: formData.accident.accidentTime,
          accident_road_surface: formData.accident.roadSurface,
          accident_pre_existing: formData.accident.preExistingDamage,
          accident_vehicle_location: formData.accident.vehicleLocation,
          accident_what_happened: formData.accident.whatHappened,

          // THIRD PARTY VEHICLE
          third_make: formData.thirdParty.make,
          third_model: formData.thirdParty.model,
          third_year: formData.thirdParty.year,
          third_insured: formData.thirdParty.insured,
          third_rego: formData.thirdParty.rego,
          third_cover_company: formData.thirdParty.coverCompany,

          // THIRD PARTY OWNER
          third_owner_first: formData.thirdParty.owner.firstName,
          third_owner_last: formData.thirdParty.owner.lastName,
          third_owner_phone: formData.thirdParty.owner.phone,
          third_owner_address: formData.thirdParty.owner.address,
          third_owner_suburb: formData.thirdParty.owner.suburb,
          third_owner_state: formData.thirdParty.owner.state,
          third_owner_postcode: formData.thirdParty.owner.postcode,

          // AUTHORITY
          authority_agreed: formData.authority.agreed ? "Yes" : "No",
          authority_date: formData.authority.signatureDate,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )

      alert('Claim submitted successfully!')

      // Reset everything
      setStep(1)
      setFormData(initialFormData)

    } catch (err) {
      console.error('EmailJS Error:', err)
      alert('Error submitting claim. Try again.')
    }
  }

  const steps = ['Your Details', 'Offending Vehicle', 'Accident Details', 'Authority to Act']

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-5xl mx-auto p-6 bg-white rounded-2xl bg:text-black shadow-xl mt-10 mb-20 border border-gray-200"
    >
      {/* Step Indicator */}
      <div className="flex justify-between mb-8">
        {steps.map((label, index) => (
          <div key={index} className="flex-1 text-center">
            <div
              className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center font-bold text-white
              ${step === index + 1 ? 'bg-red-600' : 'bg-gray-300'}`}
            >
              {index + 1}
            </div>
            <p className={`mt-2 text-sm font-medium ${step === index + 1 ? 'text-red-600' : 'text-gray-500'}`}>
              {label}
            </p>
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="space-y-6 p-4 bg-gray-50 rounded-lg shadow-inner">
        {step === 1 && <YourDetails formData={formData} setFormData={setFormData} />}
        {step === 2 && <OffendingVehicle formData={formData} setFormData={setFormData} />}
        {step === 3 && <AccidentDetails formData={formData} setFormData={setFormData} />}
        {step === 4 && <AuthorityToAct formData={formData} setFormData={setFormData} />}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        {step > 1 && (
          <button
            type="button"
            onClick={handlePrev}
            className="px-6 py-3 bg-gray-200 rounded-xl hover:bg-gray-300 text-gray-800 font-semibold"
          >
            Previous
          </button>
        )}

        {step < 4 ? (
          <button
            type="button"
            onClick={handleNext}
            className="ml-auto px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 font-semibold"
          >
            Next
          </button>
        ) : (
          <button
            type="submit"
            className="ml-auto px-6 py-3 bg-yellow-500 text-white rounded-xl hover:bg-yellow-600 font-semibold"
          >
            Submit Claim
          </button>
        )}
      </div>
    </form>
  )
}

export default ClaimForm
