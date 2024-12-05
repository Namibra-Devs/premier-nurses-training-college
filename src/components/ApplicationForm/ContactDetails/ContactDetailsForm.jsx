import React, { useState, useEffect, useContext } from "react";
import { FormDataContext } from "../../Context/FormDataContext";

const ContactDetailsForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const {formData, setformData} = useContext(FormDataContext);
  const [errors, setErrors] = useState({});

  // Load program data on component mount
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100); // Trigger the animation
  }, []);

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateContactDetails = () => {
    const newErrors = {};
  
    // Validate Email
    if (!formData.emailAddress?.trim()) {
      newErrors.emailAddress = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.emailAddress)) {
      newErrors.emailAddress = "Please enter a valid email address.";
    }
  
    // Validate Phone Number
    if (!formData.phoneNumber?.trim()) {
      newErrors.phoneNumber = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be a valid 10-digit number.";
    }
  
    // Validate Permanent Address
    if (!formData.permanentAddress?.trim()) {
      newErrors.permanentAddress = "Permanent address is required.";
    }
  
    // Validate Postal Address
    if (!formData.postalAddress?.trim()) {
      newErrors.postalAddress = "Postal address is required.";
    }
  
    // Validate Postal Region
    if (!formData.postalRegion) {
      newErrors.postalRegion = "Please select a postal region.";
    }
  
    // Validate Postal Town
    if (!formData.postalTown?.trim()) {
      newErrors.postalTown = "Postal town is required.";
    }
  
    // Return the errors
    return newErrors;
  };

  return (
    <div>
      {/* Contact Details */}
      <div
        className={`transform transition-transform duration-500 ${
          isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
      >
        <h3 className="text-2xl font-semibold mb-6">Contact Details</h3>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-2">Email</label>
            <input
              type="email"
              name="emailAddress"
              value={formData?.emailAddress}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
            {errors.emailAddress && <p className="text-red-500 text-xs">{errors.emailAddress}</p>}
          </div>
          <div>
            <label className="block font-medium mb-2">Phone Number</label>
            <input
              type="number"
              name="phoneNumber"
              value={formData?.phoneNumber}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
            {errors.phoneNumber && <p className="text-red-500 text-xs">{errors.phoneNumber}</p>}
          </div>
          <div>
            <label className="block font-medium mb-2">Permanent Address</label>
            <input
              type="text"
              name="permanentAddress"
              value={formData?.permanentAddress}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
            {errors.permanentAddress && <p className="text-red-500 text-xs">{errors.permanentAddress}</p>}
          </div>
          <div>
            <label className="block font-medium mb-2">Postal Address</label>
            <input
              type="text"
              name="postalAddress"
              value={formData?.postalAddress}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
            {errors.postalAddress && <p className="text-red-500 text-xs">{errors.postalAddress}</p>}
          </div>
          <div>
            <label className="block font-medium mb-2">Postal Region</label>
            <select
              name="postalRegion"
              value={formData?.postalRegion}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mb-2"
            >
              <option value="">--Select a Region--</option>
              <option value="Ashanti">Ashanti</option>
              <option value="Greater Accra">Greater Accra</option>
              {/* Add other options here */}
            </select>
            {errors.postalRegion && <p className="text-red-500 text-xs">{errors.postalRegion}</p>}
          </div>
          <div>
            <label className="block font-medium mb-2">Postal Town</label>
            <input
              type="text"
              name="postalTown"
              value={formData?.postalTown}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
            {errors.postalTown && <p className="text-red-500 text-xs">{errors.postalTown}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactDetailsForm;
