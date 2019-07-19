import React from 'react';
import { MenuDropdown } from './MenuDropdown';

interface MenuProps {
    menuData: IMenu
}

export const Menu: React.FunctionComponent<MenuProps> = (props) => {
    const { menuData } = props;
    return (
        <div className="header__menu">
            {menuData.label}
            <MenuDropdown options={menuData.options}/>
        </div>
    );
};