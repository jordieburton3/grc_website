import * as React from 'react';
import ContentEditable from 'react-contenteditable';
import sanitizeHtml from 'sanitize-html';
import '../../Styles/AppStyles.css';
import { EditableContent } from '../EditableContent/EditableContent';

// TODO: Get prs from database and pass as prop.
// TODO: Get these both from database and pass as props
const about =
	"Taylor started running at Sebring High School as a freshman on the cross country and track teams. After a couple of Florida high school state medals, she went on to run at the University of Florida. As much as Taylor wanted to be a miler, she found that as she got older the slightly longer distances of 3000 and 5000 were better suited to her ability. \n\nSome notable collegiate races for Taylor were her 2016 Penn Relays Championship in the 5000, her 2016 qualification for the NCAA Outdoor Track Championships in the 5000, 2017 Tom Jones 1500 Meter Championship, and her runner-up finish in the 2017 SEC Outdoor Track Championship in the 5000. Taylor's future running goals are to keep enjoying the sport, stay competitive, run the 10 Mile Cherry Blossom Run, and make a track 5000 comeback in the coming years. Taylor moved to Washington DC right after graduation to work at Deloitte Consulting as a Federal Business Analyst in Strategy and Operations.";
const athleteName = 'Taylor';

export const ProfileAbout: React.FunctionComponent = () => {
	return (
		<div className="profile-page__about-wrapper">
			<div className="profile-page__about-title">About {athleteName}:</div>
			<EditableContent
				className={'profile-page__about-text standard-text'}
				html={about}
				onSave={() => {}}
				canEdit={true /* if is admin or is this athlete */}
			/>
		</div>
	);
};
