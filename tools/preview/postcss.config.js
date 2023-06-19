const { resolve, relative, basename } = require("path");
const warnCleaner = require("postcss-warn-cleaner");

module.exports = (ctx) => {
	const plugins = [require("postcss-import")()];
	const componentPath = resolve(__dirname, "../../components");
	const folderName = relative(componentPath, ctx.file).split("/")[0];

	if (["expressvars", "vars", "tokens"].includes(folderName)) {
		const isExpress = folderName === "expressvars";
		const modifier = basename(ctx.file, ".css").startsWith("spectrum")
			? basename(ctx.file, ".css")
					.replace("spectrum-", "")
					.replace("global", "")
			: "";

		plugins.push(
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
				: [])
		);
	}

	// For storybook, add a tool to suppress autoprefixer warnings
	plugins.push(
		warnCleaner({
			ignoreFiles: "**/*.css",
		})
	);

	return { plugins };
};
