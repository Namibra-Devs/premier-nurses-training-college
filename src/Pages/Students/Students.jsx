import React from "react";
import StudentLife from "./StudentLife/StudentLife";
import AlumniNetwork from "./AlumniNetwork/AlumniNetwork";
import PntcInView from "./SchoolFacilities/PntcInView";
import StudentsHeader from "../../components/PageHeaders/StudentsHeader";

const Students = () => {
  return (
    <>
      {/* Students page header */}
      <StudentsHeader/>
      <StudentLife />
      <AlumniNetwork />
      <PntcInView />
    </>
  );
};

export default Students;
