import React, { useEffect } from 'react';
import isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import { Helmet } from 'react-helmet';

// import Custom Components
import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';
import PostSix from '../../features/post/post-six';
import Pagination from '../../features/pagination';

import { isotopeLoad } from '../../../utils';

import posts from '../../../mock_data/posts';

export default function Grid3Cols() {
    useEffect( () => {
        isotopeLoad( isotope, imagesLoaded, '.entry-container', '.entry-item', '.entry-filter' );
    } )

    return (
        <>
            <Helmet>
                <title>Molla React eCommerce Template | Blog Grid 3 Cols</title>
            </Helmet>

            <h1 className="d-none">Molla React eCommerce Template - Blog Grid 3 Cols</h1>

            <div className="main">

                <PageHeader title="Blog Grid 3 Columns" subTitle="Blog" />
                <Breadcrumb title="Grid 3 Columns" parent1={ [ "Blog", "blog/classic" ] } adClass="mb-2" />

                <div className="page-content">
                    <div className="container">
                        <nav className="blog-nav">
                            <ul className="menu-cat entry-filter justify-content-center">
                                <li className="active"><a href="1#" data-filter="*">All Blog Posts<span>9</span></a></li>
                                <li><a href="#2" data-filter=".lifestyle">Lifestyle<span>3</span></a></li>
                                <li><a href="#3" data-filter=".shopping">Shopping<span>1</span></a></li>
                                <li><a href="#4" data-filter=".fashion">Fashion<span>2</span></a></li>
                                <li><a href="#5" data-filter=".travel">Travel<span>4</span></a></li>
                                <li><a href="#6" data-filter=".hobbies">Hobbies<span>2</span></a></li>
                            </ul>
                        </nav>

                        <div className="entry-container max-col-3" data-layout="fitRows">
                            <div className="entry-item lifestyle shopping col-sm-6 col-lg-4">
                                <PostSix post={ posts[ 28 ] } isIsotope={ true } />
                            </div>

                            <div className="entry-item lifestyle col-sm-6 col-lg-4">
                                <PostSix post={ posts[ 29 ] } isIsotope={ true } />
                            </div>

                            <div className="entry-item lifestyle fashion col-sm-6 col-lg-4">
                                <PostSix post={ posts[ 30 ] } isIsotope={ true } />
                            </div>

                            <div className="entry-item travel col-sm-6 col-lg-4">
                                <PostSix post={ posts[ 31 ] } isIsotope={ true } />
                            </div>

                            <div className="entry-item travel hobbies col-sm-6 col-lg-4">
                                <PostSix post={ posts[ 32 ] } isIsotope={ true } />
                            </div>

                            <div className="entry-item hobbies col-sm-6 col-lg-4">
                                <PostSix post={ posts[ 33 ] } isIsotope={ true } />
                            </div>

                            <div className="entry-item travel col-sm-6 col-lg-4">
                                <PostSix post={ posts[ 34 ] } isIsotope={ true } />
                            </div>

                            <div className="entry-item fashion col-sm-6 col-lg-4">
                                <PostSix post={ posts[ 35 ] } isIsotope={ true } />
                            </div>

                            <div className="entry-item travel col-sm-6 col-lg-4">
                                <PostSix post={ posts[ 36 ] } isIsotope={ true } />
                            </div>
                        </div>

                        <Pagination aclass="justify-content-center" count={ 9 } unit={ 9 } />
                    </div>
                </div>
            </div>
        </>
    );
}