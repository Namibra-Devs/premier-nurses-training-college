import React, { useState, useEffect } from "react";
import { FormDataContext } from "./FormDataContext";

// Retrieve combined form data and file details from localStorage
const retrievePersonalData = () => {
  const savedData = localStorage.getItem("personalData");
  return savedData
    ? JSON.parse(savedData)
    : {};
};
const retrieveContactData = () => {
  const savedData = localStorage.getItem("contactData");
  return savedData
    ? JSON.parse(savedData)
    : {};
};
const retrieveEducationData = () => {
  const savedData = localStorage.getItem("educationData");
  return savedData
    ? JSON.parse(savedData)
    : {};
};
const retrieveResultsData = () => {
  const savedData = localStorage.getItem("resultsData");
  return savedData
    ? JSON.parse(savedData)
    : {};
};
const retrieveProgramData = () => {
  const savedData = localStorage.getItem("programData");
  return savedData
    ? JSON.parse(savedData)
    : {};
};
const retrieveDocumentsData = () => {
  const savedData = localStorage.getItem("documentsData");
  return savedData
    ? JSON.parse(savedData)
    : {};
};
const retrieveRefereeData = () => {
  const savedData = localStorage.getItem("refereeData");
  return savedData
    ? JSON.parse(savedData)
    : {};
};
const retrieveDeclarationData = () => {
  const savedData = localStorage.getItem("declarationData");
  return savedData
    ? JSON.parse(savedData)
    : {};
};

// Save combined form data and file details to localStorage
const savePersonalData = (data) => {
  localStorage.setItem("personalData", JSON.stringify(data));
};
const saveContactData = (data) => {
  localStorage.setItem("contactData", JSON.stringify(data));
};
const saveEducationData = (data) => {
  localStorage.setItem("educationData", JSON.stringify(data));
};
const saveResultsData = (data) => {
  localStorage.setItem("resultsData", JSON.stringify(data));
};
const saveProgramData = (data) => {
  localStorage.setItem("programData", JSON.stringify(data));
};
const saveDocumentsData = (data) => {
  localStorage.setItem("documentsData", JSON.stringify(data));
};
const saveRefereeData = (data) => {
  localStorage.setItem("refereeData", JSON.stringify(data));
};
const saveDeclarationData = (data) => {
  localStorage.setItem("declarationData", JSON.stringify(data));
};

export const FormDataProvider = ({ children }) => {
  const [personalData, setPersonalData] = useState(retrievePersonalData);
  const [contactData, setContactData] = useState(retrieveContactData);
  const [educationData, setEducationData] = useState(retrieveEducationData);
  const [resultsData, setResultsData] = useState(retrieveResultsData);
  const [programData, setProgramData] = useState(retrieveProgramData);
  const [documentsData, setDocumentsData] = useState(retrieveDocumentsData);
  const [refereeData, setRefereeData] = useState(retrieveRefereeData);
  const [declarationData, setDeclarationData] = useState(retrieveDeclarationData);

  //personalData, setPersonalData, contactData, setContactData, education, setEducation, results, setResults, program, setProgram, documents, setDocuments, referee, setReferee, declaration, setDeclaration

  return (
    <FormDataContext.Provider value={{personalData, setPersonalData, contactData, setContactData, educationData, setEducationData, resultsData, setResultsData, programData, setProgramData, documentsData, setDocumentsData, refereeData, setRefereeData, declarationData, setDeclarationData, savePersonalData, saveContactData, saveEducationData, saveResultsData, saveProgramData, saveDocumentsData, saveRefereeData, saveDeclarationData}}>
      {children}
    </FormDataContext.Provider>
  );
};
