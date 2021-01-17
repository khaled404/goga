import React from 'react';

import PostEight from '../../../features/post/post-eight';
import OwlCarousels from '../../../features/owl-carousel';

import { mainSlider1 } from '../../../settings';
import posts from '../../../../mock_data/posts';

export default function RelatedPost() {
    let relatedPosts = [];
    relatedPosts.push( posts[ 28 ] );
    relatedPosts = relatedPosts.concat( posts.slice( 98, 100 ) );
    relatedPosts.push( posts[ 31 ] );

    return (
        <div className="related-posts">
            <h3 className="title">Related Posts</h3>
            <OwlCarousels adClass="owl-simple" carouselOptions={ mainSlider1 }>
                {
                    relatedPosts.map( ( post, index ) =>
                        <PostEight post={ post } isContent={ false } key={ "related_" + index } />
                    )
                }
            </OwlCarousels>
        </div>
    )
}