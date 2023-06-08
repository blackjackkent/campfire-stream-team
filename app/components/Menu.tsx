import { FaClock, FaEnvelope, FaInfoCircle, FaUsers } from "react-icons/fa";
import NavigationLink from "./NavigationLink";
import CampfireLogo from "../images/campfire-logo.png";

const Menu = () => {
	return (
		<nav className="lg:w-[960px] mx-auto">
			<ul className="flex items-start justify-between mb-8 text-gray-600 font-medium text-lg">
				<li>
					<NavigationLink to="/" Icon={FaInfoCircle} text="About Us" />
				</li>
				<li>
					<NavigationLink to="/schedule" Icon={FaClock} text="Team Schedule" />
				</li>
				<li>
					<img
						src={CampfireLogo}
						alt=""
						className="w-64 hidden lg:block lg:-mt-12 "
					/>
				</li>
				<li>
					<NavigationLink to="/streamers" Icon={FaUsers} text="Streamers" />
				</li>
				<li>
					<NavigationLink to="/contact" Icon={FaEnvelope} text="Contact Us" />
				</li>
			</ul>
		</nav>
	);
};
export default Menu;
