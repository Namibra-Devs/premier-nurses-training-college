import React from "react";
import MissionStatement from "../../Pages/About/MissionStatement";
import PNTCStory from "./PNTCStory";
import Totals from "../../UtilityComponents/Totals";
import ValuesAndVission from "./ValuesAndVision";
import WhatWeOffer from "./WhatWeOffer";
import WhyChooseUs from "./WhyChooseUs";
import LeadershipAndFaculty from "./LeadershipAndFaculty";
import PntcInView from "../Students/SchoolFacilities/PntcInView";
import AboutHeader from "../../PageHeaders/AboutHeader";
const AboutUs = () => {
  return (
    <>
      <AboutHeader/>
      <MissionStatement />
      <PNTCStory />
      <div className="px-4 md:px-14 lg:px-24 xl:px-40 mt-1 flex flex-col justify-center items-center">
        <Totals />
      </div>
      <div
        id="vissionAndValues"
        className="px-4 md:px-14 lg:px-24 xl:px-14 flex flex-col justify-center items-center"
      >
        <ValuesAndVission />
      </div>
      <div id="whatWeOffer" className="bg-gradient-to-r from-blue-800 to bg-primary px-4 md:px-14 lg:px-24 xl:px-40 py-24 mt-1 flex flex-col justify-center items-center">
        <WhatWeOffer />
      </div>
      <div id="leadership" className="bg-gray-50 px-4 md:px-14 lg:px-24 xl:px-40 pt-2 pb-24 md:py-24 flex flex-col justify-center items-center">
        <LeadershipAndFaculty />
      </div>
      <div id="whyChooseUs" className="bg-gray-50 px-4 md:px-14 lg:px-24 xl:px-40 pb-24 flex flex-col justify-center items-center">
        <WhyChooseUs />
      </div>
      <div className="pt-4">
        <PntcInView />
      </div>
    </>
  );
};

export default AboutUs;
