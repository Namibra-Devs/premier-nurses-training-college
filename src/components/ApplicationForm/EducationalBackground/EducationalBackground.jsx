import React, { useState, useEffect, useContext } from "react";
import { AiOutlineEdit, AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import { FormDataContext } from "../../Context/FormDataContext";

const EducationalBackground = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { formData, setformData } = useContext(FormDataContext);

  // Temporary variable for form inputs
  const [tempEduData, setTempEduData] = useState({
    schoolName: "",
    address: "",
    from: "",
    to: "",
  });

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100); // Trigger animation
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setTempEduData({ ...tempEduData, [e.target.name]: e.target.value });
  };

  // Add education to the list
  const handleAddEducation = () => {
    if (
      tempEduData.schoolName &&
      tempEduData.address &&
      tempEduData.from &&
      tempEduData.to
    ) {
      setformData([...formData, { ...tempEduData, id: Date.now() }]); // Add to context state
      setTempEduData({ schoolName: "", address: "", from: "", to: "" }); // Reset form
    } else {
      alert("Please fill all fields before adding.");
    }
  };

  // Delete education entry
  const handleDelete = (id) => {
    setformData(formData.filter((edu) => edu.id !== id));
  };

  // Edit education entry
  const handleEdit = (id) => {
    const educationToEdit = formData.find((edu) => edu.id === id);
    setTempEduData({ ...educationToEdit });
    setformData(formData.filter((edu) => edu.id !== id)); // Remove from list for editing
  };

  return (
    <div>
      {/* Input Form */}
      <form
        className={`grid gap-4 transform transition-transform duration-500 ${
          isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}>
        <h2 className="text-2xl font-semibold mb-3">Educational Background</h2>
        <div>
          <label className="block font-medium mb-2">School Name</label>
          <input
            type="text"
            name="schoolName"
            placeholder="Name of School Attended"
            value={tempEduData.schoolName}
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
            value={tempEduData.address}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-2">From</label>
            <input
              type="date"
              name="from"
              placeholder="From (Year)"
              value={tempEduData.from}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block font-medium mb-2">To</label>
            <input
              type="date"
              name="to"
              placeholder="To (Year)"
              value={tempEduData.to}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleAddEducation}
            className="flex items-center gap-2 bg-primary text-white py-2 px-4 rounded hover:bg-blue-600">
            <AiOutlinePlus />
            Add Education
          </button>
        </div>
      </form>

      {/* Added Education List */}
      {formData.length > 0 && (
        <div data-aos="fade-up" data-aos-duration="800">
          <h3 className="text-xl font-semibold mb-2">Added Education List</h3>
          <ul className="space-y-4">
          {Array.isArray(formData) ? (
            formData.map((edu) => (
              <li
                key={edu.id}
                className="flex items-center justify-between p-4 border border-gray-300 rounded bg-gray-50">
                <div>
                  <p className="font-medium">{edu.schoolName}</p>
                  <p className="text-sm text-gray-600">{edu.address}</p>
                  <p className="text-sm text-gray-600">
                    {edu.from} - {edu.to}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => handleEdit(edu.id)}
                    className="text-blue-500 hover:text-blue-700">
                    <AiOutlineEdit />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(edu.id)}
                    className="text-red-500 hover:text-red-700">
                    <AiOutlineDelete />
                  </button>
                </div>
              </li>
            ))
          ) : (
            <p>No education data available.</p>
          )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default EducationalBackground;
