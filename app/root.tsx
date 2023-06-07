import stylesheet from "~/tailwind.css";
import type { LinksFunction } from "@remix-run/node";
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";
import { useState } from "react";
import { FaInfoCircle, FaClock, FaUsers, FaEnvelope } from "react-icons/fa";
import NavigationLink from "./components/NavigationLink";
import Header from "./components/Header";
import CampfireLogo from "./images/campfire-logo.png";
import Footer from "./components/Footer";

export const links: LinksFunction = () => [
	{ rel: "preconnect", href: "" },
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous",
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;700&display=swap",
	},
	{ rel: "stylesheet", href: stylesheet },
	{
		rel: "stylesheet",
		href: "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css",
	},
];

export default function App() {
	const [isNavbarActive, setIsNavbarActive] = useState(false);
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body>
				<div className="mx-auto font-raleway">
					<div>
						<Header />
						<nav className="w-[960px] mx-auto">
							<ul className="flex items-start justify-between mb-8 text-gray-600 font-medium text-lg">
								<li>
									<NavigationLink to="/" Icon={FaInfoCircle} text="About Us" />
								</li>
								<li>
									<NavigationLink
										to="/schedule"
										Icon={FaClock}
										text="Team Schedule"
									/>
								</li>
								<li>
									<img src={CampfireLogo} alt="" className="w-64 -mt-12" />
								</li>
								<li>
									<NavigationLink
										to="/streamers"
										Icon={FaUsers}
										text="Streamers"
									/>
								</li>
								<li>
									<NavigationLink
										to="/contact"
										Icon={FaEnvelope}
										text="Contact Us"
									/>
								</li>
							</ul>
						</nav>

						<section className="bg-[url('/images/header-bg.jpg')] -mt-32 rounded-xl bg-bottom bg-clip-border bg-cover">
							<div className="py-24">
								<div className="bg-red-500 p-8 w-[960px] mx-auto text-white text-center rounded-xl bg-gradient-to-r from-primary to-secondary shadow-xl">
									<h1 className="uppercase text-5xl font-black mb-4">
										Take a seat at the campfire!
									</h1>
									<p className="text-lg">
										The Campfire is a community of Twitch streamers who believe
										in creating an inclusive, diverse, and uplifting space for
										our audience, our teammates, and our fellow streamers.
									</p>
								</div>
							</div>
						</section>
						<div className="w-[960px] mx-auto">
							<Outlet />
							<ScrollRestoration />
							<Scripts />
							<LiveReload />
						</div>
					</div>

					<Footer />
				</div>
			</body>
		</html>
	);
}
