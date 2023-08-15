import axios from 'axios'

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getWorkersQuick } from '../../store/actions/workers.action';
import classes from './ImageUpload.module.css'

export default function ImageUpload() {
  const options = ["Web design", "Singing", "Cooking", 'Editing'];
  const [selected, setSelected] = useState(options[0]);
  const [price, setPrice] = useState('');
  const [img, setImg] = useState(null);
  const [response, setResponse] = useState(null);
  const [upload, setUpload] = useState(null);

  const { auth: { id } } = useSelector((state) => state);

  const [userInfo, setuserInfo] = useState({
    file: [],
    filepreview: null,
  });

  const [invalidImage, setinvalidImage] = useState(null);
  const reader = new FileReader();
  const dispatch = useDispatch()

  const changeHandler = (event) => {
    const arr = Array.from(event.target.files)
    setImg(arr);
    console.log('arr', arr);
    setResponse(null)
    setUpload('Картинка выбрана')
  };

  const imageMyHandler = async (evt) => {
    evt.preventDefault();
    console.log('img ===>>', img);
    for (let i = 0; i < img.length; i++) {
      const formData = new FormData();
      formData.append('files', img[i]);
      const result = await axios.post(`${process.env.REACT_APP_API_URL}/files/?puser_id=${id}&code=portfolio`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      console.log('загружена', i);
      if (result.data) {
        setResponse('Картинка загружена')
      }
    }
    // console.log('files ====>>', result);
    setImg(null)
    dispatch(getWorkersQuick())
    // window.location.reload(true)
  }

  return (
    <div className={classes.containerMain}>
      <p style={{ color: 'white', marginTop: '60px', marginBottom: '15px' }}>Загрузка картинок в портфолио юзера</p>

      <label
        style={{
          color: 'white', backgroundColor: 'darkcyan', width: '120px', fontSize: '12px', padding: '10px', textAlign: 'center', border: '1px solid white',
        }}
        htmlFor="formFileMultiple"
      >Выбери файлы портфолио
      </label>
      <input multiple accept="image/*" style={{ visibility: 'hidden' }} className='hidden' type="file" id="formFileMultiple" onChange={changeHandler} />
      <div>
        <button
          type='button'
          style={{
            padding: '10px', color: 'white', backgroundColor: 'red', border: '1px solid white',
          }}
          onClick={imageMyHandler}
        >Загрузить портфолио
        </button>
      </div>
      {upload && <h1 style={{ color: 'green' }}>{upload}</h1>}
      {response && <h1 style={{ color: 'red' }}>{response}</h1>}

    </div>

  )
}
