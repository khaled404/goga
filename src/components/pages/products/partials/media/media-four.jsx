import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Magnifier } from "react-image-magnifiers";
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import { stickyContentHandle, setStickyValues } from '../../../../../utils';

function MediaFour( props ) {
    const { product } = props;

    if ( !product ) {
        window.location = process.env.PUBLIC_URL + "pages/404";
    }

    const [ photoIndex, setPhotoIndex ] = useState( 0 );
    const [ isOpen, setStatus ] = useState( false );

    const bigImages = product.lgPictures ? product.lgPictures : product.pictures;
    const smallImages = product.smPictures ? product.smPictures : product.pictures;

    useEffect( () => {
        setStickyValues( 20 );
    }, [] )

    useEffect( () => {
        window.addEventListener( 'scroll', stickyContentHandle );

        return () => {
            window.removeEventListener( 'scroll', stickyContentHandle );
        }
    } )

    function openLightBox() {
        let index = parseInt( document.querySelector( ".product-main-image" ).getAttribute( "index" ) );

        if ( !index ) {
            index = 0;
        }
        setStatus( true );
        setPhotoIndex( index );
    }

    function closeLightBox() {
        setStatus( false );
    }

    const setNextHandler = () => {
        setPhotoIndex( photoIndex => ( photoIndex + 1 ) % bigImages.length );
    }

    const setPrevHandler = () => {
        setPhotoIndex( photoIndex => ( photoIndex + bigImages.length - 1 ) % bigImages.length );
    }

    return (
        <>
            <div className="product-gallery mb-0">
                <figure className="product-main-image">

                    { product.discount > 0 ? <span className="product-label label-sale">Sale</span> : '' }

                    { product.new ? <span className="product-label label-new">New</span> : '' }

                    { product.top ? <span className="product-label label-top">Top</span> : '' }

                    <Magnifier
                        imageSrc={ process.env.PUBLIC_URL + '/' + product.pictures[ 0 ] }
                        imageAlt="Example"
                        largeImageSrc={ process.env.PUBLIC_URL + '/' + bigImages[ 0 ] } // Optional
                        dragToMove={ false }
                        mouseActivation="hover"
                        cursorStyleActive="crosshair"
                        id="product-zoom"
                    />

                    <button to="#" id="btn-product-gallery" className="btn-product-gallery" onClick={ openLightBox }>
                        <i className="icon-arrows"></i>
                    </button>
                </figure>

                <div id="product-zoom-gallery" className="product-image-gallery product-gallery-masonry">
                    {
                        product.pictures.map( ( item, index ) =>
                            parseInt( index ) > 0 ?
                                <Link className={ `product-gallery-item ${2 === index ? 'gallery-item-wide' : ''}` } to="#" data-image={ item } data-zoom-image={ bigImages[ index ] } key={ index }>
                                    <img src={ process.env.PUBLIC_URL + '/' + smallImages[ index ] } alt="product back" />
                                </Link> : ''
                        )
                    }
                </div>
            </div>

            {
                isOpen ?
                    <Lightbox
                        mainSrc={ process.env.PUBLIC_URL + '/' + bigImages[ photoIndex ] }
                        nextSrc={ process.env.PUBLIC_URL + '/' + bigImages[ ( photoIndex + 1 ) % bigImages.length ] }
                        prevSrc={ process.env.PUBLIC_URL + '/' + bigImages[ ( photoIndex + bigImages.length - 1 ) % bigImages.length ] }
                        onCloseRequest={ closeLightBox }
                        onMovePrevRequest={ setNextHandler }
                        onMoveNextRequest={ setPrevHandler }
                    />
                    : ''
            }
        </>
    )
};

function mapStateToProps( state, props ) {
    return {
        product: state.data.products.filter( product => product.id === parseInt( props.id ) )[ 0 ]
    }
}

export default connect( mapStateToProps )( MediaFour );