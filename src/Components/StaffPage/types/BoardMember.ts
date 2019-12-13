export enum BoardPositions {
    President = "President",
    VicePresident = "Vice president",
    Secretary = "Secretary",
    WomensDirector = "Women's team director",
    MensDirector = "Men's team director",
    Coach = "Coach"
}

export interface IBoardMember {
    id: number;
    position: BoardPositions;
}