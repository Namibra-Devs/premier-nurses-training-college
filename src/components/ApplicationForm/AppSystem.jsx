import React, { useContext, useState } from "react";
import Tabs from "./Tabs";
import Dashboard from "./Dashboard/Dashboard";
import PersonalDetailsForm from "./PersonalDetails/PersonalDetailsForm";
import EducationalBackground from "./EducationalBackground/EducationalBackground";
import Results from "./Results/Results";
import ProgramChoice from "./ProgramChoice/ProgramChoice";
import UploadDocuments from "./UploadDocuments";
import Referee from "./Referee";
import Declaration from "./Declaration";
import FinalSubmit from "./FinalSubmit";
import ContactDetailsForm from "./ContactDetails/ContactDetailsForm";

import {AiOutlineDashboard, AiOutlineUser, AiOutlineBook, AiOutlineFileText, AiOutlineUpload, AiOutlineCheckCircle, AiOutlineForm, AiOutlineSend,} from "react-icons/ai";
import SaveButton from "./Buttons/SaveButton";
import { FormDataContext } from "../Context/FormDataContext";
import OverlayAlert from "./FormControls/OverlayAlert";

const saveformData = (formData) => {
  localStorage.setItem("formData", JSON.stringify(formData));
};

const AppSystem = ({ open, setOpen }) => {
  const [currentTab, setCurrentTab] = useState(0);
  const {formData} = useContext(FormDataContext);
  const [showAlert, setShowAlert] = useState(false);

  const handleContinue = () => {
    if (currentTab < tabs.length - 1) {
      setCurrentTab(currentTab + 1); //Go to next tab
    }
  };

  const handlePrevious = () => {
    if (currentTab > 1) {
      setCurrentTab(currentTab - 1); // Go to previous tab
    }
  };

  //Dashboard
  const submittedApplications = [
    {
      title: "Application #1",
      onDownload: () => alert("Downloading Application #1"),
    },
  ];

  const admissionMaterials = [
    {
      title: "Admission Letter",
      onDownload: () => alert("Downloading Admission Letter"),
    },
    {
      title: "Enrollment Guide",
      onDownload: () => alert("Downloading Enrollment Guide"),
    },
  ];
  //End of Dashboard

  const tabs = [
    {
      label: "Dashboard",
      icon: <AiOutlineDashboard />,
      component: (
        <Dashboard
          applicationStatus="Submitted"
          submittedApplications={submittedApplications}
          admissionMaterials={admissionMaterials}
        />
      ),
    },
    {
      label: "Personal Details",
      icon: <AiOutlineUser />,
      component: <PersonalDetailsForm/>,
    },
    {
      label: "Contact Details",
      icon: <AiOutlineForm />,
      component: <ContactDetailsForm />,
    },
    {
      label: "Educational Background",
      icon: <AiOutlineBook />,
      component: <EducationalBackground />,
    },
    { label: "Results", 
      icon: <AiOutlineFileText />, 
      component: <Results /> },
    { 
      label: "Program Choice",
      icon: <AiOutlineCheckCircle />,
      component: <ProgramChoice />,
    },
    {
      label: "Upload Documents",
      icon: <AiOutlineUpload />,
      component: <UploadDocuments />,
    },
    {
      label: "Referee",
      icon: <AiOutlineUser />,
      component: <Referee />
    },
    {
      label: "Declaration",
      icon: <AiOutlineCheckCircle />,
      component: <Declaration />,
    },
    {
      label: "Submit Application",
      icon: <AiOutlineSend />,
      component: <FinalSubmit />,
    },
  ];

  const handleSave = (e) => {
    e.preventDefault();

    try {
      saveformData(formData); // For global data saving
      setShowAlert(true); // Show success alert
      setTimeout(() => setShowAlert(false), 3000); // Hide after 3 seconds
    } catch (error) {
      console.error("Save failed:", error);
    }
  };

  return (
    <>
      {/* Save Alert */}
      {showAlert && <OverlayAlert message="Data Saved!" />}
    <div className="flex items-start mt-3 bg-gray-100 h-screen">
        <Tabs tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} open={open} setOpen={setOpen}/>
      <div className="p-4 rounded w-full max-h-screen pb-32 overflow-y-auto">
        <div className="bg-white p-4 rounded">

          {/*--------------TABS ARE DISPLAYED HERE---------------- */}
          {tabs[currentTab].component}
          {/*--------------End TABS ARE DISPLAYED HERE...---------------- */}

            {/* Save and Save and Continue Buttons */}
            <div className="flex items-baseline justify-between gap-4 mt-4"> 
              {/* Previous Button */}
              {currentTab > 1 && (
                <button
                  onClick={handlePrevious}
                  className="px-4 py-2  rounded bg-gray-300 hover:bg-gray-400 hover:shadow-custom-light">
                  Previous
                </button>
              )}
              <div className="flex justify-end gap-4">
                {/* Save and Continue */}
                {currentTab > 0 && currentTab < tabs.length - 1 && (
                  <>
                  {/* Save button*/}
                  <SaveButton onClick={handleSave} />
                  
                    <button
                      onClick={handleContinue}
                      className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 hover:shadow-custom-light">
                      Save & Continue
                    </button>
                  </>
                )}
              </div>
              {currentTab === tabs.length - 1 && (
                <button
                  className="bg-green-500 hover:bg-green-600 hover:shadow-custom-light text-white py-2 px-4 mt-4 rounded">
                  Submit Application
                </button>
              )}
            </div>   
        </div>
      </div>
    </div>
    </>
  );
};

export default AppSystem;
