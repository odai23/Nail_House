import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import "../styles/Swiper.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

export default function SwiperNew() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper">
        <SwiperSlide>
          <img src="/images/1.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/2.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/3.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/4.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/5.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/6.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/7.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/8.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/9.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/10.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/12.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/13.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/14.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/15.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/16.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/17.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/18.jpeg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
