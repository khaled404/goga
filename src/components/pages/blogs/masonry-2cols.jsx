import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

// import Custom Components
import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';
import Pagination from '../../features/pagination';
import PostNine from '../../features/post/post-nine';
import isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';

import { isotopeLoad } from '../../../utils';

import posts from '../../../mock_data/posts';

export default function Masonry2Cols() {
    useEffect( () => {
        isotopeLoad( isotope, imagesLoaded, '.entry-container', '.entry-item', '.entry-filter' );
    } )

    return (
        <>
            <Helmet>
                <title>Molla React eCommerce Template | Blog Masonry 2 Cols</title>
            </Helmet>

            <h1 className="d-none">Molla React eCommerce Template - Blog Masonry 2 Cols</h1>

            <div className="main">
                <PageHeader title="Blog Masonry 2 Columns" subTitle="Blog" />
                <Breadcrumb title="Masonry 2 Columns" parent1={ [ "Blog", "blog/classic" ] } adClass="mb-2" />

                <div className="page-content">
                    <div className="container">
                        <nav className="blog-nav">
                            <ul className="menu-cat entry-filter justify-content-center">
                                <li className="active"><a href="#1" data-filter="*">All Blog Posts<span>6</span></a></li>
                                <li><a href="#2" data-filter=".lifestyle">Lifestyle<span>3</span></a></li>
                                <li><a href="#3" data-filter=".shopping">Shopping<span>1</span></a></li>
                                <li><a href="#4" data-filter=".fashion">Fashion<span>1</span></a></li>
                                <li><a href="#5" data-filter=".travel">Travel<span>2</span></a></li>
                                <li><a href="#6" data-filter=".hobbies">Hobbies<span>2</span></a></li>
                            </ul>
                            <div className="entry-container max-col-2">
                                <div className="entry-item lifestyle shopping col-sm-6">
                                    <PostNine post={ posts[ 45 ] } isIsotope={ true } />
                                </div>

                                <div className="entry-item lifestyle col-sm-6">
                                    <PostNine post={ posts[ 46 ] } isIsotope={ true } />
                                </div>

                                <div className="entry-item lifestyle fashion col-sm-6">
                                    <PostNine post={ posts[ 47 ] } isIsotope={ true } />
                                </div>

                                <div className="entry-item travel col-sm-6">
                                    <PostNine post={ posts[ 48 ] } isIsotope={ true } />
                                </div>

                                <div className="entry-item travel hobbies col-sm-6">
                                    <PostNine post={ posts[ 49 ] } isIsotope={ true } />
                                </div>

                                <div className="entry-item hobbies col-sm-6">
                                    <PostNine post={ posts[ 50 ] } isIsotope={ true } />
                                </div>
                            </div>
                        </nav>

                        <Pagination aclass="justify-content-center" unit={ 6 } count={ 6 } />
                    </div>
                </div>
            </div>
        </>
    );
}