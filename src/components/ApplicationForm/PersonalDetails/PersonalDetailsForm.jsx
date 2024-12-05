import React, { useState, useEffect, useContext } from "react";
import ProfilePictureUpload from "./ProfilePictureUpload";
import { FormDataContext } from "../../Context/FormDataContext";

const PersonalDetailsForm = ({ preview, setPreview }) => {
  const [isVisible, setIsVisible] = useState(false);
  const {formData, setformData} = useContext(FormDataContext)
  const [errors, setErrors] = useState({});
  
  // Load program data on component mount
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100); // Trigger the animation
  }, []);

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validation functions
  const validate = () => {
    const newErrors = {};

    // Validate surname
    if (!formData.surname.trim()) newErrors.surname = "Surname is required.";

    // Validate first name
    if (!formData.firstName.trim()) newErrors.firstName = "First Name is required.";

    // Validate date of birth
    if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of Birth is required.";

    // Validate age
    if (!formData.age || formData.age <= 0) newErrors.age = "Age must be a positive number.";

    // Validate gender
    if (!formData.gender) newErrors.gender = "Gender is required.";

    // Validate marital status
    if (!formData.maritalStatus) newErrors.maritalStatus = "Marital status is required.";

    // Validate languages spoken
    if (!formData.languagesSpoken.trim()) newErrors.languagesSpoken = "Languages Spoken is required.";

    // Validate place of birth
    if (!formData.placeOfBirth.trim()) newErrors.placeOfBirth = "Place of Birth is required.";

    // Validate religion
    if (!formData.religion.trim()) newErrors.religion = "Religion is required.";

    // Validate hometown
    if (!formData.hometown.trim()) newErrors.hometown = "Hometown is required.";

    // Validate district
    if (!formData.district.trim()) newErrors.district = "District is required.";

    //Validate region
    if (!formData.region.trim()) newErrors.region = "Region is required.";

    // Validate Parent/Guardian Name
    if (!formData.name.trim()) {newErrors.name = "Parent/Guardian name is required.";}

    // Validate Occupation
    if (!formData.occupation.trim()) {newErrors.occupation = "Occupation is required.";}

    // Validate Contact
    if (!formData.contact.trim()) {
      newErrors.contact = "Contact is required.";
    } else if (!/^\d{10}$/.test(formData.contact)) {
      newErrors.contact = "Contact must be a valid 10-digit number.";
    }

    // Validate Address
    if (!formData.address.trim()) {newErrors.address = "Address is required.";}

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
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
              {errors.surname && <p className="text-red-500 text-xs">{errors.surname}</p>}
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
              {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName}</p>}
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
              {errors.gender && <p className="text-red-500 text-xs">{errors.gender}</p>}
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
              {errors.dateOfBirth && <p className="text-red-500 text-xs">{errors.dateOfBirth}</p>}
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
                {errors.age && <p className="text-red-500 text-xs">{errors.age}</p>}
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
                {errors.maritalStatus && <p className="text-red-500 text-xs">{errors.maritalStatus}</p>}
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
            {/* Region */}
            <div>
              <label className="block font-medium mb-2">Region</label>
              <select
                name="region"
                value={formData.region}
                onChange={handleChange}
                className="w-full border rounded p-2"
              >
                <option value="">-- Select a Region --</option>
                <option value="Greater Accra">Greater Accra</option>
                <option value="Ashanti">Ashanti</option>
                <option value="Western">Western</option>
                <option value="Central">Central</option>
                <option value="Eastern">Eastern</option>
                <option value="Northern">Northern</option>
                <option value="Upper East">Upper East</option>
                <option value="Upper West">Upper West</option>
                <option value="Volta">Volta</option>
                <option value="Oti">Oti</option>
                <option value="Bono">Bono</option>
                <option value="Bono East">Bono East</option>
                <option value="Ahafo">Ahafo</option>
                <option value="Savannah">Savannah</option>
                <option value="North East">North East</option>
                <option value="Western North">Western North</option>
              </select>
              {errors.region && <p className="text-red-500 text-xs">{errors.region}</p>}
            </div>
          </div>

          {/* Parent/Guardian Details */}
          <div className="mt-10">
          <h2 className="text-xl font-semibold mb-3">Parent/Guardian Information</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label className="block font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
            {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
          </div>

          {/* Occupation */}
          <div>
            <label className="block font-medium mb-2">Occupation</label>
            <input
              type="text"
              name="occupation"
              value={formData.occupation}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
            {errors.occupation && <p className="text-red-500 text-xs">{errors.occupation}</p>}
          </div>

          {/* Contact */}
          <div>
            <label className="block font-medium mb-2">Contact</label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
            {errors.contact && <p className="text-red-500 text-xs">{errors.contact}</p>}
          </div>

          {/* Address */}
          <div>
            <label className="block font-medium mb-2">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border rounded p-2"
            />
            {errors.address && <p className="text-red-500 text-xs">{errors.address}</p>}
          </div>
</div>

          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalDetailsForm;
