import React from 'react';

export default (props) => {
    return (
        <div className="card-image-overlay-container">
            <span className="card-image-overlay-big-text">{props.workouts}</span>
            <span className="card-image-overlay-med-text">WORKOUTS</span>
        </div>
    )
}