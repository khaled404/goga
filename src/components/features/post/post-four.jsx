import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import OwlCarousel from '../owl-carousel';

function PostFour( props ) {
    const { post, isIsotope = false } = props;

    if ( post ) {
        let date = new Date( post.date );
        let options = { year: "numeric", month: "short", day: "2-digit", timeZone: "UTC" };

        return (
            <article className="entry entry-mask">
                { post.type === "image" ?
                    <figure className="entry-media">
                        <Link to={ `${process.env.PUBLIC_URL}/blog/single/${post.id}` }>
                            { isIsotope ?
                                <img src={ `${process.env.PUBLIC_URL + '/' + post.image[ 0 ]}` } alt="post_image" width="300" height="300" />
                                :
                                <>
                                    <div className="lazy-overlay bg-3"></div>

                                    <LazyLoadImage
                                        alt="post_image"
                                        src={ `${process.env.PUBLIC_URL + '/' + post.image[ 0 ]}` }
                                        threshold={ 500 }
                                        effect="blur"
                                        width={ 300 }
                                        height={ 300 }
                                    />
                                </>
                            }
                        </Link>
                    </figure> :

                    post.type === "video" ?
                        <figure className="entry-media entry-video">
                            <Link to={ `${process.env.PUBLIC_URL}/blog/single/${post.id}` }>
                                { isIsotope ?
                                    <img src={ `${process.env.PUBLIC_URL + '/' + post.image[ 0 ]}` } alt="post_image" width="300" height="300" />
                                    :
                                    <>
                                        <div className="lazy-overlay bg-3"></div>

                                        <LazyLoadImage
                                            alt="post_image"
                                            src={ `${process.env.PUBLIC_URL + '/' + post.image[ 0 ]}` }
                                            threshold={ 500 }
                                            effect="blur"
                                            width={ 300 }
                                            height={ 300 }
                                        />
                                    </>
                                }
                            </Link>
                        </figure> :

                        post.type === "gallery" ?
                            <figure className="entry-media">
                                <OwlCarousel adClass="owl-simple owl-light owl-nav-inside owl-loaded owl-drag cols-1" carouselId={ "post_five" + post.id }>
                                    {
                                        post.image.map( ( item, index ) =>
                                            <Link to={ `${process.env.PUBLIC_URL}/blog/single/${post.id}` } key={ `${index}_blog` }>
                                                { isIsotope ?
                                                    <img src={ `${process.env.PUBLIC_URL + '/' + post.image[ index ]}` } alt="post_image" width="300" height="300" />
                                                    :
                                                    <>
                                                        <div className="lazy-overlay bg-3"></div>

                                                        <LazyLoadImage
                                                            alt="post_image"
                                                            src={ `${process.env.PUBLIC_URL + '/' + post.image[ index ]}` }
                                                            threshold={ 500 }
                                                            effect="blur"
                                                            width={ 300 }
                                                            height={ 300 }
                                                        />
                                                    </>
                                                }
                                            </Link>
                                        ) }
                                </OwlCarousel>
                            </figure> : ""
                }

                <div className="entry-body">
                    <div className="entry-meta">
                        <Link to="#">{ date.toLocaleDateString( 'en-US', options ) }</Link>
                        <span className="meta-separator">|</span>
                        <Link to="#">{ post.comments } Comments</Link>
                    </div>
                    <h2 className="entry-title">
                        <Link to={ `${process.env.PUBLIC_URL}/blog/single/${post.id}` }>{ post.title }</Link>
                    </h2>
                    <div className="entry-cats">
                        in&nbsp;
                        { post.category.map( ( cat, index ) => (
                            <span key={ index }>
                                <Link to="#">{ cat }</Link>
                                { index < post.category.length - 1 ? ', ' : '' }
                            </span>
                        ) ) }
                    </div>
                </div>
            </article>
        );
    } else {
        return '';
    }
}

export default React.memo( PostFour );