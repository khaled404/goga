import { axiosAPI } from "../api";
import { RECEIVE_BANNERS } from "../constants/action-types";

/**
 *
 * @param {number} limit
 * @param {string} key
 * @param {"phone" | "web-home-slider"| "web-1" | "web-2" | "web-3" | "web-4"} types
 * @returns {void}
 */

export const GetBannersHandler = (limit = 3, key, types = "phone") => {
  return async (dispatch) => {
    try {
      const { data } = await axiosAPI.get(
        `adbanners?types=${types}&limit=${limit}`
      );
      dispatch({ type: RECEIVE_BANNERS, payload: { data: data.data, key } });
    } catch (error) {
      console.log(error.response);
    }
  };
};
