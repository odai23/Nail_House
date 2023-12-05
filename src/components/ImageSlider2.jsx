import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import "../styles/Slider.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2">
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
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
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
      </Swiper>
    </>
  );
}
