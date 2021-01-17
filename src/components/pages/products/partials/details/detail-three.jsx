import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { addToCart, addToCompare, toggleWishlist } from '../../../../../actions';

import { quantityInputs, isIEBrowser, findIndex } from '../../../../../utils';

function ProductDetailThree( props ) {
    const { product, isWishlist, addToCart, toggleWishlist, addToCompare } = props;

    useEffect( () => {
        quantityInputs();
    }, [] )

    const addToCartHandler = () => {
        if ( 0 !== product.stock )
            addToCart( product, document.querySelector( "#qty" ).value );
    }

    const addToCompareHandler = () => {
        addToCompare( product );
    }

    const wishlistHandler = () => {
        if ( isWishlist ) {
            window.location = process.env.PUBLIC_URL + '/shop/wishlist';
        } else {
            toggleWishlist( product, isWishlist );
        }
    }

    return (
        <div className="product-details product-details-centered">
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
                                    <button to="#" key={ i } className={ 0 === i ? 'active' : '' } style={ { backgroundColor: vari.color } }>
                                    </button>
                                )
                            }
                        </div> :
                        <div className="product-nav product-nav-thumbs">
                            {
                                product.variants[ 0 ].model ?
                                    product.variants.map( ( vari, i ) =>
                                        <button to="#" key={ i } className={ 0 === i ? 'active' : '' }>
                                            <img src={ process.env.PUBLIC_URL + '/' + vari.model } alt="product desc" />
                                        </button>
                                    ) :
                                    product.variants[ 0 ].image ?
                                        product.variants.map( ( vari, i ) =>
                                            <button to="#" key={ i } className={ 0 === i ? 'active' : '' }>
                                                <img src={ process.env.PUBLIC_URL + '/' + vari.image } alt="product desc" />
                                            </button>
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
                        <option value="#">One Size</option>
                        <option value="s">Small</option>
                        <option value="m">Medium</option>
                        <option value="l">Large</option>
                        <option value="xl">Extra Large</option>
                    </select>
                </div>

                <Link to="#" className="size-guide"><i className="icon-th-list"></i>size guide</Link>
            </div>

            <div className="product-details-action">
                <div className="details-action-col">
                    <div className="product-details-quantity">
                        <input type="number" id="qty" className="form-control" defaultValue="1" min="1" max={ product.stock } step="1" data-decimals="0" required />
                    </div>

                    <button className="btn-product btn-cart" onClick={ addToCartHandler }><span>add to cart</span></button>
                </div>

                <div className="details-action-wrapper">
                    <button
                        className={ `btn-product btn-wishlist pl-0 pr-0 ${isWishlist ? 'added-to-wishlist' : 'remove-from-wishlist'}` }
                        onClick={ wishlistHandler }
                        title={ isWishlist ? "Go to Wishlist" : "Add to Wishlist" }
                    >
                        <span>{ isWishlist ? "Go to Wishlist" : "Add to Wishlist" }</span>
                    </button>

                    <button className="btn-product btn-compare pr-0" title="Compare" onClick={ addToCompareHandler } style={ { minWidth: isIEBrowser() ? '157px' : 'none' } }><span>Add to Compare</span></button>
                </div>
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
        </div>
    )
}


function mapStateToProps( state, props ) {
    return {
        product: state.data.products.filter( product => product.id === parseInt( props.id ) )[ 0 ],
        isWishlist: ( findIndex( state.wishlist.list, item => item.id === parseInt( props.id ) ) !== -1 ) ? true : false
    }
}

export default connect( mapStateToProps, { addToCart, toggleWishlist, addToCompare } )( ProductDetailThree );