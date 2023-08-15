import axios from 'axios';
import { SET_LOGOUT_USER } from "../types/auth.type";
import { SET_USER_DATA } from "../types/session.type";
import { getCompany } from './workers.action';
// import { checkSuccess } from "./people.action";

export const getUser = () => async dispatch => {
  try {
    const result = await axios.get(`${process.env.REACT_APP_API_URL}/users/me/`, { withCredentials: true });
    console.log('возвращенный из куки юзер ==>', result.data);
    dispatch({
      type: SET_USER_DATA,
      payload: result.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const setLoginData = task => async dispatch => {
  try {
    console.log('task', task);
    const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    })
    const result = await response.json();
    console.log("result", result);

    console.log('login payload', result);
    dispatch({
      type: SET_USER_DATA,
      payload: result,
    });
  } catch (error) {
    console.log(error);
  }
};
export const setLoginDataQuick = task => async dispatch => {
  console.log('данные для логина ===>', task);
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    })
    // if (response.status === 403) throw new Error('403 is unacceptable for me!');
    const result = await response.json();
    if (result.details === 'Creds not valid') {
      dispatch({
        type: SET_USER_DATA,
        payload: result,
      });
    }
    console.log("result с быстрого логина ==>", result);
    console.log('login payload', result);
    dispatch({
      type: SET_USER_DATA,
      payload: result,
    });
  } catch (error) {
    console.log('%cошибочка ===>', 'color:green', error);
  }

  // navigate("/")
};

export const setLoginDataQuickGoogle = task => async dispatch => {
  console.log('данные для логина ===>', task);
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    })
    const result = await response.json();
    console.log("result с быстрого логина ==>", result);

    console.log('login payload', result);
    // navigate("/")
    dispatch({
      type: SET_USER_DATA,
      payload: result,
    });
  } catch (error) {
    console.log('%сошибочка ===>', 'color:green', error);
  }
};

export const setRegistr = (task) => async (dispatch) => {
  try {
    console.log('task ====>', task);
    const result = await axios.post("https://pysanyi.space/clickpick/api/companies/reg/", task)
    console.log('result.data ==>', result.data);
    if (Object.keys(result.data).includes('errors')) {
      dispatch({
        type: SET_USER_DATA,
        payload: result.data.errors,
      });
    } else {
      dispatch({
        type: SET_USER_DATA,
        payload: task,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const setEdit = (task) => async (dispatch) => {
  try {
    console.log('task ====>', task);
    const result = await axios.post(`${process.env.REACT_APP_API_URL}/promos/data`, task)
    console.log('ответ ==>', result.data);
  } catch (error) {
    console.log(error);
  }
};

export const setCompany = ({ task, imgarr, id }) => async (dispatch) => {
  try {
    console.log('task ====>', task);
    console.log('img из auth ====>', imgarr);
    const company = await axios.post(`${process.env.REACT_APP_API_URL}/companies/`, task)
    console.log('ответ из компании ==>', company.data);
    if (imgarr) {
      for (let i = 0; i < imgarr.length; i++) {
        const formData = new FormData();
        formData.append('files', imgarr[i]);
        const result = await axios.post(`${process.env.REACT_APP_API_URL}/files/?code=portfolio&company_id=${company.data.id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        console.log(result.data);
        console.log('загружена', i);
      }
    }
    dispatch(getCompany())
    // window.location.reload(true)
  } catch (error) {
    console.log(error);
  }
};

export const setRegistrQuick = (task) => async (dispatch) => {
  try {
    console.log('task из регистрации ====>', task);
    const result = await axios.post(`${process.env.REACT_APP_API_URL}/users/`, task)
    console.log('result.data из регистрации ==>', result.data);
    if (Object.keys(result.data).includes('error')) {
      dispatch({
        type: SET_USER_DATA,
        payload: result.data,
      });
    } else {
      dispatch({
        type: SET_USER_DATA,
        payload: result.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const setRegistrQuickGoogle = (task) => async (dispatch) => {
  try {
    console.log('task из регистрации ====>', task);
    const result = await axios.post(`${process.env.REACT_APP_API_URL}/users/`, task)
    console.log('result.data из регистрации ==>', result.data);
    dispatch(setLoginDataQuick(task))
    if (Object.keys(result.data).includes('error')) {
      dispatch({
        type: SET_USER_DATA,
        payload: result.data,
      });
    } else {
      dispatch({
        type: SET_USER_DATA,
        payload: result.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

// const resp = await axios.post('https://jsonplaceholder.typicode.com/posts', {
//         email: "mitja@gmail.com",
//         login: "mitja",
//         phone: "79851616450"
//       });

export const setLogoutData = () => async dispatch => {
  try {
    const result = await axios.get(`${process.env.REACT_APP_API_URL}/auth/`, { withCredentials: true });

    dispatch({
      type: SET_LOGOUT_USER,
    });

    console.log("result.произошел logout ==>> result.data", result.data);
  } catch (error) {
    console.log(error);
  }
};
