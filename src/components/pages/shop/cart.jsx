import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

// import Custom Components
import PageHeader from "../../common/page-header";
import Breadcrumb from "../../common/breadcrumb";

import { getCartTotal } from "../../../services";
import { quantityInputs, isIEBrowser } from "../../../utils";
import { changeQty, removeFromCart, changeShipping } from "../../../actions";
import { RemoveFromCartHandler } from "../../../actions/products";

function Cart(props) {
  const { cartlist, total, RemoveFromCartHandler, prevShip } = props;

  const [shipping, setShipping] = useState(prevShip);
  const shippingPrice = { free: 0, standard: 10, express: 20 };

  useEffect(() => {
    quantityInputs();
  });

  useEffect(() => {
    cartlist.map((item, index) => {
      if (
        document.querySelector(
          `#quantity-input-wrapper-${index} .input-group input`
        )
      ) {
        document.querySelector(
          `#quantity-input-wrapper-${index} .input-group input`
        ).value = item.qty;
      }
      return item;
    });
  }, [cartlist]);

  function onChangeShipping(val) {
    setShipping(val);
  }

  function onChangeQty(e, productId) {
    props.changeQty(
      productId,
      e.currentTarget.querySelector('input[type="number"]').value
    );
    console.log(e.currentTarget.querySelector('input[type="number"]').value);
  }

  function goToCheckout() {
    props.changeShipping(shipping);
  }
  return (
    <>
      <Helmet>
        <title>Molla React eCommerce Template | Shopping Cart</title>
      </Helmet>

      <h1 className="d-none">Molla React eCommerce Template - Shopping Cart</h1>

      <div className="main">
        <PageHeader title="Shopping Cart" subTitle="Shop" />
        <Breadcrumb
          title="Shopping Cart"
          parent1={["Shop", "shop/sidebar/list"]}
        />

        <div className="page-content">
          <div className="cart">
            <div className="container">
              <div className="row">
                <div className="col-lg-9">
                  <table className="table table-cart table-mobile">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th></th>
                      </tr>
                    </thead>

                    <tbody>
                      {console.log(
                        "🚀 ~ file: cart.jsx ~ line 88 ~ Cart ~ ",
                        cartlist
                      )}
                      {cartlist.length > 0 ? (
                        cartlist.map((item, index) => (
                          <tr key={"cart-item-" + index}>
                            <td className="product-col">
                              <div className="product">
                                <figure
                                  className="product-media"
                                  style={{ width: 60, height: 60 }}
                                >
                                  <Link
                                    to={`${process.env.PUBLIC_URL}/product/default/${item.id}`}
                                  >
                                    <img src={item.image.url} alt="Product" />
                                  </Link>
                                </figure>

                                <h3 className="product-title">
                                  <Link
                                    to={`${process.env.PUBLIC_URL}/product/default/${item.id}`}
                                  >
                                    {item.details.title_en}
                                  </Link>
                                </h3>
                              </div>
                            </td>

                            <td className="price-col">
                              {0 < item.discount
                                ? item.salePrice.toLocaleString(undefined, {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                  })
                                : item.price.toLocaleString(undefined, {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                  })}

                              {" " + item.currency.symbol}
                            </td>

                            <td
                              className="quantity-col"
                              id={"quantity-input-wrapper-" + index}
                            >
                              <div
                                className="cart-product-quantity"
                                onClick={(e) => onChangeQty(e, item.id)}
                              >
                                <input
                                  type="number"
                                  className="form-control"
                                  defaultValue={item.qty}
                                  min="1"
                                  max={item.stock_qty}
                                  step="1"
                                  data-decimals="0"
                                  required
                                />
                              </div>
                            </td>

                            <td className="total-col">
                              {item.price.toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              }) * item.qty}
                              {" " + item.currency.symbol}
                            </td>

                            <td className="remove-col">
                              <button
                                className="btn-remove"
                                onClick={(e) => RemoveFromCartHandler(item.id)}
                              >
                                <i className="icon-close"></i>
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td>
                            <p className="pl-2 pt-1 pb-1">
                              {" "}
                              No Products in Cart{" "}
                            </p>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>

                  <div className="cart-bottom">
                    <div
                      className="cart-discount"
                      style={{ minHeight: isIEBrowser() ? "40px" : "auto" }}
                    >
                      <form action="#">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            required=""
                            placeholder="coupon code"
                          />
                          <div className="input-group-append">
                            <button
                              className="btn btn-outline-primary-2"
                              type="submit"
                            >
                              <i className="icon-long-arrow-right"></i>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>

                    <button className="btn btn-outline-dark-2">
                      <span>UPDATE CART</span>
                      <i className="icon-refresh"></i>
                    </button>
                  </div>
                </div>
                <aside className="col-lg-3">
                  <div className="summary summary-cart">
                    <h3 className="summary-title">Cart Total</h3>

                    <table className="table table-summary">
                      <tbody>
                        <tr className="summary-subtotal">
                          <td>Subtotal:</td>
                          <td>
                            $
                            {total.toLocaleString(undefined, {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })}
                          </td>
                        </tr>
                        <tr className="summary-shipping">
                          <td>Shipping:</td>
                          <td>&nbsp;</td>
                        </tr>

                        <tr className="summary-shipping-row">
                          <td>
                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                id="free-shipping"
                                name="shipping"
                                className="custom-control-input"
                                onChange={(e) => onChangeShipping("free")}
                                defaultChecked={
                                  "free" === prevShip ? true : false
                                }
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="free-shipping"
                              >
                                Free Shipping
                              </label>
                            </div>
                          </td>
                          <td>$0.00</td>
                        </tr>

                        <tr className="summary-shipping-row">
                          <td>
                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                id="standard-shipping"
                                name="shipping"
                                className="custom-control-input"
                                onChange={(e) => onChangeShipping("standard")}
                                defaultChecked={
                                  "standard" === prevShip ? true : false
                                }
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="standard-shipping"
                              >
                                Standard:
                              </label>
                            </div>
                          </td>
                          <td>$10.00</td>
                        </tr>

                        <tr className="summary-shipping-row">
                          <td>
                            <div className="custom-control custom-radio">
                              <input
                                type="radio"
                                id="express-shipping"
                                name="shipping"
                                className="custom-control-input"
                                onChange={(e) => onChangeShipping("express")}
                                defaultChecked={
                                  "express" === prevShip ? true : false
                                }
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="express-shipping"
                              >
                                Express:
                              </label>
                            </div>
                          </td>
                          <td>$20.00</td>
                        </tr>

                        <tr className="summary-shipping-estimate">
                          <td>
                            Estimate for Your Country
                            <br />{" "}
                            <a
                              href={`${process.env.PUBLIC_URL}/shop/dashboard`}
                            >
                              Change address
                            </a>
                          </td>
                          <td>&nbsp;</td>
                        </tr>

                        <tr className="summary-total">
                          <td>Total:</td>
                          <td>
                            $
                            {(total + shippingPrice[shipping]).toLocaleString(
                              undefined,
                              {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              }
                            )}
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <button
                      className="btn btn-outline-primary-2 btn-order btn-block"
                      onClick={goToCheckout}
                    >
                      PROCEED TO CHECKOUT
                    </button>
                  </div>

                  <Link
                    to={`${process.env.PUBLIC_URL}/shop/sidebar/list`}
                    className="btn btn-outline-dark-2 btn-block mb-3"
                  >
                    <span>CONTINUE SHOPPING</span>
                    <i className="icon-refresh"></i>
                  </Link>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const mapStateToProps = (state) => ({
  cartlist: state.cartlist.cart,
  total: getCartTotal(state.cartlist.cart),
  prevShip: state.cartlist.shipping,
});

export default connect(mapStateToProps, {
  changeQty,
  RemoveFromCartHandler,
  changeShipping,
})(Cart);
