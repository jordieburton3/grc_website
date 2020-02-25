import React from 'react';
import '../../Styles/AppStyles.css';
import { RecordHeader } from './RecordHeader';
import { AppContext } from '../../AppContext';
import { millisecondsToTime } from '../../Utils/TimeConversionUtils';

interface IRecordSectionProps {
	records: IClubRecord[];
	athleteMap: { [key: string]: IAthleteBio };
}

interface IConnectedRecordSection {
	records: IClubRecord[];
}

export const RecordSection: React.FunctionComponent<
	IRecordSectionProps
> = props => {
	const { records, athleteMap } = props;
	const { gender, venue } = records[0];
	return (
		<div className="record-section__wrapper">
			<RecordHeader gender={gender} venue={venue} />
			{records.map((r: IClubRecord, i: number) => (
				<div className="" key={`${r.athleteId}${r.event}`}>
					<p>
						{r.event} | &nbsp;{millisecondsToTime(r.time)} | &nbsp;
						<span>
							<a
								className="record-section__athlete-link"
								href={`/profile/${r.athleteId}`}
							>
								{athleteMap[r.athleteId].firstName}{' '}
								{athleteMap[r.athleteId].lastName}
							</a>
						</span>{' '}
						| &nbsp;{r.yearSet}
					</p>
				</div>
			))}
		</div>
	);
};

export const ConnectedRecordSection: React.FunctionComponent<
	IConnectedRecordSection
> = props => (
	<AppContext.Consumer>
		{context => (
			<RecordSection
				records={props.records}
				athleteMap={context.state.athleteMap}
			/>
		)}
	</AppContext.Consumer>
);
