import React from 'react';
import { createSelector } from "reselect";
import { IBoardMember, BoardPositions } from './Components/StaffPage/types/BoardMember';

// TODO: Get these all from the database and possible add some sort of loading state.
const dummyMenuOptionData: IMenuOption[] = [{ link: "/roster/men", label: "Men's roster" }, { link: "/roster/women", label: "Women's roster" }, { link: "/staff", label: "The staff" }, { link: "/records", label: "Team records" }];
const dummyMenuData: IMenu[] = [{ label: "About", options: dummyMenuOptionData }];
const dummyAthleteData: IMemberInfo[] = [
    { id: 1, firstName: "Gina", lastName: "McNamara", image: "http://www.grcrunning.com/uploads/5/6/0/9/5609246/published/18083892-10212902692826133-104163445-o.jpg?1516842187", gender: "women"},
    { id: 2, firstName: "Taylor", lastName: "Tubbs", image: "http://www.grcrunning.com/uploads/5/6/0/9/5609246/tay_orig.jpg", gender: "women"},
    { id: 3, firstName: "Stephanie", lastName: "Reich", image: "http://www.grcrunning.com/uploads/5/6/0/9/5609246/2620708.jpg", gender: "women"},
    { id: 4, firstName: "Chelsea", lastName: "Bollerman", image: "http://www.grcrunning.com/uploads/5/6/0/9/5609246/chelsea-clarendonday_orig.jpg", gender: "women"},
    { id: 5, firstName: "Jordan", lastName: "Burton", image: "http://www.grcrunning.com/uploads/5/6/0/9/5609246/published/jordan-10.png?1563288479", gender: "men" }
];
const dummyAthleteMap: { [key: string]: IAthleteBio } = {};
dummyAthleteData.forEach(a => dummyAthleteMap[`${a.id}`] = { id: a.id, firstName: a.firstName, lastName: a.lastName, bio: "This is a bio about the athlete with id", prList: ["800,1:50", "Mile,4:04.18"], image: a.image, instagram: "taylortubbs", twitter: "jordyburton3", email: "jordieburton3@gmail.com" });
const dummyBoardInfoList: IBoardMember[] = [{id: 5, position: BoardPositions.MensDirector}, { id: 2, position: BoardPositions.President }]
const dummyBoardInfo: { [key: number]: BoardPositions } = {};
dummyBoardInfoList.forEach(i => dummyBoardInfo[i.id] = i.position);

interface IGrcAppContextProps {}

interface IGrcAppContextState {
    menu: IMenu[]
    athleteList: IMemberInfo[];
    athleteMap: { [key: string]: IAthleteBio };
    boardMemberMap: { [key: number]:  BoardPositions };
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
            athleteMap: dummyAthleteMap,
            boardMemberMap: dummyBoardInfo
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
const getBoardMembers = (context: IAppContext) => context.state.athleteList.filter(a => dummyBoardInfo[a.id]);

export const getAthleteListForGender = createSelector(
  [ getAthleteList ],
  (athletes: IMemberInfo[]) => athletes
)

export const getAthleteListForBoard = createSelector(
    [ getBoardMembers ],
    (athletes: IMemberInfo[]) => athletes
  )