// import { SET_LOGOUT_USER } from "../types/auth.type";
import { SET_LOGOUT_USER } from '../types/auth.type';
import { SET_USER_DATA } from "../types/session.type";

// Favorit_sitters
// ! удалил export defult
export function authReducer(state = {}, action) {
  const { type, payload } = action
  console.log('payload =====>', payload);
  console.log('action ====>', action);
  switch (type) {
    case SET_USER_DATA: {
      console.log('привет из auth.worker', payload);
      // return [...payload]
      return { ...action.payload }
    }
    case 'ADD_FAVOURITE': {
      return { ...state, Favorit_sitters: [...state.Favorit_sitters, { sitter_id: payload.sitter_id }] }
      // здесь происходит добавление в стейт
    }
    case 'DELETE_FAVOURITE': {
      return { ...state, Favorit_sitters: [...state.Favorit_sitters.filter((el) => el.sitter_id !== payload.sitter_id)] }
    }
    case SET_LOGOUT_USER: {
      return {}
    }
    default: {
      return state;
    }
  }
}
