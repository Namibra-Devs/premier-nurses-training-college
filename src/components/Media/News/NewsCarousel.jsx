import React from "react";
import { News } from "./NewsData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Pagination, Autoplay, Lazy } from "swiper";
import "swiper/swiper.min.css";
import NewsCard from "./NewsCard";

// Install the Pagination and Autoplay modules
SwiperCore.use([Pagination, Autoplay, Lazy]);

const NewsCarousel = () => {
  return (
    <Swiper
      spaceBetween={20} // Space between slides
      loop={true} // Infinite loop
      speed={800}
      autoplay={{
        delay: 4000, // Delay between transitions in milliseconds (3 seconds)
        disableOnInteraction: false, // Keeps autoplay running after interaction
        pauseOnMouseEnter: true, // Pauses autoplay on hover
      }}
      pagination={{ clickable: true }} // Enable pagination
      Lazy={true}
      breakpoints={{
        640: { slidesPerView: 1 }, // 1 slide on mobile
        1024: { slidesPerView: 2 }, // 2 slides on desktop
      }}
    >
      {News.map((newsItem) => (
        <SwiperSlide key={newsItem.id || index} className="news-item py-10" >
          <NewsCard {...newsItem}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default NewsCarousel;