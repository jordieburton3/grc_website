import * as React from 'react';
import "../../Styles/AppStyles.css";

const image = "https://floridagators.com/images/2016/9/1/TubbsTaylor_Headshot_160826_1725.jpg?width=300";

export const ProfileBasicInfo: React.FunctionComponent = () => {
    return (
        <div className="profile-page__basic-info-wrapper">
            <div className="profile-page__athlete-profile-picture-wrapper">
                <img src={image} alt="" className="profile-page__athlete-profile-picture"/>
            </div>
            <div className="profile-page__athlete-name">
                Taylor Tubbs
            </div>
            <ul className="profile-page__background-info-wrapper">
                <li className="profile-page__background-info">
                    <dt className="profile-page__background-info-title">Alma mater:</dt> <dd>Florida</dd>
                </li>
                <li className="profile-page__background-info">
                    <dt className="profile-page__background-info-title">Hometown:</dt> <dd>Somewhere in florida</dd>
                </li>
                <li className="profile-page__background-info">
                    <dt className="profile-page__background-info-title">Event:</dt> <dd>Distance</dd>
                </li>
            </ul>
        </div>
    );
}