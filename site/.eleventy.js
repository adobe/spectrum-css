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

const { readdirSync, existsSync } = require("fs");
const { join } = require("path");

const filters = require("./utils/filters.js");
const md = require("./utils/markdown.js");
const shortcodes = require("./utils/shortcodes.js");
const transforms = require("./utils/transforms.js");

const { EleventyRenderPlugin } = require("@11ty/eleventy");

const Navigation = require("@11ty/eleventy-navigation");
const Bundle = require("@11ty/eleventy-plugin-bundle");
const Output = require("@11ty/eleventy-plugin-directory-output");
const SyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const CodeClipboard = require("eleventy-plugin-code-clipboard");
const pluginTOC = require("eleventy-plugin-nesting-toc");
const { u } = require("tar");

// let firstRun = true;
const isDev = process.env.NODE_ENV === "development";

/**
 *
 * @param {import('@11ty/eleventy/src/UserConfig')} config
 * @returns
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
        port: process.env.PORT ?? 8080,
        showAllHosts: true,
        encoding: "utf-8",
    }, { open: true });

    /** --------- List of component folder names --------- */
    const componentDir = join(__dirname, "../components");

    // @todo Add logic to rebuild only relevant compiled pages
    config.addWatchTarget(`${componentDir}/*/metadata/*.yml`);
    config.addWatchTarget(`${componentDir}/*/dist/**`);
    config.addWatchTarget("../assets/**/*");

    const components = readdirSync(componentDir, { withFileTypes: true })
        .filter((d) => d.isDirectory() && existsSync(join(componentDir, d.name, "package.json")))
        .map((c) => c.name);

    config.addCollection("packages", (_) => {
        return [
            ...components.map((c) => {
                const cwd = join(componentDir, c);

                let stylesheet;
                if (existsSync(join(cwd, "dist/index.css"))) {
                    stylesheet = "index.css";
                } else if (existsSync(join(cwd, "dist/index-vars.css"))) {
                    stylesheet = "index-vars.css";
                }

                return {
                    name: c,
                    stylesheet: stylesheet ? join("/components", c, stylesheet) : undefined,
                };
            }),
            {
                name: "tokens",
                stylesheet: "/tokens/index.css",
            },
        ];
    });

    /** --------- LIBRARY SETTINGS --------- */
    config.addNunjucksGlobal("WATCH_MODE", process.env.WATCH_MODE);

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
    // config.setServerPassthroughCopyBehavior("passthrough");
    config.addPassthroughCopy({
        // Passthrough shared assets from the source of the project
        "./resources/js": "assets/scripts/",
        "./resources/img": "assets/images/",
        "./resources/css": "assets/styles/",
        "../node_modules/prismjs/themes/prism-dark.min.css": "assets/styles/prism-dark.min.css",
        "../node_modules/prismjs/themes/prism.min.css": "assets/styles/prism.min.css",
        "../node_modules/lunr/lunr.js": "assets/scripts/lunr/lunr.js",
        "../node_modules/loadicons/index.js": "assets/scripts/loadicons/index.js",
        "../node_modules/@adobe/spectrum-css-workflow-icons/dist/*.svg": "assets/images/",
        "../node_modules/@spectrum-css/vars/dist/*.css": "dependencies/@spectrum-css/vars/",
        "../node_modules/@spectrum-css/expressvars/dist/*.css": "dependencies/@spectrum-css/expressvars/",
        "../tokens/dist/*.css": "tokens/",
        "../ui-icons/dist/*.svg": "assets/images/",
        "./resources/favicon.png": "./",
        ...(!isDev && {
            // Pass through the storybook build
            "../.storybook/dist/": "preview",
        }),
        ...components.reduce((acc, c) => {
            acc[`${componentDir}/${c}/package.json`] = `components/${c}/package.json`;
            acc[`${componentDir}/${c}/dist/**`] = `components/${c}/`;
            return acc;
        }, {}),
    }/*, { debug: true } */);

    return {
        dir: {
            input: "content",
            includes: "../_includes",
            data: "../_data",
            output: "../dist/",
        },
        templateFormats: ["njk", "11ty.js", "md", "js", "html", "png", "svg", "ico"],
        htmlTemplateEngine: "njk",
        markdownTemplateEngine: "njk",
        dataTemplateEngine: "njk",
    };
};
