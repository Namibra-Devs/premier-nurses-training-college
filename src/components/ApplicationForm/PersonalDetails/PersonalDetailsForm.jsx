import React, { useState, useEffect } from "react";
import ProfilePictureUpload from "./ProfilePictureUpload";
import SaveButton from "../Buttons/SaveButton";

const PersonalDetailsForm = ({ preview, setPreview, onSave }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Load program data on component mount
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100); // Trigger the animation
  }, []);

  const [formData, setFormData] = useState({
    profilePicture: null,
    // Personal Information--------
    surname: "",
    firstName: "",
    otherName: "",
    gender: "",
    dateOfBirth: "",
    age: "",
    placeOfBirth: "",
    religion: "",
    hometown: "",
    district: "",
    region: "",
    maritalStatus: "Single",
    numberOfChildren: "",
    healthCondition: "",
    Disability: "",
    languagesSpoken: "",
    // End Personal Information

    // Parent/Guardian Information-----------
    parentGuardian: {
      name: "",
      address: "",
      occupation: "",
      contact: "",
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleParentChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      parentGuardian: {
        ...prevData.parentGuardian,
        [name]: value,
      },
    }));
  };

  const handleSave = () => {
    onSave({ formData }); // Pass the data back to the parent
  };

  return (
    <div
      className={`bg-white p-6 rounded transform transition-transform duration-500 ${
        isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
      }`}
    >
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-2xl font-semibold mb-4">Personal Details</h2>
        {/* Profile Picture Upload */}
        <div className="mb-4">
          <ProfilePictureUpload preview={preview} setPreview={setPreview} />
        </div>
      </div>

      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
        <div>
          <label className="block font-medium mb-2">Surname</label>
          <input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleInputChange}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label className="block font-medium mb-2">First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label className="block font-medium mb-2">Other Name</label>
          <input
            type="text"
            name="otherName"
            value={formData.otherName}
            onChange={handleInputChange}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label className="block font-medium mb-2">Gender</label>
          <select
            name="relationship"
            value={formData.parentGuardian.relationship}
            onChange={handleParentChange}
            className="w-full border rounded p-2"
          >
            <option value=""></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <label className="block font-medium mb-2">Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleInputChange}
            className="w-full border rounded p-2"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-2">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div className="mb-4">
            <label className="block font-medium mb-2">Marital Status</label>
            <select
              name="maritalStatus"
              value={formData.maritalStatus}
              onChange={handleInputChange}
              className="w-full border rounded p-2"
            >
              <option value="Single">Single</option>
              <option value="Married">Married</option>
            </select>
          </div>
        </div>
      </div>

      {/* Date of Birth and Age ------*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Languages Spoken*/}
        <div>
          <label className="block font-medium mb-2">Languages Spoken</label>
          <input
            type="text"
            name="languagesSpoken"
            value={formData.languagesSpoken}
            onChange={handleInputChange}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label className="block font-medium mb-2">Place of Birth</label>
          <input
            type="text"
            name="placeOfBirth"
            value={formData.placeOfBirth}
            onChange={handleInputChange}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label className="block font-medium mb-2">Religion</label>
          <input
            type="text"
            name="religion"
            value={formData.religion}
            onChange={handleInputChange}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label className="block font-medium mb-2">Hometown</label>
          <input
            type="text"
            name="hometown"
            value={formData.hometown}
            onChange={handleInputChange}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label className="block font-medium mb-2">District</label>
          <input
            type="text"
            name="district"
            value={formData.district}
            onChange={handleInputChange}
            className="w-full border rounded p-2"
          />
        </div>
        <div>
          <label className="block font-medium mb-2">Region</label>
          <input
            type="text"
            name="region"
            value={formData.region}
            onChange={handleInputChange}
            className="w-full border rounded p-2"
          />
        </div>
      </div>

      {/* Parent/Guardian Details */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-3">
          Parent/Guardian Information
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.parentGuardian.name}
              onChange={handleParentChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block font-medium mb-2">Occupation</label>
            <input
              type="text"
              name="occupation"
              value={formData.parentGuardian.occupation}
              onChange={handleParentChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block font-medium mb-2">Contact</label>
            <input
              type="text"
              name="contact"
              value={formData.parentGuardian.contact}
              onChange={handleParentChange}
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block font-medium mb-2">Address</label>
            <input
              type="text"
              name="address"
              value={formData.parentGuardian.address}
              onChange={handleParentChange}
              className="w-full border rounded p-2"
            />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <SaveButton onClick={() => handleSave("personalDetails", formData)} />
      </div>
    </div>
  );
};

export default PersonalDetailsForm;
