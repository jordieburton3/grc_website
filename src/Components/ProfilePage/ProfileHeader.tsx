import * as React from 'react';
import $ from 'jquery';
import '../../Styles/AppStyles.css';

interface ITitleProps {
	athleteName: string;
}

export const ProfileHeader: React.FunctionComponent<ITitleProps> = props => {
	const { athleteName } = props;
	const [mediaStyles, setMediaHeight] = React.useState({});
	const mediaStylesRef = React.useRef(mediaStyles);
	React.useEffect(() => {
		const athleteTitleHeight = $('.profile-page__athlete-title')[0]
			.scrollHeight;
		setMediaHeight({
			...mediaStylesRef,
			height: `${athleteTitleHeight + 30}px`
		}); // 30 is our hard coded margin bottom value
	}, []);
	return (
		<div className="profile-page__title" style={mediaStyles}>
			<div className="profile-page__athlete-title">Meet {athleteName}</div>
		</div>
	);
};
