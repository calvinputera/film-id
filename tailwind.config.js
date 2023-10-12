/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		colors: {
			white: "#FFFFFF",
			primaryBlack: "#161616",
			secondaryBlack: "#272727",
			primaryGray: "#3A3A3A",
			secondaryGray: "#5B5B5B",
			primaryRed: "#DA3517",
			secondaryRed: "#FB5B58",
			primaryYellow: "#FFED4E",
			gold: "#C69877",
			desc: "#BABABA",
		},
		extend: {},
	},
	plugins: [],
});
