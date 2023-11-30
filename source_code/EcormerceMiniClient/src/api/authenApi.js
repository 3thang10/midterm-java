import request from '~/utils/request';
import { setAccessToken, setUser } from '~/utils/localStorage';
import {
  registerSuccess,
  registerFailed,
  loginSuccess,
  loginFailed,
  logoutSuccess,
  logoutFailed,
} from '~/reducers/actions/authenAction';

export const login = async (user, dispatch, navigate) => {
  try {
    const res = await request.post(`/authenticate`, user);
    if (res.error) {
      alert('Password or Username is incorrect');
      return;
    }
    dispatch(loginSuccess(res.data));
    localStorage.clear();
    setUser(res.data);
    setAccessToken(res.data.accessToken || '');
    navigate('/');
  } catch (err) {
    alert(err.response.data.message);
    dispatch(loginFailed());
  }
};

export const register = async (user, dispatch, navigate) => {
  try {
    const res = await request.post(`/register`, user);
    dispatch(registerSuccess(''));
    if (res.error === 'success') {
      setUser(res.data);
      navigate('/login');
    }
    return res;
  } catch (err) {
    dispatch(registerFailed(''));
  }
};

export const logout = async (accessToken, dispatch, navigate) => {
  try {
    const result = await request.post(`/logout`, {}, { headers: { token: `Bearer ${accessToken}` } });
    localStorage.clear();
    //console.log('local', localStorage);
    dispatch(logoutSuccess());
    navigate('/login');
    return result;
  } catch (err) {
    dispatch(logoutFailed(err));
    console.log(err);
  }
//    try {
//      const result = await request.post(`/logout`, {}, { headers: { token: `Bearer ${accessToken}` } });
//      if (result.status === 'success') {
//        localStorage.clear();
//        dispatch(logoutSuccess());
//        navigate('/login');
//      } else {
//        dispatch(logoutFailed(result.message || 'Logout failed'));
//      }
//      return result;
//    } catch (err) {
//      dispatch(logoutFailed(err.message || 'An error occurred during logout'));
//      console.log(err);
//    }
};
