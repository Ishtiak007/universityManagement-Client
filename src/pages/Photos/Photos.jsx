import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import slide1 from '../../assets/78.webp';
import slide2 from '../../assets/77.webp';
import slide3 from '../../assets/79.webp';
import slide4 from '../../assets/80.webp';
import slide5 from '../../assets/81.webp';
import slide6 from '../../assets/82.webp';
import slide7 from '../../assets/83.webp';
import slide8 from '../../assets/84.webp';
const Photos = () => {
    return (
        <div>
            <Swiper watchSlidesProgress={true} slidesPerView={4} className="mySwiper">
        <SwiperSlide><img src={slide1} alt=""  /></SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide6} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide7} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide8} alt="" /></SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default Photos;