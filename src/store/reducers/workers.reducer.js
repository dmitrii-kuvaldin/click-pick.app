// * отдельный reducer на список воркеров
// задаем стейт и action в параметрах
// редьюсер это большой swutch / case

import { SET_WORKERS } from '../types'

// он принимает на вход текущее состояние стейта и action, который мы деспатчим в reducer
export function workersReducer(state = [], action) {
  const { type, payload } = action // из action забираем тип и payload
  switch (type) {
    case SET_WORKERS: {
      console.log('привет из reducer.worker', payload);
      return [...payload] // мы копируем массив из payloda и state и соединяем их
    }
    default: {
      return state // поведение по дефолту
    }
  }
}
