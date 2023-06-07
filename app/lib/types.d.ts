export type Stream = {
	refName: string;
	seedDate: string;
	length: number;
};

export type Streamer = {
	twitchHandle: string;
	bio: string;
	twitter?: string;
	discord?: string;
	instagram?: string;
	streams: Stream[];
};

export type ScheduleItem = {
	twitchHandle: string;
	stream: Stream;
};

export type Schedule = {
	[day: string]: ScheduleItem[];
};
