import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Pagination, Autoplay, Lazy } from "swiper";
import  alumniData  from "./alumniData";
import AlumniCard from "./AlumniCard";

// Install necessary Swiper modules
SwiperCore.use([Pagination, Autoplay, Lazy]);

const AlumniCarousel = () => {
  return (
    <div>
      <Swiper
        spaceBetween={20}
        loop={true}
        speed={700}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false, // Keeps autoplay running after interaction
          pauseOnMouseEnter: true, // Pauses autoplay on hover
        }}
        pagination={{ clickable: true }}
        Lazy={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }} >
        {alumniData.map((alumnus) => (
          <SwiperSlide key={alumnus.id} className="py-5 mb-10">
            <AlumniCard {...alumnus} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AlumniCarousel;