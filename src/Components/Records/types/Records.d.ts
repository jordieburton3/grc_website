interface IClubRecord {
    athleteId: number;
    event: string;
    time: number;
    yearSet: number;
    gender: string;
    venue: string;
}

interface IClubRecordMap {
    [key: string]: IClubRecord[]
}