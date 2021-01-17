import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCartCount, getCartTotal } from "../../../services";
import { safeContent } from "../../../utils";
import { RemoveFromCartHandler } from "../../../actions/products";

function CartMenu(props) {
  const { cartlist, RemoveFromCartHandler } = props;
  let total = getCartTotal(cartlist);

  return (
    <div className="dropdown cart-dropdown">
      <Link
        to={`${process.env.PUBLIC_URL}/shop/cart`}
        className="dropdown-toggle"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        data-display="static"
      >
        <div className="icon">
          <i className="icon-shopping-cart"></i>
          <span className="cart-count">{getCartCount(cartlist)}</span>
        </div>

        <p>Cart</p>
      </Link>

      <div
        className={`dropdown-menu dropdown-menu-right ${
          cartlist.length === 0 ? "text-center" : ""
        }`}
      >
        {0 === cartlist.length ? (
          <p>No products in the cart.</p>
        ) : (
          <>
            <div className="dropdown-cart-products">
              {cartlist.map((item, index) => (
                <div className="product" key={index}>
                  <div className="product-cart-details">
                    <h4 className="product-title">
                      <Link to={`${process.env.PUBLIC_URL}/product/default/7`}>
                        {item.details.title_en}
                      </Link>
                    </h4>

                    <span className="cart-product-info">
                      <span className="cart-product-qty">{item.qty}</span>x{" "}
                      {item.discount
                        ? item.salePrice.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })
                        : item.price.toLocaleString(undefined, {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                      {" " + item.currency.symbol}
                    </span>
                  </div>

                  <figure className="product-image-container">
                    <Link
                      to={`${process.env.PUBLIC_URL}/product/default/7`}
                      className="product-image"
                    >
                      <img
                        src={item.image.url}
                        data-oi={item.image.url}
                        alt="product"
                      />
                    </Link>
                  </figure>
                  <button
                    className="btn-remove"
                    title="Remove Product"
                    onClick={() => RemoveFromCartHandler(item.id)}
                  >
                    <i className="icon-close"></i>
                  </button>
                </div>
              ))}
            </div>
            <div className="dropdown-cart-total">
              <span>Total</span>

              <span className="cart-total-price">
                {total.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}{" "}
                {cartlist[0]?.currency.symbol && cartlist[0].currency.symbol}
              </span>
            </div>

            <div className="dropdown-cart-action">
              <Link
                to={`${process.env.PUBLIC_URL}/shop/cart`}
                className="btn btn-primary"
              >
                View Cart
              </Link>
              <Link
                to={`${process.env.PUBLIC_URL}/shop/checkout`}
                className="btn btn-outline-primary-2"
              >
                <span>Checkout</span>
                <i className="icon-long-arrow-right"></i>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    cartlist: state.cartlist.cart ? state.cartlist.cart : [],
  };
}

export default connect(mapStateToProps, { RemoveFromCartHandler })(CartMenu);
