import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Magnifier } from "react-image-magnifiers";
import Lightbox from 'react-image-lightbox';

function MediaThree( props ) {
    const { product } = props;

    if ( !product ) {
        window.location = process.env.PUBLIC_URL + "pages/404";
    }

    const bigImages = product.lgPictures ? product.lgPictures : product.pictures;
    const [ photoIndex, setPhotoIndex ] = useState( 0 );
    const [ isOpen, setStatus ] = useState( false );

    function openLightBox() {
        setStatus( true );
        setPhotoIndex( 0 );
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
            <div className="product-gallery product-gallery-separated">
                { product.pictures.map( ( item, index ) =>
                    <figure className="product-separated-item" key={ index + product.name + product.id }>

                        <Magnifier
                            imageSrc={ process.env.PUBLIC_URL + '/' + item }
                            imageAlt="Example"
                            largeImageSrc={ process.env.PUBLIC_URL + '/' + bigImages[ parseInt( index ) ] } // Optional
                            dragToMove={ false }
                            mouseActivation="hover"
                            cursorStyleActive="crosshair"
                            id="product-zoom"
                        />

                        {
                            parseInt( index ) === 0 ?
                                <button to="#" id="btn-product-gallery" className="btn-product-gallery" onClick={ openLightBox }>
                                    <i className="icon-arrows"></i>
                                </button> : ''
                        }
                        {
                            parseInt( index ) === 0 && product.discount > 0 ?
                                <span className="product-label label-sale">Sale</span> :
                                parseInt( index ) === 0 && product.new ?
                                    <span className="product-label label-new">New</span> :
                                    parseInt( index ) === 0 && product.top > 0 ?
                                        <span className="product-label label-top">Top</span> : ''
                        }
                    </figure>
                ) }
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
}

function mapStateToProps( state, props ) {
    return {
        product: state.data.products.filter( product => product.id === parseInt( props.id ) )[ 0 ]
    }
}

export default connect( mapStateToProps )( MediaThree );