// import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './FormClient.module.css';
import { setRegistr } from '../../store/actions/auth.action';
// import { useHref } from 'react-router-dom';
// const stages = { one: 'block', two: 'none', three: 'none' }
const blocks = {
  one: classes.navStep, two: classes.navStepFade, three: classes.navStepFade, four: classes.navStepFade, five: classes.navStepFade, six: classes.navStepFade, seven: classes.navStepFade, eight: classes.navStepFade, nine: classes.navStepFade, ten: classes.navStepFade,
};

export default function FormClient() {
  // const [result, setResult] = useState(null)

  // const [styleButtonFirst, setStyleButtonFirst] = useState(`${classes.firstSection}`);
  // const [styleButtonSecond, setStyleButtonSecond] = useState(`${classes.secondSection}`);

  const { auth } = useSelector((state) => state);

  const [styleButtonLast, setStyleButtonLast] = useState('0');
  const [submitButtonLast, setSubmitButtonLast] = useState(`${classes.buttonHide}`);

  // const [firstStage, setfirstStage] = useState(stages)
  // const [secondIsActive, setSecondIsActive] = useState(false);
  const [blockState, setBlockState] = useState(blocks);
  const [sectionState, setSectionState] = useState({
    one: classes.firstSection, two: classes.secondSection, three: classes.secondSection, four: classes.secondSection, five: classes.secondSection, six: classes.secondSection, seven: classes.secondSection, eight: classes.secondSection, nine: classes.secondSection, ten: classes.secondSection,
  });

  // ! хендлеры для кнопок

  const changeStyle = () => {
    console.log('you just clicked');
    // setStyleButtonFirst(`${classes.secondSection}`);
    // setStyleButtonSecond(`${classes.firstSection}`);
    setBlockState({
      one: classes.navStepFade, two: classes.navStep, three: classes.navStepFade, four: classes.navStepFade, five: classes.navStepFade, six: classes.navStepFade, seven: classes.navStepFade, eight: classes.navStepFade, nine: classes.navStepFade, ten: classes.navStepFade,
    });
    setSectionState({
      one: classes.secondSection, two: classes.firstSection, three: classes.secondSection, four: classes.secondSection, five: classes.secondSection, six: classes.secondSection, seven: classes.secondSection, eight: classes.secondSection, nine: classes.secondSection, ten: classes.secondSection,
    });
  };

  const secondButton = () => {
    console.log('you just clicked 2 button');
    setBlockState({
      one: classes.navStepFade, two: classes.navStepFade, three: classes.navStep, four: classes.navStepFade, five: classes.navStepFade, six: classes.navStepFade, seven: classes.navStepFade, eight: classes.navStepFade, nine: classes.navStepFade, ten: classes.navStepFade,
    });
    setSectionState({
      one: classes.secondSection, two: classes.secondSection, three: classes.firstSection, four: classes.secondSection, five: classes.secondSection, six: classes.secondSection, seven: classes.secondSection, eight: classes.secondSection, nine: classes.secondSection, ten: classes.secondSection,
    });
  };

  const thirdButton = () => {
    console.log('you just clicked 3 button');
    setBlockState({
      one: classes.navStepFade, two: classes.navStepFade, three: classes.navStepFade, four: classes.navStep, five: classes.navStepFade, six: classes.navStepFade, seven: classes.navStepFade, eight: classes.navStepFade, nine: classes.navStepFade, ten: classes.navStepFade,
    });
    setSectionState({
      one: classes.secondSection, two: classes.secondSection, three: classes.secondSection, four: classes.firstSection, five: classes.secondSection, six: classes.secondSection, seven: classes.secondSection, eight: classes.secondSection, nine: classes.secondSection, ten: classes.secondSection,
    });
  };

  const fourthButton = () => {
    console.log('you just clicked 4 button');
    setBlockState({
      one: classes.navStepFade, two: classes.navStepFade, three: classes.navStepFade, four: classes.navStepFade, five: classes.navStep, six: classes.navStepFade, seven: classes.navStepFade, eight: classes.navStepFade, nine: classes.navStepFade, ten: classes.navStepFade,
    });
    setSectionState({
      one: classes.secondSection, two: classes.secondSection, three: classes.secondSection, four: classes.secondSection, five: classes.firstSection, six: classes.secondSection, seven: classes.secondSection, eight: classes.secondSection, nine: classes.firstSection, ten: classes.secondSection,
    });
  };

  const fivethButton = () => {
    console.log('you just clicked 5 button');
    setBlockState({
      one: classes.navStepFade, two: classes.navStepFade, three: classes.navStepFade, four: classes.navStepFade, five: classes.navStepFade, six: classes.navStep, seven: classes.navStepFade, eight: classes.navStepFade, nine: classes.navStepFade, ten: classes.navStepFade,
    });
    setSectionState({
      one: classes.secondSection, two: classes.secondSection, three: classes.secondSection, four: classes.secondSection, five: classes.secondSection, six: classes.firstSection, seven: classes.secondSection, eight: classes.secondSection, nine: classes.secondSection, ten: classes.firstSection,
    });
  };

  const sixthButton = () => {
    console.log('you just clicked 6 button');
    setBlockState({
      one: classes.navStepFade, two: classes.navStepFade, three: classes.navStepFade, four: classes.navStepFade, five: classes.navStepFade, six: classes.navStepFade, seven: classes.navStep, eight: classes.navStepFade, nine: classes.navStepFade, ten: classes.navStepFade,
    });
    setSectionState({
      one: classes.secondSection, two: classes.secondSection, three: classes.secondSection, four: classes.secondSection, five: classes.secondSection, six: classes.secondSection, seven: classes.firstSection, eight: classes.secondSection, nine: classes.secondSection, ten: classes.firstSection,
    });
  };

  const seventhButton = () => {
    console.log('you just clicked 7 button');
    setBlockState({
      one: classes.navStepFade, two: classes.navStepFade, three: classes.navStepFade, four: classes.navStepFade, five: classes.navStepFade, six: classes.navStepFade, seven: classes.navStepFade, eight: classes.navStep, nine: classes.navStepFade, ten: classes.navStepFade,
    });
    setSectionState({
      one: classes.secondSection, two: classes.secondSection, three: classes.secondSection, four: classes.secondSection, five: classes.secondSection, six: classes.secondSection, seven: classes.secondSection, eight: classes.firstSection, nine: classes.secondSection, ten: classes.firstSection,
    });
  };

  const beforeSubmit = () => {
    console.log('you just clicked 3 button');
    setStyleButtonLast(`${classes.buttonHide}`);
    setSubmitButtonLast(`${classes.buttonShow}`);
    // setfirstStage({ one: 'block', two: 'block', three: 'block', four: 'block' })
    setBlockState({
      one: classes.navStepFade, two: classes.navStepFade, three: classes.navStepFade, four: classes.navStepFade, five: classes.navStepFade, six: classes.navStepFade, seven: classes.navStepFade, eight: classes.navStep, nine: classes.navStepFade, ten: classes.navStepFade,
    });
    setSectionState({
      one: classes.firstSection, two: classes.firstSection, three: classes.firstSection, four: classes.firstSection, five: classes.firstSection, six: classes.firstSection, seven: classes.firstSection, eight: classes.firstSection, nine: classes.secondSection, ten: classes.firstSection,
    });
    // setSecondIsActive(current => !current)
  };

  // ! хендлеры для быстрой навигации

  const firstHandler = () => {
    // setfirstStage({ one: 'block', two: 'none', three: 'none' })
    setBlockState({
      one: classes.navStep, two: classes.navStepFade, three: classes.navStepFade, four: classes.navStepFade, five: classes.navStepFade, six: classes.navStepFade, seven: classes.navStepFade, eight: classes.navStepFade, nine: classes.navStepFade, ten: classes.navStepFade,
    });
    setSectionState({
      one: classes.firstSection, two: classes.secondSection, three: classes.secondSection, four: classes.secondSection, five: classes.secondSection, six: classes.secondSection, seven: classes.secondSection, eight: classes.secondSection, nine: classes.secondSection, ten: classes.secondSection,
    });
  };

  const secondHandler = () => {
    console.log('you just clicked');
    // setStyleButtonFirst(`${classes.secondSection}`);
    // setStyleButtonSecond(`${classes.firstSection}`);
    // setBlockState({ one: classes.navStepFade, two: classes.navStep, three: classes.navStepFade, four: classes.navStepFade, five: classes.navStepFade, six: classes.navStepFade, seven: classes.navStepFade, eight: classes.navStepFade, nine: classes.navStepFade, ten: classes.navStepFade, })
    // setStyleButtonLast(`${classes.buttonShow}`)
    // setSubmitButtonLast(`${classes.buttonHide}`)
    setBlockState({
      one: classes.navStepFade, two: classes.navStep, three: classes.navStepFade, four: classes.navStepFade, five: classes.navStepFade, six: classes.navStepFade, seven: classes.navStepFade, eight: classes.navStepFade, nine: classes.navStepFade, ten: classes.navStepFade,
    });
    setSectionState({
      one: classes.secondSection, two: classes.firstSection, three: classes.secondSection, four: classes.secondSection, five: classes.secondSection, six: classes.secondSection, seven: classes.secondSection, eight: classes.secondSection, nine: classes.secondSection, ten: classes.secondSection,
    });
  };

  const thirdHandler = () => {
    console.log('you just clicked 3');
    setBlockState({
      one: classes.navStepFade, two: classes.navStepFade, three: classes.navStep, four: classes.navStepFade, five: classes.navStepFade, six: classes.navStepFade, seven: classes.navStepFade, eight: classes.navStepFade, nine: classes.navStepFade, ten: classes.navStepFade,
    });
    setSectionState({
      one: classes.secondSection, two: classes.secondSection, three: classes.firstSection, four: classes.secondSection, five: classes.secondSection, six: classes.secondSection, seven: classes.secondSection, eight: classes.secondSection, nine: classes.secondSection, ten: classes.secondSection,
    });

    // setSecondIsActive(current => !current)
  };
  const fourthHandler = () => {
    console.log('you just clicked 4');
    setBlockState({
      one: classes.navStepFade, two: classes.navStepFade, three: classes.navStepFade, four: classes.navStep, five: classes.navStepFade, six: classes.navStepFade, seven: classes.navStepFade, eight: classes.navStepFade, nine: classes.navStepFade, ten: classes.navStepFade,
    });
    setSectionState({
      one: classes.secondSection, two: classes.secondSection, three: classes.secondSection, four: classes.firstSection, five: classes.secondSection, six: classes.secondSection, seven: classes.secondSection, eight: classes.secondSection, nine: classes.secondSection, ten: classes.secondSection,
    });
  };
  const fivthHandler = () => {
    console.log('you just clicked 5');
    setBlockState({
      one: classes.navStepFade, two: classes.navStepFade, three: classes.navStepFade, four: classes.navStepFade, five: classes.navStep, six: classes.navStepFade, seven: classes.navStepFade, eight: classes.navStepFade, nine: classes.navStepFade, ten: classes.navStepFade,
    });
    setSectionState({
      one: classes.secondSection, two: classes.secondSection, three: classes.secondSection, four: classes.secondSection, five: classes.firstSection, six: classes.secondSection, seven: classes.secondSection, eight: classes.secondSection, nine: classes.secondSection, ten: classes.secondSection,
    });
  };
  const sixthHandler = () => {
    console.log('you just clicked 6');
    setBlockState({
      one: classes.navStepFade, two: classes.navStepFade, three: classes.navStepFade, four: classes.navStepFade, five: classes.navStepFade, six: classes.navStep, seven: classes.navStepFade, eight: classes.navStepFade, nine: classes.navStepFade, ten: classes.navStepFade,
    });
    setSectionState({
      one: classes.secondSection, two: classes.secondSection, three: classes.secondSection, four: classes.secondSection, five: classes.secondSection, six: classes.firstSection, seven: classes.secondSection, eight: classes.secondSection, nine: classes.secondSection, ten: classes.secondSection,
    });
  };
  const seventhHandler = () => {
    console.log('you just clicked 7');
    setBlockState({
      one: classes.navStepFade, two: classes.navStepFade, three: classes.navStepFade, four: classes.navStepFade, five: classes.navStepFade, six: classes.navStepFade, seven: classes.navStep, eight: classes.navStepFade, nine: classes.navStepFade, ten: classes.navStepFade,
    });
    setSectionState({
      one: classes.secondSection, two: classes.secondSection, three: classes.secondSection, four: classes.secondSection, five: classes.secondSection, six: classes.secondSection, seven: classes.firstSection, eight: classes.secondSection, nine: classes.secondSection, ten: classes.secondSection,
    });
  };
  const eighthHandler = () => {
    console.log('you just clicked 3 button');
    setStyleButtonLast(`${classes.buttonHide}`);
    setSubmitButtonLast(`${classes.buttonShow}`);
    // setfirstStage({ one: 'block', two: 'block', three: 'block', four: 'block' })
    setBlockState({
      one: classes.navStepFade, two: classes.navStepFade, three: classes.navStepFade, four: classes.navStepFade, five: classes.navStepFade, six: classes.navStepFade, seven: classes.navStepFade, eight: classes.navStep, nine: classes.navStepFade, ten: classes.navStepFade,
    });
    setSectionState({
      one: classes.firstSection, two: classes.firstSection, three: classes.firstSection, four: classes.firstSection, five: classes.firstSection, six: classes.firstSection, seven: classes.firstSection, eight: classes.firstSection, nine: classes.secondSection, ten: classes.firstSection,
    });
  };

  // * стейты формы:
  // контактная информация
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [telegram, setTelegram] = useState('');
  const [company, setCompany] = useState('');
  // о компании
  const [companyProfile, setCompanyProfile] = useState('');
  const [audiNow, setAudiNow] = useState('');
  const [audiFuture, setAudiFuture] = useState('');
  const [compLink1, setCompLink1] = useState('');
  const [compLinkDesc1, setCompLinkDesc1] = useState('');
  const [compLink2, setCompLink2] = useState('');
  const [compLinkDesc2, setCompLinkDesc2] = useState('');
  const [compLink3, setCompLink3] = useState('');
  const [compLinkDesc3, setCompLinkDesc3] = useState('');
  // о конкурентах
  const [rivalDesc, setRivalDesc] = useState('');
  const [rivalLink1, setRivalLink1] = useState('');
  const [rivalLinkDesc1, setRivalLinkDesc1] = useState('');
  const [rivalLink2, setRivalLink2] = useState('');
  const [rivalLinkDesc2, setRivalLinkDesc2] = useState('');
  const [rivalLink3, setRivalLink3] = useState('');
  const [rivalLinkDesc3, setRivalLinkDesc3] = useState('');
  /// референсы
  const [refLink1, setRefLink1] = useState('');
  const [refLinkDesc1, setRefLinkDesc1] = useState('');
  const [refLink2, setRefLink2] = useState('');
  const [refLinkDesc2, setRefLinkDesc2] = useState('');
  const [refLink3, setRefLink3] = useState('');
  const [refLinkDesc3, setRefLinkDesc3] = useState('');
  /// анти-рефы
  const [antiRefLink1, setAntiRefLink1] = useState('');
  const [antiRefLinkDesc1, setAntiRefLinkDesc1] = useState('');
  const [antiRefLink2, setAntiRefLink2] = useState('');
  const [antiRefLinkDesc2, setAntiRefLinkDesc2] = useState('');
  const [antiRefLink3, setAntiRefLink3] = useState('');
  const [antiRefLinkDesc3, setAntiRefLinkDesc3] = useState('');
  const [pallet, setPallet] = useState([]);
  /// все ссылки
  // const [allLinks, setAllLinks] = useState([])
  /// видиние
  const [vision, setVision] = useState('');
  // const [colors, setColors] = useState([])
  /// wish
  const [wish, setWish] = useState();
  const [pass, setPass] = useState('');
  // const [passCheck, setPassCheck] = useState('');

  const dispatch = useDispatch();
  const registrHandler = async (evt) => {
    evt.preventDefault();

    const olinks = {
      compLinks: [
        compLink1,
        compLinkDesc1,
        compLink2,
        compLinkDesc2,
        compLink3,
        compLinkDesc3,
      ],
      rivalDesc,
      rivalLinks: [
        rivalLink1,
        rivalLinkDesc1,
        rivalLink2,
        rivalLinkDesc2,
        rivalLink3,
        rivalLinkDesc3,
      ],
      refLinks: [
        refLink1,
        refLinkDesc1,
        refLink2,
        refLinkDesc2,
        refLink3,
        refLinkDesc3,
      ],
      antiReflinks: [
        antiRefLink1,
        antiRefLinkDesc1,
        antiRefLink2,
        antiRefLinkDesc2,
        antiRefLink3,
        antiRefLinkDesc3,
      ],
    };

    const w = {
      descriptions: [],
      links: [],
    };
    ['compLinks', 'rivalLinks', 'refLinks', 'antiReflinks'].forEach((el) => {
      for (let i = 0; i < olinks[el].length; i += 2) {
        w.links.push({
          code: el,
          name: olinks[el][i + 1],
          link: olinks[el][i],
        });
      }
    });

    const reg = {
      user: {
        login,
        email,
        phone,
        telegram,
        password: pass,
      },
      company: {
        descriptions: {
          company,
          companyProfile,
          audiNow,
          audiFuture,
          vision,
          wish,
          rivalDesc,
        },
        links: w.links,
      },
    };

    console.log('Task =====>', reg);
    if (login && email && phone && pass) {
      dispatch(setRegistr(reg));

      // setLogin("");
      // setPhone("");
      // setEmail("");
      // setPass("")
      // setName("")
      // setTelegram("")
      // setCompany("")
    }
  };

  const clickhandler = ({ target }) => {
    console.log("target ===>", target.textContent);
    let newArray = pallet
    if (pallet.includes(target.textContent)) {
      newArray = newArray.filter((el) => el !== target.textContent)
      setPallet(newArray)
    } else {
      setPallet((current) => [...current, target.textContent])
    }
  };
  // console.log('это auth такой ====>', auth);
  console.log('pallet', pallet);
  console.log('login', login);
  console.log('phone', phone);
  console.log('email', email);
  console.log('pass', pass);
  console.log('telegram', telegram);
  console.log('company', company);

  useEffect(() => {

  }, [auth]);

  return (
    <>
      <div className={classes.allForm}>
        <div className={`${classes.container}`}>
          <form onSubmit={registrHandler} className={`${classes.testForm}`}>

            <div className={`${sectionState.one}`}>
              <div className={classes.formDiv}>
                <label htmlFor="exampleemailHelpMe" className={classes.formLabel}>Как зовут?</label>
                <textarea
                  onChange={(evt) => {
                    setLogin(evt.target.value);
                  }}
                  value={login}
                  type="text"
                  placeholder="Name"
                  autoComplete="off"
                  onFocus={(e) => e.target.select()}
                  className={classes.formControl}
                  id="exampleemailHelpMe"
                />
              </div>
              <div className={classes.formDiv}>
                <label htmlFor="exampleMeHelp" className={classes.formLabel}>Контакты для связи</label>
                <textarea
                  value={email}
                  onChange={(evt) => {
                    setEmail(evt.target.value);
                  }}
                  type="email"
                  placeholder="E-mail"
                  autoComplete="off"
                  onFocus={(e) => e.target.select()}
                  className={classes.formControl}
                  id="exampleMeHelp"
                  aria-describedby="emailHelp"
                />
                <textarea
                  value={phone}
                  onChange={(evt) => {
                    setPhone(evt.target.value);
                  }}
                  type="number"
                  placeholder="Phone"
                  autoComplete="off"
                  onFocus={(e) => e.target.select()}
                  className={classes.formControl}
                  id="examplePhone"
                />
                <textarea
                  value={telegram}
                  onChange={(evt) => {
                    setTelegram(evt.target.value);
                  }}
                  type="text"
                  placeholder="Telegram"
                  autoComplete="off"
                  onFocus={(e) => e.target.select()}
                  className={classes.formControl}
                  id="exampleTelegram"
                />
              </div>
              <div className={classes.formDiv}>
                <label htmlFor="exampleCompany" className={classes.formLabel}>Название компании</label>
                <textarea
                  value={company}
                  onChange={(evt) => {
                    setCompany(evt.target.value);
                  }}
                  type="text"
                  placeholder="Иван Петров"
                  autoComplete="off"
                  onFocus={(e) => e.target.select()}
                  className={classes.formControl}
                  id="exampleCompany"
                />
              </div>
              <button onClick={changeStyle} type="button" className={`${classes.buttonForward} ${styleButtonLast}`}>Далее</button>
            </div>

            <div className={`${sectionState.two}`}>
              <div className={classes.formDiv}>
                <label htmlFor="nameHelp" className={classes.formLabel}>Профиль компании</label>
                <textarea
                  onChange={(evt) => {
                    setCompanyProfile(evt.target.value);
                  }}
                  value={companyProfile}
                  type="text"
                  placeholder="Разработка ПО"
                  autoComplete="off"
                  onFocus={(e) => e.target.select()}
                  className={classes.formControl}
                  id="exampleCompanyProfile"
                />
              </div>
              <div className={classes.formDiv}>
                <label htmlFor="surnameHelp" className={classes.formLabel}>Аудитория</label>
                <textarea
                  value={audiNow}
                  onChange={(evt) => {
                    setAudiNow(evt.target.value);
                  }}
                  type="text"
                  placeholder="Ваша текущая аудитория"
                  autoComplete="off"
                  onFocus={(e) => e.target.select()}
                  className={classes.formControl}
                  id="exampleAudiHelp"
                />
                <textarea
                  value={audiFuture}
                  onChange={(evt) => {
                    setAudiFuture(evt.target.value);
                  }}
                  type="text"
                  placeholder="Ваша желаемая аудитория"
                  autoComplete="off"
                  onFocus={(e) => e.target.select()}
                  className={classes.formControl}
                  id="exampleAudiFutureHelp"
                />
              </div>
              <div className={classes.formDiv}>
                <label htmlFor="exampleInputPassword1" className={classes.formLabel}>Сссылки о вашей компании</label>
                <textarea
                  onChange={(evt) => {
                    setCompLink1(evt.target.value);
                  }}
                  value={compLink1}
                  type="text"
                  placeholder="Ссылка на сайт, презентацию пресс-релиз и соцсети"
                  autoComplete="off"
                  onFocus={(e) => e.target.select()}
                  className={classes.formControl}
                  id="compLink1"
                />
                <textarea
                  onChange={(evt) => {
                    setCompLinkDesc1(evt.target.value);
                  }}
                  value={compLinkDesc1}
                  type="text"
                  placeholder="Описание для ссылки"
                  autoComplete="off"
                  onFocus={(e) => e.target.select()}
                  className={classes.formControl}
                  id="compLinkDesc1"
                />
                <textarea
                  onChange={(evt) => {
                    setCompLink2(evt.target.value);
                  }}
                  value={compLink2}
                  type="text"
                  placeholder="Ссылка на сайт, презентацию пресс-релиз и соцсети"
                  autoComplete="off"
                  onFocus={(e) => e.target.select()}
                  className={classes.formControl}
                  id="compLink2"
                />
                <textarea
                  onChange={(evt) => {
                    setCompLinkDesc2(evt.target.value);
                  }}
                  value={compLinkDesc2}
                  type="text"
                  placeholder="Описание для ссылки"
                  autoComplete="off"
                  onFocus={(e) => e.target.select()}
                  className={classes.formControl}
                  id="compLinkDesc2"
                />
                <textarea
                  onChange={(evt) => {
                    setCompLink3(evt.target.value);
                  }}
                  value={compLink3}
                  type="text"
                  placeholder="Ссылка на сайт, презентацию пресс-релиз и соцсети"
                  autoComplete="off"
                  onFocus={(e) => e.target.select()}
                  className={classes.formControl}
                  id="compLink3"
                />
                <textarea
                  onChange={(evt) => {
                    setCompLinkDesc3(evt.target.value);
                  }}
                  value={compLinkDesc3}
                  type="text"
                  placeholder="Описание для ссылки"
                  autoComplete="off"
                  onFocus={(e) => e.target.select()}
                  className={classes.formControl}
                  id="compLinkDesc3"
                />
              </div>
              <div className={classes.formDiv}>
                <label htmlFor="surnameHelp" className={classes.formLabel}>В чем отличие от конкурентов?</label>
                <textarea
                  value={rivalDesc}
                  onChange={(evt) => {
                    setRivalDesc(evt.target.value);
                  }}
                  type="text"
                  placeholder="Мы работаем в полтора раза быстрее и даем гарантию..."
                  autoComplete="off"
                  onFocus={(e) => e.target.select()}
                  className={classes.formControl}
                  id="rivalDesc"
                />
                <button onClick={secondButton} type="button" className={`${classes.buttonForward} ${styleButtonLast}`}>Далее</button>
              </div>
            </div>

            <div className={`${sectionState.three}`}>
              <div className={classes.formDiv}>
                <label htmlFor="surnameHelp" className={classes.formLabel}>Конкуренты и похожие компании</label>
                <textarea
                  value={rivalLink1}
                  onChange={(evt) => {
                    setRivalLink1(evt.target.value);
                  }}
                  type="text"
                  placeholder="Ссылка на сайт, картинку или соцсети"
                  autoComplete="off"
                  onFocus={(e) => e.target.select()}
                  className={classes.formControl}
                  id="rivalLink1"
                />
                <textarea
                  value={rivalLinkDesc1}
                  onChange={(evt) => {
                    setRivalLinkDesc1(evt.target.value);
                  }}
                  type="text"
                  placeholder="Описание конкурента. На что обратить внимание?"
                  autoComplete="off"
                  onFocus={(e) => e.target.select()}
                  className={classes.formControl}
                  id="rivalLinkDesc1"
                />
                <textarea
                  value={rivalLink2}
                  onChange={(evt) => {
                    setRivalLink2(evt.target.value);
                  }}
                  type="text"
                  placeholder="Ссылка на сайт, картинку или соцсети"
                  autoComplete="off"
                  onFocus={(e) => e.target.select()}
                  className={classes.formControl}
                  id="rivalLink2"
                />
                <textarea
                  value={rivalLinkDesc2}
                  onChange={(evt) => {
                    setRivalLinkDesc2(evt.target.value);
                  }}
                  type="text"
                  placeholder="Описание конкурента. На что обратить внимание?"
                  autoComplete="off"
                  onFocus={(e) => e.target.select()}
                  className={classes.formControl}
                  id="rivalLinkDesc2"
                />
                <textarea
                  value={rivalLink3}
                  onChange={(evt) => {
                    setRivalLink3(evt.target.value);
                  }}
                  type="text"
                  placeholder="Ссылка на сайт, картинку или соцсети"
                  autoComplete="off"
                  onFocus={(e) => e.target.select()}
                  className={classes.formControl}
                  id="rivalLink3"
                />
                <textarea
                  value={rivalLinkDesc3}
                  onChange={(evt) => {
                    setRivalLinkDesc3(evt.target.value);
                  }}
                  type="text"
                  placeholder="Описание конкурента. На что обратить внимание?"
                  autoComplete="off"
                  onFocus={(e) => e.target.select()}
                  className={classes.formControl}
                  id="rivalLinkDesc3"
                />
              </div>
              <button onClick={thirdButton} type="button" className={`${classes.buttonForward} ${styleButtonLast}`}>Далее</button>
            </div>

            <div className={`${sectionState.four}`}>
              <div className={classes.formDiv}>
                <label htmlFor="surnameHelp" className={classes.formLabel}>Ссылки-референсы</label>
                <textarea
                  value={refLink1}
                  onChange={(evt) => {
                    setRefLink1(evt.target.value);
                  }}
                  type="text"
                  placeholder="Ссылка на сайт, картинку или соцсети"
                  autoComplete="off"
                  onFocus={(e) => e.target.select()}
                  className={classes.formControl}
                  id="refLink1"
                />
                <textarea
                  value={refLinkDesc1}
                  onChange={(evt) => {
                    setRefLinkDesc1(evt.target.value);
                  }}
                  type="text"
                  placeholder="Почему нравится этот пример?"
                  autoComplete="off"
                  onFocus={(e) => e.target.select()}
                  className={classes.formControl}
                  id="refLinkDesc1"
                />
                <textarea
                  value={refLink2}
                  onChange={(evt) => {
                    setRefLink2(evt.target.value);
                  }}
                  type="text"
                  placeholder="Ссылка на сайт, картинку или соцсети"
                  autoComplete="off"
                  onFocus={(e) => e.target.select()}
                  className={classes.formControl}
                  id="refLink2"
                />
                <textarea
                  value={refLinkDesc2}
                  onChange={(evt) => {
                    setRefLinkDesc2(evt.target.value);
                  }}
                  type="text"
                  placeholder="Почему нравится этот пример?"
                  autoComplete="off"
                  onFocus={(e) => e.target.select()}
                  className={classes.formControl}
                  id="refLinkDesc2"
                />
                <textarea
                  value={refLink3}
                  onChange={(evt) => {
                    setRefLink3(evt.target.value);
                  }}
                  type="text"
                  placeholder="Ссылка на сайт, картинку или соцсети"
                  autoComplete="off"
                  onFocus={(e) => e.target.select()}
                  className={classes.formControl}
                  id="refLink3"
                />
                <textarea
                  value={refLinkDesc3}
                  onChange={(evt) => {
                    setRefLinkDesc3(evt.target.value);
                  }}
                  type="text"
                  placeholder="Почему нравится этот пример??"
                  autoComplete="off"
                  onFocus={(e) => e.target.select()}
                  className={classes.formControl}
                  id="refLinkDesc3"
                />
              </div>
              <button onClick={fourthButton} type="button" className={`${classes.buttonForward} ${styleButtonLast}`}>Далее</button>
            </div>

            <div className={`${sectionState.five}`}>
              <div className={classes.formDiv}>
                <label htmlFor="surnameHelp" className={classes.formLabel}>Ссылки-антиреференсы</label>
                <textarea
                  value={antiRefLink1}
                  onChange={(evt) => {
                    setAntiRefLink1(evt.target.value);
                  }}
                  type="text"
                  placeholder="Ссылка на сайт, картинку или соцсети"
                  autoComplete="off"
                  onFocus={(e) => e.target.select()}
                  className={classes.formControl}
                  id="antiRefLink1"
                />
                <textarea
                  value={antiRefLinkDesc1}
                  onChange={(evt) => {
                    setAntiRefLinkDesc1(evt.target.value);
                  }}
                  type="text"
                  placeholder="Почему не нравится этот пример?"
                  autoComplete="off"
                  onFocus={(e) => e.target.select()}
                  className={classes.formControl}
                  id="antiRefLinkDesc1"
                />
                <textarea
                  value={antiRefLink2}
                  onChange={(evt) => {
                    setAntiRefLink2(evt.target.value);
                  }}
                  type="text"
                  placeholder="Ссылка на сайт, картинку или соцсети"
                  autoComplete="off"
                  onFocus={(e) => e.target.select()}
                  className={classes.formControl}
                  id="antiRefLink2"
                />
                <textarea
                  value={antiRefLinkDesc2}
                  onChange={(evt) => {
                    setAntiRefLinkDesc2(evt.target.value);
                  }}
                  type="text"
                  placeholder="Почему не нравится этот пример?"
                  autoComplete="off"
                  onFocus={(e) => e.target.select()}
                  className={classes.formControl}
                  id="antiRefLinkDesc2"
                />
                <textarea
                  value={antiRefLink3}
                  onChange={(evt) => {
                    setAntiRefLink3(evt.target.value);
                  }}
                  type="text"
                  placeholder="Ссылка на сайт, картинку или соцсети"
                  autoComplete="off"
                  onFocus={(e) => e.target.select()}
                  className={classes.formControl}
                  id="antiRefLink3"
                />
                <textarea
                  value={antiRefLinkDesc3}
                  onChange={(evt) => {
                    setAntiRefLinkDesc3(evt.target.value);
                  }}
                  type="text"
                  placeholder="Почему не нравится этот пример?"
                  autoComplete="off"
                  onFocus={(e) => e.target.select()}
                  className={classes.formControl}
                  id="antiRefLinkDesc3"
                />
              </div>
              <button onClick={fivethButton} type="button" className={`${classes.buttonForward} ${styleButtonLast}`}>Далее</button>
            </div>

            <div className={`${sectionState.six}`}>
              <div className={classes.formDiv}>
                <label htmlFor="surnameHelp" className={classes.formLabel}>Как вы видите финальный результат?</label>
                <textarea
                  value={vision}
                  onChange={(evt) => {
                    setVision(evt.target.value);
                  }}
                  type="text"
                  placeholder="Хочется современный дизайн для молодой аудитории... "
                  autoComplete="off"
                  onFocus={(e) => e.target.select()}
                  className={classes.formControl}
                  id="vision"
                />

              </div>
              <div className={classes.formDiv}>
                <label htmlFor="surnameHelp" className={classes.formLabel}>Опишите цветовую палитру</label>
                <div className={classes.colorPallet}>

                  <div
                    onClick={clickhandler}
                    style={{ backgroundColor: '#E23531' }}
                    className={`${pallet.includes('Красный') && classes.activePallet} + ${classes.colorPallet_item}`}
                  >
                    <p style={{ color: 'white', fontSize: '12px' }}>Красный</p>
                  </div>
                  <div
                    onClick={clickhandler}
                    style={{ backgroundColor: '#F7A0BD' }}
                    className={`${pallet.includes('Розовый') && classes.activePallet} + ${classes.colorPallet_item}`}
                  >
                    <p style={{ color: 'white', fontSize: '12px' }}>Розовый</p>
                  </div>
                  <div
                    onClick={clickhandler}
                    style={{ backgroundColor: '#AB47BC' }}
                    className={`${pallet.includes('Фиолетовый') && classes.activePallet} + ${classes.colorPallet_item}`}
                  >
                    <p style={{ color: 'white', fontSize: '12px' }}>Фиолетовый</p>
                  </div>
                  <div
                    onClick={clickhandler}
                    style={{ backgroundColor: '#2264D1' }}
                    className={`${pallet.includes('Синий') && classes.activePallet} + ${classes.colorPallet_item}`}
                  >
                    <p style={{ color: 'white', fontSize: '12px' }}>Синий</p>
                  </div>
                  <div
                    onClick={clickhandler}
                    style={{ backgroundColor: '#80DEEA' }}
                    className={`${pallet.includes('Голубой') && classes.activePallet} + ${classes.colorPallet_item}`}
                  >
                    <p style={{ color: 'white', fontSize: '12px' }}>Голубой</p>
                  </div>
                  <div
                    onClick={clickhandler}
                    style={{ backgroundColor: '#009688' }}
                    className={`${pallet.includes('Бирюзовый') && classes.activePallet} + ${classes.colorPallet_item}`}
                  >
                    <p style={{ color: 'white', fontSize: '12px' }}>Бирюзовый</p>
                  </div>
                  <div
                    onClick={clickhandler}
                    style={{ backgroundColor: '#8BC34A' }}
                    className={`${pallet.includes('Зеленый') && classes.activePallet} + ${classes.colorPallet_item}`}
                  >
                    <p style={{ color: 'white', fontSize: '12px' }}>Зеленый</p>
                  </div>
                  <div
                    onClick={clickhandler}
                    style={{ backgroundColor: '#C6FF00' }}
                    className={`${pallet.includes('Лаймовый') && classes.activePallet} + ${classes.colorPallet_item}`}
                  >
                    <p style={{ color: 'white', fontSize: '12px' }}>Лаймовый</p>
                  </div>
                  <div
                    onClick={clickhandler}
                    style={{ backgroundColor: '#FDD835' }}
                    className={`${pallet.includes('Желтый') && classes.activePallet} + ${classes.colorPallet_item}`}
                  >
                    <p style={{ color: 'white', fontSize: '12px' }}>Желтый</p>
                  </div>
                  <div
                    onClick={clickhandler}
                    style={{ backgroundColor: '#F57C00' }}
                    className={`${pallet.includes('Оранжевый') && classes.activePallet} + ${classes.colorPallet_item}`}
                  >
                    <p style={{ color: 'white', fontSize: '12px' }}>Оранжевый</p>
                  </div>
                  <div
                    onClick={clickhandler}
                    style={{ backgroundColor: '#F3F3F3' }}
                    className={`${pallet.includes('Белый') && classes.activePallet} + ${classes.colorPallet_item}`}
                  >
                    <p style={{ color: 'black', fontSize: '12px' }}>Белый</p>
                  </div>
                  <div
                    onClick={clickhandler}
                    style={{ backgroundColor: '#0E0E0E' }}
                    className={`${pallet.includes('Черный') ? classes.activePallet : classes.whiteBorder} + ${classes.colorPallet_item}`}
                  >
                    <p style={{ color: 'white', fontSize: '12px' }}>Черный</p>
                  </div>
                </div>
              </div>
              {/* <div className={classes.formDiv}>
                <label htmlFor="surnameHelp" className={classes.formLabel}>Выберете цветовую палитру</label>
                <div className={classes.colorsGrid}></div>
              </div> */}
              <button onClick={sixthButton} type="button" className={`${classes.buttonForward} ${styleButtonLast}`}>Далее</button>
            </div>

            <div className={`${sectionState.seven}`}>
              <div className={classes.formDiv}>
                <label htmlFor="surnameHelp" className={classes.formLabel}>Пожелания, если есть</label>
                <textarea
                  value={wish}
                  onChange={(evt) => {
                    setWish(evt.target.value);
                  }}
                  type="text"
                  placeholder="Сделать, как у Apple..."
                  autoComplete="off"
                  onFocus={(e) => e.target.select()}
                  className={classes.formControl}
                  id="wish"
                />
              </div>
              <button onClick={seventhButton} type="button" className={`${classes.buttonForward} ${styleButtonLast}`}>Далее</button>
            </div>

            <div className={`${sectionState.eight}`}>
              <div className={classes.formDiv}>
                <label htmlFor="surnameHelp" className={classes.formLabel}>Пароль для личного кабинета</label>
                <textarea
                  value={pass}
                  onChange={(evt) => {
                    setPass(evt.target.value);
                  }}
                  type="password"
                  placeholder="Придумайте пароль"
                  autoComplete="off"
                  onFocus={(e) => e.target.select()}
                  className={classes.formControl}
                  id="pass"
                />
                {/* <input
                  value={passCheck}
                  onChange={evt => {
                    setPassCheck(evt.target.value);
                  }}
                  type="password"
                  placeholder='Повторите пароль'
                  autoComplete="off"
                  onFocus={e => e.target.select()}
                  className={classes.formControl}
                  id="passCheck" /> */}

              </div>
              <button type="button" onClick={beforeSubmit} className={`${classes.buttonForward} ${styleButtonLast}`}>Показать все</button>
              {auth[0] && (
                <p style={{ color: 'white', fontSize: '20px' }}>
                  {' '}
                  {auth[0]}
                  !
                </p>
              )}
              {' '}
              {auth[1] && (
                <p style={{ color: 'white', fontSize: '20px' }}>
                  {' '}
                  {auth[1]}
                  !!
                  {' '}
                </p>
              )}
              {' '}
              {auth[2] && (
                <p style={{ color: 'white', fontSize: '20px' }}>
                  {auth[2]}
                  {' '}
                  !!!
                </p>
              )}

              <button type="submit" className={`${classes.buttonForward} ${submitButtonLast}`}>Submit</button>

            </div>
          </form>
        </div>
        <div className={`${classes.navContainer}`}>
          <button checked="checked" className={`${blockState.one}`} onClick={firstHandler}>
            01. Контактная
            информация

          </button>
          <button
            onClick={secondHandler}
            className={`${blockState.two}`}
          >
            02. Чем занимается
            ваша компания?

          </button>
          <button onClick={thirdHandler} className={`${blockState.three}`}>
            03. Ваши главные качества
            и преимущества?

          </button>
          <button className={`${blockState.four}`} onClick={fourthHandler}>
            01. Примеры дизайна,
            который нравится

          </button>
          <button
            onClick={fivthHandler}
            className={`${blockState.five}`}
          >
            02. Примеры дизайна,
            который не нравится

          </button>
          <button onClick={sixthHandler} className={`${blockState.six}`}>
            03. Опишите желаемый
            результат

          </button>
          <button className={`${blockState.seven}`} onClick={seventhHandler}>
            01. Дополнительные просьбы
            и пожелания

          </button>
          <button
            onClick={eighthHandler}
            className={`${blockState.eight}`}
          >
            02. Перепроверка
            всех данных

          </button>
          {/* <button onClick={ninethHandler} className={`${blockState.nine}`}>02. Перепроверка
            всех данных</button> */}
          {/* <button onClick={lastHandler} className={`${blockState.ten}`}>02. Перепроверка
            всех данных</button> */}
        </div>
      </div>
      {/* <button onClick={() => makeRequest()}>Post запрос</button>
      <div className={`${classes.fromServer}`}>This comes from server: "{result}"</div> */}
    </>
  );
}
