import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/Logo.png";
import SubmitButton from "../../../components/Buttons/SubmitButton";
import OverlayAlert from "../../../Pages/Admissions/Application/OverlayAlert";
import ButtonLogin from "./ButtonLogin";
import ErrorAlert from "./ErrorAlert";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    pin: "",
    password: "",
    rememberMe: false,
  });

  const [error, setError] = useState("");
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);

  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!formData.pin.trim()) newErrors.pin = "PIN is required";
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setErrors({});
    setShowAlert(false);
    setErrorAlert(false);

    if (!validate()) return;

    const { pin, password } = formData;

    try {
      setShowAlert(true); // Show processing alert
      const response = await fetch("https://your-api-endpoint.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ pin, password }),
      });

      if (response.ok) {
        const data = await response.json();

        // Store token securely
        localStorage.setItem("accessToken", data.token);

        // Navigate after 3 seconds
        setTimeout(() => {
          setShowAlert(false);
          navigate("/application-page");
        }, 3000);
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Login failed. Please try again.");
        setErrorAlert(true); // Show error alert
      }
    } catch (err) {
      console.error("Error during login:", err);
      setError("Something went wrong. Please try again.");
      setErrorAlert(true); // Show error alert
      setTimeout(() => {
        setErrorAlert(false);
      }, 3000);
    } finally {
      setShowAlert(false); // Ensure processing alert hides after attempt
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen items-center justify-center bg-gray-100">
      {/* Overlay Alert */}
      {showAlert && <OverlayAlert message="Processing your login..." />}
      {error && errorAlert && <ErrorAlert message={error} />}
      
      <div className="md:w-4/5 max-w-4xl max-h-full grid grid-cols-1 md:grid-cols-2 my-6 shadow-lg rounded-xl overflow-hidden">
        {/* Left Column */}
        <div className="relative bg-RegLoginBg bg-cover bg-center py-56">
          <div className="absolute z-50 top-6 w-full flex justify-center">
            <a href="/">
              <img src={logo} alt="pntc-logo" />
            </a>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-8">
            <h1 className="text-3xl text-white text-center font-bold mb-4">
              Welcome Back to PNTC!
            </h1>
            <p className="text-sm leading-tight text-gray-200 text-center">
              Log in with the Voucher PIN you purchased and the new account
              password to continue your application process or access your
              account.
            </p>
            <div className="flex flex-col md:flex-row items-center text-gold mt-8">
              <p className="animate-pulse underline mb-3 md:mb-0 z-10">
                New Applicant?{" "}
              </p>{" "}
              <ButtonLogin url="/registration-page" label="Register" />
            </div>
          </div>
          <div className="absolute bottom-2 mx-auto w-full text-center py-3">
            <p className="text-xs text-white">
              &copy; {new Date().getFullYear()} PNTC. All Rights Reserved.
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Login to Your Account
          </h2>
          <form className="space-y-4" onSubmit={handleLogin}>
            {/* PIN */}
            <div>
              <label
                htmlFor="pin"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                PIN
              </label>
              <input
                type="text"
                name="pin"
                value={formData.pin}
                onChange={handleChange}
                placeholder="Enter your PIN"
                className="w-full px-4 py-2 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.pin && (
                <p className="text-red-500 text-sm">{errors.pin}</p>
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
                placeholder="Enter your password"
                className="w-full px-4 py-2 rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>

            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-gray-600">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="mr-2"
                />
                Remember Me
              </label>
              <a href="/reset-password" className="text-sm text-primary hover:underline">
                Forgot Your Password?
              </a>
            </div>

            {/* Login Button */}
            <div>
              <SubmitButton handleAccess={handleLogin} label="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
