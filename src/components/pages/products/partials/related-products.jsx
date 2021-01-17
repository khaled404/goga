import React from 'react';
import { connect } from 'react-redux';

import { addToCart, addToCompare, toggleWishlist, showQuickViewModal } from '../../../../actions';

import ProductSix from '../../../features/product/product-six';
import OwlCarousel from '../../../features/owl-carousel';

import { mainSlider8 } from '../../../settings';

function RelatedProducts( props ) {
    const { products, addToCart, toggleWishlist, addToCompare, showQuickViewModal } = props;

    return (
        <OwlCarousel adClass="owl-simple carousel-equal-height carousel-with-shadow cols-lg-4 cols-md-3 cols-xs-2 cols-1" carouselOptions={ mainSlider8 } carouselId="relatedProducts">
            {
                products.slice( 20, 25 ).map( ( item, index ) => (
                    <ProductSix
                        product={ item }
                        onAddToCart={ addToCart }
                        onToggleWishlist={ toggleWishlist }
                        onAddToCompare={ addToCompare }
                        showQuickView={ showQuickViewModal }
                        key={ `product-${index}` }
                    />
                ) )
            }
        </OwlCarousel>
    );
}

const mapStateToProps = ( state ) => ( {
    products: state.data.products
} )

export default connect( mapStateToProps, { addToCart, addToCompare, toggleWishlist, showQuickViewModal } )( RelatedProducts );