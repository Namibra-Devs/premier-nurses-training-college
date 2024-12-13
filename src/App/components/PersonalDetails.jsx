// src/components/PersonalDetails.jsx
import React, { useState } from "react";

const PersonalDetails = ({ onSave }) => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!dob.trim()) newErrors.dob = "Date of birth is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validate()) {
      onSave({ name, dob });
    }
  };

  return (
    <div className="p-4">
      <div>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mt-2"
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}
      </div>
      <div className="mt-4">
        <label>Date of Birth</label>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          className="border p-2 mt-2"
        />
        {errors.dob && <p className="text-red-500">{errors.dob}</p>}
      </div>
      <button onClick={handleSave} className="bg-blue-600 text-white p-2 mt-4">
        Save
      </button>
    </div>
  );
};

export default PersonalDetails;
