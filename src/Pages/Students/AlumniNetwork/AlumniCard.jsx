import React from "react";

const AlumniCard = ({ name, profile, title, year, description }) => {
  return (
    <div className="relative bg-blue-100 h-72 w-full rounded-3xl overflow-hidden p-6 hover:shadow-custom-light transition-transform duration-500 transform hover:-translate-y-2">
      <div> 
        <div className="rounded-full w-12 h-12 overflow-hidden">
          <img src={profile} className="w-full h-full object-cover" alt={name} />
        </div>
        <h2 className="text-base tracking-tight text-gray-800 font-semibold my-1">
          {name}
        </h2>
        <h3 className="text-gray-700 text-sm">{title}</h3>
        <p className="font-medium text-gray-500">(Class of {year})</p>
        <p className="text-gray-700 text-sm mt-3">{description}</p>
      </div>
    </div>
  );
};

export default AlumniCard;
