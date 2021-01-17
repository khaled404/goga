import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import InputRange from 'react-input-range';
import { SlideToggle } from 'react-slide-toggle';
import { Link } from 'react-router-dom';
import 'react-input-range/lib/css/index.css';

import _data from '../../../mock_data/data';
import { getCountByCategory } from '../../../services';
import { toggleCategoryFilter, resetFilter, toggleSizeFilter, toggleBrandFilter, toggleColorFilter, filterPrice } from '../../../actions';
import { findIndex } from '../../../utils';

function ShopSidebar( props ) {
    const [ value, setValue ] = useState( { max: 1000, min: 0 } )
    const [ toggle, setToggle ] = useState( false );
    const sizes = [ "XS", "S", "M", "L", "XL", "XXL" ];
    const brands = [ "Next", "River Island", "Geox", "New Balance", "UGG", "F&F", "Nike" ];
    const colors = [ "#b87145", "#f0c04a", "#333333", "#cc3333", "#3399cc", "#669933", "#f2719c", "#ebebeb" ];
    let categoryCountArr = [];
    const { filters, products } = props;

    _data.shop_categories.map( ( item, index ) => {
        return categoryCountArr.push( getCountByCategory( products.slice( 0, 47 ), item.name ) )
    } );

    useEffect( () => {
        window.addEventListener( "resize", resizeHandle );
        resizeHandle();

        return () => {
            window.removeEventListener( "resize", resizeHandle );
        }
    }, [] )

    function resizeHandle() {
        if ( document.querySelector( "body" ).offsetWidth < 992 )
            setToggle( true );
        else
            setToggle( false );
    }

    function changeIcon( e ) {
        e.target.classList.toggle( 'collapsed' );
    }

    function hideSideBar() {
        if ( document.querySelector( 'body' ).classList.contains( 'sidebar-filter-active' ) )
            document.querySelector( 'body' ).classList.remove( 'sidebar-filter-active' );
    }

    function toggleSideBar() {
        if ( document.querySelector( 'body' ).classList.contains( 'sidebar-filter-active' ) )
            document.querySelector( 'body' ).classList.remove( 'sidebar-filter-active' );
        else
            document.querySelector( 'body' ).classList.add( 'sidebar-filter-active' );
    }

    function clearAll( e ) {
        let items = document.querySelector( '.sidebar-shop' ).querySelectorAll( 'input' );
        for ( let i = 0; i < items.length; i++ ) {
            items[ i ].checked = false;
        }

        items = document.querySelector( '.sidebar-shop' ).querySelectorAll( '.selected' );

        for ( let i = 0; i < items.length; i++ ) {
            items[ i ].classList.remove( 'selected' );
        }

        setValue( { max: 1000, min: 0 } );
        props.resetFilter();
        e.preventDefault();
    }

    return (
        <>
            <aside className={ `${toggle ? 'sidebar-filter' : 'sidebar'} sidebar-shop` }>
                <div className={ toggle ? 'sidebar-filter-wrapper' : '' }>
                    <div className="widget widget-clean">
                        <label>Filters:</label>
                        <a href="#a" className="sidebar-filter-clear" onClick={ ( e ) => clearAll( e ) }>ClearAll</a>
                    </div>

                    <SlideToggle collapsed={ false }>
                        { ( { onToggle, setCollapsibleElement } ) => (
                            <div className="widget widget-collapsible">
                                <h3 className="widget-title">
                                    <a href="#category" onClick={ ( e ) => { onToggle( e ); changeIcon( e ); e.preventDefault() } } role="button" aria-expanded="true" aria-controls="widget-1">Category</a>
                                </h3>

                                <div ref={ setCollapsibleElement }>
                                    <div className="widget-body">
                                        <div className="filter-items filter-items-count">
                                            {
                                                _data.shop_categories.map( ( item, index ) =>
                                                    <div className="filter-item" key={ `cat_${index}` }>
                                                        <div className="custom-control custom-checkbox">

                                                            <input type="checkbox"
                                                                className="custom-control-input"
                                                                id={ `cat-${index + 1}` }
                                                                onClick={ ( e ) => props.toggleCategoryFilter( item.name ) }
                                                                defaultChecked={ -1 < findIndex( filters[ 'category' ], filter => filter === item.name ) ? true : false }
                                                            />

                                                            <label className="custom-control-label" htmlFor={ `cat-${index + 1}` }>{ item.name }</label>

                                                        </div>
                                                        <span className="item-count">{ categoryCountArr[ index ] }</span>
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) }
                    </SlideToggle>

                    <SlideToggle collapsed={ false }>
                        { ( { onToggle, setCollapsibleElement } ) => (
                            <div className="widget widget-collapsible">
                                <h3 className="widget-title"><a href="#Size" onClick={ ( e ) => { onToggle( e ); changeIcon( e ); e.preventDefault() } } role="button" aria-expanded="true" aria-controls="widget-1">Size</a></h3>
                                <div ref={ setCollapsibleElement }>
                                    <div className="widget-body">
                                        <div className="filter-items">
                                            { sizes.map( ( item, index ) => (

                                                <div className="filter-item" key={ index }>
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox"
                                                            className="custom-control-input"
                                                            id={ `size-${index + 1}` }
                                                            onClick={ ( e ) => props.toggleSizeFilter( item ) }
                                                            defaultChecked={ -1 < findIndex( filters[ 'size' ], filter => filter === item ) ? true : false }
                                                        />
                                                        <label className="custom-control-label" htmlFor={ `size-${index + 1}` }>{ item }</label>
                                                    </div>
                                                </div>
                                            ) ) }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) }
                    </SlideToggle>

                    <SlideToggle collapsed={ false }>
                        { ( { onToggle, setCollapsibleElement } ) => (
                            <div className="widget widget-collapsible">
                                <h3 className="widget-title"><a href="#colour" onClick={ ( e ) => { onToggle( e ); changeIcon( e ); e.preventDefault() } } role="button" aria-expanded="true" aria-controls="widget-1">Colour</a></h3>
                                <div ref={ setCollapsibleElement }>
                                    <div className="widget-body">
                                        <div className="filter-colors">
                                            {
                                                colors.map( ( item, index ) => (
                                                    <Link to="#" className={ -1 < findIndex( filters[ 'color' ], filter => filter === item ) ? "selected" : "" } style={ { background: item } } onClick={ ( e ) => { props.toggleColorFilter( item ); e.preventDefault(); } } key={ index }>
                                                        <span className="sr-only">Color Name</span>
                                                    </Link>
                                                ) )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) }
                    </SlideToggle>

                    <SlideToggle collapsed={ false }>
                        { ( { onToggle, setCollapsibleElement } ) => (
                            <div className="widget widget-collapsible">
                                <h3 className="widget-title"><a href="#brand" onClick={ ( e ) => { onToggle( e ); changeIcon( e ); e.preventDefault() } } role="button" aria-expanded="true" aria-controls="widget-1">Brand</a></h3>
                                <div ref={ setCollapsibleElement }>
                                    <div className="widget-body">
                                        <div className="filter-items">
                                            { brands.map( ( item, index ) => (

                                                <div className="filter-item" key={ index }>
                                                    <div className="custom-control custom-checkbox">

                                                        <input type="checkbox"
                                                            className="custom-control-input"
                                                            id={ `brand-${index + 1}` }
                                                            onClick={ ( e ) => props.toggleBrandFilter( item ) }
                                                            defaultChecked={ -1 < findIndex( filters[ 'brand' ],
                                                                filter => filter === item ) ? true : false }
                                                        />
                                                        <label className="custom-control-label" htmlFor={ `brand-${index + 1}` }>{ item }</label>
                                                    </div>
                                                </div>
                                            ) ) }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) }
                    </SlideToggle>

                    <SlideToggle collapsed={ false }>
                        { ( { onToggle, setCollapsibleElement } ) => (
                            <div className="widget widget-collapsible">
                                <h3 className="widget-title">
                                    <a href="#price" onClick={ ( e ) => { onToggle( e ); changeIcon( e ); e.preventDefault() } } role="button" aria-expanded="true" aria-controls="widget-1">Price</a>
                                </h3>

                                <div ref={ setCollapsibleElement }>
                                    <div className="widget-body">
                                        <div className="filter-price">
                                            <div className="filter-price-text">
                                                Price Range:&nbsp;
                                                <span className="filter-price-range">${ value.min } - ${ value.max }</span>
                                            </div>

                                            <div className="price-slider">
                                                <InputRange
                                                    formatLabel={ value => `$${value}` }
                                                    maxValue={ 1000 }
                                                    minValue={ 0 }
                                                    step={ 50 }
                                                    value={ value }
                                                    onChange={ value => { setValue( value ); props.filterPrice( value ); } }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) }
                    </SlideToggle>
                </div>
            </aside>
            { toggle ?
                <button className="sidebar-fixed-toggler" onClick={ toggleSideBar }>
                    <i className="icon-cog"></i>
                </button>
                : ''
            }
            <div className="sidebar-filter-overlay" onClick={ hideSideBar }></div>
        </>
    );
}

export const mapStateToProps = ( state ) => {
    return {
        filters: state.filters,
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps, { toggleCategoryFilter, toggleSizeFilter, toggleBrandFilter, toggleColorFilter, filterPrice, resetFilter } )( ShopSidebar );