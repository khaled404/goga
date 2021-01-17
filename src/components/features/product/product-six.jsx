import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown';

import { rendererOne } from '../count-down';

import { findIndex } from '../../../utils';

function ProductSix( props ) {
    const { product, type = "product", isWishlist, onAddToCart, showQuickView, onToggleWishlist, onAddToCompare } = props;

    const addToCartHandler = () => {
        if ( 0 !== product.stock )
            onAddToCart( product, 1 );
    }

    const addToCompareHandler = () => {
        onAddToCompare( product );
    }

    const quickViewHandler = () => {
        showQuickView( product.id );
    }

    const wishlistHandler = () => {
        if ( isWishlist ) {
            window.location = process.env.PUBLIC_URL + '/shop/wishlist';
        } else {
            onToggleWishlist( product, isWishlist );
        }
    }

    function toTop() {
        window.scroll( {
            top: 0
        } )
    }

    return (
        product ?
            <div className={ `product product-5 text-center ${0 === product.stock ? 'product-disabled' : ''}` }>
                <figure className="product-media">
                    { product.new ? <span className="product-label label-new">New</span> : '' }
                    { product.top ? <span className="product-label label-top">Top</span> : '' }
                    { product.discount ? <span className="product-label label-sale">Sale</span> : '' }
                    { ( 0 === product.stock ) ? <span className="product-label label-out">Out Of Stock</span> : '' }

                    <Link to={ `${process.env.PUBLIC_URL}/product/default/${product.id}` } onClick={ toTop }>
                        <img
                            alt="product"
                            src={ `${process.env.PUBLIC_URL}/${product.pictures[ 0 ]}` }
                        />

                        { product.pictures[ 1 ] ?
                            <span className="product-image-hover product-image">
                                <img
                                    alt="product"
                                    src={ `${process.env.PUBLIC_URL}/${product.pictures[ 1 ]}` }
                                />
                            </span>
                            : ''
                        }
                    </Link>

                    { type !== "sidebar" && 0 < product.discount ? <div className="product-countdown countdown-primary"><Countdown date={ `2021-02-01T01:02:03` } renderer={ rendererOne } /></div> : '' }

                    <div className="product-action-vertical">
                        <button
                            className={ `btn-product-icon btn-wishlist ${isWishlist ? 'added-to-wishlist' : 'remove-from-wishlist'}` }
                            onClick={ wishlistHandler }
                            title={ isWishlist ? "Go to wishlist" : "Add to wishlist" }
                        >
                            <span>{ isWishlist ? "go to wishlist" : "add to wishlist" }</span>
                        </button>

                        <button className="btn-product-icon btn-quickview" title="Quick view" onClick={ quickViewHandler }>
                            <span>Quick view</span>
                        </button>

                        <button className="btn-product-icon btn-compare" title="Compare" onClick={ addToCompareHandler }>
                            <span>Compare</span>
                        </button>
                    </div>

                    <div className="product-action">
                        <button className="btn-product btn-cart" onClick={ addToCartHandler }>
                            <span>add to cart</span>
                        </button>
                    </div>
                </figure>

                <div className="product-body product-action-inner">
                    <h3 className="product-title">
                        <Link to={ `${process.env.PUBLIC_URL}/product/default/7` } >{ product.name }</Link>
                    </h3>

                    {
                        0 === product.stock ?
                            <div className="product-price">
                                <span className="out-price">${ product.price.toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) }</span>
                            </div> :

                            0 < product.discount ?
                                <div className="product-price">
                                    <span className="new-price">${ product.salePrice.toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) }</span>
                                    <span className="old-price">${ product.price.toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) }</span>
                                </div> :

                                <div className="product-price">${ product.price.toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) }</div>
                    }
                </div>
            </div> : ''
    );
}

export const mapStateToProps = ( state, ownprops ) => {
    return {
        isWishlist: ( findIndex( state.wishlist.list, item => item.id === ownprops.product.id ) !== -1 ) ? true : false
    };
}

export default connect( mapStateToProps )( ProductSix );