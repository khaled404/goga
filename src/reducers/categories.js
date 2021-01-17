import * as types from "../constants/action-types";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  current: 0,
  categories: [],
};

function modalReducer(state = initialState, action) {
  switch (action.type) {
    case types.SAVE_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case types.REFRESH_STORE:
      return { state: initialState, current: action.current };

    default:
      return state;
  }
}

const persistConfig = {
  keyPrefix: "molla-",
  key: ["categories"],
  storage,
};

export default persistReducer(persistConfig, modalReducer);
