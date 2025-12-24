export const initialFormData = {
  // ============================
  // CLAIM DETAILS
  // ============================
  claim: {
    date: "",            // "YYYY-MM-DD"
    fault: ""            // select
  },

  // ============================
  // DRIVER DETAILS (INSURED)
  // ============================
  driver: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    suburb: "",
    postcode: "",
    state: "",
    dob: "",
    licenceNo: "",
    licenceExpiry: ""
  },

  // ============================
  // ACCIDENT DETAILS
  // ============================
  accident: {
    place: "",
    vehicleLocation: "",
    street: "",
    accidentDate: "",
    accidentTime: "",
    preExistingDamage: "",
    roadSurface: "",
    carsInvolved: "1",
    insuredVehicleWas: "", // select
    whatHappened: "",
    myCarDamage: "",
    thirdPartyCarDamage: "",
    myCarDamageMarkers: [],
    thirdPartyCarDamageMarkers: [],
    myCarDamageImages: [],
    thirdPartyCarDamageImages: []
  },

  // ============================
  // THIRD PARTY DETAILS
  // ============================
  thirdParty: {
    // Car details
    make: "",
    model: "",
    year: "",
    insured: "",                 // select
    rego: "",
    coverCompany: "",

    // Owner details
    owner: {
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
      suburb: "",
      state: "",
      postcode: "",
      dob: "",
      licenceNo: ""
    },

    // Driver details
    driver: {
      sameAsOwner: false,
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
      suburb: "",
      state: "",
      postcode: "",
      dob: "",
      licenceNo: ""
    }
  },

  // ============================
  // FILE UPLOADS
  // ============================
  uploads: {
    myCarImages: [],      // array to store multiple images
    otherCarImages: [],   // array to store multiple images
    documents: []         // array for PDFs
  },

  // ============================
  // POLICE DETAILS
  // ============================
  police: {
    reportedPolice: "", // select
    firstName: "",
    lastName: "",
    station: ""
  },

  // ============================
  // VEHICLE AFTER ACCIDENT
  // ============================
  afterAccident: {
    vehicleTowed: "",     // select or yes/no
    towedLocation: "",
    towedBy: "",
    repairable: ""        // select
  },

  // ============================
  // WITNESSES
  // ============================
  witnesses: [
    { name: "", phone: "" },
    { name: "", phone: "" }
  ],

  // ============================
  // AUTHORITY TO ACT
  // ============================
  authority: {
    agreed: false,
    signature: "",
    signatureDate: ""
  }
}
