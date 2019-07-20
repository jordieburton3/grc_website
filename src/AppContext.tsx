import React from 'react';

const dummyMenuOptionData: IMenuOption[] = [{ link: "/roster?gender=men", label: "Men's roster" }, { link: "/roster?gender=women", label: "Women's roster" }, { link: "/staff", label: "The staff" }, { link: "/mission", label: "Our mission" }, { link: "/records", label: "Team records" }];
const dummyMenuData: IMenu[] = [{ label: "About", options: dummyMenuOptionData }];

interface IGrcAppContextProps {}

interface IGrcAppContextState {
    menu: IMenu[]
}

interface IAppContext {
    state: IGrcAppContextState
}

export const AppContext = React.createContext({} as IAppContext);

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