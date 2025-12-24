'use client'

const YourDetails = ({ formData, setFormData }) => {

  // Helper function to update nested fields
  const updateField = (path, value) => {
    const keys = path.split(".");
    setFormData(prev => {
      let newData = { ...prev };
      let obj = newData;

      keys.slice(0, -1).forEach(k => {
        obj[k] = { ...obj[k] };
        obj = obj[k];
      });

      obj[keys[keys.length - 1]] = value;
      return newData;
    });
  };

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Your Details</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* CLAIM DATE */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">Claim Date</label>
          <input
            type="date"
            value={formData.claim.date}
            onChange={(e) => updateField("claim.date", e.target.value)}
            className="p-2 border rounded"
            required
          />
        </div>

        {/* CLAIM FAULT */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">Claim Fault</label>
          <select
            value={formData.claim.fault}
            onChange={(e) => updateField("claim.fault", e.target.value)}
            className="p-2 border rounded"
            required
          >
            <option value="">--Select Fault--</option>
            <option value="My Fault">My Fault</option>
            <option value="Not My Fault">Not My Fault</option>
            <option value="Dispute">Dispute</option>

          </select>
        </div>

        {/* FIRST NAME */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">First Name</label>
          <input
            type="text"
            value={formData.driver.firstName}
            onChange={(e) => updateField("driver.firstName", e.target.value)}
            className="p-2 border rounded"
            required
          />
        </div>

        {/* LAST NAME */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">Last Name</label>
          <input
            type="text"
            value={formData.driver.lastName}
            onChange={(e) => updateField("driver.lastName", e.target.value)}
            className="p-2 border rounded"
            required
          />
        </div>

        {/* EMAIL */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">Email</label>
          <input
            type="email"
            value={formData.driver.email}
            onChange={(e) => updateField("driver.email", e.target.value)}
            className="p-2 border rounded"
            required
          />
        </div>

        {/* PHONE */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">Phone Number</label>
          <input
            type="text"
            value={formData.driver.phone}
            onChange={(e) => updateField("driver.phone", e.target.value)}
            className="p-2 border rounded"
            required
          />
        </div>

        {/* ADDRESS */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">Address</label>
          <input
            type="text"
            value={formData.driver.address}
            onChange={(e) => updateField("driver.address", e.target.value)}
            className="p-2 border rounded"
            required
          />
        </div>

        {/* SUBURB */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">Suburb</label>
          <input
            type="text"
            value={formData.driver.suburb}
            onChange={(e) => updateField("driver.suburb", e.target.value)}
            className="p-2 border rounded"
            required
          />
        </div>

        {/* POSTCODE */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">Postcode</label>
          <input
            type="text"
            value={formData.driver.postcode}
            onChange={(e) => updateField("driver.postcode", e.target.value)}
            className="p-2 border rounded"
            required
          />
        </div>

        {/* STATE */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">State</label>
          <select
            value={formData.driver.state}
            onChange={(e) => updateField("driver.state", e.target.value)}
            className="p-2 border rounded"
            required
          >
            <option value="">--Select State--</option>
            <option value="NSW">NSW</option>
            <option value="VIC">VIC</option>
            <option value="QLD">QLD</option>
            <option value="SA">SA</option>
            <option value="WA">WA</option>
            <option value="TAS">TAS</option>
            <option value="NT">NT</option>
            <option value="ACT">ACT</option>
          </select>
        </div>

        {/* DOB */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">Date of Birth</label>
          <input
            type="date"
            value={formData.driver.dob}
            onChange={(e) => updateField("driver.dob", e.target.value)}
            className="p-2 border rounded"
            required
          />
        </div>

        {/* LICENCE NUMBER */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">Licence Number</label>
          <input
            type="text"
            value={formData.driver.licenceNo}
            onChange={(e) => updateField("driver.licenceNo", e.target.value)}
            className="p-2 border rounded"
            required
          />
        </div>

        {/* LICENCE EXPIRY */}
        <div className="flex flex-col">
          <label className="font-medium mb-1">Licence Expiry</label>
          <input
            type="date"
            value={formData.driver.licenceExpiry}
            onChange={(e) => updateField("driver.licenceExpiry", e.target.value)}
            className="p-2 border rounded"
            required
          />
        </div>

      </div>
    </div>
  )
}

export default YourDetails
