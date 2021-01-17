import React from 'react';
import Comment from './comment';

function Comments() {
    return (
        <div className="comments">
            <h3 className="title">3 Comments</h3>
            <ul>
                <li>
                    <Comment image={ `assets/images/blog/comments/1.jpg` } name="Jimmy Pearson" date="November 9, 2018 at 2:19 pm" content="Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. " />
                    <ul>
                        <li>
                            <Comment image={ `assets/images/blog/comments/2.jpg` } name="Lena  Knight" date="November 9, 2018 at 2:19 pm" content="Morbi interdum mollis sapien. Sed ac risus." />
                        </li>
                    </ul>
                </li>

                <li>
                    <Comment image={ `assets/images/blog/comments/3.jpg` } name="Johnathan Castillo" date="November 9, 2018 at 2:19 pm" content="Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna." />
                </li>
            </ul>
        </div>
    );
}

export default Comments;