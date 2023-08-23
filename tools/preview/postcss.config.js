const { resolve, relative, basename } = require("path");

module.exports = (ctx) => {
	const componentPath = resolve(__dirname, "../../components");
	const folderName = relative(componentPath, ctx.file).split("/")[0];

	const isExpress = folderName === "expressvars";
	const modifier = basename(ctx.file, ".css").startsWith("spectrum")
		? basename(ctx.file, ".css").replace("spectrum-", "").replace("global", "")
		: "";
	return {
		plugins: [
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
		],
	};
};
