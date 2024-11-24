import React, { useState } from "react";

const ContactDetailsForm = () => {
  const [formData, setFormData] = useState({
    // Contact Details---------
    permanentAddress: "",
    postalAddress: "",
    postalRegion: "",
    postalTown: "",
    emailAddress: "",
    phoneNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div>
      {/* Contact Details */}
      <div data-aos="fade-up" data-aos-duration="800">
        <h3 className="text-2xl font-semibold mb-4">Contact Details</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 bg-white p-6 rounded-2xl">
          <div>
            <label className="block font-medium mb-2">Email</label>
            <input
              type="email"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleInputChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block font-medium mb-2">Phone Number</label>
            <input
              type="number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block font-medium mb-2">Permanent Address</label>
            <input
              type="text"
              name="permanentAddress"
              value={formData.permanentAddress}
              onChange={handleInputChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block font-medium mb-2">Postal Address</label>
            <input
              type="text"
              name="postalAddress"
              value={formData.postalAddress}
              onChange={handleInputChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block font-medium mb-2">Postal Region</label>
            <input
              type="text"
              name="postalRegion"
              value={formData.postalRegion}
              onChange={handleInputChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block font-medium mb-2">Postal Town</label>
            <input
              type="text"
              name="postalTown"
              value={formData.postalTown}
              onChange={handleInputChange}
              className="w-full border rounded p-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetailsForm;
