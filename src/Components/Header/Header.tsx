import * as React from 'react';
import "../../Styles/AppStyles.css";
import { Menu } from './Menu';
import { AppContext } from '../../AppContext';

interface IHeaderProps {
	menus: IMenu[]
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
	const { menus } = props;
    return (
        <div className="header__header-wrapper">
			<a href="/" className="header__logo-link">
				<img className="header__logo" alt ="" src={"https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/17553719_1136313303162341_6462230596129262083_n.png?_nc_cat=111&_nc_oc=AQk1Qi1kF9TgG3S59o9D_I5V7wnQaEMXmoj_hDaMnqyVaaelV9M6mcY3eccxTshtn2f4BffknmPBNjduetEqWDkN&_nc_ht=scontent-iad3-1.xx&oh=60d4b036fd2361a8de14e2c130ed70d0&oe=5DE52636"}/>
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
