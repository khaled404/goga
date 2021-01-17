import React from 'react';
import { Link } from 'react-router-dom';

function ProductCategoryTwo( props ) {
    const { image, category, count, adClass = '' } = props;

    return (
        <div className="banner banner-cat">
            <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` }>
                <img src={ process.env.PUBLIC_URL + '/' + image } alt="Banner" />
            </Link>

            <div className="banner-content banner-content-overlay text-center">
                <h3 className={ `banner-title ${adClass}` }>{ category }</h3>
                <h4 className="banner-subtitle">{ count } Products</h4>
                <Link to={ `${process.env.PUBLIC_URL}/shop/sidebar/list` } className="banner-link">Shop Now</Link>
            </div>
        </div>
    );
}

export default React.memo( ProductCategoryTwo );