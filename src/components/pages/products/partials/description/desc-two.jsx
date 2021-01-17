import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { isIEBrowser } from '../../../../../utils';

function DescTwo( props ) {
    const { product } = props;

    return (
        <Tabs selectedTabClassName="show" selectedTabPanelClassName="active">
            <div className="product-details-tab product-details-extended">
                <TabList className="nav nav-pills justify-content-center">
                    <Tab className="nav-item">
                        <span className="nav-link"> Description</span>
                    </Tab>

                    <Tab className="nav-item">
                        <span className="nav-link"> Additional information</span>
                    </Tab>

                    <Tab className="nav-item">
                        <span className="nav-link">Shipping & Returns</span>
                    </Tab>

                    <Tab className="nav-item">
                        <span className="nav-link">Reviews ({ product.reviews })</span>
                    </Tab>
                </TabList>

                <div className="tab-content">
                    <TabPanel className="tab-pane">
                        <div className="product-desc-content">
                            <div className="product-desc-row bg-image" style={ { backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/products/single/extended/bg-1.jpg)` } }>
                                <div className="container">
                                    <div className="row justify-content-end">
                                        <div className="col-sm-6 col-lg-4">
                                            <h2>Product Information</h2>
                                            <ul>
                                                <li>Faux suede fabric upper</li>
                                                <li>Tie strap buckle detail</li>
                                                <li>Block heel</li>
                                                <li>Open toe</li>
                                                <li>Heel Height: 7cm / 2.5 inches</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="product-desc-row bg-image text-white" style={ { backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/products/single/extended/bg-2.jpg)` } }>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h2>Design</h2>
                                            <p>The perfect choice for the summer months. These wedges are perfect for holidays and home, with the thick cross-over strap design and heel strap with an adjustable buckle fastening. Featuring chunky soles with an espadrille and cork-style wedge. </p>
                                        </div>

                                        <div className="col-md-6">
                                            <h2>Fabric & care</h2>
                                            <p>As part of our Forever Comfort collection, these wedges have ultimate cushioning with soft padding and flexi soles. Perfect for strolls into the old town on holiday or a casual wander into the village.</p>
                                        </div>
                                    </div>

                                    <div className="mb-5"></div>

                                    <img src={ `${process.env.PUBLIC_URL}/assets/images/products/single/extended/sign.png` } alt="" className="ml-auto mr-auto" />
                                </div>
                            </div>

                            <div className="product-desc-row bg-image" style={ { backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/products/single/extended/bg-3.jpg)` } }>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <blockquote>
                                                <p>“ Everything is important - <br />that success is in the details. ”</p>

                                                <cite>– Steve Jobs</cite>
                                            </blockquote>
                                            <p>Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel className="tab-pane">
                        <div className="product-desc-content">
                            <div className="container">
                                <h3>Information</h3>
                                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. </p>

                                <h3>Fabric & care</h3>
                                <ul>
                                    <li>Faux suede fabric</li>
                                    <li>Gold tone metal hoop handles.</li>
                                    <li>RI branding</li>
                                    <li>Snake print trim interior </li>
                                    <li>Adjustable cross body strap</li>
                                    <li> Height: 31cm; Width: 32cm; Depth: 12cm; Handle Drop: 61cm</li>
                                </ul>
                                <h3>Size</h3>
                                <p>one size</p>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel className="tab-pane">
                        <div className="product-desc-content">
                            <div className="container">
                                <h3>Delivery & returns</h3>
                                <p>We deliver to over 100 countries around the world. For full details of the delivery options we offer, please view our <Link to="#">Delivery information</Link><br />
                                    We hope you’ll love every purchase, but if you ever need to return an item you can do so within a month of receipt. For full details of how to make a return, please view our <Link to="#">Returns information</Link></p>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel className="tab-pane">
                        <div className="container">
                            <div className="reviews">
                                <h3>Reviews (2)</h3>
                                <div className="review">
                                    <div className="row no-gutters" style={ isIEBrowser() ? { flexDirection: 'row' } : {} }>
                                        <div className="col-auto">
                                            <h4><Link to="#">Samanta J.</Link></h4>
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={ { width: "80%" } }></div>
                                                </div>
                                            </div>
                                            <span className="review-date">6 days ago</span>
                                        </div>
                                        <div className="col">
                                            <h4>Good, perfect size</h4>

                                            <div className="review-content">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus cum dolores assumenda asperiores facilis porro reprehenderit animi culpa atque blanditiis commodi perspiciatis doloremque, possimus, explicabo, autem fugit beatae quae voluptas!</p>
                                            </div>

                                            <div className="review-action">
                                                <Link to="#"><i className="icon-thumbs-up"></i>Helpful (2)</Link>
                                                <Link to="#"><i className="icon-thumbs-down"></i>Unhelpful (0)</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="review">
                                    <div className="row no-gutters" style={ isIEBrowser() ? { flexDirection: 'row' } : {} }>
                                        <div className="col-auto">
                                            <h4><Link to="#">John Doe</Link></h4>
                                            <div className="ratings-container">
                                                <div className="ratings">
                                                    <div className="ratings-val" style={ { width: "100%" } }></div>
                                                </div>
                                            </div>
                                            <span className="review-date">5 days ago</span>
                                        </div>
                                        <div className="col">
                                            <h4>Very good</h4>

                                            <div className="review-content">
                                                <p>Sed, molestias, tempore? Ex dolor esse iure hic veniam laborum blanditiis laudantium iste amet. Cum non voluptate eos enim, ab cumque nam, modi, quas iure illum repellendus, blanditiis perspiciatis beatae!</p>
                                            </div>

                                            <div className="review-action">
                                                <Link to="#"><i className="icon-thumbs-up"></i>Helpful (0)</Link>
                                                <Link to="#"><i className="icon-thumbs-down"></i>Unhelpful (0)</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                </div>
            </div>
        </Tabs>
    )
}

function mapStateToProps( state, props ) {
    return {
        product: state.data.products.filter( product => product.id === parseInt( props.id ) )[ 0 ]
    }
}

export default connect( mapStateToProps )( DescTwo );