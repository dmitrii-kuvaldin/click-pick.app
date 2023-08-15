import classes from './RegistrationClientForm.module.css'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import FormContext from '../FormContext/form.context';
import ListWorkers from '../ListWorkers/ListWorkers';
import FormClient from '../FormClient/FormClient';

export default function RegistrationClientForm() {
  // const {
  //   pricePerHour,
  //   setPricePerHour,
  // } = useContext(FormContext);
  return (
    <div className={classes.containerWrapper}>

      <div className={classes.containerInfo}>
        <div className={classes.infoBlock}><h1>Project briefing </h1> </div>
        <div className={classes.forwardWrapper}>
          <Link to="/registrationClient/extra"><div className={classes.forwardBlock}> <h1>Далее</h1> </div></Link>
        </div>
      </div>

      <div style={{ marginTop: '28px' }}>
        <FormClient />
      </div>

    </div>
  )
}
