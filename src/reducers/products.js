import {
  RECEIVE_PRODUCTS,
  SHOW_QUICKVIEW,
  CLOSE_QUICKVIEW,
  PRODUCT_SET_QTY,
} from "../constants/action-types";
import { findIndex } from "../utils";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  products: [],
  recommendationpProducts: [],
  productDetail: [],
  quickView: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        [action.payload.key]: action.payload.data,
      };
    case PRODUCT_SET_QTY:
      console.log(
        state[action.payload.key].map((item) => {
          if (item.id === action.payload.id && item?.qty < item.stock_qty) {
            return { ...item, qty: item.qty ? item.qty + 1 : 1 };
          }
          return item;
        })
      );
      return {
        ...state,
        [action.payload.key]: state[action.payload.key].filter((item) => {
          if (item.id === action.payload.id) {
            console.log(item);
            return { ...item, qty: item.qty ? item.qty + 1 : 1 };
          }
          return item;
        }),
      };

    case SHOW_QUICKVIEW:
      let index = findIndex(
        state.products,
        (product) => product.id === action.productId
      );
      if (-1 !== index) {
        const item = state.products[index];
        return {
          ...state,
          quickView: true,
          productDetail: item,
        };
      }
      break;

    case CLOSE_QUICKVIEW:
      return { ...state, quickView: false };

    default:
      return state;
  }
};
const persistConfig = {
  keyPrefix: "molla-",
  key: "products",
  storage,
};

export default persistReducer(persistConfig, productReducer);
