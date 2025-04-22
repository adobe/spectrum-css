/**
 * @description Generates a kebab-case name for a token
 * @type {import('style-dictionary/types').NameTransform}
 */
export default {
	type: "name",
	name: "name/kebab",
	transform: (token, { prefix, separator = "-" } = {}) => {
		// Skip the sets layer and it's proceeding sibling
		const path = token.path?.filter((_, idx, array) => array[idx] !== "sets" && array[idx - 1] !== "sets");
		// Return the name + token path joined by the separator as a string
		return [prefix, ...path].map(word => word ? word?.toLowerCase() : "").filter(Boolean).join(separator);
	},
};
