import { useContext } from 'react';
import classes from './CardOption.module.css'

import FormContext from '../FormContext/form.context';

export default function CardOption({ name, num }) {
  const {
    spec,
    setSpec,
  } = useContext(FormContext);

  console.log('spec', spec);

  const clickhandler = ({ target }) => {
    console.log("target ===>", target);
    let newArray = spec
    if (spec.includes(target.name)) {
      newArray = newArray.filter((el) => el !== target.name)
      setSpec(newArray)
    } else {
      setSpec((current) => [...current, target.name])
    }
  };

  return (
    <div className={`${classes.container}`}>
      <h1 className={`${classes.heading}`}>{name}</h1>
      <div className={`${classes.paragraphBox}`}>
        <p className={`${classes.paragraph}`}>+₽3 990</p>
        <p className={`${classes.paragraph}`}>+2 дня</p>
      </div>
      <label className={`${classes.inputBox}`}>
        <input onClick={clickhandler} type="checkbox" name={name} num={num} className={`${classes.checkboxRound}`} />
        <span className={`${classes.inputLabel}`}>Выбрать</span>
      </label>
    </div>
  )
}
