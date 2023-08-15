import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import FormContext from '../FormContext/form.context';
import SpecOption from '../SpecOption/SpecOption';
import classes from './RegistrationClient.module.css'

export default function RegistrationClient() {
  const [data, setData] = useState(null);

  const {
    spec,
    setSpec,
  } = useContext(FormContext);

  console.log("это spec ===>", spec);

  const registrHandler = async () => {
    try {
      const resp = await axios.get(`${process.env.REACT_APP_API_URL}/works/`);

      setData(resp.data);

      return resp;
    } catch (error) {
      console.log(error, 'error');
    }
  };

  const localStorageHanler = () => {
    const myArr = JSON.parse(localStorage.getItem('specs'))
    console.log('myArr ====>>>', myArr);
    const calc = () => {
      if (myArr.includes('Логотип  и брендинг')) {
        return 'pg1'
      }
      if (myArr.includes('Веб-дизайн и no-code')) {
        return 'pg2'
      }
      if (myArr.includes('UX/UI дизайн')) {
        return 'pg3'
      }
      if (myArr.includes('2D и 3D илююстрации')) {
        return 'pg4'
      }
      if (myArr.includes('Дизайн  презентаций')) {
        return 'pg5'
      }
      if (myArr.includes('Дизайн упаковки')) {
        return 'pg6'
      }
    }
    localStorage.setItem('spec', JSON.stringify(calc()))
    localStorage.setItem('specEdit', JSON.stringify(calc()))
    localStorage.setItem('formForward', JSON.stringify('none'))
  };

  console.log('%cHello ====>>>', 'color: green; background: yellow', data);

  useEffect(() => {
    registrHandler();
  }, []);
  const BlockAnimation = {
    hidden: {
      y: 200,
      opacity: 0,

    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.6,
        ease: "easeInOut",
        type: "spring",
      },

    },
  }
  const BlockAnimation2 = {
    hidden: {
      y: 250,
      opacity: 0,

    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        duration: 1.7,
        ease: "easeInOut",
        type: "spring",
      },

    },
  }
  return (

    <div
      className={classes.containerOptions}
    >

      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ amout: 0.2, once: true }}
        variants={BlockAnimation}
        className={classes.infoWrapper}
      >
        <div className={classes.infoBlock}><h1>Выберите специализации</h1> </div>
        <div onClick={localStorageHanler}>
          <Link style={{ pointerEvents: spec.length > 0 ? "auto" : "none", textDecoration: 'none' }} to="/registrationClient/specs">
            <div className={classes.forwardBlock} style={{ backgroundColor: spec.length > 0 ? "#1EF88F" : "#E7E7E7" }}>
              <h3 style={{ color: spec.length > 0 ? "var(--contrastColor)" : "var(--optTxtColor)" }} className={classes.forwardText}>Вперед</h3>
              <svg className={classes.iconArrowRight} width="24" height="24" viewBox="0 0 24 24" style={{ fill: spec.length > 0 ? "var(--contrastColor)" : "var(--optTxtColor)" }} xmlns="http://www.w3.org/2000/svg">
                <path d="M22.0606 12.0001L14 20.0608L12.9393 19.0001L19.1893 12.7501H2.25V11.2501H19.1893L12.9393 5.00011L14 3.93945L22.0606 12.0001Z" />
              </svg>
              {/* <img className={classes.iconArrowRight} src="/images/icons_svg/Arrow-Right.svg" alt="Arrow-next" /> */}
            </div>
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial='hidden'
        whileInView='visible'
        viewport={{ amout: 0.2, once: true }}
        variants={BlockAnimation2}
        className={classes.cardsOptionWrapper}
      >
        {data && data[0].wt.map((task) => <SpecOption code={task.code} name={task.option} num={task.id} key={task.id} {...task} />)}
      </motion.div>
      {/* <p style={{ color: '#8A8A8A', marginBottom: '10px' }}>Дизайн:</p>
      <div className={classes.cardsOptionContainer}>

        {data && data[2].wt.map((task) => <CardOption name={task.option} num={task.id} key={task.id} {...task} />)}

      </div>
      <p style={{ color: '#8A8A8A', marginBottom: '10px' }}>Музыка:</p>
      <div className={classes.cardsOptionContainer}>

        {data && data[3].wt.map((task) => <CardOption name={task.option} num={task.id} key={task.id} {...task} />)}

      </div> */}

    </div>
  )
}
