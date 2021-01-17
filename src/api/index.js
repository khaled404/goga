import axios from "axios";
import { LocalStorageKeys } from "../constants/config";
const API_URL = process.env.PUBLIC_URL;
export const axiosAPI = axios.create({
  baseURL: "https://api.dealeg.com/api/v1/",
  headers: {
    "Cache-control":
      "no-store, multipart/form-data, no-cache, no-transform, must-revalidate, max-age=0",
    Accept: "application/json",
    "Accept-Language": "en",
    Authorization: "Bearer " + localStorage.getItem(LocalStorageKeys.TOKEN),
  },
});

// API to get products from mock server
export const getProducts = function() {
  return axios
    .get(API_URL + "/mock-server/products.json")
    .then(function(response) {
      return response.data;
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    });
};
