import React, { useState } from "react";
import Modal from "react-modal";
import Lightbox from "react-image-lightbox";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import imagesLoaded from "imagesloaded";

import OwlCarousel from "../../owl-carousel";

import {
  addToCart,
  toggleWishlist,
  closeQuickViewModal,
} from "../../../../actions";
import {
  findIndex,
  quantityInputs,
  isIEBrowser,
  safeContent,
  productGallery,
} from "../../../../utils";
import { AddToCartHandler } from "../../../../actions/products";
import store from "../../../../store";

const customStyles = {
  content: {
    top: "50%",
    transform: "translateY(-50%)",
  },
  overlay: {
    backgroundColor: "rgba(51,51,51,0.6)",
    zIndex: "10000",
  },
};

Modal.setAppElement("#root");

function QuickView(props) {
  const {
    showModal,
    productDetail,
    addToCart,
    toggleWishlist,
    closeQuickViewModal,
  } = props;
  console.log(
    "🚀 ~ file: quickview.jsx ~ line 45 ~ QuickView ~ productDetail",
    productDetail
  );
  const [photoIndex, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  // React.useEffect(() => {
  //   productGallery();
  // });

  function openLightBox(index) {
    setIndex(index);
    setOpen(true);
  }

  function afterOpenModal() {
    quantityInputs();
    setTimeout(() => {
      document
        .querySelector(".skel-pro-single.skel-quickview")
        .classList.add("loaded");
    }, 500);
  }

  function preventNav(e) {
    e.preventDefault();
  }

  const addToCartHandler = () => {
    if (0 !== productDetail.stock_qty)
      store.dispatch(
        AddToCartHandler({
          ...productDetail,
          qty: productDetail.qty ? productDetail.qty : 1,
        })
      );
  };
  const closeQuickViewModalHandler = () => {
    closeQuickViewModal();
  };

  const toggleWishlistHandler = () => {
    toggleWishlist(productDetail, props.wishlist);
  };

  const closeLightBoxHandler = () => {
    setOpen(false);
  };

  // const setNextHandler = () => {
  //   setIndex((photoIndex + images.length - 1) % images.length);
  // };

  // const setPrevHandler = () => {
  //   setIndex((photoIndex + 1) % images.length);
  // };

  // if (!productDetail || !productDetail.name) return "";

  // let ratings = productDetail.ratings * 20;
  // let images = productDetail.lgPictures
  //   ? productDetail.lgPictures
  //   : productDetail.pictures;
  // let smallPictures = productDetail.smPictures
  //   ? productDetail.smPictures
  //   : productDetail.pictures;
  // if (productDetail.length === 0) {
  //   return;
  // }
  return (
    <Modal
      isOpen={showModal}
      contentLabel="QuickView"
      onAfterOpen={afterOpenModal}
      onRequestClose={closeQuickViewModal}
      shouldFocusAfterRender={false}
      style={customStyles}
      className="container quickView-container"
      id="product-quickview"
    >
      <div className="quickView-content horizontal skeleton-body">
        <div className="row skel-pro-single skel-quickview">
          <div className="col-lg-6 p-0">
            <div className="skel-product-gallery"></div>
            <div className="product-lg mb-1">
              {productDetail?.length && (
                <OwlCarousel
                  adClass="owl-quickview cols-1"
                  carouselOptions="{dots: false, nav: false, loop: true, autoPlay: false, dotsContainer: #owl-dots}"
                  id="owl_quickview"
                  carouselId="quickView"
                >
                  {productDetail.images.map((item, index) => (
                    <div
                      className="intro-slide bg-transparent"
                      key={"gallery" + index}
                    >
                      <img src={item.url} alt="Desc" />
                      <button
                        className="btn-fullscreen"
                        onClick={() => openLightBox(index)}
                      >
                        <i className="icon-arrows"></i>
                      </button>
                    </div>
                  ))}
                </OwlCarousel>
              )}
            </div>
            {productDetail.length && (
              <div className="product-sm row" id="owl-dots">
                {productDetail?.images.map((item, index) => (
                  <Link
                    onClick={preventNav}
                    to="#"
                    className={`carousel-dot d-block ${
                      0 === index ? "active" : ""
                    }`}
                    key={"product-dot-" + index}
                  >
                    <img src={item.url} alt="dot" />
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="col-lg-6 quickview-desc">
            <div className="entry-summary row">
              <div className="col-md-12">
                <div className="entry-summary1"></div>
              </div>

              <div className="col-md-12">
                <div className="entry-summary2"></div>
              </div>
            </div>

            <div className="product-real-detail">
              <h2 className="product-title">
                {productDetail.details.title_en}
              </h2>
              <div className="ratings-container">
                <div className="ratings">
                  <div
                    className="ratings-val"
                    style={{ width: productDetail.rating.length + "%" }}
                  ></div>
                </div>
                <span className="ratings-text">
                  ({productDetail.last_review} Reviews )
                </span>
              </div>

              <h3 className="product-price">
                {productDetail.price.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}{" "}
                {productDetail.currency.symbol}
              </h3>

              <p className="product-txt">
                {productDetail.details.description_en}
              </p>

              {/* {productDetail.variants ? (
                productDetail.variants[0].image ||
                productDetail.variants[0].model ? (
                  <div className="details-filter-row product-nav product-nav-thumbs">
                    {productDetail.variants.map((vari, index) => {
                      return (
                        <Link
                          to="#"
                          key={"quickview-img-" + index}
                          className={0 === index ? "active" : ""}
                        >
                          <LazyLoadImage
                            alt="product"
                            src={
                              process.env.PUBLIC_URL +
                              "/" +
                              (vari.image
                                ? vari.image
                                : vari.model
                                ? vari.model
                                : "")
                            }
                            effect="blur"
                            className="skeletion-container"
                            visibleByDefault={true}
                          />
                        </Link>
                      );
                    })}
                  </div>
                ) : (
                  <div className="details-filter-row product-nav product-nav-dots">
                    {productDetail.variants.map((vari, i) => (
                      <button
                        className={0 === i ? "active" : ""}
                        style={{ backgroundColor: vari.color }}
                        data-image={vari}
                        // data-zoom-image={ vari.bigImages[ i ] }
                        key={productDetail.id + "-" + i}
                      ></button>
                    ))}
                  </div>
                )
              ) : (
                ""
              )} */}

              <div className="details-filter-row details-row-size">
                <label htmlFor="qty">Qty:</label>

                <div className="product-details-quantity">
                  <input
                    type="number"
                    id="qty-quickview"
                    className="form-control"
                    defaultValue={0 === productDetail.stock_qty ? 0 : 1}
                    min="1"
                    max={productDetail.stock_qty}
                    step="1"
                    data-decimals="0"
                    required
                  />
                </div>
              </div>

              <div className="product-details-action mt-0 mt-sm-3">
                <div className="details-action-wrapper">
                  <div className="col-sm-6 pl-0">
                    <button
                      className="btn-product btn-cart w-100"
                      onClick={addToCartHandler}
                      style={{ minHeight: isIEBrowser() ? "44px" : "auto" }}
                    >
                      <span>add to cart</span>
                    </button>
                  </div>

                  <div className="col-sm-6">
                    <button
                      className={`btn-product btn-wishlist ${
                        props.wishlist ? "added-to-wishlist" : ""
                      }`}
                      onClick={toggleWishlistHandler}
                      title={
                        props.wishlist
                          ? "Remove from wishlist"
                          : "Add to wishlist"
                      }
                      style={{ minHeight: isIEBrowser() ? "20px" : "auto" }}
                    >
                      <span>
                        {props.wishlist
                          ? "remove from wishlist"
                          : "add to wishlist"}
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="product-details-footer">
                <div className="row w-100 align-items-center d-block">
                  <div className="product-cat mb-1">
                    <span>SKU:</span>
                    <span>654111995-1-1-2</span>
                  </div>

                  <div className="product-cat d-flex flex-wrap">
                    <span className="mb-1">Category:</span>

                    {productDetail?.category?.map((cat, index) => (
                      <span
                        className="mr-0 mb-1"
                        key={"quick_cat" + index}
                        style={{ whiteSpace: "pre" }}
                      >
                        {cat.name_en}
                        {index < productDetail.category.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </div>

                  <div className="social-icons social-icons-sm">
                    <span className="social-label">Share:</span>
                    <Link
                      to="#"
                      className="social-icon"
                      title="Facebook"
                      target="_blank"
                    >
                      <i className="icon-facebook-f"></i>
                    </Link>
                    <Link
                      to="#"
                      className="social-icon"
                      title="Twitter"
                      target="_blank"
                    >
                      <i className="icon-twitter"></i>
                    </Link>
                    <Link
                      to="#"
                      className="social-icon"
                      title="Instagram"
                      target="_blank"
                    >
                      <i className="icon-instagram"></i>
                    </Link>
                    <Link
                      to="#"
                      className="social-icon"
                      title="Pinterest"
                      target="_blank"
                    >
                      <i className="icon-pinterest"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        title="Close (Esc)"
        type="button"
        className="mfp-close"
        onClick={closeQuickViewModalHandler}
      >
        <span>×</span>
      </button>

      {open && (
        <Lightbox
          mainSrc={productDetail?.images[0]?.url}
          nextSrc={productDetail?.images[1]?.url}
          prevSrc={productDetail?.images[2]?.url}
          onCloseRequest={closeLightBoxHandler}
          // onMovePrevRequest={setNextHandler}
          // onMoveNextRequest={setPrevHandler}
        />
      )}
    </Modal>
  );
}

const mapStateToProps = (state, ownprops) => {
  let wishlist = false;

  if (
    findIndex(
      state.wishlist.list,
      (item) => item.id === state.data.productDetail.id
    ) !== -1
  )
    wishlist = true;

  return {
    showModal: state.data.quickView,
    productDetail: state.data.productDetail,
    wishlist: wishlist,
  };
};

export default connect(mapStateToProps, {
  addToCart,
  toggleWishlist,
  closeQuickViewModal,
})(QuickView);
