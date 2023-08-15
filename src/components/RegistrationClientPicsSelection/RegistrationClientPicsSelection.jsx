import classes from './RegistrationClientPicsSelection.module.css'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import FormContext from '../FormContext/form.context';

export default function RegistrationClientPicsSelection() {
  const {
    pricePerHour,
    setPricePerHour,
  } = useContext(FormContext);
  return (
    <div className={classes.containerWrapper}>
      <div className={classes.containerOptions}>
        <div className={classes.infoWrapper}>
          <div className={classes.infoBlock}><h1>Select works you like</h1> </div>
        </div>
        <p style={{ color: '#8A8A8A', marginBottom: '10px' }}>Работа других исполнителей в этом бюджете:</p>
        <div className={classes.workersPricePortfolio}>
          <img className={classes.workersPricePortfolioItem} src="" alt="" />
          <img className={classes.workersPricePortfolioItem} src="" alt="" />
          <img className={classes.workersPricePortfolioItem} src="" alt="" />
          <img className={classes.workersPricePortfolioItem} src="" alt="" />
        </div>
      </div>
      <div className={classes.containerInfo}>
        <div className={classes.forwardWrapper}>
          <Link to="/registrationClient/workerList"><div className={classes.forwardBlock}> <h1>Далее</h1> </div></Link>
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
