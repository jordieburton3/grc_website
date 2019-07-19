import React from 'react';
import { MenuOption } from "./MenuOption";

interface MenuDropdownProps {
    options: IMenuOption[]
}

export const MenuDropdown: React.FunctionComponent<MenuDropdownProps> = (props) => {
    const { options } = props;
    return (
        <div className="header__menu-dropdown">
            {options.map((o, i) => (
                <MenuOption key={i} menuOptionData={o}/>
            ))}
        </div>
    );
};