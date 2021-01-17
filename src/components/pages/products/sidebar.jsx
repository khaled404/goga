import React, { useEffect } from 'react';
import imagesLoaded from 'imagesloaded';
import { Helmet } from 'react-helmet';

import MediaOne from './partials/media/media-one';
import ProductDetailOne from './partials/details/detail-one';
import DescOne from './partials/description/desc-one';
import RelatedProducts from './partials/related-products';
import ProductSidebar from '../../features/sidebar/product-sidebar';
import Breadcrumb from '../../common/breadcrumb';
import QuickView from '../../features/product/common/quickview';

import { productGallery } from '../../../utils';

function SidebarProduct( props ) {
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
                <title>Molla React eCommerce Template | Boxed With Sidebar</title>
            </Helmet>

            <h1 className="d-none">Molla React eCommerce Template - Boxed With Sidebar</h1>

            <div className="main">
                <Breadcrumb
                    title="Sidebar"
                    type="product"
                    slug="sidebar"
                    adClass="breadcrumb-nav border-0 mb-0"
                    productId={ productId }
                    parent1={ [ "Products", "product" ] }
                />

                <div className="page-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="product-details-top skeleton-body horizontal">
                                    <div className="row skel-pro-single boxed">
                                        <div className="col-md-6">
                                            <div className="skel-product-gallery">
                                            </div>

                                            <MediaOne id={ productId } adClass="" />
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
                                            </div>

                                            <ProductDetailOne id={ productId } />
                                        </div>
                                    </div>
                                </div>

                                <DescOne id={ productId } />

                                <h2 className="title text-center mb-4">You May Also Like</h2>

                                <RelatedProducts />
                            </div>

                            <div className="col-lg-3">
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

export default SidebarProduct;