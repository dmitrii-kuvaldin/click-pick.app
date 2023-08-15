import axios from 'axios'
import React, {
  useContext, useEffect, useRef, useState,
} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SliderValue from '../../SliderValue/SliderValue'
import classes from '../SpecForm.module.css'
import { useTranslation } from 'react-i18next'
import { setCompany } from '../../../store/actions/auth.action'
import SwiperTest from '../../SwiperTest/SwiperTest'
import FormContext from '../../FormContext/form.context'
import SwiperLocal from '../../SwiperLocal/SwiperLocal'
import { motion } from 'framer-motion';
import Problem from '../../Problem/Problem'
import { getCompany } from '../../../store/actions/workers.action'

export default function Pg2() {
  const {
    saver,
    setSaver,
    newimg2,
    setNewimg2,
    setLoader,
  } = useContext(FormContext);
  const [img, setImg] = useState(null);
  const [value, setValue] = useState(1200);
  const [terms, setTerms] = useState('1-3');
  const [policy, setPolicy] = useState("project");
  const [prog, setProg] = useState(['webflow']);
  const [skill, setSkill] = useState(['webflow', "animation"]);
  const [response, setResponse] = useState(null);
  const [upload, setUpload] = useState(null);
  const [compm, setCompm] = useState([]);
  const [pics, setPics] = useState(compm[0]?.portfolio);
  const [done, setDone] = useState(false);
  const [picload, setPicload] = useState(false);

  const { auth: { id } } = useSelector((state) => state);
  const { comp } = useSelector((state) => state);

  const [err, setErr] = useState(null);
  const myRef = useRef(null)
  const scrollTo = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    console.log('what?');
  }

  const dispatch = useDispatch();

  const changeHandler = (event) => {
    setErr(null)
    const arr = Array.from(event.target.files)
    const arrLocal = []
    console.log(event.target.files, 'event.target.files');
    console.log('url', URL.createObjectURL(event.target.files[0]));
    for (let i = 0; i < arr.length; i++) {
      arrLocal.push({ url: URL.createObjectURL(arr[i]), db: arr[i] })
    }
    setNewimg2(arrLocal)
    setImg(arr);
    console.log('arr', arr);
    setResponse(null)
    setUpload('')
  };

  const skillHandler = ({ target }) => {
    console.log("target ===>", target.name);
    let newArray = skill
    if (skill.includes(target.name)) {
      newArray = newArray.filter((el) => el !== target.name)
      setSkill(newArray)
    } else {
      setSkill((current) => [...current, target.name])
    }
  };

  const moreUpload = (event) => {
    const arr = Array.from(event.target.files)
    const arrLocal = []
    console.log(event.target.files, 'event.target.files');
    console.log('url', URL.createObjectURL(event.target.files[0]));
    for (let i = 0; i < arr.length; i++) {
      arrLocal.push({ url: URL.createObjectURL(arr[i]), db: arr[i] })
    }
    setNewimg2([...newimg2, ...arrLocal])
    setImg([...img, ...arr]);
    console.log('arr', arr);
    setResponse(null)
    setUpload('')
  };

  function saveComapny() {
    const imgarr = []
    for (let i = 0; i < newimg2.length; i++) {
      imgarr.push(newimg2[i].db)
    }
    if ((imgarr.length > 0) || (compm[0]?.portfolio.length > 0)) {
      if (imgarr.length > 0) {
        setImg(imgarr)
        console.log('картиночки =====>>>>', img);
      }
      const checkboxes = {}
      checkboxes[terms] = true

      for (let i = 0; i < skill.length; i++) {
        checkboxes[skill[i]] = true
      }
      const task = {
        cost: value, price_policy: policy, checkboxes, work_type_id: 10,
      }
      console.log('сгенерили ===>', task);
      setSaver(saver + 1)
      if (imgarr.length > 0) {
        setImg(imgarr)
        console.log('картиночки =====>>>>', img);
        dispatch(setCompany({ task, imgarr, id }))
        setPicload(true)
      } else {
        dispatch(setCompany({ task, imgarr, id }))
      }
    } else {
      setErr('подгрузи')
      scrollTo()
    }
  }

  const { t, i18n } = useTranslation();

  const updPic = async (event) => {
    try {
      const arr = Array.from(event.target.files)
      setImg(arr)
      // setLoader(true)
      console.log('arr', arr);
      console.log('img ===>', img);
      for (let i = 0; i < arr.length; i++) {
        const formData = new FormData();
        formData.append('files', arr[i]);
        const result = await axios.post(`${process.env.REACT_APP_API_URL}/files/?code=portfolio&company_id=${compm[0].id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        console.log(result.data);
        console.log('загружена', i);
      }
      dispatch(getCompany())
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    localStorage.setItem('spec', JSON.stringify('pg2')) // i18n.changeLanguage('ru-RU');
  }, [])

  useEffect(() => {
    console.log('%c как выглядит comp =====>', "color:blue", comp);
    console.log('%c стейт comp =====>', "color:blue", compm);
    const newArr = []
    for (let i = 0; i < comp.length; i++) {
      if (comp[i].work_type_id === 10) {
        newArr.push(comp[i])
        console.log('%cnewArr =====>', "color:green", newArr);
      }
      setCompm(newArr)
      console.log('%c вот что в стейте после добавления =====>', "color:red", compm);
    }

    console.log('%c мои компании для отображения ==>', "color:pink", compm);
    // console.log('картинки', compm[0].portfolio);
  }, [comp])

  useEffect(() => {
    const lng = navigator.language;
    function getObjectKeys(obj) {
      return Object.keys(obj);
    }
    const fetchData = async () => {
      const result = await axios.get(`${process.env.REACT_APP_API_URL}/companies/my/`)
      setDone(true)
      setValue(result.data.filter(el => el.work_type_id === 10).slice(-1)[0].cost)
      setPolicy(result.data.filter(el => el.work_type_id === 10).slice(-1)[0].price_policy)
      setTerms(getObjectKeys(result.data.filter(el => el.work_type_id === 10).slice(-1)[0].checkboxes).filter(el => el === '1-3' || el === '3-6' || el === '6-12' || el === 'more')[0])
      setProg(getObjectKeys(result.data.filter(el => el.work_type_id === 10).slice(-1)[0].checkboxes))
      setSkill(getObjectKeys(result.data.filter(el => el.work_type_id === 10).slice(-1)[0].checkboxes))
      setPics(result.data.filter(el => el.work_type_id === 10).slice(-1)[0]?.portfolio)
      setPicload(false)
      setNewimg2([])
      return result
    }
    if (comp?.length === 0) {
      // setDone(true)
    }
    fetchData()
  }, [comp])

  const lng = navigator.language;

  console.log('terms ===>', terms);
  console.log('value ===>', value);
  console.log('policy ===>>', policy);
  console.log('skill ===>>>>>>', skill);
  console.log('imgs ===>>>>>>', img);
  console.log('compm ===>>>>>>', compm);
  console.log('newimg2 ===>>>>>>', newimg2);
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
  return (

    <>

      {done && (
        <>

          <motion.div
            initial='hidden'
            whileInView='visible'
            variants={Page}
            custom={1}
            viewport={{ amout: 0.2, once: true }}
            className={classes.portfolioWrapper}
          >
            <div ref={myRef} className={classes.optHeading}>
              <img className={classes.iconOptHeading} src="/images/icons_svg/portfolio.svg" alt="Portfolio" />
              <h3>Портфолио в веб-дизайне</h3>
            </div>
            {(newimg2.length === 0 && !compm[0]) || (newimg2.length === 0 && pics?.length === 0) ? (
              <label
                className={classes.uploader}
                htmlFor="formFileMultiple"
              >
                <img className={classes.iconUploader} src="/images/icons_svg/uploader.svg" alt="Upload" />
                <p>Загрузить портфолио
                  <br /> в веб-дизайне
                </p>

              </label>
            ) : <></>}

            <input multiple accept="image/*" style={{ display: 'none' }} className='hidden' type="file" id="formFileMultiple" onChange={changeHandler} />
            <input multiple accept="image/*" style={{ display: 'none' }} className='hidden' type="file" id="formFileMultipleNew" onChange={updPic} />
            <input multiple accept="image/*" style={{ display: 'none' }} className='hidden' type="file" id="formFileMultipleMore" onChange={moreUpload} />

            {upload && <h1 style={{ color: 'green' }}>{upload}</h1>}
            {pics?.length > 0 && <SwiperTest id={compm[0].id} imgs={pics} setImgs={setPics} />}
            {newimg2.length > 0 && <SwiperLocal img={newimg2} newimg={newimg2} setNewimg={setNewimg2} />}
            {/* {!picload && (<button onClick={saveComapny} style={{ color: 'blue' }}>Загрузить</button>)} */}
            {picload && (
              <div
                className={classes.loaderWrapper}
              >
                <div className={classes.rockWrapper}>
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
                <div className={classes.loaderText}>
                  <p>Загружаем работы...</p>
                  <p>Оцениваем ИИ...</p>
                </div>
              </div>
            )}
            {newimg2.length > 0 && (
              <div className={classes.btnWrapper}>
                <label className={`${classes.ic_btn} ${classes.ic_btn_grey}`} htmlFor="formFileMultipleMore">Добавить ещё</label>
              </div>
            )}

            {(!newimg2 && pics?.length > 0) || pics?.length > 0 ? (
              <div className={classes.btnWrapper}>
                <label className={`${classes.ic_btn} ${classes.ic_btn_grey}`} htmlFor="formFileMultipleNew">Добавить ещё</label>
              </div>

            ) : <></>}

          </motion.div>

          {err === 'подгрузи' && <Problem text="Upload portfolio before save" hint="please" />}

          <motion.div
            initial='hidden'
            whileInView='visible'
            variants={Page}
            custom={2}
            viewport={{ amout: 0.2, once: true }}
            className={classes.portfolioWrapper}
          >
            <div className={classes.optHeading}>
              <img className={classes.iconOptHeading} src="/images/icons_svg/time.svg" alt="Time" />
              <h3>Сроки выполнения проекта</h3>
            </div>
            <div className={classes.timeWrapper}>
              <div className={classes.timeContent}>
                <h3>Объем работы:</h3>
                <ul>
                  <p>• 3 варианта дизайна</p>
                  <p>• Верстка на no-code</p>
                  <p>• Настройка форма</p>
                  <p>• Запуск сайта</p>
                </ul>
              </div>
              <div className={classes.checkboxWrapper}>
                <button
                  onClick={() => { setTerms("1-3") }}
                  className={`${terms === "1-3" ? classes.checkboxStep : classes.checkboxStepFade}`}
                >{t('formSpec.pg2.terms.day1')}
                </button>
                <button
                  onClick={() => { setTerms("3-6") }}
                  className={`${terms === "3-6" ? classes.checkboxStep : classes.checkboxStepFade}`}
                >{t('formSpec.pg2.terms.day3')}
                </button>
                <button
                  onClick={() => { setTerms("6-12") }}
                  className={`${terms === "6-12" ? classes.checkboxStep : classes.checkboxStepFade}`}
                >{t('formSpec.pg2.terms.day6')}
                </button>
                <button
                  onClick={() => { setTerms("more") }}
                  className={`${terms === "more" ? classes.checkboxStep : classes.checkboxStepFade}`}
                >{t('formSpec.pg2.terms.more')}
                </button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            variants={Page}
            viewport={{ amout: 0.2, once: true }}
            className={classes.portfolioWrapper}
          >
            <div className={classes.optHeading}>
              <img className={classes.iconOptHeading} src="/images/icons_svg/price.svg" alt="Money" />
              <h3>Цена выполнения проекта</h3>
            </div>

            <div className={classes.sliderDiv}>
              <div className={classes.checkboxStep}>{value}$</div>
              <input className={`${classes.inputSlider} ${classes.slider_progress}`} onChange={(e) => setValue(e.target.valueAsNumber)} value={value} type="range" max='5000' min='100' step='100' />
            </div>

          </motion.div>

          <motion.div
            initial='hidden'
            whileInView='visible'
            variants={Page}
            viewport={{ amout: 0.2, once: true }}
            className={classes.portfolioWrapper}
          >
            <div className={classes.optHeading}>
              <img className={classes.iconOptHeading} src="/images/icons_svg/soft.svg" alt="Time" />
              <h3>Какие программы вы используете?</h3>
            </div>
            <div className={classes.portfolioWrapper}>
              <div className={classes.checkboxWrapper}>
                <button
                  name="webflow"
                  onClick={skillHandler}
                  className={`${skill.includes('webflow') ? classes.checkboxStep : classes.checkboxStepFade}`}
                >{t('formSpec.pg2.progs.webflow')}
                </button>
                <button
                  name="wix"
                  onClick={skillHandler}
                  className={`${skill.includes('wix') ? classes.checkboxStep : classes.checkboxStepFade}`}
                >{t('formSpec.pg2.progs.wix')}
                </button>
                <button
                  name="readymag"
                  onClick={skillHandler}
                  className={`${skill.includes('readymag') ? classes.checkboxStep : classes.checkboxStepFade}`}
                >{t('formSpec.pg2.progs.readymag')}
                </button>
                <button
                  name="tilda"
                  onClick={skillHandler}
                  className={`${skill.includes('tilda') ? classes.checkboxStep : classes.checkboxStepFade}`}
                >{t('formSpec.pg2.progs.tilda')}
                </button>
                <button
                  name="usmo"
                  onClick={skillHandler}
                  className={`${skill.includes('usmo') ? classes.checkboxStep : classes.checkboxStepFade}`}
                >{t('formSpec.pg2.progs.usmo')}
                </button>
                <button
                  name="carrd"
                  onClick={skillHandler}
                  className={`${skill.includes('carrd') ? classes.checkboxStep : classes.checkboxStepFade}`}
                >{t('formSpec.pg2.progs.carrd')}
                </button>
                <button
                  name="softr"
                  onClick={skillHandler}
                  className={`${skill.includes('softr') ? classes.checkboxStep : classes.checkboxStepFade}`}
                >{t('formSpec.pg2.progs.softr')}
                </button>
                <button
                  name="other"
                  onClick={skillHandler}
                  className={`${skill.includes('other') ? classes.checkboxStep : classes.checkboxStepFade}`}
                >{t('formSpec.pg2.progs.other')}
                </button>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial='hidden'
            whileInView='visible'
            variants={Page}
            viewport={{ amout: 0.2, once: true }}
            className={classes.portfolioWrapper}
          >
            <div className={classes.optHeading}>
              <img className={classes.iconOptHeading} src="/images/icons_svg/skills.svg" alt="Time" />
              <h3>Дополнительные скиллы</h3>
            </div>
            <div className={classes.checkboxWrapper}>
              <button
                name="animation"
                onClick={skillHandler}
                className={`${skill.includes('animation') ? classes.checkboxStep : classes.checkboxStepFade}`}
              >{t('formSpec.pg2.skills.animation')}
              </button>
              <button
                name="seo"
                onClick={skillHandler}
                className={`${skill.includes('seo') ? classes.checkboxStep : classes.checkboxStepFade}`}
              >{t('formSpec.pg2.skills.seo')}
              </button>
              <button
                name="crm"
                onClick={skillHandler}
                className={`${skill.includes('crm') ? classes.checkboxStep : classes.checkboxStepFade}`}
              >{t('formSpec.pg2.skills.crm')}
              </button>
              <button
                name="code"
                onClick={skillHandler}
                className={`${skill.includes('code') ? classes.checkboxStep : classes.checkboxStepFade}`}
              >{t('formSpec.pg2.skills.code')}
              </button>
              <button
                name="market"
                onClick={skillHandler}
                className={`${skill.includes('market') ? classes.checkboxStep : classes.checkboxStepFade}`}
              >{t('formSpec.pg2.skills.market')}
              </button>
              <button
                name="metrics"
                onClick={skillHandler}
                className={`${skill.includes('metrics') ? classes.checkboxStep : classes.checkboxStepFade}`}
              >{t('formSpec.pg2.skills.metrics')}
              </button>
              <button
                name="othe"
                onClick={skillHandler}
                className={`${skill.includes('othe') ? classes.checkboxStep : classes.checkboxStepFade}`}
              >{t('formSpec.pg2.skills.other')}
              </button>
            </div>
          </motion.div>

          <button className={classes.saveButton} onClick={() => { saveComapny(); scrollTo(); }}>
            <img className={classes.iconOptHeading} src="/images/icons_svg/save.svg" alt="Save" />
            <p>Cохранить специализацию</p>
          </button>
        </>
      )}
    </>

  )
}
