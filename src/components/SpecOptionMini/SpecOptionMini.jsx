import { useContext, useState } from 'react';
import classes from './SpecOptionMini.module.css'

import FormContext from '../FormContext/form.context';

export default function SpecOptionMini({ name, num }) {
  const {
    spec,
    setSpec,
  } = useContext(FormContext);

  const [active, setActive] = useState(false);

  console.log('spec', spec);

  const clickhandler = ({ target }) => {
    // console.log("target ===>", target);
    // let newArray = spec
    setActive(!active)
    console.log('active===>', active);
    // if (spec.includes(target.name)) {
    //   newArray = newArray.filter((el) => el !== target.name)
    //   setSpec(newArray)
    // } else {
    //   setSpec((current) => [...current, target.name])
    // }
  };

  return (
    <div onClick={clickhandler} style={{ backgroundColor: active ? "#1EF88F" : "#E7E7E7" }} className={`${classes.inputBox}`}>
      <h1 style={{ color: 'black' }}>{name}</h1>
      {/* <input onClick={clickhandler} type="checkbox" name={name} num={num} className={`${classes.checkboxRound}`} /> */}
    </div>

  )
}

// <div onClick={clickhandler} className={`${classes.divRound}`}>

// </div>
