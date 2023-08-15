import { Route, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage/MainPage';
import Footer from './components/Footer/Footer';
import NavbarBasic from './components/NavbarBasic/NavbarBasic';

import LoginWorker from './components/LoginWorker/LoginWorker';
import RegistrationClient from './components/RegistrationClient/RegistrationClient';

import SpecForm from './components/SpecForm/SpecForm';
import RegistrationQuick from './components/RegistrationQuick/RegistrationQuick';
import { useDispatch, useSelector } from 'react-redux';
import { useContext, useEffect } from 'react';
import { getUser } from './store/actions/auth.action';
import FormAbout from './components/FormAbout/FormAbout';
import SpecFormEdit from './components/SpecFormEdit/SpecFormEdit';
import NoPage from './components/NoPage/NoPage';
import FormContext from './components/FormContext/form.context';
import Loader from './components/Loader/Loader';
import RegAuth from './components/RegAuth/RegAuth';
import ListWorkers from './components/ListWorkers/ListWorkers';
// import ListWorkers from './components/ListWorkers/ListWorkers';

function App() {
  const {
    loader,
    setLoader,
    done,
    setDone,
  } = useContext(FormContext);
  const { auth: { id } } = useSelector((state) => state);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUser());
    // setLoader(!loader)
  }, [dispatch, id])

  return (
    <>
      <div className="App Site">
        <link
          rel="prefetch"
          href="/public/fonts/Inter-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="prefetch"
          href="/public/fonts/PPRightGrotesk-Medium.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {!loader ? (
          <>
            <div className="Site-content">
              <header className="App-header">
                <NavbarBasic />
              </header>
              <main className="main">
                <div className="container">
                  <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="registrationClient">
                      <Route path='specs' element={<SpecForm />} />
                      <Route path='about' element={<FormAbout />} />
                    </Route>
                    <Route path="registration" element={<RegistrationQuick />} />
                    <Route path="authorisation" element={<RegAuth />} />
                    <Route path="profile" element={<SpecFormEdit />} />
                    <Route path="login" element={<LoginWorker />} />
                    <Route path='form' element={<RegistrationClient />} />
                    <Route path='*' element={<NoPage />} />
                    <Route path='list' element={<ListWorkers />} />

                  </Routes>
                </div>
              </main>
            </div>

            <Footer />
          </>
        ) : <Loader />}

      </div>

    </>
  );
}

export default App;
