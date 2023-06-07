type ScheduleControlsProps = {
	onClickDay: (dayId: number) => void;
	selectedDay: number;
};
const ScheduleControls = ({
	onClickDay,
	selectedDay,
}: ScheduleControlsProps) => (
	<div className="row">
		<div className="col-lg-12">
			<div className="show-menu">
				<ul className="nav nav-tabs">
					<li>
						<a
							href="#sunday"
							className={`nav-link ${selectedDay === 0 ? "active" : ""}`}
							onClick={() => onClickDay(0)}
							data-toggle="tab"
						>
							Sunday
						</a>
					</li>
					<li>
						<a
							href="#monday"
							className={`nav-link ${selectedDay === 1 ? "active" : ""}`}
							onClick={() => onClickDay(1)}
							data-toggle="tab"
						>
							Monday
						</a>
					</li>
					<li>
						<a
							href="#tuesday"
							className={`nav-link ${selectedDay === 2 ? "active" : ""}`}
							onClick={() => onClickDay(2)}
							data-toggle="tab"
						>
							Tuesday
						</a>
					</li>
					<li>
						<a
							href="#wednesday"
							className={`nav-link ${selectedDay === 3 ? "active" : ""}`}
							onClick={() => onClickDay(3)}
							data-toggle="tab"
						>
							Wednesday
						</a>
					</li>
					<li>
						<a
							href="#thursday"
							className={`nav-link ${selectedDay === 4 ? "active" : ""}`}
							onClick={() => onClickDay(4)}
							data-toggle="tab"
						>
							Thursday
						</a>
					</li>
					<li>
						<a
							href="#friday"
							className={`nav-link ${selectedDay === 5 ? "active" : ""}`}
							onClick={() => onClickDay(5)}
							data-toggle="tab"
						>
							Friday
						</a>
					</li>
					<li>
						<a
							href="#saturday"
							className={`nav-link ${selectedDay === 6 ? "active" : ""}`}
							onClick={() => onClickDay(6)}
							data-toggle="tab"
						>
							Saturday
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
);
export default ScheduleControls;
