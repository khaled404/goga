import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

// import Custom Components
import PageHeader from "../../common/page-header";
import Breadcrumb from "../../common/breadcrumb";

import { removeFromWishlist } from "../../../actions";
import { AddToCartHandler } from "../../../actions/products";

function Wishlist(props) {
  const { wishlist } = props;

  useEffect(() => {
    let items = document.querySelectorAll(".action-col .dropdown");

    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      item.addEventListener("click", dropDownHandle);
    }
    document.addEventListener("click", hiddenHandle);

    return () => {
      document.removeEventListener("click", hiddenHandle);

      let items = document.querySelectorAll(".action-col .dropdown");

      for (let i = 0; i < items.length; i++) {
        let item = items[i];
        item.removeEventListener("click", dropDownHandle);
      }
    };
  }, []);

  const dropDownHandle = (e) => {
    let item = e.currentTarget;
    item.classList.add("show");
    item.querySelector(".dropdown-menu").classList.add("show");
    item
      .querySelector(".dropdown-menu")
      .setAttribute(
        "style",
        "position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 40px, 0px);"
      );
    e.stopPropagation();
  };

  const hiddenHandle = () => {
    let items = document.querySelectorAll(".action-col .dropdown");
    for (let i = 0; i < items.length; i++) {
      let item = items[i];
      item.classList.remove("show");
      item.querySelector(".dropdown-menu").classList.remove("show");
      item.querySelector(".dropdown-menu").setAttribute("style", "");
    }
  };

  return (
    <>
      <Helmet>
        <title>Molla React eCommerce Template | Wishlist</title>
      </Helmet>

      <h1 className="d-none">Molla React eCommerce Template - Wishlist</h1>

      <div className="main">
        <PageHeader title="Wishlist" subTitle="Shop" />
        <Breadcrumb title="Wishlist" parent1={["Shop", "shop/sidebar/list"]} />

        <div className="page-content">
          <div className="container">
            <table className="table table-wishlist table-mobile">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Stock Status</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {wishlist.map((item, index) => (
                  <tr key={index}>
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
                            {item.name}
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

                    <td className="stock-col">
                      <span
                        className={
                          0 < item.stock_qty ? "in-stock" : "out-of-stock"
                        }
                      >
                        {0 < item.stock_qty ? "In stock" : "Out of stock"}
                      </span>
                    </td>

                    <td className="action-col">
                      {0 === item.stock_qty ? (
                        <button className="btn btn-block btn-outline-primary-2 disabled">
                          Out of Stock
                        </button>
                      ) : item.variants ? (
                        <div className="dropdown">
                          <button
                            className="btn btn-block btn-outline-primary-2"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="icon-list-alt"></i>Select Options
                          </button>

                          <div className="dropdown-menu">
                            <Link
                              to={`${process.env.PUBLIC_URL}/product/default/${item.id}`}
                              className="dropdown-item"
                            >
                              First option
                            </Link>
                            <Link
                              to={`${process.env.PUBLIC_URL}/product/default/${item.id}`}
                              className="dropdown-item"
                            >
                              Another option
                            </Link>
                            <Link
                              to={`${process.env.PUBLIC_URL}/product/default/${item.id}`}
                              className="dropdown-item"
                            >
                              The best option
                            </Link>
                          </div>
                        </div>
                      ) : (
                        <button
                          className="btn btn-block btn-outline-primary-2"
                          onClick={(e) =>
                            props.AddToCartHandler({ ...item, qty: 1 })
                          }
                        >
                          <i className="icon-cart-plus"></i>Add to Cart
                        </button>
                      )}
                    </td>
                    <td className="remove-col">
                      <button
                        className="btn-remove"
                        onClick={(e) => props.removeFromWishlist(item.id)}
                      >
                        <i className="icon-close"></i>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="wishlist-share">
              <div className="social-icons social-icons-sm mb-2">
                <label className="social-label">Share on:</label>
                <a
                  href="https://www.facebook.com/"
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                >
                  <i className="icon-facebook-f"></i>
                </a>
                <a
                  href="https://twitter.com/"
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Twitter"
                >
                  <i className="icon-twitter"></i>
                </a>
                <a
                  href="https://instagram.com/"
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                >
                  <i className="icon-instagram"></i>
                </a>
                <a
                  href="https://youtube.com/"
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Youtube"
                >
                  <i className="icon-youtube"></i>
                </a>
                <a
                  href="https://pinterest.com/"
                  className="social-icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Pinterest"
                >
                  <i className="icon-pinterest"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const mapStateToProps = (state) => ({
  wishlist: state.wishlist.list,
});

export default connect(mapStateToProps, {
  removeFromWishlist,
  AddToCartHandler,
})(Wishlist);
