import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FormContext from '../FormContext/form.context';
import Pg1 from './Pg1/Pg1'
import Pg2 from './Pg2/Pg2'
import Pg3 from './Pg3/Pg3'
import Pg4 from './Pg4/Pg4'
import Pg5 from './Pg5/Pg5'
import Pg6 from './Pg6/Pg6'
import classes from './SpecForm.module.css'
import cn from 'classnames';
import { motion } from 'framer-motion';

export default function SpecForm() {
  const {
    saver,
  } = useContext(FormContext);
  const { comp } = useSelector((state) => state);

  const specArr = JSON.parse(localStorage.getItem('specs'))
  const spec = JSON.parse(localStorage.getItem('spec'))
  console.log('%cspec ====>>>', 'color:red', JSON.parse(localStorage.getItem('spec')));

  const [data, setData] = useState(null);

  const [page, setPage] = useState(() => {
    if (spec === "pg1") {
      return 1
    } if (spec === "pg2") {
      return 2
    } if (spec === "pg3") {
      return 3
    } if (spec === "pg4") {
      return 4
    } if (spec === "pg5") {
      return 5
    } if (spec === "pg6") {
      return 6
    }
  });

  // const [active, setActive] = useState('');
  const [active, setActive] = useState(() => {
    if (spec === "pg1") {
      return 'first'
    } if (spec === "pg2") {
      return 'second'
    } if (spec === "pg3") {
      return 'third'
    } if (spec === "pg4") {
      return 'fourth'
    } if (spec === "pg5") {
      return 'fifth'
    } if (spec === "pg6") {
      return 'sixth'
    }
  });
  console.log('active =====>>>>', active);
  console.log('spec  =====>', spec);

  const registrHandler = async () => {
    try {
      const resp = await axios.get(`${process.env.REACT_APP_API_URL}/works/`);
      console.log('resp.data ====>', resp.data);
      setData(resp.data);
      console.log(data, 'data');
      return resp;
    } catch (error) {
      console.log(error, 'error');
    }
  };

  console.log(data, 'data');

  const message = () => {
    confirm('Загрузи портфолио')
  }

  useEffect(() => {
    registrHandler();
  }, []);

  const checkbox = {
    hidden: {
      opacity: 0,
      y: 50,

    },
    visible: custom => ({
      opacity: 1,
      y: 0,
      transition: {
        once: true,
        delay: custom * 0.2,
        duration: 0.5,
        ease: "linear",
        type: "just",
      },

    }),
  }

  return (

    <div className={classes.containerOptions}>
      <div className={classes.infoWrapper}>
        <div className={classes.infoBlock}><h1>Регистрация</h1> </div>
        <div onClick={comp.length === 0 && message}>
          <Link style={{ pointerEvents: comp.length >= specArr.length ? "auto" : "none", textDecoration: 'none' }} to="/registrationClient/about">
            {comp && (
              <div className={cn(classes.forwardBlock, { [classes.forwardBlockActive]: comp.length >= specArr.length })}>
                <h3 className={classes.forwardText}>Следующий шаг</h3>
                <img className={classes.iconArrowRight} src="/images/icons_svg/Arrow-Right.svg" alt="arrow-next" />
              </div>
            )}
          </Link>
        </div>
      </div>

      <div className={classes.portfolioContainer}>
        <div
          className={classes.SpecNavbar}
        >

          {/* {spec && spec.map((task) => <SpecOptionMini name={task} key={task} />)} */}
          {specArr.includes("Логотип  и брендинг") && (
            <motion.button
              initial='hidden'
              whileInView='visible'
              variants={checkbox}
              custom={1}
              viewport={{ once: true }}
              checked="checked"
              className={`${active === "first" ? classes.navStep : classes.navStepFade}`}
              onClick={() => { setPage(1); setActive("first") }}
            >

              <img src="images/spec_icon/Logo.svg" alt="" />

              <p>Логотип и&nbsp;брендинг</p>
            </motion.button>
          )}
          {specArr.includes("Веб-дизайн и no-code") && (
            <motion.button
              initial='hidden'
              whileInView='visible'
              variants={checkbox}
              custom={2}
              viewport={{ once: true }}
              onClick={() => { setPage(2); setActive("second") }}
              className={`${active === "second" ? classes.navStep : classes.navStepFade}`}
            >
              <img src="images/spec_icon/Web.svg" alt="" />
              <p>Веб-дизайн <br /> и&nbsp;no-code</p>
            </motion.button>
          )}
          {specArr.includes("UX/UI дизайн") && (
            <motion.button
              initial='hidden'
              whileInView='visible'
              variants={checkbox}
              custom={3}
              viewport={{ once: true }}
              onClick={() => { setPage(3); setActive("third") }}
              className={`${active === "third" ? classes.navStep : classes.navStepFade}`}
            >
              <img src="images/spec_icon/Ux.svg" alt="" />

              <p>UI/UX <br /> дизайн</p>
            </motion.button>
          )}
          {specArr.includes("2D и 3D илююстрации") && (
            <motion.button
              initial='hidden'
              whileInView='visible'
              variants={checkbox}
              custom={4}
              viewport={{ once: true }}
              className={`${active === "fourth" ? classes.navStep : classes.navStepFade}`}
              onClick={() => { setPage(4); setActive("fourth") }}
            >
              <img src="images/spec_icon/Illustration.svg" alt="" />

              <p>2D и 3D <br /> илююстрации</p>
            </motion.button>
          )}
          {specArr.includes("Дизайн  презентаций")
            && (
              <motion.button
                initial='hidden'
                whileInView='visible'
                variants={checkbox}
                custom={5}
                viewport={{ once: true }}
                onClick={() => { setPage(5); setActive("fifth") }}
                className={`${active === "fifth" ? classes.navStep : classes.navStepFade}`}
              >

                <img src="images/spec_icon/Presentation.svg" alt="" />

                <p>Дизайн <br /> презентаций</p>
              </motion.button>
            )}
          {specArr.includes("Дизайн упаковки")
            && (
              <motion.button
                initial='hidden'
                whileInView='visible'
                variants={checkbox}
                viewport={{ once: true }}
                custom={6}
                onClick={() => { setPage(6); setActive("sixth") }}
                className={`${active === "sixth" ? classes.navStep : classes.navStepFade}`}
              >
                <img src="images/spec_icon/Verstka.svg" alt="" />

                <p>Дизайн <br />упаковки</p>
              </motion.button>
            )}

        </div>
        <div className={classes.SpecContent}>

          {
            page === 1 ? <Pg1 /> : page === 2 ? <Pg2 /> : page === 3 ? <Pg3 /> : page === 4 ? <Pg4 /> : page === 5 ? <Pg5 /> : <Pg6 />
          }

        </div>
      </div>

    </div>
  )
}
