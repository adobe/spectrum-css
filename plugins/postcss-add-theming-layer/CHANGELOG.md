# Change Log

## 1.0.0

### Major Changes

- [#3502](https://github.com/adobe/spectrum-css/pull/3502) [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b) Thanks [@castastrophe](https://github.com/castastrophe)! - The PostCSS plugin previously published as `postcss-splitinator`. This new package creates a polyfill for style queries by creating a layer of `--system` prefixed custom properties to be loaded by attaching a unique selector. This allows the toggling of component-level property definitions by theme or context. There are many options available to customize the output that are documented in the package [README](plugins/postcss-add-theming-layer/README.md).
