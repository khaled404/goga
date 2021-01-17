import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { showModal } from '../../../actions';

import { safeContent } from '../../../utils';

function VideoBannerOne( props ) {
    const { content, showModal } = props;
    let image = process.env.PUBLIC_URL + '/' + props.image;

    const openVideoModal = ( e ) => {
        showModal( 'video' );
        e.preventDefault();
    }

    return (
        <div className="video-banner video-banner-bg bg-image text-center" style={ { backgroundImage: `url( ${image} )` } }>
            <div className="container">
                <h3 className="video-banner-title h1 text-white" dangerouslySetInnerHTML={ safeContent( content ) }></h3>

                <Link to="#" className="btn-video btn-iframe" onClick={ openVideoModal }>
                    <i className="icon-play"></i>
                </Link>
            </div>
        </div>
    );
}

export default connect( null, { showModal } )( VideoBannerOne );