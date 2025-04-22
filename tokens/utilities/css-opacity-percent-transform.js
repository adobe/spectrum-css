/**
 * @description Converts a number to a percentage
 * @type {import('style-dictionary/types').ValueTransform}
*/
export default {
	type: "value",
	name: "opacity/percent",
	filter: (token) => token.name.includes("opacity"),
	transform: (token) => {
		// If the token is a percentage, return it as-is
		if (token.value.includes("%")) {
			return token.value;
		}

		// if the token is a number, convert it to a percentage
		return `${token.value * 100}%`;
	},
};
