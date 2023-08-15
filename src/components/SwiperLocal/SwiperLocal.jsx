import React, {
  useCallback, useContext, useRef, useState,
} from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import classes from './SwiperLocal.module.css'

// import "./SwiperTest.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Navigation, Pagination } from "swiper";
import FormContext from '../FormContext/form.context';

export default function SwiperLocal({
  id, img, newimg, setNewimg,
}) {
  const {
    saver,
    setSaver,

  } = useContext(FormContext);
  // const [newimg, setNewimg] = useState(img);
  console.log('newimg ====>>>', newimg);
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
    const els = newimg
    console.log('els', els);
    console.log('evt.target.name', evt.target.name);
    setNewimg(els.filter(el => el.url !== evt.target.name))

    console.log('newimg после', newimg);
    // console.log('name ===>', name);

    // console.log('newImgs после ===>', newImgs);
    // setImgs(newImgs.filter(el => el !== name))

    // console.log('ответ из компании ==>', pic.data);
  }

  return (
    <>
      {newimg.length > 0 && (
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
          {newimg && newimg.map((imgg) => (
            <SwiperSlide key={imgg.url}>
              <button onClick={deletePic} name={imgg.url} className={classes.deleteBtn}>
                <img onClick={deletePic} name={imgg.url} src='/images/icons_svg/delete.svg' alt="" />
              </button>

              <div className={classes.imgWrapper}>
                <img className={classes.swiperImg} alt="" src={`${imgg.url}`} />
              </div>

            </SwiperSlide>
          ))}
        </Swiper>
      )}

    </>
  );
}
