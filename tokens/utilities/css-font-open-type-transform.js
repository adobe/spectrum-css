/**
 * @description Converts a font-weight token to a number
 * @type {import('style-dictionary/types').ValueTransform}
 */
export default {
	type: "value",
	name: "font/openType",
	filter: (token) => token.name.includes("font-weight"),
	transform: (token) => {
		switch(token.value) {
			case "thin":
			case "hairline":
				return "100";
			case "extra-light":
			case "extralight":
			case "ultra-light":
			case "ultralight":
				return "200";
			case "light":
				return "300";
			case "normal":
			case "regular":
				return "400";
			case "medium":
				return "500";
			case "semibold":
			case "semi-bold":
			case "demibold":
			case "demi-bold":
				return "600";
			case "bold":
				return "700";
			case "extrabold":
			case "extra-bold":
			case "ultrabold":
			case "ultra-bold":
				return "800";
			case "black":
			case "heavy":
				return "900";
			case "extra-black":
			case "extrablack":
			case "ultra-black":
			case "ultrablack":
				return "950";
			default:
				return token.value;
		}
	},
};
