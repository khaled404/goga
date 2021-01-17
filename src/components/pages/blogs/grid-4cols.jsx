import React, { useEffect } from 'react';
import isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import { Helmet } from 'react-helmet';

// import Custom Components
import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';
import PostSeven from '../../features/post/post-seven';
import Pagination from '../../features/pagination';

import { isotopeLoad } from '../../../utils';

import posts from '../../../mock_data/posts';

export default function Grid4Cols() {
    useEffect( () => {
        isotopeLoad( isotope, imagesLoaded, '.entry-container', '.entry-item', '.entry-filter' );
    } )

    return (
        <>
            <Helmet>
                <title>Molla React eCommerce Template | Blog Grid 4 Cols</title>
            </Helmet>

            <h1 className="d-none">Molla React eCommerce Template - Blog Grid 4 Cols</h1>

            <div className="main">

                <PageHeader title="Blog Grid 4 Columns" subTitle="Blog" />
                <Breadcrumb title="Grid 4 Columns" parent1={ [ "Blog", "blog/classic" ] } adClass="mb-2" />

                <div className="page-content">
                    <div className="container">
                        <nav className="blog-nav">
                            <ul className="menu-cat entry-filter justify-content-center">
                                <li className="active"><a href="#1" data-filter="*">All Blog Posts<span>8</span></a></li>
                                <li><a href="#2" data-filter=".lifestyle">Lifestyle<span>3</span></a></li>
                                <li><a href="#3" data-filter=".shopping">Shopping<span>1</span></a></li>
                                <li><a href="#4" data-filter=".fashion">Fashion<span>2</span></a></li>
                                <li><a href="#5" data-filter=".travel">Travel<span>3</span></a></li>
                                <li><a href="#6" data-filter=".hobbies">Hobbies<span>2</span></a></li>
                            </ul>
                        </nav>

                        <div className="entry-container max-col-4" data-layout="fitRows">
                            <div className="entry-item lifestyle shopping col-sm-6 col-md-4 col-lg-3">
                                <PostSeven post={ posts[ 37 ] } isIsotope={ true } />
                            </div>

                            <div className="entry-item lifestyle col-sm-6 col-md-4 col-lg-3">
                                <PostSeven post={ posts[ 38 ] } isIsotope={ true } />
                            </div>

                            <div className="entry-item lifestyle fashion col-sm-6 col-md-4 col-lg-3">
                                <PostSeven post={ posts[ 39 ] } isIsotope={ true } />
                            </div>

                            <div className="entry-item travel col-sm-6 col-md-4 col-lg-3">
                                <PostSeven post={ posts[ 40 ] } isIsotope={ true } />
                            </div>

                            <div className="entry-item travel hobbies col-sm-6 col-md-4 col-lg-3">
                                <PostSeven post={ posts[ 41 ] } isIsotope={ true } />
                            </div>

                            <div className="entry-item hobbies col-sm-6 col-md-4 col-lg-3">
                                <PostSeven post={ posts[ 42 ] } isIsotope={ true } />
                            </div>

                            <div className="entry-item travel col-sm-6 col-md-4 col-lg-3">
                                <PostSeven post={ posts[ 43 ] } isIsotope={ true } />
                            </div>

                            <div className="entry-item fashion col-sm-6 col-md-4 col-lg-3">
                                <PostSeven post={ posts[ 44 ] } isIsotope={ true } />
                            </div>
                        </div>

                        <Pagination aclass="justify-content-center" count={ 8 } unit={ 8 } />
                    </div>
                </div>
            </div>
        </>
    );
}