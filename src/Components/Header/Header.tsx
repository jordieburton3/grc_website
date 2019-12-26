import * as React from 'react';
import "../../Styles/AppStyles.css";
import { Menu } from './Menu';
import { AppContext } from '../../AppContext';

interface IHeaderProps {
	menus: IMenuOption[]
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
	const { menus } = props;
    return (
        <div className="header__header-wrapper">
			<a href="/" className="header__logo-link">
				<img className="header__logo" alt ="" src={"https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/17553719_1136313303162341_6462230596129262083_n.png?_nc_cat=111&_nc_ohc=8g90we8vc5UAQmiI8v9rwIJi12hvIMbkJjOp5WAsXLHD_BNx4Soy3HQqw&_nc_ht=scontent-iad3-1.xx&oh=9776b090449ff4394b428c67a2364607&oe=5E835A36"}/>
			</a>
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
