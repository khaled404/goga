import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { removeFromCompare, resetCompare } from '../../../actions';
import { safeContent } from '../../../utils';

function CompareMenuTwo( props ) {
    const { compareList, removeFromCompare, resetCompare } = props;

    return (
        <div className="dropdown compare-dropdown">
            <a href="#dropdown" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static" title="Compare Products" aria-label="Compare Products">
                <div className="icon">
                    <i className="icon-random"></i>
                </div>
                <p>Compare</p>
            </a>
            <div className="dropdown-menu dropdown-menu-right">
                <ul className="compare-products">
                    { compareList.map( ( item, index ) => (
                        <li className="compare-product" key={ index }>
                            <button className="btn-remove" title="Remove Product" onClick={ () => removeFromCompare( item ) }><i className="icon-close"></i></button>
                            <h4 className="compare-product-title"><Link to={ `${process.env.PUBLIC_URL}/product/default/27` } dangerouslySetInnerHTML={ safeContent( item.name ) }></Link></h4>
                        </li>
                    ) ) }
                    {
                        0 === compareList.length ? <p className="mb-1">No products in the compare.</p> : ''
                    }
                </ul>
                <div className="compare-actions">
                    <button className="action-link" onClick={ () => resetCompare() }>Clear All</button>
                    <Link to="#" className="btn btn-outline-primary-2"><span>Compare</span><i className="icon-long-arrow-right"></i></Link>
                </div>
            </div>
        </div>
    );
}

function mapStateToProps( state ) {
    return {
        compareList: state.compare.items ? state.compare.items : []
    }
}
export default connect( mapStateToProps, { removeFromCompare, resetCompare } )( CompareMenuTwo );