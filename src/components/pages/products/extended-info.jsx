import React, { useEffect } from 'react';
import imagesLoaded from 'imagesloaded';
import { Helmet } from 'react-helmet';

// import Custom Components
import Breadcrumb from '../../common/breadcrumb';
import QuickView from '../../features/product/common/quickview';
import MediaOne from './partials/media/media-one';
import DetailOne from './partials/details/detail-one';
import DescTwo from './partials/description/desc-two';
import RelatedProducts from './partials/related-products';

import { productGallery } from '../../../utils';

export default function ExtendedInfo( props ) {
    const productId = props.match.params.id;

    useEffect( () => {
        productGallery();

        document.querySelector( '.skel-pro-single' ).classList.remove( 'loaded' );

        let imgLoad = imagesLoaded( ".product-main-image", { background: true } );

        imgLoad.on( 'done', function ( instance, image ) {
            document.querySelector( '.skel-pro-single' ).classList.add( 'loaded' );
        } );
    }, [ productId ] )

    return (
        <>
            <Helmet>
                <title>Molla React eCommerce Template | Product Extended Info</title>
            </Helmet>

            <h1 className="d-none">Molla React eCommerce Template - Product Extended Info</h1>

            <div className="main">
                <Breadcrumb
                    title="Extended Description"
                    slug="extended"
                    parent1={ [ "Products", "product" ] }
                    type="product"
                    adClass="breadcrumb-nav border-0 mb-0"
                    productId={ productId }
                />

                <div className="page-content">
                    <div className="container">
                        <div className="product-details-top mb-2 skeleton-body horizontal">
                            <div className="row skel-pro-single">
                                <div className="col-md-6">
                                    <div className="skel-product-gallery">
                                    </div>

                                    <MediaOne id={ productId } adClass="" />
                                </div>

                                <div className="col-md-6">
                                    <div className="entry-summary row">
                                        <div className="col-md-12">
                                            <div className="entry-summary1"></div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="entry-summary2"></div>
                                        </div>
                                    </div>

                                    <DetailOne id={ productId } />
                                </div>
                            </div>
                        </div>
                    </div>

                    <DescTwo id={ productId } />

                    <h2 className="title text-center mb-4">You May Also Like</h2>

                    <div className="container">
                        <RelatedProducts />
                    </div>
                </div>

                <QuickView />
            </div>
        </>
    )
}