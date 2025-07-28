import React from "react";
import infoForStudentsData from "./infoForStudentsData";
import freshersimg from "../../../assets/gallery/students/freshers.jpg";
import Accreditation from "./Accreditation";
import ButtonView from "../../../components/Buttons/ButtonView";

const InfoForStudents = () => {
  return (
    //------------------------------------------------------------------
    <div className="bg-white px-4 md:px-14 lg:px-24 xl:px-40">
      <div className="flex flex-col md:flex-row md:items-center justify-center gap-10 py-24">
        <div className="mission-img max-w-full md:max-w-[50%] relative overflow-hidden rounded-t-3xl rounded-br-3xl group mb-10 md:mb-0">
          <img
            src={freshersimg}
            alt="freshers"
            className="w-full rounded-t-3xl rounded-br-3xl group-hover:brightness-75 duration-700 ease-linear"
          />
          <h4 className="bg-gradient-to-r from-blue-800 to bg-primary p-4 absolute bottom-0 left-0 uppercase text-white font-semibold text-lg">
            New Bees!
          </h4>
        </div>
        <div className="mission-right md:max-w-[50%]">
          {/* title */}
          <h3 className="text-primary text-sm text-left uppercase font-medium">
            Welcome to PNTC
          </h3>
          {/* Subtitle */}
          <h1 className="text-gray-700 text-3xl md:text-2xl xl:text-3xl leading-2 tracking-tight font-semibold max-w-xl my-2">
            {infoForStudentsData.title}
          </h1>
          <p className="font-normal text-base text-gray-500 max-w-xl mt-3">
            {infoForStudentsData.info}
          </p>
          <br />
          <Accreditation />
          <br />
      
          <ButtonView link="/academicaffairs" label="Academic Affairs" />
        </div>
      </div>
    </div>
  );
};

export default InfoForStudents;
