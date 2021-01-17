import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// import Custom Components
import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';
import ProfileTwo from '../../features/profile/profile-two';
import IconBox from '../../features/icon-box';

import { countTo } from '../../../utils';
import data from '../../../mock_data/data.json';

function AboutTwo() {
    useEffect( () => {
        countTo();
    } )

    return (
        <div className="main">
            <Helmet>
                <title>Molla React Ecommerce - About Page</title>
            </Helmet>

            <h1 className="d-none">Molla React Ecommerce - About Page</h1>

            <PageHeader title="About us 2" subTitle="Pages" />
            <Breadcrumb title="About Us 2" parent1={ [ "Pages", "pages/about" ] } />

            <div className="page-content pb-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="about-text text-center mt-3">
                                <h2 className="title text-center mb-2">Who We Are</h2>
                                <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, uctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. </p>
                                <img src={ `${process.env.PUBLIC_URL}/assets/images/about/about-2/signature.png` } alt="signature" className="mx-auto mb-5" />
                                <img src={ `${process.env.PUBLIC_URL}/assets/images/about/about-2/img-1.jpg` } alt="temp" className="mx-auto mb-6" />
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6">
                            <IconBox boxStyle="icon-box-sm text-center" iconClass="icon-puzzle-piece" title="Design Quality" text="Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero <br/>eu augue." />
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <IconBox boxStyle="icon-box-sm text-center" iconClass="icon-life-ring" title="Professional Support" text="Praesent dapibus, neque id cursus faucibus, <br/>tortor neque egestas augue, eu vulputate <br/>magna eros eu erat. " />
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <IconBox boxStyle="icon-box-sm text-center" iconClass="icon-heart-o" title="Made With Love" text="Pellentesque a diam sit amet mi ullamcorper <br/>vehicula. Nullam quis massa sit amet <br/>nibh viverra malesuada." />
                        </div>
                    </div>
                </div>

                <div className="mb-2"></div>

                <div className="bg-image pt-7 pb-5 pt-md-12 pb-md-9" style={ { backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/backgrounds/bg-4.jpg)` } }>
                    <div className="container">
                        <div className="row">
                            <div className="col-6 col-md-3">
                                <div className="count-container text-center">
                                    <div className="count-wrapper text-white">
                                        <span className="count" data-from="0" data-to="40" data-speed="3000" data-refresh-interval="50">0</span>k+
                                    </div>
                                    <h3 className="count-title text-white">Happy Customer</h3>
                                </div>
                            </div>

                            <div className="col-6 col-md-3">
                                <div className="count-container text-center">
                                    <div className="count-wrapper text-white">
                                        <span className="count" data-from="0" data-to="20" data-speed="3000" data-refresh-interval="50">0</span>+
                                    </div>
                                    <h3 className="count-title text-white">Years in Business</h3>
                                </div>
                            </div>

                            <div className="col-6 col-md-3">
                                <div className="count-container text-center">
                                    <div className="count-wrapper text-white">
                                        <span className="count" data-from="0" data-to="95" data-speed="3000" data-refresh-interval="50">0</span>%
                                    </div>
                                    <h3 className="count-title text-white">Return Clients</h3>
                                </div>
                            </div>

                            <div className="col-6 col-md-3">
                                <div className="count-container text-center">
                                    <div className="count-wrapper text-white">
                                        <span className="count" data-from="0" data-to="15" data-speed="3000" data-refresh-interval="50">0</span>
                                    </div>
                                    <h3 className="count-title text-white">Awards Won</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-light-2 pt-6 pb-7 mb-6">
                    <div className="container">
                        <h2 className="title text-center mb-4">Meet Our Team</h2>

                        <div className="row">
                            { data.team_members.map( ( member, index ) =>
                                <div className="col-sm-6 col-lg-3" key={ index }>
                                    <ProfileTwo image={ member.img } name={ member.name } title={ member.title } />
                                </div>
                            ) }
                        </div>

                        <div className="text-center mt-3">
                            <Link to={ `${process.env.PUBLIC_URL}/blog/classic` } className="btn btn-sm btn-minwidth-lg btn-outline-primary-2">
                                <span>LETS START WORK</span>
                                <i className="icon-long-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="brands-text text-center mx-auto mb-6">
                                <h2 className="title">The world's premium design brands in one destination.</h2>
                                <p>Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nis</p>
                            </div>

                            <div className="brands-display">
                                <div className="row justify-content-center">
                                    { data.brands.default.slice( 0, 8 ).map( ( brand, index ) =>
                                        <div className="col-6 col-sm-4 col-md-3" key={ index }>
                                            <Link to="#" className="brand">
                                                <img src={ process.env.PUBLIC_URL + '/' + brand.image } alt="Brand Name" />
                                            </Link>
                                        </div>
                                    ) }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo( AboutTwo );