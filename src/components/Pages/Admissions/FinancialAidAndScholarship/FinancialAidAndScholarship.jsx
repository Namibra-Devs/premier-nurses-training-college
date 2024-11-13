import React from "react";
import FinancialAidData from "./FinancialAidData";

const FinancialAidAndScholarship = () => {
  return (
    <section className="bg-gradient-to-r from-blue-800 to bg-primary px-4 md:px-14 lg:px-24 xl:px-40 py-24 flex flex-col">
      <div className="flex flex-col md:flex-row items-start justify-between gap-5 md:gap-10 mb-10 md:mb-2">
        <div className="text-left">
          {/* title */}
          <h3 className="text-white text-sm text-left uppercase font-medium">
            Financial Aid And Scholarships{" "}
            <span className="text-yellow-400 font-semibold">PNTC</span>
          </h3>
          {/* Subtitle */}
          <h1 className="text-white text-2xl leading-2 tracking-tight font-semibold max-w-full mt-3 mb-0 md:mb-5">
            Financial Aid And Scholarships
          </h1>
        </div>
        <p className="font-normal text-base text-left md:text-right text-white max-w-lg">
          Lists specific dates for submitting applications, document deadlines,
          and enrollment confirmations to keep applicants on track.
        </p>
      </div>
      {/* Financial Aid And Scholarships Display */}
      <FinancialAidData />
    </section>
  );
};

export default FinancialAidAndScholarship;
