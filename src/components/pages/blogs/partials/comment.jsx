import React from 'react';
import { safeContent } from '../../../../utils';
import { Link } from 'react-router-dom';

function Comment( props ) {
    const { image, name, date, content } = props;

    return (
        <div className="comment">
            <figure className="comment-media">
                <Link to="#">
                    <img src={ process.env.PUBLIC_URL + '/' + image } alt="User name" />
                </Link>
            </figure>

            <div className="comment-body">
                <Link to="#" className="comment-reply">Reply</Link>
                <div className="comment-user">
                    <h4><Link to="#">{ name }</Link></h4>
                    <span className="comment-date">{ date }</span>
                </div>

                <div className="comment-content">
                    <p dangerouslySetInnerHTML={ safeContent( content ) }></p>
                </div>
            </div>
        </div>
    );
}

export default React.memo( Comment );