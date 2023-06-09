import { NavLink } from "@remix-run/react";
import type { IconType } from "react-icons";

type NavigationLinkProps = {
	Icon: IconType;
	to: string;
	text: string;
};
const NavigationLink: React.FC<NavigationLinkProps> = ({ Icon, text, to }) => {
	const activeClasses = "border-b-4 border-b-primary border-b-solid";
	const baseClasses = "hover:text-primary hidden lg:block lg:mt-12";
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				isActive ? `${activeClasses} ${baseClasses}` : baseClasses
			}
		>
			<span className="flex items-center">
				<Icon className="mr-2" />
				{text}
			</span>
		</NavLink>
	);
};
export default NavigationLink;
