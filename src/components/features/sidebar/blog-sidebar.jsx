import React from 'react';
import { Link } from 'react-router-dom';

function BlogSidebar() {
    return (
        <div className="sidebar">
            <div className="widget widget-search">
                <h3 className="widget-title">Search</h3>

                <form action="#" method="get">
                    <div className="header-search-wrapper search-wrapper-wide">
                        <label htmlFor="ws" className="sr-only">Search in blog</label>
                        <input type="search" className="form-control" name="ws" id="ws" placeholder="Search in blog" required />
                        <button type="submit" className="btn"><i className="icon-search"></i><span className="sr-only">Search</span></button>
                    </div>
                </form>
            </div>

            <div className="widget widget-cats">
                <h3 className="widget-title">Categories</h3>

                <ul>
                    <li><Link to="#">Lifestyle<span>3</span></Link></li>
                    <li><Link to="#">Shopping<span>3</span></Link></li>
                    <li><Link to="#">Fashion<span>1</span></Link></li>
                    <li><Link to="#">Travel<span>3</span></Link></li>
                    <li><Link to="#">Hobbies<span>2</span></Link></li>
                </ul>
            </div>

            <div className="widget">
                <h3 className="widget-title">Popular Posts</h3>

                <ul className="posts-list">
                    <li>
                        <figure>
                            <Link to="#">
                                <img src={ `${process.env.PUBLIC_URL}/assets/images/blog/sidebar/post-1.jpg` } alt="post" />
                            </Link>
                        </figure>

                        <div>
                            <span>Nov 22, 2018</span>
                            <h4><Link to="#">Aliquam tincidunt mauris eurisus.</Link></h4>
                        </div>
                    </li>
                    <li>
                        <figure>
                            <Link to="#">
                                <img src={ `${process.env.PUBLIC_URL}/assets/images/blog/sidebar/post-2.jpg` } alt="post" />
                            </Link>
                        </figure>

                        <div>
                            <span>Nov 19, 2018</span>
                            <h4><Link to="#">Cras ornare tristique elit.</Link></h4>
                        </div>
                    </li>
                    <li>
                        <figure>
                            <Link to="#">
                                <img src={ `${process.env.PUBLIC_URL}/assets/images/blog/sidebar/post-3.jpg` } alt="post" />
                            </Link>
                        </figure>

                        <div>
                            <span>Nov 12, 2018</span>
                            <h4><Link to="#">Vivamus vestibulum ntulla nec ante.</Link></h4>
                        </div>
                    </li>
                    <li>
                        <figure>
                            <Link to="#">
                                <img src={ `${process.env.PUBLIC_URL}/assets/images/blog/sidebar/post-4.jpg` } alt="post" />
                            </Link>
                        </figure>

                        <div>
                            <span>Nov 25, 2018</span>
                            <h4><Link to="#">Donec quis dui at dolor  tempor interdum.</Link></h4>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="widget widget-banner-sidebar">
                <div className="banner-sidebar-title">ad box 280 x 280</div>

                <div className="banner-sidebar banner-overlay">
                    <Link to="#">
                        <img src={ `${process.env.PUBLIC_URL}/assets/images/blog/sidebar/banner.jpg` } alt="banner" />
                    </Link>
                </div>
            </div>

            <div className="widget">
                <h3 className="widget-title">Browse Tags</h3>

                <div className="tagcloud">
                    <Link to="#">fashion</Link>
                    <Link to="#">style</Link>
                    <Link to="#">women</Link>
                    <Link to="#">photography</Link>
                    <Link to="#">travel</Link>
                    <Link to="#">shopping</Link>
                    <Link to="#">hobbies</Link>
                </div>
            </div>

            <div className="widget widget-text">
                <h3 className="widget-title">About Blog</h3>

                <div className="widget-text-content">
                    <p>Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, pulvinar nunc sapien ornare nisl.</p>
                </div>
            </div>
        </div>
    );
}

export default React.memo( BlogSidebar );