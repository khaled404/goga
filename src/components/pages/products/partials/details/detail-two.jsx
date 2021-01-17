import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import StickyBox from 'react-sticky-box';

import Accordion from '../../../../features/accordion/accordion';
import Card from '../../../../features/accordion/card';

import { addToCart, addToCompare, toggleWishlist } from '../../../../../actions';

import { quantityInputs, isIEBrowser, isEdgeBrowser, stickyContentHandle, findIndex } from '../../../../../utils';

function ProductDetailTwo( props ) {
    const { product, isWishlist, type, addToCart, toggleWishlist, addToCompare } = props;

    useEffect( () => {
        quantityInputs();
        window.addEventListener( 'scroll', stickyContentHandle );

        return () => {
            window.removeEventListener( 'scroll', stickyContentHandle );
        }
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
        <StickyBox className="product-details sticky-content" offsetTop={ 80 }>
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

            {
                type === "color" && product.variants ?
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

                <Link to="#" className="size-guide"><i className="icon-th-list"></i>size guide</Link>
            </div>

            <div className="details-filter-row details-row-size">
                <label htmlFor="qty">Qty:</label>
                <div className="product-details-quantity">
                    <input type="number" id="qty" className="form-control" defaultValue="1" min="1" max={ product.stock } step="1" data-decimals="0" required />
                </div>
            </div>

            <div className="product-details-action">
                { isIEBrowser() || isEdgeBrowser() ?
                    <button className="btn-product btn-cart" onClick={ addToCartHandler } style={ { minHeight: "4rem" } }><span>add to cart</span></button> :
                    <button className="btn-product btn-cart" onClick={ addToCartHandler }><span>add to cart</span></button>
                }

                { isIEBrowser() || isEdgeBrowser() ?
                    <div className="details-action-wrapper IE-detail-action-wrapper">
                        <button
                            className={ `btn-product btn-wishlist pl-0 pr-0 ${isWishlist ? 'added-to-wishlist' : 'remove-from-wishlist'}` }
                            onClick={ wishlistHandler }
                            title={ isWishlist ? "Go to Wishlist" : "Add to Wishlist" }
                        >
                            <span>{ isWishlist ? "Go to Wishlist" : "Add to Wishlist" }</span>
                        </button>

                        <button className="btn-product btn-compare pr-0" title="Compare" onClick={ addToCompareHandler } style={ { minWidth: "157px" } }><span>Add to Compare</span></button>
                    </div> :

                    <div className="details-action-wrapper">
                        <button
                            className={ `btn-product btn-wishlist pl-0 pr-0 ${isWishlist ? 'added-to-wishlist' : 'remove-from-wishlist'}` }
                            onClick={ wishlistHandler }
                            title={ isWishlist ? "Go to Wishlist" : "Add to Wishlist" }
                        >
                            <span>{ isWishlist ? "Go to Wishlist" : "Add to Wishlist" }</span>
                        </button>

                        <button className="btn-product btn-compare pr-0" title="Compare" onClick={ addToCompareHandler }><span>Add to Compare</span></button>
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

            <Accordion adClass="accordion-plus product-details-accordion">
                <Card title="Description" adClass="card-box card-sm">
                    <div className="product-desc-content">
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
                        <ul>
                            <li>Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit. </li>
                            <li>Vivamus finibus vel mauris ut vehicula.</li>
                            <li>Nullam a magna porttitor, dictum risus nec, faucibus sapien.</li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede.</p>
                    </div>
                </Card>
                <Card title="Additional information" adClass="card-box card-sm">
                    <div className="product-desc-content" >
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>

                        <h3>Fabric & care</h3>
                        <ul>
                            <li>100% Polyester</li>
                            <li>Do not iron</li>
                            <li>Do not wash</li>
                            <li>Do not bleach</li>
                            <li>Do not tumble dry</li>
                            <li>Professional dry clean only</li>
                        </ul>

                        <h3>Size</h3>
                        <p>S, M, L, XL</p>
                    </div>
                </Card>
                <Card title="Shipping & Returns" expanded={ true } adClass="card-box card-sm">
                    <div className="product-desc-content">
                        <p>We deliver to over 100 countries around the world. For full details of the delivery options we offer, please view our <Link to="#">Delivery information</Link><br />
                            We hope you’ll love every purchase, but if you ever need to return an item you can do so within a month of receipt. For full details of how to make a return, please view our <Link to="#">Returns information</Link></p>
                    </div>
                </Card>
                <Card title={ `Reviews (${product.reviews})` } adClass="card-box card-sm">
                    <div className="reviews">
                        <div className="review">
                            <div className="row no-gutters" style={ isIEBrowser() ? { flexDirection: 'row' } : {} } >
                                <div className="col-auto">
                                    <h4><Link to="#">Samanta J.</Link></h4>
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={ { width: "80%" } }></div>
                                        </div>
                                    </div>
                                    <span className="review-date">6 days ago</span>
                                </div>
                                <div className="col">
                                    <h4>Good, perfect size</h4>

                                    <div className="review-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!</p>
                                    </div>

                                    <div className="review-action">
                                        <Link to="#"><i className="icon-thumbs-up"></i>Helpful (2)</Link>
                                        <Link to="#"><i className="icon-thumbs-down"></i>Unhelpful (0)</Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="review">
                            <div className="row no-gutters" style={ isIEBrowser() ? { flexDirection: 'row' } : {} }>
                                <div className="col-auto">
                                    <h4><Link to="#">John Doe</Link></h4>
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div className="ratings-val" style={ { width: "100%" } }></div>
                                        </div>
                                    </div>
                                    <span className="review-date">5 days ago</span>
                                </div>
                                <div className="col">
                                    <h4>Very good</h4>

                                    <div className="review-content">
                                        <p>Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!</p>
                                    </div>

                                    <div className="review-action">
                                        <Link to="#"><i className="icon-thumbs-up"></i>Helpful (0)</Link>
                                        <Link to="#"><i className="icon-thumbs-down"></i>Unhelpful (0)</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </Accordion>
        </StickyBox>
    )
}

function mapStateToProps( state, props ) {
    return {
        product: state.data.products.filter( product => product.id === parseInt( props.id ) )[ 0 ],
        isWishlist: ( findIndex( state.wishlist.list, item => item.id === parseInt( props.id ) ) !== -1 ) ? true : false
    }
}

export default connect( mapStateToProps, { addToCart, toggleWishlist, addToCompare } )( ProductDetailTwo );