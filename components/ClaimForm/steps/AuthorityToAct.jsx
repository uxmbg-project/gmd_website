'use client'

import React from 'react'

const AuthorityToAct = ({ formData, setFormData }) => {
  const update = (key, value) =>
    setFormData({
      ...formData,
      authority: {
        ...formData.authority,
        [key]: value,
      },
    })

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Authority To Act</h3>

      <div className="space-y-4 p-4 border rounded bg-white">
        <p className="text-sm leading-6 text-gray-700">
          I/We authorize <strong>GMD Auto Group | ABN: 91 670 233 422</strong> or GMD Authorized representative to act on my / our behalf to recover
          the losses I/we have suffered as a result of this motor accident.  
          I appoint GMD Auto Group or GMD Authorized representative as my/our agent for the purpose of:
        </p>

        <ul className="list-disc ml-6 text-sm text-gray-700 leading-6">
          <li>Making all decisions necessary for the conduct of the recovery action.</li>
          <li>Commencing legal proceedings (with my / our approval).</li>
          <li>
            Signing documents including settlement documents, and I/we provide irrevocable
            power of attorney for this purpose.
          </li>
          <li>
            Authorizing GMD Auto Group to deposit monies received on my behalf into their
            account and pay all expenses incurred including repairs, assessment fees, hire car,
            and any other properly incurred costs.
          </li>
          <li>
            Authorizing GMD Auto Group to deduct a recovery fee from recovered monies.
          </li>
          <li>
            Consenting to withdrawal of trust monies as per these terms without further notice.
          </li>
        </ul>

        <p className="text-sm text-gray-700 leading-6">
          I also authorize GMD Auto Group to store, quote and repair my vehicle.
          I instruct GMD to act on my behalf in relation to this collision including the issuing
          and prosecuting of proceedings and signing documents to effect settlement.
          I acknowledge I must notify of any change of contact details.
        </p>

        {/* Checkbox */}
        <label className="flex items-center gap-3 font-medium mt-4">
          <input
            type="checkbox"
            checked={formData.authority.agreed || false}
            onChange={(e) => update("agreed", e.target.checked)}
            required
          />
          I Agree to the Terms & Authorize GMD Auto Group
        </label>

        {/* Full Name */}
        <div className="flex flex-col mt-4">
          <label className="font-medium mb-1">Full Name (as signature)</label>
          <input
            type="text"
            value={formData.authority.signature || ''}
            onChange={(e) => update("signature", e.target.value)}
            placeholder="Enter your full name"
            className="p-2 border rounded"
            required
          />
        </div>

        {/* Signing Date */}
        <div className="flex flex-col mt-4">
          <label className="font-medium mb-1">Date Signed</label>
          <input
            type="date"
            value={formData.authority.signatureDate || ''}
            onChange={(e) => update("signatureDate", e.target.value)}
            className="p-2 border rounded"
            required
          />
        </div>
      </div>
    </div>
  )
}

export default AuthorityToAct
