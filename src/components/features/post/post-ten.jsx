import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function PostTen( props ) {
    const { post } = props;
    let date = new Date( post.date );
    let options = { year: "numeric", month: "short", day: "2-digit", timeZone: "UTC" };

    return (
        <article className="entry">
            <figure className="entry-media">
                <div className="lazy-overlay bg-3"></div>

                <Link to={ `${process.env.PUBLIC_URL}/blog/single/${post.id}` }>
                    <LazyLoadImage
                        src={ process.env.PUBLIC_URL + '/' + post.image }
                        alt="post"
                        width={ 100 }
                        threshold={ 300 }
                        effect="blur"
                    />
                </Link>
            </figure>

            <div className="entry-body text-center">
                <div className="entry-meta">
                    <Link to={ `${process.env.PUBLIC_URL}/blog/single/${post.id}` }>{ date.toLocaleDateString( 'en-US', options ) }</Link>, { post.comments } Comments
                </div>

                <h3 className="entry-title">
                    <a href={ `${process.env.PUBLIC_URL}/blog/single/${post.id}` }>{ post.title }</a>
                </h3>

                <div className="entry-content">
                    <p className="pl-1 pr-1">{ post.content }</p>

                    <a href={ `${process.env.PUBLIC_URL}/blog/single/${post.id}` } className="read-more">Read More</a>
                </div>
            </div>
        </article>
    )
}

export default PostTen;