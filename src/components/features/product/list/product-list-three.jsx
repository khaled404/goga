import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import imagesLoaded from 'imagesloaded';

import ProductFive from '../product-five';
import Pagination from '../../pagination';

import { addToCart, showQuickViewModal, filterSort } from '../../../../actions';
import { getVisibleProducts } from '../../../../services';

function ProductListThree( props ) {
    const { filterSort, filters, addToCart, showQuickViewModal } = props
    const [ startPos, setPos ] = useState( 0 );
    let products = props.products;
    products = getVisibleProducts( products.slice( 20, 35 ), filters );
    let count = products.length;
    const maxCount = 8;

    function changePos( pos ) {
        setPos( pos );
    }

    function changeFilter( e ) {
        setPos( 0 );
        filterSort( e.target.value );
    }

    useEffect( () => {
        setPos( 0 );

        document.querySelector( '.skeleton-body.skel-shop-products' ).classList.remove( 'loaded' );

        let imgLoad = imagesLoaded( ".products", { background: true } );

        imgLoad.on( 'done', function ( instance, image ) {
            document.querySelector( '.skeleton-body.skel-shop-products' ).classList.add( 'loaded' );
        } );
    }, [ filters ] )

    useEffect( () => {
        document.querySelector( '.skeleton-body.skel-shop-products' ).classList.remove( 'loaded' );

        let imgLoad = imagesLoaded( ".products", { background: true } );

        imgLoad.on( 'done', function ( instance, image ) {
            document.querySelector( '.skeleton-body.skel-shop-products' ).classList.add( 'loaded' );
        } );
    }, [ startPos ] )

    return (
        products ?
            <>
                <div className="toolbox">
                    <div className="toolbox-left">
                        <div className="toolbox-info">
                            { count } Products found
                        </div>
                    </div>

                    <div className="toolbox-right">
                        <div className="toolbox-sort">
                            <label htmlFor="sortby">Sort by:</label>
                            <div className="select-custom">
                                <select name="sortby"
                                    id="sortby"
                                    defaultValue={ props.filters.sortBy }
                                    className="form-control"
                                    onChange={ changeFilter }
                                >
                                    <option value="popularity">Most Popular</option>
                                    <option value="rating">Most Rated</option>
                                    <option value="date">Date</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="products mb-3">
                    <div className="row skeleton-body skel-shop-products">
                        { products.slice( startPos, startPos + maxCount ).map( ( item, index ) =>
                            <div className="col-6 col-md-4 col-xl-3" key={ item.id + '-' + item.name }>
                                <div className="skel-pro">
                                </div>

                                <ProductFive
                                    product={ item }
                                    onAddToCart={ addToCart }
                                    showQuickView={ showQuickViewModal }
                                />
                            </div>
                        ) }
                    </div>
                </div>
                <Pagination count={ count } unit={ maxCount } onChange={ changePos } filters={ filters } />
            </> : ''
    );
}

export const mapStateToProps = ( state ) => {
    return {
        filters: state.filters,
        products: state.data.products ? state.data.products : [],
    };
}

export default connect( mapStateToProps, { addToCart, showQuickViewModal, filterSort } )( ProductListThree );