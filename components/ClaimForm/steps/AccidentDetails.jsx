'use client'

import React from 'react'

const AccidentDetails = ({ formData, setFormData }) => {
  // Update accident fields
  const updateAccident = (key, value) =>
    setFormData({
      ...formData,
      accident: { ...formData.accident, [key]: value },
    })

  // Handle marking damages
  const handleDiagramClick = (carType, e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100

    const key = carType === 'myCar' ? 'myCarDamageMarkers' : 'thirdPartyCarDamageMarkers'
    const currentMarkers = formData.accident[key] || []
    updateAccident(key, [...currentMarkers, { x, y }])
  }

  // Handle file upload
  const handleUpload = (carType, e) => {
    const files = Array.from(e.target.files)
    const key = carType === 'myCar' ? 'myCarDamageImages' : 'thirdPartyCarDamageImages'
    const currentFiles = formData.accident[key] || []
    updateAccident(key, [...currentFiles, ...files])
  }

  // Handle clearing markers
  const handleClear = (carType) => {
    const key = carType === 'myCar' ? 'myCarDamageMarkers' : 'thirdPartyCarDamageMarkers'
    updateAccident(key, [])
  }

  // Render a car damage section
  const renderCarDamage = (title, carType, markersKey, imagesKey) => (
    <div className="mb-6">
      <h4 className="font-semibold mb-2">{title}</h4>

      {/* Diagram container */}
      <div
        className="relative border w-full max-w-md mx-auto cursor-pointer"
        style={{ height: '300px' }}
        onClick={(e) => handleDiagramClick(carType, e)}
      >
        <img
          src="/images/CarStructure.jpg"
          alt={`${title} Diagram`}
          className="w-full h-full object-contain"
        />

        {/* Damage boxes */}
        {formData.accident[markersKey]?.map((marker, index) => (
          <div
            key={index}
            className="absolute w-12 h-12 bg-red-100 bg-opacity-50 opacity-50 rounded border-2 border-red-700"
            style={{
              left: `${marker.x}%`,
              top: `${marker.y}%`,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>

      <div className="flex gap-2 mt-2 flex-wrap">
        <button
          type="button"
          className="px-3 py-1 bg-gray-200 rounded"
          onClick={() => handleClear(carType)}
        >
          Clear Markings
        </button>

        <input
          type="file"
          multiple
          accept="image/*"
          onChange={(e) => handleUpload(carType, e)}
          className="p-2 border rounded flex-1 min-w-[200px]"
        />
      </div>

      {formData.accident[imagesKey]?.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {formData.accident[imagesKey].map((file, idx) => (
            <span
              key={idx}
              className="text-sm bg-gray-100 p-1 rounded border break-words"
            >
              {file.name}
            </span>
          ))}
        </div>
      )}
    </div>
  )

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Accident Details</h3>

      {/* Basic Accident Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="flex flex-col">
          <label className="font-medium mb-1">Accident Date</label>
          <input
            type="date"
            value={formData.accident.accidentDate || ''}
            onChange={(e) => updateAccident('accidentDate', e.target.value)}
            className="p-2 border rounded"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="font-medium mb-1">Accident Time</label>
          <input
            type="time"
            value={formData.accident.accidentTime || ''}
            onChange={(e) => updateAccident('accidentTime', e.target.value)}
            className="p-2 border rounded"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="font-medium mb-1">Accident Location</label>
          <input
            type="text"
            value={formData.accident.place || ''}
            onChange={(e) => updateAccident('place', e.target.value)}
            className="p-2 border rounded"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="font-medium mb-1">Vehicle Location</label>
          <input
            type="text"
            value={formData.accident.vehicleLocation || ''}
            onChange={(e) => updateAccident('vehicleLocation', e.target.value)}
            className="p-2 border rounded"
          />
        </div>

        <div className="flex flex-col col-span-2">
          <label className="font-medium mb-1">Describe What Happened</label>
          <textarea
            value={formData.accident.whatHappened || ''}
            onChange={(e) => updateAccident('whatHappened', e.target.value)}
            className="p-2 border rounded h-28"
          />
        </div>
      </div>

      {/* My Car Damage */}
      {renderCarDamage(
        'My Car Damage',
        'myCar',
        'myCarDamageMarkers',
        'myCarDamageImages'
      )}

      {/* Third Party Car Damage */}
      {renderCarDamage(
        'Third Party Car Damage',
        'thirdPartyCar',
        'thirdPartyCarDamageMarkers',
        'thirdPartyCarDamageImages'
      )}
    </div>
  )
}

export default AccidentDetails
