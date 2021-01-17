import React from 'react';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import { connect } from 'react-redux';

import OwlCarousel from '../features/owl-carousel';
import ProductNine from '../features/product/product-nine';
import { productSlider } from '../settings';

import { getProductsByCategory, getNewProducts } from '../../services';
import { addToCart, toggleWishlist, addToCompare, showQuickViewModal } from '../../actions';

import data from '../../mock_data/data.json';

function NewCollection( props ) {
    const { addToCart, toggleWishlist, addToCompare, showQuickViewModal } = props;

    let products = props.products;
    products = getNewProducts( products.slice( 35, 50 ) );

    return (
        <div className="container new-arrivals">
            <Tabs selectedTabClassName="show" className="just-action-icons-sm">
                <div className="heading heading-flex mb-3">
                    <div className="heading-left">
                        <h2 className="title">New Arrivals</h2>
                    </div>
                    <div className="heading-right">
                        <TabList className="nav nav-pills nav-border-anim justify-content-center">
                            {
                                data.home_categories.map( ( item, index ) =>
                                    <Tab className="nav-item" key={ item.id }>
                                        <span className="nav-link">{ item.name }</span>
                                    </Tab>
                                )
                            }
                        </TabList>
                    </div>
                </div>
                {
                    data.home_categories.map( ( item, index ) =>
                        <TabPanel key={ `${item.id}-tab-product` }>
                            <OwlCarousel adClass="owl-full carousel-equal-height carousel-with-shadow" carouselOptions={ productSlider } >
                                { getProductsByCategory( products, item.name ).map( ( item, index ) =>
                                    <ProductNine product={ item }
                                        key={ "new" + index }
                                        onAddToCart={ addToCart }
                                        onToggleWishlist={ toggleWishlist }
                                        onAddToCompare={ addToCompare }
                                        showQuickView={ showQuickViewModal } />
                                ) }
                            </OwlCarousel>
                        </TabPanel>
                    )
                }
            </Tabs>
        </div>
    )
}

function mapStateToProps( state, props ) {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect(
    mapStateToProps, { addToCart, toggleWishlist, addToCompare, showQuickViewModal }
)( NewCollection );
