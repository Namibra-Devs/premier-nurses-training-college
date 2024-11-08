// NewsList.jsx
import React from "react";
import { News } from "../UtilityComponents/NewsData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/swiper.min.css";
import ButtonView from "../Buttons/ButtonView";

// Install the Pagination and Autoplay modules
SwiperCore.use([Pagination, Autoplay]);

const NewsCarousel = () => {
  return (
    <Swiper
      spaceBetween={20} // Space between slides
      loop={true} // Infinite loop
      autoplay={{
        delay: 3000, // Delay between transitions in milliseconds (3 seconds)
        disableOnInteraction: false, // Keeps autoplay running after interaction
        pauseOnMouseEnter: true, // Pauses autoplay on hover
      }}
      pagination={{ clickable: true }} // Enable pagination
      breakpoints={{
        640: { slidesPerView: 1 }, // 1 slide on mobile
        1024: { slidesPerView: 2 }, // 2 slides on desktop
      }}
      className="news-list swiper-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4"
    >
      {News.map((newsItem, index) => (
        <SwiperSlide key={index} className="news-item py-10 ">
          {/* Wrap the entire content in an anchor tag */}
          <a
            href={newsItem.url}
            className="rounded-3xl overflow-hidden group hover:border-b transition-transform duration-500 transform hover:-translate-y-2 block"
          >
            <div className="overflow-hidden rounded-3xl">
              <img
                src={newsItem.image}
                alt={newsItem.title}
                className="news-image object-cover w-full inset-0 rounded-3xl group-hover:scale-110 duration-700 ease-in-out"
              />
            </div>

            {/* Contents */}
            <div className="flex flex-col md:flex-row items-start gap-5 mt-5 pb-5">
              <h3 className="news-date font-medium text-sm text-primary w-[30%]">
                {newsItem.date}
              </h3>
              <div>
                <h2 className="news-title text-gray-600 leading-tight tracking-tight text-xl font-semibold">
                  {newsItem.title}
                </h2>
                <hr className="my-3" />
                <p className="news-description font-normal text-sm text-gray-500 max-w-lg mt-1">
                  {newsItem.description}
                </p>

                {/* Read More Button */}
                <a
                  href={newsItem.url}
                  className="text-primary text-xs font-normal flex items-center gap-2 group-hover:gap-4 duration-500 ease mt-5"
                >
                  Read More<ion-icon name="chevron-forward-outline"></ion-icon>
                </a>
              </div>
            </div>
          </a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

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
          <p className="font-normal text-sm text-gray-500">
            Surround yourself with the community and resources to bring your
            vision to life and keep you updated.
          </p>
        </div>
        <a href="/" className="max-w-[60%] text-right mt-5 md:mt-0">
          <ButtonView label="View More" />
        </a>
      </div>

      {/* Swiper Carousel */}
      <NewsCarousel />
    </div>
  );
};

export default NewsList;
