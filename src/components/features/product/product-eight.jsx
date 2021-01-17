import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { findIndex } from '../../../utils';

function ProductNine( props ) {
    const { product, isWishlist, onAddToCart, showQuickView, onToggleWishlist } = props;
    let btnClass = product.stock === 0 ? 'disabled' : '';
    btnClass = btnClass + ' btn-product btn-cart';

    const addToCartHandler = () => {
        if ( 0 !== product.stock )
            onAddToCart( product, 1 );
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

    return (
        product ?
            <div className={ `product product-list` }>
                <div className="row pr-2">
                    <div className="col-lg-3 col-md-3 col-6">
                        <figure className="product-media">
                            { product.new ? <span className="product-label label-new">New</span> : '' }
                            { product.top ? <span className="product-label label-top">Top</span> : '' }
                            { product.discount > 0 ? <span className="product-label label-sale">Sale</span> : '' }
                            { product.stock === 0 ? <span className="product-label label-out">Out</span> : '' }

                            <Link to={ `${process.env.PUBLIC_URL}/product/default/${product.id}` }>
                                <img
                                    alt="product"
                                    src={ `${process.env.PUBLIC_URL}/${product.pictures[ 0 ]}` }
                                />

                                { product.pictures[ 1 ] ?
                                    <span className="product-image-hover product-image">
                                        <img
                                            alt="product-hover"
                                            src={ `${process.env.PUBLIC_URL}/${product.pictures[ 1 ]}` }
                                        />
                                    </span>
                                    : ''
                                }
                            </Link>
                        </figure>
                    </div>

                    <div className="col-lg-6 col-md-6 order-last">
                        <div>
                            <div className="product-cat">
                                { product.category.map( ( cat, index ) => (
                                    <span key={ index } className="mr-0">
                                        <Link to="#">{ cat }</Link>
                                        { index < product.category.length - 1 ? ', ' : '' }
                                    </span>
                                ) ) }
                            </div>

                            <h3 className="product-title">
                                <Link to={ `${process.env.PUBLIC_URL}/product/default/27` } >{ product.name }</Link>
                            </h3>

                            <div className="product-content">
                                <p>{ product.shortDesc }</p>
                            </div>

                            {
                                product.variants ?
                                    product.variants[ 0 ].model ?
                                        <div className="product-nav product-nav-thumbs">
                                            { product.variants.map( ( vari, i ) =>
                                                <Link to="#" key={ "modal" + i } className={ 0 === i ? 'active' : '' }>
                                                    <img src={ process.env.PUBLIC_URL + '/' + vari.model } alt="product desc" />
                                                </Link>
                                            ) }
                                        </div>
                                        :
                                        <div className="product-nav product-nav-dots">
                                            { product.variants.map( ( vari, i ) =>
                                                <Link to="#" key={ "color" + i } className={ 0 === i ? 'active' : '' } style={ { background: vari.color } }>
                                                </Link>
                                            ) }
                                        </div>
                                    : ''
                            }
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-6 order-md-last order-lg-last">
                        <div className="product-list-action">
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

                            <div className="ratings-container">
                                <div className="ratings">
                                    <div className="ratings-val" style={ { width: product.ratings * 20 + '%' } }></div>
                                </div>
                                <span className="ratings-text">({ product.reviews } Reviews )</span>
                            </div>

                            <div className="product-action">
                                <button className="btn-product btn-quickview" title="Quick view" onClick={ quickViewHandler }>
                                    <span>quick view</span>
                                </button>

                                <button
                                    className={ `btn-product btn-wishlist p-0 ${isWishlist ? 'added-to-wishlist' : 'remove-from-wishlist'}` }
                                    onClick={ wishlistHandler }
                                    title={ isWishlist ? "Go to wishlist" : "Add to wishlist" }
                                >
                                    <span>wishlist</span>
                                </button>
                            </div>

                            <button className={ btnClass } onClick={ addToCartHandler }>
                                <span>add to cart</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div> : ''
    )
}

export const mapStateToProps = ( state, ownprops ) => {
    return {
        isWishlist: ( findIndex( state.wishlist.list, item => item.id === ownprops.product.id ) !== -1 ) ? true : false
    };
}

export default connect( mapStateToProps )( ProductNine );