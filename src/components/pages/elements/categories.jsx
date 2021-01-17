import React from 'react';
import { Helmet } from 'react-helmet';

// import Custom Components
import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';
import ProductCategoryOne from '../../features/product-category/product-category-one';
import ProductCategoryTwo from '../../features/product-category/product-category-two';
import ProductCategoryThree from '../../features/product-category/product-category-three';
import ProductCategoryFour from '../../features/product-category/product-category-four';
import ProductCategoryFive from '../../features/product-category/product-category-five';
import OwlCarousel from '../../features/owl-carousel';

import { mainSlider3 } from '../../settings';

function Categories() {
    return (
        <>
            <Helmet>
                <title>Molla React eCommerce Template | Product Category</title>
            </Helmet>

            <h1 className="d-none">Molla React eCommerce Template - Product Category</h1>

            <div className="main">

                <PageHeader title="Product Category" subTitle="Elements" />
                <Breadcrumb title="Product Category" parent1={ [ "Elements", "element/list" ] } />

                <div className="page-content">
                    <div className="container">
                        <h2 className="title text-center mb-3">2 Columns</h2>

                        <div className="row">
                            <div className="col-md-6">
                                <ProductCategoryOne image={ `assets/images/category/banner-1.jpg` } category="Women" count="18" />
                            </div>

                            <div className="col-md-6">
                                <ProductCategoryOne image={ `assets/images/category/banner-2.jpg` } category="Men" count="12" />
                            </div>
                        </div>
                        <hr className="mb-4" />

                        <h2 className="title text-center mb-3">3 Columns Badge Style</h2>

                        <div className="row justify-content-center">
                            <div className="col-md-6 col-lg-4">
                                <ProductCategoryTwo image={ `assets/images/category/3cols/banner-1.jpg` } category="Women" count="18" />
                            </div>

                            <div className="col-md-6 col-lg-4">
                                <ProductCategoryTwo image={ `assets/images/category/3cols/banner-2.jpg` } category="Men" count="12" />
                            </div>

                            <div className="col-md-6 col-lg-4">
                                <ProductCategoryTwo image={ `assets/images/category/3cols/banner-3.jpg` } category="Accessories" count="8" />
                            </div>
                        </div>

                        <hr className="mb-4" />
                        <h2 className="title text-center mb-3">4 Columns Carousel</h2>

                        <OwlCarousel adClass="owl-simple" carouselOptions={ mainSlider3 }>
                            <ProductCategoryThree image={ `assets/images/category/4cols/banner-1.jpg` } category="Women" count="18" />
                            <ProductCategoryThree image={ `assets/images/category/4cols/banner-2.jpg` } category="Men" count="12" />
                            <ProductCategoryThree image={ `assets/images/category/4cols/banner-3.jpg` } category="Shoes & Boots" count="15" />
                            <ProductCategoryThree image={ `assets/images/category/4cols/banner-4.jpg` } category="Accessories" count="8" />
                            <ProductCategoryThree image={ `assets/images/category/4cols/banner-1.jpg` } category="Men" count="12" />
                        </OwlCarousel>
                        <hr className="mb-4" />
                    </div>

                    <div className="container-fluid">
                        <h2 className="title text-center mb-3">3 Columns Fullwidth</h2>
                        <div className="row justify-content-center">
                            <div className="col-md-6 col-lg-4">
                                <ProductCategoryOne image={ `assets/images/category/fullwidth/banner-1.jpg` } category="Women" count="18" />
                            </div>

                            <div className="col-md-6 col-lg-4">
                                <ProductCategoryOne image={ `assets/images/category/fullwidth/banner-2.jpg` } category="Men" count="12" />
                            </div>

                            <div className="col-md-6 col-lg-4">
                                <ProductCategoryOne image={ `assets/images/category/fullwidth/banner-3.jpg` } category="Accessories" count="12" />
                            </div>
                        </div>
                    </div>

                    <div className="container">

                        <hr className="mb-4" />

                        <h2 className="title text-center mb-3">Masonry</h2>

                        <div className="row justify-content-center">
                            <div className="col-sm-6 col-lg-3">
                                <ProductCategoryFour image={ `assets/images/category/grid/banner-1.jpg` } category="Accessories" count="8" type="banner-content-bottom" />
                            </div>

                            <div className="col-sm-6 col-lg-3 order-lg-last">
                                <ProductCategoryFour image={ `assets/images/category/grid/banner-4.jpg` } category="Shoes & Boots" count="15" type="banner-content-top" />

                            </div>

                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-sm-6 col-lg-12">
                                        <ProductCategoryFour image={ `assets/images/category/grid/banner-2.jpg` } category="Women" count="18" />
                                    </div>

                                    <div className="col-sm-6 col-lg-12">
                                        <ProductCategoryFour image={ `assets/images/category/grid/banner-3.jpg` } category="Men" count="12" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="mb-4" />
                        <h2 className="title text-center mb-3">Grid Badge Style</h2>

                        <div className="row ">
                            <div className="col-md-6">
                                <ProductCategoryFive image={ `assets/images/category/grid2/banner-1.jpg` } category="Accessories" count="8" />
                            </div>
                            <div className="col-md-6">
                                <ProductCategoryFive image={ `assets/images/category/grid2/banner-2.jpg` } category="Women" count="15" />
                                <ProductCategoryFive image={ `assets/images/category/grid2/banner-3.jpg` } category="Men" count="12" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default React.memo( Categories );