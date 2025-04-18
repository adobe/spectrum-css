# Change Log

## 1.1.0

### Minor Changes

- [#3452](https://github.com/adobe/spectrum-css/pull/3452) [`287cff8`](https://github.com/adobe/spectrum-css/commit/287cff82b7706f0f56d6d37f48e1d9c60a6df4b9) Thanks [@marissahuysentruyt](https://github.com/marissahuysentruyt)! - Adds new functionality to better handle tokens that reference other transparent tokens.

  When a custom properties below is defined as another, specifically "transparent," variable, such as:

  ```css
  --disabled-static-white-background-color: var(
  	--spectrum-transparent-white-100
  );
  ```

  ...the plugin can now convert this single custom property into its `-rgb` and `-opacity` postfixed variables, that each correspond to the `-rgb` and `-opacity` variables of the definition's transparent token. It then reassembles the original, using and referencing these newly created variables.

  ```css
  --disabled-static-white-background-color-rgb: var(
  	--spectrum-transparent-white-100-rgb
  );
  --disabled-static-white-background-color-opacity: var(
  	--spectrum-transparent-white-100-opacity
  );
  --disabled-static-white-background-color: rgba(
  	var(--disabled-static-white-background-color-rgb),
  	var(--disabled-static-white-background-color-opacity)
  );
  ```

## 1.0.0

### Major Changes

📝 [#3502](https://github.com/adobe/spectrum-css/pull/3502) [`562396e`](https://github.com/adobe/spectrum-css/commit/562396eaf21769341f78ea3761393b65f00e751b) Thanks [@castastrophe](https://github.com/castastrophe)!

- Migrated the `postcss-rgb-mapping` package into the new `@spectrum-tools` namespace so updates may shipped and shared among other projects.
