import React from 'react'
import classes from './ProblemMain.module.css'

export default function Problem({ text, hint }) {
  return (
    <div className={classes.error}>
      <div className={classes.errorWrapper}>
        <img src="/images/icons_svg/Confused.svg" alt="Confused" />
        <p>
          {text}
        </p>
      </div>
      <p className={classes.small_text}>
        {hint}
      </p>
    </div>
  )
}
