import React from "react";
import missionImg from "../../../assets/icons/play-button.png";
import KeyStatistics from "./KeyStatistics";

const PNTCStory = () => {
  return (
    <>
      <section className="relative bg-PntcStoryBg bg-cover bg-center bg-fixed bg-no-repeat px-4 md:px-14 lg:px-24 xl:px-40 py-24">
        <div className="relative z-50 flex flex-col md:flex-row md:items-center justify-between gap-10">
          <div className="flex items-center justify-center md:w-[50%] overflow-hidden group">
            <div className="bg-gradient-to-r from-blue-500/40 to transparent p-0 group-hover:p-3 duration-700 ease-in-out rounded-full">
              <img
                src={missionImg}
                alt=""
                className="w-20"
              />
            </div>
          </div>
          <div className="mission-right md:max-w-[50%] mt-10 md:mt-0">
            {/* title */}
            <h3 className="text-primary text-sm text-left uppercase font-medium">
              Uncover the heartwarming story
            </h3>
            {/* Subtitle */}
            <h1 className="text-white md:text-2xl lg:text-4xl leading-2 font-semibold my-3">
              We've been dedicated to empowering healthcare professionals
              through...
            </h1>
            <p className="font-normal text-sm text-gray-50 max-w-xl">
              At Premier Nurses' Training College, we are dedicated to shaping
              the future of healthcare by educating and inspiring the next
              generation of skilled and empathetic nurses.
            </p>
            <br />
            <KeyStatistics />
          </div>
        </div>
        {/* Gradient overlay */}
        <div className="absolute -z-0 inset-0 backdrop-brightness-140 bg-gradient-to-l from-primary/100 to-transparent opacity-80 pointer-events-none"></div>
      </section>
    </>
  );
};

export default PNTCStory;
