import React, { useState } from "react";
import logo from "../../../../../assets/logo.png";
import SubmitButton from "../../../../Buttons/SubmitButton";
import OverlayAlert from "../OverlayAlert";

const RegistrationPage = () => {
  //Form Validation Starts Here
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10-15 digits";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle Registration Alert
  const [showAlert, setShowAlert] = useState(false);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setShowAlert(true);
      console.log("Form submitted:", formData);
      setTimeout(() => setShowAlert(false), 3000);
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen items-center justify-center bg-gray-100">
      {/* Overlay Alert! */}
      {/* Render the overly "message" to change to "successful!" when Registration is successful. */}
      {showAlert && <OverlayAlert message="Processing your login..." />}

      <div className="w-4/5 max-w-6xl grid grid-cols-1 md:grid-cols-2 my-6 bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Left Column */}
        <div className="relative bg-RegLoginBg bg-cover bg-center py-56">
          <div className="absolute z-50 top-6 w-full flex justify-center">
            <a href="/">
              <img src={logo} alt="pntc-logo" />
            </a>
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
          <div className="absolute bottom-2 mx-auto w-full text-center py-3">
            <p className="text-xs text-white">
              &copy; {new Date().getFullYear()} PNTC. All Rights Reserved.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Create An Account
          </h2>
          <form className="space-y-4" onSubmit={handleFormSubmit}>
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
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                className="w-full px-4 py-2 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )}
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
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                className="w-full px-4 py-2 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName}</p>
              )}
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
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full px-4 py-2 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
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
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="w-full px-4 py-2 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="mt-3">
              <SubmitButton label="Register" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
