import React from "react";
import curriculum1 from "../../../assets/Academics/curriculum1.jpg";
import curriculum2 from "../../../assets/Academics/curriculum2.jpg";
import curriculum3 from "../../../assets/Academics/curriculum3.jpg";
const Curriculum = () => {
  return (
    <div className="bg-gradient-to-r from-blue-800 to bg-primary px-4 md:px-14 lg:px-24 xl:px-40 py-24 mt-1 flex flex-col">
      <div className="flex flex-col md:flex-row items-start justify-between gap-5 md:gap-10 mb-10 md:mb-0">
        <div className="text-left">
          {/* title */}
          <h3 className="text-white text-sm text-left uppercase font-medium">
            Curriculum and Learning Outcomes{" "}
            <span className="text-yellow-400 font-semibold">PNTC</span>
          </h3>
          {/* Subtitle */}
          <h1 className="text-white text-2xl leading-2 tracking-tight font-semibold max-w-full mt-3 mb-0 md:mb-5">
            Curriculum
          </h1>
        </div>
        <p className="font-normal text-base text-left md:text-right text-gray-50 max-w-lg">
          Our curriculum is carefully crafted to develop both foundational and
          specialized nursing skills. Core areas covered include:
        </p>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-4">
        {/* Curriculum 1 */}
        <div className="relative bg-blue-100 rounded-3xl overflow-hidden hover:shadow-custom-light group">
          <img src={curriculum1} className="w-full object-cover group-hover:brightness-75 duration-700" alt="" />
          <div className="absolute bottom-0 left-0 right-0 bg-blue-100 shadow-inner shadow-slate-100 p-4 h-14 group-hover:h-[70%] transition-all duration-700 ease-in-out">
            <h3 className="text-base md:text-sm lg:text-base tracking-tight text-gray-600 font-semibold ">
              Patient Care Fundamentals
            </h3>
            <p className="text-gray-500 text-sm opacity-0 group-hover:opacity-100 duration-700 ease-in-out">
              Training on patient assessment, communication, and care.
            </p>
          </div>
        </div>
        {/* Curriculum 2 */}
        <div className="relative bg-blue-100 rounded-3xl overflow-hidden hover:shadow-custom-light group">
          <img src={curriculum2} className="w-full object-cover group-hover:brightness-75 duration-700" alt="" />
          <div className="absolute bottom-0 left-0 right-0 bg-blue-100 shadow-inner shadow-slate-100 p-4 h-14 group-hover:h-[70%] transition-all duration-700 ease-in-out">
            <h3 className="text-base md:text-sm lg:text-base tracking-tight text-gray-600 font-semibold ">
              Clinical Skills and Specializations
            </h3>
            <p className="text-gray-500 text-sm opacity-0 group-hover:opacity-100 duration-700 ease-in-out">
              Specialties like geriatric care, mental health, and surgical
              nursing.
            </p>
          </div>
        </div>
        {/* Curriculum 3 */}
        <div className="relative bg-blue-100 rounded-3xl overflow-hidden hover:shadow-custom-light group">
          <img src={curriculum3} className="w-full object-cover group-hover:brightness-75 duration-700" alt="" />
          <div className="absolute bottom-0 left-0 right-0 bg-blue-100 shadow-inner shadow-slate-100 p-4 h-14 group-hover:h-[70%] transition-all duration-700 ease-in-out">
            <h3 className="text-base md:text-sm lg:text-base tracking-tight text-gray-600 font-semibold ">
              Ethics and Professionalism
            </h3>
            <p className="text-gray-500 text-sm opacity-0 group-hover:opacity-100 duration-700 ease-in-out">
              Emphasis on ethical decision-making and patient advocacy.
              Graduates will leave with competencies in clinical practice,
              critical thinking, and compassionate care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
