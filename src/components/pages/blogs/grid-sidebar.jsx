import React, { useEffect } from 'react';
import isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import { Helmet } from 'react-helmet';

// import Custom Components
import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';
import PostEight from '../../features/post/post-eight';
import Pagination from '../../features/pagination';
import BlogSidebar from '../../features/sidebar/blog-sidebar';

import { isotopeLoad } from '../../../utils';

import posts from '../../../mock_data/posts';

export default function GridSidebar() {
    useEffect( () => {
        isotopeLoad( isotope, imagesLoaded, '.entry-container', '.entry-item', '.entry-filter' );
    } )

    return (
        <>
            <Helmet>
                <title>Molla React eCommerce Template | Blog Grid Sidebar</title>
            </Helmet>

            <h1 className="d-none">Molla React eCommerce Template - Blog Grid Sidebar</h1>

            <div className="main">
                <PageHeader title="Blog Grid With Sidebar" subTitle="Blog" />
                <Breadcrumb title="Grid With Sidebar" parent1={ [ "Blog", "blog/classic" ] } adClass="mb-3" />

                <div className="page-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="entry-container max-col-2" data-layout="fitRows">
                                    {
                                        posts.slice( 28, 36 ).map( ( item, index ) => (
                                            <div className="entry-item col-sm-6" key={ `entry ${index}` }>
                                                <PostEight post={ item } isIsotope={ true } />
                                            </div>
                                        ) )
                                    }
                                </div>
                                <Pagination />
                            </div>

                            <div className="col-lg-3">
                                <BlogSidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}