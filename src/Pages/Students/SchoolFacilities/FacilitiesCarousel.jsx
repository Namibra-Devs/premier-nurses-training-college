import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Pagination, Autoplay, Lazy } from "swiper";
import FacilityCard from "./FacilityCard";
import { facilitiesData } from "./facilitiesData";

// Install necessary Swiper modules
SwiperCore.use([Pagination, Autoplay, Lazy]);

const FacilitiesCarousel = () => {
  return (
    <div>
      <Swiper
        spaceBetween={20}
        loop={true}
        speed={800}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false, // Keeps autoplay running after interaction
          pauseOnMouseEnter: true, // Pauses autoplay on hover
        }}
        pagination={{ clickable: true }}
        lazy={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}>
        {facilitiesData.map((facility) => (
          <SwiperSlide key={facility.id} className="py-5 mb-10">
            <FacilityCard {...facility} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FacilitiesCarousel;
