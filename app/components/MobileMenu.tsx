import {
	FaClock,
	FaEnvelope,
	FaInfoCircle,
	FaUserPlus,
	FaUsers,
	FaWindowClose,
} from "react-icons/fa";
import NavigationLink from "./NavigationLink";
import CampfireLogo from "../images/campfire-logo.png";
import MobileNavigationLink from "./MobileNavigationLink";

type MobileMenuProps = {
	isVisible: boolean;
	onToggle: () => void;
};
const MobileMenu = ({ isVisible, onToggle }: MobileMenuProps) => {
	return (
		<div
			className={`z-50 duration-200 ease-out transition-all w-3/4 h-full p-12 fixed top-0 right-0 lg:hidden bg-white border-l-4 border-l-secondary ${
				!isVisible ? "opacity-0 translate-x-full" : ""
			}`}
		>
			<div className="flex flex-row justify-between items-center">
				<h3 className="text-secondary text-xl font-bold border-b-2 border-b-primary">
					Campfire Stream Team
				</h3>
				<FaWindowClose onClick={onToggle} className="text-secondary text-4xl" />
			</div>
			<img src={CampfireLogo} alt="" className="w-64" />
			<MobileNavigationLink
				onClick={onToggle}
				to="/"
				Icon={FaInfoCircle}
				text="Home"
			/>

			<MobileNavigationLink
				onClick={onToggle}
				to="/schedule"
				Icon={FaClock}
				text="Team Schedule"
			/>

			<MobileNavigationLink
				onClick={onToggle}
				to="/streamers"
				Icon={FaUsers}
				text="Streamers"
			/>

			<MobileNavigationLink
				onClick={onToggle}
				to="/contact"
				Icon={FaEnvelope}
				text="Contact Us"
			/>

			<MobileNavigationLink
				onClick={onToggle}
				to="/join"
				Icon={FaUserPlus}
				text="Join the Team"
			/>
		</div>
	);
};
export default MobileMenu;
