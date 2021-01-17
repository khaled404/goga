import { axiosAPI } from "../api";
import {
  ADD_TO_CART,
  RECEIVE_PRODUCTS,
  PRODUCT_SET_QTY,
  REMOVE_FROM_CART,
} from "../constants/action-types";
import { LocalStorageKeys } from "../constants/config";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const GetProductsHandler = (search_query, paginate, page, key) => {
  return async (dispatch) => {
    try {
      const { data } = await axiosAPI.post(`stores/products/search`, {
        search_query,
        paginate,
        page,
      });
      dispatch({
        type: RECEIVE_PRODUCTS,
        payload: { data: data.data.data, key: key },
      });
    } catch (error) {
      console.log(error.response);
    }
  };
};

export const AddToCartHandler = (item) => {
  return async (dispatch) => {
    const userData = await JSON.parse(
      localStorage.getItem(LocalStorageKeys.USER_DATA)
    );
    try {
      dispatch({
        type: ADD_TO_CART,
        payload: item,
      });
      toast.success("Item Added to Cart");
      if (userData) {
        await axiosAPI.post("cart", {
          user_id: userData.id,
          product_id: item.id,
          store_id: item.store_id,
          qty: 1,
        });
      }
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  };
};
export const RemoveFromCartHandler = (id) => {
  return async (dispatch) => {
    const userData = await JSON.parse(
      localStorage.getItem(LocalStorageKeys.USER_DATA)
    );
    try {
      if (userData) {
        await axiosAPI.post("cart/remove", {
          user_id: userData.id,
          product_id: id,
          delete_all: true,
        });
      }
      dispatch({
        type: REMOVE_FROM_CART,
        payload: id,
      });
      toast.error("Item removed from Cart");
    } catch (error) {
      console.log(error);
      console.log(error.response);
    }
  };
};
