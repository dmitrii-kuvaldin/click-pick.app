import axios from 'axios'
import {
  GET_WORKERS, SET_COMP, SET_WORKER, SET_WORKERS,
} from '../types'
// ! переписываем на thunk middleware

// возвращаем функцию c доступным dispath, воозвращает async функцию
// называть имя домена в react нужно только так
// а вообще все переменные нужно начинать с REACT_APP_ - иначе игнор

export const setWorkers = (workers) => ({
  type: SET_WORKERS,
  payload: workers,
})

export const setWorker = (worker) => ({
  type: SET_WORKER,
  payload: worker,
})
export const setComp = (comp) => ({
  type: SET_COMP,
  payload: comp,
})

// * внизу реализация на Thunk

export const getWorker = task => async (dispatch) => {
  try {
    console.log('ТВОЮ МАААААААТЬ');
    console.log('id из actionтот самый', task);
    const result = await axios.get(`${process.env.REACT_APP_API_URL}/users/me/`)
    console.log(result.data, 'а вот что нам пришло в ответ');
    const worker = result.data
    const pics = await axios.get(`${process.env.REACT_APP_API_URL}/files/?puser_id=${worker.id}&code=portfolio`)
    worker.imgs = pics.data.urls
    const avatar = await axios.get(`${process.env.REACT_APP_API_URL}/files/?puser_id=${worker.id}&code=avatar`)
    worker.avatar = avatar.data.urls
    dispatch(setWorker(result.data))
  } catch (error) {
    console.log(error);
  }
}

export const getCompany = task => async (dispatch) => {
  try {
    console.log('id из actionтот самый', task);
    const result = await axios.get(`${process.env.REACT_APP_API_URL}/companies/my/`)
    console.log('пришло в ответ по компаниям', result.data);
    const comp = result.data
    dispatch(setComp(result.data))
  } catch (error) {
    console.log(error);
  }
}

export const getWorkers = () => async (dispatch) => {
  try {
    const result = await axios.get(`${process.env.REACT_APP_API_URL}/companies/`)
    dispatch(setWorkers(result.data))
  } catch (error) {
    console.log(error);
  }
}

export const getWorkersQuick = () => async (dispatch) => {
  try {
    console.log('ТВОЮ МАААААААТЬ');
    const result = await axios.get(`${process.env.REACT_APP_API_URL}/users/`)
    console.log('result.data from getWorksersQUick ====>', result.data);
    const workersArr = result.data
    console.log('workersArr', workersArr);
    for (let i = 0; i < workersArr.length; i++) {
      const pics = await axios.get(`${process.env.REACT_APP_API_URL}/files/?puser_id=${workersArr[i].id}&code=portfolio`)
      workersArr[i].imgs = pics.data.urls
      console.log('pics', pics);
      const avatar = await axios.get(`${process.env.REACT_APP_API_URL}/files/?puser_id=${workersArr[i].id}&code=avatar`)
      workersArr[i].avatar = avatar.data.urls
    }

    console.log('workersArr ===========>', workersArr);

    dispatch(setWorkers(workersArr))
  } catch (error) {
    console.log(error);
  }
}

// thunk возвращает асинхронную функцию в которой в качестве аргумента доступен диспатч
// полезную нагрузку диспатчим в редьюсер
//* чтот такое функция генератор?
//! реалтзация на Saga

// export const getWorkers = () => ({
//   type: GET_WORKERS,
// })

// ! в Saga достаточно отдного типа, запрос на сервер не здесь, диспатчим также на в action
