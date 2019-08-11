import * as React from 'react';
import "../../Styles/AppStyles.css";
import { Carousel } from '../Carousel/Carousel';

export const MainPage: React.FunctionComponent = () => {
    return (
        <>
            <Carousel />
            <div className="main-page__intro-text">
                <div className="main-page__mission-title">Empowering athletes. Fostering community.</div>
                <div className="main-page__mission-subtext">Enriching the lives of post-collegiate athletes while serving the community.</div>
            </div>
        </>
    );
}