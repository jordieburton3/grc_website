export interface TimePieces {
	hours?: number;
	minutes?: number;
	seconds?: number;
}

const nearestHundredth = (n: number) => Math.ceil(n * 100) / 100;

const hoursToMilliseconds = (hours: number) =>
	nearestHundredth(hours * 60 * 60 * 1000);
const minutesToMilliseconds = (minutes: number) =>
	nearestHundredth(minutes * 60 * 1000);
const secondsToMilliseconds = (seconds: number) =>
	nearestHundredth(seconds * 1000);
const millisecondsToHours = (milliseconds: number) =>
	milliseconds / (60 * 60 * 1000);
const millisecondsToMinutes = (milliseconds: number) =>
	(millisecondsToHours(milliseconds) % 1) * 60;
const millisecondsToSeconds = (milliseconds: number) =>
	(millisecondsToMinutes(milliseconds) % 1) * 60;
const getHoursString = (hours: number) => `${hours > 0 ? `${hours}:` : ''}`;
const getMinutesString = (hours: number, minutes: number) => {
	const hasMinutes = minutes != 0;
	const hasHoursAndNoMinutes = getHoursString(hours) && !hasMinutes;
	if (hasHoursAndNoMinutes) {
		return '00:';
	}
	if (!hasMinutes) {
		return '';
	}
	return minutes < 10 ? `0${minutes}:` : `${minutes}:`;
};
const getSecondsString = (seconds: number) => {
	if (seconds < 1 && seconds > 0.0) {
		return `00.${seconds % 1}`;
	}
	if (seconds <= 0.0) {
		return '00';
	}
	return seconds < 10 ? `0${seconds}` : `${seconds}`;
};

export const convertToMilliseconds = ({
	hours = 0,
	minutes = 0,
	seconds = 0
}): number => {
	const convertedHours = hoursToMilliseconds(hours);
	const convertedMinutes = minutesToMilliseconds(minutes);
	const convertedSeconds = secondsToMilliseconds(seconds);
	return convertedHours + convertedMinutes + convertedSeconds;
};

export const millisecondsToTime = (milliseconds: number): string => {
	const hours = Math.floor(millisecondsToHours(milliseconds));
	const minutes = Math.floor(millisecondsToMinutes(milliseconds));
	const seconds = nearestHundredth(millisecondsToSeconds(milliseconds));
	return `${getHoursString(hours)}${getMinutesString(
		hours,
		minutes
	)}${getSecondsString(seconds)}`;
};
