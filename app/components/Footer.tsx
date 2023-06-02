const Footer = () => {
	return (
		<section className="bg-primaryDeep text-center py-4 text-white">
			<h6>
				&copy; Copyright {new Date().getFullYear()}{" "}
				<span className="text-secondaryLight hover:text-white">
					Campfire Stream Team
				</span>{" "}
				| Developed by{" "}
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://www.twitter.com/blackjackkent"
					className="text-secondaryLight hover:text-white"
				>
					Blackjack Software
				</a>
			</h6>
		</section>
	);
};
export default Footer;
