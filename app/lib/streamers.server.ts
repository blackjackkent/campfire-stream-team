import streamData from "./streamerData.json";
import { ApiClient } from "twitch";
import { ClientCredentialsAuthProvider } from "twitch-auth";

const clientId = process.env.TWITCH_CLIENT_ID || "";
const clientSecret = process.env.TWITCH_CLIENT_SECRET || "";
const authProvider = new ClientCredentialsAuthProvider(clientId, clientSecret);
const apiClient = new ApiClient({ authProvider });

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
		const handles = streamData.map((s) => s.twitchHandle.toLowerCase());
		const liveStreamers = await filterStreamersByCurrentlyLive(handles);
		return liveStreamers;
	} catch (e) {
		console.error(e);
		return null;
	}
};
