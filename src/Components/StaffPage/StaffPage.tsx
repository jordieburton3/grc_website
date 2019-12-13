import React from 'react';
import "../../Styles/AppStyles.css";
import { StaffTitle } from './StaffTitle';
import { IBoardMember, BoardPositions } from './types/BoardMember';
import { ConnectedRosterGrid } from '../RosterPage/RosterGrid';
import { ConnectedStaffGrid } from './StaffGrid';

export const StaffPage: React.FunctionComponent = (props) => {

    return (
        <div className="staff-page__wrapper">
            <StaffTitle />
            <ConnectedStaffGrid />
        </div>
    );
}