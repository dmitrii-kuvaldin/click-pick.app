import React, { useEffect, useRef, useState } from 'react'
import classes from './MainDesign.module.css';
import RegistrationQuickMain from '../RegistrationQuickMain/RegistrationQuickMain';
import ProblemMain from '../ProblemMain/ProblemMain';
import { motion } from 'framer-motion'
import Loader from '../Loader/Loader';
import { Link } from 'react-router-dom';
export default function MainDesign() {
  const [system, setSystem] = useState(false);
  const [ai, setAi] = useState(false);

  const myRef = useRef(null)
  const scrollTo = () => {
    myRef.current.scrollIntoView({
      // behavior: 'smooth',
      block: 'start',
    });
    console.log('what?');
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 1,
      behavior: 'smooth',
    });
    console.log('what?');
  }

  const secondRef = useRef(null)

  const scrollToSecond = () => {
    secondRef.current.scrollIntoView({
      // behavior: 'smooth',
      block: 'start',
    });
    console.log('what?');
  }

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

  const HiddenBlockAnimation = {
    hidden: {
      y: 100,
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
  const aiAnimation = {
    hidden: {
      y: 50,
      opacity: 0,

    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      viewport: { amout: 0.2 },
      transition: {
        delay: custom * 0.3,
        duration: 1.2,
        ease: "easeInOut",
      },
    }),
  }
  const iphoneAnimation = {
    hidden: {
      opacity: 0,

    },
    visible: {
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
  const pointer1 = {
    hidden: {
      y: 30,
      opacity: 0,
      rotate: -40,
      scale: 0.9,

    },
    visible: {
      y: 0,
      opacity: 1,
      rotate: -45,
      scale: 1,
      viewport: { amout: 0.2 },
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: "easeInOut",
        type: "spring",
      },
    },
  }
  const pointer2 = {
    hidden: {
      y: 30,
      opacity: 0,
      rotate: 30,
      scale: 0.9,

    },
    visible: {
      y: 0,
      opacity: 1,
      rotate: 35,
      scale: 1,
      viewport: { amout: 0.2 },
      transition: {
        delay: 1,
        duration: 0.5,
        ease: "easeInOut",
        type: "spring",
      },
    },
  }
  const pointer3 = {
    hidden: {
      y: 30,
      opacity: 0,
      rotate: 21,
      scale: 0.9,

    },
    visible: {
      y: 0,
      opacity: 1,
      rotate: 26,
      scale: 1,
      viewport: { amout: 0.2 },
      transition: {
        delay: 1,
        duration: 0.5,
        ease: "easeInOut",
        type: "spring",
      },
    },
  }
  const pointer4 = {
    hidden: {
      y: 30,
      opacity: 0,
      rotate: -30,
      scale: 0.9,

    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      rotate: -35,
      viewport: { amout: 0.2 },
      transition: {
        delay: 1,
        duration: 0.5,
        ease: "easeInOut",
        type: "spring",
      },
    },
  }
  const pointer5 = {
    hidden: {
      y: 30,
      opacity: 0,
      rotate: 30,
      scale: 0.9,

    },
    visible: {
      y: 0,
      scale: 1,
      opacity: 1,
      rotate: 35,
      viewport: { amout: 0.2 },
      transition: {
        delay: 2,
        duration: 0.5,
        ease: "easeInOut",
        type: "spring",
      },
    },
  }
  const pointer6 = {
    hidden: {
      opacity: 0,
      rotate: -15,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      rotate: 30,
      scale: 1,
      transition: {
        delay: 2.5,
        duration: 1.1,
        ease: "easeInOut",
        type: "spring",
      },
      viewport: { amout: 0.4 },
    },
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
  const rock1 = {
    hidden: {
      y: 30,
      opacity: 0,
      rotate: 25,
      scale: 0.9,

    },
    visible: {
      y: 0,
      opacity: 1,
      rotate: 30,
      viewport: { amout: 0.2 },
      transition: {
        delay: 1.5,
        duration: 1.2,
        ease: "easeInOut",
        type: "spring",
      },
    },
  }
  const rock3 = {
    hidden: {
      opacity: 0,
      rotate: 15,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      rotate: -30,
      scale: 1,
      transition: {
        delay: 3,
        duration: 1.1,
        ease: "easeInOut",
        type: "spring",
      },
      viewport: { amout: 0.4 },
    },
  }
  const victory1 = {
    hidden: {
      y: 20,
      opacity: 0,
      rotate: -5,
      scale: 0.5,
    },
    visible: {
      y: 0,
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: {
        delay: 1,
        duration: 1.1,
        ease: "easeInOut",
        type: "spring",
      },
      viewport: { amout: 0.4 },
    },
  }
  const ok1 = {
    hidden: {
      y: 30,
      opacity: 0,
      rotate: -30,
      scale: 0.9,

    },
    visible: {
      y: 0,
      opacity: 1,
      rotate: -35,
      viewport: { amout: 0.2 },
      transition: {
        delay: 1.5,
        duration: 1.2,
        ease: "easeInOut",
        type: "spring",
      },
    },
  }

  useEffect(() => {
    scrollToTop()
  }, []);

  return (
    <>
      {/* <Loader /> */}
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
            <h1>ИИ создает <br />
              фриланс будущего
            </h1>
            <div className={`${classes.mc_p_block} ${classes.mc_p_block_short}`}>
              <p>Забудьте про отзывы и&nbsp;рейтинги!
                Наш ИИ&nbsp;оценивает ваше портфолио
                и&nbsp;находит заказы.
              </p>
              <p>Измените подход к&nbsp;работе!
                Ищите референсы, генерируйте идеи, ускоряйте согласование с&nbsp;помощью нейросетей.
              </p>
              <p>Создаем дизайн-фриланс
                будущего вместе с&nbsp;вами!
              </p>
            </div>
          </motion.div>
          <Link to="/registration">
            <motion.button
              variants={btnAnimation}
              ref={myRef}
              href="#2"
              className={`${classes.ic_btn} ${classes.ic_btn_black}`}
            >
              Зарегистрироваться
            </motion.button>
          </Link>
        </div>

        <div className={classes.mc_image}>
          <motion.img
            variants={aiAnimation}
            className={classes.img_ai}
            onLoad={() => setIsLoading(false)}
            // loading="eager"
            src="/images/ru/main_page/ai.webp"
            alt="AI"
          />
          <motion.img
            variants={aiAnimation}
            className={`${classes.img_ai_txt} ${classes.img_ai_1}`}
            custom={2}
            // loading="eager"
            src="/images/ru/main_page/ai_1.webp"
            alt="AI_1"
          />
          <motion.img
            variants={aiAnimation}
            className={`${classes.img_ai_txt} ${classes.img_ai_2}`}
            custom={3}
            // loading="eager"
            src="/images/ru/main_page/ai_2.webp"
            alt="AI_2"
          />
          <motion.img
            variants={aiAnimation}
            className={`${classes.img_ai_txt} ${classes.img_ai_3}`}
            custom={4}
            // loading="eager"
            src="/images/ru/main_page/ai_3.webp"
            alt="AI_3"
          />
          <motion.img
            variants={aiAnimation}
            custom={5}
            className={`${classes.img_ai_txt} ${classes.img_ai_4}`}
            // loading="eager"
            src="/images/ru/main_page/ai_4.webp"
            alt="AI_4"
          />
          <motion.img
            variants={pointer6}
            className={`${classes.hand} ${classes.pointer6}`}
            src="/images/hands_icon/Pointer.webp"
            alt="Pointer"
          />
          <motion.img
            variants={rock3}
            className={`${classes.hand} ${classes.rock3}`}
            src="/images/hands_icon/Rock.webp"
            alt="rock"
          />
        </div>
      </motion.section>

      {!system && (
        <>
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
                <h2>Звёзды&nbsp;и&nbsp;отзывы&nbsp;— <br /> это прошлое</h2>
                <div className={classes.mc_p_block}>
                  <p>Сейчас количество отзывов важнее качества работ в&nbsp;портфолио.</p><p>Это несправедливо, но&nbsp;вместе мы&nbsp;можем это изменить</p>
                </div>
              </motion.div>
              <button onClick={() => { setSystem(!system); scrollTo() }} href="#2" className={`${classes.ic_btn} ${classes.ic_btn_green}`}>
                Изменить систему
              </button>
            </div>
            <div className={classes.mc_image}>
              <motion.img
                variants={fuck}
                className={`${classes.hand} ${classes.fuck1}`}
                src="/images/hands_icon/Fuck.webp"
                alt="fuck"
              />
              <motion.img
                variants={pointer5}
                className={`${classes.hand} ${classes.pointer5}`}
                src="/images/hands_icon/Pointer.webp"
                alt="Pointer"
              />
              <motion.img
                variants={imgAnimation}
                className={classes.img_review}
                src="/images/ru/main_page/Review_ru.webp"
                alt="Reviews"
              />

            </div>
          </motion.section>
          <ProblemMain
            style={{ margin: '256px' }}
            text="Измените систему, чтобы идти дальше."
            hint="Подсказка: нажмите
            на кнопку выше"
          >
          </ProblemMain>
        </>
      )}

      {
        system && (
          <>
            <motion.section
              initial='hidden'
              whileInView='visible'
              viewport={{ amout: 0.2, once: true }}
              variants={HiddenBlockAnimation}
              className={`${classes.mc_content_block} ${classes.mc_content_black} ${classes.mc_content_iphone}`}
            >
              <div ref={myRef} className={classes.mc_wrapper}>
                <motion.div
                  variants={textAnimation}
                  className={classes.mc_text_block}
                >
                  <h2>Лучше&nbsp;портфолио&nbsp;—
                    больше&nbsp;заказов
                  </h2>
                  <div className={classes.mc_p_block}>
                    <p>Наш алгоритм подбирает
                      дизайнеров для заказчика
                      на&nbsp;основе предпочтений,
                      вкуса и&nbsp;задачи.
                    </p>
                    <p>Заказчик лайкает работы дизайнеров. Алгоритм
                      выдает исполнителей.
                    </p>
                    <p>Не&nbsp;выпрашивайте отзывы,
                      не&nbsp;демпингуйте цены,
                      не&nbsp;мониторьте биржу 24/7.
                    </p>
                    <p>Потратьте это время на&nbsp;работу!</p>
                  </div>
                </motion.div>
                <Link to="/registration">
                  <motion.button
                    variants={btnAnimation}
                    href="#2"
                    className={`${classes.ic_btn} ${classes.ic_btn_green}`}
                  >
                    Загрузить портфолио
                  </motion.button>
                </Link>
              </div>
              <div className={classes.mc_image}>
                <motion.img
                  variants={like1}
                  className={`${classes.hand} ${classes.like1}`}
                  src="/images/hands_icon/Like.webp"
                  alt="like"
                />
                <motion.img
                  variants={rock1}
                  className={`${classes.hand} ${classes.rock1}`}
                  src="/images/hands_icon/Rock.webp"
                  alt="rock"
                />
                <motion.img
                  variants={pointer1}
                  className={`${classes.hand} ${classes.pointer1}`}
                  src="/images/hands_icon/Pointer.webp"
                  alt="pointer"
                />
                <motion.img
                  variants={iphoneAnimation}
                  className={classes.img_iphone}
                  // loading="eager"
                  src="/images/ru/main_page/Iphone_ru.webp"
                  alt="Interface"
                />
                <motion.img
                  variants={iphoneAnimation}
                  className={classes.img_iphone_m}
                  // loading="eager"
                  src="/images/ru/main_page/Iphone_ru_m.webp"
                  alt="Interface"
                />
              </div>
              <div
                className={classes.ghostDiv}
                ref={secondRef}
                style={{

                  // backgroundColor: 'red',
                }}
              >
              </div>
            </motion.section>
          </>
        )
      }

      {
        (system && !ai) && (
          <>
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
                  <h2>10%&nbsp;работы <br />
                    90%&nbsp;ссоры
                  </h2>
                  <div className={classes.mc_p_block}>
                    <p>Мы&nbsp;устали от&nbsp;бесконечных правок&nbsp;и&nbsp;споров с&nbsp;заказчиком.</p>
                    <p>Это занимает больше времени, чем&nbsp;креативная работа и&nbsp;творчество.</p>
                    <p>Это можно изменить с&nbsp;помощью новых технологий.</p>
                  </div>
                </motion.div>
                <motion.button
                  variants={btnAnimation}
                  onClick={() => { setAi(!ai); scrollToSecond() }}
                  href="#2"
                  className={`${classes.ic_btn} ${classes.ic_btn_green}`}
                >
                  Применить ИИ
                </motion.button>
              </div>
              <div className={classes.mc_image}>
                <motion.img
                  variants={pointer2}
                  className={`${classes.hand} ${classes.pointer2}`}
                  src="/images/hands_icon/Pointer.webp"
                  alt="pointer"
                />
                <motion.img
                  variants={imgAnimation}
                  className={classes.img_chat}
                  src="/images/ru/main_page/Chat_ru.webp"
                  alt="Chat"
                />
                <motion.img
                  variants={imgAnimation}
                  className={classes.img_chat_m}
                  src="/images/ru/main_page/Chat_ru_m.webp"
                  alt="Chat"
                />
              </div>
            </motion.section>
            <ProblemMain
              text="Примените ИИ, чтобы идти дальше"
              hint="Вы уже знаете,
              что нужно сделать"
            >
            </ProblemMain>
          </>
        )
      }

      {
        ai && (
          <>
            <motion.section
              initial='hidden'
              whileInView='visible'
              viewport={{ amout: 0.2, once: true }}
              variants={HiddenBlockAnimation}
              className={`${classes.mc_content_block} ${classes.mc_content_black} ${classes.mc_content_mac}`}
            >
              <div className={classes.mc_wrapper}>
                <motion.div
                  varinats={textAnimation}
                  className={classes.mc_text_block}
                >
                  <h2>Нейросети <br /> в помощь
                  </h2>
                  <div className={classes.mc_p_block}>
                    <p>Интергировали различные технологии на&nbsp;платформу, чтобы упростить вашу работу.</p>
                    <p>Генерируйте идеи, ищите референсы, создавайте концепции на&nbsp;основе брифа заказчика.</p>
                    <p>Присылайте десяток вариантов правок за&nbsp;2&nbsp;минуты.</p>
                    <p>Нейросеть&nbsp;&mdash; инструмент,
                      а&nbsp;не&nbsp;замена дизайнера.
                    </p>
                  </div>
                </motion.div>
              </div>
              <div className={classes.mc_image}>
                <motion.img
                  variants={pointer3}
                  className={`${classes.hand} ${classes.pointer3}`}
                  src="/images/hands_icon/Pointer.webp"
                  alt="pointer"
                />
                <motion.img
                  variants={ok1}
                  className={`${classes.hand} ${classes.ok1}`}
                  src="/images/hands_icon/Ok.webp"
                  alt="Ok"
                />
                <motion.img
                  variants={imgAnimation}
                  className={classes.img_mac}
                  src="/images/ru/main_page/mac_ru.webp"
                  // loading="eager"
                  alt="Interface"
                />
                <div className={classes.divMac}>
                  <motion.img
                    variants={imgAnimation}
                    className={classes.img_mac_m}
                    src="/images/ru/main_page/mac_ru_m.webp"
                    // loading="eager"
                    alt="Interface"
                  />
                </div>
              </div>
            </motion.section>
            <motion.section
              initial='hidden'
              whileInView='visible'
              viewport={{ amout: 0.1, once: true }}
              variants={BlockAnimation}
              className={`${classes.mc_content_block} ${classes.mc_content_green_l}`}
            >
              <div className={classes.mc_text_block}>
                <h2>Дизайн-фриланс <br />
                  по&nbsp;другим&nbsp;правилам
                </h2>
              </div>
            </motion.section>

            <motion.section
              initial='hidden'
              whileInView='visible'
              viewport={{ amout: 0.1, once: true }}
              variants={BlockAnimation}
              className={`${classes.mc_content_block} ${classes.mc_content_white}`}
            >
              <div className={classes.mc_wrapper}>
                <motion.div
                  variants={textAnimation}
                  className={classes.mc_text_block}
                >
                  <h2>2000&nbsp;портфолио
                    для&nbsp;запуска
                  </h2>
                  <div className={classes.mc_p_block}>
                    <p>Получайте больше заказов, благодаря&nbsp;своим навыкам. Используйте&nbsp;нейросети, чтобы упростить работу над проектом.
                    </p>
                    <p>Загрузите свое портфолио
                      и&nbsp;поделитесь ссылкой с&nbsp;коллегами.
                    </p>
                    <p>Станьте частью дизайн-фриланса будущего сегодня!</p>
                  </div>
                </motion.div>
                <Link to="/registration">
                  <motion.button
                    variants={btnAnimation}
                    href="#2"
                    className={`${classes.ic_btn} ${classes.ic_btn_black}`}
                  >
                    Зарегистрироваться
                  </motion.button>
                </Link>
              </div>
              <div className={classes.mc_image}>
                <motion.img
                  variants={victory1}
                  className={`${classes.hand} ${classes.victory1}`}
                  src="/images/hands_icon/Victory.webp"
                  alt="victory"
                />
                <motion.img
                  variants={imgAnimation}
                  className={classes.img_number}
                  src="/images/ru/main_page/number.webp"
                  alt="2000"
                />
                <motion.img
                  variants={imgAnimation}
                  className={classes.img_number_m}
                  src="/images/ru/main_page/number_m.webp"
                  alt="2000"
                />
              </div>
            </motion.section>
            <motion.section
              initial='hidden'
              whileInView='visible'
              viewport={{ amout: 0.1, once: true }}
              variants={BlockAnimation}
              className={`${classes.mc_content_block} ${classes.mc_content_white_l}`}
            >
              <div className={classes.mc_text_block}>
                <RegistrationQuickMain />
                <motion.img
                  variants={pointer4}
                  className={`${classes.hand} ${classes.pointer4}`}
                  src="/images/hands_icon/Pointer.webp"
                  alt="pointer"
                />
              </div>
            </motion.section>
            <motion.section
              initial='hidden'
              whileInView='visible'
              variants={BlockAnimation}
              viewport={{ amout: 0.1, once: true }}
              className={`${classes.mc_content_block} ${classes.mc_content_white_l}`}
            >
              <h2>Присоединяйтесь <br />
                к нашему сообществу
              </h2>
              <img className={`${classes.hand} ${classes.rock2}`} src="/images/hands_icon/Rock.webp" alt="rock" />
            </motion.section>
          </>
        )
      }

    </>
  )
}
