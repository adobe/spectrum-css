# Change Log

## 1.0.2

### Patch Changes

- [#3527](https://github.com/adobe/spectrum-css/pull/3527) [`5f1751c`](https://github.com/adobe/spectrum-css/commit/5f1751c82a5fe55ae0d999f5f50cfeca4c8a5c75) Thanks [@castastrophe](https://github.com/castastrophe)! - Minor dependency updates to align with the larger project.

## 1.0.1

### Patch Changes

📝 [#3541](https://github.com/adobe/spectrum-css/pull/3541) [`1a3245c`](https://github.com/adobe/spectrum-css/commit/1a3245c3a660bc52ed260f18b6cceab5ee81541d) Thanks [@castastrophe](https://github.com/castastrophe)!

- Dependency alignment across the project.

  Set component peerDependencies as optional to reduce console warnings on downstream projects.

## 1.0.0

### Major Changes

📝 [#3502](https://github.com/adobe/spectrum-css/pull/3502) [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b) Thanks [@castastrophe](https://github.com/castastrophe)!

- The PostCSS plugin previously published as `postcss-splitinator`. This new package creates a polyfill for style queries by creating a layer of `--system` prefixed custom properties to be loaded by attaching a unique selector. This allows the toggling of component-level property definitions by theme or context. There are many options available to customize the output that are documented in the package [README](plugins/postcss-add-theming-layer/README.md).
