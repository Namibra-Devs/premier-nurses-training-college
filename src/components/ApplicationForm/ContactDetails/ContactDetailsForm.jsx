import React, { useState, useEffect } from "react";
import SaveButton from "../Buttons/SaveButton";
import OverlayAlert from "../FormControls/SuccessAlert";
import { useFormContext } from "../FormContext/FormProvider";

const saveContactData = (contactDetails) => {
  localStorage.setItem("contactDetails", JSON.stringify(contactDetails));
};

const retrivecontactData = () => {
  const contactDetails = localStorage.getItem("contactDetails");
  if (contactDetails) {
    return JSON.parse(contactDetails);
  }
  return {};
};

const ContactDetailsForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [contactDetails, setContactDetails] = useState(retrivecontactData());
  const [showAlert, setShowAlert] = useState(false);
  const [errors, setErrors] = useState({});
  const { updateFormData } = useFormContext();

  // Load program data on component mount
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100); // Trigger the animation
  }, []);

  const handleChange = (e) => {
    setContactDetails({ ...contactDetails, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    updateFormData("contactDetails", contactDetails);
  }, [contactDetails]);

  const validateContactDetails = () => {
    const newErrors = {};
  
    // Validate Email
    if (!contactDetails.emailAddress?.trim()) {
      newErrors.emailAddress = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactDetails.emailAddress)) {
      newErrors.emailAddress = "Please enter a valid email address.";
    }
  
    // Validate Phone Number
    if (!contactDetails.phoneNumber?.trim()) {
      newErrors.phoneNumber = "Phone number is required.";
    } else if (!/^\d{10}$/.test(contactDetails.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be a valid 10-digit number.";
    }
  
    // Validate Permanent Address
    if (!contactDetails.permanentAddress?.trim()) {
      newErrors.permanentAddress = "Permanent address is required.";
    }
  
    // Validate Postal Address
    if (!contactDetails.postalAddress?.trim()) {
      newErrors.postalAddress = "Postal address is required.";
    }
  
    // Validate Postal Region
    if (!contactDetails.postalRegion) {
      newErrors.postalRegion = "Please select a postal region.";
    }
  
    // Validate Postal Town
    if (!contactDetails.postalTown?.trim()) {
      newErrors.postalTown = "Postal town is required.";
    }
    // Return the errors
    return newErrors;
  };

  const handleSave = () => {
    const validation = validateContactDetails();
    try {
      if (Object.keys(validation).length > 0) {
        setErrors(validation);
      } else {
        saveContactData(contactDetails); // Save the data
        setShowAlert(true); // Show success alert
        setTimeout(() => setShowAlert(false), 1000); // Hide after 3 second
      }
    } catch (error) {
      console.error("Save failed:", error);
    }
  };

  return (
    <div>
      {/* Save Alert */}
      {showAlert && <OverlayAlert message="Data Saved!" />}
      {/* Contact Details */}
      <div
        className={`bg-white p-4 rounded transform transition-transform duration-500 ${
          isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}>
        <h3 className="text-2xl font-semibold mb-6">Contact Details</h3>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
          <label className="block font-medium mb-2">Email</label>
          <input
              type="email"
              name="emailAddress"
              value={contactDetails?.emailAddress}
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
              value={contactDetails?.phoneNumber}
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
              value={contactDetails?.permanentAddress}
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
              value={contactDetails?.postalAddress}
              onChange={handleChange}
              className="w-full border rounded p-2"
          />
          {errors.postalAddress && <p className="text-red-500 text-xs">{errors.postalAddress}</p>}
          </div>
          <div>
          <label className="block font-medium mb-2">Postal Region</label>
          <select
              name="postalRegion"
              value={contactDetails?.postalRegion}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mb-2">
            
              <option value="">--Select a Region--</option>
              <option value="Ashanti">Ashanti</option>
              <option value="Greater Accra">Greater Accra</option>
              <option value="Northern">Northern</option>
              <option value="Volta">Volta</option>
              <option value="Central">Central</option>
              <option value="Western">Western</option>
              <option value="Upper-West">Upper-West</option>
              <option value="Upper-East">Upper-East</option>
              <option value="Oti">Oti</option>
              <option value="Savannah">Savannah</option>
              <option value="Bono East">Bono East</option>
              <option value="Western North">Western North</option>
              <option value="Brong Ahafo">Brong Ahafo</option>
              <option value="North East">North East</option>
              <option value="Ahafo">Ahafo</option>
              <option value="Eastern">Eastern</option>
          </select>
          {errors.postalRegion && <p className="text-red-500 text-xs">{errors.postalRegion}</p>}
          </div>
          <div>
          <label className="block font-medium mb-2">Postal Town</label>
          <input
              type="text"
              name="postalTown"
              value={contactDetails?.postalTown}
              onChange={handleChange}
              className="w-full border rounded p-2"
          />
          {errors.postalTown && <p className="text-red-500 text-xs">{errors.postalTown}</p>}
          </div>
        </form>
        <div className="mt-5 flex items-center gap-4">
          <SaveButton onClick={handleSave} />
        </div>
      </div>
    </div>
  );
};

export default ContactDetailsForm;