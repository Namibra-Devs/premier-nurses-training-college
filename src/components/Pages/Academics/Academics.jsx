import React from "react";
import ProgramsOffered from "./ProgramsOffered/ProgramsOffered";
import Curriculum from "./Curriculum";
import AcademicCalender from "./AcademicCalender/AcademicCalender";
import FacultyDirectory from "./FacultyDirectory/FacultyDirectory";
import CTAButtonSticky from "../../Buttons/CTAButtonSticky";
import AcademicsHeader from "../../PageHeaders/AcademicsHeader";

const Academics = () => {
  return (
    <>
      {/* Academics Page header */}
      <AcademicsHeader/>
      <ProgramsOffered />
      <Curriculum />
      <AcademicCalender />
      <FacultyDirectory />
      <CTAButtonSticky />
    </>
  );
};

export default Academics;
