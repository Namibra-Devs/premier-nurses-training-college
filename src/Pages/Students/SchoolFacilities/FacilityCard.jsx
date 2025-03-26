import React from "react";

const FacilityCard = ({ image, title, description }) => (
  <div className="relative h-72 lg:h-80 rounded-3xl hover:shadow-custom-light duration-700 overflow-hidden group">
    <span className="text-white text-3xl absolute top-3 right-3 group-hover:animate-pulse duration-700">
      <ion-icon name="location-outline"></ion-icon>
    </span>
    <img src={image} alt={title} className="w-full h-full object-cover" />
    <div className="p-4 absolute inset-0 bg-gradient-to-t from-primary to-transparent flex flex-col justify-end">
      <div className="backdrop-blur-sm">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-gray-100 font-medium text-sm mt-1">{description}</p>
      </div>
    </div>
  </div>
);

export default FacilityCard;
