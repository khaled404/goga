import React from 'react';
import { Link } from 'react-router-dom';

function PortfolioTwo( props ) {
    const { image, title = "Vestibulum auctor dapibus", category } = props;

    return (
        <div className="portfolio">
            <figure className="portfolio-media">
                <Link to="#">
                    <img src={ process.env.PUBLIC_URL + '/' + image } alt="item" />
                </Link>
            </figure>

            <div className="portfolio-content">
                <h3 className="portfolio-title"><Link to="#">{ title }</Link></h3>
                <div className="portfolio-tags">
                    <Link to="#">{ category }</Link>
                </div>
            </div>
        </div>
    );
}

export default React.memo( PortfolioTwo );