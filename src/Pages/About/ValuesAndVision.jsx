import React from "react";
import AccreditedImg from "../../assets/sections/accredited.jpg";
import Accreditation from "./Accreditation";

const ValuesAndVision = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-center gap-10 py-24">
      <div data-aos="fade-up"
          data-aos-duration="800" className="mission-img max-w-full md:max-w-[30%] overflow-hidden group">
        <img
          src={AccreditedImg}
          alt=""
          className="w-full rounded-3xl overflow-hidden group-hover:brightness-75 duration-700 ease-linear mb-10 md:mb-0"
        />
      </div>
      <div className="mission-right md:max-w-[50%]">
        {/* title */}
        <h3 data-aos="fade-up"
          data-aos-duration="800" className="text-primary text-sm text-left uppercase font-medium">
          Vision Statement
        </h3>
        {/* Subtitle */}
        <h1 data-aos="fade-up"
          data-aos-duration="800" className="text-gray-700 text-3xl md:text-2xl xl:text-3xl leading-2 tracking-tight font-semibold my-2">
          To be a continentally acclaimed nursing training institution.
        </h1>
        <p data-aos="fade-up"
          data-aos-duration="800" className="font-normal text-base text-gray-500 max-w-xl mt-5 mb-5">
          We aspire to become a beacon of excellence in nursing education across Africa, recognized for producing highly skilled, compassionate, and innovative healthcare professionals. Through cutting-edge training, research, and community engagement, we envision shaping the future of healthcare by equipping our graduates with the knowledge, skills, and values needed to transform healthcare delivery across the continent and beyond.
        </p>
        <Accreditation />
      </div>
    </div>
  );
};

export default ValuesAndVision;
