import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

// import Custom Components
import SideBar from '../../features/sidebar/shop-filter';
import ProductListTwo from '../../features/product/list/product-list-two';
import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';

function NoSideBar( props ) {
    const type = props.match.params.grid;
    const title = { "boxed": "Boxed No Sidebar", "fullwidth": "Fullwidth No Sidebar" }

    useEffect( () => {
        if ( type !== "boxed" && type !== "fullwidth" ) {
            window.location = process.env.PUBLIC_URL + "/pages/404";
        }
    }, [ type ] )

    function hideSideBar() {
        if ( document.querySelector( 'body' ).classList.contains( 'sidebar-filter-active' ) )
            document.querySelector( 'body' ).classList.remove( 'sidebar-filter-active' );
    }

    return (
        <>
            <Helmet>
                <title>Molla React eCommerce Template | Shop No Sidebar</title>
            </Helmet>

            <h1 className="d-none">Molla React eCommerce Template - Shop No Sidebar</h1>

            <div className="main">
                <PageHeader title={ title[ type ] } subTitle="Shop" />
                <Breadcrumb
                    title={ title[ type ] }
                    parent1={ [ "Shop", "shop/nosidebar" ] }
                    adClass="mb-2"
                    container={ type === "boxed" ? "container" : "container-fluid" }
                />

                <div className="page-content">
                    <div className={ type === 'boxed' ? 'container' : 'container-fluid' }>
                        <ProductListTwo type={ type } />

                        <div className="sidebar-filter-overlay" onClick={ hideSideBar }></div>

                        <SideBar numbers={ 50 } />
                    </div>
                </div>
            </div>
        </>
    )
}

export default React.memo( NoSideBar );