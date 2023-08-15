import axios from 'axios';
import React, {
  useLayoutEffect, useContext, useEffect, useState, useRef,
} from 'react'

import { useSelector } from 'react-redux';
import { getUser } from '../../store/actions/auth.action';
import FormContext from '../FormContext/form.context';
import Pg1 from './Pg1/Pg1';
import Pg2 from './Pg2/Pg2';
import Pg3 from './Pg3/Pg3';
import Pg4 from './Pg4/Pg4';
import Pg5 from './Pg5/Pg5';
import Pg6 from './Pg6/Pg6';
import { motion } from 'framer-motion'
import classes from './SpecFormEdit.module.css'
import { Link } from 'react-router-dom';
const {
  getCode, getName, getNames,
} = require('country-list');

export default function SpecFormEdit() {
  const { auth: { links } } = useSelector((state) => state);
  const { comp } = useSelector((state) => state);
  const { auth } = useSelector((state) => state);
  const { auth: { id } } = useSelector((state) => state);

  const [link, setLink] = useState(false);

  const [name, setName] = useState(auth?.name);
  const [lastname, setLastname] = useState(auth?.surname);
  const [ai, setAi] = useState(false);

  const [done, setDone] = useState(false);

  console.log('comp фильтр ===>', comp.filter(el => el.work_type_id === 11));

  const specArr = JSON.parse(localStorage.getItem('specs'))
  const spec = JSON.parse(localStorage.getItem('spec'))

  const [data, setData] = useState(null);

  const {
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
  } = useContext(FormContext);

  console.log('phone ===>', phone);
  console.log('selectedOption', selectedOption);

  const [page, setPage] = useState(() => {
    if (spec === "pg1") {
      return
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

  const getComp = async () => {
    const result = await axios.get(`${process.env.REACT_APP_API_URL}/companies/my/`)
    // console.log(selectedOption);
    console.log('компании для всего ==>', result.data);
    const arr = []
    const comps = result.data
    if (comps.filter(el => el.work_type_id === 2).length > 0) {
      setActive('sixth')
      setPage(6)
    } if (comps.filter(el => el.work_type_id === 6).length > 0) {
      setActive('fifth')
      setPage(5)
    } if (comps.filter(el => el.work_type_id === 7).length > 0) {
      setPage(4)
      setActive('fourth')
    } if (comps.filter(el => el.work_type_id === 9).length > 0) {
      setPage(3)
      setActive('third')
    } if (comps.filter(el => el.work_type_id === 10).length > 0) {
      setPage(2)
      setActive('second')
    } if (comps.filter(el => el.work_type_id === 11).length > 0) {
      setPage(1)
      setActive('first')
    }
    return result.data
  }

  // const isMounted = useRef(false);

  // useEffect(() => {
  //   setSelectedOption('Russia')
  // }, [selectedOption]);
  useEffect(() => {
    const getDatas = async () => {
      const result = await axios.get(`${process.env.REACT_APP_API_URL}/users/me/`, { withCredentials: true });
      console.log('возвращенный из куки юзер ==>', result.data);
      console.log(result.data.country_code);
      console.log(getName(result.data.country_code));
      setSelectedOption(getName(result.data.country_code))
      setMail(auth?.email);
      setTg(result.data.links?.[0]?.link)
      setInst(result.data.links?.[1]?.link);
      setPhone(result.data.phone);
      setAi(result.data.checkboxes?.ai)
      setDone(true)
      // console.log(selectedOption);
      console.log('в стейте страна ==>', selectedOption);
      return result.data
    }
    getDatas()
    getComp()
  }, [auth]);

  const saveIt = async () => {
    const arrz = auth?.checkboxes
    arrz.ai = true
    const obj = {
      checkboxes: arrz,
      links: [{ code: 'tg', link: tg, name: 'tg' }, { code: 'inst', link: inst, name: 'inst' }],
      email: mail,
      name,
      phone,
      country_code: getCode(selectedOption),
      surname: lastname,
    }

    const result = await axios.post(`${process.env.REACT_APP_API_URL}/users/update/`, obj)
    window.scrollTo({
      top: 1,
      behavior: 'smooth',
    });
    getUser()
    console.log('files ====>>', result.data);
  }

  const saveAI = async () => {
    const arrz = auth?.checkboxes
    arrz.ai = true
    const obj = {
      checkboxes: arrz,
      links: [{ code: 'tg', link: tg, name: 'tg' }, { code: 'inst', link: inst, name: 'inst' }],
      email: mail,
      phone,
      country_code: getCode(selectedOption),
      surname: lastname,
    }
    setAi(true)
    const result = await axios.post(`${process.env.REACT_APP_API_URL}/users/update/`, obj)
    window.scrollTo({
      top: 1,
      behavior: 'smooth',
    });
    getUser()
    console.log('files ====>>', result.data);
  }

  useEffect(() => {
    // localStorage.setItem('spec', JSON.stringify('pg1'))

    registrHandler();
    window.scrollTo({
      top: 1,
      behavior: 'smooth',
    });
  }, []);

  useLayoutEffect(() => {
    setName(auth.name)
    setLastname(auth.surname)
    setMail(auth.email)
    setTg(links?.[0]?.link)
    setInst(links?.[1]?.link)
    setPhone(auth.phone)
    setSelectedOption(auth?.country_code)
    window.scrollTo({
      top: 1,
      behavior: 'smooth',
    });
  }, [links])

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
  const btnAnimation = {
    hidden: {
      y: 30,
      opacity: 0,

    },
    visible: {
      y: 0,
      opacity: 1,
      viewport: { amout: 0.2 },
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  }
  const imgAnimation = {
    hidden: {
      y: 50,
      opacity: 0,

    },
    visible: {
      y: 0,
      opacity: 1,
      viewport: { amout: 0.2 },
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  }

  const textAnimation = {
    hidden: {
      y: 50,
      opacity: 0,

    },
    visible: {
      y: 0,
      opacity: 1,
      viewport: { amout: 0.2 },
      transition: {
        duration: 0.9,
        ease: "easeInOut",
      },
    },
  }
  const checkbox = {
    hidden: {
      y: 50,
      opacity: 0,

    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: {
        once: true,
        delay: custom * 0.2,
        duration: 0.5,
        ease: "linear",
        type: "just",
      },

    }),
  }
  const like1 = {
    hidden: {
      y: 30,
      opacity: 0,
      rotate: -25,
      scale: 0.9,

    },
    visible: {
      y: 0,
      opacity: 1,
      rotate: -30,
      viewport: { amout: 0.2 },
      transition: {
        delay: 1,
        duration: 1.2,
        ease: "easeInOut",
        type: "spring",
      },
    },
  }

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

  console.log('в стейте страна ==>', selectedOption);

  return (

    <motion.div
      className={classes.containerOptions}
    >
      {(comp && done) && (
        <>
          {done && (
            <>
              {!ai && (
                <motion.section
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ amout: 0.2, once: true }}
                  variants={BlockAnimation}
                  className={classes.ask_wrapper}
                >
                  <motion.img
                    variants={like1}
                    className={`${classes.hand} ${classes.like1}`}
                    src="/images/hands_icon/Like.webp"
                    alt="like"
                  />
                  <motion.div
                    variants={textAnimation}
                    className={classes.ask_text_block}
                  >
                    <h3>Регистрация завершена</h3>
                    <h2>Наш ИИ высоко оценил ваше портфолио
                    </h2>
                    <div className={classes.ask_p_block}>
                      <p>Разрешите использовать ваши работы&nbsp;для&nbsp;машинного обучения&nbsp;наших нейросетей?
                      </p>
                    </div>
                  </motion.div>
                  <button
                    onClick={saveAI}
                    className={classes.allowBtn}
                  > <p>Разрешить</p>
                    <img src="images/icons_svg/check.svg" alt="" />
                  </button>
                </motion.section>
              )}
              <motion.section
                initial='hidden'
                whileInView='visible'
                viewport={{ amout: 0.2, once: true }}
                variants={BlockAnimation}
                className={`${classes.mc_content_block} ${classes.mc_content_white}`}
              >

                <div className={classes.mc_wrapper}>
                  <motion.div
                    variants={textAnimation}
                    className={classes.mc_text_block}
                  >
                    <h1>Подпишитесь <br />
                      на наши соцсети
                    </h1>
                    <div className={`${classes.mc_p_block} ${classes.mc_p_block_short}`}>
                      <p>Так вы&nbsp;не&nbsp;пропустите запуск платформы
                        и&nbsp;получите первых клиентов раньше!
                      </p>
                      <p>А&nbsp;ещё рассказывайте о&nbsp;нас друзьям
                        и&nbsp;коллегам, так вы&nbsp;ускорите запуск платформы!
                      </p>
                    </div>
                  </motion.div>
                  <motion.button
                    onClick={() => { navigator.clipboard.writeText('https://clickpick.app'); setLink(true); }}
                    variants={btnAnimation}
                    className={`${classes.ic_btn} ${classes.ic_btn_black}`}
                  >{link ? 'Cсылка скопирована!' : 'Ссылка для друга'}
                  </motion.button>
                </div>

                <div className={classes.mc_image}>
                  <a href="https://t.me/+KVUc-AcBu0MwMjI6">
                    <img
                      className={`${classes.social} ${classes.tg}`}
                      src="/images/icons_social/tg.webp"
                      alt="telegram"
                    />
                  </a>
                  <a href="https://www.instagram.com/clickpick.app/">
                    <img
                      className={`${classes.social} ${classes.inst}`}
                      src="/images/icons_social/inst.webp"
                      alt="instagram"
                    />
                  </a>
                  <img
                    className={`${classes.hand} ${classes.rock1}`}
                    src="/images/hands_icon/Rock.webp"
                    alt="like"
                  />
                  <img
                    className={`${classes.hand} ${classes.pointer1}`}
                    src="/images/hands_icon/Pointer.webp"
                    alt="like"
                  />
                </div>
              </motion.section>
            </>
          )}

          <div className={classes.portfolioContainer}>
            <div className={classes.SpecNavbar}>

              {comp.filter(el => el.work_type_id === 11).length > 0 && (
                <motion.button
                  checked="checked"
                  initial='hidden'
                  whileInView='visible'
                  variants={checkbox}
                  custom={1}
                  viewport={{ once: true }}
                  className={`${active === "first" ? classes.navStep : classes.navStepFade}`}
                  onClick={() => { setPage(1); setActive("first") }}
                >
                  <img src="images/spec_icon/Logo.svg" alt="" />
                  <p>Логотип и&nbsp;брендинг</p>
                </motion.button>
              )}
              {comp.filter(el => el.work_type_id === 10).length > 0 && (
                <motion.button
                  initial='hidden'
                  whileInView='visible'
                  variants={checkbox}
                  custom={2}
                  viewport={{ once: true }}
                  onClick={() => { setPage(2); setActive("second") }}
                  className={`${active === "second" ? classes.navStep : classes.navStepFade}`}
                ><img src="images/spec_icon/Web.svg" alt="" />
                  <p>Веб-дизайн <br /> и&nbsp;no-code</p>
                </motion.button>
              )}
              {comp.filter(el => el.work_type_id === 9).length > 0 && (
                <motion.button
                  initial='hidden'
                  whileInView='visible'
                  variants={checkbox}
                  custom={3}
                  viewport={{ once: true }}
                  onClick={() => { setPage(3); setActive("third") }}
                  className={`${active === "third" ? classes.navStep : classes.navStepFade}`}
                ><img src="images/spec_icon/Ux.svg" alt="" />
                  <p>UI/UX <br /> дизайн</p>
                </motion.button>
              )}
              {comp.filter(el => el.work_type_id === 7).length > 0 && (
                <motion.button
                  initial='hidden'
                  whileInView='visible'
                  variants={checkbox}
                  custom={4}
                  viewport={{ once: true }}
                  className={`${active === "fourth" ? classes.navStep : classes.navStepFade}`}
                  onClick={() => { setPage(4); setActive("fourth") }}
                ><img src="images/spec_icon/Illustration.svg" alt="" />

                  <p>2D и 3D <br /> илююстрации</p>
                </motion.button>
              )}
              {comp.filter(el => el.work_type_id === 6).length > 0
                && (
                  <motion.button
                    initial='hidden'
                    whileInView='visible'
                    variants={checkbox}
                    custom={5}
                    viewport={{ once: true }}
                    onClick={() => { setPage(5); setActive("fifth") }}
                    className={`${active === "fifth" ? classes.navStep : classes.navStepFade}`}
                  ><img src="images/spec_icon/Presentation.svg" alt="" />

                    <p>Дизайн <br /> презентаций</p>
                  </motion.button>
                )}
              {comp.filter(el => el.work_type_id === 2).length > 0
                && (
                  <motion.button
                    initial='hidden'
                    whileInView='visible'
                    variants={checkbox}
                    viewport={{ once: true }}
                    custom={6}
                    onClick={() => { setPage(6); setActive("sixth") }}
                    className={`${active === "sixth" ? classes.navStep : classes.navStepFade}`}
                  ><img src="images/spec_icon/Verstka.svg" alt="" />

                    <p>Дизайн <br />упаковки</p>
                  </motion.button>
                )}

            </div>
            <div
              className={classes.SpecContent}
            >
              <div className={classes.testForm}>

                {
                  page === 1 ? <Pg1 comp={comp} ids={id} /> : page === 2 ? <Pg2 /> : page === 3 ? <Pg3 /> : page === 4 ? <Pg4 /> : page === 5 ? <Pg5 /> : <Pg6 />
                }

              </div>

              <motion.div
                initial='hidden'
                whileInView='visible'
                variants={Page}
                custom={3}
                className={classes.formContent}
              >

                <div className={classes.formWrapperItem}>
                  <label htmlFor="login" className={classes.formLabel}>Email</label>
                  <input
                    value={mail}
                    type="text"
                    onChange={(evt) => {
                      setMail(evt.target.value)
                    }}
                    className={classes.formControl}
                  />
                </div>
                <div className={classes.formWrapperItem}>
                  <label htmlFor="phone" className={classes.formLabel}>Телефон</label>
                  <input
                    value={phone}
                    placeholder="+7 999 987 98 89"
                    type="text"
                    onChange={(evt) => {
                      setPhone(evt.target.value)
                    }}
                    className={classes.formControl}
                  />
                </div>
                <div className={classes.formWrapperItem}>
                  <label htmlFor="instagram" className={classes.formLabel}>Инстаграм</label>
                  <input
                    value={inst}
                    type="text"
                    placeholder="@clickpick"
                    onChange={(evt) => {
                      setInst(evt.target.value)
                    }}
                    className={classes.formControl}
                  />
                </div>
                <div className={classes.formWrapperItem}>
                  <label htmlFor="lastname" className={classes.formLabel}>Телеграм</label>
                  <input
                    value={tg}
                    type="text"
                    onChange={(evt) => {
                      setTg(evt.target.value)
                    }}
                    placeholder="@clickpick"
                    className={classes.formControl}
                  />
                </div>
                {selectedOption && (
                  <>
                    <label htmlFor="country" className={classes.formLabel}>Страна</label>
                    <div className={classes.formControl}>
                      {selectedOption && (
                        <select value={selectedOption} onChange={e => setSelectedOption(e.target.value)}>

                          {getNames().map((option, index) => (
                            <option key={index} value={option}>
                              {option}
                            </option>
                          ))}

                        </select>
                      )}

                    </div>
                  </>
                )}

                <button className={`${classes.ic_btn} ${classes.ic_btn_green}`} onClick={saveIt}>Обновить данные</button>
              </motion.div>

            </div>
          </div>
        </>
      )}

      <div>

      </div>

    </motion.div>
  )
}
