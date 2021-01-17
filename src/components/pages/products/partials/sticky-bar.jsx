import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { addToCart, toggleWishlist } from '../../../../actions';

import { findIndex } from '../../../../utils';

function StickyBar( props ) {
    const { product, addToCart, toggleWishlist, isWishlist } = props;

    const addToCartHandler = () => {
        if ( 0 !== product.stock )
            addToCart( product, document.querySelector( "#sticky-cart-qty" ).value );
    }

    const wishlistHandler = () => {
        if ( isWishlist ) {
            window.location = process.env.PUBLIC_URL + '/shop/wishlist';
        } else {
            toggleWishlist( product, isWishlist );
        }
    }

    function toTop() {
        window.scroll( {
            top: 0
        } )
    }

    return (
        <div className="sticky-bar">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <figure className="product-media">
                            <Link onClick={ toTop } to={ `${process.env.PUBLIC_URL}/product/default/${product.id}` }>
                                <img src={ process.env.PUBLIC_URL + '/' + product.pictures[ 0 ] } alt="Product" />
                            </Link>
                        </figure>
                        <h4 className="product-title"><Link to={ `${process.env.PUBLIC_URL}/product/default/${product.id}` }>{ product.name }</Link></h4>
                    </div>

                    <div className="col-6 justify-content-end">
                        <div className="product-price">
                            ${ product.price.toLocaleString( undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 } ) }
                        </div>
                        <div className="product-details-quantity">
                            <input type="number" id="sticky-cart-qty" className="form-control" defaultValue="1" min="1" max={ product.stock } step="1" data-decimals="0" required />
                        </div>

                        <div className="product-details-action">
                            <button className="btn-product btn-cart" onClick={ addToCartHandler }><span>add to cart</span></button>
                            <button
                                className={ `btn-product btn-wishlist pr-0 pl-0 ${isWishlist ? 'added-to-wishlist' : 'remove-from-wishlist'}` }
                                onClick={ wishlistHandler }
                                title={ isWishlist ? "Go to wishlist" : "Add to wishlist" }
                            >
                                <span>{ isWishlist ? "go to wishlist" : "add to wishlist" }</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = ( state, props ) => ( {
    product: state.data.products.filter( product => product.id === parseInt( props.id ) )[ 0 ],
    isWishlist: ( findIndex( state.wishlist.list, item => item.id === parseInt( props.id ) ) !== -1 ) ? true : false
} )

export default connect( mapStateToProps, { addToCart, toggleWishlist } )( StickyBar );