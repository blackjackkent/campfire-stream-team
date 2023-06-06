import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import {
	fetchCurrentlyLiveStreamers,
	fetchTodaysStreams,
} from "~/lib/streamers.server";
import { json } from "@remix-run/node";
import { FaExternalLinkAlt } from "react-icons/fa";
import ScheduleDay from "~/components/ScheduleDay";

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

export async function loader({ request }: LoaderArgs) {
	const today = new Date();
	const todayDayId = today.getDay();
	return json({
		liveStreamers: await fetchCurrentlyLiveStreamers(),
		todaysStreams: fetchTodaysStreams(todayDayId),
		todayDayId,
	});
}

const Schedule = () => {
	const { liveStreamers, todaysStreams, todayDayId } =
		useLoaderData<typeof loader>();
	let streamerDisplay: JSX.Element[] = [];
	if (liveStreamers) {
		streamerDisplay = liveStreamers.map((s) => (
			<h4 key={s}>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href={`http://www.twitch.tv/${s}`}
					className="bg-secondary text-white text-center block p-4 mb-3 rounded-md text-lg hover:bg-primary"
				>
					{s} <FaExternalLinkAlt className="ml-2 inline" />
				</a>
			</h4>
		));
	}
	return <></>;
};
export default Schedule;
