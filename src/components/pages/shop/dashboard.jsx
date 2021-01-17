import React from 'react';
import { Tabs, TabList, TabPanel, Tab } from 'react-tabs';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// import Custom Components
import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';

function DashBoard() {
    return (
        <>
            <Helmet>
                <title>Molla React eCommerce Template | My Account</title>
            </Helmet>

            <h1 className="d-none">Molla React eCommerce Template - My Account</h1>

            <div className="main">
                <PageHeader title="My Account" subTitle="Shop" />
                <Breadcrumb title="My Account" parent1={ [ "Shop", "shop/sidebar/list" ] } adClass="mb-3" />

                <div className="page-content">
                    <div className="dashboard">
                        <div className="container">
                            <ul className="nav nav-dashboard flex-column mb-3 mb-md-0" role="tablist">
                                <Tabs selectedTabClassName="active show">
                                    <div className="row">
                                        <aside className="col-md-4 col-lg-3">
                                            <TabList>
                                                <Tab className="nav-item">
                                                    <span className="nav-link">Dashboard</span>
                                                </Tab>

                                                <Tab className="nav-item">
                                                    <span className="nav-link">Orders</span>
                                                </Tab>

                                                <Tab className="nav-item">
                                                    <span className="nav-link">Downloads</span>
                                                </Tab>

                                                <Tab className="nav-item">
                                                    <span className="nav-link">Addresses</span>
                                                </Tab>

                                                <Tab className="nav-item">
                                                    <span className="nav-link">Account Details</span>
                                                </Tab>

                                                <Tab className="nav-item">
                                                    <Link to="" className="nav-link">Sign Out</Link>
                                                </Tab>
                                            </TabList>
                                        </aside>

                                        <div className="col-md-8 col-lg-9" style={ { marginTop: "1rem" } }>
                                            <div className="tab-pane">
                                                <TabPanel>
                                                    <p>Hello <span className="font-weight-normal text-dark">User</span> (not <span className="font-weight-normal text-dark">User</span>? <Link to="#">Log out</Link>)
                                                    <br />
                                                        From your account dashboard you can view your <Link to="#tab-orders" className="tab-trigger-link link-underline">recent orders</Link>, manage your <Link to="#tab-address" className="tab-trigger-link">shipping and billing addresses</Link>, and <Link to="#tab-account" className="tab-trigger-link">edit your password and account details</Link>.</p>
                                                </TabPanel>

                                                <TabPanel>
                                                    <p>No order has been made yet.</p>
                                                    <Link to={ `${process.env.PUBLIC_URL}/shop/siebar/list` } className="btn btn-outline-primary-2"><span>GO SHOP</span><i className="icon-long-arrow-right"></i></Link>
                                                </TabPanel>

                                                <TabPanel>
                                                    <p>No downloads available yet.</p>
                                                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="btn btn-outline-primary-2"><span>GO SHOP</span><i className="icon-long-arrow-right"></i></Link>
                                                </TabPanel>

                                                <TabPanel>
                                                    <p>The following addresses will be used on the checkout page by default.</p>

                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className="card card-dashboard">
                                                                <div className="card-body">
                                                                    <h3 className="card-title">Billing Address</h3>

                                                                    <p>User Name<br />
                                                                        User Company<br />
                                                                        John str<br />
                                                                        New York, NY 10001<br />
                                                                        1-234-987-6543<br />
                                                                        yourmail@mail.com<br />
                                                                        <Link to="#">Edit <i className="icon-edit"></i></Link></p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-6">
                                                            <div className="card card-dashboard">
                                                                <div className="card-body">
                                                                    <h3 className="card-title">Shipping Address</h3>

                                                                    <p>You have not set up this type of address yet.<br />
                                                                        <Link to="#">Edit <i className="icon-edit"></i></Link></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </TabPanel>

                                                <TabPanel>
                                                    <form action="#">
                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <label>First Name *</label>
                                                                <input type="text" className="form-control" required />
                                                            </div>

                                                            <div className="col-sm-6">
                                                                <label>Last Name *</label>
                                                                <input type="text" className="form-control" required />
                                                            </div>
                                                        </div>

                                                        <label>Display Name *</label>
                                                        <input type="text" className="form-control" required />
                                                        <small className="form-text">This will be how your name will be displayed in the account section and in reviews</small>

                                                        <label>Email address *</label>
                                                        <input type="email" className="form-control" required />

                                                        <label>Current password (leave blank to leave unchanged)</label>
                                                        <input type="password" className="form-control" />

                                                        <label>New password (leave blank to leave unchanged)</label>
                                                        <input type="password" className="form-control" />

                                                        <label>Confirm new password</label>
                                                        <input type="password" className="form-control mb-2" />

                                                        <button type="submit" className="btn btn-outline-primary-2">
                                                            <span>SAVE CHANGES</span>
                                                            <i className="icon-long-arrow-right"></i>
                                                        </button>
                                                    </form>
                                                </TabPanel>
                                            </div>
                                        </div>
                                    </div>
                                </Tabs>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default React.memo( DashBoard );