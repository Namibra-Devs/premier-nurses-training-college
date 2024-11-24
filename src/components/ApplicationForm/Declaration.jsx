import React, { useState } from "react";

const Declaration = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || date.trim() === "") {
      alert("Please fill in all fields before submitting.");
      return;
    }

    setIsSubmitted(true);
    alert("Declaration submitted successfully!");
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6">Declaration</h2>

      <p className="text-gray-700 mb-4">
        I hereby declare that the information given above is true.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="block w-full p-3 border border-gray-300 rounded"
          />
        </div>

        {/* Date Field */}
        <div>
          <label
            htmlFor="date"
            className="block text-gray-700 font-medium mb-2"
          >
            Date
          </label>
          <input
            id="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="block w-full p-3 border border-gray-300 rounded"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            Submit Declaration
          </button>
        </div>
      </form>

      {/* Confirmation Message */}
      {isSubmitted && (
        <p className="mt-4 text-green-600 font-medium">
          Thank you for submitting your declaration, {name}!
        </p>
      )}
    </div>
  );
};

export default Declaration;
