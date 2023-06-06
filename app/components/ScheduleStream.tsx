import type { ScheduleItem } from "~/lib/types";
import { getStreamStartTime, getStreamEndTime } from "../lib/utils";

type ScheduleStreamProps = {
	scheduleItem: ScheduleItem;
};
const ScheduleStream = ({ scheduleItem }: ScheduleStreamProps) => {
	const startTime = getStreamStartTime(scheduleItem.stream);
	const endTime = getStreamEndTime(scheduleItem.stream);
	return (
		<div className="bg-gray-200 my-4 mx-8 border-l-4 border-l-secondary px-8 py-4 text-center">
			<h4 className="text-xl font-medium">
				{startTime} - {endTime}
			</h4>
			<p className="text-lg italic">
				Starring{" "}
				<a
					rel="noopener noreferrer"
					target="_blank"
					href={`http://www.twitch.tv/${scheduleItem.twitchHandle}`}
					className="text-primary hover:text-secondary"
				>
					{scheduleItem.twitchHandle}
				</a>
			</p>
		</div>
	);
};
export default ScheduleStream;
