import * as React from 'react';
import "../Styles/AppStyles.css";
import { Menu } from './Menu';
import { AppContext } from '../AppContext';

interface IHeaderProps {
	menus: IMenu[]
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
	const { menus } = props;
    return (
        <div className="header__header-wrapper">
			<div className="header__header-content">
				{menus.map((l, i) => (
					<Menu key={i} menuData={l}/>
				))}
			</div>
		</div>
    );
};

export const ConnectedHeader: React.FunctionComponent = () => (
	<AppContext.Consumer>
		{context =>(
			<Header menus={context.state.menu}/>
		)}
	</AppContext.Consumer>
);
