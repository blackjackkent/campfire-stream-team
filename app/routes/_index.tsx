import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import {
	fetchCurrentlyLiveStreamers,
	fetchTodaysStreams,
} from "~/lib/streamers.server";
import { json } from "@remix-run/node";
import { FaExternalLinkAlt } from "react-icons/fa";
import ScheduleDay from "~/components/ScheduleDay";

export const meta: V2_MetaFunction = () => {
	return [
		{ title: "Campfire Stream Team" },
		{
			name: "description",
			content:
				"The Campfire is a community of Twitch streamers who believe in creating an inclusive, diverse, and uplifting space for our audience, our teammates, and our fellow streamers.",
		},
	];
};

export async function loader({ request }: LoaderArgs) {
	const today = new Date();
	const todayDayId = today.getDay();
	return json({
		liveStreamers: await fetchCurrentlyLiveStreamers(),
		todaysStreams: fetchTodaysStreams(todayDayId),
		todayDayId,
	});
}

export default function Index() {
	const { liveStreamers, todaysStreams, todayDayId } =
		useLoaderData<typeof loader>();
	let streamerDisplay: JSX.Element[] = [];
	if (liveStreamers) {
		streamerDisplay = liveStreamers.map((s) => (
			<h4 key={s}>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href={`http://www.twitch.tv/${s}`}
					className="bg-secondary text-white text-center block p-4 mb-3 rounded-md text-lg hover:bg-primary"
				>
					{s} <FaExternalLinkAlt className="ml-2 inline" />
				</a>
			</h4>
		));
	}
	return (
		<>
			<div className="block lg:flex lg:flex-row-reverse">
				<div className="border-solid border border-secondary float-right lg:float-none lg:flex-none w-1/2 lg:w-1/4 my-10 p-5 ml-5 mb-5">
					<h3 className="text-2xl text-secondary font-bold text-center mb-4">
						Currently Live
					</h3>
					<hr className="mb-4" />
					{liveStreamers && liveStreamers.length > 0 && (
						<div>{streamerDisplay}</div>
					)}
					{!liveStreamers?.length && (
						<p className="text-center">
							No Campfire streamers are currently live! Please check back soon.
						</p>
					)}
				</div>
				<div className="lg:flex-1 pr-12 py-10 text-slate-800">
					<h2 className="text-3xl font-bold mb-4">Let Us Entertain You!</h2>
					<p className="my-4 text-lg">
						Around the Campfire you'll find a team of diverse streamers, their
						supporters, and their communities, dedicated to supporting one
						another both on and off stream. We value kindness and compassion not
						only to one another but also to the people and causes our streamers
						care about.
					</p>
					<p className="my-4 text-lg">
						When you come to a Campfire stream, you're going to have a good time
						with people who care about you and each other. Our streamers produce
						a variety of content, from playing games to just chatting, so
						there's something for everyone! To put it simply, we're friends -
						friends with a purpose. And pretty freakin' entertaining, too!
					</p>
					<p className="my-4 text-lg">
						Take a look around our website, follow us on Twitter, and drop by
						one of our streams. Don't be afraid to say hello!
					</p>
				</div>
			</div>
			<div>
				<h2 className="text-4xl font-bold mb-4">Today's Schedule</h2>
				<div className="border border-solid border-gray-400 mb-10">
					<ScheduleDay streams={todaysStreams} dayId={todayDayId} />
				</div>
			</div>
		</>
	);
}
