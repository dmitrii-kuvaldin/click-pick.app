import React from 'react'
import classes from './NoPage.module.css'

export default function NoPage() {
  return (
    <div className={classes.wrapper}>
      <a href="/"><p>На главную</p></a>
      <img className={classes.number} src="images/ru/main_page/404.webp" alt="404" />
      <img className={classes.like} src="images/hands_icon/like.webp" alt="404" />
      <p>Вы не туда не попали. <br /> Этой страницы не существует.</p>
    </div>
  )
}
