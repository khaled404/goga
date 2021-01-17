import React from 'react';
import { Helmet } from 'react-helmet';

// import Custom Components
import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';
import PostFive from '../../features/post/post-five';
import Pagination from '../../features/pagination';
import BlogSidebar from '../../features/sidebar/blog-sidebar';

// import post data
import posts from '../../../mock_data/posts';

function Classic() {
    return (
        <>
            <Helmet>
                <title>Molla React eCommerce Template | Blog Classic</title>
            </Helmet>

            <h1 className="d-none">Molla React eCommerce Template - Blog Classic</h1>

            <div className="main">
                <PageHeader title="Blog Classic" subTitle="Blog" />
                <Breadcrumb title="Classic" parent1={ [ "Blog", "blog/classic" ] } adClass="mb-3" />

                <div className="page-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                {
                                    <PostFive post={ posts[ 2 ] } />
                                }
                                {
                                    <PostFive post={ posts[ 18 ] } />
                                }
                                {
                                    posts.slice( 19, 22 ).map( ( post, index ) =>
                                        <PostFive post={ post } key={ index } />
                                    )
                                }
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

export default React.memo( Classic );