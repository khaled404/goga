import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import OwlCarousel from '../owl-carousel';

function ProductSidebar( props ) {
    const [ toggle, setToggle ] = useState( 0 );
    let products = props.products ? props.products : [];
    products = products.slice( 8, 16 );

    useEffect( () => {
        window.addEventListener( "resize", resizeHandle );
        resizeHandle();

        return () => {
            window.removeEventListener( "resize", resizeHandle );
        }
    }, [] )

    function resizeHandle() {
        if ( document.querySelector( "body" ).offsetWidth < 992 ) {
            setToggle( true );
        } else {
            setToggle( false );
        }
    }

    function hideSideBar() {
        if ( document.querySelector( 'body' ).classList.contains( 'sidebar-filter-active' ) ) {
            document.querySelector( 'body' ).classList.remove( 'sidebar-filter-active' );
        }
    }

    function toggleSideBar() {
        if ( document.querySelector( 'body' ).classList.contains( 'sidebar-filter-active' ) ) {
            document.querySelector( 'body' ).classList.remove( 'sidebar-filter-active' );
        } else {
            document.querySelector( 'body' ).classList.add( 'sidebar-filter-active' );
        }
    }

    function closeSideBar() {
        if ( document.querySelector( 'body' ).classList.contains( 'sidebar-filter-active' ) ) {
            document.querySelector( 'body' ).classList.remove( 'sidebar-filter-active' );
        }
    }

    return (
        <>
            <div className={ `${toggle ? 'sidebar-filter right' : 'sidebar'} sidebar-product` }>
                <div className={ toggle ? 'sidebar-filter-wrapper product-sidebar-wrapper' : '' }>
                    <button onClick={ closeSideBar } className="btn-product btn-close" style={ { marginLeft: 'auto', marginRight: '5px' } }>
                        <i className="icon-close"></i>
                    </button>

                    <div className="widget widget-products">
                        <h4 className="widget-title">Related Product</h4>

                        <div className="products">
                            <OwlCarousel adClass="owl-simple">
                                <div>
                                    {
                                        products.slice( 0, 4 ).map( ( item, index ) => (
                                            <div className="product product-sm" key={ `sm_product_${index}` }>
                                                <figure className="product-media">
                                                    <a href={ `${process.env.PUBLIC_URL}/product/default/${item.id}` }>
                                                        <img
                                                            src={ `${process.env.PUBLIC_URL}/${item.pictures[ 0 ]}` }
                                                            alt="Product"
                                                            className="product-image"
                                                        />
                                                    </a>
                                                </figure>

                                                <div className="product-body">
                                                    <h5 className="product-title">
                                                        <a href={ `${process.env.PUBLIC_URL}/product/default/${item.id}` }>{ item.name }</a>
                                                    </h5>
                                                    <div className="product-price">
                                                        <span className="new-price">${ item.price }</span>
                                                        { item.salePrice && <span className="old-price">${ item.salePrice }</span> }
                                                    </div>
                                                </div>
                                            </div>
                                        ) )
                                    }
                                </div>

                                <div>
                                    {
                                        products.slice( 4, 8 ).map( ( item, index ) => (
                                            <div className="product product-sm" key={ `sm_product_${index}` }>
                                                <figure className="product-media">
                                                    <a href={ `${process.env.PUBLIC_URL}/product/default/${item.id}` }>
                                                        <img
                                                            src={ `${process.env.PUBLIC_URL}/${item.pictures[ 0 ]}` }
                                                            alt="Product"
                                                            className="product-image"
                                                        />
                                                    </a>
                                                </figure>

                                                <div className="product-body">
                                                    <h5 className="product-title">
                                                        <a href={ `${process.env.PUBLIC_URL}/product/default/${item.id}` }>{ item.name }</a>
                                                    </h5>
                                                    <div className="product-price">
                                                        <span className="new-price">${ item.price }</span>
                                                        { item.salePrice && <span className="old-price">${ item.salePrice } </span> }
                                                    </div>
                                                </div>
                                            </div>
                                        ) )
                                    }
                                </div>
                            </OwlCarousel>
                        </div>

                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="btn btn-outline-dark-3"><span>View More Products</span><i className="icon-long-arrow-right"></i></Link>
                    </div>

                    <div className="widget widget-banner-sidebar">
                        <div className="banner-sidebar-title">ad box 280 x 280</div>

                        <div className="banner-sidebar banner-overlay">
                            <Link to="#">
                                <img src={ `${process.env.PUBLIC_URL}/assets/images/blog/sidebar/banner.jpg` } alt="banner" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            { toggle ?
                <button className="sidebar-fixed-toggler right" onClick={ toggleSideBar }><i className="icon-cog"></i></button> :
                ''
            }
            <div className="sidebar-filter-overlay" onClick={ hideSideBar }></div>
        </>
    );
}

function mapStateToProps( state ) {
    return {
        products: state.data.products
    }
}

export default connect( mapStateToProps )( ProductSidebar );