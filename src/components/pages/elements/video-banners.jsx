import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

// import Custom Components
import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';
import VideoBannerOne from '../../features/video-banner/video-banner-one';
import VideoBannerTwo from '../../features/video-banner/video-banner-two';
import VideoBannerThree from '../../features/video-banner/video-banner-three';
import VideoBannerFour from '../../features/video-banner/video-banner-four';
import VideoModal from '../../features/modal/video-modal';

import { showModal } from '../../../actions';

function VideoBanners( props ) {
    const { showModal } = props;

    return (
        <>
            <Helmet>
                <title>Molla React eCommerce Template | Video Banners</title>
            </Helmet>

            <h1 className="d-none">Molla React eCommerce Template - Video Banners</h1>

            <div className="main">

                <PageHeader title="Video Banners" subTitle="Elements" />
                <Breadcrumb title="Video Banners" parent1={ [ "Elements", "elements" ] } />

                <div className="page-content">
                    <div className="container">
                        <h2 className="title mb-3 text-center">Fullwidth Banner</h2>
                    </div>

                    <VideoBannerOne
                        content='<span>New Video</span><strong>Womens New Arrivals</strong>'
                        image={ `assets/images/video/bg-1.jpg` }
                    />

                    <div className="container">
                        <hr className="mt-5 mb-4" />
                        <h2 className="title mb-3 text-center">Video Banner with Description</h2>
                    </div>

                    <VideoBannerTwo
                        title="Womens New Arrivals"
                        subTitle="New Video"
                        content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper ..."
                        image={ `assets/images/video/poster-1.jpg` }
                        showModal={ showModal }
                    />

                    <div className="container">
                        <hr className="mt-5 mb-4" />
                        <h2 className="title mb-3 text-center">Video Banner with Background</h2>
                    </div>

                    <VideoBannerThree
                        title="Womens New Arrivals"
                        image={ `assets/images/video/poster-2.jpg` }
                        background={ `${process.env.PUBLIC_URL}/assets/images/video/bg-2.jpg` }
                        showModal={ showModal }
                    />

                    <div className="container">
                        <hr className="mt-5 mb-4" />
                        <h2 className="title mb-3 text-center">Deal Video Banner</h2>
                    </div>

                    <VideoBannerFour
                        title="Deal Banner"
                        subTitle="New Video"
                        content="Lorem ipsum dolor sit amet, consecte adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis."
                        image={ `assets/images/video/poster-3.jpg` }
                        showModal={ showModal }
                    />
                </div>

                <VideoModal />
            </div>
        </>
    );
}

export default connect( null, { showModal } )( VideoBanners );