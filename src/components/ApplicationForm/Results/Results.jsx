import React, { useState, useEffect } from "react";
import { AiOutlineEdit, AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import SaveButton from "../Buttons/SaveButton";
import OverlayAlert from "../FormControls/OverlayAlert";

// Save education list to localStorag
const saveResultsList = (resultsList) => {
  localStorage.setItem("results", JSON.stringify(resultsList));
};

// Retrieve education list from localStorage
const retrieveResultsList = () => {
  const savedList = localStorage.getItem("results");
  if (savedList) {
    return JSON.parse(savedList);
  }
  return [];
};

const Results = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [results, setResults] = useState(retrieveResultsList());
  const [form, setForm] = useState({
    examType: "WAEC",
    indexNumber: "",
    year: "",
    subjectType: "Core",
    subjectTitle: "",
    grade: "",
  });
  const [errors, setErrors] = useState({});

  // Load program data on component mount
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100); // Trigger the animation
  }, []);

  // Subject options
  const subjects = {
    Core: ["Mathematics", "English", "Science", "Social Studies"],
    Elective: ["Biology", "Physics", "Economics", "Literature"],
  };

  // Grade options
  const grades = ["A", "B", "C", "D", "E", "F"];

  // Handle form change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Validation function
  const validate = () => {
    const newErrors = {};

    if (!form.indexNumber.match(/^\d{8}$/)) {
      newErrors.indexNumber = "Index number must be exactly 8 digits.";
    }

    if (!form.year.match(/^\d{4}$/)) {
      newErrors.year = "Year must be a valid 4-digit number.";
    }

    if (!form.subjectTitle) {
      newErrors.subjectTitle = "Subject title is required.";
    }

    if (!form.grade) {
      newErrors.grade = "Grade is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Add a result entry
  const handleAddResult = () => {
    if (validate()) {
      setResults([...results, { ...form, id: Date.now() }]);
      setForm({
        examType: "WAEC",
        indexNumber: "",
        year: "",
        subjectType: "Core",
        subjectTitle: "",
        grade: "",
      }); // Reset form
      setErrors({});
    }
  };

  // Edit a result entry
  const handleEdit = (id) => {
    const resultToEdit = results.find((result) => result.id === id);
    setForm({ ...resultToEdit });
    setResults(results.filter((result) => result.id !== id)); // Remove from list for editing
  };

  // Delete a result entry
  const handleDelete = (id) => {
    setResults(results.filter((result) => result.id !== id));
  };

  // Handle Saved Alert
  const handleSubmit = (e) => {
    e.preventDefault();
    saveResultsList(results);
  };

  const [showAlert, setShowAlert] = useState(false);
  const handleSave = () => {
    try {
      if(results.length < 1){
        alert("No results to save!");
      }else{
        saveResultsList(results); // Save the data
        setShowAlert(true); // Show success alert
        setTimeout(() => setShowAlert(false), 1000); // Hide after 3 seconds
      }
    } catch (error) {
      console.error("Save failed:", error);
    }
  };

  return (
    <div className="w-full">
      {showAlert && <OverlayAlert message="Data saved!"/>}
      {/* Input Form */}
      <div
        className={`grid gap-4 mb-6 bg-white p-4 rounded transform transition-transform duration-500 ${
          isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}>
        <h2 className="text-2xl font-semibold mb-3">Results</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-2">Exams Type</label>
              <select
                name="examType"
                value={form.examType}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mb-2">
                <option value="WAEC">WAEC</option>
                <option value="NOVDEV">NOVDEV</option>
              </select>
              <label className="block font-medium mb-2">Index Number</label>
              <input
                type="text"
                name="indexNumber"
                placeholder="Index Number"
                value={form.indexNumber}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mb-2"
              />
              {errors.indexNumber && (<p className="text-red-500 text-xs">{errors.indexNumber}</p>)}
              <label className="block font-medium mb-2">Year of Exams</label>
              <input
                type="text"
                name="year"
                placeholder="Year of Exams"
                value={form.year}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mb-2"
              />
              {errors.year && (<p className="text-red-500 text-xs">{errors.year}</p>)}
            </div>
            <div>
              <label className="block font-medium mb-2">Subject Type</label>
              <select
                name="subjectType"
                value={form.subjectType}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mb-2">
                <option value="Core">Core</option>
                <option value="Elective">Elective</option>
              </select>
              <label className="block font-medium mb-2">Subject Title</label>
              <select
                name="subjectTitle"
                value={form.subjectTitle}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mb-2">
                <option value="">--Select Subject Title--</option>
                {subjects[form.subjectType]?.map((subject, index) => (
                  <option key={index} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
              {errors.subjectTitle && (<p className="text-red-500 text-xs">{errors.subjectTitle}</p>)}
              <label className="block font-medium mb-2">Grade</label>
              <select
                name="grade"
                placeholder="Grade"
                value={form.grade}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mb-2">
                <option value="">--Select Grade--</option>
                {grades.map((grade, index) => (
                  <option key={index} value={grade}>
                    {grade}
                  </option>
                ))}
              </select>
              {errors.grade && (<p className="text-red-500 text-xs">{errors.grade}</p>)}
            </div>
          </div>
        </form>
        <div className="flex items-center justify-between">
          <SaveButton onClick={handleSave} />
          <button
            onClick={handleAddResult}
            className="flex items-center float-right gap-2 bg-primary text-white py-2 px-4 rounded hover:bg-blue-600">
            <AiOutlinePlus />
            Add Result
          </button>
        </div>
      </div>

      {/* Results List */}
      {results.length > 0 && (
        <div data-aos="fade-up" data-aos-duration="800">
          <h3 className="text-xl font-semibold mb-2">Added Results List</h3>
          <div className="overflow-x-auto pb-4">
            <table className="w-full border-collapse border border-gray-300">
              <thead className="bg-blue-100">
                <tr>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Exams Type
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Index Number
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Year
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Subject
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-left">
                    Grade
                  </th>
                  <th className="border border-gray-300 px-4 py-2 text-center">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {results.map((result) => (
                  <tr key={result.id} className="hover:bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">
                      {result.examType}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {result.indexNumber}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {result.year}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {result.subjectType}: {result.subjectTitle}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {result.grade}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      <button
                        onClick={() => handleEdit(result.id)}
                        className="text-blue-500 hover:text-blue-700 mx-2"
                        title="Edit">
                        <AiOutlineEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(result.id)}
                        className="text-red-500 hover:text-red-700 mx-2">
                        <AiOutlineDelete />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Results;