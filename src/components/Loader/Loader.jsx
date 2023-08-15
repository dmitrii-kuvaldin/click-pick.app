import React from 'react'
import classes from './Loader.module.css'
import { motion } from 'framer-motion'

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

export default function Loader() {
  return (

    <div
      className={classes.loaderWrapper}
    >
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

  )
}
