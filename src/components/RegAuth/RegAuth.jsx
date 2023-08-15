import React, { useEffect, useState } from 'react'
import classes from './RegAuth.module.css'
import jwt_decode from "jwt-decode"
import axios from 'axios'

import { useDispatch, useSelector } from 'react-redux';
import useLocalStorage from '../../hooks/useLS';
import { useNavigate } from 'react-router-dom';
import { setLoginDataQuick, setRegistrQuick } from '../../store/actions/auth.action';
import Problem from '../Problem/Problem';

export default function RegAuth() {
  const [name, setName] = useLocalStorage("name", "");
  const [password, setPassword] = useLocalStorage("password", "");
  const [email, setEmail] = useLocalStorage("email", "");
  const [reg, setReg] = useState(false);

  console.log('name', name);
  console.log('password', password);
  console.log('email', email);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { auth } = useSelector((state) => state);
  console.log('ждем ошибки ==>', auth);

  async function loginHandler(evt) {
    try {
      evt.preventDefault();
      // setReg(true)
      // dispatch(setRegistrQuick({ name, password, email }));
      dispatch(setLoginDataQuick({ login_or_email_or_name: email, password }));
      navigate("/form")
      // navigate("/login")
    } catch (error) {
      console.log('ошибка', error);
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
    google.accounts.id.initialize({
      client_id: "872960982385-osc8vsj1h8iqu3d6o28g9br5ba1ac2ho.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    })
    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "outline", size: "large" },
    )
  }, []);
  const fuck = {
    hidden: {
      opacity: 0,
      rotate: -15,
      scale: 0.5,
    },
    visible: {
      opacity: 1,
      rotate: 15,
      scale: 1.2,
      transition: {
        delay: 1,
        duration: 1.1,
        ease: "easeInOut",
        type: "spring",
      },
      viewport: { amout: 0.4 },
    },
  }
  return (
    <>
      <form className={classes.formWrapper} onSubmit={loginHandler}>
        {reg && <Problem text="we send you an email" hint="go for your link" />}

        {/* <div className={classes.formWrapperItem}>
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
        </div> */}
        <div className={classes.container}>
          <img src="/images/hands_icon/Pointer.webp" alt="" className={classes.handIcon} />
          <div className={classes.infoBlock}>
            <h1>Добро пожаловать, {name}</h1>
          </div>
          <button type="submit" className={classes.saveButton}>
            <p>Вперед!</p>
            <img className={classes.iconArrowRight} src="/images/icons_svg/Arrow-Right.svg" alt="arrow-next" />
          </button>
        </div>
        {/* <div id='signInDiv'></div> */}
      </form>

      {auth.error && <h1 style={{ color: 'red' }}>{auth.error}</h1>}
      {auth.ok && <h1 style={{ color: 'green' }}>Success! Verify your email to activate your account</h1>}
    </>
  )
}
