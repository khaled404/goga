import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import CategoryFilter from '../../features/sidebar/category-filter';

import { initSettings } from '../../../utils';
import data from '../../../mock_data/data';
import { getCountByCategory } from '../../../services';
import PageHader from '../../common/page-header';

function ProductCategory( props ) {
    const { products } = props;
    const grid = props.match.params.grid;
    const title = { "boxed": "Product Category Boxed", "fullwidth": "Product Category Fullwidth" }
    const breadcrumbs = { "boxed": "Boxed", "fullwidth": "Fullwidth" };
    let counts = [];

    if ( grid !== 'boxed' && grid !== 'fullwidth' ) {
        window.location = process.env.PUBLIC_URL + "/pages/404";
    }

    useEffect( () => {
        initSettings();
    } )

    function showSideBar() {
        document.querySelector( 'body' ).classList.add( 'sidebar-filter-active' );
    }

    if ( !products ) return '';

    data.shop_categories.map( ( item, index ) => {
        counts.push( getCountByCategory( products, item.name ) );

        return null;
    } );

    return (
        <>
            <Helmet>
                <title>Molla React eCommerce Template | Product Category</title>
            </Helmet>

            <h1 className="d-none">Molla React eCommerce Template - Product Category</h1>

            <div className="main">
                <PageHader title={ title[ grid ] } subTitlte="Shop" />

                <nav aria-label="breadcrumb" className="breadcrumb-nav breadcrumb-with-filter">
                    <div className={ grid === 'boxed' ? 'container' : 'container-fluid' }>
                        <button className="sidebar-toggler" onClick={ showSideBar } style={ { padding: "0" } }><i className="icon-bars"></i>Filters</button>

                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to={ `${process.env.PUBLIC_URL}/` }>Home</Link></li>
                            <li className="breadcrumb-item"><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>Shop</Link></li>
                            <li className="breadcrumb-item"><Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>Product Category</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">{ breadcrumbs[ grid ] }</li>
                        </ol>
                    </div>
                </nav>

                <div className="page-content">
                    <div className="categories-page" key={ grid }>
                        { grid === "boxed" ?
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="banner banner-cat banner-badge">
                                            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                                                <div className="lazy-overlay bg-4"></div>

                                                <LazyLoadImage
                                                    src={ `${process.env.PUBLIC_URL}/assets/images/category/boxed/banner-1.jpg` }
                                                    alt="banner"
                                                    width={ 320 }
                                                    height={ 580 }
                                                    effect="blur"
                                                    threshold={ 500 }
                                                />
                                            </Link>

                                            <Link className="banner-link" to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                                                <h3 className="banner-title">Dresses</h3>
                                                <h4 className="banner-subtitle">{ counts[ 0 ] } Products</h4>
                                                <span className="banner-link-text">Shop Now</span>
                                            </Link>
                                        </div>

                                        <div className="banner banner-cat banner-badge">
                                            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                                                <div className="lazy-overlay bg-4"></div>

                                                <LazyLoadImage
                                                    src={ `${process.env.PUBLIC_URL}/assets/images/category/boxed/banner-2.jpg` }
                                                    alt="banner"
                                                    width={ 320 }
                                                    height={ 280 }
                                                    effect="blur"
                                                    threshold={ 500 }
                                                />
                                            </Link>

                                            <Link className="banner-link" to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                                                <h3 className="banner-title">Jackets</h3>
                                                <h4 className="banner-subtitle">{ counts[ 3 ] } Products</h4>
                                                <span className="banner-link-text">Shop Now</span>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <div className="banner banner-cat banner-badge">
                                                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                                                        <div className="lazy-overlay bg-4"></div>

                                                        <LazyLoadImage
                                                            src={ `${process.env.PUBLIC_URL}/assets/images/category/boxed/banner-3.jpg` }
                                                            alt="banner"
                                                            width={ 280 }
                                                            height={ 280 }
                                                            effect="blur"
                                                            threshold={ 500 }
                                                        />
                                                    </Link>

                                                    <Link className="banner-link" to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                                                        <h3 className="banner-title">T-shirts</h3>
                                                        <h4 className="banner-subtitle">{ counts[ 1 ] } Products</h4>
                                                        <span className="banner-link-text">Shop Now</span>
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className="col-sm-6">
                                                <div className="banner banner-cat banner-badge">
                                                    <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                                                        <div className="lazy-overlay bg-4"></div>

                                                        <LazyLoadImage
                                                            src={ `${process.env.PUBLIC_URL}/assets/images/category/boxed/banner-4.jpg` }
                                                            alt="banner"
                                                            width={ 280 }
                                                            height={ 280 }
                                                            effect="blur"
                                                            threshold={ 500 }
                                                        />
                                                    </Link>

                                                    <Link className="banner-link" to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                                                        <h3 className="banner-title">Jeans</h3>
                                                        <h4 className="banner-subtitle">{ counts[ 6 ] } Products</h4>
                                                        <span className="banner-link-text">Shop Now</span>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="banner banner-cat banner-badge">
                                            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                                                <div className="lazy-overlay bg-4"></div>

                                                <LazyLoadImage
                                                    src={ `${process.env.PUBLIC_URL}/assets/images/category/boxed/banner-5.jpg` }
                                                    alt="banner"
                                                    width={ 320 }
                                                    height={ 580 }
                                                    effect="blur"
                                                    threshold={ 500 }
                                                />
                                            </Link>

                                            <Link className="banner-link" to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                                                <h3 className="banner-title">Bags</h3>
                                                <h4 className="banner-subtitle">{ counts[ 2 ] } Products</h4>
                                                <span className="banner-link-text">Shop Now</span>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 col-md-3">
                                        <div className="banner banner-cat banner-badge">
                                            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                                                <div className="lazy-overlay bg-4"></div>

                                                <LazyLoadImage
                                                    src={ `${process.env.PUBLIC_URL}/assets/images/category/boxed/banner-6.jpg` }
                                                    alt="banner"
                                                    width={ 280 }
                                                    height={ 280 }
                                                    effect="blur"
                                                    threshold={ 500 }
                                                />
                                            </Link>

                                            <Link className="banner-link" to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                                                <h3 className="banner-title">Sportwear</h3>
                                                <h4 className="banner-subtitle">{ counts[ 7 ] } Products</h4>
                                                <span className="banner-link-text">Shop Now</span>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 col-md-3 order-md-last">
                                        <div className="banner banner-cat banner-badge">
                                            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                                                <div className="lazy-overlay bg-4"></div>

                                                <LazyLoadImage
                                                    src={ `${process.env.PUBLIC_URL}/assets/images/category/boxed/banner-8.jpg` }
                                                    alt="banner"
                                                    width={ 280 }
                                                    height={ 280 }
                                                    effect="blur"
                                                    threshold={ 500 }
                                                />
                                            </Link>

                                            <Link className="banner-link" to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                                                <h3 className="banner-title">Jumpers</h3>
                                                <h4 className="banner-subtitle">{ counts[ 5 ] } Products</h4>
                                                <span className="banner-link-text">Shop Now</span>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="banner banner-cat banner-badge">
                                            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                                                <div className="lazy-overlay bg-4"></div>

                                                <LazyLoadImage
                                                    src={ `${process.env.PUBLIC_URL}/assets/images/category/boxed/banner-7.jpg` }
                                                    alt="banner"
                                                    width={ 320 }
                                                    height={ 280 }
                                                    effect="blur"
                                                    threshold={ 500 }
                                                />
                                            </Link>

                                            <Link className="banner-link" to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                                                <h3 className="banner-title">Shoes</h3>
                                                <h4 className="banner-subtitle">{ counts[ 4 ] } Products</h4>
                                                <span className="banner-link-text">Shop Now</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div> :
                            grid === "fullwidth" ?
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="row">
                                                <div className="col-sm-8">
                                                    <div className="banner banner-cat banner-badge">
                                                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                                                            <div className="lazy-overlay bg-4"></div>

                                                            <LazyLoadImage
                                                                src={ `${process.env.PUBLIC_URL}/assets/images/category/fullwidth-page/banner-1.jpg` }
                                                                alt="banner"
                                                                width={ 280 }
                                                                height={ 210 }
                                                                effect="blur"
                                                                threshold={ 500 }
                                                            />
                                                        </Link>

                                                        <Link className="banner-link" to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                                                            <h3 className="banner-title">Jackets</h3>
                                                            <h4 className="banner-subtitle">{ counts[ 3 ] } Products</h4>
                                                            <span className="banner-link-text">Shop Now</span>
                                                        </Link>
                                                    </div>
                                                </div>

                                                <div className="col-sm-4">
                                                    <div className="banner banner-cat banner-badge">
                                                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                                                            <div className="lazy-overlay bg-4"></div>

                                                            <LazyLoadImage
                                                                src={ `${process.env.PUBLIC_URL}/assets/images/category/fullwidth-page/banner-2.jpg` }
                                                                alt="banner"
                                                                width={ 210 }
                                                                height={ 210 }
                                                                effect="blur"
                                                                threshold={ 500 }
                                                            />
                                                        </Link>

                                                        <Link className="banner-link" to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                                                            <h3 className="banner-title">Jeans</h3>
                                                            <h4 className="banner-subtitle">{ counts[ 6 ] } Product</h4>
                                                            <span className="banner-link-text">Shop Now</span>
                                                        </Link>
                                                    </div>
                                                </div>

                                                <div className="col-sm-4">
                                                    <div className="banner banner-cat banner-badge">
                                                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                                                            <div className="lazy-overlay bg-4"></div>

                                                            <LazyLoadImage
                                                                src={ `${process.env.PUBLIC_URL}/assets/images/category/fullwidth-page/banner-3.jpg` }
                                                                alt="banner"
                                                                width={ 280 }
                                                                height={ 450 }
                                                                effect="blur"
                                                                threshold={ 500 }
                                                            />
                                                        </Link>

                                                        <Link className="banner-link" to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                                                            <h3 className="banner-title">Sportwear</h3>
                                                            <h4 className="banner-subtitle">{ counts[ 7 ] } Product</h4>
                                                            <span className="banner-link-text">Shop Now</span>
                                                        </Link>
                                                    </div>
                                                </div>

                                                <div className="col-sm-8">
                                                    <div className="banner banner-cat banner-badge">
                                                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                                                            <div className="lazy-overlay bg-4"></div>

                                                            <LazyLoadImage
                                                                src={ `${process.env.PUBLIC_URL}/assets/images/category/fullwidth-page/banner-4.jpg` }
                                                                alt="banner"
                                                                width={ 320 }
                                                                height={ 450 }
                                                                effect="blur"
                                                                threshold={ 500 }
                                                            />
                                                        </Link>

                                                        <Link className="banner-link" to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                                                            <h3 className="banner-title">Bags</h3>
                                                            <h4 className="banner-subtitle">{ counts[ 2 ] } Products</h4>
                                                            <span className="banner-link-text">Shop Now</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="row">
                                                <div className="col-sm-8">
                                                    <div className="banner banner-cat banner-badge">
                                                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                                                            <div className="lazy-overlay bg-4"></div>

                                                            <LazyLoadImage
                                                                src={ `${process.env.PUBLIC_URL}/assets/images/category/fullwidth-page/banner-5.jpg` }
                                                                alt="banner"
                                                                width={ 320 }
                                                                height={ 450 }
                                                                effect="blur"
                                                                threshold={ 500 }
                                                            />
                                                        </Link>

                                                        <Link className="banner-link" to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                                                            <h3 className="banner-title">Dresses</h3>
                                                            <h4 className="banner-subtitle">{ counts[ 0 ] } Products</h4>
                                                            <span className="banner-link-text">Shop Now</span>
                                                        </Link>
                                                    </div>

                                                    <div className="banner banner-cat banner-badge">
                                                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                                                            <div className="lazy-overlay bg-4"></div>

                                                            <LazyLoadImage
                                                                src={ `${process.env.PUBLIC_URL}/assets/images/category/fullwidth-page/banner-6.jpg` }
                                                                alt="banner"
                                                                width={ 210 }
                                                                height={ 210 }
                                                                effect="blur"
                                                                threshold={ 500 }
                                                            />
                                                        </Link>

                                                        <Link className="banner-link" to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                                                            <h3 className="banner-title">Shoes</h3>
                                                            <h4 className="banner-subtitle">{ counts[ 4 ] } Products</h4>
                                                            <span className="banner-link-text">Shop Now</span>
                                                        </Link>
                                                    </div>
                                                </div>

                                                <div className="col-sm-4">
                                                    <div className="banner banner-cat banner-badge">
                                                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                                                            <div className="lazy-overlay bg-4"></div>

                                                            <LazyLoadImage
                                                                src={ `${process.env.PUBLIC_URL}/assets/images/category/fullwidth-page/banner-7.jpg` }
                                                                alt="banner"
                                                                width={ 210 }
                                                                height={ 210 }
                                                                effect="blur"
                                                                threshold={ 500 }
                                                            />
                                                        </Link>

                                                        <Link className="banner-link" to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                                                            <h3 className="banner-title">T-shirts</h3>
                                                            <h4 className="banner-subtitle">{ counts[ 1 ] } Products</h4>
                                                            <span className="banner-link-text">Shop Now</span>
                                                        </Link>
                                                    </div>

                                                    <div className="banner banner-cat banner-badge">
                                                        <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                                                            <div className="lazy-overlay bg-4"></div>

                                                            <LazyLoadImage
                                                                src={ `${process.env.PUBLIC_URL}/assets/images/category/fullwidth-page/banner-8.jpg` }
                                                                alt="banner"
                                                                width={ 210 }
                                                                height={ 450 }
                                                                effect="blur"
                                                                threshold={ 500 }
                                                            />
                                                        </Link>

                                                        <Link className="banner-link" to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                                                            <h3 className="banner-title">Jumpers</h3>
                                                            <h4 className="banner-subtitle">{ counts[ 5 ] } Product</h4>
                                                            <span className="banner-link-text">Shop Now</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> : ''
                        }
                    </div>
                </div>
            </div>

            <CategoryFilter />
        </>
    )
}

export const mapStateToProps = ( state ) => {
    return {
        products: state.data.products ? state.data.products : []
    }
}

export default connect( mapStateToProps )( ProductCategory );