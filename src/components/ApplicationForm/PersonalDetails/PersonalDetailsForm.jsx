import React, { useState } from "react";
import ProfilePictureUpload from "./ProfilePictureUpload";

const PersonalDetailsForm = ({preview, setPreview}) => {
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

  return (
    <div className="" data-aos="fade-up" data-aos-duration="800">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-2xl font-semibold mb-4">Personal Details</h2>
        {/* Profile Picture Upload */}
        <div className="mb-4">
          <ProfilePictureUpload preview={preview} setPreview={setPreview} />
        </div>
      </div>

      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2 bg-white p-6 rounded-2xl ">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-6 rounded-2xl mt-6">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-6 rounded-2xl">
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

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded">
          Previous
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Save and Continue
        </button>
      </div>
    </div>
  );
};

export default PersonalDetailsForm;
