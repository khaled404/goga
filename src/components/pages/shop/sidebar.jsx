import React from 'react';
import { Helmet } from 'react-helmet';

// import Custom Components
import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';
import ShopSidebar from '../../features/sidebar/shop-sidebar';
import ProductList from '../../features/product/list/product-list';

function ShopList( props ) {
    let grid = props.match.params.grid;
    const titles = { "list": "List", "2cols": "Grid 2 Columns", "3cols": "Grid 3 Columns", "4cols": "Grid 4 Columns" };

    if ( grid !== "list" && grid !== "2cols" && grid !== "3cols" && grid !== "4cols" ) {
        window.location = process.env.PUBLIC_URL + "/pages/404";
    }

    return (
        <>
            <Helmet>
                <title>Molla React eCommerce Template | Shop With Sidebar</title>
            </Helmet>

            <h1 className="d-none">Molla React eCommerce Template - Shop With Sidebar</h1>

            <div className="main">
                <PageHeader title={ titles[ grid ] } subTitle="Shop" />
                <Breadcrumb title={ titles[ grid ] } parent1={ [ "Shop", "shop/sidebar/list" ] } adClass="mb-2" />

                <div className="page-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 skeleton-body skel-shop-products">
                                <ProductList column={ grid } />
                            </div>

                            <div className="col-lg-3 order-lg-first skeleton-body skel-shop-sidebar">
                                <div className="skel-widget">
                                </div>

                                <div className="skel-widget">
                                </div>

                                <div className="skel-widget">
                                </div>

                                <div className="skel-widget">
                                </div>

                                <ShopSidebar adClass="sidebar sidebar-shop" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default React.memo( ShopList );