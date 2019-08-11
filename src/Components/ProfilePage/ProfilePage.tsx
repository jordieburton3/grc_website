import * as React from 'react';
import "../../Styles/AppStyles.css";
import { RouteComponentProps } from 'react-router';
import { ProfileHeader } from './ProfileHeader';
import { ProfileCarousel } from './ProfileCarousel';
import { AppContext } from '../../AppContext';
import { ProfileBasicInfo } from './ProfileBasicInfo';

interface MatchParams {
    id: string;
}

interface IConnectedProfilePageProps extends RouteComponentProps<MatchParams> {
}

interface IProfilePageProps {
    athleteBio: IAthleteBio;
}

const ProfilePage: React.FunctionComponent<IProfilePageProps> = (props) => {
    const { athleteBio } = props;
    return (
        <div className="profile-page__wrapper">
            <div className="profile-page__content-wrapper">
				<ProfileCarousel />
				<ProfileBasicInfo />
			</div>
        </div>
    );
}

export const ConnectedProfilePage: React.FunctionComponent<IConnectedProfilePageProps> = (props) => {
	const { id } = props.match.params;
	const athleteIdAsInt = parseInt(id);
	console.log(id);
    return (
		<AppContext.Consumer>
			{context => {
				console.log(context);
				return (
					<ProfilePage athleteBio={context.state.athleteMap[`${athleteIdAsInt}`]}/>
				)
			}}
		</AppContext.Consumer>
	)
}