import React from 'react';

interface IMenuOptionProps {
    menuOptionData: IMenuOption
}

export const MenuOption: React.FunctionComponent<IMenuOptionProps> = (props) => (
    <div className="header__header-option">
        {props.menuOptionData.label}
    </div>
)