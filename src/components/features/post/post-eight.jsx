import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import OwlCarousel from '../owl-carousel';

function PostEight( props ) {
    const { post, isContent = true, isIsotope = false } = props;
    if ( post ) {
        let date = new Date( post.date );
        let options = { year: "numeric", month: "short", day: "2-digit", timeZone: "UTC" };

        return (
            <article className="entry entry-grid">
                { "video" === post.type ?
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
                                    />
                                </>
                            }
                        </Link>
                    </figure> :

                    Array.isArray( post.image ) && "gallery" === post.type ?
                        <figure className="entry-media">
                            <OwlCarousel adClass="owl-simple owl-light owl-nav-inside cols-1" carouselId={ "post_eight" + post.id }>
                                { post.image.map( ( item, index ) => (
                                    <div key={ "post_eight" + index }>
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
                                                />
                                            </>
                                        }
                                    </div>
                                ) )
                                }
                            </OwlCarousel>
                        </figure> :

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
                                        />
                                    </>
                                }
                            </Link>
                        </figure>
                }

                <div className="entry-body">
                    <div className="entry-meta">
                        { isContent ?
                            <span className="entry-author">
                                by <Link to="#">{ post.author }</Link>
                            </span> : ''
                        }
                        { isContent ?
                            <span className="meta-separator">|</span> : ''
                        }
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

                    { isContent ?
                        <div className="entry-content">
                            <p>{ post.content }</p>
                            <Link to={ `${process.env.PUBLIC_URL}/blog/single/${post.id}` } className="read-more">Continue Reading</Link>
                        </div> : '' }
                </div>
            </article>
        );
    } else {
        return '';
    }
}

export default PostEight;