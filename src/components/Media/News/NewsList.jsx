// NewsList.jsx
import React from "react";
import ButtonView from "../../Buttons/ButtonView";
import NewsCarousel from "./NewsCarousel";



const NewsList = () => {
  return (
    <div className="pt-24">
      <div className="flex flex-col items-start md:flex-row md:items-center justify-between gap-5">
        <div className="text-left max-w-[70%] md:max-w-[50%]">
          {/* title */}
          <h3 className="text-primary text-sm tracking mb-4 text-left uppercase font-medium">
            News | Events
          </h3>
          {/* Description */}
          <p className="font-normal text-base text-gray-500">
            Surround yourself with the community and resources to bring your
            vision to life and keep you updated.
          </p>
        </div>
        <a href="/" className="max-w-[60%] text-right mt-5 md:mt-0">
          <ButtonView label="View More" />
        </a>
      </div>

      {/* Swiper Carousel */}
      <NewsCarousel/>
    </div>
  );
};

export default NewsList;
