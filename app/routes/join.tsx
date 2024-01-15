import type { V2_MetaFunction } from "@remix-run/node";
import { FaEnvelope, FaTwitter } from "react-icons/fa";

export const meta: V2_MetaFunction = () => {
	return [
		{ title: "Campfire Stream Team - Contact" },
		{
			name: "description",
			content: "Info on how to contact the Campfire Stream Team.",
		},
	];
};

const Contact = () => {
	return (
		<>
			<section>
				<div>
					<div>
						<div>
							<h2 className="my-8 text-4xl font-bold text-center">
								Join the Team
							</h2>
						</div>
					</div>
					<div>
						<p className="mb-4">
							Campfire is a community who welcomes streamers of all sizes from
							small streamers to Affiliates to Partners who have audiences and
							experiences of all levels. What matters to us is your passion,
							creativity, and desire to expand your knowledge, and broaden your
							circles.
						</p>
						<div className="px-8">
							<h3 className="my-4 text-xl font-bold">Who we're looking for:</h3>
							<ul className="mb-4 ml-4 border-l-8 pl-6 border-secondary list-disc">
								<li>Streamers who are 21 and older</li>
								<li>Creators who are passionate about streaming</li>
								<li>
									Those who are committed to positivity, inclusivity, and want
									to be in an active community that values connection,
									participation, and the sharing of knowledge.
								</li>
								<li>
									People who want to actively participate in the Campfire
									community by attending events, share knowledge, and celebrate
									each others' achievements
								</li>
							</ul>
						</div>
						<div className="px-8">
							<h3 className="my-4 text-xl font-bold">
								What you can expect from Campfire?
							</h3>
							<ul className="mb-4 ml-4 border-l-8 pl-6 border-secondary list-disc">
								<li>
									From one-on-one guidance, to stream setup tips, we're all
									about lifting each other up. Got questions? We've got answers
									(and probably some hilarious anecdotes too).
								</li>
								<li>
									Movie nights, game jams, co-op adventures - prepare for epic
									laughter, memories, and hype trains.
								</li>
								<li>
									We cheer you on, raid your streams, and lend a helping hand
									whenever needed. This community has your back, no matter the
									challenge.
								</li>
							</ul>
						</div>
						<div className="px-8">
							<h3 className="my-4 text-xl font-bold">
								What we expect from you:
							</h3>
							<ul className="mb-4 ml-4 border-l-8 pl-6 border-secondary list-disc">
								<li>Be over 21</li>
								<li>
									Represent Campfire’s values of inclusivity, respect, and
									participation
								</li>
								<li>
									Join and be an active participant in the Campfire discord
								</li>
								<li>Stream a minimum of one time a week. </li>
								<li>
									Add the Campfire stream team panel to your twitch panels
								</li>
								<li>
									Visit and participate in the streams of other Campfire
									streamers
								</li>
								<li>Raid other Campfire streamers</li>
							</ul>
						</div>
					</div>
					<p className="mb-4">
						If you feel like you would be a great fit for Campfire, apply below!
					</p>
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="https://forms.gle/NHXuktXH7KtAxHqb6"
						className="bg-secondary text-white text-center block p-4 my-3 rounded-md text-lg hover:bg-primary"
					>
						Apply to Join
					</a>
					{/* <hr />
					<div className="py-4">
						<div>
							<p>
								We are currently not accepting applications for new members, but
								check back here for our open application period!
							</p>
						</div>
									</div> */}
				</div>
			</section>
		</>
	);
};
export default Contact;
