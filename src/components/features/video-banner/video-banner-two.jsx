import React from 'react';
import { Link } from 'react-router-dom';

export default function VideoBannerTwo( props ) {
    const { title, subTitle, content, image, showModal } = props;

    const openVideoModal = ( e ) => {
        showModal( 'video' );
        e.preventDefault();
    }

    return (
        <div className="video-banner video-banner-poster text-center">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 mb-3 mb-md-0">
                        <h3 className="video-banner-title h3"><span className="text-primary">{ subTitle }</span>{ title }</h3>
                        <p>{ content }</p>
                    </div>

                    <div className="col-md-6">
                        <div className="video-poster">
                            <img src={ process.env.PUBLIC_URL + '/' + image } alt="poster" />

                            <div className="video-poster-content">
                                <Link
                                    to="https://www.youtube.com/watch?v=vBPgmASQ1A0"
                                    className="btn-video btn-iframe" onClick={ openVideoModal } >
                                    <i className="icon-play"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}