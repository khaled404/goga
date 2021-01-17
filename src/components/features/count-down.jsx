import React from 'react';

// countdown renderer for comming soon
export const rendererOne = ( { days, hours, minutes, seconds } ) => (
    <span className="count-row countdown-show4">
        <span className="countdown-section">
            <span className="countdown-amount">{ days }</span>
            <span className="countdown-period">Days</span>
        </span>
        <span className="countdown-section">
            <span className="countdown-amount">{ hours }</span>
            <span className="countdown-period">Hours</span>
        </span>
        <span className="countdown-section">
            <span className="countdown-amount">{ minutes }</span>
            <span className="countdown-period">Minutes</span>
        </span>
        <span className="countdown-section">
            <span className="countdown-amount">{ seconds }</span>
            <span className="countdown-period">Seconds</span>
        </span>
    </span>
);

// countdown renderer type 2
export const rendererTwo = ( { days, hours, minutes, seconds } ) => (
    <span className="countdown-row countdown-amount">
        { days } days, { hours } : { minutes } : { seconds }
    </span>
);

// countdown renderer type 3
export const rendererThree = ( { days, hours, minutes, seconds } ) => (
    <span className="countdown-row countdown-show3">
        <span className="countdown-section">
            <span className="countdown-amount">{ hours }</span>
            <span className="countdown-period">hours</span>
        </span>
        <span className="countdown-section">
            <span className="countdown-amount">{ minutes }</span>
            <span className="countdown-period">mins</span>
        </span>
        <span className="countdown-section">
            <span className="countdown-amount">{ seconds }</span>
            <span className="countdown-period">secs</span>
        </span>
    </span>
);