import { HtmlBasePlugin, IdAttributePlugin, InputPathToUrlTransformPlugin } from "@11ty/eleventy";
import pluginNavigation from "@11ty/eleventy-navigation";
import pluginSyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default async function(eleventyConfig) {
	// Copy the contents of the `public` folder to the output folder
	// For example, `./public/css/` ends up in `_site/css/`
	eleventyConfig
		.addPassthroughCopy({
			"./public/": "/",
			"../bundle/dist": "/node_modules/@spectrum-css/bundle",
			"../../node_modules/diff2html/bundles": "/node_modules/diff2html",
			"../../node_modules/@zachleat/heading-anchors/heading-anchors.js": "/node_modules/@zachleat/heading-anchors/heading-anchors.js",
		});

	// Watch images for the image pipeline.
	// eleventyConfig.addWatchTarget("content/**/*.{svg,webp,png,jpg,jpeg,gif}");

	eleventyConfig.addPlugin(pluginSyntaxHighlight, {
		preAttributes: { tabindex: 0 }
	});
	eleventyConfig.addPlugin(pluginNavigation);
	eleventyConfig.addPlugin(HtmlBasePlugin);
	eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);
	eleventyConfig.addPlugin(IdAttributePlugin, {});

	eleventyConfig.addFilter("bytesToSize", (bytes) => {
		if (bytes === 0) return "0";

		const sizes = ["bytes", "KB", "MB", "GB", "TB"];
		// Determine the size identifier to use (KB, MB, etc)
		const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
		if (i === 0) return (bytes / 1000).toFixed(2) + " " + sizes[1];
		return (bytes / Math.pow(1024, i)).toFixed(2) + " " + sizes[i];
	});

	eleventyConfig.addFilter("print", (data) => JSON.stringify(data, null, 2));

	eleventyConfig.addFilter("hasChange", (data) => {
		return [...data.entries()].reduce((hasChange, [, fileData]) => {
			if (!fileData) return hasChange;
			if (fileData.hasDiff) return true;
			return hasChange;
		}, false);
	});
}

export const config = {
	templateFormats: [
		"njk",
		"html",
		"11ty.js",
	],
	markdownTemplateEngine: "njk",
	htmlTemplateEngine: "njk",

	dir: {
		output: "_site"
	},
};
