import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import { Helmet } from 'react-helmet';

// import Custom Components
import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';
import PortfolioOne from '../../features/portfolio/portfolio-one';
import PortfolioTwo from '../../features/portfolio/portfolio-two';

import { isotopeLoad } from '../../../utils';

export default function Portofolios() {
    useEffect( () => {
        isotopeLoad( isotope, imagesLoaded, '.portfolio-container', '.portfolio-item', '.portfolio-filter' );
    } )

    return (
        <>
            <Helmet>
                <title>Molla React eCommerce Template | Portfolio</title>
            </Helmet>

            <h1 className="d-none">Molla React eCommerce Template - Portfolio</h1>

            <div className="main">
                <PageHeader title="Portfolio" subTitle="Elements" />
                <Breadcrumb title="Portfolio" parent1={ [ "Elements", "elements" ] } />

                <div className="page-content">
                    <div className="container">
                        <h2 className="title text-center mb-2">Grid 3 Columns</h2>
                        <nav className="portfolio-nav">
                            <ul className="nav-filter portfolio-filter justify-content-center">
                                <li className="active"><Link to="#" data-filter="*" role="tab">All</Link></li>
                                <li><Link to="#" data-filter=".women" role="tab">Women</Link></li>
                                <li><Link to="#" data-filter=".men" role="tab">Men</Link></li>
                                <li><Link to="#" data-filter=".accessories" role="tab">Accessories</Link></li>
                            </ul>
                        </nav>
                        <div className="portfolio-container" data-layout="fitRows">
                            <div className="portfolio-item accessories women col-sm-6 col-lg-4">
                                <PortfolioOne image={ `assets/images/portfolio/item-1.jpg` } category="Accessories" />
                            </div>
                            <div className="portfolio-item men col-sm-6 col-lg-4">
                                <PortfolioOne image={ `assets/images/portfolio/item-2.jpg` } category="Men" />
                            </div>
                            <div className="portfolio-item accessories women col-sm-6 col-lg-4">
                                <PortfolioOne image={ `assets/images/portfolio/item-3.jpg` } category="Women" />
                            </div>
                            <div className="portfolio-item men col-sm-6 col-lg-4">
                                <PortfolioOne image={ `assets/images/portfolio/item-4.jpg` } category="Accessories" />
                            </div>
                            <div className="portfolio-item men women col-sm-6 col-lg-4">
                                <PortfolioOne image={ `assets/images/portfolio/item-5.jpg` } category="Women" />
                            </div>
                            <div className="portfolio-item men accessories col-sm-6 col-lg-4">
                                <PortfolioOne image={ `assets/images/portfolio/item-6.jpg` } category="Men" />
                            </div>
                        </div>

                        <hr className="mb-4" />

                        <h2 className="title text-center mb-2">Grid 4 Columns</h2>
                        <nav className="portfolio-nav">
                            <ul className="nav-filter portfolio-filter justify-content-center">
                                <li className="active"><Link to="#" data-filter="*" role="tab">All</Link></li>
                                <li><Link to="#" data-filter=".women" role="tab">Women</Link></li>
                                <li><Link to="#" data-filter=".men" role="tab">Men</Link></li>
                                <li><Link to="#" data-filter=".accessories" role="tab">Accessories</Link></li>
                            </ul>
                        </nav>

                        <div className="portfolio-container" data-layout="fitRows" id="portfolio-2">
                            <div className="portfolio-item accessories women col-sm-6 col-md-4 col-lg-3">
                                <PortfolioOne image={ `assets/images/portfolio/4cols/item-1.jpg` } category="Accessories" />
                            </div>
                            <div className="portfolio-item men col-sm-6 col-md-4 col-lg-3">
                                <PortfolioOne image={ `assets/images/portfolio/4cols/item-2.jpg` } category="Men" />
                            </div>
                            <div className="portfolio-item women accessories col-sm-6 col-md-4 col-lg-3">
                                <PortfolioOne image={ `assets/images/portfolio/4cols/item-3.jpg` } category="Women" />
                            </div>
                            <div className="portfolio-item men col-sm-6 col-md-4 col-lg-3">
                                <PortfolioOne image={ `assets/images/portfolio/4cols/item-4.jpg` } category="Accessories" />
                            </div>
                            <div className="portfolio-item men women col-sm-6 col-md-4 col-lg-3">
                                <PortfolioOne image={ `assets/images/portfolio/4cols/item-5.jpg` } category="Women" />
                            </div>
                            <div className="portfolio-item men accessories col-sm-6 col-md-4 col-lg-3">
                                <PortfolioOne image={ `assets/images/portfolio/4cols/item-6.jpg` } category="Men" />
                            </div>
                            <div className="portfolio-item men col-sm-6 col-md-4 col-lg-3">
                                <PortfolioOne image={ `assets/images/portfolio/4cols/item-7.jpg` } category="Men" />
                            </div>
                            <div className="portfolio-item women accessories col-sm-6 col-md-4 col-lg-3">
                                <PortfolioOne image={ `assets/images/portfolio/4cols/item-8.jpg` } category="Women" />
                            </div>
                        </div>

                        <hr className="mb-4" />

                        <h2 className="title text-center mb-2">Masonry 3 Columns</h2>
                        <nav className="portfolio-nav">
                            <ul className="nav-filter portfolio-filter justify-content-center">
                                <li className="active"><Link to="#" data-filter="*" role="tab">All</Link></li>
                                <li><Link to="#" data-filter=".women" role="tab">Women</Link></li>
                                <li><Link to="#" data-filter=".men" role="tab">Men</Link></li>
                                <li><Link to="#" data-filter=".accessories" role="tab">Accessories</Link></li>
                            </ul>
                        </nav>

                        <div className="portfolio-container">
                            <div className="portfolio-item accessories women col-sm-6 col-lg-4">
                                <PortfolioOne image={ `assets/images/portfolio/masonry-3cols/item-1.jpg` } category="Accessories" type="center" />
                            </div>
                            <div className="portfolio-item men col-sm-6 col-lg-4">
                                <PortfolioOne image={ `assets/images/portfolio/masonry-3cols/item-2.jpg` } category="Men" type="center" />
                            </div>
                            <div className="portfolio-item women accessories col-sm-6 col-lg-4">
                                <PortfolioOne image={ `assets/images/portfolio/masonry-3cols/item-3.jpg` } category="Women" type="center" />
                            </div>
                            <div className="portfolio-item men col-sm-6 col-lg-4">
                                <PortfolioOne image={ `assets/images/portfolio/masonry-3cols/item-4.jpg` } category="Accessories" type="center" />
                            </div>
                            <div className="portfolio-item men women col-sm-6 col-lg-4">
                                <PortfolioOne image={ `assets/images/portfolio/masonry-3cols/item-5.jpg` } category="Women" type="center" />
                            </div>
                            <div className="portfolio-item men accessories col-sm-6 col-lg-4">
                                <PortfolioOne image={ `assets/images/portfolio/masonry-3cols/item-6.jpg` } category="Men" type="center" />
                            </div>
                        </div>

                        <hr className="mb-4" />

                        <h2 className="title text-center mb-2">Masonry 4 Columns</h2>
                        <nav className="portfolio-nav">
                            <ul className="nav-filter portfolio-filter justify-content-center">
                                <li className="active"><Link to="#" data-filter="*" role="tab">All</Link></li>
                                <li><Link to="#" data-filter=".women" role="tab">Women</Link></li>
                                <li><Link to="#" data-filter=".men" role="tab">Men</Link></li>
                                <li><Link to="#" data-filter=".accessories" role="tab">Accessories</Link></li>
                            </ul>
                        </nav>

                        <div className="portfolio-container">
                            <div className="portfolio-item accessories women col-sm-6 col-md-4 col-lg-3">
                                <PortfolioOne image={ `assets/images/portfolio/masonry-4cols/item-1.jpg` } category="Accessories" type="center" />
                            </div>

                            <div className="portfolio-item men col-sm-6 col-md-4 col-lg-3">
                                <PortfolioOne image={ `assets/images/portfolio/masonry-4cols/item-2.jpg` } category="Men" type="center" />
                            </div>

                            <div className="portfolio-item women accessories col-sm-6 col-md-4 col-lg-3">
                                <PortfolioOne image={ `assets/images/portfolio/masonry-4cols/item-3.jpg` } category="Women" type="center" />
                            </div>

                            <div className="portfolio-item men col-sm-6 col-md-4 col-lg-3">
                                <PortfolioOne image={ `assets/images/portfolio/masonry-4cols/item-4.jpg` } category="Accessories" type="center" />
                            </div>

                            <div className="portfolio-item men women col-sm-6 col-md-4 col-lg-3">
                                <PortfolioOne image={ `assets/images/portfolio/masonry-4cols/item-5.jpg` } category="Women" type="center" />
                            </div>

                            <div className="portfolio-item men accessories col-sm-6 col-md-4 col-lg-3">
                                <PortfolioOne image={ `assets/images/portfolio/masonry-4cols/item-6.jpg` } category="Men" type="center" />
                            </div>

                            <div className="portfolio-item men col-sm-6 col-md-4 col-lg-3">
                                <PortfolioOne image={ `assets/images/portfolio/masonry-4cols/item-7.jpg` } category="Men" type="center" />
                            </div>

                            <div className="portfolio-item women accessories col-sm-6 col-md-4 col-lg-3">
                                <PortfolioOne image={ `assets/images/portfolio/masonry-4cols/item-8.jpg` } category="Women" type="center" />
                            </div>
                        </div>

                        <hr className="mb-4" />
                    </div>

                    <div className="container-fluid">
                        <h2 className="title text-center mb-2">Fullwidth with Text <span className="title-separator">(No space)</span></h2>
                        <nav className="portfolio-nav">
                            <ul className="nav-filter portfolio-filter justify-content-center">
                                <li className="active"><Link to="#" data-filter="*" role="tab">All</Link></li>
                                <li><Link to="#" data-filter=".women" role="tab">Women</Link></li>
                                <li><Link to="#" data-filter=".men" role="tab">Men</Link></li>
                                <li><Link to="#" data-filter=".accessories" role="tab">Accessories</Link></li>
                            </ul>
                        </nav>

                        <div className="portfolio-container portfolio-nogap" data-layout="fitRows">
                            <div className="portfolio-item accessories women col-sm-6 col-md-4 col-lg-3">
                                <PortfolioTwo image={ `assets/images/portfolio/fullwidth/item-1.jpg` } category="Accessories" title="Vestibulum auctor dapibus" />
                            </div>
                            <div className="portfolio-item accessories col-sm-6 col-md-4 col-lg-3">
                                <PortfolioTwo image={ `assets/images/portfolio/fullwidth/item-2.jpg` } category="Accessories" title="Nunc dignissim risus" />
                            </div>
                            <div className="portfolio-item men accessories col-sm-6 col-md-4 col-lg-3">
                                <PortfolioTwo image={ `assets/images/portfolio/fullwidth/item-3.jpg` } category="Men" title="Cras ornare tristique" />
                            </div>
                            <div className="portfolio-item men col-sm-6 col-md-4 col-lg-3">
                                <PortfolioTwo image={ `assets/images/portfolio/fullwidth/item-4.jpg` } category="Men" title="Vivamus vestibulum ntulla" />
                            </div>
                            <div className="portfolio-item men women col-sm-6 col-md-4 col-lg-3">
                                <PortfolioTwo image={ `assets/images/portfolio/fullwidth/item-5.jpg` } category="Women" title="Vestibulum auctor dapibus" />
                            </div>
                            <div className="portfolio-item men accessories col-sm-6 col-md-4 col-lg-3">
                                <PortfolioTwo image={ `assets/images/portfolio/fullwidth/item-6.jpg` } category="Accessories" title="Nunc dignissim risus" />
                            </div>
                            <div className="portfolio-item women accessories col-sm-6 col-md-4 col-lg-3">
                                <PortfolioTwo image={ `assets/images/portfolio/fullwidth/item-7.jpg` } category="Women" title="Cras ornare tristique" />
                            </div>
                            <div className="portfolio-item men accessories col-sm-6 col-md-4 col-lg-3">
                                <PortfolioTwo image={ `assets/images/portfolio/fullwidth/item-8.jpg` } category="Accessories" title="Vivamus vestibulum ntulla" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}