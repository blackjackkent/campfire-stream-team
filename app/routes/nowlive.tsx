import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import {
	fetchCurrentlyLiveStreamers,
	fetchTodaysStreams,
} from "~/lib/streamers.server";
import { json } from "@remix-run/node";
import { FaExternalLinkAlt } from "react-icons/fa";
import ScheduleDay from "~/components/ScheduleDay";
import { useEffect } from "react";

export const meta: V2_MetaFunction = () => {
	return [
		{ title: "Campfire Stream Team - Schedule" },
		{
			name: "description",
			content:
				"Schedule of weekly streams from the Campfire Stream Team's members.",
		},
	];
};

export async function loader() {
	return json({
		liveStreamers: await fetchCurrentlyLiveStreamers(),
	});
}

const NowLive = () => {
	const { liveStreamers } = useLoaderData<typeof loader>();
	useEffect(() => {
		let mtLink = null;
		if (liveStreamers && liveStreamers.length > 1) {
			mtLink = `https://multitwitch.tv/${liveStreamers.join("/")}`;
			window.location.href = mtLink;
		}
	});

	return (
		<>
			<section className="text-center">
				{liveStreamers && liveStreamers.length > 0 && (
					<p>Redirecting - please wait...</p>
				)}
				{(!liveStreamers || !liveStreamers.length) && (
					<p>
						No Campfire streamers are currently live! Please check back later!
					</p>
				)}
			</section>
		</>
	);
};
export default NowLive;
