import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

// import Custom Components
import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';
import Pagination from '../../features/pagination';
import PostNine from '../../features/post/post-nine';
import BlogSidebar from '../../features/sidebar/blog-sidebar';
import isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';

import { isotopeLoad } from '../../../utils';

import posts from '../../../mock_data/posts';

export default function MasonrySidebar() {
    useEffect( () => {
        isotopeLoad( isotope, imagesLoaded, '.entry-container', '.entry-item', '.entry-filter' );
    } )

    return (
        <>
            <Helmet>
                <title>Molla React eCommerce Template | Blog Masonry Sidebar</title>
            </Helmet>

            <h1 className="d-none">Molla React eCommerce Template - Blog Masonry Sidebar</h1>

            <div className="main">

                <PageHeader title="Blog Masonry With Sidebar" subTitle="Blog" />
                <Breadcrumb title="Masonry With Sidebar" parent1={ [ "Blog", "blog/classic" ] } adClass="mb-3" />

                <div className="page-content">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-9">
                                <nav className="blog-nav">
                                    <div className="entry-container max-col-2">
                                        <div className="entry-item col-sm-6">
                                            <PostNine post={ posts[ 72 ] } isIsotope={ true } />
                                        </div>

                                        <div className="entry-item col-sm-6">
                                            <PostNine post={ posts[ 73 ] } isIsotope={ true } />
                                        </div>

                                        <div className="entry-item col-sm-6">
                                            <PostNine post={ posts[ 74 ] } isIsotope={ true } />
                                        </div>

                                        <div className="entry-item col-sm-6">
                                            <PostNine post={ posts[ 75 ] } isIsotope={ true } />
                                        </div>

                                        <div className="entry-item col-sm-6">
                                            <PostNine post={ posts[ 76 ] } isIsotope={ true } />
                                        </div>

                                        <div className="entry-item col-sm-6">
                                            <PostNine post={ posts[ 77 ] } isIsotope={ true } />
                                        </div>

                                        <div className="entry-item col-sm-6">
                                            <PostNine post={ posts[ 78 ] } isIsotope={ true } />
                                        </div>

                                        <div className="entry-item col-sm-6">
                                            <PostNine post={ posts[ 79 ] } isIsotope={ true } />
                                        </div>
                                    </div>
                                </nav>

                                <Pagination count={ 8 } unit={ 8 } isIsotope={ true } />

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