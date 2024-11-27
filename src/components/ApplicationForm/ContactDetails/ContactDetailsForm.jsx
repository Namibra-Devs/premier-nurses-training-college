import React, { useState, useEffect } from "react";
import SaveButton from "../Buttons/SaveButton";
import OverlayAlert from "../FormControls/OverlayAlert";

const saveContactData = (contactData) => {
  localStorage.setItem("contactData", JSON.stringify(contactData));
};

const retrivecontactData = () => {
  const contactData = localStorage.getItem("contactData");
  if (contactData) {
    return JSON.parse(contactData);
  }
  return {};
};

const ContactDetailsForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [contactData, setcontactData] = useState();
  const [showAlert, setShowAlert] = useState(false);

  // Load program data on component mount
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100); // Trigger the animation
  }, []);

  const handleChange = (e) => {
    setcontactData({ ...contactData, [e.target.name]: e.target.value });
  };

  // Handle Saved Alert
  const handleSubmit = (e) => {
    e.preventDefault();
    saveContactData(contactData);
  };

  const handleSave = (e) => {
    e.preventDefault();

    try {
      saveContactData(contactData); // Save the data
      setShowAlert(true); // Show success alert
      setTimeout(() => setShowAlert(false), 3000); // Hide after 3 seconds
    } catch (error) {
      console.error("Save failed:", error);
    }
  };

  // A function to load and mount the form data anytime the component mount
  const handleLoadData = () => {
    const loadedData = retrivecontactData();//retrived data from the local storage
    if(loadedData){
      setcontactData(loadedData); //Now update the state with the loaded data from the storage
    }else{
      console.log("No data found!");
    }
  }

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
              value={contactData?.emailAddress}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block font-medium mb-2">Phone Number</label>
            <input
              type="number"
              name="phoneNumber"
              value={contactData?.phoneNumber}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block font-medium mb-2">Permanent Address</label>
            <input
              type="text"
              name="permanentAddress"
              value={contactData?.permanentAddress}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block font-medium mb-2">Postal Address</label>
            <input
              type="text"
              name="postalAddress"
              value={contactData?.postalAddress}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block font-medium mb-2">Postal Region</label>
            <input
              type="text"
              name="postalRegion"
              value={contactData?.postalRegion}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block font-medium mb-2">Postal Town</label>
            <input
              type="text"
              name="postalTown"
              value={contactData?.postalTown}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
          </div>
        </form>
        <div className="mt-5 flex items-center gap-4">
        <button
          onClick={handleLoadData}
          className="px-4 py-2 bg-teal text-white rounded hover:bg-yellow-500">
                Nest
              </button>
          <SaveButton onClick={handleSave} />
        </div>
      </div>
    </div>
  );
};

export default ContactDetailsForm;
