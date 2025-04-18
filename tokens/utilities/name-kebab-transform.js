import { kebabCase } from "lodash-es";

export default {
	type: "name",
	name: "name/kebab",
	transform: (token, options) =>
		kebabCase([options.prefix].concat(token.path).join(" ")),
};
