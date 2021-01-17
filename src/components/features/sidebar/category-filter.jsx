import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// import Jsons
import data from '../../../mock_data/data';

// import services functions
import { getCountByCategory } from '../../../services';

function CategoryFilter( props ) {
    const { products } = props;

    let categoryArr = [ "Women", "Men", "Holiday Shop", "Gifts", "Homeware" ];
    let humnanCountArr = [], wearCountArr = [], gridCount = 0;

    data.shop_categories.map( ( item, index ) => {
        return wearCountArr.push( getCountByCategory( products, item.name ) );
    } );

    categoryArr.map( ( item, index ) => {
        return humnanCountArr.push( getCountByCategory( products, item ) );
    } );

    for ( let i = 0; i < wearCountArr.length; i++ ) {
        gridCount += wearCountArr[ i ];
    }

    function hideSideBar() {
        if ( document.querySelector( 'body' ).classList.contains( 'sidebar-filter-active' ) ) {
            document.querySelector( 'body' ).classList.remove( 'sidebar-filter-active' );
        }
    }

    function clearAll( e ) {
        let items = document.querySelector( '.sidebar-shop' ).querySelectorAll( 'input' );

        for ( let i = 0; i < items.length; i++ ) {
            items[ i ].checked = false;
        }

        e.preventDefault();
    }

    return (
        <>
            <div className="sidebar-filter-overlay" onClick={ hideSideBar }></div>

            <aside className="sidebar-shop sidebar-filter sidebar-filter-banner">
                <div className="sidebar-filter-wrapper">
                    <div className="widget widget-clean">
                        <button style={ { padding: "0" } } onClick={ hideSideBar }><i className="icon-close"></i>Filters</button>
                        <Link to="#" className="sidebar-filter-clear" onClick={ clearAll }>Clean All</Link>
                    </div>

                    <div className="widget">
                        <h3 className="widget-title">
                            Browse Category
                        </h3>

                        <div className="widget-body">
                            <div className="filter-items filter-items-count">
                                <div className="filter-item">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="cat-1" />
                                        <label className="custom-control-label" htmlFor="cat-1">Women</label>
                                    </div>
                                    <span className="item-count">{ humnanCountArr[ 0 ] }</span>
                                </div>

                                <div className="filter-item">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="cat-2" />
                                        <label className="custom-control-label" htmlFor="cat-2">Men</label>
                                    </div>
                                    <span className="item-count">{ humnanCountArr[ 1 ] }</span>
                                </div>

                                <div className="filter-item">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="cat-3" />
                                        <label className="custom-control-label" htmlFor="cat-3">Holiday Shop</label>
                                    </div>
                                    <span className="item-count">{ humnanCountArr[ 2 ] }</span>
                                </div>

                                <div className="filter-item">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="cat-4" />
                                        <label className="custom-control-label" htmlFor="cat-4">Gifts</label>
                                    </div>
                                    <span className="item-count">{ humnanCountArr[ 3 ] }</span>
                                </div>

                                <div className="filter-item">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="cat-5" />
                                        <label className="custom-control-label" htmlFor="cat-5">Homeware</label>
                                    </div>
                                    <span className="item-count">{ humnanCountArr[ 4 ] }</span>
                                </div>

                                <div className="filter-item">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="cat-6" defaultChecked="checked" />
                                        <label className="custom-control-label" htmlFor="cat-6">Grid Categories Fullwidth</label>
                                    </div>
                                    <span className="item-count">{ gridCount }</span>
                                </div>

                                <div className="sub-filter-items">
                                    <div className="filter-item">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="cat-7" />
                                            <label className="custom-control-label" htmlFor="cat-7">Dresses</label>
                                        </div>
                                        <span className="item-count">{ wearCountArr[ 0 ] }</span>
                                    </div>

                                    <div className="filter-item">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="cat-8" />
                                            <label className="custom-control-label" htmlFor="cat-8">T-shirts</label>
                                        </div>
                                        <span className="item-count">{ wearCountArr[ 1 ] }</span>
                                    </div>

                                    <div className="filter-item">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="cat-9" />
                                            <label className="custom-control-label" htmlFor="cat-9">Bags</label>
                                        </div>
                                        <span className="item-count">{ wearCountArr[ 2 ] }</span>
                                    </div>

                                    <div className="filter-item">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="cat-10" />
                                            <label className="custom-control-label" htmlFor="cat-10">Jackets</label>
                                        </div>
                                        <span className="item-count">{ wearCountArr[ 3 ] }</span>
                                    </div>

                                    <div className="filter-item">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="cat-11" />
                                            <label className="custom-control-label" htmlFor="cat-11">Shoes</label>
                                        </div>
                                        <span className="item-count">{ wearCountArr[ 4 ] }</span>
                                    </div>

                                    <div className="filter-item">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="cat-12" />
                                            <label className="custom-control-label" htmlFor="cat-12">Jumpers</label>
                                        </div>
                                        <span className="item-count">{ wearCountArr[ 5 ] }</span>
                                    </div>

                                    <div className="filter-item">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="cat-13" />
                                            <label className="custom-control-label" htmlFor="cat-13">Jeans</label>
                                        </div>
                                        <span className="item-count">{ wearCountArr[ 6 ] }</span>
                                    </div>

                                    <div className="filter-item">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="cat-14" />
                                            <label className="custom-control-label" htmlFor="cat-14">Sportwear</label>
                                        </div>
                                        <span className="item-count">{ wearCountArr[ 7 ] }</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    )
}

export const mapStateToProps = ( state ) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps )( CategoryFilter );