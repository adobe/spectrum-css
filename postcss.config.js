const { basename, dirname, join } = require("path");

/**
 * Fetches the component's folder name from the file path or returns undefined if not found
 * @param {string} filePath
 * @returns {string|undefined}
 */
function getPackageFromPath(filePath) {
	return filePath?.match(`(components|@spectrum-css)/(.*?)/`)?.[2];
}

module.exports = ({ from, file, cwd, env = "development", options = {} }) => {
	const packageName = getPackageFromPath(from ?? file);
	const isLegacy = ["icon"].includes(packageName);

	const isProduction = Boolean(env === "production");

	const isExpress = Boolean(basename(from, ".css") === "express");
	const isTheme =
		basename(from, ".css").endsWith("-theme") ||
		dirname(from).endsWith("themes") ||
		isExpress;

	// noFlatVariables is true when: buildWithoutThemes (output = index-base.css)
	const noFlatVariables = basename(from, ".css").endsWith("-base");

	if (!options.map) {
		options.map = !isProduction ? { inline: false } : false;
	}

	return {
		...options,
		plugins: {
			/* --------------------------------------------------- */
			/* ------------------- IMPORTS ---------------- */
			/** @link https://github.com/postcss/postcss-import#postcss-import */
			"postcss-import": {
				root: join(cwd, packageName),
				addModulesDirectories: [
					join(cwd, "node_modules"),
					join(cwd, packageName, "node_modules"),
					join(__dirname, "node_modules"),
				],
			},
			/**
			 * @link https://github.com/csstools/postcss-extend-rule
			 * @note replacement for postcss-inherit
			 */
			"postcss-extend-rule": {
				onRecursiveExtend: "throw",
			},
			"postcss-nesting": { noIsPseudoSelector: true },
			/* Source: plugins/postcss-splitinator/index.js */
			"postcss-splitinator": {
						processIdentifier: (identifier) => {
							if (identifier === "express") {
								return "spectrum--express";
							}
							return identifier;
						},
						noFlatVariables,
						// noSelectors is true when:
						//          buildCSSThemeIndex (output = index-theme.css)
						//      and buildCSSThemes (output = themes/*.css)
						noSelectors: isTheme,
				  },
			/* Source: plugins/postcss-transform-logical/index.js */
			"postcss-transform-logical": {},
			/* Source: plugins/postcss-dropunusedvars/index.js */
			"postcss-dropunusedvars": { fix: false },
			/* Source: plugins/postcss-dropdupedvars/index.js */
			"postcss-dropdupedvars": {},
			/* Source: plugins/postcss-droproot/index.js */
			"postcss-droproot": {},
			/* Source: plugins/postcss-combininator/index.js */
			"postcss-combininator": !isLegacy && isExpress ? {} : false,
			"postcss-discard-empty": {},
			"postcss-discard-comments": { removeAllButFirst: true },
			autoprefixer: {
				quiet: true,
			},
			"postcss-reporter": !isProduction
				? {
						clearReportedMessages: true,
				  }
				: false,
		},
	};
};
