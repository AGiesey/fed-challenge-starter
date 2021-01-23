import React from 'react';

export default (props) => {
    return (
        <div className="coach-icon-container">
            <img className="coach-icon" src={props.imageUri} />
        </div>
    )
}