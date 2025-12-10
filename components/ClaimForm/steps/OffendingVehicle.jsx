'use client'


const OffendingVehicle = ({ formData, setFormData }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Offending Vehicle Details</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Rego"
          value={formData.offenderRego || ''}
          onChange={(e) => setFormData({ ...formData, offenderRego: e.target.value })}
          className="p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="Make"
          value={formData.offenderMake || ''}
          onChange={(e) => setFormData({ ...formData, offenderMake: e.target.value })}
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Model"
          value={formData.offenderModel || ''}
          onChange={(e) => setFormData({ ...formData, offenderModel: e.target.value })}
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Year"
          value={formData.offenderYear || ''}
          onChange={(e) => setFormData({ ...formData, offenderYear: e.target.value })}
          className="p-2 border rounded"
        />

        <div className="col-span-2 flex items-center gap-4">
          <span>Do you know if their vehicle is insured?</span>
          {['Yes', 'No', 'Not sure'].map(option => (
            <label key={option}>
              <input
                type="radio"
                name="offenderInsured"
                value={option}
                checked={formData.offenderInsured === option}
                onChange={(e) => setFormData({ ...formData, offenderInsured: e.target.value })}
              /> {option}
            </label>
          ))}
        </div>

        {formData.offenderInsured === 'Yes' && (
          <>
            <input
              type="text"
              placeholder="Their Insurance Company"
              value={formData.offenderInsuranceCompany || ''}
              onChange={(e) => setFormData({ ...formData, offenderInsuranceCompany: e.target.value })}
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Claim/Policy Number"
              value={formData.offenderClaimNumber || ''}
              onChange={(e) => setFormData({ ...formData, offenderClaimNumber: e.target.value })}
              className="p-2 border rounded"
            />
          </>
        )}

        <div className="col-span-2 flex items-center gap-4">
          <span>Do you have any of the offending vehicle's owner contact details?</span>
          {['Yes', 'No'].map(option => (
            <label key={option}>
              <input
                type="radio"
                name="offenderHasOwnerInfo"
                value={option}
                checked={formData.offenderHasOwnerInfo === option}
                onChange={(e) => setFormData({ ...formData, offenderHasOwnerInfo: e.target.value })}
              /> {option}
            </label>
          ))}
        </div>

        {formData.offenderHasOwnerInfo === 'Yes' && (
          <>
            <input
              type="text"
              placeholder="Owner First Name"
              value={formData.offenderOwnerFirstName || ''}
              onChange={(e) => setFormData({ ...formData, offenderOwnerFirstName: e.target.value })}
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Owner Last Name"
              value={formData.offenderOwnerLastName || ''}
              onChange={(e) => setFormData({ ...formData, offenderOwnerLastName: e.target.value })}
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Street Address"
              value={formData.offenderOwnerStreet || ''}
              onChange={(e) => setFormData({ ...formData, offenderOwnerStreet: e.target.value })}
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Suburb"
              value={formData.offenderOwnerSuburb || ''}
              onChange={(e) => setFormData({ ...formData, offenderOwnerSuburb: e.target.value })}
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Postcode"
              value={formData.offenderOwnerPostcode || ''}
              onChange={(e) => setFormData({ ...formData, offenderOwnerPostcode: e.target.value })}
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="State"
              value={formData.offenderOwnerState || ''}
              onChange={(e) => setFormData({ ...formData, offenderOwnerState: e.target.value })}
              className="p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Contact Number"
              value={formData.offenderOwnerContact || ''}
              onChange={(e) => setFormData({ ...formData, offenderOwnerContact: e.target.value })}
              className="p-2 border rounded"
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.offenderOwnerEmail || ''}
              onChange={(e) => setFormData({ ...formData, offenderOwnerEmail: e.target.value })}
              className="p-2 border rounded"
            />
          </>
        )}
      </div>
    </div>
  )
}

export default OffendingVehicle
