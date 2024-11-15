
import React, { useState, useEffect } from "react";
import studentLifeData from "./studentLifeData";

const Overview = () => {

    const { overviewImages } = studentLifeData.overview;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % overviewImages.length
        );
        setFade(true);
      }, 700);
    }, 5000);

    return () => clearInterval(interval);
  }, [overviewImages.length]);

  return (
    <div className="relative w-full h-screen rounded-3xl">
        {overviewImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Student Life ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover rounded-3xl transition-opacity duration-700 ${
              index === currentImageIndex && fade ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute -bottom-32 md:-bottom-20 left-10 right-10 p-6 bg-gradient-to-r from-blue-800 to bg-primary rounded-3xl">
          <p className="text-white">
            {studentLifeData.overview.content}
          </p>
        </div>
      </div>
  )
}

export default Overview