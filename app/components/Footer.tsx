import { Link } from "@remix-run/react";

const Footer = () => {
	return (
		<section className="bg-primaryDeep text-center py-4 text-white">
			<h6>
				&copy; Copyright {new Date().getFullYear()}{" "}
				<Link
					to="/"
					className="text-secondaryLight hover:text-white cursor-pointer"
				>
					Campfire Stream Team
				</Link>{" "}
				| Developed by{" "}
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.blackjack-software.com"
					className="text-secondaryLight hover:text-white"
				>
					Blackjack Software
				</a>
			</h6>
		</section>
	);
};
export default Footer;
