import axios from 'axios';

export default axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
})

// export const API = {
//   clickPick: {
//     auth: `${process.env.PUBLIC_DOMAIN}/login_authorize/`,
//     form: `${process.env.PUBLIC_DOMAIN}/form/`,
//   },
// };
