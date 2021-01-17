import React from 'react';
import { Link } from 'react-router-dom';

function ProductCategoryFive( props ) {
    const { image, category, count } = props;

    return (
        <div className="banner banner-cat banner-badge">
            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                <img src={ process.env.PUBLIC_URL + '/' + image } alt="Banner" />
            </Link>

            <div className="banner-link">
                <h3 className="banner-title">{ category }</h3>
                <h4 className="banner-subtitle">{ count } Products</h4>
                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="banner-link-text">Shop Now</Link>
            </div>

        </div>
    );
}

export default React.memo( ProductCategoryFive );