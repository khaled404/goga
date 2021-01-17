import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { addToCart, toggleWishlist } from '../../../../../actions';

import { quantityInputs, isIEBrowser, isEdgeBrowser, findIndex } from '../../../../../utils';

function ProductDetailOne( props ) {
    const { product, isWishlist, type, addToCart, toggleWishlist } = props;

    useEffect( () => {
        quantityInputs();
    }, [] )

    const addToCartHandler = () => {
        if ( 0 !== product.stock )
            addToCart( product, document.querySelector( "#qty" ).value );
    }

    const wishlistHandler = () => {
        if ( isWishlist ) {
            window.location = process.env.PUBLIC_URL + '/shop/wishlist';
        } else {
            toggleWishlist( product, isWishlist );
        }
    }

    return (
        <div className={ "product-details" }>
            <h1 className="product-title">{ product.name }</h1>

            <div className="ratings-container">
                <div className="ratings">
                    <div className="ratings-val" style={ { width: product.ratings * 20 + '%' } }></div>
                </div>
                <Link className="ratings-text" to="#product-review-link" id="review-link">( { product.reviews } Reviews )</Link>
            </div>

            { 0 === product.stock ?
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

            <div className="product-content">
                <p>{ product.shortDesc }</p>
            </div>

            { product.variants ?
                <div className="details-filter-row details-row-size">
                    <label>Color:</label>
                    { product.variants[ 0 ].color ?
                        <div className="product-nav product-nav-dots">
                            {
                                product.variants.map( ( vari, i ) =>
                                    <Link to="#" key={ i } className={ 0 === i ? 'active' : '' } style={ { backgroundColor: vari.color } }>
                                    </Link>
                                )
                            }
                        </div> :
                        <div className="product-nav product-nav-thumbs">
                            {
                                product.variants[ 0 ].model ?
                                    product.variants.map( ( vari, i ) =>
                                        <Link to="#" key={ i } className={ 0 === i ? 'active' : '' }>
                                            <img src={ process.env.PUBLIC_URL + '/' + vari.model } alt="product desc" />
                                        </Link>
                                    ) :
                                    product.variants[ 0 ].image ?
                                        product.variants.map( ( vari, i ) =>
                                            <Link to="#" key={ i } className={ 0 === i ? 'active' : '' }>
                                                <img src={ process.env.PUBLIC_URL + '/' + vari.image } alt="product desc" />
                                            </Link>
                                        ) : ''
                            }
                        </div>
                    }
                </div> : ''
            }
            <div className="details-filter-row details-row-size">
                <label htmlFor="size">Size:</label>
                <div className="select-custom">
                    <select name="size" id="size" className="form-control" defaultValue="#">
                        <option value="#">Select a size</option>
                        <option value="s">Small</option>
                        <option value="m">Medium</option>
                        <option value="l">Large</option>
                        <option value="xl">Extra Large</option>
                    </select>
                </div>

                { 'default' === type ?
                    <Link to="#" className="size-guide"><i className="icon-th-list"></i>size guide</Link> :
                    '' }
            </div>

            <div className="details-filter-row details-row-size">
                <label htmlFor="qty">Qty:</label>
                <div className="product-details-quantity">
                    <input type="number" id="qty" className="form-control" defaultValue="1" min="1" max={ product.stock } step="1" data-decimals="0" required />
                </div>
            </div>

            <div className="product-details-action">
                { isIEBrowser() || isEdgeBrowser() ?
                    <button className="btn-product btn-cart" onClick={ addToCartHandler } style={ { minHeight: "4rem" } }><span>add to cart</span></button>
                    :
                    <button className="btn-product btn-cart" onClick={ addToCartHandler }><span>add to cart</span></button>
                }
                { isIEBrowser() || isEdgeBrowser() ?
                    <div className="details-action-wrapper IE-detail-action-wrapper">
                        <button
                            className={ `btn-product btn-wishlist pl-0 pr-0 ${isWishlist ? 'added-to-wishlist' : 'remove-from-wishlist'}` }
                            onClick={ wishlistHandler }
                            title={ isWishlist ? "Go to wishlist" : "Add to wishlist" }
                        >
                            <span>{ isWishlist ? "go to wishlist" : "add to wishlist" }</span>
                        </button>
                    </div> :

                    <div className="details-action-wrapper">
                        <button
                            className={ `btn-product btn-wishlist pl-0 pr-0 ${isWishlist ? 'added-to-wishlist' : 'remove-from-wishlist'}` }
                            onClick={ wishlistHandler }
                            title={ isWishlist ? "Go to wishlist" : "Add to wishlist" }
                        >
                            <span>{ isWishlist ? "Go to Wishlist" : "Add to Wishlist" }</span>
                        </button>
                    </div>
                }
            </div>

            <div className="product-details-footer">
                <div className="product-cat">
                    <span>Category: </span>
                    { product.category.map( ( cat, index ) => (
                        <span key={ index } className="mr-0">
                            <Link to="#">{ cat }</Link>
                            { index < product.category.length - 1 ? ', ' : '' }
                        </span>
                    ) ) }
                </div>

                <div className="social-icons social-icons-sm">
                    <span className="social-label">Share:</span>
                    <Link to="#" className="social-icon" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></Link>
                    <Link to="#" className="social-icon" title="Twitter" target="_blank"><i className="icon-twitter"></i></Link>
                    <Link to="#" className="social-icon" title="Instagram" target="_blank"><i className="icon-instagram"></i></Link>
                    <Link to="#" className="social-icon" title="Pinterest" target="_blank"><i className="icon-pinterest"></i></Link>
                </div>
            </div>

            { props.children }
        </div>
    )
}

function mapStateToProps( state, props ) {
    return {
        product: state.data.products.filter( product => product.id === parseInt( props.id ) )[ 0 ],
        isWishlist: ( findIndex( state.wishlist.list, item => item.id === parseInt( props.id ) ) !== -1 ) ? true : false
    }
}

export default connect( mapStateToProps, { addToCart, toggleWishlist } )( ProductDetailOne );