export default {
	type: "attribute",
	name: "attribute/sets",
	filter: (token) => token.path.includes("sets"),
	transform: (token) => {
		return {
			sets: token.path.filter(
				(_, index, array) => array[index - 1] == "sets"
			),
		};
	},
};
