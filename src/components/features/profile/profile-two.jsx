import React from 'react';
import { Link } from 'react-router-dom';

function ProfileTwo( props ) {
    const { image, name, title } = props;

    return (
        <div className="member member-2 text-center">
            <figure className="member-media">
                <img src={ process.env.PUBLIC_URL + '/' + image } alt="member" />

                <figcaption className="member-overlay">
                    <div className="social-icons social-icons-simple">
                        <Link to="#" className="social-icon" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></Link>
                        <Link to="#" className="social-icon" title="Twitter" target="_blank"><i className="icon-twitter"></i></Link>
                        <Link to="#" className="social-icon" title="Instagram" target="_blank"><i className="icon-instagram"></i></Link>
                    </div>
                </figcaption>
            </figure>

            <div className="member-content">
                <h3 className="member-title">{ name }<span>{ title }</span></h3>
            </div>
        </div>
    )
}

export default React.memo( ProfileTwo );