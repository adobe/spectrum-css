/*!
 * Copyright 2023 Adobe. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

const { resolve, join } = require("path");
const { readdirSync, existsSync } = require("fs");

const componentsPath = resolve(__dirname, "../components");
const componentPkgs = readdirSync(componentsPath, {
	withFileTypes: true,
})
	.filter((dirent) => dirent.isDirectory() && existsSync(join(dirent.path, dirent.name, "package.json")))
	.map((dirent) => dirent.name);

module.exports = {
    ignoreWarnings: [
        /* Suppress autoprefixer warnings from storybook build */
        { message: /autoprefixer: / }
    ],
    /* Add support for root node_modules imports */
    resolve: {
        modules: ["../node_modules"],
        alias: {
            ...componentPkgs.reduce((pkgs, dir) => {
                const pkg = require(`${componentsPath}/${dir}/package.json`);
                pkgs[pkg.name] = `${componentsPath}/${dir}`;
                return pkgs;
            }, {}),
            "@spectrum-css/tokens": join(__dirname, "../tokens"),
            "@spectrum-css/ui-icons": join(__dirname, "../ui-icons"),
        },
    },
    module: {
        rules: [
            // {
            //     test: /\.(ico|jpg|jpeg|png|gif|webp)$/i,
            //     use: [
            //         {
            //             loader: "file-loader",
            //             options: {
            //                 outputPath: (url) => `assets/images/${url.replace(/_\//g, "")}`,
            //             },
            //         },
            //     ],
            // },
            {
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
                            outputPath: (url) => {
                                const cleanURL = url.replace(/_\//g, "");
                                if (/node_modules\/@spectrum-css/.test(url)) {
                                    return `assets/css/${cleanURL.replace(/node_modules\/@spectrum-css\//g, "")}`;
                                }

                                return `assets/css/${cleanURL}`;
                            },
                            esModule: false,
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            implementation: require("postcss"),
                            postcssOptions: {
                                config: resolve(__dirname, "postcss.config.js"),
                            },
                        },
                    },
                ],
            },
            /* Raw SVG loader */
            {
                test: /\.svg$/i,
                loader: "raw-loader",
            },
        ],
    },
};
