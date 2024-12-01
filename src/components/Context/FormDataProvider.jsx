import React, { useState, useEffect } from "react";
import { FormDataContext } from "./FormDataContext";

// Retrieve combined form data and file details from localStorage
const retrieveFormData = () => {
  const savedData = localStorage.getItem("formData");
  return savedData
    ? JSON.parse(savedData)
    : { documentDetails: { idType: "", idFile: null, academicFile: null } };
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

  // Update document details
  const updateDocumentDetails = (newDetails) => {
    setformData((prev) => ({
      ...prev,
      documentDetails: {
        ...prev.documentDetails,
        ...newDetails,
      },
    }));
  };

  return (
    <FormDataContext.Provider value={{ formData, setformData, saveFormData, updateDocumentDetails }}>
      {children}
    </FormDataContext.Provider>
  );
};
