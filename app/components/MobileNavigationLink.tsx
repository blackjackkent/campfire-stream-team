import { NavLink } from "@remix-run/react";
import type { IconType } from "react-icons";

type MobileNavigationLinkProps = {
	Icon: IconType;
	to: string;
	text: string;
	onClick: () => void;
};
const MobileNavigationLink: React.FC<MobileNavigationLinkProps> = ({
	Icon,
	text,
	to,
	onClick,
}) => {
	const activeClasses = "border-b-4 border-b-primary border-b-solid";
	const baseClasses =
		"bg-secondary block width-full mb-4 p-4 rounded-md text-white";
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				isActive ? `${activeClasses} ${baseClasses}` : baseClasses
			}
			onClick={onClick}
		>
			<span className="flex items-center">
				<Icon className="mr-2" />
				{text}
			</span>
		</NavLink>
	);
};
export default MobileNavigationLink;
