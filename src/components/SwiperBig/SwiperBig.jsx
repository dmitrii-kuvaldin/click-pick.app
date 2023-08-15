import React, { useCallback, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import classes from './SwiperBig.module.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Navigation } from "swiper";

export default function SwiperBig({ imgs }) {
  const sliderRef = useRef(null);

  // const handlePrev = useCallback(() => {
  //   if (!sliderRef.current) return;
  //   sliderRef.current.swiper.slidePrev();
  // }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
  return (
    <div className={classes.swiperContainer}>
      <Swiper
        style={{
          "--swiper-navigation-display": "none",
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop
        className={classes.swiperSize}
        spaceBetween={8}
        slidesPerView={1}
        grabCursor
        centeredSlides
        navigation
        ref={sliderRef}
        modules={[EffectCoverflow, Navigation]}
      // navigation={{
      //   nextEl: '.review-swiper-button-next',
      //   prevEl: '.review-swiper-button-prev',
      // }}
      >
        {imgs && imgs.map((img) => (
          <SwiperSlide key={img}>
            <img className={classes.swiperImg} alt="" src={`${process.env.REACT_APP_API_URL}${img}`} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <div className="prev-arrow" onClick={handlePrev} /> */}
      <div style={{ position: 'absolute', zIndex: '15', right: '0' }} className={classes.nextArrow} onClick={handleNext} />
    </div>
  );
}
