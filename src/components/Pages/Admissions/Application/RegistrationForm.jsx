import React from "react";
import logo from "../../../../assets/logo.png";
import SubmitButton from "../../../Buttons/SubmitButton";

const RegistrationForm = () => {
  return (
    <div className="flex flex-col md:flex-row h-auto md:h-screen items-center justify-center bg-gray-100">
      <div className="w-4/5 max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Left Column */}
        <div className="relative bg-RegLoginBg bg-cover bg-center">
          <div className="absolute z-50 top-6 w-full flex justify-center">
            <img src={logo} alt="pntc-logo" />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-8">
            <h1 className="text-4xl text-white text-center font-bold mb-4">
              Join PNTC Today!
            </h1>
            <p className="text-lg text-gray-200 text-center">
              Begin your journey in nursing with Premier Nurses' Training
              College. Register now and take your first step towards a rewarding
              career.
            </p>
          </div>
          {/*Copyright */}
          <div className="absolute bottom-2 mx-auto w-full text-center py-3">
            <p className="text-xs text-white">
              &copy; {new Date().getFullYear()} Premier Nurses' Training
              College. All Rights Reserved.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Create An Account
          </h2>
          <form className="space-y-4">
            {/* First Name */}
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter your first name"
                className="w-full px-4 py-2 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            {/* Last Name */}
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter your last name"
                className="w-full px-4 py-2 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            {/* Profile Picture */}
            <div className="mb-6">
              <label
                htmlFor="profile"
                className="block text-gray-700 text-sm mb-2"
              >
                Profile Picture
              </label>
              <div className="relative">
                <input
                  type="file"
                  id="profile"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => console.log(e.target.files[0])} // Handle file selection
                />
                <label
                  htmlFor="profile"
                  className="flex items-center justify-center w-full py-2 px-4 bg-gray-100 border border-gray-300 rounded-3xl cursor-pointer hover:bg-gray-200"
                >
                  <span className="text-gray-600 text-xl mr-2 flex items-center">
                    <ion-icon name="cloud-upload-outline"></ion-icon>
                  </span>
                  <span className="text-gray-600">Upload Profile Picture</span>
                </label>
              </div>
            </div>

            {/* Submit button */}
            <div>
              <SubmitButton label="Register" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
