import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

import MobileMainNav from './partials/mobile-nav';

export default function MobileMenu() {
    return (
        <div className="mobile-menu-container">
            <div className="mobile-menu-wrapper">
                <span className="mobile-menu-close"><i className="icon-close"></i></span>

                <form action="#" method="get" className="mobile-search">
                    <label htmlFor="mobile-search" className="sr-only">Search</label>
                    <input type="search" className="form-control" name="mobile-search" id="mobile-search" placeholder="Search product ..." required />
                    <button className="btn btn-primary" type="submit"><i className="icon-search"></i></button>
                </form>

                <Tabs defaultIndex={ 0 } selectedTabClassName="show">
                    <TabList className="nav nav-pills-mobile nav-border-anim" role="tablist">
                        <Tab className="nav-item">
                            <span className="nav-link">Menu</span>
                        </Tab>

                        <Tab className="nav-item">
                            <span className="nav-link">Categories</span>
                        </Tab>
                    </TabList>

                    <div className="tab-content">
                        <TabPanel>
                            <MobileMainNav />
                        </TabPanel>

                        <TabPanel>
                            <nav className="mobile-cats-nav">
                                <ul className="mobile-cats-menu">
                                    <li><Link className="mobile-cats-lead" to="#">Daily offers</Link></li>
                                    <li><Link className="mobile-cats-lead" to="#">Gift Ideas</Link></li>
                                    <li><Link to="#">Beds</Link></li>
                                    <li><Link to="#">Lighting</Link></li>
                                    <li><Link to="#">Sofas & Sleeper sofas</Link></li>
                                    <li><Link to="#">Storage</Link></li>
                                    <li><Link to="#">Armchairs & Chaises</Link></li>
                                    <li><Link to="#">Decoration </Link></li>
                                    <li><Link to="#">Kitchen Cabinets</Link></li>
                                    <li><Link to="#">Coffee & Tables</Link></li>
                                    <li><Link to="#">Outdoor Furniture </Link></li>
                                </ul>
                            </nav>
                        </TabPanel>
                    </div>
                </Tabs>

                <div className="social-icons">
                    <Link to="#" className="social-icon" target="_blank" title="Facebook"><i className="icon-facebook-f"></i></Link>
                    <Link to="#" className="social-icon" target="_blank" title="Twitter"><i className="icon-twitter"></i></Link>
                    <Link to="#" className="social-icon" target="_blank" title="Instagram"><i className="icon-instagram"></i></Link>
                    <Link to="#" className="social-icon" target="_blank" title="Youtube"><i className="icon-youtube"></i></Link>
                </div>
            </div>
        </div>
    )
}