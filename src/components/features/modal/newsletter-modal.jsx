import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';

import { isIEBrowser } from '../../../utils';
import { removeNewsletterMdoal } from '../../../actions';

const customStyles = {
    content: {
        top: '50%',
        transform: 'translateY(-50%)'
    },
    overlay: {
        backgroundColor: 'rgba(51,51,51,0.6)',
        zIndex: '10000'
    }
};

Modal.setAppElement( '#root' );

function NewsletterModal( props ) {
    const { newsletter, removeNewsletterMdoal } = props;
    const [ open, setOpen ] = useState( false );
    let timer, closeType;

    useEffect( () => {
        timer = setTimeout( () => {
            if ( newsletter ) {
                setOpen( true );
            }
        }, 10000 );

        return () => {
            if ( timer ) {
                clearTimeout( timer );
            }
        }
    }, [] )

    function changeCloseType() {
        if ( document.querySelector( "input[type='checkbox']" ).checked === true ) {
            closeType = "forever";
        } else {
            closeType = "once";
        }
    }

    function closeModal( e ) {
        if ( closeType === "forever" ) {
            removeNewsletterMdoal();
        }

        setOpen( false );

        document.getElementById( "newsletter-popup-form" ).classList.remove( "ReactModal__Content--after-open" );
    }

    return (
        <Modal
            isOpen={ open }
            onRequestClose={ closeModal }
            style={ customStyles }
            shouldFocusAfterRender={ false }
            contentLabel="Newsletter Modal"
            className="container newsletter-popup-container"
            id="newsletter-popup-form"
        >
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="row no-gutters bg-white newsletter-popup-content">
                        <div className="col-xl-3-5col col-lg-7 banner-content-wrap">

                            <div className="banner-content text-center">

                                <img src={ `${process.env.PUBLIC_URL}/assets/images/popup/newsletter/logo.png` } alt="logo" className="logo" width="60" height="15" />
                                <h2 className="banner-title">get <span>25<span style={ { fontWeight: '400' } }>%</span></span> off</h2>
                                <p>Subscribe to the Molla eCommerce newsletter to receive timely updates from your favorite products.</p>

                                <form action="#">
                                    <div className="input-group input-group-round">
                                        <input type="email" className="form-control form-control-white" placeholder="Your Email Address" aria-label="Email Adress" required />
                                        <div className="input-group-append">
                                            <button className="btn" type="submit"><span>go</span></button>
                                        </div>
                                    </div>
                                </form>

                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="register-policy-2" onChange={ changeCloseType } />
                                    <label className="custom-control-label" style={ isIEBrowser() ? { padding: '2' } : {} } htmlFor="register-policy-2">Do not show this popup again</label>
                                </div>
                            </div>

                        </div>

                        <div className="col-xl-2-5col col-lg-5 ">
                            <img src={ `${process.env.PUBLIC_URL}/assets/images/popup/newsletter/img-1.jpg` } alt="newsletter" className="newsletter-img" />
                        </div>
                    </div>
                </div>
            </div>
            <button title="Close (Esc)" type="button" className="mfp-close" onClick={ closeModal }><span>×</span></button>
        </Modal>
    );
}

function mapStateToProps( state ) {
    return {
        newsletter: state.modal.newsletterModal
    }
}

export default connect( mapStateToProps, { removeNewsletterMdoal } )( NewsletterModal );