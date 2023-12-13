const { basename } = require("path");

/**
 * Determines the package name from a file path
 * @param {string} filePath
 * @returns {string|undefined}
 */
function getPackageFromPath(filePath) {
	return filePath?.match(`(components|@spectrum-css)\/(.*?)\/`)?.[2];
}

module.exports = async ({ file, options = {} } = {}) => {
	const plugins = [require("postcss-import")()];

	/** @todo put together a more robust fallback determination */
	const folderName = getPackageFromPath(file) ?? "tokens";
	const isExpress = folderName === "expressvars";
	const modifier = basename(file, ".css").startsWith("spectrum")
		? basename(file, ".css").replace("spectrum-", "").replace("global", "")
		: "";

	plugins.push([
		require("postcss-selector-replace")({
			before: [":root"],
			after: [
				`${isExpress ? ".spectrum--express" : ""}${
					modifier ? `.spectrum--${modifier}` : ""
				}${!isExpress && !modifier ? ".spectrum" : ""}`,
			],
		}),
	]);

	if (isExpress) {
		plugins.push(
			require("postcss-prefix-selector")({
				prefix: ".spectrum--express",
				transform(_prefix, selector, prefixedSelector) {
					if (selector.startsWith(".spectrum--express")) return selector;
					/* Smoosh the selectors together b/c they co-exist */
					return prefixedSelector.replace(" ", "");
				},
			})
		);
	}

	return {
		...options,
		plugins,
	};
};
