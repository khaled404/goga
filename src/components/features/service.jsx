import React from 'react';

// import jsons
import data from '../../mock_data/data';

function Service( props ) {
    const { adClass = "bg-transparent", iconAdClass = "text-dark", container = "container" } = props;

    return (
        <div className={ `icon-boxes-container ${adClass}` }>
            <div className={ container }>
                <div className="row">
                    { data.services.map( ( item, index ) =>
                        <div className="col-sm-6 col-lg-3" key={ index }>
                            <div className="icon-box icon-box-side">
                                <span className={ `icon-box-icon ${iconAdClass}` }>
                                    <i className={ item.icon }></i>
                                </span>
                                <div className="icon-box-content">
                                    <h3 className="icon-box-title">{ item.title }</h3>
                                    <p>{ item.subtitle }</p>
                                </div>
                            </div>
                        </div>
                    ) }
                </div>
            </div>
        </div>
    )
}

export default React.memo( Service );