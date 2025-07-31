import React, { createContext, useContext, useState } from "react";
import OverlayAlert from "../FormControls/SuccessAlert";
import LoadingOverlay from "../FormControls/LoadingOverlay";

// Create the context
const FormContext = createContext();

// Create a provider component
export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false); // For loading state
  const [showSuccessAlert, setShowSuccessAlert] = useState(false); // For success alert

  const updateFormData = (section, data) => {
    setFormData((prev) => ({
      ...prev,
      [section]: data,
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true); // Show loading overlay
    setShowSuccessAlert(false); // Hide success alert (if any)

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowSuccessAlert(true); // Show success alert
        setTimeout(() => setShowSuccessAlert(false), 2000); // Hide after 2 seconds
        console.log(formData);
      } else {
        console.error("Form submission failed.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
    }finally {
      setIsSubmitting(false); // Hide loading overlay
    }
  };

  return (
    <>
    {isSubmitting && <LoadingOverlay message="Processing..." />}
    {showSuccessAlert && <OverlayAlert message="Submitted Successfully!" />}
    <FormContext.Provider value={{ formData, updateFormData, handleSubmit }}>
      {children}
    </FormContext.Provider>
    </>
  );
};

// Custom hook for consuming the context
export const useFormContext = () => {
  return useContext(FormContext);
};
