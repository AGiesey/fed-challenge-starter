import React, { useState } from 'react';
import './Card.css';
import CardImageOverlay from './CardImageOverlay';
import CoachIcon from './CoachIcon';
import { BsStopwatch } from "react-icons/bs";
import { RiCreativeCommonsSaLine } from "react-icons/ri";

export default (props) => {
    const {thumbUri, title, time, distance, trainer, workouts} = props.workout;
    const {iconImageUri} = trainer;

    const [isActive, setIsActive] = useState(false);

    const toggleActive = () => {
        const newActiveState = !isActive;
        setIsActive(newActiveState);
    }

    return (
        <div className={`card-container ${isActive && "active-card"}`} onClick={toggleActive}>
            <div className="card-image-container">
                <img src={thumbUri} />
                {
                    workouts && <CardImageOverlay workouts={workouts} />
                }
            </div>
            <div className="card-body-container">
                <div className="card-body-info-container">
                    <p className="card-title">{title}</p>
                    <div className="time-and-distance-container">
                        {time && <><BsStopwatch className="stat-icon"/><span className="stat">{time}</span></>}
                        {distance && <><RiCreativeCommonsSaLine className="stat-icon"/><span className="stat">{distance}</span></>}
                    </div>
                    {isActive && <a className="view-details-link" href="#">VIEW DETAILS</a>}
                </div>
                <div className="card-body-coach-container">
                    {iconImageUri && <CoachIcon imageUri={iconImageUri} />}
                </div>
            </div>
        </div>
    )
}