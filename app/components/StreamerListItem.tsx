import React from "react";
import type { Streamer } from "~/lib/types";
import { FaExternalLinkAlt } from "react-icons/fa";

type StreamerListItemProps = {
	streamer: Streamer;
	isLive: boolean;
};

const StreamerListItem = ({ streamer, isLive }: StreamerListItemProps) => {
	const socials: { [key: string]: string } = {
		twitch: `http://www.twitch.tv/${streamer.twitchHandle}`,
	};
	if (streamer.twitter) {
		socials.twitter = `http://www.twitter.com/${streamer.twitter}`;
	}
	if (streamer.instagram) {
		socials.instagram = `http://www.instagram.com/${streamer.instagram}`;
	}
	if (streamer.discord) {
		socials.discord = streamer.discord;
	}
	const imageSrc = `/images/streamers/${streamer.twitchHandle.toLowerCase()}.png`;
	const keys = Object.keys(socials);
	const socialElements = keys.map((k) => ({
		id: k,
		element: (
			<a
				href={socials[k]}
				key={`${k}-${socials[k]}`}
				target="_blank"
				rel="noopener noreferrer"
				className="text-primary hover:text-primaryLight "
			>
				{k}
			</a>
		),
	}));
	const socialElementsWithDividers = socialElements.map((e, i) => (
		<React.Fragment key={`${streamer.twitchHandle}-${e.id}`}>
			{e.element}
			{i < socialElements.length - 1 ? " | " : ""}
		</React.Fragment>
	));
	return (
		<div className="bg-slate-200 border-1 border-solid rounded-md mb-5 p-4 justify ">
			<div className="float-left m-5 relative w-40 lg:w-52 h-40 lg:h-52">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href={`http://www.twitch.tv/${streamer.twitchHandle}`}
				>
					<img
						src={imageSrc}
						alt={streamer.twitchHandle}
						className="rounded-md"
					/>
				</a>
				{isLive && (
					<div className="absolute right-0 top-0 hover:bg-secondaryLight bg-secondary text-white rounded-md shadow-live-box-highlight overflow-hidden after:content-[''] after:h-full after:block after:w-full after:absolute after:top-0 after:left-0 after:animate-shine after:bg-gradient-to-r after:from-transparent after:via-[#3098B5] after:to-transparent z-0 after:z-10 border-4 border-solid border-secondaryLight hover:after:animate-none">
						<a
							target="_blank"
							rel="noopener noreferrer"
							href={`http://www.twitch.tv/${streamer.twitchHandle}`}
							className="relative m-2 py-1 px-1 bg-opacity-70 bg-black z-20 rounded-md flex items-center text-xs"
						>
							Live Now <FaExternalLinkAlt className="ml-2 inline" />
						</a>
					</div>
				)}
			</div>
			<div>
				<h4 className="text-center">
					<a
						target="_blank"
						rel="noopener noreferrer"
						href={`http://www.twitch.tv/${streamer.twitchHandle}`}
						className="font-bold text-xl text-secondary hover:text-secondaryLight"
					>
						{streamer.twitchHandle}
					</a>
				</h4>
				<p className="mb-4 py-1 bg-secondary text-white text-center text-lg">
					( {socialElementsWithDividers} )
				</p>
				<p className="text-lg">{streamer.bio || "Channel info coming soon!"}</p>
			</div>
			<div className="clear-both" />
		</div>
	);
};
export default StreamerListItem;
