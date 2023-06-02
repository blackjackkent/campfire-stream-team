import type { LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { fetchCurrentlyLiveStreamers } from "~/lib/streamers.server";
import { json } from "@remix-run/node";
import { FaExternalLinkAlt } from "react-icons/fa";

export const meta: V2_MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export async function loader({ request }: LoaderArgs) {
	return json({ liveStreamers: await fetchCurrentlyLiveStreamers() });
}

export default function Index() {
	const { liveStreamers } = useLoaderData<typeof loader>();
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
		<div className="flex">
			<div className="flex-1 pr-12 py-10 text-slate-800">
				<h2 className="text-4xl font-bold mb-4">Let Us Entertain You!</h2>
				<p className="my-4 text-lg">
					Around the Campfire you'll find a team of diverse streamers, their
					supporters, and their communities, dedicated to supporting one another
					both on and off stream. We value kindness and compassion not only to
					one another but also to the people and causes our streamers care
					about.
				</p>
				<p className="my-4 text-lg">
					When you come to a Campfire stream, you're going to have a good time
					with people who care about you and each other. Our streamers produce a
					variety of content, from playing games to just chatting, so there's
					something for everyone! To put it simply, we're friends - friends with
					a purpose. And pretty freakin' entertaining, too!
				</p>
				<p className="my-4 text-lg">
					Take a look around our website, follow us on Twitter, and drop by one
					of our streams. Don't be afraid to say hello!
				</p>
			</div>
			<div className="flex-none w-1/4 py-10">
				<h3 className="text-2xl text-secondary font-bold text-center mb-4">
					Currently Live
				</h3>
				<hr className="mb-4" />
				{liveStreamers && liveStreamers.length > 0 && (
					<div>{streamerDisplay}</div>
				)}
				{!liveStreamers && (
					<p>
						No Campfire streamers are currently live! Please check back soon.
					</p>
				)}
			</div>
		</div>
	);
}
