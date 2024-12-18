import React, { useState} from "react";
import Sidebar from "./Sidebar";
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
import { AiOutlineDashboard, AiOutlineUser, AiOutlineBook, AiOutlineFileText, AiOutlineUpload, AiOutlineCheckCircle,AiOutlineForm, AiOutlineSend,} from "react-icons/ai";
import { useFormContext } from "./FormContext/FormProvider";
import NavigationBar from "./NavigationBar";

const AppSystem = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const {handleSubmit} = useFormContext();
  const [open, setOpen] = useState(true);

  const tabs = [
    {
      label: "Dashboard", 
      icon: <AiOutlineDashboard />,
      component: <Dashboard/>,
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
      component: <EducationalBackground  />,
    },
    { 
      label: "Results", 
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

  return (

    <>
    <div className="bg-white fixed w-full h-screen px-2 md:px-4 flex flex-col border-x-2 border-primary">
      <NavigationBar open={open} setOpen={setOpen} />
      <div className="flex w-full h-full">
        <Sidebar tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} open={open}/>
        <div className="bg-gray-100 w-full p-4">

            {/* Render the current tab's component and*/}
            {tabs[currentTab].component}
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
                    <button
                      onClick={handleContinue}
                      className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 hover:shadow-custom-light">
                      Next
                    </button>
                  </>
                )}
              </div>
              {currentTab === tabs.length - 1 && (
                <button
                  onClick={handleSubmit}
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
