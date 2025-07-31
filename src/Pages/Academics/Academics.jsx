import React from "react";
import ProgramsOffered from "./ProgramsOffered/ProgramsOffered";
import Curriculum from "./Curriculum";
import AcademicCalender from "./AcademicCalender/AcademicCalender";
import FacultyDirectory from "./FacultyDirectory/FacultyDirectory";
import AcademicsHeader from "../../components/PageHeaders/AcademicsHeader";

const Academics = () => {
  return (
    <>
      {/* Academics Page header */}
      <AcademicsHeader/>
      <ProgramsOffered />
      <Curriculum />
      <AcademicCalender />
      <FacultyDirectory />
    </>
  );
};

export default Academics;
