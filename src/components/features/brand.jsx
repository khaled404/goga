import React from 'react';
import { Link } from 'react-router-dom';

import OwlCarousels from './owl-carousel';
import { brandSlider } from '../settings';

import data from '../../mock_data/data.json';

function Brand( props ) {
    const { adClass = "mt-5 mb-5 owl-simple", count = 7, start = 0, sliderOption = brandSlider } = props;

    return (
        <OwlCarousels adClass={ `${adClass} brand-carousel cols-xl-7 cols-lg-5 cols-md-4 cols-sm-3 cols-2` } carouselOptions={ sliderOption } carouselId="brandslider">
            { data.brands.default.slice( start, start + count ).map( ( vari, i ) => {
                return (
                    <Link to="#" className="brand mr-0" key={ i } >
                        <img src={ process.env.PUBLIC_URL + '/' + vari.image } alt={ vari.name } width="200" height="200" />
                    </Link>
                )
            } )
            }
        </OwlCarousels>
    )
}

export default Brand;