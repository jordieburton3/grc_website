import React from 'react';
import { createSelector } from "reselect";

// TODO: Get these all from the database and possible add some sort of loading state.
const dummyMenuOptionData: IMenuOption[] = [{ link: "/roster/men", label: "Men's roster" }, { link: "/roster/women", label: "Women's roster" }, { link: "/staff", label: "The staff" }, { link: "/mission", label: "Our mission" }, { link: "/records", label: "Team records" }];
const dummyMenuData: IMenu[] = [{ label: "About", options: dummyMenuOptionData }];
const dummyAthleteData: IRosterAthlete[] = [
    { id: 1, firstName: "Gina", lastName: "McNamara", image: "http://www.grcrunning.com/uploads/5/6/0/9/5609246/published/18083892-10212902692826133-104163445-o.jpg?1516842187", gender: "women"},
    { id: 2, firstName: "Taylor", lastName: "Tubbs", image: "http://www.grcrunning.com/uploads/5/6/0/9/5609246/tay_orig.jpg", gender: "women"},
    { id: 3, firstName: "Stephanie", lastName: "Reich", image: "http://www.grcrunning.com/uploads/5/6/0/9/5609246/2620708.jpg", gender: "women"},
    { id: 4, firstName: "Chelsea", lastName: "Bollerman", image: "http://www.grcrunning.com/uploads/5/6/0/9/5609246/chelsea-clarendonday_orig.jpg", gender: "women"},
    { id: 4, firstName: "Jordan", lastName: "Burton", image: "http://www.grcrunning.com/uploads/5/6/0/9/5609246/published/jordan-10.png?1563288479", gender: "men" }
];
const dummyAthleteMap: { [key: string]: IAthleteBio } = {};
dummyAthleteData.forEach(a => dummyAthleteMap[`${a.id}`] = { id: a.id, firstName: a.firstName, lastName: a.lastName, bio: "This is a bio about the athlete with id", prList: ["800,1:50", "Mile,4:04.18"], image: a.image, instagram: "taylortubbs", twitter: "jordyburton3", email: "jordieburton3@gmail.com" });

interface IGrcAppContextProps {}

interface IGrcAppContextState {
    menu: IMenu[]
    athleteList: IRosterAthlete[];
    athleteMap: { [key: string]: IAthleteBio };
}

interface IAppContext {
    state: IGrcAppContextState
}

export const AppContext = React.createContext({} as IAppContext);

export class GrcApp extends React.PureComponent<IGrcAppContextProps, IGrcAppContextState> {
    constructor(props: IGrcAppContextProps) {
        super(props);
        this.state = {
            menu: dummyMenuData,
            athleteList: dummyAthleteData,
            athleteMap: dummyAthleteMap
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

const getAthleteList = (context: IAppContext, gender: string) => context.state.athleteList.filter(a => a.gender === gender);

export const getAthleteListForGender = createSelector(
  [ getAthleteList ],
  (athletes: IRosterAthlete[]) => athletes
)