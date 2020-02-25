import React from 'react';
import '../../Styles/AppStyles.css';

interface IRecordHeaderProps {
	gender: string;
	venue: string;
}

export const RecordHeader: React.FunctionComponent<
	IRecordHeaderProps
> = props => {
	const { gender, venue } = props;
	return (
		<div className="record-header__wrapper">
			<h1 className="standard-bold-text record-header__title">
				{gender}'s {venue}
			</h1>
			<p className="standard-text record-header__key">
				Event |&nbsp;Time |&nbsp;Holder |&nbsp;Set
			</p>
		</div>
	);
};
