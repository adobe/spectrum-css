/*!
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const { join } = require("path");

const esbuild = require("esbuild");
const { esbuildDecorators } = require("esbuild-decorators");

module.exports = {
    compiler: async (content, path) => {
        // Only compile the main script, skip the others (they're dependencies)
        if (!/^\.\/content\/scripts\/(.*?)\.(m|c)?js$/.test(path)) return content;

        return async (data) => {
            const components =
                data?.collections?.component?.reduce((obj, c) => {
                    if (!c.package) return;
                    obj[c.package.name] = join(__dirname, "../../components", c);
                    return obj;
                }, {}) ?? {};

            const svg = await import("esbuild-plugin-svg").then((m) => m.default);
            // @todo need to register dependencies somehow; debug later
            const result = await esbuild.build({
                entryPoints: [path],
                sourcemap: process.env.NODE_ENV !== "production" ? "inline" : false,
                bundle: true,
                minify: process.env.NODE_ENV === "production",
                write: false,
                outdir: "dist/assets/scripts/",
                target: "esnext", // was es2020 but b/c we want to support decorators, at least esnext required
                format: "esm",
                tsconfig: "tsconfig.json",
                alias: {
                    ...components,
                    // Helpful alias for importing assets
                    assets: join(__dirname, "../../assets/"),
                },
                loader: {
                    ".json": "json",
                },
                plugins: [svg(), esbuildDecorators({})],
            });

            return result.outputFiles.map((content) => content.text).join("\n");
        };
    },
};
