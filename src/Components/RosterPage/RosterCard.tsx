import React from 'react';
import "../../Styles/AppStyles.css";

interface IRosterCardProps {
    athlete: IRosterAthlete;
}

export const RosterCard: React.FunctionComponent<IRosterCardProps> = (props) => {
    const { athlete } = props
    return (
        <div className="roster-page__card-wrapper" onClick={() => window.location.href=`/profile/${athlete.id}`}>
            <div className="roster-page__card-overlay">
                <span className="roster-page__card-overlay-text">{athlete.firstName} {athlete.lastName}</span>
            </div>
            <img className="roster-page__card-image" src={athlete.image} alt=""/>
        </div>
    );
}