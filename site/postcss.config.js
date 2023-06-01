const fs = require("fs");
const { resolve, relative, basename } = require("path");

module.exports = (ctx) => {
	const inputFile = ctx.file;
	let plugins = [];
	const componentPath = resolve(__dirname, "../components");
	const folderName = inputFile
		? relative(componentPath, inputFile).split("/")[0]
		: undefined;
	const pkgPath = resolve(componentPath, folderName, "package.json");

	if (["expressvars", "vars", "tokens"].includes(folderName)) {
		const isExpress = folderName === "expressvars";
		const modifier = inputFile
			? basename(inputFile, ".css").startsWith("spectrum")
				? basename(inputFile, ".css")
						.replace("spectrum-", "")
						.replace("global", "")
				: ""
			: "";

		plugins = [
			require("postcss-import")({
				resolve(id) {
					if (id.startsWith("@spectrum-css/")) {
						return resolve(componentPath, id.replace("@spectrum-css/", ""));
					}
					return id;
				},
			}),
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
	} else if (fs.existsSync(pkgPath)) {
		const { devDependencies } = require(pkgPath);
		if (
			Object.keys(devDependencies).includes("@spectrum-css/component-builder")
		) {
			plugins.push(
				...require("@spectrum-css/component-builder/css/processors.js")
					.processors
			);
		} else {
			plugins.push(
				...require("@spectrum-css/component-builder-simple/css/processors.js").getProcessors(
					true,
					{ noSelectors: false }
				)
			);
		}
	} else {
		plugins.push(
			...require("@spectrum-css/component-builder-simple/css/processors.js").getProcessors(
				true,
				{ noSelectors: false }
			)
		);
	}

	return { plugins };
};
