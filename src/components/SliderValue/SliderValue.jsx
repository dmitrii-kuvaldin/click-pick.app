import React from 'react'
import classes from './SliderValue.module.css'
import ReactSlider from "react-slider";

export default function SliderValue() {
  return (
    <div>
      <ReactSlider className={classes.customSlider} trackClassName={classes.customSliderTrack} />

    </div>
  )
}
