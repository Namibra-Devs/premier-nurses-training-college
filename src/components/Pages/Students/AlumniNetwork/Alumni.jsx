import React from "react";
import { alumniData } from "./alumniData";

const Alumni = () => {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
      {/* Achievements 1 */}
      {alumniData.achievements.map((alumnus, index) => (
        <div
          key={index}
          className="relative bg-blue-100 rounded-3xl overflow-hidden p-6 hover:shadow-custom-light transition-transform duration-500 transform hover:-translate-y-2"
        >
          <div className="">
            <div className="rounded-full w-12 h-12 overflow-hidden">
              <img src={alumnus.profile} className="w-full" alt="alumni" />
            </div>
            <h2 className="text-base tracking-tight text-gray-800 font-semibold my-1">
              {alumnus.name}
            </h2>
            <h3 className="text-gray-700 text-sm">{alumnus.title}</h3>
            <p className="font-medium text-gray-500">
              (Class of {alumnus.year})
            </p>
            <br />
            <p className="text-gray-700 text-sm">{alumnus.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Alumni;
