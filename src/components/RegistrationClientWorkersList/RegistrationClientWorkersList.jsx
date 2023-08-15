import classes from './RegistrationClientWorkersList.module.css'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import FormContext from '../FormContext/form.context';
import ListWorkers from '../ListWorkers/ListWorkers';

export default function RegistrationClientWorkersList() {
  const {
    pricePerHour,
    setPricePerHour,
  } = useContext(FormContext);
  return (
    <div className={classes.containerWrapper}>
      <div className={classes.containerOptions}>
        <div className={classes.infoWrapper}>
          <div className={classes.infoBlock}><h1>Your worker list </h1> </div>
        </div>
        <div style={{ marginTop: '28px' }}><ListWorkers /></div>
      </div>
      <div className={classes.containerInfo}>
        <div className={classes.forwardWrapper}>
          <Link to="/registrationClient/extra"><div className={classes.forwardBlock}> <h1>Далее</h1> </div></Link>
        </div>
        <div className={classes.rightColumn}>
          <div>
            <div className={classes.priceInfo}>
              <p style={{ color: 'black' }}>Ваша цена в час:</p>
              <h1 style={{ color: 'black' }}>{pricePerHour}$</h1>
            </div>
            <div className={classes.buttonsWrap} style={{ height: '80px' }}>
              <button
                style={{
                  color: 'white', backgroundColor: '#53B640', width: '88px', height: '32px', marginRight: '8px',
                }}
                className={`${pricePerHour === 10 ? classes.hideButton : classes.normalButton}`}
                onClick={() => setPricePerHour(pricePerHour > 10 ? pricePerHour - 5 : 10)}
              >
                -5$/hr
              </button>
              <button
                style={{
                  color: 'white', backgroundColor: '#FA3535', width: '88px', height: '32px',
                }}
                className={`${pricePerHour === 90 ? classes.hideButton : classes.normalButton}`}
                onClick={() => setPricePerHour(pricePerHour < 90 ? pricePerHour + 5 : 90)}
              >
                +5$/hr
              </button>
            </div>
          </div>
          <div className={classes.taskInfo}>
            <p style={{ color: 'black' }}>Logotype
              and branding:
            </p>
            <h1 style={{ color: 'black' }}>{pricePerHour}$</h1>
          </div>

        </div>

      </div>
    </div>
  )
}
