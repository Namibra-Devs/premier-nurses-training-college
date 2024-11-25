import React, { useState, useEffect } from "react";
import { AiOutlineEdit, AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import SaveButton from "../Buttons/SaveButton";

const EducationalBackground = ({ onSave }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Load program data on component mount
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100); // Trigger the animation
  }, []);

  const [educations, setEducations] = useState([]);
  const [form, setForm] = useState({
    schoolName: "",
    address: "",
    from: "",
    to: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add education to the list
  const handleAddEducation = () => {
    if (form.schoolName && form.address && form.from && form.to) {
      setEducations([...educations, { ...form, id: Date.now() }]);
      setForm({ schoolName: "", address: "", from: "", to: "" }); // Reset form
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
    setForm({ ...educationToEdit });
    setEducations(educations.filter((edu) => edu.id !== id)); // Remove from list for editing
  };

  const handleSave = (e) => {
    onSave({ form });
  };

  return (
    <div>
      {/* Input Form */}
      <div
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
            value={form.schoolName}
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
            value={form.address}
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
              value={form.from}
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
              value={form.to}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <SaveButton
            onClick={() => handleSave("educationalBackground", form)}
          />
          <button
            onClick={handleAddEducation}
            className="flex items-center float-right gap-2 bg-primary text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            <AiOutlinePlus />
            Add Education
          </button>
        </div>
      </div>

      {/* Education List */}
      {educations.length > 0 && (
        <div >
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