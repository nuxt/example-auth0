import jwtDecode from 'jwt-decode';
import Cookie from 'js-cookie';

export const extractTokenFromHash = () => {
  if (!process.browser) {
    return undefined;
  }
  const matches = window.location.hash.match(/id_token=(.*?)&/);
  return matches ? matches[1] : undefined;
};

export const setToken = (token) => {
  if (!process.browser) {
    return;
  }
  window.localStorage.setItem('token', token);
  window.localStorage.setItem('user', JSON.stringify(jwtDecode(token)));
  Cookie.set('jwt', token);
};

export const unsetToken = () => {
  if (!process.browser) {
    return;
  }
  window.localStorage.removeItem('token');
  window.localStorage.removeItem('user');
  Cookie.remove('jwt');
};

export const getUserFromCookie = (req) => {
  if (!req.headers.cookie) {
    return undefined;
  }
  const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='));
  if (!jwtCookie) {
    return undefined;
  }
  const jwt = jwtCookie.split('=')[1];
  return jwtDecode(jwt);
};

export const getUserFromLocalStorage = () => {
  const json = window.localStorage.user;
  return json ? JSON.parse(json) : undefined;
};
