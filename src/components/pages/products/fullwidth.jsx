import React, { useEffect } from 'react';
import imagesLoaded from 'imagesloaded';
import { Helmet } from 'react-helmet';

import MediaOne from './partials/media/media-one';
import DetailSix from './partials/details/detail-six';
import ProductSidebar from '../../features/sidebar/product-sidebar';
import Breadcrumb from '../../common/breadcrumb';
import QuickView from '../../features/product/common/quickview';

import { productGallery } from '../../../utils';

function SingleProduct( props ) {
    let productId = props.match.params.id;

    useEffect( () => {
        productGallery();

        // remove loaded-class on productId change
        let skelItems = document.querySelectorAll( '.skel-pro-single' );

        for ( let i = 0; i < skelItems.length; i++ ) {
            skelItems[ i ].classList.remove( 'loaded' );
        }


        let imgLoad = imagesLoaded( ".product-gallery", { background: true } );

        imgLoad.on( 'done', function ( instance, image ) {
            for ( let i = 0; i < skelItems.length; i++ ) {
                skelItems[ i ].classList.add( 'loaded' );
            }
        } );
    }, [ productId ] )

    return (
        <>
            <Helmet>
                <title>Molla React eCommerce Template | Product Fullwidth</title>
            </Helmet>

            <h1 className="d-none">Molla React eCommerce Template - Product Fullwidth</h1>

            <div className="main">
                <Breadcrumb
                    title="Fullwidth"
                    type="product"
                    slug="fullwidth"
                    adClass="breadcrumb-nav border-0 mb-0"
                    productId={ productId }
                    parent1={ [ "Products", "product" ] }
                    container="container-fluid"
                />

                <div className="page-content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-10">
                                <div className="product-details-top skeleton-body">
                                    <div className="row skel-pro-single fullwidth">
                                        <div className="col-md-6 col-lg-7">
                                            <div className="skel-product-gallery">
                                            </div>

                                            <MediaOne id={ productId } adClass="" />
                                        </div>

                                        <div className="col-md-6 col-lg-5">
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

                                            <DetailSix id={ productId } />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-2 d-md-none d-xl-block">
                                <div className="skeleton-body">
                                    <div className="skel-pro-single">
                                        <div className="skel-widget">
                                        </div>

                                        <div className="skel-widget">
                                        </div>

                                        <ProductSidebar />
                                    </div>
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

export default SingleProduct;