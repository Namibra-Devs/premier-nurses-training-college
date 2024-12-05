import React, { useState, useEffect, useContext } from "react";
import { AiOutlineEdit, AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import { FormDataContext } from "../../Context/FormDataContext";

const Results = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [resultsData, setResultsData] = useState({
    examType: "WAEC",
    indexNumber: "",
    year: "",
    subjectType: "Core",
    subjectTitle: "",
    grade: "",
  });
  const { formData, setformData } = useContext(FormDataContext);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100); // Trigger the animation
  }, []);

  const subjects = {
    Core: ["Mathematics", "English", "Science", "Social Studies"],
    Elective: ["Biology", "Physics", "Economics", "Literature"],
  };

  const grades = ["A", "B", "C", "D", "E", "F"];

  // Handle form change
  const handleChange = (e) => {
    setResultsData({ ...resultsData, [e.target.name]: e.target.value });
  };

  // Validation function
  const validate = () => {
    const newErrors = {};

    if (!resultsData.indexNumber.match(/^\d{8}$/)) {
      newErrors.indexNumber = "Index number must be exactly 8 digits.";
    }

    if (!resultsData.year.match(/^\d{4}$/)) {
      newErrors.year = "Year must be a valid 4-digit number.";
    }

    if (!resultsData.subjectTitle) {
      newErrors.subjectTitle = "Subject title is required.";
    }

    if (!resultsData.grade) {
      newErrors.grade = "Grade is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Add a result entry
  const handleAddResult = () => {
    if (validate()) {
      setformData([...formData, { ...resultsData, id: Date.now() }]);
      setResultsData({
        examType: "WAEC",
        indexNumber: "",
        year: "",
        subjectType: "Core",
        subjectTitle: "",
        grade: "",
      }); // Reset form
      setErrors({});
    } else {
      alert("Please correct the errors before adding.");
    }
  };

  // Edit a result entry
  const handleEdit = (id) => {
    const resultToEdit = formData.find((result) => result.id === id);
    setResultsData({ ...resultToEdit });
    setformData(formData.filter((result) => result.id !== id)); // Remove from list for editing
  };

  // Delete a result entry
  const handleDelete = (id) => {
    setformData(formData.filter((result) => result.id !== id));
  };

  return (
    <div className="w-full">
      {/* Input Form */}
      <div
        className={`grid gap-4 transform transition-transform duration-500 ${
          isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
      >
        <h2 className="text-2xl font-semibold mb-3">Results</h2>
        <form>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-2">Exams Type</label>
              <select
                name="examType"
                value={resultsData.examType}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mb-2"
              >
                <option value="WAEC">WAEC</option>
                <option value="NOVDEV">NOVDEV</option>
              </select>
              <label className="block font-medium mb-2">Index Number</label>
              <input
                type="text"
                name="indexNumber"
                placeholder="Index Number"
                value={resultsData.indexNumber}
                onChange={handleChange}
                className={`w-full p-2 border ${
                  errors.indexNumber ? "border-red-500" : "border-gray-300"
                } rounded mb-2`}
              />
              {errors.indexNumber && (
                <p className="text-red-500 text-sm">{errors.indexNumber}</p>
              )}
              <label className="block font-medium mb-2">Year of Exams</label>
              <input
                type="text"
                name="year"
                placeholder="Year of Exams"
                value={resultsData.year}
                onChange={handleChange}
                className={`w-full p-2 border ${
                  errors.year ? "border-red-500" : "border-gray-300"
                } rounded mb-2`}
              />
              {errors.year && (
                <p className="text-red-500 text-sm">{errors.year}</p>
              )}
            </div>
            <div>
              <label className="block font-medium mb-2">Subject Type</label>
              <select
                name="subjectType"
                value={resultsData.subjectType}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded mb-2"
              >
                <option value="Core">Core</option>
                <option value="Elective">Elective</option>
              </select>
              <label className="block font-medium mb-2">Subject Title</label>
              <select
                name="subjectTitle"
                value={resultsData.subjectTitle}
                onChange={handleChange}
                className={`w-full p-2 border ${
                  errors.subjectTitle ? "border-red-500" : "border-gray-300"
                } rounded mb-2`}
              >
                <option value="">Select Subject Title</option>
                {subjects[resultsData.subjectType]?.map((subject, index) => (
                  <option key={index} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
              {errors.subjectTitle && (
                <p className="text-red-500 text-sm">{errors.subjectTitle}</p>
              )}
              <label className="block font-medium mb-2">Grade</label>
              <select
                name="grade"
                value={resultsData.grade}
                onChange={handleChange}
                className={`w-full p-2 border ${
                  errors.grade ? "border-red-500" : "border-gray-300"
                } rounded mb-2`}
              >
                <option value="">Select Grade</option>
                {grades.map((grade, index) => (
                  <option key={index} value={grade}>
                    {grade}
                  </option>
                ))}
              </select>
              {errors.grade && (
                <p className="text-red-500 text-sm">{errors.grade}</p>
              )}
            </div>
          </div>
        </form>
        <div className="flex items-center justify-end">
          <button
            onClick={handleAddResult}
            className="flex items-center gap-2 bg-primary text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            <AiOutlinePlus />
            Add Result
          </button>
        </div>
      </div>
      {/* Results List */}
      {formData.length > 0 && (
        <div data-aos="fade-up" data-aos-duration="800"className="mt-6" >
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
                {formData.map((result) => (
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
                        title="Edit"
                      >
                        <AiOutlineEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(result.id)}
                        className="text-red-500 hover:text-red-700 mx-2"
                        title="Delete"
                      >
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
