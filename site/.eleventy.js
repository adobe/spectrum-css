/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the 'License');
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const { readdirSync, writeFileSync, existsSync, mkdir } = require("fs");
const { join, dirname, basename } = require("path");

const postcss = require("postcss");
const postcssrc = require("postcss-load-config");

const filters = require("./utils/filters.js");
const md = require("./utils/markdown.js");
const scripts = require("./utils/scripts.js");
const shortcodes = require("./utils/shortcodes.js");
const transforms = require("./utils/transforms.js");

// const open = require("open");

const { EleventyRenderPlugin } = require("@11ty/eleventy");

const Navigation = require("@11ty/eleventy-navigation");
const Bundle = require("@11ty/eleventy-plugin-bundle");
const Output = require("@11ty/eleventy-plugin-directory-output");
const SyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const CodeClipboard = require("eleventy-plugin-code-clipboard");
const pluginTOC = require("eleventy-plugin-nesting-toc");

// let firstRun = true;
const isDev = process.env.NODE_ENV === "development";

/**
 * @type import('@11ty/eleventy').EleventyConfig
 */
module.exports = (config) => {
    /** --------- PLUGINS --------- */
    if (isDev) config.addPlugin(Output);

    config.addPlugin(EleventyRenderPlugin);
    config.addPlugin(Navigation);
    config.addPlugin(Bundle);
    config.addPlugin(SyntaxHighlight, {
        config: {
            preAttributes: {
                class: (/* { language } */) => "spectrum-Code",
            },
            codeAttributes: {},
        },
        init: ({ Prism }) => {
            Prism.languages["html-live"] = Prism.languages.html;
            Prism.languages["html-no-demo"] = Prism.languages.html;
        },
    });
    config.addPlugin(CodeClipboard);
    config.addPlugin(pluginTOC, {
        headingText: "Content",
        tags: ["h2", "h3"],
    });

    /** --------- CONFIG --------- */
    config.setDataDeepMerge(true);
    config.setWatchThrottleWaitTime(100);
    config.setServerOptions({
        liveReload: true,
        domDiff: true,
        port: process.env.PORT || 8080,
        showAllHosts: true,
        encoding: "utf-8",
    });

    /** --------- List of component folder names --------- */
    const componentDir = join(__dirname, "../components");

    // @todo Add logic to rebuild only relevant compiled pages
    config.addWatchTarget(`${componentDir}/*/metadata/*.yml`);
    config.addWatchTarget("../assets/**/*");

    const components = readdirSync(componentDir, { withFileTypes: true })
        .filter((d) => d.isDirectory())
        .map((c) => c.name);

    config.addCollection("packages", () => {
        return components.map((c) => ({
            name: c,
            stylesheet: existsSync(`${componentDir}/${c}/dist/index.css`) ? `index.css` : null,
            folder: `/components/${c}`,
        }));
    });

    /** --------- LIBRARY SETTINGS --------- */
    // config.addNunjucksGlobal("WATCH_MODE", process.env.WATCH_MODE);
    eleventyConfig.setLibrary("pug", pug);

    /** --------- CSS --------- */
    config.addTemplateFormats("css");
    config.addExtension("css", {
        outputFileExtension: "css",
        compileOptions: {
            permalink: () => (data) => `assets/${data.page.filePathStem}.${data.page.outputFileExtension}`,
        },
        compile: async function (content, path) {
            if (basename(path).startsWith("_")) return;

            // Run the entrypoint through postcss
            const { plugins, options } = await postcssrc({
                cwd: dirname(path),
                env: process.env.NODE_ENV ?? "development",
                file: path,
            }).catch((error) => Promise.reject(error));

            const output = await postcss(plugins).process(content, {
                ...options,
                from: path,
            });

            if (output?.warnings?.length) {
                console.warn(output.warnings);
            }

            if (output?.errors?.length) console.error(output.errors);

            const deps = [...new Set([...output.messages.filter((m) => m.type === "dependency").map((m) => m.file)])];
            // @todo this doesn't seem to be working; debug this later
            if (deps.length) this.addDependencies(path, deps);

            return async (data) => {
                if (output?.map) {
                    if (!existsSync(dirname(`${data.page.outputPath}`))) {
                        mkdir(dirname(`${data.page.outputPath}`), { recursive: true }, () => {});
                    }

                    writeFileSync(`${data.page.outputPath}.map`, output.map.toString());

                    this.addDependencies(path, [`${data.page.outputPath}.map`]);
                }
                // index.css.map
                output.css = output.css.replace(
                    /\/\*# sourceMappingURL=([a-z|-|\/]+\.css\.map)\s*\*\//g,
                    (_, path) => `/*# sourceMappingURL=${path.split("/").pop()} */`,
                );

                return output.css;
            };
        },
    });

    /** --------- JS --------- */
    config.addTemplateFormats("js");
    config.addExtension("js", {
        outputFileExtension: "js",
        compileOptions: {
            spiderJavascriptDependencies: true,
            permalink: () => (data) => `assets/${data.page.filePathStem}.${data.page.outputFileExtension}`,
        },
        compile: scripts.compiler,
    });

    /** --------- MARKDOWN --------- */
    config.setLibrary("md", md);

    /** --------- FILTERS --------- */
    Object.keys(filters).forEach((key) => {
        config.addFilter(key, filters[key]);
    });

    /** --------- TRANSFORMS --------- */
    Object.keys(transforms).forEach((key) => {
        config.addTransform(key, transforms[key]);
    });

    /** --------- SHORTCODES --------- */
    // Fetch shortcodes by type
    Object.entries(shortcodes).forEach(([type, codes]) => {
        Object.keys(codes).forEach((key) => {
            config[type](key, shortcodes[key]);
        });
    });

    /** --------- PASSTHROUGHS --------- */
    config.addPassthroughCopy({
        // Passthrough shared assets from the source of the project
        "../assets/scripts": "assets/scripts/",
        "../assets/images": "assets/images/",
        "../node_modules/prismjs/themes/prism-dark.min.css": "assets/styles/prism-dark.min.css",
        "../node_modules/prismjs/themes/prism.min.css": "assets/styles/prism.min.css",
        "../assets/favicons": "/",
        ...(!isDev && {
            // Pass through the storybook build
            "../storybook/dist": "preview",
        }),
        ...components.reduce((acc, c) => {
            acc[`${componentDir}/${c}/dist/*`] = `components/${c}`;
            acc[`${componentDir}/${c}/package.json`] = `components/${c}/package.json`;
            return acc;
        }, {}),
    });

    return {
        dir: {
            input: "content",
            includes: "../_includes",
            data: "../_data",
            output: "dist",
        },
        templateFormats: ["pug", "njk", "11ty.js", "md", "js", "html", "png", "svg", "ico"],
        htmlTemplateEngine: "pug",
        markdownTemplateEngine: "pug",
        dataTemplateEngine: "pug",
    };
};
