import React from 'react';

function LandingOverlay( props ) {
    return (
        <div className="loading-overlay">
            <div className="root-loader bounce-loader">
                <div className="bounce1"></div>
                <div className="bounce2"></div>
                <div className="bounce3"></div>
            </div>
        </div>
    )
}

export default React.memo( LandingOverlay );