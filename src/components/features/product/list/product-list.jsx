import React, { useState, useEffect } from 'react';
import Link from 'react-router-dom/Link';
import { connect } from 'react-redux';
import imagesLoaded from 'imagesloaded';

import ProductSix from '../product-six';
import ProductEight from '../product-eight';
import QuickView from '../common/quickview';
import Pagination from '../../pagination';

import { addToCart, toggleWishlist, addToCompare, showQuickViewModal, filterSort } from '../../../../actions';
import { getVisibleProducts } from '../../../../services';

function ProductList( props ) {
    let { column, filterSort, products, filters, addToCart, toggleWishlist, addToCompare, showQuickViewModal } = props;

    const [ start, setStart ] = useState( 0 );
    const [ cols, setCols ] = useState( column );

    useEffect( () => {
        document.querySelector( '.skeleton-body.skel-shop-products' ).classList.remove( 'loaded' );
        document.querySelector( '.skeleton-body.skel-shop-sidebar' ).classList.remove( 'loaded' );

        let imgLoad = imagesLoaded( ".products", { background: true } );

        imgLoad.on( 'done', function ( instance, image ) {
            document.querySelector( '.skeleton-body.skel-shop-products' ).classList.add( 'loaded' );
            document.querySelector( '.skeleton-body.skel-shop-sidebar' ).classList.add( 'loaded' );
        } );

        setCols( column );
    }, [ cols, column ] )

    useEffect( () => {
        document.querySelector( '.skeleton-body.skel-shop-products' ).classList.remove( 'loaded' );

        let imgLoad = imagesLoaded( ".products", { background: true } );

        imgLoad.on( 'done', function ( instance, image ) {
            document.querySelector( '.skeleton-body.skel-shop-products' ).classList.add( 'loaded' );
        } );
    }, [ filters ] )

    function changePos( pos ) {
        setStart( pos );

        document.querySelector( '.skeleton-body.skel-shop-products' ) && document.querySelector( '.skeleton-body.skel-shop-products' ).classList.remove( 'loaded' );

        let imgLoad = imagesLoaded( ".products", { background: true } );

        imgLoad.on( 'done', function ( instance, image ) {
            document.querySelector( '.skeleton-body.skel-shop-products' ) && document.querySelector( '.skeleton-body.skel-shop-products' ).classList.add( 'loaded' );
        } );

        window.scrollTo( {
            top: 0
        } );
    }

    function changeFilter( e ) {
        filterSort( e.target.value );
        setStart( 0 );
    }

    const grid = { "2cols": "col-6", "3cols": "col-6 col-md-4 col-lg-4", "4cols": "col-6 col-md-4 col-lg-4 col-xl-3" };
    const units = { "list": 6, "2cols": 6, "3cols": 9, "4cols": 12 };
    const itemsPerPage = units[ cols ];

    products = getVisibleProducts( products.slice( 20, 35 ), filters );

    return (
        <>
            <div className="toolbox">
                <div className="toolbox-left">
                    <div className="toolbox-info">
                        Showing <span>{ Math.min( itemsPerPage, products.length - start ) } of { products.length }</span> Products
                    </div>
                </div>

                <div className="toolbox-right">
                    <div className="toolbox-sort">
                        <label htmlFor="sortby">Sort by:</label>
                        <div className="select-custom">
                            <select name="sortby" id="sortby" defaultValue={ filters.sortBy } className="form-control" onChange={ changeFilter }>
                                <option value="popularity">Most Popular</option>
                                <option value="rating">Most Rated</option>
                                <option value="date">Date</option>
                            </select>
                        </div>
                    </div>

                    <div className="toolbox-layout">
                        <Link to={ process.env.PUBLIC_URL + "/shop/sidebar/list" }>
                            <button className={ `btn-layout ${'list' === cols ? 'active' : ''}` }>
                                <svg width="16" height="10">
                                    <rect x="0" y="0" width="4" height="4"></rect>
                                    <rect x="6" y="0" width="10" height="4"></rect>
                                    <rect x="0" y="6" width="4" height="4"></rect>
                                    <rect x="6" y="6" width="10" height="4"></rect>
                                </svg>
                            </button>
                        </Link>

                        <Link to={ process.env.PUBLIC_URL + "/shop/sidebar/2cols" }>
                            <button className={ `btn-layout ${'2cols' === cols ? 'active' : ''}` }>
                                <svg width="10" height="10">
                                    <rect x="0" y="0" width="4" height="4"></rect>
                                    <rect x="6" y="0" width="4" height="4"></rect>
                                    <rect x="0" y="6" width="4" height="4"></rect>
                                    <rect x="6" y="6" width="4" height="4"></rect>
                                </svg>
                            </button>
                        </Link>

                        <Link to={ process.env.PUBLIC_URL + "/shop/sidebar/3cols" }>
                            <button className={ `btn-layout ${'3cols' === cols ? 'active' : ''}` }>
                                <svg width="16" height="10">
                                    <rect x="0" y="0" width="4" height="4"></rect>
                                    <rect x="6" y="0" width="4" height="4"></rect>
                                    <rect x="12" y="0" width="4" height="4"></rect>
                                    <rect x="0" y="6" width="4" height="4"></rect>
                                    <rect x="6" y="6" width="4" height="4"></rect>
                                    <rect x="12" y="6" width="4" height="4"></rect>
                                </svg>
                            </button>
                        </Link>

                        <Link to={ process.env.PUBLIC_URL + "/shop/sidebar/4cols" }>
                            <button className={ `btn-layout ${'4cols' === cols ? 'active' : ''}` }>
                                <svg width="22" height="10">
                                    <rect x="0" y="0" width="4" height="4"></rect>
                                    <rect x="6" y="0" width="4" height="4"></rect>
                                    <rect x="12" y="0" width="4" height="4"></rect>
                                    <rect x="18" y="0" width="4" height="4"></rect>
                                    <rect x="0" y="6" width="4" height="4"></rect>
                                    <rect x="6" y="6" width="4" height="4"></rect>
                                    <rect x="12" y="6" width="4" height="4"></rect>
                                    <rect x="18" y="6" width="4" height="4"></rect>
                                </svg>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="products mb-3">
                { 'list' === cols ?
                    products.slice( start, start + 6 ).map( ( item, index ) =>
                        <div key={ "seleton-" + index }>
                            <div className="skel-pro skel-pro-list">
                            </div>

                            <ProductEight
                                product={ item }
                                onAddToCart={ addToCart }
                                onToggleWishlist={ toggleWishlist }
                                onAddToCompare={ addToCompare }
                                showQuickView={ showQuickViewModal }
                            />
                        </div>
                    ) :

                    <div className="row">
                        { products.slice( start, start + itemsPerPage ).map( ( item, index ) =>
                            <div className={ grid[ cols ] } key={ "product" + index }>
                                <div className="skel-pro">
                                </div>

                                <ProductSix
                                    product={ item }
                                    type="sidebar"
                                    onAddToCart={ addToCart }
                                    onToggleWishlist={ toggleWishlist }
                                    onAddToCompare={ addToCompare }
                                    showQuickView={ showQuickViewModal } />
                            </div>
                        ) }
                    </div>
                }
                <QuickView />
            </div>

            <Pagination
                aclass={ `${'list' === props.cols ? '' : 'justify-content-center'}` }
                count={ products.length }
                unit={ itemsPerPage }
                onChange={ changePos }
                cols={ cols }
                filters={ filters }
            />
        </>
    );
}

export const mapStateToProps = ( state ) => {
    return {
        filters: state.filters,
        products: state.data.products ? state.data.products : []
    };
}

export default connect( mapStateToProps, { addToCart, toggleWishlist, addToCompare, showQuickViewModal, filterSort } )( ProductList );