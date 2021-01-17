import React, { useEffect } from 'react';
import imagesLoaded from 'imagesloaded';
import { Helmet } from 'react-helmet';

import Breadcrumb from '../../common/breadcrumb';
import QuickView from '../../features/product/common/quickview';
import MediaOne from './partials/media/media-one';
import DetailThree from './partials/details/detail-three';
import DescOne from './partials/description/desc-one';
import RelatedProducts from './partials/related-products';

import { productGallery } from '../../../utils';

export default function CenteredProduct( props ) {
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
                <title>Molla React eCommerce Template | Centered Product</title>
            </Helmet>

            <h1 className="d-none">Molla React eCommerce Template - Centered Product</h1>

            <div className="main">
                <Breadcrumb
                    title="Centered"
                    parent1={ [ "Products", "product" ] }
                    slug="centered"
                    type="product"
                    adClass="breadcrumb-nav border-0 mb-0"
                    productId={ productId }
                />

                <div className="page-content">
                    <div className="container">
                        <div className="product-details-top mb-2 skeleton-body">
                            <div className="row skel-pro-single">
                                <div className="col-md-6">
                                    <div className="skel-product-gallery">
                                    </div>

                                    <MediaOne id={ productId } />
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

                                    <DetailThree id={ productId } />
                                </div>
                            </div>
                        </div>

                        <DescOne id={ productId } />

                        <h2 className="title text-center mb-4">You May Also Like</h2>

                        <RelatedProducts />
                    </div>
                </div>

                <QuickView />
            </div>
        </>
    )
}