import classes from './RegistrationQuick.module.css'
import React, { useEffect, useState } from 'react'
import jwt_decode from "jwt-decode"
import axios from 'axios'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux';
import useLocalStorage from '../../hooks/useLS';
import { useNavigate } from 'react-router-dom';
import { setRegistrQuick } from '../../store/actions/auth.action';
import Problem from '../Problem/Problem';

export default function RegistrationQuick() {
  const [name, setName] = useLocalStorage("name", "");
  const [password, setPassword] = useLocalStorage("password", "");
  const [email, setEmail] = useLocalStorage("email", "");
  const [reg, setReg] = useState(false);
  const [inputs, setInputs] = useState(true);
  const [error, setError] = useState(null);
  const [error2, setError2] = useState(null);

  console.log('name', name);
  console.log('password', password);
  console.log('email', email);

  const scrollTo = () => {
    window.scrollTo({
      top: 1,
      behavior: 'smooth',
    });
    console.log('what?');
  }

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { auth } = useSelector((state) => state);
  console.log('ждем ошибки ==>', auth);

  async function loginHandler(evt) {
    try {
      evt.preventDefault();

      // dispatch(setRegistrQuick({ name, password, email }));
      const result = await axios.post(`${process.env.REACT_APP_API_URL}/users/`, { name, password, email })
      setReg(true)
      setInputs(false)
      setError(null)
      setError2(null)
      console.log('result.data ===================>>>>', result);

      // navigate("/login")
    } catch (error) {
      console.log('ошибка2 ====>', error?.response?.data?.detail[0]?.msg);
      console.log('ошибка1 ====>', error?.response?.data?.detail);
      setError(error?.response?.data?.detail)
      setError2(error?.response?.data?.detail[0]?.msg)
    }
  }

  function handleCallbackResponse(response) {
    console.log("encoded JWT token", response.credential);
    const userObject = jwt_decode(response.credential)
    console.log('encodeded user jwt =>', userObject);
    dispatch(setRegistrQuick({ name: userObject.given_name, password: 12345678, email: userObject.email }));
    // navigate("/login")
  }

  useEffect(() => {
    /* global google */
    scrollTo()
    google.accounts.id.initialize({
      client_id: "872960982385-osc8vsj1h8iqu3d6o28g9br5ba1ac2ho.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    })
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" },
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

  console.log('inputs', inputs);

  return (
    <>
      <motion.div
        initial='hidden'
        whileInView='visible'
        variants={BlockAnimation}
        className={classes.container}
      >
        <div
          className={classes.infoWrapper}
        >
          <div className={classes.infoBlock}><h1>Регистрация на платформе</h1> </div>
        </div>
        {reg && (
          <motion.div
            initial='hidden'
            whileInView='visible'
            variants={BlockAnimation}
            className={classes.verify}
          >
            <img src="images/icons_svg/mail.svg" alt="" />
            <div className={classes.textVerify}>
              <h1>Отправили письмо на почту</h1>
              <p>Письмо пришло на ящик {email}. Перейдите по ссылке в письме, чтобы создать аккаунт</p>
            </div>
            <div className={classes.btnWrapper}>
              <button onClick={loginHandler} className={`${classes.ic_btn} ${classes.ic_btn_green}`}>
                Отправить еще раз
              </button>
              <button onClick={() => { setInputs(true); setReg(false) }} className={`${classes.ic_btn} ${classes.ic_btn_grey}`}>
                Изменить данные
              </button>
            </div>
          </motion.div>
        )}

        {inputs && (
          <>
            <img src="/images/hands_icon/Like.webp" alt="" className={classes.handIcon} />
            <form
              viewport={{ amout: 0.2, once: true }}
              variants={BlockAnimation}
              className={classes.formWrapper}
              onSubmit={loginHandler}
            >
              <div className={classes.formWrapperItem}>
                <label className={classes.formLabel} htmlFor="exampleInputPassword1">Имя</label>
                <input
                  name="login"
                  value={name}
                  onChange={(evt) => {
                    setName(evt.target.value);
                  }}
                  id="login_reg"
                  type="text"
                  className={classes.formControl}
                  placeholder="Виктор"
                />
              </div>
              <div className={classes.formWrapperItem}>
                <label className={classes.formLabel} htmlFor="exampleInputPassword1">E-mail</label>
                <input
                  name="email"
                  value={email}
                  onChange={(evt) => {
                    setEmail(evt.target.value);
                  }}
                  id="email_reg"
                  type="email"
                  className={classes.formControl}
                  placeholder="hello@clickpick.app"
                />
              </div>

              <div className={classes.formWrapperItem}>
                <label className={classes.formLabel} htmlFor="exampleInputPassword1">Пароль</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(evt) => {
                    setPassword(evt.target.value);
                  }}
                  placeholder="••••••••••"
                  className={classes.formControl}
                />
              </div>
              <div className={classes.buttonWrapper}>
                <button type="submit" className={`${classes.ic_btn} ${classes.ic_btn_green}`}>
                  <p>Зарегистрироваться</p>
                </button>
                {/* <div id='signInDiv'></div> */}
              </div>
            </form>
          </>
        )}

        {auth.error && <h1 style={{ color: 'red' }}>{auth.error}</h1>}
        {auth.ok && <h1 style={{ color: 'green' }}>Success! Verify your email to activate your account</h1>}
        {error === 'emeil exist' && <Problem text="Упс! Такая почта уже есть" hint="Попробуй другую" />}
        {error2 === 'ensure this value has at least 8 characters' && <Problem text="Пароль должен содержать больше 8 символов" hint="Попробуй так" />}
      </motion.div>
    </>

  )
}
