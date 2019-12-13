import React from 'react';
import "../../Styles/AppStyles.css";
import { BoardPositions } from '../StaffPage/types/BoardMember';

interface IRosterCardProps {
    athlete: IMemberInfo;
    boardMemberMap?: { [key: number]:  BoardPositions }
}

export const RosterCard: React.FunctionComponent<IRosterCardProps> = (props) => {
    const { athlete, boardMemberMap } = props
    console.log(boardMemberMap);
    return (
        <div className="roster-page__card-wrapper" onClick={() => window.location.href=`/profile/${athlete.id}`}>
            <div className="roster-page__card-overlay">
                <span className="roster-page__card-overlay-text">
                    <span>
                        {athlete.firstName} {athlete.lastName}
                        {boardMemberMap &&
                            <>
                                <br />
                                <span className="roster-page__card-overlay-subtext">{boardMemberMap[athlete.id]}</span>
                            </>
                        }
                    </span>
                </span>
            </div>
            <img className="roster-page__card-image" src={athlete.image} alt=""/>
        </div>
    );
}