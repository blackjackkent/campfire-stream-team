import type { V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import {
	fetchCurrentlyLiveStreamers,
	fetchStreamers,
} from "~/lib/streamers.server";
import { json } from "@remix-run/node";
import { useMemo } from "react";
import StreamerListItem from "~/components/StreamerListItem";

export const meta: V2_MetaFunction = () => {
	return [
		{ title: "Campfire Stream Team - Streamers" },
		{
			name: "description",
			content:
				"Info about the streamers that make up the Campfire Stream Team.",
		},
	];
};

export async function loader() {
	return json({
		streamers: fetchStreamers(),
		liveStreamers: await fetchCurrentlyLiveStreamers(),
	});
}

const Schedule = () => {
	const { streamers, liveStreamers } = useLoaderData<typeof loader>();
	const liveStreamerData = useMemo(() => {
		return streamers.filter((s) =>
			liveStreamers?.includes(s.twitchHandle.toLowerCase())
		);
	}, [streamers, liveStreamers]);
	const nonLiveStreamerData = useMemo(() => {
		return streamers.filter(
			(s) => !liveStreamers?.includes(s.twitchHandle.toLowerCase())
		);
	}, [streamers, liveStreamers]);
	const multiTwitchLink = useMemo(() => {
		if (liveStreamers && liveStreamers.length > 1) {
			return `https://multitwitch.tv/${liveStreamers.join("/")}`;
		}
		return null;
	}, [liveStreamers]);
	const liveBlocks = liveStreamerData.map((s) => (
		<StreamerListItem key={s.twitchHandle} streamer={s} isLive />
	));
	const nonLiveBlocks = nonLiveStreamerData.map((s) => (
		<StreamerListItem key={s.twitchHandle} streamer={s} isLive={false} />
	));
	return (
		<>
			<section>
				<div className="container">
					<div>
						<div>
							<h2>Meet the Team</h2>
						</div>
						{multiTwitchLink && (
							<p>
								Want to watch all of our currently live streamers at once?{" "}
								<a
									target="_blank"
									rel="noopener noreferrer"
									href={multiTwitchLink}
								>
									Click here!
								</a>
							</p>
						)}
					</div>
					<div>
						{liveBlocks}
						{nonLiveBlocks}
					</div>
				</div>
			</section>
		</>
	);
};
export default Schedule;
