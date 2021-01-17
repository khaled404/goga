import { axiosAPI } from "../api";
import { SAVE_CATEGORIES } from "../constants/action-types";
export const GetCategoriesHandler = () => {
  return async (dispatch) => {
    try {
      const { data } = await axiosAPI.get("categories");
      dispatch({ type: SAVE_CATEGORIES, payload: data.data });
    } catch (error) {
      console.log(error.response);
    }
  };
};
