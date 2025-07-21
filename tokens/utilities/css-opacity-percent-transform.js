/**
 * @description Converts a number to a percentage
 * @type {import('style-dictionary/types').ValueTransform}
*/
export default {
	type: "value",
	name: "opacity/percent",
	filter: (token) => token.name?.includes?.("opacity"),
	transform: (token) => {
		// If the token is a percentage, return it as-is
		if (token.value?.includes?.("%")) {
			return token.value;
		}

		// Check if the token is a number
		if (typeof token.value === "number") {
			return `${token.value * 100}%`;
		}

		// If the token is a string, convert it to a number
		if (typeof token.value === "string" && !isNaN(Number(token.value))) {
			return `${Number(token.value) * 100}%`;
		}

		// If the token is not a number or a string, return the value
		return token.value;
	},
};
