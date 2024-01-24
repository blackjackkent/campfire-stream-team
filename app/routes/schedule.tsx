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
		scheduleItems: fetchSchedule(),
	});
}

const Schedule = () => {
	const { scheduleItems } = useLoaderData<typeof loader>();
	return (
		<>
			<ScheduleWeek scheduleItems={scheduleItems} />
		</>
	);
};
export default Schedule;
