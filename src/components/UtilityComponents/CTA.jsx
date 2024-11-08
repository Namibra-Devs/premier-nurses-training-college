import React from "react";
import CTAButtonApply from "../Buttons/CTAButtonApply";
import ButtonContactUs from "../Buttons/ButtonContactUs";

const CTA = () => {
  return (
    <div className="bg-gradient-to-r from-blue-800 to-bg-primary px-4 md:px-40 py-24">
      <div className="flex flex-col justify-center items-center text-center gap-14 ">
        <h1 className="font-bold text-3xl md:text-5xl text-white">
          Enrollment Open! Don’t Miss Out on Your Future in Nursing.
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <CTAButtonApply />
          <ButtonContactUs />
        </div>
      </div>
    </div>
  );
};

export default CTA;
