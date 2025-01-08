import React, { useState, useRef } from "react";
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
  const [close, setOpen] = useState(true);
  const [formData, setFormData] = useState({
    personalDetails: {},
    contactDetails: {},
    educationalBackground: {},
    results: {},
    programChoice: {},
    uploadDocuments: {},
    referee: {},
    declaration: {},
  });
  

  const handleContinue = () => {
    const currentTabComponent = tabs[currentTab].component;
  
    // Call onSave of the current tab
    if (currentTabComponent.props && currentTabComponent.props.onSave) {
      currentTabComponent.props.onSave(currentData);
    }
  
    // Move to the next tab
    if (currentTab < tabs.length - 1) {
      setCurrentTab(currentTab + 1);
    }
  };

  const handlePrevious = () => {
    if (currentTab > 1) {
      setCurrentTab(currentTab - 1); // Go to previous tab
    }
  };

  const tabs = [
    {
      label: "Dashboard",
      icon: <AiOutlineDashboard />,
      component: () => <Dashboard />,
    },
    {
      label: "Personal Details",
      icon: <AiOutlineUser />,
      component: () => (
        <PersonalDetailsForm
          data={formData.personalDetails}
          onSave={(data) => setFormData((prev) => ({ ...prev, personalDetails: data }))}
        />
      ),
    },
    {
      label: "Contact Details",
      icon: <AiOutlineForm />,
      component: () => (
        <ContactDetailsForm
          data={formData.contactDetails}
          onSave={(data) => setFormData((prev) => ({ ...prev, contactDetails: data }))}
        />
      ),
    },
    {
      label: "Educational Background",
      icon: <AiOutlineBook />,
      component: () => (
        <EducationalBackground
          data={formData.educationalBackground}
          onSave={(data) => setFormData((prev) => ({ ...prev, educationalBackground: data }))}
        />
      ),
    },
    {
      label: "Results",
      icon: <AiOutlineFileText />,
      component: () => (
        <Results
          data={formData.results}
          onSave={(data) => setFormData((prev) => ({ ...prev, results: data }))}
        />
      ),
    },
    {
      label: "Program Choice",
      icon: <AiOutlineCheckCircle />,
      component: () => (
        <ProgramChoice
          data={formData.programChoice}
          onSave={(data) => setFormData((prev) => ({ ...prev, programChoice: data }))}
        />
      ),
    },
    {
      label: "Upload Documents",
      icon: <AiOutlineUpload />,
      component: () => (
        <UploadDocuments
          data={formData.uploadDocuments}
          onSave={(data) => setFormData((prev) => ({ ...prev, uploadDocuments: data }))}
        />
      ),
    },
    {
      label: "Referee",
      icon: <AiOutlineUser />,
      component: () => (
        <Referee
          data={formData.referee}
          onSave={(data) => setFormData((prev) => ({ ...prev, referee: data }))}
        />
      ),
    },
    {
      label: "Declaration",
      icon: <AiOutlineCheckCircle />,
      component: () => (
        <Declaration
          data={formData.declaration}
          onSave={(data) => setFormData((prev) => ({ ...prev, declaration: data }))}
        />
      ),
    },
    {
      label: "Submit Application",
      icon: <AiOutlineSend />,
      component: () => (
        <FinalSubmit
          formData={formData} // Pass all data for review or submission
          onSubmit={handleSubmit}
        />
      ),
    },
  ];
  
  return (
    <>
    <div className="bg-white w-full h-screen px-2 md:px-4 flex flex-col border-x-2 border-primary overflow-y-hidden">
      <NavigationBar close={close} setOpen={setOpen} />
      <div className="flex w-full min-h-screen">
        <Sidebar tabs={tabs} currentTab={currentTab} setCurrentTab={setCurrentTab} close={close}/>
        <div className="bg-gray-100 w-full px-3 md:px-4 pt-3 md:pt-4 pb-20 rounded overflow-y-scroll max-h-screen">

            {/* Render the current tab's component and*/}
            {tabs[currentTab].component()}
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
                      Save & Continue
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
