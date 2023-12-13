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
                alias: {
                    ...components,
                    // Helpful alias for importing assets
                    assets: join(__dirname, "../../assets/"),
                    "@spectrum-css/ui-icons": join(__dirname, "../../ui-icons"),
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
