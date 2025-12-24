'use client'

import React from 'react'

const DamageMarker = ({ formData, setFormData }) => {
  const handleClick = (e) => {
    const rect = e.target.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    // Add the new marker
    setFormData({
      ...formData,
      damageMarkers: [...formData.damageMarkers, { x, y }],
    })
  }

  return (
    <div className="mt-4">
      <h4 className="font-semibold mb-2">Mark Damages on the Car</h4>
      <div
        className="relative border w-full max-w-md mx-auto"
        style={{ height: '300px' }}
        onClick={handleClick}
      >
        <img
          src="/car-diagram.png" // <-- Add a car image in public folder
          alt="Car Diagram"
          className="w-full h-full object-contain"
        />
        {formData.damageMarkers.map((marker, index) => (
          <div
            key={index}
            className="absolute w-4 h-4 bg-red-600 rounded-full"
            style={{
              left: `${marker.x}%`,
              top: `${marker.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>
      <p className="text-sm text-gray-500 mt-2">
        Click on the car image to mark the damaged areas.
      </p>
    </div>
  )
}

export default DamageMarker
