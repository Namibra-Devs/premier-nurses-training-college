import React from "react";
import Navbar from "../../Navbar/Navbar";
import HowToApply from "./HowToApply/HowToApply";
import DatesAndDeadlines from "./DatesAndDeadlines/DatesAndDeadlines";
import FinancialAidAndScholarship from "./FinancialAidAndScholarship/FinancialAidAndScholarship";

const Admissions = () => {
  return (
    <>
      {/* Admissions page header */}
      <section className="bg-AboutusBg bg-cover bg-center relative">
        <div className="relative z-50">
          <Navbar />
          {/* Content */}
          <div className="px-4 md:px-14 lg:px-24 xl:px-40 py-20">
            <div className="mission-right md:max-w-[50%]">
              {/* Subtitle */}
              <h1 className="text-white text-5xl leading-2 font-semibold max-w-full lg:max-w-3xl mb-3">
                Admissions
              </h1>
              <p className="font-normal text-base text-gray-200 max-w-xl">
                At Premier Nurses' Training College, we are dedicated to shaping
                the future of healthcare by educating and inspiring the next
                generation of skilled and empathetic nurses.
              </p>
            </div>
          </div>
        </div>
        {/* Gradient overlay */}
        <div className="absolute -z-0 inset-0 backdrop-brightness-140 bg-gradient-to-r from-blue-800 to-transparent opacity-80 pointer-events-none"></div>
      </section>
      <HowToApply/>
      <DatesAndDeadlines/>
      <FinancialAidAndScholarship/>
    </>
  );
};

export default Admissions;
