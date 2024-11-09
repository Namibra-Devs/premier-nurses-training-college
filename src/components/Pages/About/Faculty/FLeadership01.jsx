import React from "react";
import facultyData from "./facultyData";

const FLeadership01 = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {facultyData.map((faculty, index) => (
        <div key={index} className="p-2 pb-6 bg-white rounded-3xl text-center">
          <img
            src={faculty.image}
            alt={faculty.name}
            className="w-full rounded-2xl mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold">{faculty.name}</h3>
          <p className="text-sm text-gray-600">{faculty.title}</p>
          <p className="mt-2 text-sm text-gray-700">{faculty.bio}</p>
        </div>
      ))}
    </div>
  );
};
export default FLeadership01;
