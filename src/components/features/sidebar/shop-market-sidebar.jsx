import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import 'react-input-range/lib/css/index.css';

// import components 
import Accordion from '../../features/accordion/accordion';
import Card from '../../features/accordion/card';

import { getCountByRating } from '../../../services';
import { toggleBrandFilter, toggleColorFilter, toggleRatingFilter, filterPrice } from '../../../actions';
import { findIndex } from '../../../utils';

function ShopSidebar( props ) {
    const [ toggle, setToggle ] = useState( false );

    const colors = [ "#b87145", "#f0c04a", "#333333", "#cc3333", "#3399cc", "#669933", "#f2719c", "#ebebeb" ];
    const brands = [ "Next", "River Island", "Geox", "New Balance", "UGG", "F&F", "Nike" ];
    const ratings = [ 5, 4, 3, 2, 1 ];
    const priceTitleArr = [ "Under $25", "$25 to $50", "$50 to $100", "$100 to $200", "$200 & Above" ];
    const priceRangeArr = [
        {
            min: 0,
            max: 24
        },
        {
            min: 25,
            max: 50
        },
        {
            min: 50,
            max: 100
        },
        {
            min: 100,
            max: 200
        },
        {
            min: 200,
            max: 10000
        }
    ];

    let ratingCountArr = [];
    let { filters, products } = props;

    for ( let i = 5; i >= 1; i-- ) {
        ratingCountArr.push( getCountByRating( products.slice( 0, 74 ), i ) );
    }
    products = products.slice( 66, 74 );

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

    return (
        <>
            <aside className={ `${toggle ? 'sidebar-filter' : 'sidebar'} sidebar-shop` }>
                <div className={ toggle ? 'sidebar-filter-wrapper' : '' }>

                    <div className="widget widget-categories">
                        <h3 className="widget-title">Electronics</h3>

                        <div className="widget-body">
                            <Accordion>
                                <Card title="Laptops & Computers" expanded={ true }>
                                    <ul>
                                        <li><Link to="#">Desktop Computers</Link></li>
                                        <li><Link to="#">Monitors</Link></li>
                                        <li><Link to="#">Laptops</Link></li>
                                        <li><Link to="#">iPad &amp; Tablets</Link></li>
                                        <li><Link to="#">Hard Drives &amp; Storage</Link></li>
                                        <li><Link to="#">Printers &amp; Supplies</Link></li>
                                        <li><Link to="#">Computer Accessories</Link></li>
                                    </ul>
                                </Card>
                                <Card title="TV & Video">
                                    <ul>
                                        <li><Link to="#">AV Receivers &amp; Amplifiers</Link></li>
                                        <li><Link to="#">Blu-ray Players &amp; Recorders</Link></li>
                                        <li><Link to="#">DVD Players &amp; Recorders</Link></li>
                                        <li><Link to="#">HD DVD Players</Link></li>
                                        <li><Link to="#">Home Theater Systems</Link></li>
                                        <li><Link to="#">Projection Screens</Link></li>
                                        <li><Link to="#">Projectors</Link></li>
                                        <li><Link to="#">Satellite Television</Link></li>
                                        <li><Link to="#">Televisions</Link></li>
                                        <li><Link to="#">TV-DVD Combos</Link></li>
                                        <li><Link to="#">Streaming Media Players</Link></li>
                                    </ul>
                                </Card>
                                <Card title="Cell Phone">
                                    <ul>
                                        <li><Link to="#">Carrier Cell Phones</Link></li>
                                        <li><Link to="#">Unlocked Cell Phones</Link></li>
                                        <li><Link to="#">Mobile Broadband</Link></li>
                                        <li><Link to="#">Accessories</Link></li>
                                        <li><Link to="#">Cases, Holsters &amp; Clips</Link></li>
                                    </ul>
                                </Card>
                                <Card title="Digital Cameras">
                                    <ul>
                                        <li><Link to="#">AV Receivers &amp; Amplifiers</Link></li>
                                        <li><Link to="#">Blu-ray Players &amp; Recorders</Link></li>
                                        <li><Link to="#">DVD Players &amp; Recorders</Link></li>
                                        <li><Link to="#">HD DVD Players</Link></li>
                                        <li><Link to="#">Home Theater Systems</Link></li>
                                        <li><Link to="#">Projection Screens</Link></li>
                                        <li><Link to="#">Projectors</Link></li>
                                        <li><Link to="#">Satellite Television</Link></li>
                                        <li><Link to="#">Televisions</Link></li>
                                        <li><Link to="#">TV-DVD Combos</Link></li>
                                        <li><Link to="#">Streaming Media Players</Link></li>
                                    </ul>
                                </Card>
                            </Accordion>
                        </div>
                    </div>

                    <div className="widget">
                        <h3 className="widget-title">Brands</h3>

                        <div className="widget-body">

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

                    <div className="widget">
                        <h3 className="widget-title">Price</h3>

                        <div className="widget-body">
                            <div className="filter-items">
                                {
                                    priceTitleArr.map( ( item, index ) =>
                                        <div className="filter-item" key={ index }>
                                            <div className="custom-control custom-radio">
                                                <input
                                                    type="radio"
                                                    className="custom-control-input"
                                                    id={ `price-${index + 1}` }
                                                    name="filter-price"
                                                    onClick={ ( e ) => { props.filterPrice( priceRangeArr[ index ] ); } }
                                                    defaultChecked={ filters[ 'value' ] && filters[ 'value' ].min === priceRangeArr[ index ].min && filters[ 'value' ].max === priceRangeArr[ index ].max ? true : false }
                                                />
                                                <label className="custom-control-label" htmlFor={ `price-${index + 1}` }>{ priceTitleArr[ index ] }</label>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>

                    <div className="widget">
                        <h3 className="widget-title">Customer Rating</h3>

                        <div className="widget-body">
                            <div className="filter-items">
                                {
                                    ratings.map( ( item, index ) =>

                                        <div className="filter-item" key={ index } >
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox"
                                                    className="custom-control-input"
                                                    id={ `cus-rating-${index}` }
                                                    onClick={ ( e ) => props.toggleRatingFilter( item ) }
                                                    defaultChecked={ -1 < findIndex( filters[ 'rating' ],
                                                        filter => filter === item ) ? true : false }
                                                />
                                                <label className="custom-control-label" htmlFor={ `cus-rating-${index}` }>
                                                    <span className="ratings-container">
                                                        <span className="ratings">
                                                            <span className="ratings-val" style={ { width: 20 * item + "%" } }></span>
                                                        </span>
                                                        <span className="ratings-text">( { ratingCountArr[ index ] } )</span>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>

                                    )
                                }
                            </div>
                        </div>
                    </div>

                    <div className="widget">
                        <h3 className="widget-title">Colour</h3>

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
            </aside>
            { toggle ?
                <button className="sidebar-fixed-toggler" onClick={ toggleSideBar }><i className="icon-cog"></i></button> :
                ''
            }
            <div className="sidebar-filter-overlay" onClick={ hideSideBar }></div>
        </>
    );
}

function mapStateToProps( state ) {
    let rat_count = [];
    for ( let i = 5; i >= 1; i-- ) {
        rat_count.push( getCountByRating( state.data.products.slice( 0, 74 ), i ) );
    }

    return {
        products: state.data.products ? state.data.products : [],
        filters: state.filters
    }
}

export default connect( mapStateToProps, { toggleBrandFilter, toggleColorFilter, toggleRatingFilter, filterPrice } )( ShopSidebar );