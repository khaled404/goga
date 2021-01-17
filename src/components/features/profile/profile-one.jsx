import React from 'react';
import { Link } from 'react-router-dom';

function ProfileOne( props ) {
    const { image, name, title, content } = props;

    return (
        <div className="member member-anim text-center">
            <figure className="member-media">
                <img src={ process.env.PUBLIC_URL + '/' + image } alt="member" />

                <figcaption className="member-overlay">
                    <div className="member-overlay-content">
                        <h3 className="member-title">{ name }<span>{ title }</span></h3>
                        <p>{ content }</p>
                        <div className="social-icons social-icons-simple">
                            <Link to="#" className="social-icon" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></Link>
                            <Link to="#" className="social-icon" title="Twitter" target="_blank"><i className="icon-twitter"></i></Link>
                            <Link to="#" className="social-icon" title="Instagram" target="_blank"><i className="icon-instagram"></i></Link>
                        </div>
                    </div>
                </figcaption>
            </figure>

            <div className="member-content">
                <h3 className="member-title">{ name }<span>{ title }</span></h3>
            </div>
        </div>
    )
}

export default React.memo( ProfileOne );