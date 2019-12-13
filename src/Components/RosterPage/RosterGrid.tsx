import React from 'react';
import "../../Styles/AppStyles.css";
import { RosterCard } from './RosterCard';
import { AppContext, getAthleteListForGender } from '../../AppContext';
import { BoardPositions } from '../StaffPage/types/BoardMember';

interface IConnectedRosterGridProps {
	gender: string;
}

interface IRosterGridProps {
	athleteList: IMemberInfo[];
}

const RosterGrid: React.FunctionComponent<IRosterGridProps> = (props) => {
	const { athleteList } = props;
    return (
        <div className="roster-page__grid">
			{athleteList.map(a => <RosterCard key={`${a.id}${a.firstName}`} athlete={a}/>)}
        </div>
    );
}

export const ConnectedRosterGrid: React.FunctionComponent<IConnectedRosterGridProps> = (props) => {
	return (
		<AppContext.Consumer>
			{(context) => (
				<RosterGrid athleteList={getAthleteListForGender(context, props.gender)}/>
			)}
		</AppContext.Consumer>
	);
}