import React from "react";
import ProcessData from "./ProcessData";

const ApplicationProcess = () => {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-4">
      {/* Application Steps */}
      {ProcessData.map((process, index) => (
        <div
          key={index}
          className="relative bg-gray-100 rounded-3xl overflow-hidden p-4"
        >
          <div className="mt-14">
            <div className="absolute top-0 left-0 p-4  bg-primary rounded-br-3xl text-lg font-bold text-white">
              <span className="">0{process.id}</span>
            </div>
            <h3 className="text-base tracking-tight text-gray-600 font-semibold my-1">
              {process.title}
            </h3>
            <p className="text-gray-500 text-sm">{process.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ApplicationProcess;
