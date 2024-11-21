import React from "react";
import missionImg from "../../../assets/sections/n1.jpg";

const MissionStatement = () => {
  return (
    <>
      <div className="bg-gray-50 px-4  lg:px-7 xl:px-14 py-24">
        <div className="flex flex-col md:flex-row items-start xl:items-center justify-center gap-10 relative overflow-hidden">
          <div className="vision-img w-full md:max-w-[40%] lg:max-w-[30%] rounded-3xl overflow-hidden group">
            <img
              src={missionImg}
              alt=""
              className="w-full rounded-3xl brightness-95"
            />
          </div>
          <div className="vision-right w-full md:max-w-[45%] lg:max-w-[50%] mt-10 md:mt-0 xl:mb-36 overflow-hidden">
            {/* title */}
            <h3 className="text-primary text-sm text-left uppercase font-medium">
              At PNTC
            </h3>
            {/* Subtitle */}
            <h1 className="text-gray-700 text-3xl md:text-2xl lg:text-4xl leading-2 tracking-tight font-semibold my-3">
              We provide a safe and innovative healthcare education where
              professionals can be trained...
            </h1>
            <p className="font-normal text-base text-gray-500 ">
              Premier Nurses' Training College is a leading institution
              dedicated to training the next generation of compassionate and
              skilled healthcare professionals. With a commitment to academic
              excellence and hands-on experience, we provide our students with
              the essential knowledge, clinical skills, and ethical foundations
              needed to excel in the field of nursing.
            </p>
            <div data-aos="fade-up"
          data-aos-duration="800"
              className="md:absolute mt-8 md:mt-0 md:bottom-10 lg:bottom-34 xl:bottom-16 md:left-32 lg:left-44 xl:left-72 right-14 lg:right-28 
            bg-gradient-to-r from-primary to bg-blue-800 md:backdrop-blur rounded-3xl p-6"
            >
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
                {/* Key Statics 1 */}
                <div className="flex flex-col md:flex-row items-start mb-5 md:mb-0 overflow-hidden">
                  <div className="font-bold text-yellow-400 mr-5">
                    <span className="text-2xl">01</span>
                  </div>
                  <div>
                    <h3 className="text-lg tracking-tight text-white font-semibold mb-1">
                      Graduation Rate
                    </h3>
                    <p className="text-gray-50 font-normal text-sm">
                      Of our student graduate
                    </p>
                  </div>
                </div>
                {/* Key Statics 1 */}
                <div className="flex flex-col md:flex-row items-start mb-5 md:mb-0 overflow-hidden">
                  <div className="font-bold text-yellow-400 mr-5">
                    <span className="text-2xl">02</span>
                  </div>
                  <div>
                    <h3 className="text-lg tracking-tight text-white font-semibold mb-1">
                      Graduation Rate
                    </h3>
                    <p className="text-gray-50 font-normal text-sm">
                      Of our student graduate{" "}
                    </p>
                  </div>
                </div>
                {/* Key Statics 1 */}
                <div className="flex flex-col md:flex-row items-start mb-5 md:mb-0 overflow-hidden">
                  <div className="font-bold text-yellow-400 mr-5">
                    <span className="text-2xl">03</span>
                  </div>
                  <div>
                    <h3 className="text-lg tracking-tight text-white font-semibold mb-1">
                      Graduation Rate
                    </h3>
                    <p className="text-gray-50 font-normal text-sm">
                      Of our student graduate
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MissionStatement;
