const { basename } = require("path");
const warnCleaner = require("postcss-warn-cleaner");

const simpleBuilder = require("@spectrum-css/component-builder-simple/processors.js");
const legacyBuilder = require("@spectrum-css/component-builder/processors.js");

/**
 * Determines the package name from a file path
 * @param {string} filePath
 * @returns {string}
 */
function getPackageFromPath(filePath) {
	return filePath.match(`(components|@spectrum-css)\/(.*?)\/`)?.[2];
}

module.exports = (ctx) => {
	let plugins = [];
    /** @todo put together a more robust fallback determination */
	const folderName = getPackageFromPath(ctx.file) ?? "tokens";
	const pkgPath = require.resolve(`@spectrum-css/${folderName}/package.json`);

	if (!pkgPath) return plugins;

	/**
	 * For our token libraries, include a little extra parsing to allow duplicate
	 * token values to exist in parallel and be toggled using args in storybook.
	 */
	if (["expressvars", "vars", "tokens"].includes(folderName)) {
		const isExpress = folderName === "expressvars";
		const modifier = basename(ctx.file, ".css").startsWith("spectrum")
			? basename(ctx.file, ".css")
					.replace("spectrum-", "")
					.replace("global", "")
			: "";

		plugins = [
			require("postcss-import")(),
			require("postcss-selector-replace")({
				before: [":root"],
				after: [
					`${isExpress ? ".spectrum--express" : ""}${
						modifier ? `.spectrum--${modifier}` : ""
					}${!isExpress && !modifier ? ".spectrum" : ""}`,
				],
			}),
			...(isExpress
				? [
						require("postcss-prefix-selector")({
							prefix: ".spectrum--express",
							transform(_prefix, selector, prefixedSelector) {
								if (selector.startsWith(".spectrum--express")) return selector;
								/* Smoosh the selectors together b/c they co-exist */
								return prefixedSelector.replace(" ", "");
							},
						}),
				  ]
				: []),
		];
	} else {
		/**
		 * If a path has a package.json, we can assume it's a component and
		 * we want to leverage the correct plugins for it.
		 */
		const {
			peerDependencies = {},
			devDependencies = {},
			dependencies = {}
		} = require(pkgPath);

		const deps = [...new Set([
			...Object.keys(peerDependencies),
			...Object.keys(dependencies),
			...Object.keys(devDependencies),
		])];

		if (
			deps.includes("@spectrum-css/vars")
		) {
			plugins.push(...legacyBuilder.processors);
		} else {
			if (ctx.file.split("/").includes("themes")) {
				plugins.push(...simpleBuilder.getProcessors({ noSelectors: false }));
			} else {
				plugins.push(...simpleBuilder.getProcessors());
			}
		}
	}

	/**
	 * For storybook, add a tool to suppress unnecessary warnings
	 */
	plugins.push(
		warnCleaner({
			ignoreFiles: "**/*.css",
		})
	);

	return { plugins };
};
