import React, { useState, useEffect } from "react";
import { FormDataContext } from "./FormDataContext";

// Retrieve combined form data and file details from localStorage
const retrieveFormData = () => {
  const savedData = localStorage.getItem("formData");
  return savedData
    ? JSON.parse(savedData)
    : {};
};

// Save combined form data and file details to localStorage
const saveFormData = (data) => {
  localStorage.setItem("formData", JSON.stringify(data));
};

export const FormDataProvider = ({ children }) => {
  const [formData, setformData] = useState(retrieveFormData);

  // Sync formData to localStorage whenever it changes
  useEffect(() => {
    saveFormData(formData);
  }, [formData]);

  return (
    <FormDataContext.Provider value={{ formData, setformData}}>
      {children}
    </FormDataContext.Provider>
  );
};
