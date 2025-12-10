'use client'


const AccidentDetails = ({ formData, setFormData }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Accident Details</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="date"
          placeholder="Date of Accident"
          value={formData.accidentDate || ''}
          onChange={(e) => setFormData({ ...formData, accidentDate: e.target.value })}
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Location of Accident"
          value={formData.accidentLocation || ''}
          onChange={(e) => setFormData({ ...formData, accidentLocation: e.target.value })}
          className="p-2 border rounded"
        />
        <textarea
          placeholder="Describe what happened"
          value={formData.accidentDescription || ''}
          onChange={(e) => setFormData({ ...formData, accidentDescription: e.target.value })}
          className="p-2 border rounded col-span-2"
        />
        <input
          type="file"
          multiple
          onChange={(e) =>
            setFormData({ ...formData, accidentPhotos: Array.from(e.target.files) })
          }
          className="col-span-2"
        />
      </div>
    </div>
  )
}

export default AccidentDetails
