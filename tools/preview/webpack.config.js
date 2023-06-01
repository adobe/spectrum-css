/**!
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

const { resolve } = require("path");
const { readdirSync } = require("fs");

const componentsPath = resolve(__dirname, "../../components");
const componentPkgs = readdirSync(componentsPath, { withFileTypes: true })
	.filter((dirent) => dirent.isDirectory())
	.map((dirent) => dirent.name);

const isDev = process.env.NODE_ENV !== "production";

/** @type import('webpack').ConfigurationFactory */
module.exports = {
	mode: isDev ? "development" : "production",
	stats: { colors: true },
	performance: {
		hints: isDev ? false : "warning",
	},
	// Eval does not work for css source maps
	// `All values enable source map generation except eval and false value.`
	// https://github.com/webpack-contrib/css-loader
	devtool: isDev ? "cheap-module-source-map" : "source-map",
	// stats: {},

	/** Keep entry and output empty to allow for extending this config in both storybook and eleventy */
	// entry: [],
	// output: {},

	/** Add any plugins here such as WebpackManifestPlugin or MiniCssExtractPlugin */
	// plugins: [],

	/** @todo options for minimizing css and js */
	// ...(!isDev && {
	//     optimization: {
	//         minimizer: [
	//           new TerserPlugin(),
	//           new CssMinimizerPlugin()
	//         ]
	//     }
	// }),

	/** Add support for root node_modules imports */
	resolve: {
		modules: [
			resolve(__dirname, "../../node_modules"),
			resolve(process.cwd(), "node_modules"),
		],
		alias: {
			...componentPkgs.reduce((pkgs, dir) => {
				const pkg = require(resolve(componentsPath, dir, "package.json"));
				pkgs[pkg.name] = resolve(componentsPath, dir);
				return pkgs;
			}, {}),

			// Helpful alias for importing assets
			assets: resolve(__dirname, "../../assets/"),
		},
	},

	module: {
		rules: [
			{
				/** Rules for processing images (NOT SVG!) */
				test: /\.(png|jpe?g|gif,webp,ico)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							outputPath: () => {
								// (url, resourcePath, context) => {
								return `assets/images/${
									isDev ? "[name][ext]" : "[contenthash][ext]"
								}`; // was: ${url.replace(/_\//g, '')}`;
							},
						},
					},
				],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							outputPath: () => {
								// (url, resourcePath, context) => {
								return `assets/fonts/${
									isDev ? "[name][ext]" : "[contenthash][ext]"
								}`; // was: ${url.replace(/_\//g, '')}`;
							},
						},
					},
				],
			},
			{
				/** Raw SVG loader */
				test: /\.svg$/,
				loader: "raw-loader",
			},
			{
				/** Rules for processing CSS */
				test: /\.css$/,
				sideEffects: true,
				use: [
					{
						loader: "style-loader",
						options: {
							injectType: "linkTag",
							attributes: {
								"data-source": "processed",
							},
						},
					},
					{
						loader: "file-loader",
						options: {
							name: "[path][name].[ext][query]",
							// outputPath: (url, resourcePath, context) => {
							//     return `assets/styles/${url.replace(/_\//g, '')}`;
							// },
							esModule: true,
						},
					},
					{
						loader: "postcss-loader",
						options: {
							implementation: require("postcss"),
							postcssOptions: {
								/** @todo this should use the postcss config closest to the project */
								config: resolve(process.cwd(), "postcss.config.js"),
							},
						},
					},
				],
			},
			{
				/** Rules for processing JS */
				test: /\.(?:js|mjs|cjs)$/,
				exclude: /\/node_modules\//,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: [
								[
									"@babel/preset-env",
									{
										targets: {
											browsers: ["last 2 versions", "ie >= 11"],
										},
										useBuiltIns: "usage",
										corejs: 3,
									},
								],
							],
							plugins: [
								"@babel/plugin-proposal-class-properties",
								"@babel/plugin-proposal-object-rest-spread",
								"@babel/plugin-transform-runtime",
							],
						},
					},
				],
			},
			{
				test: /\.js$/,
				use: ["source-map-loader"],
				enforce: "pre",
			},
		],
	},
};
