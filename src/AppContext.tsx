import React from 'react';

const dummyMenuOptionData: IMenuOption[] = [{ link: "/roster?gender=men", label: "Men's" }, { link: "/roster?gender=women", label: "Women's" }];
const dummyMenuData: IMenu[] = [{ label: "Roster", options: dummyMenuOptionData }];

interface IGrcAppContextProps {}

interface IGrcAppContextState {
    menu: IMenu[]
}

interface IAppContext {
    state: IGrcAppContextState
}

const defaultContext = {
    state: {
        menu: []
    }
}

export const AppContext = React.createContext<IAppContext>(defaultContext);

export class GrcApp extends React.PureComponent<IGrcAppContextProps, IGrcAppContextState> {
    constructor(props: IGrcAppContextProps) {
        super(props);
        this.state = {
            menu: dummyMenuData
        }
    }

    render() {
        return (
            <AppContext.Provider value={{
                state: this.state
            }}>
                {this.props.children}
            </AppContext.Provider>
        );
    }
}