import React, { useState } from "react";
import Tabs from "./Tabs";
import Dashboard from "./Dashboard/Dashboard";
import PersonalDetailsForm from "./PersonalDetails/PersonalDetailsForm";
import EducationalBackground from "./EducationalBackground/EducationalBackground";
import Results from "./Results/Results";
import ProgramChoice from "./ProgramChoice/ProgramChoice";
import UploadDocuments from "./UploadDocuments";
import Declaration from "./Declaration";
import FinalSubmit from "./FinalSubmit";
import ContactDetailsForm from "./ContactDetails/ContactDetailsForm";

import {
  AiOutlineDashboard,
  AiOutlineUser,
  AiOutlineBook,
  AiOutlineFileText,
  AiOutlineUpload,
  AiOutlineCheckCircle,
  AiOutlineForm,
  AiOutlineSend,
} from "react-icons/ai";

const AppSystem = ({ open, setOpen }) => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleSave = () => {};

  const handleContinue = () => {
    if (currentTab < tabs.length - 1) {
      setCurrentTab(currentTab + 1); //Go to nex tab
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
      component: <PersonalDetailsForm />,
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
    { label: "Results", icon: <AiOutlineFileText />, component: <Results /> },
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

  return (
    <div className="flex items-start mt-3 bg-gray-100 h-screen">
      <Tabs
        tabs={tabs}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        open={open}
        setOpen={setOpen}
      />
      <div className="p-4 rounded w-full max-h-screen pb-32 overflow-y-scroll">
        {tabs[currentTab].component}
        <div className="flex justify-end gap-4 mt-4">
          {/* Previous Button */}
          {currentTab > 1 && (
            <button
              onClick={handlePrevious}
              className="px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 hover:shadow-custom-light"
            >
              Previous
            </button>
          )}
          {/* Save and Save and Continue Buttons */}
          {currentTab > 0 && currentTab < tabs.length - 1 && (
            <>
              <button
                onClick={handleSave}
                className="px-4 py-2 rounded bg-primary text-white hover:bg-blue-600 hover:shadow-custom-light"
              >
                Save
              </button>
              <button
                onClick={handleContinue}
                className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 hover:shadow-custom-light"
              >
                Save and Continue
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AppSystem;
