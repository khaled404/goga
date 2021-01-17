import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import OwlCarousel from '../owl-carousel';

function PostThree( props ) {
    const { post, imageSize = 4, isIsotope = false } = props;

    if ( post ) {
        let date = new Date( post.date );
        let options = { year: "numeric", month: "short", day: "2-digit", timeZone: "UTC" };

        return (
            <article className="entry entry-list">
                <div className="row align-items-center">
                    <div className={ `col-md-${imageSize}` }>
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
                                                height={ 300 }
                                            />
                                        </>
                                    }
                                </Link>
                            </figure> :

                            Array.isArray( post.image ) && "gallery" === post.type ?
                                <figure className="entry-media">
                                    <OwlCarousel adClass="owl-simple owl-light owl-nav-inside cols-1" carouselId={ "post_two" + post.id }>
                                        { post.image.map( ( item, index ) =>
                                            <Link to={ `${process.env.PUBLIC_URL}/blog/single/${post.id}` } key={ index }>
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
                                                    height={ 300 }
                                                />
                                            </>
                                        }
                                    </Link>
                                </figure>
                        }
                    </div>

                    <div className={ `col-md-${12 - imageSize}` }>
                        <div className="entry-body">
                            <div className="entry-meta">
                                <span className="entry-author">
                                    by <Link to="#">{ post.author }</Link>
                                </span>
                                <span className="meta-separator">|</span>
                                <Link to="#">{ date.toLocaleDateString( 'en-US', options ) }</Link>
                                <span className="meta-separator">|</span>
                                <Link to="#">{ post.comments } Comments</Link>
                            </div>

                            <h2 className="entry-title">
                                { post.title }
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

                            <div className="entry-content">
                                <p>{ post.content }</p>
                                <Link to={ `${process.env.PUBLIC_URL}/blog/single/${post.id}` } className="read-more">Continue Reading</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        );
    } else {
        return '';
    }
}

export default React.memo( PostThree );