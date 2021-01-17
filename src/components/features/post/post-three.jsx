import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function PostThree( props ) {
    const { post, author = false, isIsotope = false, readmoreText = "Read More", adClass = "text-center" } = props;

    if ( post ) {
        let date = new Date( post.date );
        let options = { year: "numeric", month: "short", day: "2-digit", timeZone: "UTC" };

        return (
            <article className={ `entry entry-grid` }>
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

                <div className={ `entry-body ${adClass}` }>
                    { author ?
                        <div className="entry-meta">
                            by <Link to="#">{ post.author }</Link>, <Link to="#">{ date.toLocaleDateString( 'en-US', options ) }</Link>, { post.comments } Comments
                        </div> :
                        <div className="entry-meta">
                            <Link to="#">{ date.toLocaleDateString( 'en-US', options ) }</Link>, { post.comments } Comments
                        </div>
                    }

                    <h2 className="entry-title">
                        <Link to={ `${process.env.PUBLIC_URL}/blog/single/${post.id}` }>
                            { post.title }
                        </Link>
                    </h2>

                    <div className="entry-content">
                        <p>{ post.content }</p>

                        <Link to={ `${process.env.PUBLIC_URL}/blog/single/${post.id}` } className="read-more">
                            { readmoreText }
                        </Link>
                    </div>
                </div>
            </article>
        );
    } else {
        return '';
    }
}

export default React.memo( PostThree );