import { axiosAPI } from "../api";
import { LocalStorageKeys } from "../constants/config";
import { LOGOUT, SAVE_USER_DATA } from "../constants/action-types";
import { closeModal } from ".";
export const LoginHandler = (mobile_number, password) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosAPI.post("auth/login", {
        mobile_number,
        password,
      });
      localStorage.setItem(LocalStorageKeys.TOKEN, data.token);
      dispatch({ type: SAVE_USER_DATA, payload: data.user });
      dispatch(closeModal("login"));
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  };
};

export const RegisterHandler = (mobile_number, email, name, password) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosAPI.post("auth/login", {
        mobile_number,
        email,
        name,
        password,
        password_confirmation: password,
        user_role: "Normal",
      });
      localStorage.setItem(LocalStorageKeys.TOKEN, data.token);
      dispatch({ type: SAVE_USER_DATA, payload: data.user });
      dispatch(closeModal("login"));
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  };
};

export const LogoutHandler = () => ({
  type: LOGOUT,
});
