import * as React from 'react';
import "../../Styles/AppStyles.css";
import { RouteComponentProps } from 'react-router';
import { ProfileCarousel } from './ProfileCarousel';
import { AppContext } from '../../AppContext';
import { ProfileBasicInfo } from './ProfileBasicInfo';
import { ProfilePersonalBests } from './ProfilePersonalBests';
import { ProfileAbout } from './ProfileAbout';
import { InstagramIcon } from '../Icons/Instagram';
import { TwitterIcon } from '../Icons/Twitter';
import { EmailIcon } from '../Icons/Email';

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
	const hasSocialMedia = athleteBio.instagram || athleteBio.email || athleteBio.twitter;
    return (
        <div className="profile-page__wrapper">
            <div className="profile-page__content-wrapper">
				<ProfileCarousel />
				<ProfileBasicInfo />
				<ProfilePersonalBests />
				<ProfileAbout />
				<div className="profile-page__social-media-wrapper">
					{ hasSocialMedia &&
						<div className="profile-page__social-media-title standard-bold-text">
							Connect with {athleteBio.firstName}:
						</div>
					}
					{ athleteBio.instagram &&
						<a className="profile-page__handle-wrapper" href={`https://instagram.com/${athleteBio.instagram}`}>
							<InstagramIcon />
							<span className="profile-page__social-media-text standard-text standard-text">@{athleteBio.instagram}</span>
						</a>
					}
					{ athleteBio.twitter &&
						<a className="profile-page__handle-wrapper" href={`https://twitter.com/${athleteBio.twitter}`}>
							<TwitterIcon />
							<span className="profile-page__social-media-text standard-text">@{athleteBio.twitter}</span>
						</a>
					}
					{
						athleteBio.email && 
						<a className="profile-page__handle-wrapper" href={athleteBio.email}>
							<EmailIcon />
							<span className="profile-page__social-media-text standard-text">@{athleteBio.email}</span>
						</a>
					}
				</div>
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