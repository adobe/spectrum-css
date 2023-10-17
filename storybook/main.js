import { readdirSync } from "fs";
import { join, resolve } from "path";

const componentsPath = resolve(__dirname, "../components");
const componentPkgs = readdirSync(componentsPath, {
    withFileTypes: true,
})
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

export const rootDir = join(__dirname, "../");

export default {
    rootDir,
    core: {
        disableTelemetry: true,
    },
    framework: {
        name: "@storybook/web-components-webpack5",
        options: {
            builder: {
                useSWC: true,
            },
        },
    },
    stories: [
        // "../components/*/stories/*.stories.mdx",
        join(componentsPath, "*/stories/*.stories.js"),
    ],
    /* Make available global static assets from root */
    staticDirs: [join(rootDir, "assets")],
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
        // https://storybook.js.org/addons/storybook-addon-swc
        {
            name: "storybook-addon-swc",
            options: {
                enableSwcMinify: false,
            },
        },
        // https://github.com/storybookjs/storybook/tree/next/code/addons/a11y
        "@storybook/addon-a11y",
        // https://storybook.js.org/addons/@etchteam/storybook-addon-status
        "@etchteam/storybook-addon-status",
        "storybook-addon-pseudo-states",
        // https://github.com/storybookjs/addon-styling#storybookaddon-styling
        {
            name: "@storybook/addon-styling",
            options: {
                postCss: {
                    implementation: require("postcss"),
                },
            },
        },
    ],
    features: {
        /* Code splitting flag; load stories on-demand */
        storyStoreV7: true,
        /* Builds stories.json to help with on-demand loading */
        buildStoriesJson: true,
    },
    docs: {
        autodocs: true, // see below for alternatives
        defaultName: "Docs", // set to change the name of generated docs entries
    },
    env: {
        MIGRATED_PACKAGES: componentPkgs.filter((dir) => {
            const pkg = require(resolve(componentsPath, dir, "package.json"));
            if (pkg.devDependencies && pkg.devDependencies["@spectrum-css/tokens"]) {
                return true;
            }
            return false;
        }),
    },
};
