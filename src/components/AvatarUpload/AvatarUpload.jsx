import axios from 'axios'

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getWorkersQuick } from '../../store/actions/workers.action';
import classes from './AvatarUpload.module.css'

export default function AvatarUpload() {
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
    setImg(event.target.files[0]);
    console.log('event.target.files[0]', event.target.files[0]);
    console.log('img ===>', img);
    setResponse(null)
    setUpload('Картинка выбрана')
  };

  const imageMyHandler = async (evt) => {
    console.log(img, '=== img');
    evt.preventDefault();
    const formData = new FormData();
    formData.append('files', img);
    const result = await axios.post(`${process.env.REACT_APP_API_URL}/files/?puser_id=${id}&code=avatar`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    if (result.data) {
      setResponse('Картинка загружена')
    }
    console.log('files ====>>', result);
    dispatch(getWorkersQuick())

    // window.location.reload(true)
  }

  return (
    <div className={classes.containerMain}>

      <p style={{ color: 'white', marginTop: '60px', marginBottom: '15px' }}>Загрузка аватарки для профиля</p>
      <label
        style={{
          color: 'white', backgroundColor: 'darkcyan', width: '120px', fontSize: '12px', padding: '10px', textAlign: 'center', border: '1px solid white',
        }}
        htmlFor="formFileOne"
      >Выбери один файл

      </label>
      <input style={{ visibility: 'hidden' }} className='hidden' type="file" id="formFileOne" onChange={changeHandler} />
      <div>
        <button
          type='button'
          style={{
            padding: '10px', color: 'white', backgroundColor: 'red', border: '1px solid white',
          }}
          onClick={imageMyHandler}
        >Загрузить аватар
        </button>
      </div>
      {upload && <h1 style={{ color: 'green' }}>{upload}</h1>}
      {response && <h1 style={{ color: 'red' }}>{response}</h1>}

    </div>

  )
}
