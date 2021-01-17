import React from 'react';
import { Link } from 'react-router-dom';

export default function VideoBannerThree( props ) {
    const { title, image, background, showModal } = props;

    const openVideoModal = ( e ) => {
        showModal( 'video' );
        e.preventDefault();
    }

    return (
        <div className="video-banner bg-image text-center pt-8 pb-8" style={ { backgroundImage: `url(${background})` } }>
            <div className="container">
                <div className="row">
                    <div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2">
                        <div className="video-poster">
                            <img src={ process.env.PUBLIC_URL + '/' + image } alt="poster" />

                            <div className="video-poster-content">
                                <h3 className="h4 video-poster-title text-white">{ title }</h3>
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