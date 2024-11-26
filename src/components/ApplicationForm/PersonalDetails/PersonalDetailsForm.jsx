import React, { useState, useEffect } from "react";
import ProfilePictureUpload from "./ProfilePictureUpload";
import SaveButton from "../Buttons/SaveButton";
import OverlayAlert from "../FormControls/OverlayAlert";

const savePersonalDetails = (personalDetail) => {
  localStorage.setItem("personalDetail", JSON.stringify(personalDetail));
};

const retrivePersonalDetails = () => {
  const personalDetail = localStorage.getItem("personalDetail");
  if (personalDetail) {
    return JSON.parse(personalDetail);
  }
  return {};
};

const PersonalDetailsForm = ({ preview, setPreview }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Load program data on component mount
  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100); // Trigger the animation
  }, []);

  // const [personalDetail, setpersonalDetail] = useState({
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

  const [personalDetail, setPersonalDetail] = useState(
    retrivePersonalDetails()
  );

  const handleChange = (e) => {
    setPersonalDetail({ ...personalDetail, [e.target.name]: e.target.value });
  };

  // Handle Saved Alert
  const handleSubmit = (e) => {
    e.preventDefault();
    savePersonalDetails(personalDetail);
  };

  const [showAlert, setShowAlert] = useState(false);
  const handleSave = (e) => {
    e.preventDefault();

    try {
      savePersonalDetails(personalDetail); // Save the data
      setShowAlert(true); // Show success alert
      setTimeout(() => setShowAlert(false), 3000); // Hide after 3 seconds
    } catch (error) {
      console.error("Save failed:", error);
    }
  };

  return (
    <div>
      {showAlert && <OverlayAlert message="Data saved!" />}
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

        <form onSubmit={handleSubmit}>
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
            <div>
              <label className="block font-medium mb-2">Surname</label>
              <input
                type="text"
                name="surname"
                value={personalDetail.surname}
                onChange={handleChange}
                className="w-full border rounded p-2"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">First Name</label>
              <input
                type="text"
                name="firstName"
                value={personalDetail.firstName}
                onChange={handleChange}
                className="w-full border rounded p-2"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Other Name</label>
              <input
                type="text"
                name="otherName"
                value={personalDetail.otherName}
                onChange={handleChange}
                className="w-full border rounded p-2"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Gender</label>
              <select
                name="gender"
                value={personalDetail.gender}
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
                value={personalDetail.dateOfBirth}
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
                  value={personalDetail.age}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block font-medium mb-2">Marital Status</label>
                <select
                  name="maritalStatus"
                  value={personalDetail.maritalStatus}
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
                value={personalDetail.languagesSpoken}
                onChange={handleChange}
                className="w-full border rounded p-2"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Place of Birth</label>
              <input
                type="text"
                name="placeOfBirth"
                value={personalDetail.placeOfBirth}
                onChange={handleChange}
                className="w-full border rounded p-2"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Religion</label>
              <input
                type="text"
                name="religion"
                value={personalDetail.religion}
                onChange={handleChange}
                className="w-full border rounded p-2"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Hometown</label>
              <input
                type="text"
                name="hometown"
                value={personalDetail.hometown}
                onChange={handleChange}
                className="w-full border rounded p-2"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">District</label>
              <input
                type="text"
                name="district"
                value={personalDetail.district}
                onChange={handleChange}
                className="w-full border rounded p-2"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">Region</label>
              <input
                type="text"
                name="region"
                value={personalDetail.region}
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
                  value={personalDetail.name}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                />
              </div>
              <div>
                <label className="block font-medium mb-2">Occupation</label>
                <input
                  type="text"
                  name="occupation"
                  value={personalDetail.occupation}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                />
              </div>
              <div>
                <label className="block font-medium mb-2">Contact</label>
                <input
                  type="text"
                  name="contact"
                  value={personalDetail.contact}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                />
              </div>
              <div>
                <label className="block font-medium mb-2">Address</label>
                <input
                  type="text"
                  name="address"
                  value={personalDetail.address}
                  onChange={handleChange}
                  className="w-full border rounded p-2"
                />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <SaveButton onClick={handleSave} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalDetailsForm;
