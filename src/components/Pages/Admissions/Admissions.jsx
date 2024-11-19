import React from "react";
import HowToApply from "./HowToApply/HowToApply";
import DatesAndDeadlines from "./DatesAndDeadlines/DatesAndDeadlines";
import FinancialAidAndScholarship from "./FinancialAidAndScholarship/FinancialAidAndScholarship";
import RequirementsAndEligibility from "./RequirementsAndEligibility/RequirementsAndEligibility";
import ContactAdmissions from "./ContactAdmissions/ContactAdmissions";
import AdmissionsHeader from "../../PageHeaders/AdmissionsHeader";

const Admissions = () => {
  return (
    <>
      {/* Admissions page header */}
      <AdmissionsHeader/>
      <HowToApply />
      <DatesAndDeadlines />
      <FinancialAidAndScholarship />
      <RequirementsAndEligibility />
      <ContactAdmissions/>
    </>
  );
};

export default Admissions;
