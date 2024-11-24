import React, { useState, useEffect } from "react";

const ContactDetailsForm = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Load program data on component mount
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100); // Trigger the animation
  }, []);



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
      <div className={`bg-white p-6 rounded transform transition-transform duration-500 ${
            isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}>
        <h3 className="text-2xl font-semibold mb-6">Contact Details</h3>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
