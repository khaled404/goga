import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import ProductNine from "../features/product/product-nine";

import {
  addToCart,
  toggleWishlist,
  addToCompare,
  showQuickViewModal,
} from "../../actions";
import { GetProductsHandler } from "../../actions/products";
import { RECOMMENDATION_PRODUCTS } from "../../constants/action-types";

function ProductCollection(props) {
  const { addToCart, toggleWishlist, addToCompare, showQuickViewModal } = props;
  useEffect(() => {
    props.GetProductsHandler("", 8, "", "recommendationpProducts");
  }, []);
  return (
    <div className="container for-you">
      <div className="heading heading-flex mb-3">
        <div className="heading-left">
          <h2 className="title">Recommendation For You</h2>
        </div>

        <div className="heading-right">
          <Link
            to={`${process.env.PUBLIC_URL}/shop/sidebar/list`}
            className="title-link"
          >
            View All Recommendadion <i className="icon-long-arrow-right"></i>
          </Link>
        </div>
      </div>

      <div className="products">
        <div className="row justify-content-center">
          {props?.recommendationpProducts?.map((item, index) => (
            <div className="col-6 col-md-4 col-lg-3" key={index}>
              <ProductNine
                product={item}
                onAddToCart={addToCart}
                onToggleWishlist={toggleWishlist}
                onAddToCompare={addToCompare}
                showQuickView={showQuickViewModal}
                sectionKey="recommendationpProducts"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state, props) {
  return {
    recommendationpProducts: state.data.recommendationpProducts
      ? state.data.recommendationpProducts
      : [],
  };
}

export default connect(mapStateToProps, {
  addToCart,
  toggleWishlist,
  addToCompare,
  showQuickViewModal,
  GetProductsHandler,
})(ProductCollection);
