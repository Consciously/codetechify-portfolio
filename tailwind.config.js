/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				monoCode: ['var(--font-source-code)'],
				monoMajor: ['var(--font-major-mono-display)'],
			},
		},
	},
	plugins: [],
};
