import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component'

import { showModal } from '../../../actions';

// import Custom Components
import Breadcrumb from '../../common/breadcrumb';
import BlogSidebar from '../../features/sidebar/blog-sidebar';
import OwlCarousels from '../../features/owl-carousel';
import Comments from './partials/comments';
import Reply from './partials/reply';
import RelatedPosts from './partials/related-posts';
import { isIEBrowser } from '../../../utils';

import posts from '../../../mock_data/posts';
import VideoModal from '../../features/modal/video-modal';

function SingleFullWidthSidebar( props ) {
    const { showModal } = props;
    const postId = props.match.params.id;
    let nextId, prevId;
    const post = posts.filter( item => item.id === parseInt( postId ) )[ 0 ];
    const nextPost = posts.filter( item => item.id > parseInt( postId ) )[ 0 ];
    const prevPost = posts.filter( item => item.id < parseInt( postId ) )[ 0 ];

    if ( nextPost ) {
        nextId = parseInt( postId ) + 1;
    } else {
        nextId = parseInt( postId );
    }

    if ( prevPost ) {
        prevId = parseInt( postId ) - 1;
    } else {
        prevId = parseInt( postId );
    }

    if ( !post ) {
        window.location = process.env.PUBLIC_URL + "/pages/404";
    }

    let date = new Date( post.date );
    let options = { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" };

    const showVideoModal = ( e ) => {
        showModal( 'video' );
        e.preventDefault();
    }

    function toTop() {
        window.scroll( {
            top: 0
        } )
    }

    return (
        <>
            <Helmet>
                <title>Molla React eCommerce Template | Blog Fullwidth No Sidebar</title>
            </Helmet>

            <h1 className="d-none">Molla React eCommerce Template - Blog Fullwidth No Sidebar</h1>

            <div className="main single-2">
                <Breadcrumb title="Fullwidth With Sidebar" parent1={ [ "Blog", "blog/classic" ] } adClass="mb-0 border-bottom-0" />
                <div className="page-content">
                    <div className="container">
                        { post.type === "gallery" ?
                            <figure className="entry-media">
                                <OwlCarousels adClass="owl-simple owl-light owl-nav-inside">
                                    { post.image.map( ( item, index ) =>
                                        <div key={ "blog" + index }>
                                            <div className="lazy-overlay bg-3"></div>

                                            <LazyLoadImage
                                                src={ process.env.PUBLIC_URL + '/' + item }
                                                alt="blog"
                                                width={ 100 }
                                                height={ 400 }
                                                effect="blur"
                                            />
                                        </div>
                                    ) }
                                </OwlCarousels>
                            </figure> :
                            post.type === "image" ?
                                <figure className="entry-media">
                                    <div className="lazy-overlay bg-3"></div>

                                    <LazyLoadImage
                                        src={ process.env.PUBLIC_URL + '/' + post.image[ 0 ] }
                                        alt="blog"
                                        width={ 100 }
                                        height={ 400 }
                                        effect="blur"
                                    />
                                </figure>
                                :
                                <figure className="entry-media entry-video">
                                    <Link to="#" onClick={ showVideoModal }>
                                        <div className="lazy-overlay bg-3"></div>

                                        <LazyLoadImage
                                            alt="post_image"
                                            src={ `${process.env.PUBLIC_URL + '/' + post.image[ 0 ]}` }
                                            threshold={ 100 }
                                            effect="blur"
                                            width={ 300 }
                                            height={ 300 }
                                        />
                                    </Link>
                                </figure>
                        }
                        <div className="row">
                            <div className="col-lg-9">
                                <article className="entry single-entry">

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

                                        <h2 className="entry-title entry-title-big">
                                            { post.title }
                                        </h2>

                                        { post.category ?
                                            <div className="entry-cats">
                                                in&nbsp;
                                                { post.category.map( ( cat, index ) => (
                                                    <span key={ index }>
                                                        <Link to="#">{ cat }</Link>
                                                        { index < post.category.length - 1 ? ', ' : '' }
                                                    </span>
                                                ) ) }
                                            </div> : ''
                                        }

                                        <div className="entry-content editor-content">
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>

                                            <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a <Link to="#">ultrices sagittis</Link>, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>

                                            <blockquote>
                                                <p>“ Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. ”</p>
                                            </blockquote>

                                            <p>Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula <Link to="#">sollicitudin laoreet</Link> viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. </p>

                                            <div className="pb-1"></div>

                                            <img src={ `${process.env.PUBLIC_URL}/assets/images/blog/single/fullwidth-sidebar/4.jpg` } alt="blog" />
                                            <img src={ `${process.env.PUBLIC_URL}/assets/images/blog/single/fullwidth-sidebar/5.jpg` } alt="blog" />

                                            <div className="pb-1"></div>

                                            <p>Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna. Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. </p>

                                            <div className="pb-1"></div>

                                            <h3>Morbi interdum mollis sapien.</h3>

                                            <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. </p>

                                            <p>Praesent <Link to="#">elementum hendrerit</Link> tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
                                        </div>

                                        <div className="entry-footer row no-gutters flex-column flex-md-row">
                                            <div className="col-md">
                                                <div className="entry-tags">
                                                    <span>Tags:</span> <Link to="#">photography</Link> <Link to="#">style</Link>
                                                </div>
                                            </div>

                                            <div className="col-md-auto mt-2 mt-md-0">
                                                <div className="social-icons social-icons-color">
                                                    <span className="social-label">Share this post:</span>
                                                    <Link to="#" className="social-icon social-facebook" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></Link>
                                                    <Link to="#" className="social-icon social-twitter" title="Twitter" target="_blank"><i className="icon-twitter"></i></Link>
                                                    <Link to="#" className="social-icon social-pinterest" title="Pinterest" target="_blank"><i className="icon-pinterest"></i></Link>
                                                    <Link to="#" className="social-icon social-linkedin" title="Linkedin" target="_blank"><i className="icon-linkedin"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="entry-author-details">
                                        <figure className="author-media">
                                            <Link to="#">
                                                <img src={ `${process.env.PUBLIC_URL}/assets/images/blog/single/author.jpg` } alt="User name" />
                                            </Link>
                                        </figure>

                                        <div className="author-body">
                                            <div className="author-header row no-gutters flex-column flex-md-row">
                                                <div className="col">
                                                    <h4><Link to="#">John Doe</Link></h4>
                                                </div>
                                                {
                                                    isIEBrowser() ?
                                                        <div className="mb-1"></div>
                                                        : ""
                                                }
                                                <div className="col-auto mt-1 mt-md-0">
                                                    <Link to="#" className="author-link">View all posts by John Doe <i className="icon-long-arrow-right"></i></Link>
                                                </div>
                                            </div>

                                            <div className="author-content">
                                                <p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat. Aliquam erat volutpat. </p>
                                            </div>
                                        </div>
                                    </div>
                                </article>

                                <nav className="pager-nav" aria-label="Page navigation" style={ isIEBrowser() ? { flexFlow: 'wrap' } : {} }>
                                    <Link onClick={ toTop } className="pager-link pager-link-prev" to={ `${process.env.PUBLIC_URL}/blog/single/${prevId}` } aria-label="Previous" tabIndex="-1">
                                        Previous Post
                                        <span className="pager-link-title">Cras iaculis ultricies nulla</span>
                                    </Link>

                                    <Link onClick={ toTop } className="pager-link pager-link-next" to={ `${process.env.PUBLIC_URL}/blog/single/${nextId}` } aria-label="Next" tabIndex="-1">
                                        Next Post
                                        <span className="pager-link-title">Praesent placerat risus</span>
                                    </Link>
                                </nav>

                                <RelatedPosts />
                                <Comments />
                                <Reply />
                            </div>

                            <aside className="col-lg-3">
                                <BlogSidebar />
                            </aside>
                        </div>
                    </div>
                </div>

                <VideoModal />
            </div>
        </>
    );
}

export default connect( null, { showModal } )( SingleFullWidthSidebar )