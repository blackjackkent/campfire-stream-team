import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./app/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				raleway: ["Raleway", "sans-serif"],
			},
			colors: {
				primary: "#d16b17",
				primaryLight: "#f28123",
				primaryDark: "#a65819",
				primaryDeep: "#592f0d",
				secondary: "#1e5e70",
				secondaryLight: "#3e7e90",
			},
			keyframes: {
				slide: {
					"0%": { transform: "translateX(-100%)" },
					"20%": { transform: "translateX(100%)" },
					"100%": { transform: "translateX(100%)" },
				},
			},
			animation: {
				shine: "slide 4s infinite 0s",
			},
		},
	},
	plugins: [],
};
export default config;
