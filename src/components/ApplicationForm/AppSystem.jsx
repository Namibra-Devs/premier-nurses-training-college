import React, { useState } from "react";
import Tabs from "./Tabs";
import PersonalDetailsForm from "./PersonalDetails/PersonalDetailsForm";
import EducationalBackground from "./EducationalBackground/EducationalBackground";
import Results from "./Results/Results";
import ProgramChoice from "./ProgramChoice";
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

const AppSystem = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const tabs = [
    { label: "Dashboard", icon: <AiOutlineDashboard />, component: <div>Dashboard Content</div> },
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
    <div className="flex items-start mt-3 bg-gray-100 h-screen overflow-y-scroll pb-10">
      <Tabs tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <div className="p-4 rounded w-full">
        {tabs[currentTab].component}
      </div>
    </div>
  );
};

export default AppSystem;
