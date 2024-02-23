const simpleBuilder = require("@spectrum-css/component-builder-simple/css/processors.js");

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
	if (folderName === "tokens") {
		plugins = [
			require("postcss-import")(),
		];
	} else if (ctx.file.split("/").includes("themes")) {
		plugins.push(...simpleBuilder.getProcessors({ noSelectors: false }));
	} else {
		plugins.push(...simpleBuilder.getProcessors());
	}

	/**
	 * For storybook, add a tool to suppress unnecessary warnings
	 */
	plugins.push(
		require("postcss-warn-cleaner")({
			ignoreFiles: "**/*.css",
		})
	);

	return { plugins };
};
