import React, { useEffect, useRef } from 'react';
import Carousel from 'react-owl-carousel2';

export default function OwlCarousel( props ) {
    const { adClass, carouselOptions } = props;
    const carouselRef = useRef( null );

    useEffect( () => {
        if ( props.children && ( props.children.length > 0 || ( props.children && props.children.length === undefined ) ) && carouselRef.current.props.className.indexOf( 'owl-quickview' ) > -1 ) {
            let dots;
            let carousel = carouselRef.current;

            if ( document.querySelector( "#owl-dots .carousel-dot" ) ) {
                if ( !document.querySelector( "#owl-dots .carousel-dot.active" ) )
                    document.querySelectorAll( "#owl-dots .carousel-dot" )[ 0 ].classList.add( "active" );
                dots = document.querySelectorAll( '#owl-dots .carousel-dot' );
                for ( let i = 0; i < dots.length; i++ ) {
                    dots[ i ].addEventListener( "click", ( e ) => {
                        carousel.goTo( e.currentTarget.index() );
                    } );
                }
            }
        }

        return () => {
            if ( ( props.children.length > 0 || ( props.children && props.children.length === undefined ) ) && carouselRef.current.props.className.indexOf( 'owl-quickview' ) > -1 ) {
                let dots;
                let carousel = carouselRef.current;

                if ( document.querySelector( "#owl-dots .carousel-dot" ) ) {
                    if ( !document.querySelector( "#owl-dots .carousel-dot.active" ) )
                        document.querySelectorAll( "#owl-dots .carousel-dot" )[ 0 ].classList.add( "active" );
                    dots = document.querySelectorAll( '#owl-dots .carousel-dot' );
                    for ( let i = 0; i < dots.length; i++ ) {
                        dots[ i ].addEventListener( "click", ( e ) => {
                            carousel.goTo( e.currentTarget.index() );
                        } );
                    }
                }
            }
        }
    }, [] )

    const events = {
        onTranslate: function ( e ) {
            if ( !e.target ) return;
            if ( e.target.closest( ".owl-quickview" ) ) {
                document.querySelector( "#owl-dots" ).querySelector( ".active" ).classList.remove( "active" );
                document.querySelector( "#owl-dots" ).children[ ( e.page.index ) ].classList.add( "active" );
            }
        }
    }

    let slider_default_options = {
        items: 1,
        loop: false,
        margin: 0,
        responsiveClass: "true",
        nav: true,
        navText: [ '<i class="icon-angle-left">', '<i class="icon-angle-right">' ],
        dots: true,
        smartSpeed: 400,
        autoplay: false,
        // autoplayTimeout: 5000,
        responsive: {
            320: {
                nav: false
            },
            375: {
                nav: false
            }
        }
    };

    let res = Object.assign( {}, slider_default_options, carouselOptions );

    return (
        props.children !== undefined ?
            props.children.length > 0 || ( props.children && props.children.length === undefined ) ?
                <Carousel ref={ carouselRef } className={ `owl-carousel ${adClass}` } options={ res } events={ events }>
                    { props.children }
                </Carousel>
                : ""
            : ""
    );
}