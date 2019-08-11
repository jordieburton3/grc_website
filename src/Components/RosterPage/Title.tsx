import React from 'react';
import $ from 'jquery';
import "../../Styles/AppStyles.css";

interface ITitleProps {
    gender: string;
}

export const Title: React.FunctionComponent<ITitleProps> = (props) => {
    const { gender } = props;
    const [mediaStyles, setMediaHeight] = React.useState({});
	const mediaStylesRef = React.useRef(mediaStyles);
    React.useEffect(() => {
        const height = $(".roster-page__team-text")[0].scrollHeight;
        const teamTextHeight = $(".roster-page__meet-the-team")[0].scrollHeight;
		setMediaHeight({ ...mediaStylesRef, height: `${height + teamTextHeight + 30 }px` }); // 30 is our hard coded margin bottom value
	}, []);
    return (
        <div className="roster-page__title" style={mediaStyles}>
            <div className="roster-page__team-text">
                Team
            </div>
            <div className="roster-page__meet-the-team">
                Meet the {gender}'s team
            </div>
        </div>
    );
}