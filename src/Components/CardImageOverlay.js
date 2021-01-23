import React from 'react';
import './CardImageOverlay.css'
import { HiSortAscending } from "react-icons/hi";

export default (props) => {
    return (
        <div className="card-image-overlay-container">
            <span className="card-image-overlay-big-text">{props.workouts}</span>
            <span className="card-image-overlay-med-text">WORKOUTS</span>
            <HiSortAscending className="card-image-icon"/>
        </div>
    )
}