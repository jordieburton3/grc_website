import React from 'react';

interface MenuDropdownProps {
    options: string[]
}

export const MenuDropdown: React.FunctionComponent<MenuDropdownProps> = (props) => {
    const { options } = props;
    return (
        <div className="header__menu-dropdown">
            {options.map((o, i) => (
                <div key={i}>
                    {o}
                </div>
            ))}
        </div>
    );
};