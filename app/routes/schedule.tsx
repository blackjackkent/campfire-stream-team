import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import {
	fetchCurrentlyLiveStreamers,
	fetchSchedule,
	fetchTodaysStreams,
} from "~/lib/streamers.server";
import { json } from "@remix-run/node";
import { FaExternalLinkAlt } from "react-icons/fa";
import ScheduleDay from "~/components/ScheduleDay";
import ScheduleWeek from "~/components/ScheduleWeek";

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
	return json({
		schedule: fetchSchedule(),
	});
}

const Schedule = () => {
	const { schedule } = useLoaderData<typeof loader>();
	return (
		<>
			<ScheduleWeek schedule={schedule} />
		</>
	);
};
export default Schedule;
