const { resolve } = require("path");
const { readdirSync, existsSync } = require("fs");

const { mergeWithRules } = require("webpack-merge");

const componentsPath = resolve(__dirname, "../components");
const componentPkgs = readdirSync(componentsPath, {
    withFileTypes: true,
})
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

module.exports = {
    rootDir: "../",
    core: {
        disableTelemetry: true,
    },
    framework: {
        name: "@storybook/web-components-webpack5",
        options: {},
    },
    stories: ["../components/*/stories/*.stories.js"],
    staticDirs: ["../assets"],
    addons: [
        {
            name: "@storybook/addon-essentials",
            // Supported booleans: actions, controls, docs, toolbars, measure, outline.
            options: {
                viewport: false,
                // Don't need viewports b/c the medium/large contexts are used to support scaling.
                backgrounds: false,
                // Don't need backgrounds b/c this is handled by the color contexts.
                configureJSX: true,
                // Enables JSX support in MDX for projects that aren't configured to handle the format.
                transcludeMarkdown: true, // Support markdown in MDX files.
            },
        },
        // https://github.com/storybookjs/storybook/tree/next/code/addons/a11y
        "@storybook/addon-a11y",
        // https://www.npmjs.com/package/@whitespace/storybook-addon-html
        // "@whitespace/storybook-addon-html",
        // https://storybook.js.org/addons/@etchteam/storybook-addon-status
        "@etchteam/storybook-addon-status",
        // https://storybook.js.org/addons/@storybook/addon-actions
        "@storybook/addon-actions",
        "storybook-addon-pseudo-states",
        // https://github.com/storybookjs/storybook/tree/next/code/addons/interactions
        "@storybook/addon-interactions",
    ],
    features: {
        /* Code splitting flag; load stories on-demand */
        storyStoreV7: true,
        /* Builds stories.json to help with on-demand loading */
        buildStoriesJson: true,
    },
    webpackFinal(config) {
        return mergeWithRules({
            resolve: {
                modules: "merge",
                alias: "merge",
            },
            module: {
                rules: "merge",
            },
        })(config, {
            /* Add support for root node_modules imports */
            resolve: {
                modules: [resolve(__dirname, "../node_modules")],
                alias: componentPkgs.reduce((pkgs, dir) => {
                    const pkgPath = resolve(componentsPath, dir, "package.json");
                    if (existsSync(pkgPath)) {
                        const pkg = require(pkgPath);
                        pkgs[pkg.name] = resolve(componentsPath, dir);
                    }
                    return pkgs;
                }, {}),
            },
            module: {
                rules: [
                    {
                        test: /\.css$/i,
                        exclude: [/(\/|\\)dist(\/|\\)/, /(\/|\\)node_modules(\/|\\)/],
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
                                        return `assets/css/${url.replace(/_\//g, "")}`;
                                    },
                                    esModule: false,
                                },
                            },
                            {
                                loader: "postcss-loader",
                                options: {
                                    implementation: require("postcss"),
                                    postcssOptions: {
                                        config: true,
                                    },
                                },
                            },
                        ],
                    },
                    {
                        test: /\.css$/i,
                        include: [/(\/|\\)node_modules(\/|\\)/, /(\/|\\)dist(\/|\\)/],
                        exclude: [/@spectrum-css(\/|\\)expressvars/, /@spectrum-css(\/|\\)vars/],
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
                                        return `assets/css/${url.replace(/_\//g, "")}`;
                                    },
                                    esModule: false,
                                },
                            },
                        ],
                    },
                    {
                        test: /\.css$/i,
                        include: [/@spectrum-css(\/|\\)expressvars/],
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
                                        return `assets/css/${url.replace(/_\//g, "")}`;
                                    },
                                    esModule: false,
                                },
                            },
                            {
                                loader: "postcss-loader",
                                options: {
                                    implementation: require("postcss"),
                                    postcssOptions: {
                                        plugins: [
                                            require("postcss-selector-replace")({
                                                before: [":root"],
                                                after: [".spectrum--express"],
                                            }),
                                            require("postcss-prefix-selector")({
                                                prefix: ".spectrum--express",
                                                transform(_prefix, selector, prefixedSelector) {
                                                    if (selector.startsWith(".spectrum--express")) return selector;
                                                    /* Smoosh the selectors together b/c they co-exist */
                                                    return prefixedSelector.replace(" ", "");
                                                },
                                            }),
                                        ],
                                    },
                                },
                            },
                        ],
                    },
                    {
                        test: /\.css$/i,
                        include: [/@spectrum-css(\/|\\)vars/],
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
                                        return `assets/css/${url.replace(/_\//g, "")}`;
                                    },
                                    esModule: false,
                                },
                            },
                            {
                                loader: "postcss-loader",
                                options: {
                                    implementation: require("postcss"),
                                    postcssOptions: {
                                        plugins: [
                                            require("postcss-selector-replace")({
                                                before: [":root"],
                                                after: [".spectrum"],
                                            }),
                                        ],
                                    },
                                },
                            },
                        ],
                    },
                    {
                        test: /\.js$/,
                        enforce: "pre",
                        use: ["source-map-loader"],
                    },
                ],
            },
        });
    },
    docs: {
        autodocs: true, // see below for alternatives
        defaultName: "Docs", // set to change the name of generated docs entries
    },
    env: {
        MIGRATED_PACKAGES: componentPkgs.filter((dir) => {
            const pkg = require(resolve(componentsPath, dir, "package.json"));
            return pkg.peerDependencies && !pkg.peerDependencies["@spectrum-css/vars"];
        }),
    },
    // refs: {
    //   'swc': {
    //     title: 'Spectrum Web Components',
    //     url: 'https://opensource.adobe.com/spectrum-web-components/storybook/',
    //     expanded: false,
    //   },
    // },
};
