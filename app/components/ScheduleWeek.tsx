import { Swiper, SwiperSlide } from "swiper/react";
import ScheduleDay from "./ScheduleDay";
import type { Schedule, ScheduleItem } from "~/lib/types";
import { Pagination } from "swiper";
import { useCallback, useEffect, useMemo } from "react";
import { sortScheduleItems } from "~/lib/utils";

type ScheduleWeekProps = {
	scheduleItems: ScheduleItem[];
};

const ScheduleWeek = ({ scheduleItems }: ScheduleWeekProps) => {
	const currentDayId = useMemo(() => new Date().getDay(), []);
	const schedule = useMemo(() => {
		const schedule: Schedule = {
			0: [],
			1: [],
			2: [],
			3: [],
			4: [],
			5: [],
			6: [],
		};
		scheduleItems.forEach((s) => {
			const localDate = new Date(s.stream.seedDate + "Z");
			const dayId = localDate.getDay();
			schedule[dayId].push(s);
		});

		for (let i = 0; i <= 6; i++) {
			schedule[i] = schedule[i].sort(sortScheduleItems);
		}
		return schedule;
	}, [scheduleItems]);

	const pagination = {
		clickable: true,
		el: ".pagination",
		bulletActiveClass: "bg-secondary text-white border-b-4 border-b-primary",
		bulletClass: "cursor-pointer uppercase py-4 px-4 rounded-md",
		renderBullet: function (index: number, className: string) {
			const dayName = [
				"Sunday",
				"Monday",
				"Tuesday",
				"Wednesday",
				"Thursday",
				"Friday",
				"Saturday",
			][index];
			return `<span class="${className}">
					${dayName}
				</span>`;
		},
	};
	useEffect(() => {
		document.querySelector(".pagination .bg-secondary")?.scrollIntoView({
			behavior: "auto",
			block: "center",
			inline: "center",
		});
	}, []);
	return (
		<>
			<div className="container mx-auto">
				<div>
					<h2 className="text-center font-bold text-4xl mt-8">Team Schedule</h2>
				</div>
				<div>
					<div>
						<div className="pagination overflow-x-auto text-center mt-4 border-b border-b-solid border-b-slate-200 mb-4 flex items-center justify-between" />
						<div>
							<Swiper
								autoHeight={true}
								slidesPerView={1}
								pagination={pagination}
								modules={[Pagination]}
								initialSlide={currentDayId}
							>
								<SwiperSlide>
									<ScheduleDay dayId={0} streams={schedule[0]} />
								</SwiperSlide>
								<SwiperSlide>
									<ScheduleDay dayId={1} streams={schedule[1]} />
								</SwiperSlide>
								<SwiperSlide>
									<ScheduleDay dayId={2} streams={schedule[2]} />
								</SwiperSlide>
								<SwiperSlide>
									<ScheduleDay dayId={3} streams={schedule[3]} />
								</SwiperSlide>
								<SwiperSlide>
									<ScheduleDay dayId={4} streams={schedule[4]} />
								</SwiperSlide>
								<SwiperSlide>
									<ScheduleDay dayId={5} streams={schedule[5]} />
								</SwiperSlide>
								<SwiperSlide>
									<div key="saturday">
										<ScheduleDay dayId={6} streams={schedule[6]} />
									</div>
								</SwiperSlide>
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default ScheduleWeek;
