import React from 'react';
import { Link } from 'react-router-dom';

import { mobileMenu } from '../../../utils';

function MobileMainNav( props ) {
    const PUBLIC_URL = "/react/molla"

    React.useEffect( () => {
        mobileMenu();
    } )

    return (
        <nav className="mobile-nav">
            <ul className="mobile-menu">
                <li>
                    <Link to={ `${process.env.PUBLIC_URL}` }>
                        Home
                    </Link>

                    <ul>
                        <li><Link to={ `${PUBLIC_URL}/demo-1/` } target="_blank">01 - furniture store</Link></li>
                        <li><Link to={ `${PUBLIC_URL}/demo-2/` } target="_blank">02 - furniture store</Link></li>
                        <li><Link to={ `${PUBLIC_URL}/demo-3/` } target="_blank">03 - electronic store</Link></li>
                        <li><Link to={ `${PUBLIC_URL}/demo-4/` } target="_blank">04 - electronic store</Link></li>
                        <li><Link to={ `${PUBLIC_URL}/demo-5/` } target="_blank">05 - fashion store</Link></li>
                        <li><Link to={ `${PUBLIC_URL}/demo-6/` } target="_blank">06 - fashion store</Link></li>
                        <li><Link to={ `${PUBLIC_URL}/demo-7/` } target="_blank">07 - fashion store</Link></li>
                        <li><Link to={ `${PUBLIC_URL}/demo-8/` } target="_blank">08 - fashion store</Link></li>
                        <li><Link to={ `${PUBLIC_URL}/demo-9/` } target="_blank">09 - fashion store</Link></li>
                        <li><Link to={ `${PUBLIC_URL}/demo-10/` } target="_blank">10 - shoes store</Link></li>
                        <li><Link to={ `${PUBLIC_URL}/demo-11/` } target="_blank">11 - furniture simple store</Link></li>
                        <li><Link to={ `${PUBLIC_URL}/demo-12/` } target="_blank">12 - fashion simple store</Link></li>
                        <li><Link to={ `${PUBLIC_URL}/demo-13/` } target="_blank">13 - market</Link></li>
                        <li><Link to={ `${PUBLIC_URL}/demo-14/` } target="_blank">14 - market fullwidth</Link></li>
                        <li><Link to={ `${PUBLIC_URL}/demo-15/` } target="_blank">15 - lookbook 1</Link></li>
                        <li><Link to={ `${PUBLIC_URL}/demo-16/` } target="_blank">16 - lookbook 2</Link></li>
                        <li><Link to={ `${PUBLIC_URL}/demo-17/` } target="_blank">17 - fashion store</Link></li>
                        <li><Link to={ `${PUBLIC_URL}/demo-18/` } target="_blank">18 - fashion store (with sidebar)</Link></li>
                        <li><Link to={ `${PUBLIC_URL}/demo-19/` } target="_blank">19 - games store</Link></li>
                        <li><Link to={ `${PUBLIC_URL}/demo-20/` } target="_blank">20 - book store</Link></li>
                        <li><Link to={ `${PUBLIC_URL}/demo-21/` } target="_blank">21 - sport store</Link></li>
                        <li><Link to={ `${PUBLIC_URL}/demo-22/` } target="_blank">22 - tools store</Link></li>
                        <li><Link to={ `${PUBLIC_URL}/demo-23/` } target="_blank">23 - fashion left navigation store</Link></li>
                        <li><Link to={ `${PUBLIC_URL}/demo-24/` } target="_blank">24 - extreme sport store</Link></li>
                    </ul>
                </li>

                <li>
                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                        Shop
                    </Link>

                    <ul>
                        <li><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>Shop List</Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/2cols` }>Shop Grid 2 Columns</Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/3cols` }>Shop Grid 3 Columns</Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/4cols` }>Shop Grid 4 Columns</Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/shop/market` }><span>Shop Market<span className="tip tip-new">New</span></span></Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/shop/nosidebar/boxed` }><span>Shop Boxed No Sidebar<span className="tip tip-hot">Hot</span></span></Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/shop/nosidebar/fullwidth` }>Shop Fullwidth No Sidebar</Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/shop/category/boxed` }>Product Category Boxed</Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/shop/category/fullwidth` }><span>Product Category Fullwidth<span className="tip tip-new">New</span></span></Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/shop/cart` }>Cart</Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/shop/checkout` }>Checkout</Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/shop/wishlist` }>Wishlist</Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/shop/dashboard` }>My Account</Link></li>
                        <li><Link to="#">Lookbook</Link></li>
                    </ul>
                </li>

                <li>
                    <Link to={ `${process.env.PUBLIC_URL}/product/default/7` } className="sf-with-ul">
                        Product
                    </Link>
                    <ul>
                        <li><Link to={ `${process.env.PUBLIC_URL}/product/default/7` }>Default</Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/product/centered/9` }>Centered</Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/product/extended/8` }><span>Extended Info<span className="tip tip-new">New</span></span></Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/product/gallery/1` }>Gallery</Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/product/sticky/6` }>Sticky Info</Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/product/sidebar/5` }>Boxed With Sidebar</Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/product/fullwidth/2` }>Full Width</Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/product/masonry/4` }>Masonry Sticky Info</Link></li>
                    </ul>
                </li>

                <li>
                    <Link to={ `${process.env.PUBLIC_URL}/pages/about` }>
                        Pages
                    </Link>
                    <ul>
                        <li>
                            <Link to={ `${process.env.PUBLIC_URL}/pages/about` } className="sf-with-ul">About</Link>

                            <ul>
                                <li><Link to={ `${process.env.PUBLIC_URL}/pages/about` }>About 01</Link></li>
                                <li><Link to={ `${process.env.PUBLIC_URL}/pages/about-2` }>About 02</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to={ `${process.env.PUBLIC_URL}/pages/contact` } className="sf-with-ul">Contact</Link>

                            <ul>
                                <li><Link to={ `${process.env.PUBLIC_URL}/pages/contact` }>Contact 01</Link></li>
                                <li><Link to={ `${process.env.PUBLIC_URL}/pages/contact-2` }>Contact 02</Link></li>
                            </ul>
                        </li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/pages/login` }>Login</Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/pages/faq` }>FAQs</Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/pages/404` }>Error 404</Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/pages/coming-soon` }>Coming Soon</Link></li>
                    </ul>
                </li>

                <li>
                    <Link to={ `${process.env.PUBLIC_URL}/blog/classic` }>
                        Blog
                    </Link>

                    <ul>
                        <li><Link to={ `${process.env.PUBLIC_URL}/blog/classic` }>Classic</Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/blog/listing` } >Listing</Link></li>
                        <li>
                            <Link to="#" className="sf-with-ul">Grid</Link>
                            <ul>
                                <li><Link to={ `${process.env.PUBLIC_URL}/blog/grid/2cols` }>Grid 2 columns</Link></li>
                                <li><Link to={ `${process.env.PUBLIC_URL}/blog/grid/3cols` }>Grid 3 columns</Link></li>
                                <li><Link to={ `${process.env.PUBLIC_URL}/blog/grid/4cols` }>Grid 4 columns</Link></li>
                                <li><Link to={ `${process.env.PUBLIC_URL}/blog/grid/sidebar` }>Grid sidebar</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="#" className="sf-with-ul">Masonry</Link>
                            <ul>
                                <li><Link to={ `${process.env.PUBLIC_URL}/blog/masonry/2cols` }>Masonry 2 columns</Link></li>
                                <li><Link to={ `${process.env.PUBLIC_URL}/blog/masonry/3cols` }>Masonry 3 columns</Link></li>
                                <li><Link to={ `${process.env.PUBLIC_URL}/blog/masonry/4cols` }>Masonry 4 columns</Link></li>
                                <li><Link to={ `${process.env.PUBLIC_URL}/blog/masonry/sidebar` }>Masonry sidebar</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="#" className="sf-with-ul">Mask</Link>
                            <ul>
                                <li><Link to={ `${process.env.PUBLIC_URL}/blog/mask/grid` }>Blog mask grid</Link></li>
                                <li><Link to={ `${process.env.PUBLIC_URL}/blog/mask/masonry` }>Blog mask masonry</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="#" className="sf-with-ul">Single Post</Link>
                            <ul>
                                <li><Link to={ `${process.env.PUBLIC_URL}/blog/single/3` }>Default with sidebar</Link></li>
                                <li><Link to={ `${process.env.PUBLIC_URL}/blog/single-2/97` }>Fullwidth no sidebar</Link></li>
                                <li><Link to={ `${process.env.PUBLIC_URL}/blog/single-3/98` }>Fullwidth with sidebar</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li>
                    <Link to={ `${process.env.PUBLIC_URL}/elements/list` } className="sf-with-ul">
                        Elements
                    </Link>

                    <ul>
                        <li><Link to={ `${process.env.PUBLIC_URL}/elements/products` }>Products</Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/elements/typography` }>Typography</Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/elements/titles` }>Titles</Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/elements/banners` }>Banners</Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/elements/categories` }>Product Category</Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/elements/video-banners` }>Video Banners</Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/elements/buttons` }>Buttons</Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/elements/accordions` }>Accordions</Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/elements/tabs` }>Tabs</Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/elements/testimonials` }>Testimonials</Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/elements/blog-posts` }>Blog Posts</Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/elements/portfolios` }>Portfolio</Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/elements/cta` }>Call to Action</Link></li>
                        <li><Link to={ `${process.env.PUBLIC_URL}/elements/icon-boxes` }>Icon Boxes</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}

export default MobileMainNav;