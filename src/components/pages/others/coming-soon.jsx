import React, { useEffect, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Countdown from 'react-countdown';

import { rendererOne } from '../../features/count-down';

function ComingSoon() {
    useLayoutEffect( () => {
        document.querySelector( "body" ).classList.remove( "loaded" );
    }, [] )

    useEffect( () => {
        setTimeout( () => {
            document.querySelector( "body" ).classList.add( "loaded" );
        }, 200 );
    }, [] )


    return (
        <div className="soon">
            <Helmet>
                <title>Molla React Ecommerce - Coming Soon Page</title>
            </Helmet>

            <h1 className="d-none">Molla React Ecommerce - Coming Soon Page</h1>

            <div className="container">
                <div className="row">
                    <div className="col-md-9 col-lg-8">
                        <div className="soon-content text-center">
                            <div className="soon-content-wrapper">
                                <img src={ `${process.env.PUBLIC_URL}/assets/images/logo-icon.png` } alt="Logo" className="soon-logo mx-auto" />

                                <h1 className="soon-title">Coming Soon</h1>

                                <div className="coming-countdown countdown-separator">
                                    <Countdown date={ `2021-02-01T01:02:03` } renderer={ rendererOne } />
                                </div>

                                <hr className="mt-2 mb-3 mt-md-3" />

                                <p>We are currently working on an awesome new site. Stay tuned for more information.
                                    Subscribe to our newsletter to stay updated on our progress.</p>

                                <form action="#">
                                    <div className="input-group mb-5">
                                        <input type="email" className="form-control bg-transparent" placeholder="Enter your Email Address" required />
                                        <div className="input-group-append">
                                            <button className="btn btn-outline-primary-2" type="submit">
                                                <span>SUBSCRIBE</span>
                                                <i className="icon-long-arrow-right"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>

                                <div className="social-icons justify-content-center mb-0">
                                    <Link to="#" className="social-icon" target="_blank" title="Facebook"><i className="icon-facebook-f"></i></Link>
                                    <Link to="#" className="social-icon" target="_blank" title="Twitter"><i className="icon-twitter"></i></Link>
                                    <Link to="#" className="social-icon" target="_blank" title="Instagram"><i className="icon-instagram"></i></Link>
                                    <Link to="#" className="social-icon" target="_blank" title="Youtube"><i className="icon-youtube"></i></Link>
                                    <Link to="#" className="social-icon" target="_blank" title="Pinterest"><i className="icon-pinterest"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="soon-bg bg-image" style={ { backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/backgrounds/soon-bg.jpg)` } }></div>
        </div>
    )
}

export default React.memo( ComingSoon );