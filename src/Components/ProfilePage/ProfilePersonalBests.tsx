import * as React from 'react';
import "../../Styles/AppStyles.css";

// TODO: Get prs from database and pass as prop.
const prs = ["800&2:08", "Mile&4:39", "5000&16:07"];

export const ProfilePersonalBests: React.FunctionComponent = () => {
	return (
		<div className="profile-page__personal-best-wrapper">
                <span className="profile-page__personal-best-title standard-bold-text">
                    PRs&nbsp;|&nbsp;
                </span>
                {prs.map(pr => (
                    <div className="profile-page__personal-best">
                        <span className="profile-page__personal-best-event standard-bold-text">{pr.split("&")[0]}:&nbsp;</span>
                        <span className="profile-page__personal-best-event-time standard-text">{pr.split("&")[1]}</span>
                    </div>
                ))}
            </div>
	);
}