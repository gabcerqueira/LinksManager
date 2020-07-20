export const secondsToReadableTime = (seconds) => {
	const h = Math.floor(seconds / 60 / 60);
	const m = Math.floor(seconds / 60) - h * 60;
	const s = seconds % 60;
	const formatNumber = (value) => `0${Number.parseInt(value, 10)}`.slice(-2);
	const readableTime = [h, m, s].map(formatNumber).join(":");
	return readableTime;
};
