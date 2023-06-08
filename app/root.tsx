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
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import MobileMenu from "./components/MobileMenu";
import { useState } from "react";

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
	const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
	const onMenuToggle = () => {
		setIsMobileMenuVisible(!isMobileMenuVisible);
	};
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body className="min-h-screen flex flex-col w-full font-raleway">
				<div className="flex-1">
					<Header onMenuToggle={onMenuToggle} />
					<Menu />
					<MobileMenu isVisible={isMobileMenuVisible} onToggle={onMenuToggle} />
					<section className="lg:bg-[url('/images/header-bg.jpg')] lg:-mt-32 lg:rounded-xl bg-bottom bg-clip-border bg-cover">
						<div className="lg:py-24">
							<div className="bg-red-500 p-8 lg:w-[960px] mx-auto text-white text-center lg:rounded-xl bg-gradient-to-r from-primary to-secondary shadow-xl">
								<h1 className="uppercase text-5xl font-black mb-4">
									Take a seat at the campfire!
								</h1>
								<p className="text-lg">
									The Campfire is a community of Twitch streamers who believe in
									creating an inclusive, diverse, and uplifting space for our
									audience, our teammates, and our fellow streamers.
								</p>
							</div>
						</div>
					</section>
					<div className="lg:w-[960px] mx-auto px-8 lg:p-0">
						<Outlet />
						<ScrollRestoration />
						<Scripts />
						<LiveReload />
					</div>
				</div>

				<Footer />
			</body>
		</html>
	);
}
