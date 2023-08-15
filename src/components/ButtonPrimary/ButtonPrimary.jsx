import React from 'react'
import classes from './ButtonPrimary.module.css'
import cn from 'classnames';

export default function ButtonPrimary({
  text, colorPrime, colorSecond, onPress,
}) {
  return (
    <button onClick={onPress} className={cn(classes.ic_btn, { [classes.checkboxStep]: colorPrime === 'ic_btn_green' }, { [classes.checkboxStepFade]: colorPrime === 'ic_btn_grey' }, colorSecond)}>
      {text}
    </button>
  )
}
