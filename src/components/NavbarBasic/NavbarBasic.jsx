import classes from './NavbarBasic.module.css';
import { Link } from 'react-router-dom';
import '../../index.css'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLogoutData } from '../../store/actions/auth.action';
import { getCompany, getWorker, getWorkersQuick } from '../../store/actions/workers.action';
import { useTranslation } from 'react-i18next';

export default function NavbarBasic() {
  const lng = navigator.language;

  const [lang, setLang] = useState(lng)
  const dispatch = useDispatch();

  console.log('lng ====>', lng);

  const { t, i18n } = useTranslation();
  function logoutHandler(evt) {
    dispatch(setLogoutData());
  }

  function eng() {
    if (lang === 'en-US') {
      i18n.changeLanguage('ru-RU')
      setLang('ru-RU')
    } else {
      i18n.changeLanguage('en-US')
      setLang('en-US')
    }
  }

  // useEffect(() => {
  //   dispatch(getWorkersQuick())
  // }, [dispatch])

  const { auth } = useSelector((state) => state);

  const { auth: { id } } = useSelector((state) => state);
  const { comp } = useSelector((state) => state);

  console.log('comp из navbar', comp);
  console.log('comp длина', comp.length);

  useEffect(() => {
    dispatch(getWorker({ id }))
    dispatch(getCompany())
    i18n.changeLanguage('ru-RU');
    setLang('ru-RU')
  }, [id])

  return (
    <>
      <header className={classes.headerContainer}>
        <div className={classes.headerWrapper}>
          <Link to="/" condition={auth?.country_code}>
            <img src="images/logo/logo.png" alt="Clickpick" className={classes.logo} />
          </Link>
          <nav className={classes.navWrapper}>
            {/* <button className={classes.navBtn} onClick={eng}><img src="/images/icons_svg/lang.svg" alt="En" /></button> */}

            {(comp.length > 0 && id) && (
              <Link className={classes.navBtn} to="profile">
                <img src="/images/icons_svg/user.svg" alt="SignIn" />
              </Link>
            )}
            {id && (
              <Link to="/" className={classes.navBtn} onClick={logoutHandler}>
                <img src="/images/icons_svg/signOut.svg" alt="SignOut" />
              </Link>
            )}
            {!id && (
              <Link className={classes.navBtn} to="login">
                <img src="/images/icons_svg/signIn.svg" alt="SignIn" />
              </Link>
            )}

          </nav>
        </div>
      </header>
    </>
  )
}
