import axios from 'axios'
import classes from './LoginWorker.module.css'
import jwt_decode from "jwt-decode"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import useLocalStorage from '../../hooks/useLS';
import { Link, useNavigate } from 'react-router-dom';
import {
  setLoginDataQuick, setRegistrQuickGoogle,
} from '../../store/actions/auth.action';
import ReCAPTCHA from "react-google-recaptcha";
import Problem from '../Problem/Problem';
import { motion } from 'framer-motion'
export default function LoginWorker() {
  const [email, setEmail] = useLocalStorage("email", "");
  const [password, setPassword] = useLocalStorage("password", "");
  const [isVerified, setIsVerified] = useState(false);
  const { auth } = useSelector((state) => state);
  const { comp } = useSelector((state) => state);

  console.log('email', email);
  console.log('password', password);
  console.log('isVerified', isVerified);

  const scrollTo = () => {
    window.scrollTo({
      top: 1,
      behavior: 'smooth',
    });
    console.log('what?');
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onChange(value) {
    console.log("Captcha value:", value);
    setIsVerified(true)
  }
  function loginHandler(evt) {
    evt.preventDefault();

    dispatch(setLoginDataQuick({ login_or_email_or_name: email, password }));
    // navigate("/")
  }

  function handleCallbackResponse(response) {
    console.log("encoded JWT token", response.credential);
    const userObject = jwt_decode(response.credential)
    console.log('encodeded user jwt =>', userObject);
    async function mailCheck() {
      const result = await axios.get(`${process.env.REACT_APP_API_URL}/users/check_user_data_availiable/?email=${userObject.email}`)
      console.log('result ====>', result.data);
      if (result.data.email === false) {
        dispatch(setLoginDataQuick({ login_or_email_or_name: userObject.email, password: 12345678 }));
        console.log('а в чем проблема?');
        navigate("/")
        // dispatch(setRegistrQuick({ name: userObject.given_name, password: 12345678, email: userObject.email }));
      } else {
        dispatch(setRegistrQuickGoogle({ name: userObject.given_name, password: 12345678, email: userObject.email }));
        // dispatch(setLoginDataQuick({ login_or_email_or_name: userObject.email, password: 12345678 }));
      }
      return result.data.email
    }
    mailCheck()

    // console.log('что там? =====>', mailCheck());

    // navigate("/")
  }

  useEffect(() => {
    if (auth?.id) {
      if (auth?.country_code) {
        navigate("/profile")
      } else {
        navigate("/form")
      }
    }
  }, [auth]);

  useEffect(() => {
    scrollTo()
    google.accounts.id.initialize({
      client_id: "99157122373-f282oedp1micr4p2o11nnd84g5f8c38i.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    })
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {
        theme: "outline", size: "medium", text: "sign in", ux_mode: "redirect",
      },
    )
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
        duration: 1.2,
        ease: "easeInOut",
        type: "spring",
      },

    },
  }
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      variants={BlockAnimation}
      className={classes.container}
    >
      <img src="/images/hands_icon/Rock.webp" alt="" className={classes.handIcon} />
      <div className={classes.infoWrapper}>
        <div className={classes.infoBlock}><h1>Войти на платформу</h1> </div>
      </div>
      <form className={classes.formWrapper} onSubmit={loginHandler}>
        <div className={classes.formWrapperItem}>
          <label htmlFor="exampleInputPassword1" className={classes.formLabel}>E-mail</label>
          <input
            name="login"
            value={email}
            onChange={(evt) => {
              setEmail(evt.target.value);
            }}
            id="first_name1"
            type="text"
            className={classes.formControl}
            placeholder="hello@clickpick.app"
          />
        </div>

        <div className={classes.formWrapperItem}>
          <label htmlFor="exampleInputPassword1" className={classes.formLabel}>Пароль</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(evt) => {
              setPassword(evt.target.value);
            }}
            placeholder="••••••••"
            className={classes.formControl}
          />
        </div>
        <div className={classes.actionWrapper}>
          <div className={classes.buttonWrapper}>
            <button disabled={isVerified} type="submit" className={`${classes.ic_btn} ${classes.ic_btn_green}`}>
              Войти
            </button>
            <Link to="/registration" rel="stylesheet" className={`${classes.ic_btn} ${classes.ic_btn_grey}`}>
              Регистрация
            </Link>
          </div>
          <div className={classes.linkWrapper}>
            {/* <div id='signInDiv'></div> */}
            {/* <a href="#123" className={classes.forgotPass}>Забыли пароль?</a> */}
          </div>
        </div>
      </form>
      {auth?.detail === 'Creds not valid' && <Problem text="Упс! Пароль неправильный" hint="Попробуйте ещё раз" />}

    </motion.div>
  )
}
