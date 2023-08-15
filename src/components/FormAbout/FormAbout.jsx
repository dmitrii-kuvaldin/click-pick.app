import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import FormContext from '../FormContext/form.context';
import classes from './FormAbout.module.css'
import cn from 'classnames';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../store/actions/auth.action';
import { motion } from 'framer-motion';
// import { getWorker } from '../../store/actions/workers.action';
// import Loader from '../Loader/Loader';
// import Behance from 'behance-node'

const { getData, getCode, getNames } = require('country-list');

export default function FormAbout() {
  const { auth: { email } } = useSelector((state) => state);
  const dispatch = useDispatch()

  const [terms, setTerms] = useState('work_freelance');

  const [educate, setEducate] = useState('edu_online');
  const [exp, setExp] = useState('exp_less1');
  const [int, setInt] = useState('ai_constant');
  const [cript, setCript] = useState('cript_constant');
  const [eng, setEng] = useState('eng_begin');

  // const [loader, setLoader] = useState(false);

  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');

  const navigate = useNavigate();

  const { auth: { id } } = useSelector((state) => state);

  const {
    loader,
    setLoader,
    spec,
    setSpec,
    mail,
    setMail,
    tg,
    setTg,
    inst,
    setInst,
    phone,
    setPhone,
    selectedOption,
    setSelectedOption,
    // educate,
    // setEducate,
    // exp,
    // setExp,
    // int,
    // setInt,
    // cript,
    // setCript,
    // eng,
    // setEng,
  } = useContext(FormContext);

  console.log("это spec ===>", spec);

  const saveIt = async () => {
    // const arrz = auth?.checkboxes
    // arrz.ai = true
    const obj = {

      checkboxes: {
        [terms]: true,
        [educate]: true,
        [exp]: true,
        [int]: true,
        [cript]: true,
        [eng]: true,
        ai: false,

      },
      links: [{ code: 'tg', link: tg, name: 'tg' }, { code: 'inst', link: inst, name: 'inst' }],
      email: mail,
      phone,
      country_code: getCode(selectedOption),
      surname: lastname,
    }

    const result = await axios.post(`${process.env.REACT_APP_API_URL}/users/update/`, obj)
    // dispatch(getWorker({ id }))
    dispatch(getUser())
    setLoader(true)
    setTimeout(() => {
      setLoader(false)
      scrollTo()
      navigate('/profile')
    }, 3000);
    // window.location.reload(true)
    console.log('files ====>>', result.data);
  }

  useEffect(() => {
    setMail(email)
  }, [email]);

  console.log(name, 'name');
  console.log(lastname, 'lastname');
  console.log(mail, 'mail');
  console.log(tg, 'tg');
  console.log(inst, 'inst');
  console.log(phone, 'phone');
  console.log({
    terms,
    educate,
    exp,
    int,
    cript,
    eng,
  }, 'objjj');

  // useEffect(() => {
  //   registrHandler();
  //   getCountries()
  //   download()
  //   console.log('%ccountries ==>>', 'color:blue', getNames());
  // }, []);

  console.log('terms ===>', terms);
  console.log('option =====>', selectedOption);
  console.log('code =====>', getCode(selectedOption));
  console.log('все', getData());

  const Page = {
    hidden: {
      y: 50,
      opacity: 0,

    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        delay: custom * 0.2,
        ease: "easeInOut",
        type: "spring",
      },

    }),
  }

  return (

    <>
      <div className={classes.infoWrapper}>
        <div className={classes.infoBlock}><h1>Регистрация</h1> </div>
        {/* <Link style={{ pointerEvents: spec.length > 0 ? "auto" : "none", textDecoration: 'none' }} to="/registrationClient/specs"> */}
        <div onClick={saveIt} className={cn(classes.forwardBlock, { [classes.forwardBlockActive]: true })}>
          <h3 className={classes.forwardText}>Завершить</h3>
          <img className={classes.iconArrowRight} src="/images/icons_svg/Arrow-Right.svg" alt="arrow-next" />
        </div>
        {/* </Link> */}
      </div>
      <div className={classes.formContainer}>
        <div className={classes.formNavbar}>
          <p>Ваше резюме</p>
        </div>
        <div className={classes.formContent}>
          <motion.div
            initial='hidden'
            whileInView='visible'
            variants={Page}
            custom={1}
            viewport={{ amout: 0.2, once: true }}
            className={classes.formWrapper}
          >
            <div className={classes.optHeading}>
              <img className={classes.iconOptHeading} src="/images/icons_svg/job.svg" alt="job" />
              <h3>Где вы работаете?</h3>
            </div>
            <div className={classes.checkboxWrapper}>
              <ButtonPrimary onPress={() => setTerms("work_freelance")} colorPrime={`${terms === "work_freelance" ? 'ic_btn_green' : 'ic_btn_grey'}`} text="На фрилансе" />
              <ButtonPrimary onPress={() => setTerms("work_studio")} colorPrime={`${terms === "work_studio" ? 'ic_btn_green' : 'ic_btn_grey'}`} text="В студии" />
              <ButtonPrimary onPress={() => setTerms("work_product")} colorPrime={`${terms === "work_product" ? 'ic_btn_green' : 'ic_btn_grey'}`} text="На продукте" />
              <ButtonPrimary onPress={() => setTerms("work_no")} colorPrime={`${terms === "work_no" ? 'ic_btn_green' : 'ic_btn_grey'}`} text="Не работаю" />

              {/* <p className={cn(classes.par, { [classes.par2]: eng === 1 })}>Привет</p> */}

            </div>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            variants={Page}
            custom={2}
            viewport={{ amout: 0.2, once: true }}
            className={classes.formWrapper}
          >
            <div className={classes.optHeading}>
              <img className={classes.iconOptHeading} src="/images/icons_svg/edu.svg" alt="edu" />
              <h3>Образование</h3>
            </div>
            <div className={classes.checkboxWrapper}>
              <ButtonPrimary onPress={() => setEducate("edu_online")} colorPrime={`${educate === "edu_online" ? 'ic_btn_green' : 'ic_btn_grey'}`} text="Онлайн курсы" />
              <ButtonPrimary onPress={() => setEducate("edu_high")} colorPrime={`${educate === "edu_high" ? 'ic_btn_green' : 'ic_btn_grey'}`} text="Высшее образование" />
              <ButtonPrimary onPress={() => setEducate("edu_self")} colorPrime={`${educate === "edu_self" ? 'ic_btn_green' : 'ic_btn_grey'}`} text="Всему сам научился" />
              <ButtonPrimary onPress={() => setEducate("edu_other")} colorPrime={`${educate === "edu_other" ? 'ic_btn_green' : 'ic_btn_grey'}`} text="Другое" />

            </div>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            variants={Page}
            custom={3}
            viewport={{ amout: 0.2, once: true }}
            className={classes.formWrapper}
          >
            <div className={classes.optHeading}>
              <img className={classes.iconOptHeading} src="/images/icons_svg/time.svg" alt="Time" />
              <h3>Опыт работы</h3>
            </div>

            <div className={classes.checkboxWrapper}>
              <ButtonPrimary onPress={() => setExp("exp_less1")} colorPrime={`${exp === "exp_less1" ? 'ic_btn_green' : 'ic_btn_grey'}`} text="Меньше года" />
              <ButtonPrimary onPress={() => setExp("exp_1")} colorPrime={`${exp === "exp_1" ? 'ic_btn_green' : 'ic_btn_grey'}`} text="1-2 года" />
              <ButtonPrimary onPress={() => setExp("exp_2")} colorPrime={`${exp === "exp_2" ? 'ic_btn_green' : 'ic_btn_grey'}`} text="2-4 года" />
              <ButtonPrimary onPress={() => setExp("exp_5")} colorPrime={`${exp === "exp_5" ? 'ic_btn_green' : 'ic_btn_grey'}`} text="5-7 лет" />
              <ButtonPrimary onPress={() => setExp("exp_more")} colorPrime={`${exp === "exp_more" ? 'ic_btn_green' : 'ic_btn_grey'}`} text="7+ лет" />

            </div>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            variants={Page}
            custom={1}
            viewport={{ amout: 0.2, once: true }}
            className={classes.formWrapper}
          >
            <div className={classes.optHeading}>
              <img className={classes.iconOptHeading} src="/images/icons_svg/ai.svg" alt="Time" />
              <h3>Опыт взаимодействия с ИИ</h3>
            </div>

            <div className={classes.checkboxWrapper}>
              <ButtonPrimary onPress={() => setInt("ai_constant")} colorPrime={`${int === "ai_constant" ? 'ic_btn_green' : 'ic_btn_grey'}`} text="Постоянно применяю" />
              <ButtonPrimary onPress={() => setInt("ai_rare")} colorPrime={`${int === "ai_rare" ? 'ic_btn_green' : 'ic_btn_grey'}`} text="Применяю иногда" />
              <ButtonPrimary onPress={() => setInt("ai_less")} colorPrime={`${int === "ai_less" ? 'ic_btn_green' : 'ic_btn_grey'}`} text="Только пробовал" />
              <ButtonPrimary onPress={() => setInt("ai_never")} colorPrime={`${int === "ai_never" ? 'ic_btn_green' : 'ic_btn_grey'}`} text="Никогда не применяю" />

            </div>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            variants={Page}
            custom={1}
            viewport={{ amout: 0.2, once: true }}
            className={classes.formWrapper}
          >

            <div className={classes.optHeading}>
              <img className={classes.iconOptHeading} src="/images/icons_svg/crypto.svg" alt="crypto" />
              <h3>Опыт взаимодействия с криптой</h3>
            </div>
            <div className={classes.checkboxWrapper}>
              <ButtonPrimary onPress={() => setCript("cript_constant")} colorPrime={`${cript === "cript_constant" ? 'ic_btn_green' : 'ic_btn_grey'}`} text="Постоянно пользуюсь" />
              <ButtonPrimary onPress={() => setCript("cript_rare")} colorPrime={`${cript === "cript_rare" ? 'ic_btn_green' : 'ic_btn_grey'}`} text="Иногда пользуюсь" />
              <ButtonPrimary onPress={() => setCript("cript_less")} colorPrime={`${cript === "cript_less" ? 'ic_btn_green' : 'ic_btn_grey'}`} text="Никогда не пробовал" />
              <ButtonPrimary onPress={() => setCript("cript_never")} colorPrime={`${cript === "cript_never" ? 'ic_btn_green' : 'ic_btn_grey'}`} text="Не доверяю крипте" />
            </div>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            variants={Page}
            custom={1}
            viewport={{ amout: 0.2, once: true }}
            className={classes.formWrapper}
          >
            <div className={classes.optHeading}>
              <img className={classes.iconOptHeading} src="/images/icons_svg/Globe.svg" alt="Globe" />
              <h3>Знание английского</h3>
            </div>

            <div className={classes.checkboxWrapper}>
              <ButtonPrimary onPress={() => setEng("eng_begin")} colorPrime={`${eng === "eng_begin" ? 'ic_btn_green' : 'ic_btn_grey'}`} text="A1 | Beginner" />
              <ButtonPrimary onPress={() => setEng("eng_preinter")} colorPrime={`${eng === "eng_preinter" ? 'ic_btn_green' : 'ic_btn_grey'}`} text="A2 | Pre-Intermediate" />
              <ButtonPrimary onPress={() => setEng("eng_inter")} colorPrime={`${eng === "eng_inter" ? 'ic_btn_green' : 'ic_btn_grey'}`} text="B1 | Intermediate" />
              <ButtonPrimary onPress={() => setEng("eng_upinter")} colorPrime={`${eng === "eng_upinter" ? 'ic_btn_green' : 'ic_btn_grey'}`} text="B2 | Upper-Intermediate" />
              <ButtonPrimary onPress={() => setEng("eng_advance")} colorPrime={`${eng === "eng_advance" ? 'ic_btn_green' : 'ic_btn_grey'}`} text="C1 | Advanced" />
              <ButtonPrimary onPress={() => setEng("eng_prof")} colorPrime={`${eng === "eng_prof" ? 'ic_btn_green' : 'ic_btn_grey'}`} text="C2 | Proficiency" />
            </div>
          </motion.div>
        </div>
      </div>
      <div className={classes.formContainer}>
        <div className={classes.formNavbar}>
          <p>Контактная информация</p>
        </div>
        <div className={classes.formContent}>
          {/* <motion.div
            initial='hidden'
            whileInView='visible'
            variants={Page}
            custom={1}
            viewport={{ amout: 0.2, once: true }}
            className={classes.formWrapperItem}
          >
            <label htmlFor="name" className={classes.formLabel}>Имя</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(evt) => {
                setName(evt.target.value);
              }}
              placeholder="Виктор"
              className={classes.formControl}
            />
          </motion.div> */}
          {/* <motion.div
            initial='hidden'
            whileInView='visible'
            variants={Page}
            custom={1}
            viewport={{ amout: 0.2, once: true }}
            className={classes.formWrapperItem}
          >
            <label htmlFor="name" className={classes.formLabel}>Фамилия</label>
            <input
              type="text"
              name="lastname"
              value={lastname}
              onChange={(evt) => {
                setLastname(evt.target.value);
              }}
              placeholder="Сивак"
              className={classes.formControl}
            />
          </motion.div> */}
          {/* <motion.div
            initial='hidden'
            whileInView='visible'
            variants={Page}
            custom={1}
            viewport={{ amout: 0.2, once: true }}
            className={classes.formWrapperItem}
          >
            <label htmlFor="login" className={classes.formLabel}>Email</label>
            <input
              name="login"
              value={mail}
              onChange={(evt) => {
                setMail(evt.target.value);
              }}
              id="first_name1"
              type="text"
              className={classes.formControl}
              placeholder="sivak@clickpick.com"
            />
          </motion.div> */}
          <motion.div
            initial='hidden'
            whileInView='visible'
            variants={Page}
            custom={1}
            viewport={{ amout: 0.2, once: true }}
            className={classes.formWrapperItem}
          >
            <label htmlFor="lastname" className={classes.formLabel}>Телеграм</label>
            <input
              type="text"
              name="lastname"
              value={tg}
              onChange={(evt) => {
                setTg(evt.target.value);
              }}
              placeholder="@clickpick"
              className={classes.formControl}
            />
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            variants={Page}
            custom={1}
            viewport={{ amout: 0.2, once: true }}
            className={classes.formWrapperItem}
          >
            <label htmlFor="instagram" className={classes.formLabel}>Инстаграм</label>
            <input
              type="text"
              name="instagram"
              value={inst}
              onChange={(evt) => {
                setInst(evt.target.value);
              }}
              placeholder="@clickpick"
              className={classes.formControl}
            />
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            variants={Page}
            custom={1}
            viewport={{ amout: 0.2, once: true }}
            className={classes.formWrapperItem}
          >
            <label htmlFor="phone" className={classes.formLabel}>Телефон</label>
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={(evt) => {
                setPhone(evt.target.value);
              }}
              placeholder="+1 909 987 989 99"
              className={classes.formControl}
            />
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            variants={Page}
            custom={1}
            viewport={{ amout: 0.2, once: true }}
            className={classes.formWrapperItem}
          >
            <label htmlFor="country" className={classes.formLabel}>Страна</label>
            <div className={classes.formControl}>
              <select value={selectedOption} onChange={e => setSelectedOption(e.target.value)}>
                {getNames().map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>

          <button className={classes.saveButton} onClick={saveIt}>
            <img className={classes.iconOptHeading} src="/images/icons_svg/save.svg" alt="Save" />
            <p>Завершить регистрацию</p>
          </button>
        </div>
      </div>
    </>
  )
}
