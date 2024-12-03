# Change Log

## 1.1.0

### Minor Changes

- [#3403](https://github.com/adobe/spectrum-css/pull/3403) [`48626b8`](https://github.com/adobe/spectrum-css/commit/48626b8ca11043d290c0fe987ec501b88bd6e339) Thanks [@castastrophe](https://github.com/castastrophe)! - Allow the base filename to be passed into the tool so that the core theme can be updated. Great preparations for S2 roll-out when spectrum-two.css theme files will become our primary source of theme content.

## 1.0.0

### Major Changes

- [#3026](https://github.com/adobe/spectrum-css/pull/3026) [`544a803`](https://github.com/adobe/spectrum-css/commit/544a8039e84423a4db3137a0688f27b7812e291f) Thanks [@castastrophe](https://github.com/castastrophe)! - Initial release of the stylelint theme alignment tool. This package uses the base file (themes/spectrum.css) for a Spectrum CSS component as a "source of truth" and validates the sub-themes (i.e., themes/express.css) use only selectors and custom properties defined in the base file.
