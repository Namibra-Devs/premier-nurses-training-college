import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import MissionStatement from "../../Pages/About/MissionStatement";
import PNTCStory from "./PNTCStory";
import Totals from "../../UtilityComponents/Totals";
import ValuesAndVission from "./ValuesAndVision";
import WhatWeOffer from "./WhatWeOffer";
import WhyChooseUs from "./WhyChooseUs";
import LeadershipAndFaculty from "./LeadershipAndFaculty";
import CTA from "../../UtilityComponents/CTA";
import PntcInView from "../Students/SchoolFacilities/PntcInView";
const AboutUs = () => {
  return (
    <>
      <section className="bg-AboutusBg bg-cover bg-center relative overflow-hidden rounded-b-3xl">
        <div className="relative z-50">
          <Navbar />
          {/* Content */}
          <div className="px-4 md:px-14 lg:px-24 xl:px-40 py-32">
            <div className="mission-right md:max-w-[50%]">
              {/* Subtitle */}
              <h1 className="text-white text-5xl leading-2 font-semibold max-w-full lg:max-w-3xl mb-3">
                About Us
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
      <MissionStatement />
      <PNTCStory />
      <div className="px-4 md:px-14 lg:px-24 xl:px-40 mt-1 flex flex-col justify-center items-center">
        <Totals />
      </div>
      <div className="px-4 md:px-14 lg:px-24 xl:px-14 flex flex-col justify-center items-center">
        <ValuesAndVission />
      </div>
      <div className="bg-gradient-to-r from-blue-800 to bg-primary px-4 md:px-14 lg:px-24 xl:px-40 py-24 mt-1 flex flex-col justify-center items-center">
        <WhatWeOffer />
      </div>
      <div className="bg-gray-50 px-4 md:px-14 lg:px-24 xl:px-40 pt-2 pb-24 md:py-24 flex flex-col justify-center items-center">
        <LeadershipAndFaculty />
      </div>
      <div className="bg-gray-50 px-4 md:px-14 lg:px-24 xl:px-40 pb-24 flex flex-col justify-center items-center">
        <WhyChooseUs />
      </div>
      <div className="mb-1">
        <CTA />
      </div>
      <div className="pt-24">
      <PntcInView/>
      </div>
    </>
  );
};

export default AboutUs;
