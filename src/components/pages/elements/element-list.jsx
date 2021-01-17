import React from 'react';
import { Link } from 'react-router-dom';

import _data from '../../../mock_data/data';

function ElementList() {
    return (
        <div className="container pb-5 element-list">
            <div className="row elements">
                { _data.elementsUrl.map( item => (
                    <div className="col-xl-5col col-lg-4 col-md-3 col-6" key={ item.name }>
                        <Link to={ process.env.PUBLIC_URL + item.url } className="element-type">
                            <div className="element">
                                <i className="element-img"></i>
                                <i className="element-hover-img"></i>
                                <p>{ item.name }</p>
                            </div>
                        </Link>
                    </div>
                ) ) }
            </div>
        </div>
    );
}

export default React.memo( ElementList );