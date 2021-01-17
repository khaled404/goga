import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHANGE_QTY,
  CHANGE_SHIPPING,
  REFRESH_STORE,
} from "../constants/action-types";
import { findIndex } from "../utils";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  cart: [],
  shipping: "free",
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.cart.every((item) => item.id !== action.payload.id)) {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      } else {
        return {
          ...state,
          cart: state.cart.map((item) => {
            if (item.id === action.payload.id && item.qty < item.stock_qty) {
              return { ...item, qty: item.qty + 1 };
            }
            return item;
          }),
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case CHANGE_QTY:
      console.log(action);
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.productId) return { ...item, qty: action.qty };
          return item;
        }),
      };
    case REFRESH_STORE:
      return { ...state, cart: [], shipping: "free" };

    case CHANGE_SHIPPING:
      return { ...state, shipping: action.shipping };

    default:
      return state;
  }
}

const persistConfig = {
  keyPrefix: "molla-",
  key: "cartlist",
  storage,
};

export default persistReducer(persistConfig, cartReducer);
