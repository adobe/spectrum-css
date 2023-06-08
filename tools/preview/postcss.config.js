const { resolve, relative, basename } = require("path");
const { existsSync } = require("fs");
const warnCleaner = require("postcss-warn-cleaner");

const simpleBuilder = require("@spectrum-css/component-builder-simple/css/processors.js");
const legacyBuilder = require("@spectrum-css/component-builder/css/processors.js");

module.exports = (ctx) => {
	let plugins = [];
	const componentPath = resolve(__dirname, "../../components");
	const folderName = relative(componentPath, ctx.file).split("/")[0];
	const pkgPath = resolve(componentPath, folderName, "package.json");

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
	} else if (existsSync(pkgPath)) {
		const { devDependencies } = require(pkgPath);
		if (
			Object.keys(devDependencies).includes("@spectrum-css/component-builder")
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

	// For storybook, add a tool to suppress autoprefixer warnings
	plugins.push(
		warnCleaner({
			ignoreFiles: "**/*.css",
		})
	);

	return { plugins };
};
