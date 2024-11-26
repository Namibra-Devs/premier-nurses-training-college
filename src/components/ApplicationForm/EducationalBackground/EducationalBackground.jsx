import React, { useState, useEffect } from "react";
import { AiOutlineEdit, AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import SaveButton from "../Buttons/SaveButton";
import OverlayAlert from "../FormControls/OverlayAlert";

// Save education list to localStorag
const saveEducationList = (educationList) => {
  localStorage.setItem("educations", JSON.stringify(educationList));
};

// Retrieve education list from localStorage
const retrieveEducationList = () => {
  const savedList = localStorage.getItem("educations");
  if (savedList) {
    return JSON.parse(savedList);
  }
  return [];
};

const EducationalBackground = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Load program data on component mount
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100); // Trigger the animation
  }, []);

  const [educations, setEducations] = useState(retrieveEducationList()); // Initialize from localStorage
  const [formData, setFormData] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Add education to the list
  const handleAddEducation = () => {
    if (
      formData.schoolName &&
      formData.address &&
      formData.from &&
      formData.to
    ) {
      setEducations([...educations, { ...formData, id: Date.now() }]);
      setFormData({ schoolName: "", address: "", from: "", to: "" }); // Reset form
    } else {
      alert("Please fill all fields before adding.");
    }
  };

  // Delete education entry
  const handleDelete = (id) => {
    setEducations(educations.filter((edu) => edu.id !== id));
  };

  // Edit education entry
  const handleEdit = (id) => {
    const educationToEdit = educations.find((edu) => edu.id === id);
    setFormData({ ...educationToEdit });
    setEducations(educations.filter((edu) => edu.id !== id)); // Remove from list for editing
  };

  // Handle Saved Alert
  const handleSubmit = (e) => {
    e.preventDefault();
    saveEducationList(educations);
  };

  const [showAlert, setShowAlert] = useState(false);
  const handleSave = (e) => {
    e.preventDefault();

    try {
      saveEducationList(educations); // Save the data
      setShowAlert(true); // Show success alert
      setTimeout(() => setShowAlert(false), 3000); // Hide after 3 seconds
    } catch (error) {
      console.error("Save failed:", error);
    }
  };

  return (
    <div>
      {showAlert && <OverlayAlert message="Data saved!"/>}
      {/* Input Form */}
      <form
        onSubmit={handleSubmit}
        className={`grid gap-4 mb-6 bg-white p-6 rounded transform transition-transform duration-500 ${
          isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
      >
        <h2 className="text-2xl font-semibold mb-3">Educational Background</h2>
        <div>
          <label className="block font-medium mb-2">School Name</label>
          <input
            type="text"
            name="schoolName"
            placeholder="Name of School Attended"
            value={formData.schoolName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block font-medium mb-2">School Address</label>
          <input
            type="text"
            name="address"
            placeholder="School Address"
            value={formData.address}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-2">From</label>
            <input
              type="text"
              name="from"
              placeholder="From (Year)"
              value={formData.from}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block font-medium mb-2">To</label>
            <input
              type="text"
              name="to"
              placeholder="To (Year)"
              value={formData.to}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <SaveButton onClick={handleSave} />
          <button
            onClick={handleAddEducation}
            className="flex items-center float-right gap-2 bg-primary text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            <AiOutlinePlus />
            Add Education
          </button>
        </div>
      </form>

      {/* Education List */}
      {educations.length > 0 && (
        <div data-aos="fade-up" data-aos-duration="800">
          <h3 className="text-xl font-semibold mb-2">Added Education List</h3>
          <div className="overflow-x-auto pb-4">
            <ul className="space-y-4">
              {educations.map((edu) => (
                <li
                  key={edu.id}
                  className="flex items-center justify-between p-4 border border-gray-300 rounded bg-gray-50"
                >
                  <div>
                    <p className="font-medium">{edu.schoolName}</p>
                    <p className="text-sm text-gray-600">{edu.address}</p>
                    <p className="text-sm text-gray-600">
                      {edu.from} - {edu.to}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(edu.id)}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      <AiOutlineEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(edu.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <AiOutlineDelete />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default EducationalBackground;
