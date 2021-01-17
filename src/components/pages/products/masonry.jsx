import React, { useEffect } from 'react';
import imagesLoaded from 'imagesloaded';
import { Helmet } from 'react-helmet';
import isotope from 'isotope-layout';

import MediaFour from './partials/media/media-four';
import DetailFive from './partials/details/detail-five';
import Breadcrumb from '../../common/breadcrumb';
import QuickView from '../../features/product/common/quickview';

import { productGallery, isotopeLoad, setStickyValues } from '../../../utils';

function MasonryProduct( props ) {
    let productId = props.match.params.id;

    useEffect( () => {
        productGallery();

        document.querySelector( '.skel-pro-single' ).classList.remove( 'loaded' );

        let imgLoad = imagesLoaded( ".product-main-image", { background: true } );

        imgLoad.on( 'done', function ( instance, image ) {
            document.querySelector( '.skel-pro-single' ).classList.add( 'loaded' );
            isotopeLoad( isotope, imagesLoaded, '.product-gallery-masonry', '.product-gallery-item' );
            setStickyValues( 120 );
        } );
    }, [ productId ] )

    return (
        <>
            <Helmet>
                <title>Molla React eCommerce Template | Product Masonry StickyInfo</title>
            </Helmet>

            <h1 className="d-none">Molla React eCommerce Template - Product Masonry StickyInfo</h1>

            <div className="main">
                <Breadcrumb
                    title="Masonry"
                    type="product"
                    slug="masonry"
                    adClass="breadcrumb-nav border-0 mb-0"
                    productId={ productId }
                    parent1={ [ "Products", "product" ] }
                />

                <div className="page-content">
                    <div className="container">
                        <div className="product-details-top skeleton-body">
                            <div className="row skel-pro-single masonry_sticky mb-0">
                                <div className="col-md-6">
                                    <div className="skel-product-gallery">
                                    </div>

                                    <MediaFour id={ productId } adClass="" />
                                </div>

                                <div className="col-md-6">
                                    <div className="entry-summary row">
                                        <div className="col-md-12">
                                            <div className="entry-summary1">
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="entry-summary2">
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="entry-summary3">
                                            </div>
                                        </div>
                                    </div>

                                    <DetailFive id={ productId } />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <QuickView />
            </div>
        </>
    )
}

export default MasonryProduct;