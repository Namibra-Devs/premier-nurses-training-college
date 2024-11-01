import React from "react";
import missionImg from "../../assets/sections/n1.jpg";
import KeyStatistics from "../UtilityComponents/KeyStatistics";
import Totals from "../UtilityComponents/Totals";

const MissionStatement = () => {
  return (
    <div>
      <div className="bg-gray-50 px-4 md:px-20">
        <div className="md:px-20 flex justify-center items-center">
          <Totals />
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-center gap-10 pt-24">
          <div className="mission-img max-w-full md:max-w-[30%] relative overflow-hidden group">
            <img
              src={missionImg}
              alt=""
              className="w-full rounded-3xl group-hover:brightness-75 duration-700 ease-linear"
            />
            <h4
              className="absolute bottom-4 text-white font-medium text-lg m-5 
            leading-tight translate-x-1 opacity-0 group-hover:opacity-100 duration-700 ease-linear transform group-hover:translate-y-2"
            >
              Empowering compassionate healthcare professionals through
              innovative education, practical training, and a commitment to
              excellence.
            </h4>
          </div>
          <div className="mission-right md:max-w-[50%]">
            {/* title */}
            <h3 className="text-primary text-sm text-left uppercase font-medium">
              Mission Statement
            </h3>
            {/* Subtitle */}
            <h1 className="text-gray-700 text-2xl leading-2 tracking-tight font-semibold max-w-xl my-3">
              Empowering healthcare professionals through innovative education
              and practical training...
            </h1>
            <p className="font-normal text-sm text-gray-500 max-w-xl">
              At Premier Nurses' Training College, we are dedicated to shaping
              the future of healthcare by educating and inspiring the next
              generation of skilled and empathetic nurses.
            </p>
            <br />
            <KeyStatistics />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionStatement;
