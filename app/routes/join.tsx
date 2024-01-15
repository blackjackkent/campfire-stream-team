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
							Gather 'round adventurers and kindred spirits! Campfire's blazing
							and we're searching for passionate streamers to join our vibrant
							community.
						</p>
						<p className="mb-4">
							Forget solo grinding, lurker life, and stream teams that are
							nothing more than follow for follow farms. Here at Campfire, we're
							all about sharing the warmth, lifting each other up, and blazing a
							trail in the streaming wilderness together.
						</p>
						<div className="px-8">
							<h3 className="my-4 text-xl font-bold">
								What awaits you at Campfire?
							</h3>
							<ul className="mb-4 ml-4 border-l-8 pl-2 border-secondary">
								<li>
									<span className="font-semibold">Sharing the flame:</span>{" "}
									Knowledge exchange is at the heart of Campfire. From growth
									hacks to stream setup tips, we're all about lifting each other
									up. Got questions? We've got answers (and probably some
									hilarious anecdotes too).
								</li>
								<li>
									<span className="font-semibold">
										Community nights under the stars.
									</span>{" "}
									Movie nights, game jams, co-op adventures – prepare for epic
									laughter, memories, and hype trains.
								</li>
								<li>
									<span className="font-bold">
										Mutual support that's actually mutual:
									</span>{" "}
									We cheer you on, raid your streams, and lend a helping hand
									whenever needed. This community has your back, no matter the
									challenge.
								</li>
							</ul>
						</div>
						<div className="px-8">
							<h3 className="my-4 text-xl font-bold">
								Before you join the campfire, remember our values:
							</h3>
							<ul className="mb-4 ml-4 border-l-8 pl-2 border-secondary">
								<li>
									<span className="font-semibold">
										Inclusivity is our anthem.
									</span>{" "}
									We celebrate diversity and strictly prohibit any bigotry, hate
									speech, harassment, abusive behavior, or toxicity.{" "}
								</li>
								<li>
									<span className="font-semibold">
										Be an active torchbearer.
									</span>{" "}
									Contribute to the warmth by attending events, sharing
									knowledge, and celebrating your fellow adventurers' victories.
								</li>
							</ul>
						</div>
					</div>
					<p className="mb-4">
						All adventurers aged 21 and over are welcome, regardless of audience
						size or experience. Your passion, dedication, and willingness to be
						part of something bigger are all that matter. Campfire recruitment
						starts January 15th! Fill out our application and get ready to share
						the flame, build friendships, and blaze a trail with us. Together,
						we'll turn up the heat and light up the streaming world!
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
