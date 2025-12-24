'use client'

const OffendingVehicle = ({ formData, setFormData }) => {

  const update = (key, value) => setFormData({ ...formData, [key]: value });

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Offending Vehicle Details</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* REGO */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">Rego</label>
          <input
            type="text"
            value={formData.offenderRego || ''}
            onChange={(e) => update('offenderRego', e.target.value)}
            className="p-2 border rounded"
            required
          />
        </div>

        {/* MAKE */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">Make</label>
          <input
            type="text"
            value={formData.offenderMake || ''}
            onChange={(e) => update('offenderMake', e.target.value)}
            className="p-2 border rounded"
          />
        </div>

        {/* MODEL */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">Model</label>
          <input
            type="text"
            value={formData.offenderModel || ''}
            onChange={(e) => update('offenderModel', e.target.value)}
            className="p-2 border rounded"
          />
        </div>

        {/* YEAR */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">Year</label>
          <input
            type="text"
            value={formData.offenderYear || ''}
            onChange={(e) => update('offenderYear', e.target.value)}
            className="p-2 border rounded"
          />
        </div>

        {/* VEHICLE INSURED */}
        <div className="col-span-2">
          <label className="font-medium mb-2 block">Is their vehicle insured?</label>
          <div className="flex gap-6">
            {['Yes', 'No', 'Not sure'].map(option => (
              <label key={option} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="offenderInsured"
                  value={option}
                  checked={formData.offenderInsured === option}
                  onChange={(e) => update('offenderInsured', e.target.value)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        {formData.offenderInsured === 'Yes' && (
          <>
            {/* INSURANCE COMPANY */}
            <div className="flex flex-col">
              <label className="font-medium mb-1">Insurance Company</label>
              <input
                type="text"
                value={formData.offenderInsuranceCompany || ''}
                onChange={(e) => update('offenderInsuranceCompany', e.target.value)}
                className="p-2 border rounded"
              />
            </div>

            {/* CLAIM NUMBER */}
            <div className="flex flex-col">
              <label className="font-medium mb-1">Claim / Policy Number</label>
              <input
                type="text"
                value={formData.offenderClaimNumber || ''}
                onChange={(e) => update('offenderClaimNumber', e.target.value)}
                className="p-2 border rounded"
              />
            </div>
          </>
        )}

        {/* OWNER CONTACT INFO */}
        <div className="col-span-2">
          <label className="font-medium mb-2 block">
            Do you have the vehicle owner's contact details?
          </label>
          <div className="flex gap-6">
            {['Yes', 'No'].map(option => (
              <label key={option} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="offenderHasOwnerInfo"
                  value={option}
                  checked={formData.offenderHasOwnerInfo === option}
                  onChange={(e) => update('offenderHasOwnerInfo', e.target.value)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        {formData.offenderHasOwnerInfo === 'Yes' && (
          <>
            {/* OWNER FIRST NAME */}
            <div className="flex flex-col">
              <label className="font-medium mb-1">Owner First Name</label>
              <input
                type="text"
                value={formData.offenderOwnerFirstName || ''}
                onChange={(e) => update('offenderOwnerFirstName', e.target.value)}
                className="p-2 border rounded"
              />
            </div>

            {/* OWNER LAST NAME */}
            <div className="flex flex-col">
              <label className="font-medium mb-1">Owner Last Name</label>
              <input
                type="text"
                value={formData.offenderOwnerLastName || ''}
                onChange={(e) => update('offenderOwnerLastName', e.target.value)}
                className="p-2 border rounded"
              />
            </div>

            {/* STREET */}
            <div className="flex flex-col">
              <label className="font-medium mb-1">Street</label>
              <input
                type="text"
                value={formData.offenderOwnerStreet || ''}
                onChange={(e) => update('offenderOwnerStreet', e.target.value)}
                className="p-2 border rounded"
              />
            </div>

            {/* SUBURB */}
            <div className="flex flex-col">
              <label className="font-medium mb-1">Suburb</label>
              <input
                type="text"
                value={formData.offenderOwnerSuburb || ''}
                onChange={(e) => update('offenderOwnerSuburb', e.target.value)}
                className="p-2 border rounded"
              />
            </div>

            {/* POSTCODE */}
            <div className="flex flex-col">
              <label className="font-medium mb-1">Postcode</label>
              <input
                type="text"
                value={formData.offenderOwnerPostcode || ''}
                onChange={(e) => update('offenderOwnerPostcode', e.target.value)}
                className="p-2 border rounded"
              />
            </div>

            {/* STATE */}
            <div className="flex flex-col">
              <label className="font-medium mb-1">State</label>
              <input
                type="text"
                value={formData.offenderOwnerState || ''}
                onChange={(e) => update('offenderOwnerState', e.target.value)}
                className="p-2 border rounded"
              />
            </div>

            {/* CONTACT NUMBER */}
            <div className="flex flex-col">
              <label className="font-medium mb-1">Contact Number</label>
              <input
                type="text"
                value={formData.offenderOwnerContact || ''}
                onChange={(e) => update('offenderOwnerContact', e.target.value)}
                className="p-2 border rounded"
              />
            </div>

            {/* EMAIL */}
            <div className="flex flex-col">
              <label className="font-medium mb-1">Email</label>
              <input
                type="email"
                value={formData.offenderOwnerEmail || ''}
                onChange={(e) => update('offenderOwnerEmail', e.target.value)}
                className="p-2 border rounded"
              />
            </div>
          </>
        )}

      </div>
    </div>
  )
}

export default OffendingVehicle
