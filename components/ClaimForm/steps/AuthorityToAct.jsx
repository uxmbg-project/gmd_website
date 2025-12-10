'use client'

import React from 'react'

const AuthorityToAct = ({ formData, setFormData }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Authority to Act</h3>

      <p className="mb-4">
        I authorize GMD Auto Group to act on my behalf regarding this claim.
      </p>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={formData.authorize || false}
          onChange={(e) => setFormData({ ...formData, authorize: e.target.checked })}
          required
        />
        I Agree
      </label>
    </div>
  )
}

export default AuthorityToAct
