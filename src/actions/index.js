import * as api from "../api";
import * as types from "../constants/action-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

/********** Product Action ********/
// recieve products
export const receiveProducts = (products) => ({
  type: "hi",
  products,
});

// refresh local storage

export const refreshUnSafe = (current) => ({
  type: types.REFRESH_STORE,
  current,
});

export const refreshStore = (current) => (dispatch) => {
  dispatch(refreshUnSafe(current));
};

// get all products
export const getAllProducts = () => (dispatch) => {
  api.getProducts().then((products) => {
    dispatch(receiveProducts(products));
    return products;
  });
};

/*********** Modal related Action **********/
// display quickview
export const showQuickViewModal = (productId) => ({
  type: types.SHOW_QUICKVIEW,
  productId,
});

// close quickview modal
export const closeQuickViewModal = () => ({
  type: types.CLOSE_QUICKVIEW,
});

// Show Video & Login modal
export const showModal = (modal) => ({
  type: types.SHOW_MODAL,
  modal: modal,
});

// close Video & Login modal
export const closeModal = (modal) => ({
  type: types.CLOSE_MODAL,
  modal: modal,
});

// don't show Newsletter modal
export const removeNewsletterMdoal = (modal) => ({
  type: types.REMOVE_NEWSLETTER,
});

/************ Cart Action **************/
// add item to cart
export const addToCart = (product, qty) => (dispatch) => {
  toast.success("Item Added to Cart");
  dispatch(addToCartUnsafe(product, qty));
};

// add item to cart : typical action
export const addToCartUnsafe = (product, qty) => ({
  type: types.ADD_TO_CART,
  product,
  qty,
});

// remove item from wishlist
export const removeFromWishlist = (productId) => (dispatch) => {
  toast.error("Item removed from Wishlist");
  dispatch({
    type: types.REMOVE_FROM_WISHLIST,
    productId,
  });
};

// add item to cart from wishlist
export const addToCartFromWishlist = (product, qty) => (dispatch) => {
  toast.success("Item added to Cart");

  dispatch({
    type: types.REMOVE_FROM_WISHLIST,
    productId: product.id,
  });

  dispatch(addToCartUnsafe(product, qty));
};

// remove item from cart
export const removeFromCart = (productId) => (dispatch) => {
  toast.error("Item removed from Cart");

  dispatch({
    type: types.REMOVE_FROM_CART,
    productId,
  });
};

// change item's qty
export const changeQty = (productId, qty) => ({
  type: types.CHANGE_QTY,
  productId,
  qty,
});

// change shipping method
export const changeShipping = (shipping) => ({
  type: types.CHANGE_SHIPPING,
  shipping,
});

/*********** Wishlist Action *********/

// add item to wishlist
export const toggleWishlist = (product) => (dispatch) => {
  dispatch(toggleWishlistUnsafe(product));
};

// add item to wishlist : typical action
export const toggleWishlistUnsafe = (product) => ({
  type: types.TOGGLE_WISHLIST,
  product,
});

/************* Compare Action ***********/
// add to comparelist
export const addToCompare = (product) => (dispatch) => {
  toast.success("Item added to Compare");
  dispatch(addToCompareUnsafe(product));
};

export const addToCompareUnsafe = (product) => ({
  type: types.ADD_TO_COMPARE,
  product,
});

// remove all items from cartlist
export const removeFromCompare = (productId) => (dispatch) => {
  toast.success("Compare item removed");
  dispatch(removeFromCompareUnsafe(productId));
};

export const removeFromCompareUnsafe = (productId) => ({
  type: types.REMOVE_FROM_COMPARE,
  productId,
});

// reset cartlist with intialstate
export const resetCompare = () => ({
  type: types.RESET_COMPARE,
});

/************** Filter Action ***********/

// set order to sort
export const filterSort = (sortBy) => (dispatch) => {
  dispatch({
    type: types.SORT_BY,
    sortBy,
  });
};

// set price range to get suitable products
export const filterPrice = (range) => (dispatch) => {
  dispatch({
    type: types.PRICE_FILTER,
    range,
  });
};

// add/remove category to get suitable products
export const toggleCategoryFilter = (category) => (dispatch) => {
  dispatch({
    type: types.CATEGORY_FILTER,
    category,
  });
};

// add/remove product size to get suitable products
export const toggleSizeFilter = (size) => (dispatch) => {
  dispatch({
    type: types.SIZE_FILTER,
    size,
  });
};

// add/remove color to get suitable products
export const toggleColorFilter = (color) => (dispatch) => {
  dispatch({
    type: types.COLOR_FILTER,
    color,
  });
};

// add/remove brand to get suitable products
export const toggleBrandFilter = (brand) => (dispatch) => {
  dispatch({
    type: types.BRAND_FILTER,
    brand,
  });
};

// add/remove rating to get suitable products
export const toggleRatingFilter = (rating) => (dispatch) => {
  dispatch({
    type: types.RATING_FILTER,
    rating,
  });
};

// reset filter with intialstate
export const resetFilter = () => (dispatch) => {
  dispatch({
    type: types.RESET_FILTER,
  });
};

/************** Newsletter Modal ************/

// hide newsletter modal in homepage
export const hideNewsletterModal = () => ({
  type: types.HIDE_NEWSLETTER_MODAL,
});
