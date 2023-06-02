import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export default function Index() {
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
				<hr />
			</div>
		</div>
	);
}
