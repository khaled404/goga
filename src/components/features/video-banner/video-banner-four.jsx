import React from 'react';
import { Link } from 'react-router-dom';

export default function VideoBannerFour( props ) {
    const { title, subTitle, content, image, btn, btn_link, showModal } = props;

    const openVideoModal = ( e ) => {
        showModal( 'video' );
        e.preventDefault();
    }

    return (
        <div className="video-banner bg-light pt-5 pb-5">
            <div className="container align-items-center">
                <div className="video-banner-box bg-white">
                    <div className="row align-items-center">

                        <div className="col-md-6 mb-3 mb-md-0">
                            <div className="video-box-content">
                                <h3 className="video-banner-title h1"><span className="text-primary">{ subTitle }</span><strong>{ title }</strong></h3>

                                <p>{ content }</p>

                                <Link
                                    to={ btn_link ? btn_link : "#" }
                                    className="btn btn-outline-primary">
                                    <span>{ btn ? btn : 'Click Here' }</span>
                                    <i className="icon-long-arrow-right"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="video-poster">
                                <img src={ process.env.PUBLIC_URL + '/' + image } alt="poster" />

                                <div className="video-poster-content">
                                    <Link
                                        to="https://www.youtube.com/watch?v=vBPgmASQ1A0"
                                        className="btn-video btn-iframe"
                                        onClick={ openVideoModal }>
                                        <i className="icon-play"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}