import React from "react";
import missionImg from "../../../assets/sections/n1.jpg";
import Totals from "../../UtilityComponents/Totals";

const MissionStatement = () => {
  return (
    <>
      <div className="bg-gray-50 px-4 md:px-40 mt-1 flex justify-center items-center">
        <Totals />
      </div>
      <div className="bg-gray-50 px-4 md:px-14 py-24">
        <div className="flex flex-col md:flex-row md:items-center justify-center gap-10 relative">
          <div className="mission-img max-w-full md:max-w-[30%] rounded-3xl overflow-hidden group">
            <img
              src={missionImg}
              alt=""
              className="w-full rounded-3xl brightness-95"
            />
          </div>
          <div className="mission-right md:max-w-[50%] mt-10 md:mt-0 mb-36">
            {/* title */}
            <h3 className="text-primary text-sm text-left uppercase font-medium">
              Values and Vision
            </h3>
            {/* Subtitle */}
            <h1 className="text-gray-700 md:text-2xl lg:text-4xl leading-2 tracking-tight font-semibold my-3">
              Our mission is to empower healthcare professionals through
              innovative education and practical training...
            </h1>
            <p className="font-normal text-sm text-gray-500 ">
              Driven by our core values of empathy, excellence, and integrity,
              Premier Nurses' Training College is committed to academic rigor
              and clinical precision. Our vision is to create a community of
              professionals dedicated to improving patient care through
              innovation, continuous learning, and ethical practice.
            </p>
            <div className="md:absolute mt-8 md:mt-0 md:bottom-10 lg:bottom-34 xl:bottom-24 left-44 lg:left-72 lg:right-0 max-w-full bg-gradient-to-r from-primary to bg-blue-800 md:backdrop-blur rounded-3xl p-6">
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
