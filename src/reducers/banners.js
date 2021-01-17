import * as types from "../constants/action-types";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  current: 0,
  banners: [],
  homeSlider: [],
  singelBanner: [],
  midBanner: [],
};

function modalReducer(state = initialState, action) {
  switch (action.type) {
    case types.RECEIVE_BANNERS:
      return {
        ...state,
        [action.payload.key]: action.payload.data,
      };
    case types.REFRESH_STORE:
      return { state: initialState, current: action.current };

    default:
      return state;
  }
}

const persistConfig = {
  keyPrefix: "molla-",
  key: ["banners"],
  storage,
};

export default persistReducer(persistConfig, modalReducer);
