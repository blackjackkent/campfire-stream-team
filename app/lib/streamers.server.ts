import streamData from "./streamerData.json";
import { ApiClient } from "twitch";
import { ClientCredentialsAuthProvider } from "twitch-auth";
import type { Schedule, ScheduleItem, Streamer } from "./types";
import { sortScheduleItems } from "./utils";

const clientId = process.env.TWITCH_CLIENT_ID || "";
const clientSecret = process.env.TWITCH_CLIENT_SECRET || "";
const authProvider = new ClientCredentialsAuthProvider(clientId, clientSecret);
const apiClient = new ApiClient({ authProvider });
const data: Streamer[] = streamData;

const filterStreamersByCurrentlyLive = async (handles: string[]) => {
	const filter = {
		userName: handles,
	};
	const streams = await apiClient.helix.streams.getStreams(filter);
	const currentlyLiveStreamers = streams.data.map((s) =>
		s.userName.toLowerCase()
	);
	return currentlyLiveStreamers;
};

export const fetchCurrentlyLiveStreamers = async () => {
	try {
		const handles = data.map((s) => s.twitchHandle.toLowerCase());
		const liveStreamers = await filterStreamersByCurrentlyLive(handles);
		return liveStreamers;
	} catch (e) {
		console.error(e);
		return null;
	}
};

export const fetchTodaysStreams = (dayId: number) => {
	const todaysStreams: ScheduleItem[] = [];
	data.forEach((s) => {
		const todaysStreamForStreamer = s.streams?.find((stream) => {
			const localDate = new Date(stream.seedDate);
			return localDate.getDay() === dayId;
		});
		if (todaysStreamForStreamer) {
			todaysStreams.push({
				twitchHandle: s.twitchHandle,
				stream: todaysStreamForStreamer,
			});
		}
	});
	return todaysStreams.sort(sortScheduleItems);
};

export const fetchSchedule = () => {
	const schedule: Schedule = {
		0: [],
		1: [],
		2: [],
		3: [],
		4: [],
		5: [],
		6: [],
	};
	data.forEach((s) => {
		s.streams?.forEach((stream) => {
			const localDate = new Date(stream.seedDate);
			const dayId = localDate.getDay();
			schedule[dayId].push({
				twitchHandle: s.twitchHandle,
				stream,
			});
		});
	});
	for (let i = 0; i <= 6; i++) {
		schedule[i] = schedule[i].sort(sortScheduleItems);
	}
	return schedule;
};
