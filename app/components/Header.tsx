import { FaTwitterSquare } from "react-icons/fa";

const Header = () => {
	return (
		<header className="w-[960px] mx-auto">
			<div className="flex flex-row justify-between items-center px-2 pt-8">
				<h1>
					<a className="font-bold text-secondary text-4xl" href="/">
						Campfire Stream Team
					</a>
				</h1>
				<a
					href="http://www.twitter.com/CampfireStream"
					target="_blank"
					rel="noopener noreferrer"
					className="flex flex-row items-center p-3 border-solid border-2 border-primary text-primary rounded-full"
				>
					<FaTwitterSquare className="mr-1" />
					<span className="text-sm uppercase font-medium">
						Follow us on Twitter!
					</span>
				</a>
			</div>
		</header>
	);
};
export default Header;
