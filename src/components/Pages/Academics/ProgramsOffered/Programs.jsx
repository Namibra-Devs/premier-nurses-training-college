import React from "react";
import ProgramsData from "./ProgramsData";

const Programs = () => {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
      {/* Key Statics 1 */}
      {ProgramsData.map((program, index) => (
        <a
          href={program.url}
          key={index}
          className="relative bg-blue-100 rounded-3xl overflow-hidden p-6 border border-transparent hover:border-blue-200 hover:shadow-custom-light transition-transform duration-700 transform hover:-translate-y-2"
        >
          <div className="mt-14">
            <div className="absolute top-0 left-0 p-4 bg-yellow-400 rounded-br-3xl text-lg font-bold text-white">
              <span className="text-4xl flex items-center">
                <ion-icon name="school-outline"></ion-icon>
              </span>
            </div>
            <h3 className="text-base tracking-tight text-gray-700 font-semibold my-1">
              {program.name}
            </h3>
            <p className="text-gray-600 text-sm">{program.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Programs;
