import React from "react";
import playbtn from "../../assets/icons/play-button.png";
import KeyStatistics from "./KeyStatistics";

const PNTCStory = () => {
  return (
    <>
      <section className="relative bg-PntcStoryBg sm:bg-top bg-cover bg-center bg-fixed bg-no-repeat px-4 md:px-14 lg:px-24 xl:px-40 py-24">
        <div className="relative z-40 flex flex-col md:flex-row md:items-center justify-between gap-10">
          <div className="flex items-center justify-center md:w-[50%] overflow-hidden group">
            <div className="bg-gradient-to-r from-blue-500/40 to transparent p-0 group-hover:p-3 duration-700 ease-in-out rounded-full">
              <img
                src={playbtn}
                alt=""
                className="w-20"
              />
            </div>
          </div>
          <div className="mission-right md:max-w-[50%] mt-10 md:mt-0">
            {/* title */}
            <h3 data-aos="fade-up"
          data-aos-duration="800" className="text-yellow-400 text-sm text-left uppercase font-medium">
              Uncover the heartwarming story
            </h3>
            {/* Subtitle */}
            <h1 data-aos="fade-up"
          data-aos-duration="800" className="text-white text-3xl md:text-2xl lg:text-4xl leading-2 tracking-tight font-semibold my-3">
              We've been dedicated to empowering healthcare professionals
              through...
            </h1>
            <p data-aos="fade-up"
          data-aos-duration="800" className="font-normal text-base text-gray-50 max-w-xl mt-8">
              At Premier Nurses' Training College, we are dedicated to shaping
              the future of healthcare by educating and inspiring the next
              generation of skilled and empathetic nurses.
            </p>
            <br />
            <KeyStatistics />
          </div>
        </div>
        {/* Gradient overlay */}
        <div className="absolute -z-0 inset-0 backdrop-brightness-140 backdrop-blur-sm bg-gradient-to-l from-primary/100 to-transparent opacity-80 pointer-events-none"></div>
      </section>
    </>
  );
};

export default PNTCStory;
