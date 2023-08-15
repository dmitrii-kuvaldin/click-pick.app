import { SET_COMP, SET_WORKER } from '../types';

export function workerReducer(state = [], action) {
  const { type, payload } = action // из action забираем тип и payload
  switch (type) {
    case SET_WORKER: {
      console.log('привет из reducer.worker где только один юзер', payload);
      return payload // мы копируем массив из payloda и state и соединяем их
    }
    case SET_COMP: {
      console.log('привет из reducer.worker где геенирим компании', payload);
      return payload // мы копируем массив из payloda и state и соединяем их
    }
    default: {
      return state // поведение по дефолту
    }
  }
}
