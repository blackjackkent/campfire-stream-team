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
								Contact Us
							</h2>
						</div>
					</div>
					<div className="flex flex-col lg:flex-row mb-2">
						<div className="w-full lg:w-1/2 text-lg pr-8 mb-4">
							<p>
								The Campfire Stream Team is open to partnership and
								collaboration with anyone in the digital media space - as a
								matter of fact, we love finding new people to work with! Got an
								idea or just want to get in touch? Reach out and let us know!
							</p>
						</div>
						<div className="w-full lg:w-1/2">
							<a
								className="w-full px-8 py-6 bg-secondary hover:bg-primary mb-4 flex items-center rounded-md text-white"
								href="mailto:campfirestreamteam@gmail.com"
							>
								<FaEnvelope className="mr-2" />
								campfirestreamteam@gmail.com
							</a>
							<a
								className="w-full px-8 py-6 bg-secondary hover:bg-primary mb-4 flex items-center rounded-md text-white"
								href="http://www.twitter.com/CampfireStream"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaTwitter className="mr-2" />
								@CampfireStream
							</a>
						</div>
					</div>
					<hr />
					<div className="py-4">
						{/* <div>
				<p>
					We are currently accepting applications for new members
					of the stream team! While not all applicants are
					guaranteed a spot, we are very interested in new friends
					who value inclusivity, diversity, mutual support, and
					positive attitude. Members of marginalized groups in the
					streamer community are especially encouraged to apply.
				</p>
			</div>
			<div>
				<a
					href="{form link}"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon
						icon={['fas', 'sign-in-alt']}
					/>
					Apply to Join!
				</a>
			</div> */}
						<div>
							<p>
								We are currently not accepting applications for new members, but
								check back here for our open application period!
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
export default Contact;
