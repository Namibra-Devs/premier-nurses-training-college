import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import MissionStatement from "../../Pages/About/MissionStatement";
import PNTCStory from "./PNTCStory";
const AboutUs = () => {
  return (
    <>
      <section className="relative bg-AboutusBgImg bg-cover bg-center">
        <div className="relative z-50">
          <Navbar />
          {/* Content */}
          <div className="px-4 md:px-40 py-20">
            <div className="mission-right md:max-w-[50%]">
              {/* title */}
              <h3 className="text-yellow-400 text-sm text-left uppercase font-semibold">
                About Us
              </h3>
              {/* Subtitle */}
              <h1 className="text-white text-5xl leading-2 font-semibold max-w-full lg:max-w-3xl my-3">
                Premier Nurses' Training College
              </h1>
              <p className="font-normal text-sm text-gray-200 max-w-xl">
                At Premier Nurses' Training College, we are dedicated to shaping
                the future of healthcare by educating and inspiring the next
                generation of skilled and empathetic nurses.
              </p>
            </div>
          </div>
        </div>
        {/* Gradient overlay */}
        <div className="absolute -z-0  backdrop-blur inset-0 bg-gradient-to-r from-blue-800 to-transparent opacity-80 pointer-events-none"></div>
      </section>
      <MissionStatement />
      <PNTCStory/>
    </>
  );
};

export default AboutUs;
