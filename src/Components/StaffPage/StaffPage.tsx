import React from 'react';
import "../../Styles/AppStyles.css";
import { StaffTitle } from './StaffTitle';

export const StaffPage: React.FunctionComponent = (props) => {

    return (
        <div className="staff-page__wrapper">
            <StaffTitle />
        </div>
    );
}