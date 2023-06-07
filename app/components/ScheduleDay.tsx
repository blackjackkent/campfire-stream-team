import ScheduleStream from "./ScheduleStream";
import type { ScheduleItem } from "~/lib/types";

type ScheduleDayProps = {
	streams: ScheduleItem[];
	dayId: number;
};
const ScheduleDay = ({ streams, dayId }: ScheduleDayProps) => {
	const dayName = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	][dayId];
	const timezoneName = Intl.DateTimeFormat().resolvedOptions().timeZone;

	return (
		<div className="mb-8 p-5 text-slate-800">
			<h3 className="text-2xl font-bold mb-2 text-center border-b border-b-solid border-b-slate-800">
				{dayName}
			</h3>
			<p className="text-center">All times displayed in {timezoneName}.</p>
			{streams.length === 0 ? (
				<p className="text-lg text-center my-12">
					No streams scheduled for this day.
				</p>
			) : (
				streams.map((s, index) => (
					<ScheduleStream
						key={s.twitchHandle + dayId + index}
						scheduleItem={s}
					/>
				))
			)}
			{streams.length > 0 && (
				<p className="text-center">
					All stream schedules are subject to change as needed. Check{" "}
					<a href="/streamers">each streamer&apos;s social media</a> to stay up
					to date on their latest plans!
				</p>
			)}
		</div>
	);
};
export default ScheduleDay;
