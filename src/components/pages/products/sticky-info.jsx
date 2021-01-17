import React, { useEffect } from 'react';
import imagesLoaded from 'imagesloaded';
import { Helmet } from 'react-helmet';

import Breadcrumb from '../../common/breadcrumb';
import QuickView from '../../features/product/common/quickview';
import RelatedProducts from './partials/related-products';
import MediaThree from './partials/media/media-three';
import DetailTwo from './partials/details/detail-two';
import { setStickyValues } from '../../../utils';

export default function StickyInfo( props ) {
    let productId = props.match.params.id;

    useEffect( () => {
        document.querySelector( '.skel-pro-single' ).classList.remove( 'loaded' );

        let imgLoad = imagesLoaded( ".product-gallery", { background: true } );

        imgLoad.on( 'done', function ( instance, image ) {
            document.querySelector( '.skel-pro-single' ).classList.add( 'loaded' );
            setStickyValues( 120 );
        } );
    }, [ productId ] )

    return (
        <>
            <Helmet>
                <title>Molla React eCommerce Template | Product StickyInfo</title>
            </Helmet>

            <h1 className="d-none">Molla React eCommerce Template - Product StickyInfo</h1>

            <div className="main">

                <Breadcrumb
                    title="Sticky Info"
                    slug="sticky"
                    parent1={ [ "Products", "product" ] }
                    type="product"
                    adClass="breadcrumb-nav border-0 mb-0"
                    productId={ productId }
                />

                <div className="page-content">
                    <div className="container">
                        <div className="product-details-top mb-2 skeleton-body">
                            <div className="row skel-pro-single sticky">
                                <div className="col-md-6">
                                    <div className="skel-product-gallery">
                                    </div>

                                    <MediaThree id={ productId } />
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

                                    <DetailTwo id={ productId } />
                                </div>
                            </div>
                        </div>
                    </div>

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