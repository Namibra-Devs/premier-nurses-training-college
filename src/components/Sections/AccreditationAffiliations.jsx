import React from "react";
import AccreditedImg from "../../assets/sections/accredited.jpg";
import Accreditation from "../UtilityComponents/Accreditation";
import AffiliatedShow from "../UtilityComponents/AffiliatedShow";

const AccreditationAffiliations = () => {
  return (
    <>
      <div
        id="AccreditationAffiliations"
        className="bg-white px-4 md:px-14 pb-24"
      >
        <div className="flex flex-col md:flex-row md:items-center justify-center gap-10">
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="mission-img max-w-full md:max-w-[30%] relative overflow-hidden group"
          >
            <img
              src={AccreditedImg}
              alt=""
              className="w-full rounded-3xl group-hover:brightness-75 duration-700 ease-linear mb-10 md:mb-0"
            />
            <h4
              className="absolute bottom-4 text-white font-medium text-lg m-5 
            leading-tight translate-x-1 opacity-0 group-hover:opacity-100 duration-700 ease-linear transform group-hover:translate-y-2"
            >
              We are fully accredited by the National Nursing Accreditation
              Board and proudly affiliated with leading healthcare institutions,
              including.
            </h4>
          </div>
          <div className="mission-right md:max-w-[50%]">
            {/* title */}
            <h3
              data-aos="fade-up"
              data-aos-duration="800"
              className="text-primary text-sm text-left uppercase font-medium"
            >
              Accreditation and Affiliations
            </h3>
            {/* Subtitle */}
            <h1
              data-aos="fade-up"
              data-aos-duration="800"
              className="text-gray-700 text-3xl md:text-2xl xl:text-3xl leading-2 tracking-tight font-semibold max-w-xl my-2"
            >
              We are fully accredited by the National Nursing Accreditation
              Board and proudly affiliated with leading healthcare institutions,
              including.
            </h1>
            <p className="font-normal text-sm text-gray-500 max-w-xl"></p>
            <br />
            <Accreditation />
            <p
              data-aos="fade-up"
              data-aos-duration="800"
              className="font-normal text-base text-gray-500 max-w-xl mt-5"
            >
              These affiliations affirm our commitment to delivering quality
              education aligned with global standards and best practices in
              healthcare.
            </p>
          </div>
        </div>
      </div>

      <AffiliatedShow />
    </>
  );
};

export default AccreditationAffiliations;
