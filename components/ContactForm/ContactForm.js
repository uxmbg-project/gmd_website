'use client'

import React, { useState } from 'react'
import { send } from '@emailjs/browser'
import Swal from 'sweetalert2'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID,
        {
          contact_first_name: formData.firstName,
          contact_last_name: formData.lastName,
          contact_phone: formData.phone,
          contact_email: formData.email,
          contact_message: formData.message
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )

      Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: 'Thank you for contacting GMD Autos. We will get back to you shortly.',
        confirmButtonColor: '#d00000',
      })

      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
      })
    } catch (error) {
      console.error(error)

      Swal.fire({
        icon: 'error',
        title: 'Something went wrong',
        text: 'Unable to send your message. Please try again.',
        confirmButtonColor: '#d00000',
      })
    }
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-red-600 mb-2">
          Send Us a Message
        </h2>
        <p className="text-center text-gray-600 mb-10">
          We're here to help. Contact us anytime!
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-lg p-8 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3"
                placeholder="First Name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3"
                placeholder="Last Name"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
              placeholder="Phone"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
              placeholder="Email"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3"
              placeholder="Your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg"
          >
            SEND
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
