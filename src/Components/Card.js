import React from 'react';
import './Card.css';
import CardImageOverlay from './CardImageOverlay';
import CoachIcon from './CoachIcon';

export default (props) => {
    const {thumbUri, title, time, distance, trainer, workouts} = props.workout;
    const {iconImageUri} = trainer;

    return (
        <div className="card-container">
            <div className="card-image-container">
                <img src={thumbUri} />
                {
                    workouts && <CardImageOverlay workouts={workouts} />
                }
            </div>
            <div className="card-body-container">
                <div className="card-body-info-container">
                    <p className="card-title">{title}</p>
                    {
                        (time || distance) && 
                        <div className="time-and-distance-container">
                            {time && <span>{time}</span>}
                            {distance && <span>{distance}</span>}
                        </div>
                    }
                </div>
                <div className="card-body-coach-container">
                    {iconImageUri && <CoachIcon imageUri={iconImageUri} />}
                </div>
                <a href="#">VIEW DETAILS</a>
            </div>
        </div>
    )
}