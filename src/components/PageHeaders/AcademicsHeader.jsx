import React from "react";
import Navbar from "../Navbar/Navbar";

const AcademicsHeader = () => {
  return (
    <section className="bg-AboutusBg bg-cover bg-center relative overflow-hidden rounded-b-3xl">
      <div className="relative z-50">
        <Navbar />
        {/* Content */}
        <div className="px-4 md:px-14 lg:px-24 xl:px-40 py-32">
          <div className="mission-right md:max-w-[50%]">
            {/* Subtitle */}
            <h1 className="text-white text-5xl leading-2 font-semibold max-w-full lg:max-w-3xl mb-3">
              Academics
            </h1>
            <p className="font-normal text-base text-gray-200 max-w-xl">
              Excellence in Education: Shaping Skilled Healthcare Professionals.
            </p>
          </div>
        </div>
      </div>
      {/* Gradient overlay */}
      <div className="absolute -z-0 inset-0 backdrop-brightness-140 bg-gradient-to-r from-blue-800 to-transparent opacity-80 pointer-events-none"></div>
    </section>
  );
};

export default AcademicsHeader;
