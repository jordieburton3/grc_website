import * as React from 'react';
import "../Styles/AppStyles.css";
import { Menu } from './Menu';

export const Header: React.FunctionComponent = () => {
	const labels = ["option 1", "second option"]
    return (
        <div className="header__header-wrapper">
			<div className="header__header-content">
				{labels.map((l, i) => (
					<Menu key={i} label={l}/>
				))}
			</div>
		</div>
    );
};

