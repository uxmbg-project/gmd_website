'use client'


const YourDetails = ({ formData, setFormData }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Your Details</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Rego"
          value={formData.rego || ''}
          onChange={(e) => setFormData({ ...formData, rego: e.target.value })}
          className="p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Make"
          value={formData.make || ''}
          onChange={(e) => setFormData({ ...formData, make: e.target.value })}
          className="p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Model"
          value={formData.model || ''}
          onChange={(e) => setFormData({ ...formData, model: e.target.value })}
          className="p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Year"
          value={formData.year || ''}
          onChange={(e) => setFormData({ ...formData, year: e.target.value })}
          className="p-2 border rounded"
          required
        />

        <div className="col-span-2 flex items-center gap-4">
          <span>Is your vehicle insured?</span>
          <label>
            <input
              type="radio"
              name="insured"
              value="Yes"
              checked={formData.insured === 'Yes'}
              onChange={(e) => setFormData({ ...formData, insured: e.target.value })}
            /> Yes
          </label>
          <label>
            <input
              type="radio"
              name="insured"
              value="No"
              checked={formData.insured === 'No'}
              onChange={(e) => setFormData({ ...formData, insured: e.target.value })}
            /> No
          </label>
        </div>

        {formData.insured === 'Yes' && (
          <>
            <input
              type="text"
              placeholder="Your Insurance Company"
              value={formData.insuranceCompany || ''}
              onChange={(e) => setFormData({ ...formData, insuranceCompany: e.target.value })}
              className="p-2 border rounded"
              required
            />
            <input
              type="text"
              placeholder="Claim/Policy Number"
              value={formData.claimNumber || ''}
              onChange={(e) => setFormData({ ...formData, claimNumber: e.target.value })}
              className="p-2 border rounded"
              required
            />
          </>
        )}
      </div>
    </div>
  )
}

export default YourDetails
