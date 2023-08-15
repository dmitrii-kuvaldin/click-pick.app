import React, { useCallback, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from 'framer-motion';
import classes from './SwiperTest.module.css'

// import "./SwiperTest.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Navigation, Pagination } from "swiper";
import axios from 'axios';

export default function SwiperTest({
  id, img, imgs, setImgs, picload,
}) {
  // const [imgs, setImgs] = useState(img);
  // console.log('imgs ====>>>', imgs);
  const sliderRef = useRef(null);
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);
  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const deletePic = async (evt) => {
    const { name } = evt.target
    console.log('name =====>', name);
    let num = '';
    let count = 0
    for (let i = 0; i < name.length; i++) {
      if (name[i] === '/' || name[i] === '_') {
        console.log(i, name[i]);
        count += 1
        console.log('count ===>', count);
      } else if (count === 3) {
        console.log(i, name[i]);
        num += name[i]
      }
    }
    console.log('num', +num);
    num = +num
    const pic = await axios.delete(`${process.env.REACT_APP_API_URL}/files/?file_id=${num}`)
    const newImgs = imgs
    console.log('newImgs до', imgs);
    console.log('name ===>', name);

    console.log('newImgs после ===>', newImgs);
    setImgs(newImgs.filter(el => el !== name))
    console.log('img после', imgs);
    // console.log('ответ из компании ==>', pic.data);
  }
  const loader = {
    hidden: {
      y: 50,
    },
    visible: {
      y: 0,
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.4,
        ease: "easeInOut",
        type: "spring",
      },
    },
  }
  console.log('picload ====>', picload);
  console.log("экаааартиночки мои =>>>> ", imgs);
  return (
    <div className={classes.swiperMain}>
      {picload && (
        <div
          className={classes.loaderWrapper}
        >
          <div className={classes.rockWrapper}>
            <motion.img
              variants={loader}
              initial='hidden'
              whileInView='visible'
              src="/images/hands_icon/Rock.webp"
              alt="loader"
            />
            <motion.img
              variants={loader}
              initial='hidden'
              whileInView='visible'
              src="/images/hands_icon/Rock.webp"
              alt="loader"
            />
          </div>
          <div className={classes.loaderText}>
            <p>Загружаем работы...</p>
            <p>Оцениваем ИИ...</p>
          </div>
        </div>
      )}

      {/* <h1>Cвайпер с бека!</h1> */}
      {imgs.length > 0 && (
        <Swiper
          modules={[EffectCoverflow, Navigation, Pagination]}
          className={classes.swiperContainer}
          loop
          slidesPerView={1}
          spaceBetween={32}
          pagination={{
            clickable: true,
          }}
          ref={sliderRef}
        >
          <div className={classes.prevArrow} onClick={handlePrev} />
          <div className={classes.nextArrow} onClick={handleNext} />
          {imgs && imgs.map((imgg) => (
            <SwiperSlide key={imgg}>
              <button onClick={deletePic} name={imgg} className={classes.deleteBtn}>
                <img onClick={deletePic} src='/images/icons_svg/delete.svg' name={imgg} alt="" />
              </button>

              <div className={classes.imgWrapper}>
                <img className={classes.swiperImg} alt="" src={`${process.env.REACT_APP_API_URL}${imgg}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

    </div>
  );
}
