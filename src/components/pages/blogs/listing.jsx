import React from 'react';
import { Helmet } from 'react-helmet';


// import Custom Components
import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';
import PostTwo from '../../features/post/post-two';
import Pagination from '../../features/pagination';
import BlogSidebar from '../../features/sidebar/blog-sidebar';

// import post data
import posts from '../../../mock_data/posts';

function Listing() {
    return (
        <>
            <Helmet>
                <title>Molla React eCommerce Template | Blog Listing</title>
            </Helmet>

            <h1 className="d-none">Molla React eCommerce Template - Blog Listing</h1>

            <div className="main">
                <PageHeader title="Blog Listing" subTitle="Blog" />
                <Breadcrumb title="Listing" parent1={ [ "Blog", "blog/classic" ] } adClass="mb-3" />

                <div className="page-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <PostTwo post={ posts[ 0 ] } imageSize={ 5 } />
                                <PostTwo post={ posts[ 1 ] } imageSize={ 5 } />
                                <PostTwo post={ posts[ 14 ] } imageSize={ 5 } />
                                <PostTwo post={ posts[ 15 ] } imageSize={ 5 } />
                                <PostTwo post={ posts[ 16 ] } imageSize={ 5 } />
                                <PostTwo post={ posts[ 17 ] } imageSize={ 5 } />

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

export default React.memo( Listing );