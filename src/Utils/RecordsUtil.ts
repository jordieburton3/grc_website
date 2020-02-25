/**
 * 
 * const records = [
    {
        athleteId: 1,
        event: "800m",
        time: convertToMilliseconds({ minutes: 2, seconds: 7 }),
        yearSet: 2018,
        gender: "women",
        venue: "indoor track"
    },
    {
        athleteId: 2,
        event: "5000m",
        time: convertToMilliseconds({ minutes: 16, seconds: 4 }),
        yearSet: 2017,
        gender: "women"
    },
    {
        athleteId: 2,
        event: "10000m",
        time: convertToMilliseconds({ minutes: 33, seconds: 30 }),
        yearSet: 2015,
        gender: "women"
    },
    {
        athleteId: 1,
        event: "1 mile",
        time: convertToMilliseconds({ minutes: 4, seconds: 47 }),
        yearSet: 2019,
        gender: "women"
    },
    {
        athleteId: 5,
        event: "1500m",
        time: convertToMilliseconds({ minutes: 3, seconds: 46 }),
        yearSet: 2018,
        gender: "men"
    },
    {
        athleteId: 5,
        event: "800m",
        time: convertToMilliseconds({ minutes: 1, seconds: 50.32 }),
        yearSet: 2018,
        gender: "men"
    }
];
 */
// TODO: Turn this into a selector
export const mapClubRecords = (records: IClubRecord[]) => {
	const clubRecordsMap: IClubRecordMap = {};
	records.forEach(r => {
		const key = `${r.gender}$${r.venue}`;
		if (!clubRecordsMap[key]) {
			clubRecordsMap[key] = [];
		}
		clubRecordsMap[key].push(r);
	});
	return clubRecordsMap;
};

export const getSortedRecordKeys = (keys: string[]) => {
	const keysSorted = [...keys];
	keysSorted.sort((a: string, b: string) => {
		const aSplit = a.split('$');
		const bSplit = b.split('$');
		return aSplit[1].localeCompare(bSplit[1]) == 0
			? aSplit[0].localeCompare(bSplit[0])
			: aSplit[1].localeCompare(bSplit[1]);
	});
	return keysSorted;
};
