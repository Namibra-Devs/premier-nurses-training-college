import React from "react";
import AccreditedImg from "../../../assets/sections/accredited.jpg";
import Accreditation from "../../UtilityComponents/Accreditation";

const ValuesAndVission = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-center gap-10 py-24">
      <div className="mission-img max-w-full md:max-w-[30%] overflow-hidden group">
        <img
          src={AccreditedImg}
          alt=""
          className="w-full rounded-3xl overflow-hidden group-hover:brightness-75 duration-700 ease-linear mb-10 md:mb-0"
        />
      </div>
      <div className="mission-right md:max-w-[50%]">
        {/* title */}
        <h3 className="text-primary text-sm text-left uppercase font-medium">
          Our Mission And Values
        </h3>
        {/* Subtitle */}
        <h1 className="text-gray-700 text-3xl md:text-3xl leading-2 font-semibold my-2">
          Our mission is to empower healthcare professionals through innovative
          education and practical training...
        </h1>
        <p className="font-normal text-sm text-gray-500 max-w-xl"></p>
        <br />
        <Accreditation />
        <p className="font-normal text-sm text-gray-500 max-w-xl mt-5">
          We strive to empower our students with a quality education that
          combines rigorous academics with real-world application. Our mission
          is to cultivate healthcare providers who are equipped to make a
          positive impact on their communities.
        </p>
      </div>
    </div>
  );
};

export default ValuesAndVission;
