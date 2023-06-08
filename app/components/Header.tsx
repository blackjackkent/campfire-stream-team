import { FaBars } from "react-icons/fa";

type HeaderProps = {
	onMenuToggle: () => void;
};
const Header = ({ onMenuToggle }: HeaderProps) => {
	return (
		<header className="px-4 lg:px-0 lg:w-[960px] mx-auto">
			<div className="flex flex-row justify-between items-center px-2 pt-8">
				<h1>
					<a className="font-bold text-secondary text-2xl md:text-4xl" href="/">
						Campfire Stream Team
					</a>
				</h1>
				<div className="h-5 bg-secondary mx-5 flex-1"></div>
				<button
					type="button"
					className="bg-white text-secondary block lg:hidden"
					onClick={onMenuToggle}
				>
					<FaBars />
				</button>
			</div>
		</header>
	);
};
export default Header;
