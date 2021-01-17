import React, { useEffect } from 'react';
import imagesLoaded from 'imagesloaded';
import { Helmet } from 'react-helmet';

// import Custom Components
import Breadcrumb from '../../common/breadcrumb';
import QuickView from '../../features/product/common/quickview';
import MediaTwo from './partials/media/media-two';
import DescOne from './partials/description/desc-one';
import RelatedProducts from './partials/related-products';
import DetailFour from './partials/details/detail-four';

export default function GalleryProduct( props ) {
    let productId = props.match.params.id;

    useEffect( () => {
        document.querySelector( '.skel-pro-single' ).classList.remove( 'loaded' );

        let imgLoad = imagesLoaded( ".product-lg", { background: true } );

        imgLoad.on( 'done', function ( instance, image ) {
            if ( document.querySelector( '.skel-pro-single' ) ) {
                document.querySelector( '.skel-pro-single' ).classList.add( 'loaded' );
            }

            window.jQuery( ".product-lg .owl-carousel" ).trigger( "refresh.owl.carousel" );
        } );
    }, [ productId ] )

    return (
        <>
            <Helmet>
                <title>Molla React eCommerce Template | Product Gallery</title>
            </Helmet>

            <h1 className="d-none">Molla React eCommerce Template - Product Gallery</h1>

            <div className="main">
                <div className="page-content">
                    <div className="product-details-top skeleton-body">
                        <Breadcrumb
                            title="Gallery"
                            slug="gallery"
                            parent1={ [ "Products", "product" ] }
                            type="product"
                            adClass="breadcrumb-nav border-0 mb-0"
                            productId={ productId }
                        />

                        <div className="skel-pro-single gallery">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 pb-5 mb-4">
                                        <div className="skel-product-gallery">
                                        </div>

                                        <MediaTwo id={ productId } />
                                    </div>

                                    <div className="col-12">
                                        <div className="entry-summary row">
                                            <div className="col-6">
                                                <div className="entry-summary1">
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <div className="entry-summary2">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <DetailFour id={ productId } />
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <DescOne id={ productId } />
                    </div>

                    <div className="container">
                        <h2 className="title text-center mb-4">You May Also Like</h2>

                        <RelatedProducts />
                    </div>
                </div>

                <QuickView />
            </div>
        </>
    )
}