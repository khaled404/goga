import { combineReducers } from "redux";

// Import custom components
import productReducer from "./products";
import cartReducer from "./cart";
import wishlistReducer from "./wishlist";
import compareReducer from "./compare";
import filterReducer from "./filter";
import modalReducer from "./modal";
import authReducer from "./auth";
import categoriesReducer from "./categories";
import bannersReducer from "./banners";

const rootReducer = combineReducers({
  data: productReducer,
  cartlist: cartReducer,
  wishlist: wishlistReducer,
  compare: compareReducer,
  filters: filterReducer,
  modal: modalReducer,
  auth: authReducer,
  categories: categoriesReducer,
  banners: bannersReducer,
});

export default rootReducer;
