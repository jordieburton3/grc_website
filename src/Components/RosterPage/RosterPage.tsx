import React from 'react';
import '../../Styles/AppStyles.css';
import { Title } from './Title';
import { ConnectedRosterGrid } from './RosterGrid';
import { RouteComponentProps } from 'react-router-dom';

interface MatchParams {
	gender: string;
}

interface IRosterPageProps extends RouteComponentProps<MatchParams> {}

export const RosterPage: React.FunctionComponent<IRosterPageProps> = props => {
	const { gender } = props.match.params;
	return (
		<div className="roster-page__wrapper">
			<Title gender={gender} />
			<ConnectedRosterGrid gender={gender} />
		</div>
	);
};
