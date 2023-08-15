import React, { useEffect, useRef, useState } from 'react'
import SwiperBig from '../SwiperBig/SwiperBig';
import classes from './WorkerCardModalWindow.module.css'

export default function WorkerCardModalWindow({
  imgs, setModal, id, name,
}) {
  const modalRef = useRef();

  function onCloseHendler() {
    setModal((prev) => ({ ...prev, show: false }))
  }

  const handleParentClose = (event) => {
    event.preventDefault();
    if (event.target === event.currentTarget) {
      setModal((prev) => ({ ...prev, show: false }))
    }
  }

  const [sitter, setSitter] = useState({ loading: false });

  // useEffect(() => {
  //   fetch(`${process.env.REACT_APP_API_URL}/allWorkers/${id}`)
  //     .then(data => data.json())
  //     .then(data => setSitter({ loading: false, data }));
  // }, [id]);

  return (
    <div>
      {sitter.loading
        ? (<h1>Ждите</h1>)
        : (
          <div className={classes.modalContainer} onClick={handleParentClose}>
            <div className={classes.modalCover}>
              <div className={classes.modalBlock}>
                <div className={classes.blockMessage}>
                  <h1 style={{ color: 'white' }}>
                    Moй номер
                    {' '}
                    {id}
                  </h1>
                  <h2 style={{ color: 'white' }}>
                    Меня зовут
                    {' '}
                    {name}
                  </h2>
                  <SwiperBig imgs={imgs} />
                </div>
              </div>
            </div>
          </div>
        )}
    </div>

  )
}
