import React from 'react';
import './CoachIcon.css';

export default (props) => {
    return (
        <div className="coach-icon-container">
            <img className="coach-icon" src={props.imageUri} />
        </div>
    )
}