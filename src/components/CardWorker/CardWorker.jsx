import classes from './CardWorker.module.css'
import React from 'react'
import {
  EffectCoverflow, Navigation, Pagination, Scrollbar, A11y, EffectCube,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/effect-coverflow";
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube'

// new Swiper('.image-slider')

export default function CardWorker() {
  return (
    <div className={classes.container}>
      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        modules={[EffectCoverflow, Navigation, Pagination, Scrollbar, A11y, EffectCube]}
        // spaceBetween={50}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className={classes.slide}>
          <img className={classes.img} src='images/1.jpg' alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img className={classes.img} src='images/2.jpg' alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img className={classes.img} src='images/3.jpg' alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
