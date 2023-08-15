import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects'
import { setWorkers } from '../actions/workers.action';

import { GET_WORKERS } from '../types';

// saga работает по принципу watcher / worker

// * функция получения данных с сервера
async function getDataFromServer(url) {
  const { data } = await axios.get(url)
  if (data) {
    return data
  }
  throw new Error('Nooooooo')
}

// * worker
// *объявляем наверху, а вызываем в воркере

function* workersWorker() {
  try {
    const workers = yield call(getDataFromServer, `${process.env.REACT_APP_API_URL}/companies/`)
    const data = workers
    console.log('data ======>', data);
    yield put(setWorkers(data))
    // это функция из action НО НЕ ТА ЖЕ САМАЯ что сам action 0_о
    // это мы диспатчим функцию из action
  } catch (error) {
    console.log(error);
  }
}

// * watcher
// его задача - подписаться на один из типов, и когда он будет задиспатчен - уже что-то делать
// мы говорим этой функции генератору: отслеживаем этот тип + к нему привязан этот воркер

function* workersSaga() {
  yield takeEvery(GET_WORKERS, workersWorker) // функция вызовится только, когда будет задиспатчен этот тип, передает функцию воркер в виде второго аргумента
}

export default workersSaga

// ! takeEvery - самый простой эффект, он регистрирует каждый тип, который нужно вотчить
// ! call вызывает функцию переданную первым аргументом
// ! put - в него мы помещаем action (это аналог в саге Dispath)
