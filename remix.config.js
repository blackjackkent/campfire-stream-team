/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
	ignoredRouteFiles: ["**/.*"],
	server:
		process.env.NETLIFY || process.env.NETLIFY_LOCAL
			? "./server.ts"
			: undefined,
	serverBuildPath: ".netlify/functions-internal/server.js",
	serverDependenciesToBundle: [
		"swiper",
		"swiper/react",
		"swiper/react/swiper-react.js",
		"ssr-window",
		"ssr-window/ssr-window.esm.js",
		"dom7",
	],
	// appDirectory: "app",
	// assetsBuildDirectory: "public/build",
	// publicPath: "/build/",
	tailwind: true,
	future: {
		v2_errorBoundary: true,
		v2_meta: true,
		v2_normalizeFormMethod: true,
		v2_routeConvention: true,
	},
};
