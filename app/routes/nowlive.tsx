import type { V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { fetchCurrentlyLiveStreamers } from "~/lib/streamers.server";
import { json } from "@remix-run/node";
import { useEffect } from "react";

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
		liveStreamers: await fetchCurrentlyLiveStreamers(),
	});
}

const NowLive = () => {
	const { liveStreamers } = useLoaderData<typeof loader>();
	const areAnyStreamersLive = liveStreamers && liveStreamers.length > 0;
	useEffect(() => {
		let mtLink = null;
		if (areAnyStreamersLive) {
			mtLink = `https://multitwitch.tv/${liveStreamers.join("/")}`;
			window.location.href = mtLink;
		}
	}, [areAnyStreamersLive, liveStreamers]);

	return (
		<>
			<section className="text-center">
				{areAnyStreamersLive && <p>Redirecting - please wait...</p>}
				{!areAnyStreamersLive && (
					<p>
						No Campfire streamers are currently live! Please check back later!
					</p>
				)}
			</section>
		</>
	);
};
export default NowLive;
