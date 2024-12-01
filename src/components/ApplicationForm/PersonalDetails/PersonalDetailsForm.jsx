import React, { useState, useEffect, useContext } from "react";
import ProfilePictureUpload from "./ProfilePictureUpload";
import { FormDataContext } from "../../Context/FormDataContext";

const PersonalDetailsForm = ({ preview, setPreview }) => {
  const [isVisible, setIsVisible] = useState(false);
  const {formData, setformData} = useContext(FormDataContext)
  
  // Load program data on component mount
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100); // Trigger the animation
  }, []);

  // const [formData, setformData] = useState({
  //   profilePicture: null,
  //   // Personal Information--------
  //   surname: "",
  //   firstName: "",
  //   otherName: "",
  //   gender: "",
  //   dateOfBirth: "",
  //   age: "",
  //   placeOfBirth: "",
  //   religion: "",
  //   hometown: "",
  //   district: "",
  //   region: "",
  //   maritalStatus: "Single",
  //   numberOfChildren: "",
  //   healthCondition: "",
  //   Disability: "",
  //   languagesSpoken: "",
  //   // End Personal Information

  //   // Parent/Guardian Information-----------
  //   parentGuardian: {
  //     name: "",
  //     address: "",
  //     occupation: "",
  //     contact: "",
  //   },
  // });

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div
        className={`transform transition-transform duration-500 ${
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

        <form>
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
            <div>
              <label className="block font-medium mb-2">Surname</label>
              <input
                type="text"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                className="w-full border rounded p-2"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border rounded p-2"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Other Name</label>
              <input
                type="text"
                name="otherName"
                value={formData.otherName}
                onChange={handleChange}
                className="w-full border rounded p-2"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
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
                onChange={handleChange}
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
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block font-medium mb-2">Marital Status</label>
                <select
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  onChange={handleChange}
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
                onChange={handleChange}
                className="w-full border rounded p-2"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Place of Birth</label>
              <input
                type="text"
                name="placeOfBirth"
                value={formData.placeOfBirth}
                onChange={handleChange}
                className="w-full border rounded p-2"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Religion</label>
              <input
                type="text"
                name="religion"
                value={formData.religion}
                onChange={handleChange}
                className="w-full border rounded p-2"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Hometown</label>
              <input
                type="text"
                name="hometown"
                value={formData.hometown}
                onChange={handleChange}
                className="w-full border rounded p-2"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">District</label>
              <input
                type="text"
                name="district"
                value={formData.district}
                onChange={handleChange}
                className="w-full border rounded p-2"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Region</label>
              <input
                type="text"
                name="region"
                value={formData.region}
                onChange={handleChange}
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
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                />
              </div>
              <div>
                <label className="block font-medium mb-2">Occupation</label>
                <input
                  type="text"
                  name="occupation"
                  value={formData.occupation}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                />
              </div>
              <div>
                <label className="block font-medium mb-2">Contact</label>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                />
              </div>
              <div>
                <label className="block font-medium mb-2">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalDetailsForm;
