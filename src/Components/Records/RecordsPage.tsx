import React from 'react';
import '../../Styles/AppStyles.css';
import { AppContext } from '../../AppContext';
import { ConnectedRecordSection } from './RecordSection';
import { getSortedRecordKeys } from '../../Utils/RecordsUtil';

interface IRecordsPageProps {
	clubRecordsMap: { [key: string]: IClubRecord[] };
}

const RecordsPage: React.FunctionComponent<IRecordsPageProps> = props => {
	const { clubRecordsMap } = props;
	return (
		<div className="records-page_wrapper">
			<div className="standard-bold-colored-text">Club Records</div>
			{getSortedRecordKeys(Object.keys(clubRecordsMap)).map(r => (
				<ConnectedRecordSection records={clubRecordsMap[r]} key={r} />
			))}
		</div>
	);
};

export const ConnectedRecordsPage: React.FunctionComponent = () => (
	<AppContext.Consumer>
		{context => <RecordsPage clubRecordsMap={context.state.clubRecordsMap} />}
	</AppContext.Consumer>
);
