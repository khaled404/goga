import * as types from "../constants/action-types";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  current: 0,
  modal: "login",
  showModal: false,
  newsletterModal: true,
};

function modalReducer(state = initialState, action) {
  switch (action.type) {
    case types.SHOW_MODAL:
      return {
        ...state,
        showModal: true,
        modal: action.modal,
      };

    case types.CLOSE_MODAL:
      return {
        ...state,
        showModal: false,
        modal: action.modal,
      };

    case types.REMOVE_NEWSLETTER:
      return {
        ...state,
        newsletterModal: false,
      };

    case types.REFRESH_STORE:
      return { state: initialState, current: action.current };

    default:
      return state;
  }
}

const persistConfig = {
  keyPrefix: "molla-",
  key: "modal",
  storage,
};

export default persistReducer(persistConfig, modalReducer);
