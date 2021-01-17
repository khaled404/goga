import React, { useState, useEffect } from 'react';

function Pagination( props ) {
    const { aclass, count = 12, unit = 6, filters, cols } = props;

    const [ pos, setPos ] = useState( 1 );

    let pageCount = parseInt( count / unit ) + ( 0 < ( count % unit ) ? 1 : 0 );
    let pageNumbers = [];

    for ( let i = -1; i < 2 && pageCount >= 3; i++ ) {
        if ( 1 < pos && pos < pageCount )
            pageNumbers.push( pos + i );
        if ( 1 === pos )
            pageNumbers.push( pos + i + 1 );
        if ( pos === pageCount )
            pageNumbers.push( pos + i - 1 );
    }

    for ( let i = 0; i < pageCount && pageCount < 3; i++ ) {
        pageNumbers.push( i + 1 );
    }

    useEffect( () => {
        setPos( 1 );

        if ( props.onChange ) {
            props.onChange( 0 );
        }
    }, [ filters, cols ] )

    function onPageLink( e, index ) {
        setPos( index );

        if ( props.onChange )
            props.onChange( ( index - 1 ) * props.unit );
    }

    function onPrev( e ) {
        setPos( pos - 1 );

        if ( props.onChange )
            props.onChange( ( pos - 2 ) * props.unit );
    }

    function onNext( e ) {
        setPos( pos + 1 );

        if ( props.onChange )
            props.onChange( ( pos ) * props.unit );
    }

    return (
        <nav aria-label="Page navigation" style={ { display: 0 === count ? 'none' : '' } }>
            <ul className={ `pagination ${aclass}` }>

                <li className={ `page-item ${1 === pos ? 'disabled' : ''}` } >
                    <button className="page-link page-link-prev" to="#" aria-label="Previous" tabIndex="-1" aria-disabled="true" onClick={ onPrev }>
                        <span aria-hidden="true"><i className="icon-long-arrow-left"></i></span>Prev
                    </button>
                </li>

                {
                    pageNumbers.map( ( item, index ) => (
                        <li className={ `page-item ${item === pos ? 'active' : ''}` }
                            aria-current="page"
                            key={ index }>
                            <button className="page-link" to="#" onClick={ ( e ) => onPageLink( e, item ) }>{ item }</button>
                        </li>
                    ) )
                }

                { pageCount > 3 && pos < pageCount ? <li className="page-item-total">of { pageCount }</li> : '' }

                <li className={ `page-item ${pageCount === pos ? 'disabled' : ''}` }>
                    <button className="page-link page-link-next" to="#" aria-label="Next" onClick={ onNext }>
                        Next <span aria-hidden="true"><i className="icon-long-arrow-right"></i></span>
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Pagination;