import React, { useState, useEffect } from "react";
import SaveButton from "../Buttons/SaveButton";
import OverlayAlert from "../FormControls/OverlayAlert";

const onSave = (formData) => {
  localStorage.setItem("formData", JSON.stringify(formData));
};

const retriveFormData = () => {
  const formData = localStorage.getItem("formData");
  if (formData) {
    return JSON.parse(formData);
  }
  return {};
};

const ContactDetailsForm = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Load program data on component mount
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100); // Trigger the animation
  }, []);

  // ----------------------------------
  const [formData, setFormData] = useState(retriveFormData());

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Saved Alert
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  const [showAlert, setShowAlert] = useState(false);
  const handleSave = (e) => {
    e.preventDefault();

    try {
      onSave(formData); // Save the data
      setShowAlert(true); // Show success alert
      setTimeout(() => setShowAlert(false), 3000); // Hide after 3 seconds
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
        className={`bg-white p-6 rounded transform transition-transform duration-500 ${
          isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
      >
        <h3 className="text-2xl font-semibold mb-6">Contact Details</h3>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-2">Email</label>
            <input
              type="email"
              name="emailAddress"
              value={formData?.emailAddress}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
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
          </div>
          <div>
            <label className="block font-medium mb-2">Postal Region</label>
            <input
              type="text"
              name="postalRegion"
              value={formData?.postalRegion}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
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
          </div>
        </form>
        <div className="mt-5">
          <SaveButton onClick={handleSave} />
        </div>
      </div>
    </div>
  );
};

export default ContactDetailsForm;
