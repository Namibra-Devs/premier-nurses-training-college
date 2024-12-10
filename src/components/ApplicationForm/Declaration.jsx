import React, { useState, useEffect, useContext } from "react";
import { FormDataContext } from "../Context/FormDataContext";
const Declaration = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const {formData, setformData} = useContext(FormDataContext || ""); // Start with an empty object if no data is found in localStorage

  // Load program data on component mount
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100); // Trigger the animation
  }, []);

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    // Validate Name
    if (!formData.name?.trim()) {
      newErrors.name = "Name is required.";
    }
    //Validate Date
    if (!formData.date) {
      newErrors.date = "Date is required.";
    } 
    // Return the errors
    return newErrors;
  }

  return (
    <>
      <div
        className={`transform transition-transform duration-500 ${ isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"}`}>
        <h2 className="text-2xl font-semibold mb-6">Declaration</h2>

        <p className="text-gray-700 mb-4">
          I hereby declare that the information given above is true.
        </p>

        <form className="space-y-4">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData?.name || ""}
              onChange={handleChange}
              placeholder="Enter your name"
              className="block w-full p-3 border border-gray-300 rounded"
            />
            {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
          </div>

          {/* Date Field */}
          <div>
            <label
              htmlFor="date"
              className="block text-gray-700 font-medium mb-2">
              Date
            </label>
            <input
              id="date"
              type="date"
              name="date"
              value={formData?.date || ""}
              onChange={handleChange}
              className="block w-full p-3 border border-gray-300 rounded"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Declaration;
