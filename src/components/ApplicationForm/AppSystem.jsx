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

const AppSystem = ({open, setOpen, preview, setPreview}) => {
  const [currentTab, setCurrentTab] = useState(0);

  //Dashboard
  const submittedApplications = [
    { title: "Application #1", onDownload: () => alert("Downloading Application #1") },
    { title: "Application #2", onDownload: () => alert("Downloading Application #2") },
  ];

  const admissionMaterials = [
    { title: "Admission Letter", onDownload: () => alert("Downloading Admission Letter") },
    { title: "Enrollment Guide", onDownload: () => alert("Downloading Enrollment Guide") },
  ];
  //End of Dashboard

  const tabs = [
    { label: "Dashboard", icon: <AiOutlineDashboard />, component: <Dashboard applicationStatus="Submitted" submittedApplications={submittedApplications} admissionMaterials={admissionMaterials} /> },
    { label: "Personal Details", icon: <AiOutlineUser />, component: <PersonalDetailsForm /> },
    { label: "Contact Details", icon: <AiOutlineForm />, component: <ContactDetailsForm /> },
    { label: "Educational Background", icon: <AiOutlineBook />, component: <EducationalBackground /> },
    { label: "Results", icon: <AiOutlineFileText />, component: <Results /> },
    { label: "Program Choice", icon: <AiOutlineCheckCircle />, component: <ProgramChoice /> },
    { label: "Upload Documents", icon: <AiOutlineUpload />, component: <UploadDocuments /> },
    { label: "Declaration", icon: <AiOutlineCheckCircle />, component: <Declaration /> },
    { label: "Submit Application", icon: <AiOutlineSend />, component: <FinalSubmit /> },
  ];

  return (
    <div className="flex items-start mt-3 bg-gray-100 h-screen">
      <Tabs tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} open={open} setOpen={setOpen} />
      <div className="p-4 rounded-2xl w-full max-h-screen m-4 pb-40 overflow-y-scroll">
        {tabs[currentTab].component}
      </div>
    </div>
  );
};

export default AppSystem;
