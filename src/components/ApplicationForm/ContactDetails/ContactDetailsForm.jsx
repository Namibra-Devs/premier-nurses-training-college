import React, { useState, useEffect, useContext } from "react";
import { FormDataContext } from "../../Context/FormDataContext";

const ContactDetailsForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const {formData, setformData} = useContext(FormDataContext)

  // Load program data on component mount
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100); // Trigger the animation
  }, []);

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
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
            <select
                name="postalRegion"
                value={formData?.postalRegion}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mb-2">

                <option value="" > --Select a Region-- </option>
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
      </div>
    </div>
  );
};

export default ContactDetailsForm;
