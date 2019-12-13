import React from 'react';
import "../../Styles/AppStyles.css";
import { RosterCard } from '../RosterPage/RosterCard';
import { BoardPositions } from './types/BoardMember';
import { AppContext, getAthleteListForBoard } from '../../AppContext';

interface IStaffGridProps {
    athleteList: IMemberInfo[];
    boardMemberMap: { [key: number]:  BoardPositions }
}

const StaffGrid: React.FunctionComponent<IStaffGridProps> = (props) => {
	const { athleteList, boardMemberMap } = props;
    return (
        <div className="roster-page__grid">
			{athleteList.map(a => <RosterCard key={`${a.id}${a.firstName}`} athlete={a} boardMemberMap={boardMemberMap}/>)}
        </div>
    );
}

export const ConnectedStaffGrid: React.FunctionComponent = () => (
    <AppContext.Consumer>
        {(context) => (
            <StaffGrid athleteList={getAthleteListForBoard(context)} boardMemberMap={context.state.boardMemberMap}/>
        )}
    </AppContext.Consumer>
);