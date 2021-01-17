import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function ProductOne( props ) {
    const { product, onAddToCart } = props;

    const addToCartHandler = () => {
        if ( 0 !== product.stock )
            onAddToCart( product, 1 );
    }

    return (
        product ?
            <div className="product-big">
                <img src={ product.backPictures ? process.env.PUBLIC_URL + '/' + product.backPictures[ 0 ] : process.env.PUBLIC_URL + '/' + product.pictures[ 0 ] } alt="product bg" width="452" height="390" />

                <div className="product-wrap">
                    <figure className="product-media">
                        <Link to={ `${process.env.PUBLIC_URL}/product/default/${product.id}` }>
                            <LazyLoadImage
                                alt="product"
                                src={ `${process.env.PUBLIC_URL}/${product.pictures[ 0 ]}` }
                                threshold={ 400 }
                            />

                            { product.pictures[ 1 ] ?
                                <LazyLoadImage
                                    alt="product"
                                    src={ `${process.env.PUBLIC_URL}/${product.pictures[ 1 ]}` }
                                    wrapperClassName="product-image-hover product-image"
                                    threshold={ 400 }
                                />
                                : ''
                            }
                        </Link>
                    </figure>

                    <div className="product-body">
                        <div className="product-cat">
                            by&nbsp;
                            { product.author ?
                                product.author.map( ( author, index ) => (
                                    <span key={ index } className="mr-0">
                                        <Link to="#">{ author }</Link>
                                        { index < product.author.length - 1 ? ' and ' : '' }
                                    </span>
                                ) ) : ""
                            }
                        </div>

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

                        <div className="product-action">
                            <button className="btn-product btn-cart" onClick={ addToCartHandler }>
                                <span>add to cart</span>
                            </button>
                        </div>
                    </div>
                </div >
            </div>
            : ""
    );
}

export default React.memo( ProductOne );