import React from 'react';

interface IMenuOptionProps {
	menuOptionData: IMenuOption;
}

export const MenuOption: React.FunctionComponent<IMenuOptionProps> = props => (
	<div
		className="header__header-option"
		onClick={() => (window.location.href = props.menuOptionData.link)}
	>
		{props.menuOptionData.label}
	</div>
);
