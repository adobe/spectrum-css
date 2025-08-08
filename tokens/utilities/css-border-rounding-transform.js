export default {
	type: "value",
	name: "border/rounding",
	filter: (token) => token.name.includes("corner-radius-1000"),
	transform: (token) => {
		// @todo: remove this once border rounding tokens are provided in a CSS-safe px format
		return !token.value?.toString()?.endsWith("px") ? "9999px" : token.value;
	},
};
