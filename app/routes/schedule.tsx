import type { V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { fetchSchedule } from "~/lib/streamers.server";
import { json } from "@remix-run/node";
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

export async function loader() {
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
