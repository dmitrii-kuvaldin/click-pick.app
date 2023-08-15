import classes from './RegistrationClientExtra.module.css'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import FormContext from '../FormContext/form.context';
import CardOption from '../CardOption/CardOption';
import axios from 'axios';

export default function RegistrationClientExtra() {
  const {
    pricePerHour,
    setPricePerHour,
  } = useContext(FormContext);

  const [data, setData] = useState(null);

  const registrHandler = async () => {
    const resp = await axios.get('https://pysanyi.space/clickpick/api/works/');
    console.log('resp.data ====>', resp.data);
    setData(resp.data);
    return resp;
  };

  useEffect(() => {
    registrHandler();
  }, []);

  return (
    <div className={classes.containerOptions}>

      <div className={classes.infoWrapper}>
        <div className={classes.infoBlock}><h1>Customise your project</h1> </div>
        <Link to="/registrationClient/clientForm"><div className={classes.forwardBlock}><h1>Далее</h1>  </div></Link>

      </div>

      <p style={{ color: '#8A8A8A', marginBottom: '10px' }}>Готовка:</p>
      <div className={classes.cardsOptionContainer}>
        {data && data[1].wt.map((task) => <CardOption name={task.option} num={task.id} key={task.id} {...task} />)}

      </div>
      <p style={{ color: '#8A8A8A', marginBottom: '10px' }}>Дизайн:</p>
      <div className={classes.cardsOptionContainer}>

        {data && data[2].wt.map((task) => <CardOption name={task.option} num={task.id} key={task.id} {...task} />)}

      </div>
      <p style={{ color: '#8A8A8A', marginBottom: '10px' }}>Музыка:</p>
      <div className={classes.cardsOptionContainer}>

        {data && data[3].wt.map((task) => <CardOption name={task.option} num={task.id} key={task.id} {...task} />)}

      </div>

    </div>

  )
}
