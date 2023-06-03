/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			transitionDuration: {
				3000: "3000ms",
			},
			transitionDelay: {
				6000: "6000ms",
				2000: "2000ms",
				12000: "12000ms",
			},
			screens: {
				"2xl": "1920px",
				"xl": "1305px",
			},
			animation: {
				"pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
			},
		},
		fontFamily: {
			sans: ["Inter", "sans-serif"],
			mono: ["JetBrains Mono", "monospace"],
			cool: ["comic sans ms", "sans-serif"],
		},
	},
	plugins: [],
};
