import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

// import Custom Components
import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';
import PostFour from '../../features/post/post-four';
import Pagination from '../../features/pagination';
import isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';

import { isotopeLoad } from '../../../utils';

import posts from '../../../mock_data/posts';

export default function MaskGrid() {
    useEffect( () => {
        isotopeLoad( isotope, imagesLoaded, '.entry-container', '.entry-item', '.entry-filter' );
    } )

    return (
        <>
            <Helmet>
                <title>Molla React eCommerce Template | Blog Mask Grid</title>
            </Helmet>

            <h1 className="d-none">Molla React eCommerce Template - Blog Mask Grid</h1>

            <div className="main">
                <PageHeader title="Blog Mask Grid" subTitle="Blog" />
                <Breadcrumb title="Mask Grid" parent1={ [ "Blog", "blog/classic" ] } adClass="mb-2" />

                <div className="page-content">
                    <div className="container">
                        <nav className="blog-nav">
                            <ul className="menu-cat entry-filter justify-content-center">
                                <li className="active"><a href="#1" data-filter="*">All Blog Posts<span>9</span></a></li>
                                <li><a href="#2" data-filter=".lifestyle">Lifestyle<span>3</span></a></li>
                                <li><a href="#3" data-filter=".shopping">Shopping<span>1</span></a></li>
                                <li><a href="#4" data-filter=".fashion">Fashion<span>2</span></a></li>
                                <li><a href="#5" data-filter=".travel">Travel<span>4</span></a></li>
                                <li><a href="#6" data-filter=".hobbies">Hobbies<span>2</span></a></li>
                            </ul>
                        </nav>

                        <div className="entry-container" data-layout="fitRows">
                            <div className="entry-item lifestyle shopping col-sm-6 col-lg-4">
                                <PostFour post={ posts[ 11 ] } isIsotope={ true } />
                            </div>

                            <div className="entry-item lifestyle col-sm-6 col-lg-4">
                                <PostFour post={ posts[ 12 ] } isIsotope={ true } />
                            </div>

                            <div className="entry-item lifestyle fashion col-sm-6 col-lg-4">
                                <PostFour post={ posts[ 13 ] } isIsotope={ true } />
                            </div>

                            <div className="entry-item travel col-sm-6 col-lg-4">
                                <PostFour post={ posts[ 80 ] } isIsotope={ true } />
                            </div>

                            <div className="entry-item travel hobbies col-sm-6 col-lg-4">
                                <PostFour post={ posts[ 81 ] } isIsotope={ true } />
                            </div>

                            <div className="entry-item hobbies col-sm-6 col-lg-4">
                                <PostFour post={ posts[ 82 ] } isIsotope={ true } />
                            </div>
                            <div className="entry-item travel col-sm-6 col-lg-4">
                                <PostFour post={ posts[ 83 ] } isIsotope={ true } />
                            </div>
                            <div className="entry-item fashion col-sm-6 col-lg-4">
                                <PostFour post={ posts[ 84 ] } isIsotope={ true } />
                            </div>
                            <div className="entry-item travel col-sm-6 col-lg-4">
                                <PostFour post={ posts[ 85 ] } isIsotope={ true } />
                            </div>
                        </div>

                        <div className="mb-3"></div>

                        <Pagination aclass="justify-content-center" unit={ 9 } count={ 9 } />
                    </div>
                </div>
            </div>
        </>
    );
}