import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { findIndex } from "../../../utils";
import store from "../../../store";
import { AddToCartHandler } from "../../../actions/products";

function ProductNine(props) {
  const {
    product,
    isWishlist,
    onAddToCart,
    onToggleWishlist,
    showQuickView,
    type = 1,
    sectionKey,
  } = props;

  const quickViewHandler = () => {
    showQuickView(product.id);
  };

  const addToCartHandler = () => {
    if (0 !== product.stock_qty)
      store.dispatch(
        AddToCartHandler({ ...product, qty: product.qty ? product.qty : 1 })
      );
  };

  const wishlistHandler = () => {
    if (isWishlist) {
      window.location = process.env.PUBLIC_URL + "/shop/wishlist";
    } else {
      onToggleWishlist(product, isWishlist);
    }
  };

  return product ? (
    <div className="product product-2">
      <figure className="product-media">
        {product.discount ? (
          <span className="product-label label-circle label-sale">Sale</span>
        ) : (
          ""
        )}
        {0 === product.stock ? (
          <span className="product-label label-circle label-out">Out</span>
        ) : (
          ""
        )}

        <Link to={`${process.env.PUBLIC_URL}/product/default/${product.id}`}>
          <LazyLoadImage
            alt="product"
            src={product.image.url}
            threshold={200}
          />
          {console.log(product)}
          {product?.images ? (
            <LazyLoadImage
              alt="product"
              src={product?.images[0].url}
              threshold={200}
              wrapperClassName="product-image-hover product-image"
            />
          ) : (
            ""
          )}
        </Link>

        <div className="product-action-vertical">
          <button
            className={`btn-product-icon btn-wishlist ${
              isWishlist ? "added-to-wishlist" : "remove-from-wishlist"
            }`}
            onClick={wishlistHandler}
            title={isWishlist ? "Go to wishlist" : "Add to wishlist"}
          >
            <span>{isWishlist ? "go to wishlist" : "add to wishlist"}</span>
          </button>
        </div>

        <div className="product-action product-action-dark">
          <button className="btn-product btn-cart" onClick={addToCartHandler}>
            {type === 1 ? <span>add to cart</span> : ""}
          </button>

          <button
            className="btn-product btn-quickview"
            title="Quick view"
            onClick={quickViewHandler}
          >
            {type === 1 ? <span>quick view</span> : ""}
          </button>
        </div>
      </figure>

      <div className="product-body">
        <div className="product-cat">
          {/* {product.category.map((cat, index) => (
            <span key={`cat_${index}`} className="mr-0">
              <Link to="#">{cat}</Link>
              {index < product.category.length - 1 ? ", " : ""}
            </span>
          ))} */}
        </div>

        <h3 className="product-title">
          <Link to={`${process.env.PUBLIC_URL}/product/default/27`}>
            {product.details.title_en}
          </Link>
        </h3>

        {0 === product.stock_qty ? (
          <div className="product-price">
            <span className="out-price">
              {product.price.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
              {" " + product.currency.name_en}
            </span>
          </div>
        ) : 0 < product.discount ? (
          <div className="product-price">
            <span className="new-price">
              $
              {product.salePrice.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </span>
            <span className="old-price">
              {product.price.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
              {" " + product.currency.name_en}
            </span>
          </div>
        ) : (
          <div className="product-price">
            {product.price.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
            {" " + product.currency.name_en}
          </div>
        )}

        <div className="ratings-container">
          <div className="ratings">
            <div
              className="ratings-val"
              style={{ width: product.ratings * 20 + "%" }}
            ></div>
          </div>
          <span className="ratings-text">({product.reviews} Reviews )</span>
        </div>

        {product.variants ? (
          product.variants[0].model ? (
            <div className="product-nav product-nav-thumbs">
              {product.variants.map((vari, i) => (
                <Link
                  to="#"
                  key={`vari_${i}`}
                  className={0 === i ? "active" : ""}
                >
                  <img src={product.image.url} alt="product desc" />
                </Link>
              ))}
            </div>
          ) : (
            <div className="product-nav product-nav-dots">
              {product.variants.map((vari, i) => (
                <Link
                  to="#"
                  key={`vari_${i}`}
                  className={0 === i ? "active" : ""}
                  style={{ background: vari.color }}
                ></Link>
              ))}
            </div>
          )
        ) : (
          ""
        )}
      </div>
    </div>
  ) : (
    ""
  );
}

function mapStateToProps(state, ownprops) {
  return {
    isWishlist:
      findIndex(
        state.wishlist.list,
        (item) => item.id === ownprops.product.id
      ) !== -1
        ? true
        : false,
  };
}

export default connect(mapStateToProps)(ProductNine);
