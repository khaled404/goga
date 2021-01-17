import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

// import Custom Components
import PageHeader from "../../common/page-header";
import Breadcrumb from "../../common/breadcrumb";
import Accordion from "../../features/accordion/accordion";
import Card from "../../features/accordion/card";

import { getCartTotal } from "../../../services";

function Checkout(props) {
  const { cartlist, total } = props;
  const shippingPrice = { free: 0, standard: 10, express: 20 };
  const shippingObj = {
    free: "Free shipping",
    standard: "Standard",
    express: "Express",
  };

  useEffect(() => {
    let item = document.querySelector("#checkout-discount-input");

    var opactiyEffect = function(e) {
      e.currentTarget.parentNode
        .querySelector("label")
        .setAttribute("style", "opacity: 0");
    };

    var blurEffect = function(e) {
      let $this = e.currentTarget;
      if ($this.length !== 0) {
        $this.parentNode
          .querySelector("label")
          .setAttribute("style", "opacity: 0");
      } else {
        $this.parentNode
          .querySelector("label")
          .setAttribute("style", "opacity: 1");
      }
    };

    item.addEventListener("focus", opactiyEffect);

    item.addEventListener("blur", blurEffect);

    return () => {
      item.removeEventListener("focus", opactiyEffect);

      item.removeEventListener("blur", blurEffect);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Molla React eCommerce Template | Checkout</title>
      </Helmet>

      <h1 className="d-none">Molla React eCommerce Template - Checkout</h1>

      <div className="main">
        <PageHeader title="Checkout" subTitle="Shop" />
        <Breadcrumb title="Checkout" parent1={["Shop", "shop/sidebar/list"]} />

        <div className="page-content">
          <div className="checkout">
            <div className="container">
              <div className="checkout-discount">
                <form action="#">
                  <input
                    type="text"
                    className="form-control"
                    required
                    id="checkout-discount-input"
                  />
                  <label
                    htmlFor="checkout-discount-input"
                    className="text-truncate"
                  >
                    Have a coupon? <span>Click here to enter your code</span>
                  </label>
                </form>
              </div>

              <form action="#">
                <div className="row">
                  <div className="col-lg-9">
                    <h2 className="checkout-title">Billing Details</h2>
                    <div className="row">
                      <div className="col-sm-6">
                        <label>First Name *</label>
                        <input type="text" className="form-control" required />
                      </div>

                      <div className="col-sm-6">
                        <label>Last Name *</label>
                        <input type="text" className="form-control" required />
                      </div>
                    </div>

                    <label>Company Name (Optional)</label>
                    <input type="text" className="form-control" />

                    <label>Country *</label>
                    <input type="text" className="form-control" required />

                    <label>Street address *</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="House number and Street name"
                      required
                    />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Appartments, suite, unit etc ..."
                      required
                    />

                    <div className="row">
                      <div className="col-sm-6">
                        <label>Town / City *</label>
                        <input type="text" className="form-control" required />
                      </div>

                      <div className="col-sm-6">
                        <label>State / County *</label>
                        <input type="text" className="form-control" required />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-sm-6">
                        <label>Postcode / ZIP *</label>
                        <input type="text" className="form-control" required />
                      </div>

                      <div className="col-sm-6">
                        <label>Phone *</label>
                        <input type="tel" className="form-control" required />
                      </div>
                    </div>

                    <label>Email address *</label>
                    <input type="email" className="form-control" required />

                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="checkout-create-acc"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="checkout-create-acc"
                      >
                        Create an account?
                      </label>
                    </div>

                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="checkout-diff-address"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="checkout-diff-address"
                      >
                        Ship to a different address?
                      </label>
                    </div>

                    <label>Order notes (optional)</label>
                    <textarea
                      className="form-control"
                      cols="30"
                      rows="4"
                      placeholder="Notes about your order, e.g. special notes for delivery"
                    ></textarea>
                  </div>

                  <aside className="col-lg-3">
                    <div className="summary">
                      <h3 className="summary-title">Your Order</h3>

                      <table className="table table-summary">
                        <thead>
                          <tr>
                            <th>Product</th>
                            <th>Total</th>
                          </tr>
                        </thead>

                        <tbody>
                          {cartlist.map((item, index) => (
                            <tr key={index}>
                              <td>
                                <Link to="#">{item.name}</Link>
                              </td>
                              {/* <td>${ item.sum.toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) }</td> */}
                              <td>$20</td>
                            </tr>
                          ))}
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
                          <tr>
                            <td>Shipping:</td>
                            <td>{shippingObj[props.shipping]}</td>
                          </tr>
                          <tr className="summary-total">
                            <td>Total:</td>
                            <td>
                              $
                              {(
                                total + shippingPrice[props.shipping]
                              ).toLocaleString(undefined, {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              })}
                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <Accordion type="checkout">
                        <Card title="Direct bank transfer" expanded={true}>
                          Make your payment directly into our bank account.
                          Please use your Order ID as the payment reference.
                          Your order will not be shipped until the funds have
                          cleared in our account.
                        </Card>

                        <Card title="Check payments">
                          Ipsum dolor sit amet, consectetuer adipiscing elit.
                          Donec odio. Quisque volutpat mattis eros. Nullam
                          malesuada erat ut turpis.
                        </Card>

                        <Card title="Cash on delivery">
                          Quisque volutpat mattis eros. Lorem ipsum dolor sit
                          amet, consectetuer adipiscing elit. Donec odio.
                          Quisque volutpat mattis eros.
                        </Card>

                        <Card title="PayPal">
                          <small className="float-right paypal-link">
                            What is PayPal?
                          </small>
                          Nullam malesuada erat ut turpis. Suspendisse urna
                          nibh, viverra non, semper suscipit, posuere a, pede.
                          Donec nec justo eget felis facilisis fermentum.
                        </Card>

                        <Card title="Credit Card (Stripe)">
                          <img
                            src={`${process.env.PUBLIC_URL}/assets/images/payments-summary.png`}
                            alt="payments cards"
                          />
                          Donec nec justo eget felis facilisis fermentum.Lorem
                          ipsum dolor sit amet, consectetuer adipiscing elit.
                          Donec odio. Quisque volutpat mattis eros. Lorem ipsum
                          dolor sit ame.
                        </Card>
                      </Accordion>

                      <button
                        type="submit"
                        className="btn btn-outline-primary-2 btn-order btn-block"
                      >
                        <span className="btn-text">Place Order</span>
                        <span className="btn-hover-text">
                          Proceed to Checkout
                        </span>
                      </button>
                    </div>
                  </aside>
                </div>
              </form>
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
  shipping: state.cartlist.shipping,
});

export default connect(mapStateToProps)(Checkout);
