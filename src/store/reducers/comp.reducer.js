// * отдельный reducer на список воркеров
// задаем стейт и action в параметрах
// редьюсер это большой swutch / case

import { SET_COMP, SET_WORKERS } from '../types'

// он принимает на вход текущее состояние стейта и action, который мы деспатчим в reducer
export function compReducer(state = [], action) {
  const { type, payload } = action // из action забираем тип и payload
  switch (type) {
    case SET_COMP: {
      console.log('привет из comp.worker', payload);
      return [...payload] // мы копируем массив из payloda и state и соединяем их
    }
    default: {
      return state // поведение по дефолту
    }
  }
}
