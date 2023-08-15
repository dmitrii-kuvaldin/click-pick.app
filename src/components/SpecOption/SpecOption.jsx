import { useContext, useEffect, useState } from 'react';
import classes from './SpecOption.module.css'

import FormContext from '../FormContext/form.context';
import useLocalStorageArr from '../../hooks/useLSarr';

export default function SpecOption({ name, num, code }) {
  const {
    spec,
    setSpec,
  } = useContext(FormContext);

  const [active, setActive] = useState(false);
  const [spek, setSpek] = useLocalStorageArr("spek", "");
  const specArr = JSON.parse(localStorage.getItem('specs'))
  // console.log('spek', spek);

  const clickhandler = ({ target }) => {
    console.log("target ===>", target);
    let newArray = spec
    // console.log('spek в ls ====>>>>>', spek);
    let newArraySpek = JSON.parse(localStorage.getItem('specs'))
    setActive(!active)
    if (spec.includes(target.name)) {
      newArray = newArray.filter((el) => el !== target.name)
      newArraySpek = newArraySpek.filter((el) => el !== target.name)

      setSpec(newArray)
      localStorage.setItem('specs', JSON.stringify(newArraySpek))
      localStorage.setItem('specsEdit', JSON.stringify(newArraySpek))
    } else {
      setSpec((current) => [...current, target.name])
      const savedValue = localStorage.getItem('specs');
      const myArr = JSON.parse(savedValue)
      console.log('myArr ===>', myArr);
      myArr.push(target.name)
      localStorage.setItem('specs', JSON.stringify(myArr))
      localStorage.setItem('specsEdit', JSON.stringify(myArr))
    }
  };

  useEffect(() => {
    localStorage.setItem('specs', JSON.stringify(spec))
  }, []);

  return (
    <label style={{ backgroundColor: spec.includes(name) ? "#1EF88F" : "#E7E7E7" }} className={`${classes.inputBox}`}>
      <img src={code} alt="" />
      <h3 className={`${classes.headingCard}`}>{name}</h3>
      <input onClick={clickhandler} type="checkbox" name={name} num={num} className={`${classes.checkboxRound}`} />
    </label>

  )
}

// <div onClick={clickhandler} className={`${classes.divRound}`}>

// </div>
