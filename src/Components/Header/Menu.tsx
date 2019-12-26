import React from 'react';
import { MenuDropdown } from './MenuDropdown';

interface MenuProps {
    menuData: IMenuOption
}

export const Menu: React.FunctionComponent<MenuProps> = (props) => {
    const { menuData } = props;
    return (
        <div className="header__menu" onClick={() => window.location.href = menuData.link}>
            {menuData.label}
        </div>
    );
};