import * as types from "../constants/action-types";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { LocalStorageKeys } from "../constants/config";

const initialState = {
  current: 0,
  isLogin: false,
  userData: {},
};

function modalReducer(state = initialState, action) {
  switch (action.type) {
    case types.SAVE_USER_DATA:
      localStorage.setItem(
        LocalStorageKeys.USER_DATA,
        JSON.stringify(action.payload)
      );
      return {
        ...state,
        isLogin: true,
        userData: action.payload,
      };
    case types.LOGOUT:
      localStorage.clear();
      return {
        ...state,
        isLogin: false,
        userData: {},
      };

    case types.REFRESH_STORE:
      return { state: initialState, current: action.current };

    default:
      return state;
  }
}

const persistConfig = {
  keyPrefix: "molla-",
  key: ["isLogin", "userData"],
  storage,
};

export default persistReducer(persistConfig, modalReducer);
