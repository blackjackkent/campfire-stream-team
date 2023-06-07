import { DateTime } from "luxon";
import type { ScheduleItem, Stream } from "./types";

export const getStreamStartTime = (stream: Stream) => {
	const streamTime = DateTime.fromSQL(stream.seedDate);
	const startTime = streamTime.toLocaleString(DateTime.TIME_SIMPLE);
	return startTime;
};
export const getStreamEndTime = (stream: Stream) => {
	const streamTime = DateTime.fromSQL(stream.seedDate);
	const endTime = streamTime.plus({ hours: stream.length });
	return endTime.toLocaleString(DateTime.TIME_SIMPLE);
};

export const sortScheduleItems = (a: ScheduleItem, b: ScheduleItem) => {
	const aStart = new Date(a.stream.seedDate);
	const aStartHours = aStart.getHours();
	const aStartDay = aStart.getDay();
	const bStart = new Date(b.stream.seedDate);
	const bStartHours = bStart.getHours();
	const bStartDay = bStart.getDay();
	if (aStartDay != bStartDay) {
		return aStartDay - bStartDay;
	}
	return aStartHours - bStartHours;
};

export const shuffleArray = (array: any[]) =>
	array.sort(() => Math.random() - 0.5);
