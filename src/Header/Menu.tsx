import React from 'react';
import { MenuDropdown } from './MenuDropdown';

interface MenuProps {
    label: string;
}

export const Menu: React.FunctionComponent<MenuProps> = (props) => {
    const { label } = props;
    const [hovered, setHovered] = React.useState(false);
    return (
        <div className="header__menu" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            {label}
            <MenuDropdown options={["testing 1", "testing 2", "third option"]}/>
        </div>
    );
};