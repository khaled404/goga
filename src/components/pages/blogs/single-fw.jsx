import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import StickyBox from 'react-sticky-box';

// import Custom Components
import Breadcrumb from '../../common/breadcrumb';
import OwlCarousels from '../../features/owl-carousel';
import Reply from './partials/reply';
import RelatedPosts from './partials/related-posts';

import { showModal } from '../../../actions';
import { setStickyValues, stickyContentHandle, isIEBrowser } from '../../../utils';

import posts from '../../../mock_data/posts';

function SingleFullWidth( props ) {
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

    useEffect( () => {
        setStickyValues();
        window.addEventListener( "scroll", stickyContentHandle, true );

        return () => {
            window.removeEventListener( "scroll", stickyContentHandle );
        }
    }, [] )

    if ( !post ) {
        window.location = process.env.PUBLIC_URL + "/pages/404";
    }

    const showVideoModal = ( e ) => {
        showModal( 'video' );
        e.preventDefault();
    }

    function toTop() {
        window.scroll( {
            top: 0
        } )
    }

    let date = new Date( post.date );
    let options = { year: "numeric", month: "short", day: "numeric", timeZone: "UTC" };

    return (
        <>
            <Helmet>
                <title>Molla React eCommerce Template | Blog Fullwidth With Sidebar</title>
            </Helmet>

            <h1 className="d-none">Molla React eCommerce Template - Blog Fullwidth With Sidebar</h1>

            <div className="main single-2">

                <Breadcrumb title="Fullwidth" parent1={ [ "Blog", "blog/classic" ] } adClass="breadcrumb-nav border-0 mb-0" />

                <div className="page-content">
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
                    <div className="container">
                        <article className="entry single-entry entry-fullwidth">
                            <div className="row">
                                <div className="col-lg-11">
                                    <div className="entry-body">
                                        <div className="entry-meta">
                                            { post.author ?
                                                <span className="entry-author">
                                                    by <Link to="#">{ post.author }</Link>
                                                </span> : ''
                                            }
                                            <span className="meta-separator">|</span>
                                            <Link to="#">{ date.toLocaleDateString( 'en-US', options ) }</Link>
                                            <span className="meta-separator">|</span>
                                            <Link to="#">{ post.comments } Comments</Link>
                                        </div>

                                        <h2 className="entry-title entry-title-big">
                                            Fusce pellentesque suscipit nibh.
                                        </h2>

                                        <div className="entry-cats">
                                            in <Link to="#">Travel</Link>
                                        </div>

                                        <div className="entry-content editor-content">
                                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.</p>

                                            <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a <Link to="#">ultrices sagittis</Link>, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>

                                            <p>Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.</p>

                                            <div className="pb-1"></div>

                                            <img src={ `${process.env.PUBLIC_URL}/assets/images/blog/single/fullwidth/2.jpg` } alt="desc" />

                                            <div className="pb-1"></div>

                                            <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent <Link to="#">elementum hendrerit</Link> tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>

                                            <blockquote>
                                                <p>“ Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Vivamus vestibulum ntulla nec ante. ”</p>
                                            </blockquote>

                                            <h3>Donec nec justo eget felis facilisis fermentum.</h3>

                                            <p>Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna. Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. </p>

                                            <p>Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.</p>

                                            <div className="pb-1"></div>

                                            <img src={ `${process.env.PUBLIC_URL}/assets/images/blog/single/fullwidth/3.jpg` } alt="desc" />

                                            <div className="pb-1"></div>

                                            <p>Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna. Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.</p>
                                        </div>

                                        <div className="entry-footer row no-gutters">
                                            <div className="col">
                                                <div className="entry-tags">
                                                    <span>Tags:</span> <Link to="#">photography</Link> <Link to="#">style</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-1 order-lg-first mb-2 mb-lg-0">
                                    <StickyBox offsetTop={ 80 } className="sticky-content">
                                        <div className="social-icons social-icons-colored social-icons-vertical" >
                                            <span className="social-label">SHARE:</span>

                                            <Link to="#" className="social-icon social-facebook" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></Link>
                                            <Link to="#" className="social-icon social-twitter" title="Twitter" target="_blank"><i className="icon-twitter"></i></Link>
                                            <Link to="#" className="social-icon social-pinterest" title="Pinterest" target="_blank"><i className="icon-pinterest"></i></Link>
                                            <Link to="#" className="social-icon social-linkedin" title="Linkedin" target="_blank"><i className="icon-linkedin"></i></Link>
                                        </div>
                                    </StickyBox>
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
                            <Link onClick={ toTop } className="pager-link pager-link-prev" to={ `${process.env.PUBLIC_URL}/blog/single-2/${prevId}` } aria-label="Previous" tabIndex="-1">
                                Previous Post
                                <span className="pager-link-title">Cras iaculis ultricies nulla</span>
                            </Link>

                            <Link onClick={ toTop } className="pager-link pager-link-next" to={ `${process.env.PUBLIC_URL}/blog/single-2/${nextId}` } aria-label="Next" tabIndex="-1">
                                Next Post
                                <span className="pager-link-title">Praesent placerat risus</span>
                            </Link>
                        </nav>

                        <RelatedPosts />
                        <div className="comments">
                            <h3 className="title">0 Comment</h3>
                        </div>
                        <Reply />
                    </div>
                </div>
            </div>
        </>
    );
}

export default connect( null, { showModal } )( SingleFullWidth );