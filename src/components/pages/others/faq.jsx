import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

// import Custom Components
import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';
import Accordion from '../../features/accordion/accordion';
import Card from '../../features/accordion/card';

import { isIEBrowser } from '../../../utils';

function FAQ() {
    return (
        <div className="main">
            <Helmet>
                <title>Molla React Ecommerce - FAQ Page</title>
            </Helmet>

            <h1 className="d-none">Molla React Ecommerce - FAQ Page</h1>

            <PageHeader title="F.A.Q" subTitle="Pages" />
            <Breadcrumb title="FAQ" parent1={ [ "Pages", "pages/about" ] } />

            <div className="page-content">
                <div className="container">
                    <h2 className="title text-center mb-3">Shipping Information</h2>

                    <Accordion adClass="accordion-rounded">
                        <Card title="How will my parcel be delivered?" adClass="card-box card-sm bg-light">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis. Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam, gravida non, commodo a, sodales sit amet, nisi.
                        </Card>

                        <Card title="Do I pay for delivery?" adClass="card-box card-sm bg-light">
                            Ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
                        </Card>

                        <Card title="Will I be charged customs fees?" adClass="card-box card-sm bg-light">
                            Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
                        </Card>

                        <Card title="My item has become faulty" adClass="card-box card-sm bg-light"  >
                            Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
                        </Card>
                    </Accordion>

                    <h2 className="title text-center mb-3">Orders and Returns</h2>

                    <Accordion adClass="accordion-rounded">
                        <Card title="Tracking my order" adClass="card-box card-sm bg-light">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.
                        </Card>

                        <Card title="I haven’t received my order" adClass="card-box card-sm bg-light">
                            Ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
                        </Card>

                        <Card title="How can I return an item?" adClass="card-box card-sm bg-light">
                            Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
                        </Card>
                    </Accordion>

                    <h2 className="title text-center mb-3">Payments</h2>

                    <Accordion adClass="accordion-rounded">
                        <Card title="What payment types can I use?" adClass="card-box card-sm bg-light">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.
                        </Card>

                        <Card title="Can I pay by Gift Card?" adClass="card-box card-sm bg-light">
                            Ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
                        </Card>

                        <Card title="I can't make a payment" adClass="card-box card-sm bg-light">
                            Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
                        </Card>

                        <Card title="Has my payment gone through?" adClass="card-box card-sm bg-light">
                            Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
                        </Card>
                    </Accordion>
                </div>
            </div>

            <div className="cta cta-display bg-image pt-4 pb-4" style={ { backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/backgrounds/cta/bg-7.jpg)` } }>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-9 col-xl-7">
                            <div className={ `row no-gutters ${isIEBrowser() ? '' : 'flex-column'} flex-sm-row align-items-sm-center` } >
                                <div className="col">
                                    <h3 className="cta-title text-white">If You Have More Questions</h3>
                                    <p className="cta-desc text-white">Quisque volutpat mattis eros</p>
                                </div>

                                <div className="col-auto">
                                    <Link to={ `${process.env.PUBLIC_URL}/pages/contact` } className="btn btn-outline-white"><span>CONTACT US</span><i className="icon-long-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo( FAQ );