# Change Log

## 14.0.0-next.8

### Patch Changes

- [#2797](https://github.com/adobe/spectrum-css/pull/2797) [`e62d1ca`](https://github.com/adobe/spectrum-css/commit/e62d1ca8cad8a2cdd9c8748335d0371e0aaca60a) Thanks [@pfulton](https://github.com/pfulton)! - Uses the latest release from Spectrum Tokens (13.0.0-beta.35)

## 16.0.0

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`6c19fcf`](https://github.com/adobe/spectrum-css/commit/6c19fcf3f0eda76987f338981ae20f9999febce6) Thanks [@pfulton](https://github.com/pfulton)! - ## Breaking change

  This major update creates a bridge between the Spectrum 1 (S1) and Spectrum 2 (S2) designs, dubbed "Spectrum 2 Foundations". These were built from a manual snapshot release via `@adobe/spectrum-tokens` and does _NOT_ reflect a fully S2 design asset. This introduces S2 corner rounding and color palette, along with a few component- and alias-level mappings. This approach allows us to temporarily create component CSS that can render S1, Express, or S2 designs by swapping out a few "system"-level variables.

  If you are looking to implement a fully S2 design, please explore the `next` releases instead of using this foundations release. The S2 components rendered with these token values will not fully match S2 design assets. **This release is used in Spectrum Web Components 1.x**.

  **Tokens changed:** 1104

  ### Newly Deprecated (23)

  - `--spectrum---spectrum-corner-radius-300`
  - `--spectrum-corner-radius-400`
  - `--spectrum-corner-radius-500`
  - `--spectrum-corner-radius-600`
  - `--spectrum-corner-radius-700`
  - `--spectrum-corner-radius-800`
  - `--spectrum-corner-radius-1000`
  - `--spectrum-corner-radius-small-default`
  - `--spectrum-corner-radius-medium-default`
  - `--spectrum-corner-radius-large-default`
  - `--spectrum-corner-radius-extra-large-default`
  - `--spectrum-corner-radius-full`
  - `--spectrum-corner-radius-small-size-small`
  - `--spectrum-corner-radius-small-size-medium`
  - `--spectrum-corner-radius-small-size-large`
  - `--spectrum-corner-radius-small-size-extra-large`
  - `--spectrum-corner-radius-medium-size-extra-small`
  - `--spectrum-corner-radius-medium-size-small`
  - `--spectrum-corner-radius-medium-size-medium`
  - `--spectrum-corner-radius-medium-size-large`
  - `--spectrum-corner-radius-medium-size-extra-large`
  - `--spectrum-overlay-opacity`
  - `--spectrum-drop-shadow-color`: Replaced with `--spectrum-drop-shadow-color-100`

  ### Added (185)

  - `accent-color-1500`

  - `--spectrum-accent-color-1600`
  - `--spectrum-informative-color-1500`
  - `--spectrum-informative-color-1600`
  - `--spectrum-negative-color-1500`
  - `--spectrum-negative-color-1600`
  - `--spectrum-notice-color-1500`
  - `--spectrum-notice-color-1600`
  - `--spectrum-positive-color-1500`
  - `--spectrum-positive-color-1600`
  - `--spectrum-negative-subdued-background-color-default`
  - `--spectrum-negative-subdued-background-color-hover`
  - `--spectrum-negative-subdued-background-color-down`
  - `--spectrum-negative-subdued-background-color-key-focus`
  - `--spectrum-accent-subtle-background-color-default`
  - `--spectrum-informative-subtle-background-color-default`
  - `--spectrum-positive-subtle-background-color-default`
  - `--spectrum-notice-subtle-background-color-default`
  - `--spectrum-negative-subtle-background-color-default`
  - `--spectrum-corner-radius-0`
  - `--spectrum-corner-radius-none`
  - `--spectrum-text-to-visual-400`
  - `--spectrum-transparent-white-25`
  - `--spectrum-transparent-white-50`
  - `--spectrum-transparent-white-75`
  - `--spectrum-transparent-white-1000`
  - `--spectrum-transparent-black-25`
  - `--spectrum-transparent-black-50`
  - `--spectrum-transparent-black-75`
  - `--spectrum-transparent-black-1000`
  - `--spectrum-gray-25`
  - `--spectrum-gray-1000`
  - `--spectrum-blue-1500`
  - `--spectrum-blue-1600`
  - `--spectrum-red-1500`
  - `--spectrum-red-1600`
  - `--spectrum-orange-1500`
  - `--spectrum-orange-1600`
  - `--spectrum-yellow-1500`
  - `--spectrum-yellow-1600`
  - `--spectrum-chartreuse-1500`
  - `--spectrum-chartreuse-1600`
  - `--spectrum-celery-1500`
  - `--spectrum-celery-1600`
  - `--spectrum-green-1500`
  - `--spectrum-green-1600`
  - `--spectrum-seafoam-1500`
  - `--spectrum-seafoam-1600`
  - `--spectrum-cyan-1500`
  - `--spectrum-cyan-1600`
  - `--spectrum-indigo-1500`
  - `--spectrum-indigo-1600`
  - `--spectrum-purple-1500`
  - `--spectrum-purple-1600`
  - `--spectrum-fuchsia-1500`
  - `--spectrum-fuchsia-1600`
  - `--spectrum-magenta-1500`
  - `--spectrum-magenta-1600`
  - `--spectrum-pink-100`
  - `--spectrum-pink-200`
  - `--spectrum-pink-300`
  - `--spectrum-pink-400`
  - `--spectrum-pink-500`
  - `--spectrum-pink-600`
  - `--spectrum-pink-700`
  - `--spectrum-pink-800`
  - `--spectrum-pink-900`
  - `--spectrum-pink-1000`
  - `--spectrum-pink-1100`
  - `--spectrum-pink-1200`
  - `--spectrum-pink-1300`
  - `--spectrum-pink-1400`
  - `--spectrum-pink-1500`
  - `--spectrum-pink-1600`
  - `--spectrum-turquoise-100`
  - `--spectrum-turquoise-200`
  - `--spectrum-turquoise-300`
  - `--spectrum-turquoise-400`
  - `--spectrum-turquoise-500`
  - `--spectrum-turquoise-600`
  - `--spectrum-turquoise-700`
  - `--spectrum-turquoise-800`
  - `--spectrum-turquoise-900`
  - `--spectrum-turquoise-1000`
  - `--spectrum-turquoise-1100`
  - `--spectrum-turquoise-1200`
  - `--spectrum-turquoise-1300`
  - `--spectrum-turquoise-1400`
  - `--spectrum-turquoise-1500`
  - `--spectrum-turquoise-1600`
  - `--spectrum-brown-100`
  - `--spectrum-brown-200`
  - `--spectrum-brown-300`
  - `--spectrum-brown-400`
  - `--spectrum-brown-500`
  - `--spectrum-brown-600`
  - `--spectrum-brown-700`
  - `--spectrum-brown-800`
  - `--spectrum-brown-900`
  - `--spectrum-brown-1000`
  - `--spectrum-brown-1100`
  - `--spectrum-brown-1200`
  - `--spectrum-brown-1300`
  - `--spectrum-brown-1400`
  - `--spectrum-brown-1500`
  - `--spectrum-brown-1600`
  - `--spectrum-silver-100`
  - `--spectrum-silver-200`
  - `--spectrum-silver-300`
  - `--spectrum-silver-400`
  - `--spectrum-silver-500`
  - `--spectrum-silver-600`
  - `--spectrum-silver-700`
  - `--spectrum-silver-800`
  - `--spectrum-silver-900`
  - `--spectrum-silver-1000`
  - `--spectrum-silver-1100`
  - `--spectrum-silver-1200`
  - `--spectrum-silver-1300`
  - `--spectrum-silver-1400`
  - `--spectrum-silver-1500`
  - `--spectrum-silver-1600`
  - `--spectrum-cinnamon-100`
  - `--spectrum-cinnamon-200`
  - `--spectrum-cinnamon-300`
  - `--spectrum-cinnamon-400`
  - `--spectrum-cinnamon-500`
  - `--spectrum-cinnamon-600`
  - `--spectrum-cinnamon-700`
  - `--spectrum-cinnamon-800`
  - `--spectrum-cinnamon-900`
  - `--spectrum-cinnamon-1000`
  - `--spectrum-cinnamon-1100`
  - `--spectrum-cinnamon-1200`
  - `--spectrum-cinnamon-1300`
  - `--spectrum-cinnamon-1400`
  - `--spectrum-cinnamon-1500`
  - `--spectrum-cinnamon-1600`
  - `--spectrum-background-elevated-color`
  - `--spectrum-background-pasteboard-color`
  - `--spectrum-brown-visual-color`
  - `--spectrum-cinnamon-visual-color`
  - `--spectrum-pink-visual-color`
  - `--spectrum-silver-visual-color`
  - `--spectrum-turquoise-visual-color`
  - `--spectrum-brown-background-color-default`
  - `--spectrum-cinnamon-background-color-default`
  - `--spectrum-pink-background-color-default`
  - `--spectrum-silver-background-color-default`
  - `--spectrum-turquoise-background-color-default`
  - `--spectrum-title-color`
  - `--spectrum-drop-shadow-color-100`
  - `--spectrum-drop-shadow-color-200`
  - `--spectrum-drop-shadow-color-300`
  - `--spectrum-drop-shadow-emphasized-default-color`
  - `--spectrum-drop-shadow-emphasized-hover-color`
  - `--spectrum-drop-shadow-elevated-color`
  - `--spectrum-neutral-subtle-background-color-default`
  - `--spectrum-gray-subtle-background-color-default`
  - `--spectrum-blue-subtle-background-color-default`
  - `--spectrum-green-subtle-background-color-default`
  - `--spectrum-orange-subtle-background-color-default`
  - `--spectrum-red-subtle-background-color-default`
  - `--spectrum-brown-subtle-background-color-default`
  - `--spectrum-cinnamon-subtle-background-color-default`
  - `--spectrum-celery-subtle-background-color-default`
  - `--spectrum-chartreuse-subtle-background-color-default`
  - `--spectrum-cyan-subtle-background-color-default`
  - `--spectrum-fuchsia-subtle-background-color-default`
  - `--spectrum-indigo-subtle-background-color-default`
  - `--spectrum-magenta-subtle-background-color-default`
  - `--spectrum-pink-subtle-background-color-default`
  - `--spectrum-purple-subtle-background-color-default`
  - `--spectrum-seafoam-subtle-background-color-default`
  - `--spectrum-silver-subtle-background-color-default`
  - `--spectrum-turquoise-subtle-background-color-default`
  - `--spectrum-yellow-subtle-background-color-default`
  - `--spectrum-drop-shadow-dragged-color`
  - `--spectrum-static-black-text-color`
  - `--spectrum-static-white-text-color`
  - `--spectrum-track-color`
  - `--spectrum-static-black-track-color`
  - `--spectrum-static-white-track-color`
  - `--spectrum-static-black-track-indicator-color`
  - `--spectrum-static-white-track-indicator-color`

  ### Updated (896)

  ####  Added Properties (112)

  - `--spectrum-heading-sans-serif-font-weight`
    - **value**: `--spectrum-bold-font-weight`
  - `--spectrum-heading-serif-font-weight`
    - **value**: `--spectrum-bold-font-weight`
  - `--spectrum-heading-cjk-font-weight`
    - **value**: `--spectrum-extra-bold-font-weight`
  - `--spectrum-heading-sans-serif-emphasized-font-weight`
    - **value**: `--spectrum-bold-font-weight`
  - `--spectrum-heading-serif-emphasized-font-weight`
    - **value**: `--spectrum-bold-font-weight`
  - `--spectrum-accent-color-100`
    - **value**: `--spectrum-blue-100`
  - `--spectrum-accent-color-200`
    - **value**: `--spectrum-blue-200`
  - `--spectrum-accent-color-300`
    - **value**: `--spectrum-blue-300`
  - `--spectrum-accent-color-400`
    - **value**: `--spectrum-blue-400`
  - `--spectrum-accent-color-500`
    - **value**: `--spectrum-blue-500`
  - `--spectrum-accent-color-600`
    - **value**: `--spectrum-blue-600`
  - `--spectrum-accent-color-700`
    - **value**: `--spectrum-blue-700`
  - `--spectrum-accent-color-800`
    - **value**: `--spectrum-blue-800`
  - `--spectrum-accent-color-900`
    - **value**: `--spectrum-blue-900`
  - `--spectrum-accent-color-1000`
    - **value**: `--spectrum-blue-1000`
  - `--spectrum-accent-color-1100`
    - **value**: `--spectrum-blue-1100`
  - `--spectrum-accent-color-1200`
    - **value**: `--spectrum-blue-1200`
  - `--spectrum-accent-color-1300`
    - **value**: `--spectrum-blue-1300`
  - `--spectrum-accent-color-1400`
    - **value**: `--spectrum-blue-1400`
  - `--spectrum-corner-radius-75`
    - **value**: 4px
  - `--spectrum-corner-radius-100`
    - **value**: 8px
  - `--spectrum-corner-radius-200`
    - **value**: 10px
  - `--spectrum-drop-shadow-x`
    - **value**: 0px
  - `--spectrum-drop-shadow-y`
    - **value**: 1px (desktop)
    - **value**: 2px (mobile)
  - `--spectrum-drop-shadow-blur`
    - **value**: 4px (desktop)
    - **value**: 6px (mobile)
  - `--spectrum-border-width-100`
    - **value**: 1px
  - `--spectrum-checkbox-control-size-small`
    - **value**: 12px (desktop)
    - **value**: 16px (mobile)
  - `--spectrum-checkbox-control-size-medium`
    - **value**: 14px (desktop)
    - **value**: 18px (mobile)
  - `--spectrum-checkbox-control-size-large`
    - **value**: 16px (desktop)
    - **value**: 20px (mobile)
  - `--spectrum-checkbox-control-size-extra-large`
    - **value**: 18px (desktop)
    - **value**: 22px (mobile)
  - `--spectrum-checkbox-top-to-control-small`
    - **value**: 6px (desktop)
    - **value**: 7px (mobile)
  - `--spectrum-checkbox-top-to-control-medium`
    - **value**: 9px (desktop)
    - **value**: 11px (mobile)
  - `--spectrum-checkbox-top-to-control-large`
    - **value**: 12px (desktop)
    - **value**: 15px (mobile)
  - `--spectrum-checkbox-top-to-control-extra-large`
    - **value**: 15px (desktop)
    - **value**: 19px (mobile)
  - `--spectrum-switch-control-width-small`
    - **value**: 23px (desktop)
    - **value**: 32px (mobile)
  - `--spectrum-switch-control-width-medium`
    - **value**: 26px (desktop)
    - **value**: 36px (mobile)
  - `--spectrum-switch-control-width-large`
    - **value**: 29px (desktop)
    - **value**: 41px (mobile)
  - `--spectrum-switch-control-width-extra-large`
    - **value**: 33px (desktop)
    - **value**: 46px (mobile)
  - `--spectrum-switch-control-height-small`
    - **value**: 12px (desktop)
    - **value**: 16px (mobile)
  - `--spectrum-switch-control-height-medium`
    - **value**: 14px (desktop)
    - **value**: 18px (mobile)
  - `--spectrum-switch-control-height-large`
    - **value**: 16px (desktop)
    - **value**: 20px (mobile)
  - `--spectrum-switch-control-height-extra-large`
    - **value**: 18px (desktop)
    - **value**: 22px (mobile)
  - `--spectrum-switch-top-to-control-small`
    - **value**: 6px (desktop)
    - **value**: 7px (mobile)
  - `--spectrum-switch-top-to-control-medium`
    - **value**: 9px (desktop)
    - **value**: 11px (mobile)
  - `--spectrum-switch-top-to-control-large`
    - **value**: 12px (desktop)
    - **value**: 15px (mobile)
  - `--spectrum-switch-top-to-control-extra-large`
    - **value**: 15px (desktop)
    - **value**: 19px (mobile)
  - `--spectrum-radio-button-control-size-small`
    - **value**: 12px (desktop)
    - **value**: 16px (mobile)
  - `--spectrum-radio-button-control-size-medium`
    - **value**: 14px (desktop)
    - **value**: 18px (mobile)
  - `--spectrum-radio-button-control-size-large`
    - **value**: 16px (desktop)
    - **value**: 20px (mobile)
  - `--spectrum-radio-button-control-size-extra-large`
    - **value**: 18px (desktop)
    - **value**: 22px (mobile)
  - `--spectrum-radio-button-top-to-control-small`
    - **value**: 6px (desktop)
    - **value**: 7px (mobile)
  - `--spectrum-radio-button-top-to-control-medium`
    - **value**: 9px (desktop)
    - **value**: 11px (mobile)
  - `--spectrum-radio-button-top-to-control-large`
    - **value**: 12px (desktop)
    - **value**: 15px (mobile)
  - `--spectrum-radio-button-top-to-control-extra-large`
    - **value**: 15px (desktop)
    - **value**: 19px (mobile)
  - `--spectrum-slider-track-thickness`
    - **value**: 2px
  - `--spectrum-slider-control-height-small`
    - **value**: 14px (desktop)
    - **value**: 18px (mobile)
  - `--spectrum-slider-control-height-medium`
    - **value**: 16px (desktop)
    - **value**: 20px (mobile)
  - `--spectrum-slider-control-height-large`
    - **value**: 18px (desktop)
    - **value**: 22px (mobile)
  - `--spectrum-slider-control-height-extra-large`
    - **value**: 20px (desktop)
    - **value**: 26px (mobile)
  - `--spectrum-slider-handle-size-small`
    - **value**: 14px (desktop)
    - **value**: 18px (mobile)
  - `--spectrum-slider-handle-size-medium`
    - **value**: 16px (desktop)
    - **value**: 20px (mobile)
  - `--spectrum-slider-handle-size-large`
    - **value**: 18px (desktop)
    - **value**: 22px (mobile)
  - `--spectrum-slider-handle-size-extra-large`
    - **value**: 20px (desktop)
    - **value**: 26px (mobile)
  - `--spectrum-slider-handle-border-width-down-small`
    - **value**: 5px (desktop)
    - **value**: 7px (mobile)
  - `--spectrum-slider-handle-border-width-down-medium`
    - **value**: 6px (desktop)
    - **value**: 8px (mobile)
  - `--spectrum-slider-handle-border-width-down-large`
    - **value**: 7px (desktop)
    - **value**: 9px (mobile)
  - `--spectrum-slider-handle-border-width-down-extra-large`
    - **value**: 8px (desktop)
    - **value**: 11px (mobile)
  - `--spectrum-slider-handle-gap`
    - **value**: 4px
  - `--spectrum-slider-bottom-to-handle-small`
    - **value**: 5px (desktop)
    - **value**: 6px (mobile)
  - `--spectrum-slider-bottom-to-handle-medium`
    - **value**: 8px (desktop)
    - **value**: 10px (mobile)
  - `--spectrum-slider-bottom-to-handle-large`
    - **value**: 11px (desktop)
    - **value**: 14px (mobile)
  - `--spectrum-slider-bottom-to-handle-extra-large`
    - **value**: 14px (desktop)
    - **value**: 17px (mobile)
  - `--spectrum-picker-border-width`
    - **value**: border-width-100
  - `--spectrum-in-field-button-fill-stacked-inner-border-rounding`
    - **value**: 0px
  - `--spectrum-in-field-button-edge-to-fill`
    - **value**: 0px
  - `--spectrum-in-field-button-stacked-inner-edge-to-fill`
    - **value**: 0px
  - `--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-medium`
    - **value**: 3px
  - `--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-large`
    - **value**: 4px
  - `--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-extra-large`
    - **value**: 5px
  - `--spectrum-in-field-button-inner-edge-to-disclosure-icon-stacked-small`
    - **value**: `--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-small`
  - `--spectrum-in-field-button-inner-edge-to-disclosure-icon-stacked-medium`
    - **value**: `--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-medium`
  - `--spectrum-in-field-button-inner-edge-to-disclosure-icon-stacked-large`
    - **value**: `--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-large`
  - `--spectrum-in-field-button-inner-edge-to-disclosure-icon-stacked-extra-large`
    - **value**: `--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-extra-large`
  - `--spectrum-white`
    - **value**: rgb(255, 255, 255) (light)
    - **value**: rgb(255, 255, 255) (dark)
  - `--spectrum-transparent-white-100`
    - **value**: rgba(255, 255, 255, 0.11) (light)
    - **value**: rgba(255, 255, 255, 0.11) (dark)
  - `--spectrum-transparent-white-200`
    - **value**: rgba(255, 255, 255, 0.14) (light)
    - **value**: rgba(255, 255, 255, 0.14) (dark)
  - `--spectrum-transparent-white-300`
    - **value**: rgba(255, 255, 255, 0.17) (light)
    - **value**: rgba(255, 255, 255, 0.17) (dark)
  - `--spectrum-transparent-white-400`
    - **value**: rgba(255, 255, 255, 0.21) (light)
    - **value**: rgba(255, 255, 255, 0.21) (dark)
  - `--spectrum-transparent-white-500`
    - **value**: rgba(255, 255, 255, 0.39) (light)
    - **value**: rgba(255, 255, 255, 0.39) (dark)
  - `--spectrum-transparent-white-600`
    - **value**: rgba(255, 255, 255, 0.51) (light)
    - **value**: rgba(255, 255, 255, 0.51) (dark)
  - `--spectrum-transparent-white-700`
    - **value**: rgba(255, 255, 255, 0.66) (light)
    - **value**: rgba(255, 255, 255, 0.66) (dark)
  - `--spectrum-transparent-white-800`
    - **value**: rgba(255, 255, 255, 0.85) (light)
    - **value**: rgba(255, 255, 255, 0.85) (dark)
  - `--spectrum-transparent-white-900`
    - **value**: rgba(255, 255, 255, 0.94) (light)
    - **value**: rgba(255, 255, 255, 0.94) (dark)
  - `--spectrum-transparent-black-100`
    - **value**: rgba(0, 0, 0, 0.09) (light)
    - **value**: rgba(0, 0, 0, 0.09) (dark)
  - `--spectrum-transparent-black-200`
    - **value**: rgba(0, 0, 0, 0.12) (light)
    - **value**: rgba(0, 0, 0, 0.12) (dark)
  - `--spectrum-transparent-black-300`
    - **value**: rgba(0, 0, 0, 0.15) (light)
    - **value**: rgba(0, 0, 0, 0.15) (dark)
  - `--spectrum-transparent-black-400`
    - **value**: rgba(0, 0, 0, 0.22) (light)
    - **value**: rgba(0, 0, 0, 0.22) (dark)
  - `--spectrum-transparent-black-500`
    - **value**: rgba(0, 0, 0, 0.44) (light)
    - **value**: rgba(0, 0, 0, 0.44) (dark)
  - `--spectrum-transparent-black-600`
    - **value**: rgba(0, 0, 0, 0.56) (light)
    - **value**: rgba(0, 0, 0, 0.56) (dark)
  - `--spectrum-transparent-black-700`
    - **value**: rgba(0, 0, 0, 0.69) (light)
    - **value**: rgba(0, 0, 0, 0.69) (dark)
  - `--spectrum-transparent-black-800`
    - **value**: rgba(0, 0, 0, 0.84) (light)
    - **value**: rgba(0, 0, 0, 0.84) (dark)
  - `--spectrum-transparent-black-900`
    - **value**: rgba(0, 0, 0, 0.93) (light)
    - **value**: rgba(0, 0, 0, 0.93) (dark)
  - `--spectrum-background-base-color`
    - **value**: `--spectrum-gray-25`
  - `--spectrum-background-layer-1-color`
    - **value**: `--spectrum-gray-50`
  - `--spectrum-neutral-background-color-default`
    - **value**: `--spectrum-gray-800`
  - `--spectrum-neutral-background-color-hover`
    - **value**: `--spectrum-gray-900`
  - `--spectrum-neutral-background-color-down`
    - **value**: `--spectrum-gray-900`
  - `--spectrum-neutral-background-color-key-focus`
    - **value**: `--spectrum-gray-900`
  - `--spectrum-neutral-background-color-selected-default`
    - **value**: `--spectrum-gray-800`
  - `--spectrum-neutral-background-color-selected-hover`
    - **value**: `--spectrum-gray-900`
  - `--spectrum-neutral-background-color-selected-down`
    - **value**: `--spectrum-gray-900`
  - `--spectrum-neutral-background-color-selected-key-focus`
    - **value**: `--spectrum-gray-900`

  #### Deleted Properties (368)

  - `--spectrum-heading-sans-serif-font-weight`
    - **value**: `--spectrum-bold-font-weight` (spectrum)
    - **value**: `--spectrum-black-font-weight` (express) **deprecated**
  - `--spectrum-heading-serif-font-weight`
    - **value**: `--spectrum-bold-font-weight` (spectrum)
    - **value**: `--spectrum-black-font-weight` (express) **deprecated**
  - `--spectrum-heading-cjk-font-weight`
    - **value**: `--spectrum-extra-bold-font-weight` (spectrum)
    - **value**: `--spectrum-black-font-weight` (express) **deprecated**
  - `--spectrum-heading-sans-serif-emphasized-font-weight`
    - **value**: `--spectrum-bold-font-weight` (spectrum)
    - **value**: `--spectrum-black-font-weight` (express) **deprecated**
  - `--spectrum-heading-serif-emphasized-font-weight`
    - **value**: `--spectrum-bold-font-weight` (spectrum)
    - **value**: `--spectrum-black-font-weight` (express) **deprecated**
  - `--spectrum-accent-color-100`
    - **value**: `--spectrum-blue-100` (spectrum)
    - **value**: `--spectrum-indigo-100` (express) **deprecated**
  - `--spectrum-accent-color-200`
    - **value**: `--spectrum-blue-200` (spectrum)
    - **value**: `--spectrum-indigo-200` (express) **deprecated**
  - `--spectrum-accent-color-300`
    - **value**: `--spectrum-blue-300` (spectrum)
    - **value**: `--spectrum-indigo-300` (express) **deprecated**
  - `--spectrum-accent-color-400`
    - **value**: `--spectrum-blue-400` (spectrum)
    - **value**: `--spectrum-indigo-400` (express) **deprecated**
  - `--spectrum-accent-color-500`
    - **value**: `--spectrum-blue-500` (spectrum)
    - **value**: `--spectrum-indigo-500` (express) **deprecated**
  - `--spectrum-accent-color-600`
    - **value**: `--spectrum-blue-600` (spectrum)
    - **value**: `--spectrum-indigo-600` (express) **deprecated**
  - `--spectrum-accent-color-700`
    - **value**: `--spectrum-blue-700` (spectrum)
    - **value**: `--spectrum-indigo-700` (express) **deprecated**
  - `--spectrum-accent-color-800`
    - **value**: `--spectrum-blue-800` (spectrum)
    - **value**: `--spectrum-indigo-800` (express) **deprecated**
  - `--spectrum-accent-color-900`
    - **value**: `--spectrum-blue-900` (spectrum)
    - **value**: `--spectrum-indigo-900` (express) **deprecated**
  - `--spectrum-accent-color-1000`
    - **value**: `--spectrum-blue-1000` (spectrum)
    - **value**: `--spectrum-indigo-1000` (express) **deprecated**
  - `--spectrum-accent-color-1100`
    - **value**: `--spectrum-blue-1100` (spectrum)
    - **value**: `--spectrum-indigo-1100` (express) **deprecated**
  - `--spectrum-accent-color-1200`
    - **value**: `--spectrum-blue-1200` (spectrum)
    - **value**: `--spectrum-indigo-1200` (express) **deprecated**
  - `--spectrum-accent-color-1300`
    - **value**: `--spectrum-blue-1300` (spectrum)
    - **value**: `--spectrum-indigo-1300` (express) **deprecated**
  - `--spectrum-accent-color-1400`
    - **value**: `--spectrum-blue-1400` (spectrum)
    - **value**: `--spectrum-indigo-1400` (express) **deprecated**
  - `--spectrum-corner-radius-75`
    - **value**: 2px (spectrum)
    - **value**: 3px (express | desktop) **deprecated**
    - **value**: 4px (express | mobile) **deprecated**
  - `--spectrum-corner-radius-100`
    - **value**: 4px (spectrum | desktop)
    - **value**: 5px (spectrum | mobile)
    - **value**: 6px (express | desktop) **deprecated**
    - **value**: 8px (express | mobile) **deprecated**
  - `--spectrum-corner-radius-200`
    - **value**: 8px (spectrum | desktop)
    - **value**: 10px (spectrum | mobile)
    - **value**: 12px (express | desktop) **deprecated**
    - **value**: 16px (express | mobile) **deprecated**
  - `--spectrum-drop-shadow-x`
    - **value**: 0px (spectrum)
    - **value**: 0px (express | desktop) **deprecated**
    - **value**: 0px (express | mobile) **deprecated**
  - `--spectrum-drop-shadow-y`
    - **value**: 1px (spectrum | desktop)
    - **value**: 2px (spectrum | mobile)
    - **value**: 4px (express | desktop) **deprecated**
    - **value**: 4px (express | mobile) **deprecated**
  - `--spectrum-drop-shadow-blur`
    - **value**: 4px (spectrum | desktop)
    - **value**: 6px (spectrum | mobile)
    - **value**: 16px (express | desktop) **deprecated**
    - **value**: 16px (express | mobile) **deprecated**
  - `--spectrum-border-width-100`
    - **value**: 1px (spectrum)
    - **value**: 2px (express) **deprecated**
  - `--spectrum-checkbox-control-size-small`
    - **value**: 12px (spectrum | desktop)
    - **value**: 16px (spectrum | mobile)
    - **value**: 14px (express | desktop) **deprecated**
    - **value**: 18px (express | mobile) **deprecated**
  - `--spectrum-checkbox-control-size-medium`
    - **value**: 14px (spectrum | desktop)
    - **value**: 18px (spectrum | mobile)
    - **value**: 16px (express | desktop) **deprecated**
    - **value**: 20px (express | mobile) **deprecated**
  - `--spectrum-checkbox-control-size-large`
    - **value**: 16px (spectrum | desktop)
    - **value**: 20px (spectrum | mobile)
    - **value**: 18px (express | desktop) **deprecated**
    - **value**: 22px (express | mobile) **deprecated**
  - `--spectrum-checkbox-control-size-extra-large`
    - **value**: 18px (spectrum | desktop)
    - **value**: 22px (spectrum | mobile)
    - **value**: 20px (express | desktop) **deprecated**
    - **value**: 26px (express | mobile) **deprecated**
  - `--spectrum-checkbox-top-to-control-small`
    - **value**: 6px (spectrum | desktop)
    - **value**: 7px (spectrum | mobile)
    - **value**: 5px (express | desktop) **deprecated**
    - **value**: 6px (express | mobile) **deprecated**
  - `--spectrum-checkbox-top-to-control-medium`
    - **value**: 9px (spectrum | desktop)
    - **value**: 11px (spectrum | mobile)
    - **value**: 8px (express | desktop) **deprecated**
    - **value**: 10px (express | mobile) **deprecated**
  - `--spectrum-checkbox-top-to-control-large`
    - **value**: 12px (spectrum | desktop)
    - **value**: 15px (spectrum | mobile)
    - **value**: 11px (express | desktop) **deprecated**
    - **value**: 14px (express | mobile) **deprecated**
  - `--spectrum-checkbox-top-to-control-extra-large`
    - **value**: 15px (spectrum | desktop)
    - **value**: 19px (spectrum | mobile)
    - **value**: 14px (express | desktop) **deprecated**
    - **value**: 17px (express | mobile) **deprecated**
  - `--spectrum-switch-control-width-small`
    - **value**: 23px (spectrum | desktop)
    - **value**: 32px (spectrum | mobile)
    - **value**: 25px (express | desktop) **deprecated**
    - **value**: 32px (express | mobile) **deprecated**
  - `--spectrum-switch-control-width-medium`
    - **value**: 26px (spectrum | desktop)
    - **value**: 36px (spectrum | mobile)
    - **value**: 28px (express | desktop) **deprecated**
    - **value**: 36px (express | mobile) **deprecated**
  - `--spectrum-switch-control-width-large`
    - **value**: 29px (spectrum | desktop)
    - **value**: 41px (spectrum | mobile)
    - **value**: 32px (express | desktop) **deprecated**
    - **value**: 41px (express | mobile) **deprecated**
  - `--spectrum-switch-control-width-extra-large`
    - **value**: 33px (spectrum | desktop)
    - **value**: 46px (spectrum | mobile)
    - **value**: 35px (express | desktop) **deprecated**
    - **value**: 46px (express | mobile) **deprecated**
  - `--spectrum-switch-control-height-small`
    - **value**: 12px (spectrum | desktop)
    - **value**: 16px (spectrum | mobile)
    - **value**: 14px (express | desktop) **deprecated**
    - **value**: 18px (express | mobile) **deprecated**
  - `--spectrum-switch-control-height-medium`
    - **value**: 14px (spectrum | desktop)
    - **value**: 18px (spectrum | mobile)
    - **value**: 16px (express | desktop) **deprecated**
    - **value**: 20px (express | mobile) **deprecated**
  - `--spectrum-switch-control-height-large`
    - **value**: 16px (spectrum | desktop)
    - **value**: 20px (spectrum | mobile)
    - **value**: 18px (express | desktop) **deprecated**
    - **value**: 22px (express | mobile) **deprecated**
  - `--spectrum-switch-control-height-extra-large`
    - **value**: 18px (spectrum | desktop)
    - **value**: 22px (spectrum | mobile)
    - **value**: 20px (express | desktop) **deprecated**
    - **value**: 26px (express | mobile) **deprecated**
  - `--spectrum-switch-top-to-control-small`
    - **value**: 6px (spectrum | desktop)
    - **value**: 7px (spectrum | mobile)
    - **value**: 5px (express | desktop) **deprecated**
    - **value**: 6px (express | mobile) **deprecated**
  - `--spectrum-switch-top-to-control-medium`
    - **value**: 9px (spectrum | desktop)
    - **value**: 11px (spectrum | mobile)
    - **value**: 8px (express | desktop) **deprecated**
    - **value**: 10px (express | mobile) **deprecated**
  - `--spectrum-switch-top-to-control-large`
    - **value**: 12px (spectrum | desktop)
    - **value**: 15px (spectrum | mobile)
    - **value**: 11px (express | desktop) **deprecated**
    - **value**: 14px (express | mobile) **deprecated**
  - `--spectrum-switch-top-to-control-extra-large`
    - **value**: 15px (spectrum | desktop)
    - **value**: 19px (spectrum | mobile)
    - **value**: 14px (express | desktop) **deprecated**
    - **value**: 17px (express | mobile) **deprecated**
  - `--spectrum-radio-button-control-size-small`
    - **value**: 12px (spectrum | desktop)
    - **value**: 16px (spectrum | mobile)
    - **value**: 14px (express | desktop) **deprecated**
    - **value**: 18px (express | mobile) **deprecated**
  - `--spectrum-radio-button-control-size-medium`
    - **value**: 14px (spectrum | desktop)
    - **value**: 18px (spectrum | mobile)
    - **value**: 16px (express | desktop) **deprecated**
    - **value**: 20px (express | mobile) **deprecated**
  - `--spectrum-radio-button-control-size-large`
    - **value**: 16px (spectrum | desktop)
    - **value**: 20px (spectrum | mobile)
    - **value**: 18px (express | desktop) **deprecated**
    - **value**: 22px (express | mobile) **deprecated**
  - `--spectrum-radio-button-control-size-extra-large`
    - **value**: 18px (spectrum | desktop)
    - **value**: 22px (spectrum | mobile)
    - **value**: 20px (express | desktop) **deprecated**
    - **value**: 26px (express | mobile) **deprecated**
  - `--spectrum-radio-button-top-to-control-small`
    - **value**: 6px (spectrum | desktop)
    - **value**: 7px (spectrum | mobile)
    - **value**: 5px (express | desktop) **deprecated**
    - **value**: 6px (express | mobile) **deprecated**
  - `--spectrum-radio-button-top-to-control-medium`
    - **value**: 9px (spectrum | desktop)
    - **value**: 11px (spectrum | mobile)
    - **value**: 8px (express | desktop) **deprecated**
    - **value**: 10px (express | mobile) **deprecated**
  - `--spectrum-radio-button-top-to-control-large`
    - **value**: 12px (spectrum | desktop)
    - **value**: 15px (spectrum | mobile)
    - **value**: 11px (express | desktop) **deprecated**
    - **value**: 14px (express | mobile) **deprecated**
  - `--spectrum-radio-button-top-to-control-extra-large`
    - **value**: 15px (spectrum | desktop)
    - **value**: 19px (spectrum | mobile)
    - **value**: 14px (express | desktop) **deprecated**
    - **value**: 17px (express | mobile) **deprecated**
  - `--spectrum-slider-track-thickness`
    - **value**: 2px (spectrum)
    - **value**: 4px (express) **deprecated**
  - `--spectrum-slider-control-height-small`
    - **value**: 14px (spectrum | desktop)
    - **value**: 18px (spectrum | mobile)
    - **value**: 18px (express | desktop) **deprecated**
    - **value**: 22px (express | mobile) **deprecated**
  - `--spectrum-slider-control-height-medium`
    - **value**: 16px (spectrum | desktop)
    - **value**: 20px (spectrum | mobile)
    - **value**: 20px (express | desktop) **deprecated**
    - **value**: 24px (express | mobile) **deprecated**
  - `--spectrum-slider-control-height-large`
    - **value**: 18px (spectrum | desktop)
    - **value**: 22px (spectrum | mobile)
    - **value**: 22px (express | desktop) **deprecated**
    - **value**: 28px (express | mobile) **deprecated**
  - `--spectrum-slider-control-height-extra-large`
    - **value**: 20px (spectrum | desktop)
    - **value**: 26px (spectrum | mobile)
    - **value**: 24px (express | desktop) **deprecated**
    - **value**: 30px (express | mobile) **deprecated**
  - `--spectrum-slider-handle-size-small`
    - **value**: 14px (spectrum | desktop)
    - **value**: 18px (spectrum | mobile)
    - **value**: 18px (express | desktop) **deprecated**
    - **value**: 22px (express | mobile) **deprecated**
  - `--spectrum-slider-handle-size-medium`
    - **value**: 16px (spectrum | desktop)
    - **value**: 20px (spectrum | mobile)
    - **value**: 20px (express | desktop) **deprecated**
    - **value**: 24px (express | mobile) **deprecated**
  - `--spectrum-slider-handle-size-large`
    - **value**: 18px (spectrum | desktop)
    - **value**: 22px (spectrum | mobile)
    - **value**: 22px (express | desktop) **deprecated**
    - **value**: 28px (express | mobile) **deprecated**
  - `--spectrum-slider-handle-size-extra-large`
    - **value**: 20px (spectrum | desktop)
    - **value**: 26px (spectrum | mobile)
    - **value**: 24px (express | desktop) **deprecated**
    - **value**: 30px (express | mobile) **deprecated**
  - `--spectrum-slider-handle-border-width-down-small`
    - **value**: 5px (spectrum | desktop)
    - **value**: 7px (spectrum | mobile)
    - **value**: `--spectrum-border-width-200` (express | desktop) **deprecated**
    - **value**: `--spectrum-border-width-200` (express | mobile) **deprecated**
  - `--spectrum-slider-handle-border-width-down-medium`
    - **value**: 6px (spectrum | desktop)
    - **value**: 8px (spectrum | mobile)
    - **value**: `--spectrum-border-width-200` (express | desktop) **deprecated**
    - **value**: `--spectrum-border-width-200` (express | mobile) **deprecated**
  - `--spectrum-slider-handle-border-width-down-large`
    - **value**: 7px (spectrum | desktop)
    - **value**: 9px (spectrum | mobile)
    - **value**: `--spectrum-border-width-200` (express | desktop) **deprecated**
    - **value**: `--spectrum-border-width-200` (express | mobile) **deprecated**
  - `--spectrum-slider-handle-border-width-down-extra-large`
    - **value**: 8px (spectrum | desktop)
    - **value**: 11px (spectrum | mobile)
    - **value**: `--spectrum-border-width-200` (express | desktop) **deprecated**
    - **value**: `--spectrum-border-width-200` (express | mobile) **deprecated**
  - `--spectrum-slider-handle-gap`
    - **value**: 4px (spectrum)
    - **value**: 0px (express) **deprecated**
  - `--spectrum-slider-bottom-to-handle-small`
    - **value**: 5px (spectrum | desktop)
    - **value**: 6px (spectrum | mobile)
    - **value**: 3px (express | desktop) **deprecated**
    - **value**: 4px (express | mobile) **deprecated**
  - `--spectrum-slider-bottom-to-handle-medium`
    - **value**: 8px (spectrum | desktop)
    - **value**: 10px (spectrum | mobile)
    - **value**: 6px (express | desktop) **deprecated**
    - **value**: 8px (express | mobile) **deprecated**
  - `--spectrum-slider-bottom-to-handle-large`
    - **value**: 11px (spectrum | desktop)
    - **value**: 14px (spectrum | mobile)
    - **value**: 9px (express | desktop) **deprecated**
    - **value**: 12px (express | mobile) **deprecated**
  - `--spectrum-slider-bottom-to-handle-extra-large`
    - **value**: 14px (spectrum | desktop)
    - **value**: 17px (spectrum | mobile)
    - **value**: 12px (express | desktop) **deprecated**
    - **value**: 15px (express | mobile) **deprecated**
  - `--spectrum-picker-border-width`
    - **value**: `--spectrum-border-width-100` (spectrum)
    - **value**: 0 (express)
  - `--spectrum-in-field-button-fill-stacked-inner-border-rounding`
    - **value**: 0px (spectrum)
    - **value**: 1px (express)
  - `--spectrum-in-field-button-edge-to-fill`
    - **value**: 0px (spectrum)
    - **value**: 4px (express)
  - `--spectrum-in-field-button-stacked-inner-edge-to-fill`
    - **value**: 0px (spectrum)
    - **value**: 1px (express)
  - `--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-medium`
    - **value**: 3px (spectrum)
    - **value**: 5px (express)
  - `--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-large`
    - **value**: 4px (spectrum)
    - **value**: 7px (express)
  - `--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-extra-large`
    - **value**: 5px (spectrum)
    - **value**: 8px (express)
  - `--spectrum-in-field-button-inner-edge-to-disclosure-icon-stacked-small`
    - **value**: `--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-small` (spectrum)
    - **value**: 1px (express)
  - `--spectrum-in-field-button-inner-edge-to-disclosure-icon-stacked-medium`
    - **value**: `--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-medium` (spectrum)
    - **value**: 1px (express)
  - `--spectrum-in-field-button-inner-edge-to-disclosure-icon-stacked-large`
    - **value**: `--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-large` (spectrum)
    - **value**: 3px (express)
  - `--spectrum-in-field-button-inner-edge-to-disclosure-icon-stacked-extra-large`
    - **value**: `--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-extra-large` (spectrum)
    - **value**: 4px (express)
  - `--spectrum-icon-color-blue-primary-default`
    - **value**: `--spectrum-blue-800` (darkest)
  - `--spectrum-icon-color-green-primary-default`
    - **value**: `--spectrum-green-800` (darkest)
  - `--spectrum-icon-color-red-primary-default`
    - **value**: `--spectrum-red-700` (darkest)
  - `--spectrum-icon-color-yellow-primary-default`
    - **value**: `--spectrum-yellow-1000` (darkest)
  - `--spectrum-white`
    - **value**: rgb(255, 255, 255)
  - `--spectrum-transparent-white-100`
    - **value**: rgba(255, 255, 255, 0)
  - `--spectrum-transparent-white-200`
    - **value**: rgba(255, 255, 255, 0.1)
  - `--spectrum-transparent-white-300`
    - **value**: rgba(255, 255, 255, 0.25)
  - `--spectrum-transparent-white-400`
    - **value**: rgba(255, 255, 255, 0.4)
  - `--spectrum-transparent-white-500`
    - **value**: rgba(255, 255, 255, 0.55)
  - `--spectrum-transparent-white-600`
    - **value**: rgba(255, 255, 255, 0.7)
  - `--spectrum-transparent-white-700`
    - **value**: rgba(255, 255, 255, 0.8)
  - `--spectrum-transparent-white-800`
    - **value**: rgba(255, 255, 255, 0.9)
  - `--spectrum-transparent-white-900`
    - **value**: rgb(255, 255, 255)
  - `--spectrum-transparent-black-100`
    - **value**: rgba(0, 0, 0, 0)
  - `--spectrum-transparent-black-200`
    - **value**: rgba(0, 0, 0, 0.1)
  - `--spectrum-transparent-black-300`
    - **value**: rgba(0, 0, 0, 0.25)
  - `--spectrum-transparent-black-400`
    - **value**: rgba(0, 0, 0, 0.4)
  - `--spectrum-transparent-black-500`
    - **value**: rgba(0, 0, 0, 0.55)
  - `--spectrum-transparent-black-600`
    - **value**: rgba(0, 0, 0, 0.7)
  - `--spectrum-transparent-black-700`
    - **value**: rgba(0, 0, 0, 0.8)
  - `--spectrum-transparent-black-800`
    - **value**: rgba(0, 0, 0, 0.9)
  - `--spectrum-transparent-black-900`
    - **value**: rgb(0, 0, 0)
  - `--spectrum-gray-50`
    - **value**: rgb(0, 0, 0) (darkest)
  - `--spectrum-gray-75`
    - **value**: rgb(14, 14, 14) (darkest)
  - `--spectrum-gray-100`
    - **value**: rgb(29, 29, 29) (darkest)
  - `--spectrum-gray-200`
    - **value**: rgb(48, 48, 48) (darkest)
  - `--spectrum-gray-300`
    - **value**: rgb(75, 75, 75) (darkest)
  - `--spectrum-gray-400`
    - **value**: rgb(106, 106, 106) (darkest)
  - `--spectrum-gray-500`
    - **value**: rgb(141, 141, 141) (darkest)
  - `--spectrum-gray-600`
    - **value**: rgb(176, 176, 176) (darkest)
  - `--spectrum-gray-700`
    - **value**: rgb(208, 208, 208) (darkest)
  - `--spectrum-gray-800`
    - **value**: rgb(235, 235, 235) (darkest)
  - `--spectrum-gray-900`
    - **value**: rgb(255, 255, 255) (darkest)
  - `--spectrum-blue-100`
    - **value**: rgb(0, 38, 81) (darkest)
  - `--spectrum-blue-200`
    - **value**: rgb(0, 50, 106) (darkest)
  - `--spectrum-blue-300`
    - **value**: rgb(0, 64, 135) (darkest)
  - `--spectrum-blue-400`
    - **value**: rgb(0, 78, 166) (darkest)
  - `--spectrum-blue-500`
    - **value**: rgb(0, 92, 200) (darkest)
  - `--spectrum-blue-600`
    - **value**: rgb(6, 108, 231) (darkest)
  - `--spectrum-blue-700`
    - **value**: rgb(29, 128, 245) (darkest)
  - `--spectrum-blue-800`
    - **value**: rgb(64, 150, 243) (darkest)
  - `--spectrum-blue-900`
    - **value**: rgb(94, 170, 247) (darkest)
  - `--spectrum-blue-1000`
    - **value**: rgb(124, 189, 250) (darkest)
  - `--spectrum-blue-1100`
    - **value**: rgb(152, 206, 253) (darkest)
  - `--spectrum-blue-1200`
    - **value**: rgb(179, 222, 254) (darkest)
  - `--spectrum-blue-1300`
    - **value**: rgb(206, 234, 255) (darkest)
  - `--spectrum-blue-1400`
    - **value**: rgb(227, 243, 255) (darkest)
  - `--spectrum-red-100`
    - **value**: rgb(87, 0, 0) (darkest)
  - `--spectrum-red-200`
    - **value**: rgb(110, 0, 0) (darkest)
  - `--spectrum-red-300`
    - **value**: rgb(138, 0, 0) (darkest)
  - `--spectrum-red-400`
    - **value**: rgb(167, 0, 0) (darkest)
  - `--spectrum-red-500`
    - **value**: rgb(196, 7, 6) (darkest)
  - `--spectrum-red-600`
    - **value**: rgb(221, 33, 24) (darkest)
  - `--spectrum-red-700`
    - **value**: rgb(238, 67, 49) (darkest)
  - `--spectrum-red-800`
    - **value**: rgb(249, 99, 76) (darkest)
  - `--spectrum-red-900`
    - **value**: rgb(255, 129, 107) (darkest)
  - `--spectrum-red-1000`
    - **value**: rgb(255, 158, 140) (darkest)
  - `--spectrum-red-1100`
    - **value**: rgb(255, 183, 169) (darkest)
  - `--spectrum-red-1200`
    - **value**: rgb(255, 205, 195) (darkest)
  - `--spectrum-red-1300`
    - **value**: rgb(255, 223, 217) (darkest)
  - `--spectrum-red-1400`
    - **value**: rgb(255, 237, 234) (darkest)
  - `--spectrum-orange-100`
    - **value**: rgb(72, 24, 1) (darkest)
  - `--spectrum-orange-200`
    - **value**: rgb(92, 32, 0) (darkest)
  - `--spectrum-orange-300`
    - **value**: rgb(115, 43, 0) (darkest)
  - `--spectrum-orange-400`
    - **value**: rgb(138, 55, 0) (darkest)
  - `--spectrum-orange-500`
    - **value**: rgb(162, 68, 0) (darkest)
  - `--spectrum-orange-600`
    - **value**: rgb(186, 82, 0) (darkest)
  - `--spectrum-orange-700`
    - **value**: rgb(210, 98, 0) (darkest)
  - `--spectrum-orange-800`
    - **value**: rgb(232, 116, 0) (darkest)
  - `--spectrum-orange-900`
    - **value**: rgb(249, 137, 23) (darkest)
  - `--spectrum-orange-1000`
    - **value**: rgb(255, 162, 59) (darkest)
  - `--spectrum-orange-1100`
    - **value**: rgb(255, 188, 102) (darkest)
  - `--spectrum-orange-1200`
    - **value**: rgb(253, 210, 145) (darkest)
  - `--spectrum-orange-1300`
    - **value**: rgb(255, 226, 181) (darkest)
  - `--spectrum-orange-1400`
    - **value**: rgb(255, 239, 213) (darkest)
  - `--spectrum-yellow-100`
    - **value**: rgb(53, 36, 0) (darkest)
  - `--spectrum-yellow-200`
    - **value**: rgb(68, 47, 0) (darkest)
  - `--spectrum-yellow-300`
    - **value**: rgb(86, 62, 0) (darkest)
  - `--spectrum-yellow-400`
    - **value**: rgb(103, 77, 0) (darkest)
  - `--spectrum-yellow-500`
    - **value**: rgb(122, 92, 0) (darkest)
  - `--spectrum-yellow-600`
    - **value**: rgb(141, 108, 0) (darkest)
  - `--spectrum-yellow-700`
    - **value**: rgb(161, 126, 0) (darkest)
  - `--spectrum-yellow-800`
    - **value**: rgb(180, 144, 0) (darkest)
  - `--spectrum-yellow-900`
    - **value**: rgb(199, 162, 0) (darkest)
  - `--spectrum-yellow-1000`
    - **value**: rgb(216, 181, 0) (darkest)
  - `--spectrum-yellow-1100`
    - **value**: rgb(233, 199, 0) (darkest)
  - `--spectrum-yellow-1200`
    - **value**: rgb(247, 216, 4) (darkest)
  - `--spectrum-yellow-1300`
    - **value**: rgb(249, 233, 97) (darkest)
  - `--spectrum-yellow-1400`
    - **value**: rgb(252, 243, 170) (darkest)
  - `--spectrum-chartreuse-100`
    - **value**: rgb(32, 43, 0) (darkest)
  - `--spectrum-chartreuse-200`
    - **value**: rgb(42, 56, 0) (darkest)
  - `--spectrum-chartreuse-300`
    - **value**: rgb(54, 72, 0) (darkest)
  - `--spectrum-chartreuse-400`
    - **value**: rgb(66, 88, 0) (darkest)
  - `--spectrum-chartreuse-500`
    - **value**: rgb(79, 105, 0) (darkest)
  - `--spectrum-chartreuse-600`
    - **value**: rgb(93, 123, 0) (darkest)
  - `--spectrum-chartreuse-700`
    - **value**: rgb(107, 142, 0) (darkest)
  - `--spectrum-chartreuse-800`
    - **value**: rgb(122, 161, 0) (darkest)
  - `--spectrum-chartreuse-900`
    - **value**: rgb(138, 180, 3) (darkest)
  - `--spectrum-chartreuse-1000`
    - **value**: rgb(154, 198, 11) (darkest)
  - `--spectrum-chartreuse-1100`
    - **value**: rgb(170, 216, 22) (darkest)
  - `--spectrum-chartreuse-1200`
    - **value**: rgb(187, 232, 41) (darkest)
  - `--spectrum-chartreuse-1300`
    - **value**: rgb(205, 246, 72) (darkest)
  - `--spectrum-chartreuse-1400`
    - **value**: rgb(225, 253, 132) (darkest)
  - `--spectrum-celery-100`
    - **value**: rgb(0, 47, 7) (darkest)
  - `--spectrum-celery-200`
    - **value**: rgb(0, 61, 9) (darkest)
  - `--spectrum-celery-300`
    - **value**: rgb(0, 77, 12) (darkest)
  - `--spectrum-celery-400`
    - **value**: rgb(0, 95, 15) (darkest)
  - `--spectrum-celery-500`
    - **value**: rgb(0, 113, 15) (darkest)
  - `--spectrum-celery-600`
    - **value**: rgb(0, 132, 15) (darkest)
  - `--spectrum-celery-700`
    - **value**: rgb(0, 151, 20) (darkest)
  - `--spectrum-celery-800`
    - **value**: rgb(13, 171, 37) (darkest)
  - `--spectrum-celery-900`
    - **value**: rgb(45, 191, 58) (darkest)
  - `--spectrum-celery-1000`
    - **value**: rgb(80, 208, 82) (darkest)
  - `--spectrum-celery-1100`
    - **value**: rgb(115, 224, 107) (darkest)
  - `--spectrum-celery-1200`
    - **value**: rgb(147, 237, 131) (darkest)
  - `--spectrum-celery-1300`
    - **value**: rgb(180, 247, 162) (darkest)
  - `--spectrum-celery-1400`
    - **value**: rgb(213, 252, 202) (darkest)
  - `--spectrum-green-100`
    - **value**: rgb(10, 44, 28) (darkest)
  - `--spectrum-green-200`
    - **value**: rgb(7, 59, 36) (darkest)
  - `--spectrum-green-300`
    - **value**: rgb(0, 76, 46) (darkest)
  - `--spectrum-green-400`
    - **value**: rgb(0, 93, 57) (darkest)
  - `--spectrum-green-500`
    - **value**: rgb(0, 111, 69) (darkest)
  - `--spectrum-green-600`
    - **value**: rgb(0, 130, 82) (darkest)
  - `--spectrum-green-700`
    - **value**: rgb(0, 149, 98) (darkest)
  - `--spectrum-green-800`
    - **value**: rgb(28, 168, 114) (darkest)
  - `--spectrum-green-900`
    - **value**: rgb(52, 187, 132) (darkest)
  - `--spectrum-green-1000`
    - **value**: rgb(75, 205, 149) (darkest)
  - `--spectrum-green-1100`
    - **value**: rgb(103, 222, 168) (darkest)
  - `--spectrum-green-1200`
    - **value**: rgb(137, 236, 188) (darkest)
  - `--spectrum-green-1300`
    - **value**: rgb(177, 244, 209) (darkest)
  - `--spectrum-green-1400`
    - **value**: rgb(214, 249, 228) (darkest)
  - `--spectrum-seafoam-100`
    - **value**: rgb(18, 43, 42) (darkest)
  - `--spectrum-seafoam-200`
    - **value**: rgb(19, 57, 55) (darkest)
  - `--spectrum-seafoam-300`
    - **value**: rgb(16, 73, 70) (darkest)
  - `--spectrum-seafoam-400`
    - **value**: rgb(3, 91, 88) (darkest)
  - `--spectrum-seafoam-500`
    - **value**: rgb(0, 108, 104) (darkest)
  - `--spectrum-seafoam-600`
    - **value**: rgb(0, 127, 121) (darkest)
  - `--spectrum-seafoam-700`
    - **value**: rgb(0, 146, 140) (darkest)
  - `--spectrum-seafoam-800`
    - **value**: rgb(0, 165, 159) (darkest)
  - `--spectrum-seafoam-900`
    - **value**: rgb(26, 185, 178) (darkest)
  - `--spectrum-seafoam-1000`
    - **value**: rgb(66, 202, 195) (darkest)
  - `--spectrum-seafoam-1100`
    - **value**: rgb(102, 218, 211) (darkest)
  - `--spectrum-seafoam-1200`
    - **value**: rgb(139, 232, 225) (darkest)
  - `--spectrum-seafoam-1300`
    - **value**: rgb(179, 242, 237) (darkest)
  - `--spectrum-seafoam-1400`
    - **value**: rgb(215, 248, 244) (darkest)
  - `--spectrum-cyan-100`
    - **value**: rgb(0, 41, 68) (darkest)
  - `--spectrum-cyan-200`
    - **value**: rgb(0, 54, 88) (darkest)
  - `--spectrum-cyan-300`
    - **value**: rgb(0, 69, 108) (darkest)
  - `--spectrum-cyan-400`
    - **value**: rgb(0, 86, 128) (darkest)
  - `--spectrum-cyan-500`
    - **value**: rgb(0, 103, 147) (darkest)
  - `--spectrum-cyan-600`
    - **value**: rgb(0, 121, 167) (darkest)
  - `--spectrum-cyan-700`
    - **value**: rgb(0, 140, 186) (darkest)
  - `--spectrum-cyan-800`
    - **value**: rgb(4, 160, 205) (darkest)
  - `--spectrum-cyan-900`
    - **value**: rgb(23, 180, 221) (darkest)
  - `--spectrum-cyan-1000`
    - **value**: rgb(57, 199, 234) (darkest)
  - `--spectrum-cyan-1100`
    - **value**: rgb(96, 216, 243) (darkest)
  - `--spectrum-cyan-1200`
    - **value**: rgb(134, 230, 250) (darkest)
  - `--spectrum-cyan-1300`
    - **value**: rgb(170, 242, 255) (darkest)
  - `--spectrum-cyan-1400`
    - **value**: rgb(206, 249, 255) (darkest)
  - `--spectrum-indigo-100`
    - **value**: rgb(26, 29, 97) (darkest)
  - `--spectrum-indigo-200`
    - **value**: rgb(35, 39, 125) (darkest)
  - `--spectrum-indigo-300`
    - **value**: rgb(46, 50, 158) (darkest)
  - `--spectrum-indigo-400`
    - **value**: rgb(58, 63, 189) (darkest)
  - `--spectrum-indigo-500`
    - **value**: rgb(73, 78, 216) (darkest)
  - `--spectrum-indigo-600`
    - **value**: rgb(90, 96, 235) (darkest)
  - `--spectrum-indigo-700`
    - **value**: rgb(110, 115, 246) (darkest)
  - `--spectrum-indigo-800`
    - **value**: rgb(132, 136, 253) (darkest)
  - `--spectrum-indigo-900`
    - **value**: rgb(153, 157, 255) (darkest)
  - `--spectrum-indigo-1000`
    - **value**: rgb(174, 177, 255) (darkest)
  - `--spectrum-indigo-1100`
    - **value**: rgb(194, 196, 255) (darkest)
  - `--spectrum-indigo-1200`
    - **value**: rgb(212, 213, 255) (darkest)
  - `--spectrum-indigo-1300`
    - **value**: rgb(227, 228, 255) (darkest)
  - `--spectrum-indigo-1400`
    - **value**: rgb(240, 240, 255) (darkest)
  - `--spectrum-purple-100`
    - **value**: rgb(50, 16, 104) (darkest)
  - `--spectrum-purple-200`
    - **value**: rgb(67, 13, 140) (darkest)
  - `--spectrum-purple-300`
    - **value**: rgb(86, 16, 173) (darkest)
  - `--spectrum-purple-400`
    - **value**: rgb(106, 29, 200) (darkest)
  - `--spectrum-purple-500`
    - **value**: rgb(126, 49, 222) (darkest)
  - `--spectrum-purple-600`
    - **value**: rgb(145, 70, 236) (darkest)
  - `--spectrum-purple-700`
    - **value**: rgb(162, 94, 246) (darkest)
  - `--spectrum-purple-800`
    - **value**: rgb(178, 119, 250) (darkest)
  - `--spectrum-purple-900`
    - **value**: rgb(192, 143, 252) (darkest)
  - `--spectrum-purple-1000`
    - **value**: rgb(206, 166, 253) (darkest)
  - `--spectrum-purple-1100`
    - **value**: rgb(219, 188, 254) (darkest)
  - `--spectrum-purple-1200`
    - **value**: rgb(230, 207, 255) (darkest)
  - `--spectrum-purple-1300`
    - **value**: rgb(240, 224, 255) (darkest)
  - `--spectrum-purple-1400`
    - **value**: rgb(248, 237, 255) (darkest)
  - `--spectrum-fuchsia-100`
    - **value**: rgb(70, 14, 68) (darkest)
  - `--spectrum-fuchsia-200`
    - **value**: rgb(93, 9, 92) (darkest)
  - `--spectrum-fuchsia-300`
    - **value**: rgb(120, 0, 120) (darkest)
  - `--spectrum-fuchsia-400`
    - **value**: rgb(146, 0, 147) (darkest)
  - `--spectrum-fuchsia-500`
    - **value**: rgb(169, 19, 170) (darkest)
  - `--spectrum-fuchsia-600`
    - **value**: rgb(191, 43, 191) (darkest)
  - `--spectrum-fuchsia-700`
    - **value**: rgb(211, 65, 213) (darkest)
  - `--spectrum-fuchsia-800`
    - **value**: rgb(228, 91, 229) (darkest)
  - `--spectrum-fuchsia-900`
    - **value**: rgb(239, 120, 238) (darkest)
  - `--spectrum-fuchsia-1000`
    - **value**: rgb(246, 149, 243) (darkest)
  - `--spectrum-fuchsia-1100`
    - **value**: rgb(251, 175, 246) (darkest)
  - `--spectrum-fuchsia-1200`
    - **value**: rgb(254, 199, 248) (darkest)
  - `--spectrum-fuchsia-1300`
    - **value**: rgb(255, 220, 250) (darkest)
  - `--spectrum-fuchsia-1400`
    - **value**: rgb(255, 235, 252) (darkest)
  - `--spectrum-magenta-100`
    - **value**: rgb(83, 3, 41) (darkest)
  - `--spectrum-magenta-200`
    - **value**: rgb(106, 0, 52) (darkest)
  - `--spectrum-magenta-300`
    - **value**: rgb(133, 0, 65) (darkest)
  - `--spectrum-magenta-400`
    - **value**: rgb(161, 0, 78) (darkest)
  - `--spectrum-magenta-500`
    - **value**: rgb(186, 22, 93) (darkest)
  - `--spectrum-magenta-600`
    - **value**: rgb(209, 43, 114) (darkest)
  - `--spectrum-magenta-700`
    - **value**: rgb(227, 69, 137) (darkest)
  - `--spectrum-magenta-800`
    - **value**: rgb(241, 97, 156) (darkest)
  - `--spectrum-magenta-900`
    - **value**: rgb(252, 124, 173) (darkest)
  - `--spectrum-magenta-1000`
    - **value**: rgb(255, 152, 191) (darkest)
  - `--spectrum-magenta-1100`
    - **value**: rgb(255, 179, 207) (darkest)
  - `--spectrum-magenta-1200`
    - **value**: rgb(255, 202, 221) (darkest)
  - `--spectrum-magenta-1300`
    - **value**: rgb(255, 221, 233) (darkest)
  - `--spectrum-magenta-1400`
    - **value**: rgb(255, 236, 243) (darkest)
  - `--spectrum-opacity-checkerboard-square-dark`
    - **value**: `--spectrum-gray-800` (darkest)
  - `--spectrum-overlay-opacity`
    - **value**: 0.6 (darkest)
  - `--spectrum-drop-shadow-color`
    - **value**: rgba(0, 0, 0, 0.15) (light)
    - **value**: rgba(0, 0, 0, 0.5) (dark)
    - **value**: rgba(0, 0, 0, 0.8) (darkest)
  - `--spectrum-background-base-color`
    - **value**: `--spectrum-gray-200` (light)
    - **value**: `--spectrum-gray-50` (dark)
    - **value**: `--spectrum-gray-50` (darkest)
  - `--spectrum-background-layer-1-color`
    - **value**: `--spectrum-gray-100` (light)
    - **value**: `--spectrum-gray-75` (dark)
    - **value**: `--spectrum-gray-75` (darkest)
  - `--spectrum-background-layer-2-color`
    - **value**: `--spectrum-gray-100` (darkest)
  - `--spectrum-neutral-background-color-default`
    - **value**: `--spectrum-gray-800` (light)
    - **value**: `--spectrum-gray-400` (dark)
    - **value**: `--spectrum-gray-400` (darkest)
  - `--spectrum-neutral-background-color-hover`
    - **value**: `--spectrum-gray-900` (light)
    - **value**: `--spectrum-gray-300` (dark)
    - **value**: `--spectrum-gray-300` (darkest)
  - `--spectrum-neutral-background-color-down`
    - **value**: `--spectrum-gray-900` (light)
    - **value**: `--spectrum-gray-200` (dark)
    - **value**: `--spectrum-gray-200` (darkest)
  - `--spectrum-neutral-background-color-key-focus`
    - **value**: `--spectrum-gray-900` (light)
    - **value**: `--spectrum-gray-300` (dark)
    - **value**: `--spectrum-gray-300` (darkest)
  - `--spectrum-neutral-background-color-selected-default`
    - **value**: `--spectrum-gray-700` (spectrum)
    - **value**: `--spectrum-gray-800` (express) **deprecated**
  - `--spectrum-neutral-background-color-selected-hover`
    - **value**: `--spectrum-gray-800` (spectrum)
    - **value**: `--spectrum-gray-900` (express) **deprecated**
  - `--spectrum-neutral-background-color-selected-down`
    - **value**: `--spectrum-gray-900` (spectrum)
    - **value**: `--spectrum-gray-900` (express) **deprecated**
  - `--spectrum-neutral-background-color-selected-key-focus`
    - **value**: `--spectrum-gray-800` (spectrum)
    - **value**: `--spectrum-gray-900` (express) **deprecated**
  - `--spectrum-neutral-subdued-background-color-default`
    - **value**: `--spectrum-gray-400` (darkest)
  - `--spectrum-neutral-subdued-background-color-hover`
    - **value**: `--spectrum-gray-300` (darkest)
  - `--spectrum-neutral-subdued-background-color-down`
    - **value**: `--spectrum-gray-200` (darkest)
  - `--spectrum-neutral-subdued-background-color-key-focus`
    - **value**: `--spectrum-gray-300` (darkest)
  - `--spectrum-accent-background-color-default`
    - **value**: `--spectrum-accent-color-600` (darkest)
  - `--spectrum-accent-background-color-hover`
    - **value**: `--spectrum-accent-color-500` (darkest)
  - `--spectrum-accent-background-color-down`
    - **value**: `--spectrum-accent-color-400` (darkest)
  - `--spectrum-accent-background-color-key-focus`
    - **value**: `--spectrum-accent-color-500` (darkest)
  - `--spectrum-informative-background-color-default`
    - **value**: `--spectrum-informative-color-600` (darkest)
  - `--spectrum-informative-background-color-hover`
    - **value**: `--spectrum-informative-color-500` (darkest)
  - `--spectrum-informative-background-color-down`
    - **value**: `--spectrum-informative-color-400` (darkest)
  - `--spectrum-informative-background-color-key-focus`
    - **value**: `--spectrum-informative-color-500` (darkest)
  - `--spectrum-negative-background-color-default`
    - **value**: `--spectrum-negative-color-600` (darkest)
  - `--spectrum-negative-background-color-hover`
    - **value**: `--spectrum-negative-color-500` (darkest)
  - `--spectrum-negative-background-color-down`
    - **value**: `--spectrum-negative-color-400` (darkest)
  - `--spectrum-negative-background-color-key-focus`
    - **value**: `--spectrum-negative-color-500` (darkest)
  - `--spectrum-positive-background-color-default`
    - **value**: `--spectrum-positive-color-600` (darkest)
  - `--spectrum-positive-background-color-hover`
    - **value**: `--spectrum-positive-color-500` (darkest)
  - `--spectrum-positive-background-color-down`
    - **value**: `--spectrum-positive-color-400` (darkest)
  - `--spectrum-positive-background-color-key-focus`
    - **value**: `--spectrum-positive-color-500` (darkest)
  - `--spectrum-notice-background-color-default`
    - **value**: `--spectrum-notice-color-800` (darkest)
  - `--spectrum-gray-background-color-default`
    - **value**: `--spectrum-gray-700` (darkest)
  - `--spectrum-red-background-color-default`
    - **value**: `--spectrum-red-700` (darkest)
  - `--spectrum-orange-background-color-default`
    - **value**: `--spectrum-orange-800` (darkest)
  - `--spectrum-yellow-background-color-default`
    - **value**: `--spectrum-yellow-1000` (darkest)
  - `--spectrum-chartreuse-background-color-default`
    - **value**: `--spectrum-chartreuse-900` (darkest)
  - `--spectrum-celery-background-color-default`
    - **value**: `--spectrum-celery-800` (darkest)
  - `--spectrum-green-background-color-default`
    - **value**: `--spectrum-green-700` (darkest)
  - `--spectrum-seafoam-background-color-default`
    - **value**: `--spectrum-seafoam-700` (darkest)
  - `--spectrum-cyan-background-color-default`
    - **value**: `--spectrum-cyan-700` (darkest)
  - `--spectrum-blue-background-color-default`
    - **value**: `--spectrum-blue-700` (darkest)
  - `--spectrum-indigo-background-color-default`
    - **value**: `--spectrum-indigo-700` (darkest)
  - `--spectrum-purple-background-color-default`
    - **value**: `--spectrum-purple-700` (darkest)
  - `--spectrum-fuchsia-background-color-default`
    - **value**: `--spectrum-fuchsia-700` (darkest)
  - `--spectrum-magenta-background-color-default`
    - **value**: `--spectrum-magenta-700` (darkest)
  - `--spectrum-neutral-visual-color`
    - **value**: `--spectrum-gray-600` (darkest)
  - `--spectrum-accent-visual-color`
    - **value**: `--spectrum-accent-color-900` (darkest)
  - `--spectrum-informative-visual-color`
    - **value**: `--spectrum-informative-color-900` (darkest)
  - `--spectrum-negative-visual-color`
    - **value**: `--spectrum-negative-color-700` (darkest)
  - `--spectrum-notice-visual-color`
    - **value**: `--spectrum-notice-color-900` (darkest)
  - `--spectrum-positive-visual-color`
    - **value**: `--spectrum-positive-color-800` (darkest)
  - `--spectrum-gray-visual-color`
    - **value**: `--spectrum-gray-600` (darkest)
  - `--spectrum-red-visual-color`
    - **value**: `--spectrum-red-700` (darkest)
  - `--spectrum-orange-visual-color`
    - **value**: `--spectrum-orange-900` (darkest)
  - `--spectrum-yellow-visual-color`
    - **value**: `--spectrum-yellow-1100` (darkest)
  - `--spectrum-chartreuse-visual-color`
    - **value**: `--spectrum-chartreuse-900` (darkest)
  - `--spectrum-celery-visual-color`
    - **value**: `--spectrum-celery-800` (darkest)
  - `--spectrum-green-visual-color`
    - **value**: `--spectrum-green-800` (darkest)
  - `--spectrum-seafoam-visual-color`
    - **value**: `--spectrum-seafoam-800` (darkest)
  - `--spectrum-cyan-visual-color`
    - **value**: `--spectrum-cyan-900` (darkest)
  - `--spectrum-blue-visual-color`
    - **value**: `--spectrum-blue-900` (darkest)
  - `--spectrum-indigo-visual-color`
    - **value**: `--spectrum-indigo-900` (darkest)
  - `--spectrum-purple-visual-color`
    - **value**: `--spectrum-purple-900` (darkest)
  - `--spectrum-fuchsia-visual-color`
    - **value**: `--spectrum-fuchsia-900` (darkest)
  - `--spectrum-magenta-visual-color`
    - **value**: `--spectrum-magenta-900` (darkest)

  #### Updated Properties (416)

  - `--spectrum-heading-sans-serif-font-weight`
  - `--spectrum-heading-serif-font-weight`
  - `--spectrum-heading-cjk-font-weight`
  - `--spectrum-heading-sans-serif-emphasized-font-weight`
  - `--spectrum-heading-serif-emphasized-font-weight`
  - `--spectrum-accent-color-100`
  - `--spectrum-accent-color-200`
  - `--spectrum-accent-color-300`
  - `--spectrum-accent-color-400`
  - `--spectrum-accent-color-500`
  - `--spectrum-accent-color-600`
  - `--spectrum-accent-color-700`
  - `--spectrum-accent-color-800`
  - `--spectrum-accent-color-900`
  - `--spectrum-accent-color-1000`
  - `--spectrum-accent-color-1100`
  - `--spectrum-accent-color-1200`
  - `--spectrum-accent-color-1300`
  - `--spectrum-accent-color-1400`
  - `--spectrum-corner-radius-75`
  - `--spectrum-corner-radius-100`
  - `--spectrum-corner-radius-200`
  - `--spectrum-drop-shadow-x`
  - `--spectrum-drop-shadow-y`
  - `--spectrum-drop-shadow-blur`
  - `--spectrum-text-to-visual-50`
    - **value**: 6px -> 5px (desktop)
    - **value**: 8px -> 7px (mobile)
  - `--spectrum-text-to-visual-75`
    - **value**: 7px -> 5px (desktop)
    - **value**: 9px -> 7px (mobile)
  - `--spectrum-text-to-visual-100`
    - **value**: 8px -> 6px (desktop)
    - **value**: 10px -> 8px (mobile)
  - `--spectrum-text-to-visual-200`
    - **value**: 9px -> 7px (desktop)
    - **value**: 11px -> 9px (mobile)
  - `--spectrum-text-to-visual-300`
    - **value**: 10px -> 8px (desktop)
    - **value**: 13px -> 10px (mobile)
  - `--spectrum-border-width-100`
  - `--spectrum-component-pill-edge-to-visual-75`
    - **value**: 10px -> 11px (desktop)
    - **value**: 13px -> 15px (mobile)
  - `--spectrum-component-pill-edge-to-visual-200`
    - **value**: 22px -> 21px (mobile)
  - `--spectrum-component-pill-edge-to-visual-300`
    - **value**: 21px -> 20px (desktop)
    - **value**: 27px -> 28px (mobile)
  - `--spectrum-component-pill-edge-to-visual-only-75`
    - **value**: 5px -> 6px (mobile)
  - `--spectrum-component-pill-edge-to-visual-only-100`
    - **value**: 7px -> 6px (desktop)
    - **value**: 9px -> 8px (mobile)
  - `--spectrum-component-pill-edge-to-visual-only-200`
    - **value**: 10px -> 9px (desktop)
    - **value**: 13px -> 11px (mobile)
  - `--spectrum-component-pill-edge-to-visual-only-300`
    - **value**: 13px -> 11px (desktop)
    - **value**: 16px -> 15px (mobile)
  - `--spectrum-component-pill-edge-to-text-75`
    - **value**: 12px -> 13px (desktop)
    - **value**: 15px -> 17px (mobile)
  - `--spectrum-component-pill-edge-to-text-200`
    - **value**: 25px -> 24px (mobile)
  - `--spectrum-component-pill-edge-to-text-300`
    - **value**: 24px -> 23px (desktop)
  - `--spectrum-component-edge-to-visual-50`
    - **value**: 6px -> 7px (desktop)
    - **value**: 7px -> 9px (mobile)
  - `--spectrum-component-edge-to-visual-75`
    - **value**: 7px -> 8px (desktop)
    - **value**: 9px -> 11px (mobile)
  - `--spectrum-component-edge-to-visual-200`
    - **value**: 16px -> 15px (mobile)
  - `--spectrum-component-edge-to-visual-300`
    - **value**: 15px -> 14px (desktop)
    - **value**: 19px -> 20px (mobile)
  - `--spectrum-component-edge-to-visual-only-50`
    - **value**: 4px -> 5px (mobile)
  - `--spectrum-component-edge-to-visual-only-75`
    - **value**: 5px -> 6px (mobile)
  - `--spectrum-component-edge-to-visual-only-100`
    - **value**: 7px -> 6px (desktop)
    - **value**: 9px -> 8px (mobile)
  - `--spectrum-component-edge-to-visual-only-200`
    - **value**: 10px -> 9px (desktop)
    - **value**: 13px -> 11px (mobile)
  - `--spectrum-component-edge-to-visual-only-300`
    - **value**: 13px -> 11px (desktop)
    - **value**: 16px -> 15px (mobile)
  - `--spectrum-component-edge-to-text-50`
    - **value**: 10px -> 11px (mobile)
  - `--spectrum-component-edge-to-text-75`
    - **value**: 9px -> 10px (desktop)
    - **value**: 11px -> 13px (mobile)
  - `--spectrum-component-edge-to-text-200`
    - **value**: 19px -> 18px (mobile)
  - `--spectrum-component-edge-to-text-300`
    - **value**: 18px -> 17px (desktop)
  - `--spectrum-component-top-to-workflow-icon-50`
    - **value**: 4px -> 5px (mobile)
  - `--spectrum-component-top-to-workflow-icon-75`
    - **value**: 5px -> 6px (mobile)
  - `--spectrum-component-top-to-workflow-icon-100`
    - **value**: 7px -> 6px (desktop)
    - **value**: 9px -> 8px (mobile)
  - `--spectrum-component-top-to-workflow-icon-200`
    - **value**: 10px -> 9px (desktop)
    - **value**: 13px -> 11px (mobile)
  - `--spectrum-component-top-to-workflow-icon-300`
    - **value**: 13px -> 11px (desktop)
    - **value**: 16px -> 15px (mobile)
  - `--spectrum-checkbox-control-size-small`
  - `--spectrum-checkbox-control-size-medium`
  - `--spectrum-checkbox-control-size-large`
  - `--spectrum-checkbox-control-size-extra-large`
  - `--spectrum-checkbox-top-to-control-small`
  - `--spectrum-checkbox-top-to-control-medium`
  - `--spectrum-checkbox-top-to-control-large`
  - `--spectrum-checkbox-top-to-control-extra-large`
  - `--spectrum-switch-control-width-small`
  - `--spectrum-switch-control-width-medium`
  - `--spectrum-switch-control-width-large`
  - `--spectrum-switch-control-width-extra-large`
  - `--spectrum-switch-control-height-small`
  - `--spectrum-switch-control-height-medium`
  - `--spectrum-switch-control-height-large`
  - `--spectrum-switch-control-height-extra-large`
  - `--spectrum-switch-top-to-control-small`
  - `--spectrum-switch-top-to-control-medium`
  - `--spectrum-switch-top-to-control-large`
  - `--spectrum-switch-top-to-control-extra-large`
  - `--spectrum-radio-button-control-size-small`
  - `--spectrum-radio-button-control-size-medium`
  - `--spectrum-radio-button-control-size-large`
  - `--spectrum-radio-button-control-size-extra-large`
  - `--spectrum-radio-button-top-to-control-small`
  - `--spectrum-radio-button-top-to-control-medium`
  - `--spectrum-radio-button-top-to-control-large`
  - `--spectrum-radio-button-top-to-control-extra-large`
  - `--spectrum-slider-track-thickness`
  - `--spectrum-slider-control-height-small`
  - `--spectrum-slider-control-height-medium`
  - `--spectrum-slider-control-height-large`
  - `--spectrum-slider-control-height-extra-large`
  - `--spectrum-slider-handle-size-small`
  - `--spectrum-slider-handle-size-medium`
  - `--spectrum-slider-handle-size-large`
  - `--spectrum-slider-handle-size-extra-large`
  - `--spectrum-slider-handle-border-width-down-small`
  - `--spectrum-slider-handle-border-width-down-medium`
  - `--spectrum-slider-handle-border-width-down-large`
  - `--spectrum-slider-handle-border-width-down-extra-large`
  - `--spectrum-slider-handle-gap`
  - `--spectrum-slider-bottom-to-handle-small`
  - `--spectrum-slider-bottom-to-handle-medium`
  - `--spectrum-slider-bottom-to-handle-large`
  - `--spectrum-slider-bottom-to-handle-extra-large`
  - `--spectrum-picker-border-width`
  - `--spectrum-color-area-border-rounding`
    - **value**: `--spectrum-corner-radius-100` -> `--spectrum-corner-radius-medium-size-small`
  - `--spectrum-color-slider-border-rounding`
    - **value**: 4px -> `--spectrum-corner-radius-medium-size-small`
  - `--spectrum-in-field-button-fill-stacked-inner-border-rounding`
  - `--spectrum-in-field-button-edge-to-fill`
  - `--spectrum-in-field-button-stacked-inner-edge-to-fill`
  - `--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-medium`
  - `--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-large`
  - `--spectrum-in-field-button-outer-edge-to-disclosure-icon-stacked-extra-large`
  - `--spectrum-in-field-button-inner-edge-to-disclosure-icon-stacked-small`
  - `--spectrum-in-field-button-inner-edge-to-disclosure-icon-stacked-medium`
  - `--spectrum-in-field-button-inner-edge-to-disclosure-icon-stacked-large`
  - `--spectrum-in-field-button-inner-edge-to-disclosure-icon-stacked-extra-large`
  - `--spectrum-icon-color-blue-primary-default`
  - `--spectrum-icon-color-green-primary-default`
  - `--spectrum-icon-color-red-primary-default`
  - `--spectrum-icon-color-yellow-primary-default`
  - `--spectrum-workflow-icon-size-50`
    - **value**: 18px -> 16px (mobile)
  - `--spectrum-workflow-icon-size-75`
    - **value**: 20px -> 18px (mobile)
  - `--spectrum-workflow-icon-size-100`
    - **value**: 18px -> 20px (desktop)
    - **value**: 22px -> 24px (mobile)
  - `--spectrum-workflow-icon-size-200`
    - **value**: 20px -> 22px (desktop)
    - **value**: 24px -> 28px (mobile)
  - `--spectrum-workflow-icon-size-300`
    - **value**: 22px -> 26px (desktop)
    - **value**: 28px -> 30px (mobile)
  - `--spectrum-white`
  - `--spectrum-transparent-white-100`
  - `--spectrum-transparent-white-200`
  - `--spectrum-transparent-white-300`
  - `--spectrum-transparent-white-400`
  - `--spectrum-transparent-white-500`
  - `--spectrum-transparent-white-600`
  - `--spectrum-transparent-white-700`
  - `--spectrum-transparent-white-800`
  - `--spectrum-transparent-white-900`
  - `--spectrum-transparent-black-100`
  - `--spectrum-transparent-black-200`
  - `--spectrum-transparent-black-300`
  - `--spectrum-transparent-black-400`
  - `--spectrum-transparent-black-500`
  - `--spectrum-transparent-black-600`
  - `--spectrum-transparent-black-700`
  - `--spectrum-transparent-black-800`
  - `--spectrum-transparent-black-900`
  - `--spectrum-gray-50`
    - **value**: rgb(255, 255, 255) -> rgb(248, 248, 248) (light)
    - **value**: rgb(29, 29, 29) -> rgb(27, 27, 27) (dark)
  - `--spectrum-gray-75`
    - **value**: rgb(253, 253, 253) -> rgb(243, 243, 243) (light)
    - **value**: rgb(38, 38, 38) -> rgb(34, 34, 34) (dark)
  - `--spectrum-gray-100`
    - **value**: rgb(248, 248, 248) -> rgb(233, 233, 233) (light)
    - **value**: rgb(50, 50, 50) -> rgb(44, 44, 44) (dark)
  - `--spectrum-gray-200`
    - **value**: rgb(230, 230, 230) -> rgb(225, 225, 225) (light)
    - **value**: rgb(63, 63, 63) -> rgb(50, 50, 50) (dark)
  - `--spectrum-gray-300`
    - **value**: rgb(213, 213, 213) -> rgb(218, 218, 218) (light)
    - **value**: rgb(84, 84, 84) -> rgb(57, 57, 57) (dark)
  - `--spectrum-gray-400`
    - **value**: rgb(177, 177, 177) -> rgb(198, 198, 198) (light)
    - **value**: rgb(112, 112, 112) -> rgb(68, 68, 68) (dark)
  - `--spectrum-gray-500`
    - **value**: rgb(144, 144, 144) -> rgb(143, 143, 143) (light)
    - **value**: rgb(144, 144, 144) -> rgb(109, 109, 109) (dark)
  - `--spectrum-gray-600`
    - **value**: rgb(109, 109, 109) -> rgb(113, 113, 113) (light)
    - **value**: rgb(178, 178, 178) -> rgb(138, 138, 138) (dark)
  - `--spectrum-gray-700`
    - **value**: rgb(70, 70, 70) -> rgb(80, 80, 80) (light)
    - **value**: rgb(209, 209, 209) -> rgb(175, 175, 175) (dark)
  - `--spectrum-gray-800`
    - **value**: rgb(34, 34, 34) -> rgb(41, 41, 41) (light)
    - **value**: rgb(235, 235, 235) -> rgb(219, 219, 219) (dark)
  - `--spectrum-gray-900`
    - **value**: rgb(0, 0, 0) -> rgb(19, 19, 19) (light)
    - **value**: rgb(255, 255, 255) -> rgb(242, 242, 242) (dark)
  - `--spectrum-blue-100`
    - **value**: rgb(224, 242, 255) -> rgb(245, 249, 255) (light)
    - **value**: rgb(0, 56, 119) -> rgb(14, 23, 63) (dark)
  - `--spectrum-blue-200`
    - **value**: rgb(202, 232, 255) -> rgb(229, 240, 254) (light)
    - **value**: rgb(0, 65, 138) -> rgb(15, 28, 82) (dark)
  - `--spectrum-blue-300`
    - **value**: rgb(181, 222, 255) -> rgb(203, 226, 254) (light)
    - **value**: rgb(0, 77, 163) -> rgb(12, 33, 117) (dark)
  - `--spectrum-blue-400`
    - **value**: rgb(150, 206, 253) -> rgb(172, 207, 253) (light)
    - **value**: rgb(0, 89, 194) -> rgb(18, 45, 154) (dark)
  - `--spectrum-blue-500`
    - **value**: rgb(120, 187, 250) -> rgb(142, 185, 252) (light)
    - **value**: rgb(3, 103, 224) -> rgb(26, 58, 195) (dark)
  - `--spectrum-blue-600`
    - **value**: rgb(89, 167, 246) -> rgb(114, 158, 253) (light)
    - **value**: rgb(19, 121, 243) -> rgb(37, 73, 229) (dark)
  - `--spectrum-blue-700`
    - **value**: rgb(56, 146, 243) -> rgb(93, 137, 255) (light)
    - **value**: rgb(52, 143, 244) -> rgb(52, 91, 248) (dark)
  - `--spectrum-blue-800`
    - **value**: rgb(20, 122, 243) -> rgb(75, 117, 255) (light)
    - **value**: rgb(84, 163, 246) -> rgb(64, 105, 253) (dark)
  - `--spectrum-blue-900`
    - **value**: rgb(2, 101, 220) -> rgb(59, 99, 251) (light)
    - **value**: rgb(114, 183, 249) -> rgb(86, 129, 255) (dark)
  - `--spectrum-blue-1000`
    - **value**: rgb(0, 84, 182) -> rgb(39, 77, 234) (light)
    - **value**: rgb(143, 202, 252) -> rgb(105, 149, 254) (dark)
  - `--spectrum-blue-1100`
    - **value**: rgb(0, 68, 145) -> rgb(29, 62, 207) (light)
    - **value**: rgb(174, 219, 254) -> rgb(124, 169, 252) (dark)
  - `--spectrum-blue-1200`
    - **value**: rgb(0, 53, 113) -> rgb(21, 50, 173) (light)
    - **value**: rgb(204, 233, 255) -> rgb(152, 192, 252) (dark)
  - `--spectrum-blue-1300`
    - **value**: rgb(0, 39, 84) -> rgb(16, 40, 140) (light)
    - **value**: rgb(232, 246, 255) -> rgb(181, 213, 253) (dark)
  - `--spectrum-blue-1400`
    - **value**: rgb(0, 28, 60) -> rgb(12, 31, 105) (light)
    - **value**: rgb(255, 255, 255) -> rgb(213, 231, 254) (dark)
  - `--spectrum-red-100`
    - **value**: rgb(255, 235, 231) -> rgb(255, 246, 245) (light)
    - **value**: rgb(123, 0, 0) -> rgb(54, 10, 3) (dark)
  - `--spectrum-red-200`
    - **value**: rgb(255, 221, 214) -> rgb(255, 235, 232) (light)
    - **value**: rgb(141, 0, 0) -> rgb(68, 13, 5) (dark)
  - `--spectrum-red-300`
    - **value**: rgb(255, 205, 195) -> rgb(255, 214, 209) (light)
    - **value**: rgb(165, 0, 0) -> rgb(87, 17, 7) (dark)
  - `--spectrum-red-400`
    - **value**: rgb(255, 183, 169) -> rgb(255, 188, 180) (light)
    - **value**: rgb(190, 4, 3) -> rgb(115, 24, 11) (dark)
  - `--spectrum-red-500`
    - **value**: rgb(255, 155, 136) -> rgb(255, 157, 145) (light)
    - **value**: rgb(215, 25, 19) -> rgb(147, 31, 17) (dark)
  - `--spectrum-red-600`
    - **value**: rgb(255, 124, 101) -> rgb(255, 118, 101) (light)
    - **value**: rgb(234, 56, 41) -> rgb(177, 38, 23) (dark)
  - `--spectrum-red-700`
    - **value**: rgb(247, 92, 70) -> rgb(255, 81, 61) (light)
    - **value**: rgb(246, 88, 67) -> rgb(205, 46, 29) (dark)
  - `--spectrum-red-800`
    - **value**: rgb(234, 56, 41) -> rgb(240, 56, 35) (light)
    - **value**: rgb(255, 117, 94) -> rgb(223, 52, 34) (dark)
  - `--spectrum-red-900`
    - **value**: rgb(211, 21, 16) -> rgb(215, 50, 32) (light)
    - **value**: rgb(255, 149, 129) -> rgb(252, 67, 46) (dark)
  - `--spectrum-red-1000`
    - **value**: rgb(180, 0, 0) -> rgb(183, 40, 24) (light)
    - **value**: rgb(255, 176, 161) -> rgb(255, 103, 86) (dark)
  - `--spectrum-red-1100`
    - **value**: rgb(147, 0, 0) -> rgb(156, 33, 19) (light)
    - **value**: rgb(255, 201, 189) -> rgb(255, 134, 120) (dark)
  - `--spectrum-red-1200`
    - **value**: rgb(116, 0, 0) -> rgb(129, 27, 14) (light)
    - **value**: rgb(255, 222, 216) -> rgb(255, 167, 157) (dark)
  - `--spectrum-red-1300`
    - **value**: rgb(89, 0, 0) -> rgb(104, 21, 10) (light)
    - **value**: rgb(255, 241, 238) -> rgb(255, 196, 189) (dark)
  - `--spectrum-red-1400`
    - **value**: rgb(67, 0, 0) -> rgb(80, 16, 6) (light)
    - **value**: rgb(255, 255, 255) -> rgb(255, 222, 219) (dark)
  - `--spectrum-orange-100`
    - **value**: rgb(255, 236, 204) -> rgb(255, 246, 231) (light)
    - **value**: rgb(102, 37, 0) -> rgb(49, 16, 0) (dark)
  - `--spectrum-orange-200`
    - **value**: rgb(255, 223, 173) -> rgb(255, 236, 207) (light)
    - **value**: rgb(117, 45, 0) -> rgb(61, 21, 0) (dark)
  - `--spectrum-orange-300`
    - **value**: rgb(253, 210, 145) -> rgb(255, 218, 158) (light)
    - **value**: rgb(137, 55, 0) -> rgb(80, 27, 0) (dark)
  - `--spectrum-orange-400`
    - **value**: rgb(255, 187, 99) -> rgb(255, 193, 94) (light)
    - **value**: rgb(158, 66, 0) -> rgb(106, 36, 0) (dark)
  - `--spectrum-orange-500`
    - **value**: rgb(255, 160, 55) -> rgb(255, 162, 19) (light)
    - **value**: rgb(180, 78, 0) -> rgb(135, 47, 0) (dark)
  - `--spectrum-orange-600`
    - **value**: rgb(246, 133, 17) -> rgb(252, 125, 0) (light)
    - **value**: rgb(202, 93, 0) -> rgb(162, 59, 0) (dark)
  - `--spectrum-orange-700`
    - **value**: rgb(228, 111, 0) -> rgb(232, 106, 0) (light)
    - **value**: rgb(225, 109, 0) -> rgb(185, 73, 0) (dark)
  - `--spectrum-orange-800`
    - **value**: rgb(203, 93, 0) -> rgb(212, 91, 0) (light)
    - **value**: rgb(244, 129, 12) -> rgb(199, 82, 0) (dark)
  - `--spectrum-orange-900`
    - **value**: rgb(177, 76, 0) -> rgb(194, 78, 0) (light)
    - **value**: rgb(254, 154, 46) -> rgb(224, 100, 0) (dark)
  - `--spectrum-orange-1000`
    - **value**: rgb(149, 61, 0) -> rgb(167, 62, 0) (light)
    - **value**: rgb(255, 181, 88) -> rgb(243, 117, 0) (dark)
  - `--spectrum-orange-1100`
    - **value**: rgb(122, 47, 0) -> rgb(144, 51, 0) (light)
    - **value**: rgb(253, 206, 136) -> rgb(255, 137, 0) (dark)
  - `--spectrum-orange-1200`
    - **value**: rgb(97, 35, 0) -> rgb(118, 41, 0) (light)
    - **value**: rgb(255, 225, 179) -> rgb(255, 173, 45) (dark)
  - `--spectrum-orange-1300`
    - **value**: rgb(73, 25, 1) -> rgb(95, 32, 0) (light)
    - **value**: rgb(255, 242, 221) -> rgb(255, 201, 116) (dark)
  - `--spectrum-orange-1400`
    - **value**: rgb(53, 18, 1) -> rgb(73, 24, 0) (light)
    - **value**: rgb(255, 253, 249) -> rgb(255, 225, 178) (dark)
  - `--spectrum-yellow-100`
    - **value**: rgb(251, 241, 152) -> rgb(255, 248, 204) (light)
    - **value**: rgb(76, 54, 0) -> rgb(37, 23, 0) (dark)
  - `--spectrum-yellow-200`
    - **value**: rgb(248, 231, 80) -> rgb(255, 241, 151) (light)
    - **value**: rgb(88, 64, 0) -> rgb(47, 29, 0) (dark)
  - `--spectrum-yellow-300`
    - **value**: rgb(248, 217, 4) -> rgb(255, 222, 44) (light)
    - **value**: rgb(103, 76, 0) -> rgb(61, 39, 0) (dark)
  - `--spectrum-yellow-400`
    - **value**: rgb(232, 198, 0) -> rgb(245, 199, 0) (light)
    - **value**: rgb(119, 89, 0) -> rgb(83, 52, 0) (dark)
  - `--spectrum-yellow-500`
    - **value**: rgb(215, 179, 0) -> rgb(230, 175, 0) (light)
    - **value**: rgb(136, 104, 0) -> rgb(107, 67, 0) (dark)
  - `--spectrum-yellow-600`
    - **value**: rgb(196, 159, 0) -> rgb(210, 149, 0) (light)
    - **value**: rgb(155, 120, 0) -> rgb(130, 82, 0) (dark)
  - `--spectrum-yellow-700`
    - **value**: rgb(176, 140, 0) -> rgb(193, 131, 0) (light)
    - **value**: rgb(174, 137, 0) -> rgb(151, 97, 0) (dark)
  - `--spectrum-yellow-800`
    - **value**: rgb(155, 120, 0) -> rgb(175, 116, 0) (light)
    - **value**: rgb(192, 156, 0) -> rgb(164, 106, 0) (dark)
  - `--spectrum-yellow-900`
    - **value**: rgb(133, 102, 0) -> rgb(158, 102, 0) (light)
    - **value**: rgb(211, 174, 0) -> rgb(186, 124, 0) (dark)
  - `--spectrum-yellow-1000`
    - **value**: rgb(112, 83, 0) -> rgb(134, 85, 0) (light)
    - **value**: rgb(228, 194, 0) -> rgb(203, 141, 0) (dark)
  - `--spectrum-yellow-1100`
    - **value**: rgb(91, 67, 0) -> rgb(114, 72, 0) (light)
    - **value**: rgb(244, 213, 0) -> rgb(218, 159, 0) (dark)
  - `--spectrum-yellow-1200`
    - **value**: rgb(72, 51, 0) -> rgb(93, 59, 0) (light)
    - **value**: rgb(249, 232, 92) -> rgb(235, 183, 0) (dark)
  - `--spectrum-yellow-1300`
    - **value**: rgb(54, 37, 0) -> rgb(75, 47, 0) (light)
    - **value**: rgb(252, 246, 187) -> rgb(249, 206, 0) (dark)
  - `--spectrum-yellow-1400`
    - **value**: rgb(40, 26, 0) -> rgb(56, 35, 0) (light)
    - **value**: rgb(255, 255, 255) -> rgb(255, 230, 86) (dark)
  - `--spectrum-chartreuse-100`
    - **value**: rgb(219, 252, 110) -> rgb(246, 251, 222) (light)
    - **value**: rgb(48, 64, 0) -> rgb(23, 28, 0) (dark)
  - `--spectrum-chartreuse-200`
    - **value**: rgb(203, 244, 67) -> rgb(234, 246, 173) (light)
    - **value**: rgb(55, 74, 0) -> rgb(30, 36, 0) (dark)
  - `--spectrum-chartreuse-300`
    - **value**: rgb(188, 233, 42) -> rgb(208, 236, 70) (light)
    - **value**: rgb(65, 87, 0) -> rgb(39, 47, 0) (dark)
  - `--spectrum-chartreuse-400`
    - **value**: rgb(170, 216, 22) -> rgb(182, 219, 0) (light)
    - **value**: rgb(76, 102, 0) -> rgb(53, 63, 0) (dark)
  - `--spectrum-chartreuse-500`
    - **value**: rgb(152, 197, 10) -> rgb(163, 196, 0) (light)
    - **value**: rgb(89, 118, 0) -> rgb(68, 82, 0) (dark)
  - `--spectrum-chartreuse-600`
    - **value**: rgb(135, 177, 3) -> rgb(143, 172, 0) (light)
    - **value**: rgb(102, 136, 0) -> rgb(83, 100, 0) (dark)
  - `--spectrum-chartreuse-700`
    - **value**: rgb(118, 156, 0) -> rgb(128, 153, 0) (light)
    - **value**: rgb(117, 154, 0) -> rgb(97, 116, 0) (dark)
  - `--spectrum-chartreuse-800`
    - **value**: rgb(103, 136, 0) -> rgb(114, 137, 0) (light)
    - **value**: rgb(132, 173, 1) -> rgb(106, 127, 0) (dark)
  - `--spectrum-chartreuse-900`
    - **value**: rgb(87, 116, 0) -> rgb(102, 122, 0) (light)
    - **value**: rgb(148, 192, 8) -> rgb(122, 147, 0) (dark)
  - `--spectrum-chartreuse-1000`
    - **value**: rgb(72, 96, 0) -> rgb(86, 103, 0) (light)
    - **value**: rgb(166, 211, 18) -> rgb(136, 164, 0) (dark)
  - `--spectrum-chartreuse-1100`
    - **value**: rgb(58, 77, 0) -> rgb(73, 87, 0) (light)
    - **value**: rgb(184, 229, 37) -> rgb(151, 181, 0) (dark)
  - `--spectrum-chartreuse-1200`
    - **value**: rgb(44, 59, 0) -> rgb(60, 71, 0) (light)
    - **value**: rgb(205, 245, 71) -> rgb(169, 203, 0) (dark)
  - `--spectrum-chartreuse-1300`
    - **value**: rgb(33, 44, 0) -> rgb(47, 57, 0) (light)
    - **value**: rgb(231, 254, 154) -> rgb(187, 225, 0) (dark)
  - `--spectrum-chartreuse-1400`
    - **value**: rgb(24, 31, 0) -> rgb(35, 43, 0) (light)
    - **value**: rgb(255, 255, 255) -> rgb(219, 240, 117) (dark)
  - `--spectrum-celery-100`
    - **value**: rgb(205, 252, 191) -> rgb(235, 255, 220) (light)
    - **value**: rgb(0, 69, 10) -> rgb(11, 31, 0) (dark)
  - `--spectrum-celery-200`
    - **value**: rgb(174, 246, 157) -> rgb(197, 255, 156) (light)
    - **value**: rgb(0, 80, 12) -> rgb(15, 38, 0) (dark)
  - `--spectrum-celery-300`
    - **value**: rgb(150, 238, 133) -> rgb(157, 247, 92) (light)
    - **value**: rgb(0, 94, 14) -> rgb(21, 51, 1) (dark)
  - `--spectrum-celery-400`
    - **value**: rgb(114, 224, 106) -> rgb(129, 228, 58) (light)
    - **value**: rgb(0, 109, 15) -> rgb(31, 67, 4) (dark)
  - `--spectrum-celery-500`
    - **value**: rgb(78, 207, 80) -> rgb(110, 206, 42) (light)
    - **value**: rgb(0, 127, 15) -> rgb(41, 86, 8) (dark)
  - `--spectrum-celery-600`
    - **value**: rgb(39, 187, 54) -> rgb(93, 180, 31) (light)
    - **value**: rgb(0, 145, 18) -> rgb(50, 105, 11) (dark)
  - `--spectrum-celery-700`
    - **value**: rgb(7, 167, 33) -> rgb(82, 161, 25) (light)
    - **value**: rgb(4, 165, 30) -> rgb(60, 122, 15) (dark)
  - `--spectrum-celery-800`
    - **value**: rgb(0, 145, 18) -> rgb(72, 144, 20) (light)
    - **value**: rgb(34, 184, 51) -> rgb(66, 134, 18) (dark)
  - `--spectrum-celery-900`
    - **value**: rgb(0, 124, 15) -> rgb(64, 129, 17) (light)
    - **value**: rgb(68, 202, 73) -> rgb(78, 154, 23) (dark)
  - `--spectrum-celery-1000`
    - **value**: rgb(0, 103, 15) -> rgb(52, 109, 12) (light)
    - **value**: rgb(105, 220, 99) -> rgb(88, 172, 28) (dark)
  - `--spectrum-celery-1100`
    - **value**: rgb(0, 83, 13) -> rgb(44, 92, 9) (light)
    - **value**: rgb(142, 235, 127) -> rgb(100, 190, 35) (dark)
  - `--spectrum-celery-1200`
    - **value**: rgb(0, 64, 10) -> rgb(35, 75, 6) (light)
    - **value**: rgb(180, 247, 162) -> rgb(116, 213, 46) (dark)
  - `--spectrum-celery-1300`
    - **value**: rgb(0, 48, 7) -> rgb(27, 60, 3) (light)
    - **value**: rgb(221, 253, 211) -> rgb(136, 234, 65) (dark)
  - `--spectrum-celery-1400`
    - **value**: rgb(0, 34, 5) -> rgb(19, 46, 0) (light)
    - **value**: rgb(255, 255, 255) -> rgb(170, 251, 112) (dark)
  - `--spectrum-green-100`
    - **value**: rgb(206, 248, 224) -> rgb(237, 252, 241) (light)
    - **value**: rgb(4, 67, 41) -> rgb(0, 30, 23) (dark)
  - `--spectrum-green-200`
    - **value**: rgb(173, 244, 206) -> rgb(215, 247, 225) (light)
    - **value**: rgb(0, 78, 47) -> rgb(0, 38, 29) (dark)
  - `--spectrum-green-300`
    - **value**: rgb(137, 236, 188) -> rgb(173, 238, 197) (light)
    - **value**: rgb(0, 92, 56) -> rgb(0, 51, 38) (dark)
  - `--spectrum-green-400`
    - **value**: rgb(103, 222, 168) -> rgb(107, 227, 162) (light)
    - **value**: rgb(0, 108, 67) -> rgb(0, 68, 48) (dark)
  - `--spectrum-green-500`
    - **value**: rgb(73, 204, 147) -> rgb(43, 209, 125) (light)
    - **value**: rgb(0, 125, 78) -> rgb(2, 87, 58) (dark)
  - `--spectrum-green-600`
    - **value**: rgb(47, 184, 128) -> rgb(18, 184, 103) (light)
    - **value**: rgb(0, 143, 93) -> rgb(3, 106, 67) (dark)
  - `--spectrum-green-700`
    - **value**: rgb(21, 164, 110) -> rgb(11, 164, 93) (light)
    - **value**: rgb(18, 162, 108) -> rgb(4, 124, 75) (dark)
  - `--spectrum-green-800`
    - **value**: rgb(0, 143, 93) -> rgb(7, 147, 85) (light)
    - **value**: rgb(43, 180, 125) -> rgb(6, 136, 80) (dark)
  - `--spectrum-green-900`
    - **value**: rgb(0, 122, 77) -> rgb(5, 131, 78) (light)
    - **value**: rgb(67, 199, 143) -> rgb(9, 157, 89) (dark)
  - `--spectrum-green-1000`
    - **value**: rgb(0, 101, 62) -> rgb(3, 110, 69) (light)
    - **value**: rgb(94, 217, 162) -> rgb(14, 175, 98) (dark)
  - `--spectrum-green-1100`
    - **value**: rgb(0, 81, 50) -> rgb(2, 93, 60) (light)
    - **value**: rgb(129, 233, 184) -> rgb(24, 193, 110) (dark)
  - `--spectrum-green-1200`
    - **value**: rgb(5, 63, 39) -> rgb(1, 76, 52) (light)
    - **value**: rgb(177, 244, 209) -> rgb(57, 215, 134) (dark)
  - `--spectrum-green-1300`
    - **value**: rgb(10, 46, 29) -> rgb(0, 61, 44) (light)
    - **value**: rgb(223, 250, 234) -> rgb(126, 231, 172) (dark)
  - `--spectrum-green-1400`
    - **value**: rgb(10, 32, 21) -> rgb(0, 46, 34) (light)
    - **value**: rgb(254, 255, 252) -> rgb(189, 241, 208) (dark)
  - `--spectrum-seafoam-100`
    - **value**: rgb(206, 247, 243) -> rgb(235, 251, 246) (light)
    - **value**: rgb(18, 65, 63) -> rgb(0, 30, 27) (dark)
  - `--spectrum-seafoam-200`
    - **value**: rgb(170, 241, 234) -> rgb(211, 246, 234) (light)
    - **value**: rgb(14, 76, 73) -> rgb(0, 39, 35) (dark)
  - `--spectrum-seafoam-300`
    - **value**: rgb(140, 233, 226) -> rgb(169, 237, 216) (light)
    - **value**: rgb(4, 90, 87) -> rgb(0, 50, 44) (dark)
  - `--spectrum-seafoam-400`
    - **value**: rgb(101, 218, 210) -> rgb(92, 225, 194) (light)
    - **value**: rgb(0, 105, 101) -> rgb(0, 67, 59) (dark)
  - `--spectrum-seafoam-500`
    - **value**: rgb(63, 201, 193) -> rgb(16, 207, 169) (light)
    - **value**: rgb(0, 122, 117) -> rgb(2, 86, 75) (dark)
  - `--spectrum-seafoam-600`
    - **value**: rgb(15, 181, 174) -> rgb(13, 181, 149) (light)
    - **value**: rgb(0, 140, 135) -> rgb(4, 105, 89) (dark)
  - `--spectrum-seafoam-700`
    - **value**: rgb(0, 161, 154) -> rgb(11, 162, 134) (light)
    - **value**: rgb(0, 158, 152) -> rgb(6, 122, 103) (dark)
  - `--spectrum-seafoam-800`
    - **value**: rgb(0, 140, 135) -> rgb(9, 144, 120) (light)
    - **value**: rgb(3, 178, 171) -> rgb(8, 134, 112) (dark)
  - `--spectrum-seafoam-900`
    - **value**: rgb(0, 119, 114) -> rgb(7, 129, 109) (light)
    - **value**: rgb(54, 197, 189) -> rgb(10, 154, 128) (dark)
  - `--spectrum-seafoam-1000`
    - **value**: rgb(0, 99, 95) -> rgb(5, 108, 92) (light)
    - **value**: rgb(93, 214, 207) -> rgb(12, 173, 142) (dark)
  - `--spectrum-seafoam-1100`
    - **value**: rgb(12, 79, 76) -> rgb(3, 92, 80) (light)
    - **value**: rgb(132, 230, 223) -> rgb(14, 190, 156) (dark)
  - `--spectrum-seafoam-1200`
    - **value**: rgb(18, 60, 58) -> rgb(1, 75, 67) (light)
    - **value**: rgb(176, 242, 236) -> rgb(29, 214, 176) (dark)
  - `--spectrum-seafoam-1300`
    - **value**: rgb(18, 44, 43) -> rgb(0, 60, 54) (light)
    - **value**: rgb(223, 249, 246) -> rgb(122, 229, 203) (dark)
  - `--spectrum-seafoam-1400`
    - **value**: rgb(15, 31, 30) -> rgb(0, 46, 40) (light)
    - **value**: rgb(254, 255, 254) -> rgb(186, 241, 222) (dark)
  - `--spectrum-cyan-100`
    - **value**: rgb(197, 248, 255) -> rgb(238, 250, 254) (light)
    - **value**: rgb(0, 61, 98) -> rgb(0, 29, 39) (dark)
  - `--spectrum-cyan-200`
    - **value**: rgb(164, 240, 255) -> rgb(217, 244, 253) (light)
    - **value**: rgb(0, 71, 111) -> rgb(0, 36, 49) (dark)
  - `--spectrum-cyan-300`
    - **value**: rgb(136, 231, 250) -> rgb(183, 231, 252) (light)
    - **value**: rgb(0, 85, 127) -> rgb(0, 48, 65) (dark)
  - `--spectrum-cyan-400`
    - **value**: rgb(96, 216, 243) -> rgb(138, 213, 255) (light)
    - **value**: rgb(0, 100, 145) -> rgb(0, 64, 88) (dark)
  - `--spectrum-cyan-500`
    - **value**: rgb(51, 197, 232) -> rgb(92, 192, 255) (light)
    - **value**: rgb(0, 116, 162) -> rgb(0, 82, 113) (dark)
  - `--spectrum-cyan-600`
    - **value**: rgb(18, 176, 218) -> rgb(48, 167, 254) (light)
    - **value**: rgb(0, 134, 180) -> rgb(3, 99, 140) (dark)
  - `--spectrum-cyan-700`
    - **value**: rgb(1, 156, 200) -> rgb(29, 149, 231) (light)
    - **value**: rgb(0, 153, 198) -> rgb(8, 115, 168) (dark)
  - `--spectrum-cyan-800`
    - **value**: rgb(0, 134, 180) -> rgb(18, 134, 205) (light)
    - **value**: rgb(14, 173, 215) -> rgb(13, 125, 186) (dark)
  - `--spectrum-cyan-900`
    - **value**: rgb(0, 113, 159) -> rgb(11, 120, 179) (light)
    - **value**: rgb(44, 193, 230) -> rgb(24, 142, 220) (dark)
  - `--spectrum-cyan-1000`
    - **value**: rgb(0, 93, 137) -> rgb(4, 102, 145) (light)
    - **value**: rgb(84, 211, 241) -> rgb(38, 159, 244) (dark)
  - `--spectrum-cyan-1100`
    - **value**: rgb(0, 74, 115) -> rgb(0, 87, 121) (light)
    - **value**: rgb(127, 228, 249) -> rgb(63, 177, 255) (dark)
  - `--spectrum-cyan-1200`
    - **value**: rgb(0, 57, 93) -> rgb(0, 71, 98) (light)
    - **value**: rgb(167, 241, 255) -> rgb(107, 199, 255) (dark)
  - `--spectrum-cyan-1300`
    - **value**: rgb(0, 42, 70) -> rgb(0, 57, 78) (light)
    - **value**: rgb(215, 250, 255) -> rgb(152, 219, 255) (dark)
  - `--spectrum-cyan-1400`
    - **value**: rgb(0, 30, 51) -> rgb(0, 43, 59) (light)
    - **value**: rgb(255, 255, 255) -> rgb(195, 236, 252) (dark)
  - `--spectrum-indigo-100`
    - **value**: rgb(237, 238, 255) -> rgb(247, 248, 255) (light)
    - **value**: rgb(40, 44, 140) -> rgb(30, 0, 93) (dark)
  - `--spectrum-indigo-200`
    - **value**: rgb(224, 226, 255) -> rgb(235, 238, 255) (light)
    - **value**: rgb(47, 52, 163) -> rgb(35, 0, 110) (dark)
  - `--spectrum-indigo-300`
    - **value**: rgb(211, 213, 255) -> rgb(216, 222, 255) (light)
    - **value**: rgb(57, 63, 187) -> rgb(47, 0, 140) (dark)
  - `--spectrum-indigo-400`
    - **value**: rgb(193, 196, 255) -> rgb(192, 201, 255) (light)
    - **value**: rgb(70, 75, 211) -> rgb(62, 12, 174) (dark)
  - `--spectrum-indigo-500`
    - **value**: rgb(172, 175, 255) -> rgb(167, 178, 255) (light)
    - **value**: rgb(85, 91, 231) -> rgb(79, 30, 209) (dark)
  - `--spectrum-indigo-600`
    - **value**: rgb(149, 153, 255) -> rgb(145, 151, 254) (light)
    - **value**: rgb(104, 109, 244) -> rgb(95, 52, 235) (dark)
  - `--spectrum-indigo-700`
    - **value**: rgb(126, 132, 252) -> rgb(132, 128, 254) (light)
    - **value**: rgb(124, 129, 251) -> rgb(109, 75, 248) (dark)
  - `--spectrum-indigo-800`
    - **value**: rgb(104, 109, 244) -> rgb(122, 106, 253) (light)
    - **value**: rgb(145, 149, 255) -> rgb(116, 91, 252) (dark)
  - `--spectrum-indigo-900`
    - **value**: rgb(82, 88, 228) -> rgb(113, 85, 250) (light)
    - **value**: rgb(167, 170, 255) -> rgb(128, 119, 254) (dark)
  - `--spectrum-indigo-1000`
    - **value**: rgb(64, 70, 202) -> rgb(99, 56, 238) (light)
    - **value**: rgb(188, 190, 255) -> rgb(139, 141, 254) (dark)
  - `--spectrum-indigo-1100`
    - **value**: rgb(50, 54, 168) -> rgb(84, 36, 219) (light)
    - **value**: rgb(208, 210, 255) -> rgb(153, 161, 255) (dark)
  - `--spectrum-indigo-1200`
    - **value**: rgb(38, 41, 134) -> rgb(69, 19, 191) (light)
    - **value**: rgb(226, 228, 255) -> rgb(176, 186, 255) (dark)
  - `--spectrum-indigo-1300`
    - **value**: rgb(27, 30, 100) -> rgb(55, 6, 160) (light)
    - **value**: rgb(243, 243, 254) -> rgb(199, 208, 255) (dark)
  - `--spectrum-indigo-1400`
    - **value**: rgb(20, 22, 72) -> rgb(42, 0, 129) (light)
    - **value**: rgb(255, 255, 255) -> rgb(223, 228, 255) (dark)
  - `--spectrum-purple-100`
    - **value**: rgb(246, 235, 255) -> rgb(251, 247, 254) (light)
    - **value**: rgb(76, 13, 157) -> rgb(41, 0, 79) (dark)
  - `--spectrum-purple-200`
    - **value**: rgb(238, 221, 255) -> rgb(244, 235, 252) (light)
    - **value**: rgb(89, 17, 177) -> rgb(50, 0, 96) (dark)
  - `--spectrum-purple-300`
    - **value**: rgb(230, 208, 255) -> rgb(235, 218, 249) (light)
    - **value**: rgb(105, 28, 200) -> rgb(64, 0, 122) (dark)
  - `--spectrum-purple-400`
    - **value**: rgb(219, 187, 254) -> rgb(221, 193, 246) (light)
    - **value**: rgb(122, 45, 218) -> rgb(83, 0, 159) (dark)
  - `--spectrum-purple-500`
    - **value**: rgb(204, 164, 253) -> rgb(208, 167, 243) (light)
    - **value**: rgb(140, 65, 233) -> rgb(107, 6, 195) (dark)
  - `--spectrum-purple-600`
    - **value**: rgb(189, 139, 252) -> rgb(191, 138, 238) (light)
    - **value**: rgb(157, 87, 243) -> rgb(130, 34, 215) (dark)
  - `--spectrum-purple-700`
    - **value**: rgb(174, 114, 249) -> rgb(178, 114, 235) (light)
    - **value**: rgb(172, 111, 249) -> rgb(148, 62, 224) (dark)
  - `--spectrum-purple-800`
    - **value**: rgb(157, 87, 244) -> rgb(166, 92, 231) (light)
    - **value**: rgb(187, 135, 251) -> rgb(157, 78, 228) (dark)
  - `--spectrum-purple-900`
    - **value**: rgb(137, 61, 231) -> rgb(154, 71, 226) (light)
    - **value**: rgb(202, 159, 252) -> rgb(173, 105, 233) (dark)
  - `--spectrum-purple-1000`
    - **value**: rgb(115, 38, 211) -> rgb(134, 40, 217) (light)
    - **value**: rgb(215, 182, 254) -> rgb(186, 127, 237) (dark)
  - `--spectrum-purple-1100`
    - **value**: rgb(93, 19, 183) -> rgb(115, 13, 204) (light)
    - **value**: rgb(228, 204, 254) -> rgb(197, 149, 240) (dark)
  - `--spectrum-purple-1200`
    - **value**: rgb(71, 12, 148) -> rgb(93, 0, 177) (light)
    - **value**: rgb(239, 223, 255) -> rgb(212, 176, 244) (dark)
  - `--spectrum-purple-1300`
    - **value**: rgb(51, 16, 106) -> rgb(75, 0, 144) (light)
    - **value**: rgb(249, 240, 255) -> rgb(225, 201, 247) (dark)
  - `--spectrum-purple-1400`
    - **value**: rgb(35, 15, 73) -> rgb(59, 0, 111) (light)
    - **value**: rgb(255, 253, 255) -> rgb(238, 224, 250) (dark)
  - `--spectrum-fuchsia-100`
    - **value**: rgb(255, 233, 252) -> rgb(254, 246, 255) (light)
    - **value**: rgb(107, 3, 106) -> rgb(50, 0, 61) (dark)
  - `--spectrum-fuchsia-200`
    - **value**: rgb(255, 218, 250) -> rgb(253, 233, 255) (light)
    - **value**: rgb(123, 0, 123) -> rgb(61, 0, 74) (dark)
  - `--spectrum-fuchsia-300`
    - **value**: rgb(254, 199, 248) -> rgb(250, 211, 255) (light)
    - **value**: rgb(144, 0, 145) -> rgb(79, 0, 95) (dark)
  - `--spectrum-fuchsia-400`
    - **value**: rgb(251, 174, 246) -> rgb(247, 181, 255) (light)
    - **value**: rgb(165, 13, 166) -> rgb(102, 9, 120) (dark)
  - `--spectrum-fuchsia-500`
    - **value**: rgb(245, 146, 243) -> rgb(243, 147, 255) (light)
    - **value**: rgb(185, 37, 185) -> rgb(127, 23, 146) (dark)
  - `--spectrum-fuchsia-600`
    - **value**: rgb(237, 116, 237) -> rgb(236, 105, 255) (light)
    - **value**: rgb(205, 57, 206) -> rgb(151, 38, 170) (dark)
  - `--spectrum-fuchsia-700`
    - **value**: rgb(224, 85, 226) -> rgb(223, 77, 245) (light)
    - **value**: rgb(223, 81, 224) -> rgb(173, 51, 192) (dark)
  - `--spectrum-fuchsia-800`
    - **value**: rgb(205, 58, 206) -> rgb(200, 68, 220) (light)
    - **value**: rgb(235, 110, 236) -> rgb(186, 60, 206) (dark)
  - `--spectrum-fuchsia-900`
    - **value**: rgb(182, 34, 183) -> rgb(181, 57, 200) (light)
    - **value**: rgb(244, 140, 242) -> rgb(213, 73, 235) (dark)
  - `--spectrum-fuchsia-1000`
    - **value**: rgb(157, 3, 158) -> rgb(156, 40, 175) (light)
    - **value**: rgb(250, 168, 245) -> rgb(232, 91, 253) (dark)
  - `--spectrum-fuchsia-1100`
    - **value**: rgb(128, 0, 129) -> rgb(135, 27, 154) (light)
    - **value**: rgb(254, 194, 248) -> rgb(240, 122, 255) (dark)
  - `--spectrum-fuchsia-1200`
    - **value**: rgb(100, 6, 100) -> rgb(113, 15, 131) (light)
    - **value**: rgb(255, 219, 250) -> rgb(245, 159, 255) (dark)
  - `--spectrum-fuchsia-1300`
    - **value**: rgb(71, 14, 70) -> rgb(92, 4, 109) (light)
    - **value**: rgb(255, 239, 252) -> rgb(248, 191, 255) (dark)
  - `--spectrum-fuchsia-1400`
    - **value**: rgb(50, 13, 49) -> rgb(72, 0, 88) (light)
    - **value**: rgb(255, 253, 255) -> rgb(251, 219, 255) (dark)
  - `--spectrum-magenta-100`
    - **value**: rgb(255, 234, 241) -> rgb(255, 245, 248) (light)
    - **value**: rgb(118, 0, 58) -> rgb(59, 0, 22) (dark)
  - `--spectrum-magenta-200`
    - **value**: rgb(255, 220, 232) -> rgb(255, 232, 240) (light)
    - **value**: rgb(137, 0, 66) -> rgb(74, 0, 27) (dark)
  - `--spectrum-magenta-300`
    - **value**: rgb(255, 202, 221) -> rgb(255, 213, 227) (light)
    - **value**: rgb(160, 0, 77) -> rgb(93, 0, 34) (dark)
  - `--spectrum-magenta-400`
    - **value**: rgb(255, 178, 206) -> rgb(255, 185, 208) (light)
    - **value**: rgb(182, 18, 90) -> rgb(123, 0, 45) (dark)
  - `--spectrum-magenta-500`
    - **value**: rgb(255, 149, 189) -> rgb(255, 152, 187) (light)
    - **value**: rgb(203, 38, 109) -> rgb(152, 7, 60) (dark)
  - `--spectrum-magenta-600`
    - **value**: rgb(250, 119, 170) -> rgb(255, 112, 159) (light)
    - **value**: rgb(222, 61, 130) -> rgb(181, 19, 76) (dark)
  - `--spectrum-magenta-700`
    - **value**: rgb(239, 90, 152) -> rgb(255, 72, 133) (light)
    - **value**: rgb(237, 87, 149) -> rgb(207, 31, 92) (dark)
  - `--spectrum-magenta-800`
    - **value**: rgb(222, 61, 130) -> rgb(240, 45, 110) (light)
    - **value**: rgb(249, 114, 167) -> rgb(224, 38, 101) (dark)
  - `--spectrum-magenta-900`
    - **value**: rgb(200, 34, 105) -> rgb(217, 35, 97) (light)
    - **value**: rgb(255, 143, 185) -> rgb(255, 51, 119) (dark)
  - `--spectrum-magenta-1000`
    - **value**: rgb(173, 9, 85) -> rgb(186, 22, 80) (light)
    - **value**: rgb(255, 172, 202) -> rgb(255, 96, 149) (dark)
  - `--spectrum-magenta-1100`
    - **value**: rgb(142, 0, 69) -> rgb(163, 5, 62) (light)
    - **value**: rgb(255, 198, 218) -> rgb(255, 128, 171) (dark)
  - `--spectrum-magenta-1200`
    - **value**: rgb(112, 0, 55) -> rgb(136, 0, 51) (light)
    - **value**: rgb(255, 221, 233) -> rgb(255, 163, 194) (dark)
  - `--spectrum-magenta-1300`
    - **value**: rgb(84, 3, 42) -> rgb(111, 0, 40) (light)
    - **value**: rgb(255, 240, 245) -> rgb(255, 193, 214) (dark)
  - `--spectrum-magenta-1400`
    - **value**: rgb(60, 6, 29) -> rgb(86, 0, 30) (light)
    - **value**: rgb(255, 252, 253) -> rgb(255, 220, 232) (dark)
  - `--spectrum-opacity-checkerboard-square-dark`
  - `--spectrum-overlay-opacity`
    - **value**: 0.5 -> 0.6 (dark)
  - `--spectrum-drop-shadow-color`
  - `--spectrum-background-base-color`
  - `--spectrum-background-layer-1-color`
  - `--spectrum-background-layer-2-color`
    - **value**: `--spectrum-gray-50` -> `--spectrum-gray-25` (light)
    - **value**: `--spectrum-gray-100` -> `--spectrum-gray-75` (dark)
  - `--spectrum-neutral-background-color-default`
  - `--spectrum-neutral-background-color-hover`
  - `--spectrum-neutral-background-color-down`
  - `--spectrum-neutral-background-color-key-focus`
  - `--spectrum-neutral-background-color-selected-default`
  - `--spectrum-neutral-background-color-selected-hover`
  - `--spectrum-neutral-background-color-selected-down`
  - `--spectrum-neutral-background-color-selected-key-focus`
  - `--spectrum-neutral-subdued-background-color-default`
    - **value**: `--spectrum-gray-600` -> `--spectrum-gray-700` (light)
    - **value**: `--spectrum-gray-400` -> `--spectrum-gray-500` (dark)
  - `--spectrum-neutral-subdued-background-color-hover`
    - **value**: `--spectrum-gray-700` -> `--spectrum-gray-800` (light)
    - **value**: `--spectrum-gray-300` -> `--spectrum-gray-400` (dark)
  - `--spectrum-neutral-subdued-background-color-down`
    - **value**: `--spectrum-gray-200` -> `--spectrum-gray-400` (dark)
  - `--spectrum-neutral-subdued-background-color-key-focus`
    - **value**: `--spectrum-gray-700` -> `--spectrum-gray-800` (light)
    - **value**: `--spectrum-gray-300` -> `--spectrum-gray-400` (dark)
  - `--spectrum-accent-background-color-default`
    - **value**: `--spectrum-accent-color-500` -> `--spectrum-accent-color-800` (dark)
  - `--spectrum-accent-background-color-hover`
    - **value**: `--spectrum-accent-color-400` -> `--spectrum-accent-color-700` (dark)
  - `--spectrum-accent-background-color-down`
    - **value**: `--spectrum-accent-color-1100` -> `--spectrum-accent-color-1000` (light)
    - **value**: `--spectrum-accent-color-300` -> `--spectrum-accent-color-700` (dark)
  - `--spectrum-accent-background-color-key-focus`
    - **value**: `--spectrum-accent-color-400` -> `--spectrum-accent-color-700` (dark)
  - `--spectrum-informative-background-color-default`
    - **value**: `--spectrum-informative-color-500` -> `--spectrum-informative-color-800` (dark)
  - `--spectrum-informative-background-color-hover`
    - **value**: `--spectrum-informative-color-400` -> `--spectrum-informative-color-700` (dark)
  - `--spectrum-informative-background-color-down`
    - **value**: `--spectrum-informative-color-1100` -> `--spectrum-informative-color-1000` (light)
    - **value**: `--spectrum-informative-color-300` -> `--spectrum-informative-color-700` (dark)
  - `--spectrum-informative-background-color-key-focus`
    - **value**: `--spectrum-informative-color-400` -> `--spectrum-informative-color-700` (dark)
  - `--spectrum-negative-background-color-default`
    - **value**: `--spectrum-negative-color-500` -> `--spectrum-negative-color-800` (dark)
  - `--spectrum-negative-background-color-hover`
    - **value**: `--spectrum-negative-color-400` -> negative-color-700 (dark)
  - `--spectrum-negative-background-color-down`
    - **value**: `--spectrum-negative-color-1100` -> `--spectrum-negative-color-1000` (light)
    - **value**: `--spectrum-negative-color-300` -> `--spectrum-negative-color-700` (dark)
  - `--spectrum-negative-background-color-key-focus`
    - **value**: `--spectrum-negative-color-400` -> `--spectrum-negative-color-700` (dark)
  - `--spectrum-positive-background-color-default`
    - **value**: `--spectrum-positive-color-500` -> `--spectrum-positive-color-800` (dark)
  - `--spectrum-positive-background-color-hover`
    - **value**: `--spectrum-positive-color-400` -> `--spectrum-positive-color-700` (dark)
  - `--spectrum-positive-background-color-down`
    - **value**: `--spectrum-positive-color-1100` -> `--spectrum-positive-color-1000` (light)
    - **value**: `--spectrum-positive-color-300` -> `--spectrum-positive-color-700` (dark)
  - `--spectrum-positive-background-color-key-focus`
    - **value**: `--spectrum-positive-color-400` -> `--spectrum-positive-color-700` (dark)
  - `--spectrum-notice-background-color-default`
    - **value**: `--spectrum-notice-color-800` -> `--spectrum-notice-color-900` (dark)
  - `--spectrum-disabled-background-color`
    - **value**: `--spectrum-gray-200` -> `--spectrum-gray-100`
  - `--spectrum-disabled-static-white-background-color`
    - **value**: `--spectrum-transparent-white-200` -> `--spectrum-transparent-white-100`
  - `--spectrum-disabled-static-black-background-color`
    - **value**: `--spectrum-transparent-black-200` -> `--spectrum-transparent-black-100`
  - `--spectrum-gray-background-color-default`
    - **value**: `--spectrum-gray-700` -> `--spectrum-gray-500` (dark)
  - `--spectrum-red-background-color-default`
    - **value**: `--spectrum-red-700` -> `--spectrum-red-800` (dark)
  - `--spectrum-orange-background-color-default`
    - **value**: `--spectrum-orange-800` -> `--spectrum-orange-900` (dark)
  - `--spectrum-yellow-background-color-default`
    - **value**: `--spectrum-yellow-1000` -> `--spectrum-yellow-1100` (dark)
  - `--spectrum-chartreuse-background-color-default`
    - **value**: `--spectrum-chartreuse-900` -> `--spectrum-chartreuse-1000` (dark)
  - `--spectrum-celery-background-color-default`
    - **value**: `--spectrum-celery-800` -> `--spectrum-celery-900` (dark)
  - `--spectrum-green-background-color-default`
    - **value**: `--spectrum-green-700` -> `--spectrum-green-800` (dark)
  - `--spectrum-seafoam-background-color-default`
    - **value**: `--spectrum-seafoam-700` -> `--spectrum-seafoam-800` (dark)
  - `--spectrum-cyan-background-color-default`
    - **value**: `--spectrum-cyan-700` -> `--spectrum-cyan-800` (dark)
  - `--spectrum-blue-background-color-default`
    - **value**: `--spectrum-blue-700` -> `--spectrum-blue-800` (dark)
  - `--spectrum-indigo-background-color-default`
    - **value**: `--spectrum-indigo-700` -> `--spectrum-indigo-800` (dark)
  - `--spectrum-purple-background-color-default`
    - **value**: `--spectrum-purple-700` -> `--spectrum-purple-800` (dark)
  - `--spectrum-fuchsia-background-color-default`
    - **value**: `--spectrum-fuchsia-700` -> `--spectrum-fuchsia-800` (dark)
  - `--spectrum-magenta-background-color-default`
    - **value**: `--spectrum-magenta-700` -> `--spectrum-magenta-800` (dark)
  - `--spectrum-neutral-subdued-content-color-down`
    - **value**: `--spectrum-gray-900` -> `--spectrum-gray-800`
  - `--spectrum-accent-content-color-down`
    - **value**: `--spectrum-accent-color-1100` -> `--spectrum-accent-color-1000`
  - `--spectrum-negative-content-color-down`
    - **value**: `--spectrum-negative-color-1100` -> `--spectrum-negative-color-1000`
  - `--spectrum-disabled-static-white-content-color`
    - **value**: `--spectrum-transparent-white-500` -> `--spectrum-transparent-white-400`
  - `--spectrum-disabled-static-black-content-color`
    - **value**: `--spectrum-transparent-black-500` -> `--spectrum-transparent-black-400`
  - `--spectrum-neutral-visual-color`
  - `--spectrum-accent-visual-color`
  - `--spectrum-informative-visual-color`
  - `--spectrum-negative-visual-color`
    - **value**: `--spectrum-negative-color-700` -> `--spectrum-negative-color-900` (dark)
  - `--spectrum-notice-visual-color`
    - **value**: `--spectrum-notice-color-700` -> `--spectrum-notice-color-800` (light)
  - `--spectrum-positive-visual-color`
    - **value**: `--spectrum-positive-color-700` -> `--spectrum-positive-color-800` (light)
    - **value**: `--spectrum-positive-color-800` -> `--spectrum-positive-color-900` (dark)
  - `--spectrum-gray-visual-color`
  - `--spectrum-red-visual-color`
  - `--spectrum-orange-visual-color`
  - `--spectrum-yellow-visual-color`
  - `--spectrum-chartreuse-visual-color`
  - `--spectrum-celery-visual-color`
  - `--spectrum-green-visual-color`
  - `--spectrum-seafoam-visual-color`
  - `--spectrum-cyan-visual-color`
  - `--spectrum-blue-visual-color`
  - `--spectrum-indigo-visual-color`
  - `--spectrum-purple-visual-color`
  - `--spectrum-fuchsia-visual-color`
  - `--spectrum-magenta-visual-color`

  **Please note** that the S1 and Express contexts are no longer shipped in this tokens package. Though individual components can still render those styles, you must load the v14.x or v15.x versions of the tokens package with the component styles in order to do so. These token assets are only for use with the S2 mappings of the components.

### Minor Changes

- [#3529](https://github.com/adobe/spectrum-css/pull/3529) [`3d08cea`](https://github.com/adobe/spectrum-css/commit/3d08cea0f590c8c2de7252677a6b81b8cc206b9a) Thanks [@castastrophe](https://github.com/castastrophe)! - Add JSON to token package exports.

  Remove CSS files from commit history (but continue to build and ship them in the releases).

  Stop physically copying the `dist/css/index.css` to `dist/index.css` and instead, map `dist/index.css` in the package exports to the same `dist/css/index.css` file.

## 15.2.0

### Minor Changes

- [#3522](https://github.com/adobe/spectrum-css/pull/3522) [`7a47c22`](https://github.com/adobe/spectrum-css/commit/7a47c2266b6d0e8c99061fe85cba8d52684bae39) Thanks [@castastrophe](https://github.com/castastrophe)! - The shipped index assets will now come with a version comment stamped at the top of the file.

  New JSON format! The new `tokens/dist/json/tokens.json` asset provides a queryable asset with custom property names, values available by set.

## 15.1.0

### Minor Changes

- [#3359](https://github.com/adobe/spectrum-css/pull/3359) [`c8194b0`](https://github.com/adobe/spectrum-css/commit/c8194b0a5b6e115d7db680f287eb8a2a9709906b) Thanks [@cdransf](https://github.com/cdransf)! - This resolves our remaining stylelint issues around undefined tokens, rule order, unused values and color syntax.

  - Updates invalid color syntax from `rgba(N, N, N, N)` to `rgba(N N N / N)`.
  - In cases of duplicate properties, preserves the property that would be applied given current code structure.
  - Updates misnamed tokens to use valid tokens (`table/index.css`).

## 15.0.0

### Major Changes

- [#3488](https://github.com/adobe/spectrum-css/pull/3488) [`40c1954`](https://github.com/adobe/spectrum-css/commit/40c1954048f735a07f9edfccf3a568d38164806a) Thanks [@castastrophe](https://github.com/castastrophe)! - ### Breaking change

  This update removes the compiled `components` directory from the token output. Instead, customers are asked to source the theming data from the component's `theme/(express,spectrum,spectrum-two).css` and `index-theme.css`. For example:

  ```
  import "@spectrum-css/actionbutton/dist/index-base.css";
  import "@spectrum-css/actionbutton/dist/index-theme.css";
  import "@spectrum-css/actionbutton/dist/themes/express.css";
  ```

  In addition, the `custom-*-vars.css` files previously shipped in the `spectrum` and `express` folders will no longer be shipped separately. This data already exists in the `*-vars.css` file with a matching name. For example, `spectrum/custom-large-vars.css` already exists within `spectrum/large-vars.css`, concatenated with the token-generated output.

  ### Minor

  Whitespace has been cleaned up in the exported content for readability.

## 14.6.0

### Minor Changes

- [#3266](https://github.com/adobe/spectrum-css/pull/3266) [`4b818e1`](https://github.com/adobe/spectrum-css/commit/4b818e1062202e404de1350938ce2a19146aa0b0) Thanks [@5t3ph](https://github.com/5t3ph)! - For Coach indicator, marks "light" and "dark" variants for deprecation going into S2, and adds "static white" per direction from design.

## 14.5.0

### Minor Changes

- [#3253](https://github.com/adobe/spectrum-css/pull/3253) [`47f23a7`](https://github.com/adobe/spectrum-css/commit/47f23a762a5c84ffe3c82e7e1b0c4c9d5dc60f86) Thanks [@castastrophe](https://github.com/castastrophe)! - Add component-level token overrides from card, contextualhelp, swatch, and typography to ensure valid theme toggling.

  Light/dark/darkest custom overrides added: `--spectrum-card-selected-background-color-rgb`, `--spectrum-swatch-border-color`, `--spectrum-swatch-border-color-light`
  Medium/large custom overrides added: `--spectrum-contextual-help-content-spacing`
  Global custom overrides added: `--spectrum-font-family-ar`, `--spectrum-font-family-he`, `--spectrum-font-family`, `--spectrum-font-style`, `--spectrum-font-size`

## 14.4.0

### Minor Changes

- [#3060](https://github.com/adobe/spectrum-css/pull/3060) [`7d41874`](https://github.com/adobe/spectrum-css/commit/7d418746362e7fe35f47e67e30682d7bf87ecfc7) Thanks [@castastrophe](https://github.com/castastrophe)! - Update build steps for the token rollup to generate the component theming assets instead of relying on component build steps to produce them.

## 14.3.2

### Patch Changes

- [#3137](https://github.com/adobe/spectrum-css/pull/3137) [`b16a159`](https://github.com/adobe/spectrum-css/commit/b16a159bd8b1456b384f13f51ab0cdb318a692e8) Thanks [@castastrophe](https://github.com/castastrophe)! - `--spectrum-well-border-color` was mapped to the `-rgb` postfixed value which resolves to a raw rgb number but not a valid color.

## 14.3.1

### Patch Changes

- [#2840](https://github.com/adobe/spectrum-css/pull/2840) [`84a70bb`](https://github.com/adobe/spectrum-css/commit/84a70bb076ac7afd15122d3b53299a4f1ccd1af3) Thanks [@castastrophe](https://github.com/castastrophe)! - Tokens update to correct the background color used in documentation for static black.

  Feature that updates storybook to move shared arg types to the global scope.

## 14.3.0

### Minor Changes

- [#2803](https://github.com/adobe/spectrum-css/pull/2803) [`2c5e5eb`](https://github.com/adobe/spectrum-css/commit/2c5e5ebc4d1dca38f877ad1e31f69315831c5717) Thanks [@castastrophe](https://github.com/castastrophe)! - This feature adds the custom variables for each context (spectrum and express) to the root-named asset (dist/css/express/global-vars.css)

## 14.2.0

### Minor Changes

- [#2766](https://github.com/adobe/spectrum-css/pull/2766) [`8a123ae`](https://github.com/adobe/spectrum-css/commit/8a123ae6dbc75bcab3dfd43d856de408e7eaab1b) Thanks [@dependabot](https://github.com/apps/dependabot)! - New token `--spectrum-accordion-top-to-text-spacious-small` available to be used.

## 14.1.0

### Minor Changes

- [#2742](https://github.com/adobe/spectrum-css/pull/2742) [`1e74ab7`](https://github.com/adobe/spectrum-css/commit/1e74ab7511257efa80f02da7a3115d302093ac6f) Thanks [@castastrophe](https://github.com/castastrophe)! - ### New token output files

  - Adds component-specific theme mappings to the tokens package; this supports SWC offering S1 and S2 in tandem
  - Adds an index file to list all available component-specific files

## 14.1.0-alpha.3

### Minor Changes

- Adding an index file for all new component assets listed in the token package output.

## 14.1.0-alpha.2

### Patch Changes

- [#2742](https://github.com/adobe/spectrum-css/pull/2742) [`336a558`](https://github.com/adobe/spectrum-css/commit/336a558d23b0aa66b5a15e85881b12a261a69bf0) Thanks [@castastrophe](https://github.com/castastrophe)! - Fixed a bug where the bridge tokens were being injected into the express and spectrum component-specific files

## 14.1.0-alpha.1

### Patch Changes

- fix: support full dist output in release

## 14.1.0-alpha.0

### Minor Changes

- feat: adding component-specific theme mappings and new bridge files to support S1 and S2 in tandem


<a name="14.0.0"></a>

## 14.0.0

🗓 2024-04-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@13.2.0...@spectrum-css/tokens@14.0.0)

- feat!: postcss config build and script; remove gulp (#2466)([b0f337b](https://github.com/adobe/spectrum-css/commit/b0f337b)), closes[#2466](https://github.com/adobe/spectrum-css/issues/2466)

### 🛑 BREAKING CHANGES

- Removes component-builder & component-builder-simple for script leveraging postcss
- Imports added to index.css and themes/express.css

<a name="13.2.0"></a>

## 13.2.0

🗓 2024-02-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@13.1.2...@spectrum-css/tokens@13.2.0)

### ✨ Features

- **tokens:**use spectrum-tokens@12.24.0([b20ebb6](https://github.com/adobe/spectrum-css/commit/b20ebb6))

<a name="13.1.2"></a>

## 13.1.2

🗓 2024-02-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@13.1.1...@spectrum-css/tokens@13.1.2)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="13.1.1"></a>

## 13.1.1

🗓 2024-02-06

**Note:** Version bump only for package @spectrum-css/tokens

<a name="13.1.0"></a>

## 13.1.0

🗓 2024-02-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@13.0.9...@spectrum-css/tokens@13.1.0)

### ✨ Features

- **tokens:**add icon xxl and xxs tokens([b2d71bc](https://github.com/adobe/spectrum-css/commit/b2d71bc))

<a name="13.0.9"></a>

## 13.0.9

🗓 2024-01-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@13.0.8...@spectrum-css/tokens@13.0.9)

### 🐛 Bug fixes

\*deprecate logical transform plugin ([#2437](https://github.com/adobe/spectrum-css/issues/2437))([ff5dda6](https://github.com/adobe/spectrum-css/commit/ff5dda6))

<a name="13.0.8"></a>

## 13.0.8

🗓 2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@13.0.7...@spectrum-css/tokens@13.0.8)

### 🐛 Bug fixes

- **tokens:**add compiled token assets to git([916b670](https://github.com/adobe/spectrum-css/commit/916b670))\*
  **tokens:**dependency updates([f9395a3](https://github.com/adobe/spectrum-css/commit/f9395a3))

<a name="13.0.7"></a>

## 13.0.7

🗓 2024-01-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@13.0.6...@spectrum-css/tokens@13.0.7)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="13.0.6"></a>

## 13.0.6

🗓 2023-12-12 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@13.0.5...@spectrum-css/tokens@13.0.6)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="13.0.5"></a>

## 13.0.5

🗓 2023-12-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@13.0.4...@spectrum-css/tokens@13.0.5)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="13.0.4"></a>

## 13.0.4

🗓 2023-11-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@13.0.0...@spectrum-css/tokens@13.0.4)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="13.0.3"></a>

## 13.0.3

🗓 2023-11-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@13.0.0...@spectrum-css/tokens@13.0.3)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="13.0.0"></a>

## 13.0.0

🗓 2023-11-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@12.0.0...@spectrum-css/tokens@13.0.0)

### 🐛 Bug fixes

-     **sidenav:**remove temporary custom tokens ([#2256](https://github.com/adobe/spectrum-css/issues/2256))([af0edde](https://github.com/adobe/spectrum-css/commit/af0edde))*
      **tokens:**use latest spectrum-tokens release([e8202b1](https://github.com/adobe/spectrum-css/commit/e8202b1))

  *feat(dropindicator)!: migrate to spectrum tokens (#2198)([da24515](https://github.com/adobe/spectrum-css/commit/da24515)), closes[#2198](https://github.com/adobe/spectrum-css/issues/2198)*refactor(assetcard)!: token migration (#2229)([a0cf37b](https://github.com/adobe/spectrum-css/commit/a0cf37b)), closes[#2229](https://github.com/adobe/spectrum-css/issues/2229)

      	###
      	🛑 BREAKING CHANGES

      		*
      		migrates DropIndicator to use `@adobe/spectrum-tokens`
      		*
      		migrate asset card to updated token system

<a name="12.0.0"></a>

## 12.0.0

🗓 2023-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@11.4.0...@spectrum-css/tokens@12.0.0)

\*feat(modal)!: diy migration (#2164)([0b83f13](https://github.com/adobe/spectrum-css/commit/0b83f13)), closes[#2164](https://github.com/adobe/spectrum-css/issues/2164)

### 🛑 BREAKING CHANGES

    		*
    		migrates Modal to use `@adobe/spectrum-tokens`

Additionally:

- feat(modal)!: migrate to spectrum tokens

- chore(tokens): add modal custom tokens

chore(modal): fixed indentation index.css

chore(modal): added mod variables

chore(modal): updated package version

chore(modal): updated css to use custom tokens for animation

chore: updated css properties

- docs(modal): regenerate mods

<a name="11.4.0"></a>

## 11.4.0

🗓 2023-09-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@11.3.7...@spectrum-css/tokens@11.4.0)

### ✨ Features

- **tokens:**adds ui icons tokens ([#2186](https://github.com/adobe/spectrum-css/issues/2186))([732e573](https://github.com/adobe/spectrum-css/commit/732e573))

<a name="11.3.7"></a>

## 11.3.7

🗓 2023-09-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@11.3.6...@spectrum-css/tokens@11.3.7)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="11.3.6"></a>

## 11.3.6

🗓 2023-09-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@11.3.5...@spectrum-css/tokens@11.3.6)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="11.3.5"></a>

## 11.3.5

🗓 2023-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@11.3.4...@spectrum-css/tokens@11.3.5)

### 🐛 Bug fixes

- **well:**missing semicolons in custom vars ([#2163](https://github.com/adobe/spectrum-css/issues/2163))([814c49e](https://github.com/adobe/spectrum-css/commit/814c49e))

<a name="11.3.4"></a>

## 11.3.4

🗓 2023-09-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@11.3.3...@spectrum-css/tokens@11.3.4)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="11.3.3"></a>

## 11.3.3

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@11.3.2...@spectrum-css/tokens@11.3.3)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="11.3.2"></a>

## 11.3.2

🗓 2023-08-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@11.3.1...@spectrum-css/tokens@11.3.2)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="11.3.1"></a>

## 11.3.1

🗓 2023-08-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@11.3.0...@spectrum-css/tokens@11.3.1)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="11.3.0"></a>

## 11.3.0

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@11.2.2...@spectrum-css/tokens@11.3.0)

### ✨ Features

- **tokens:**update to spectrum-tokens v12.17.0 ([#2118](https://github.com/adobe/spectrum-css/issues/2118))([57d1d93](https://github.com/adobe/spectrum-css/commit/57d1d93))

<a name="11.2.2"></a>

## 11.2.2

🗓 2023-08-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@11.2.0...@spectrum-css/tokens@11.2.2)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="11.2.1"></a>

## 11.2.1

🗓 2023-08-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@11.2.0...@spectrum-css/tokens@11.2.1)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="11.2.0"></a>

## 11.2.0

🗓 2023-08-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@11.1.0...@spectrum-css/tokens@11.2.0)

### ✨ Features

- **badge,tokens:**add non-semantic colors ([#2077](https://github.com/adobe/spectrum-css/issues/2077))([1bac588](https://github.com/adobe/spectrum-css/commit/1bac588))

### 🐛 Bug fixes

\*revert prettier ([#2074](https://github.com/adobe/spectrum-css/issues/2074))([ebb98df](https://github.com/adobe/spectrum-css/commit/ebb98df))

<a name="11.1.0"></a>

## 11.1.0

🗓 2023-08-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@11.0.2...@spectrum-css/tokens@11.1.0)

### ✨ Features

- **tokens:**update to spectrum tokens v12.16.0 ([#2064](https://github.com/adobe/spectrum-css/issues/2064))([75ffb63](https://github.com/adobe/spectrum-css/commit/75ffb63))

<a name="11.0.2"></a>

## 11.0.2

🗓 2023-07-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@11.0.1...@spectrum-css/tokens@11.0.2)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="11.0.1"></a>

## 11.0.1

🗓 2023-07-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@11.0.0...@spectrum-css/tokens@11.0.1)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="11.0.0"></a>

## 11.0.0

🗓 2023-07-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@10.2.2...@spectrum-css/tokens@11.0.0)

### ✨ Features

-     **tokens:**update to spectrum-tokens 12.4.0 ([#2031](https://github.com/adobe/spectrum-css/issues/2031))([955c8f1](https://github.com/adobe/spectrum-css/commit/955c8f1))

  \*feat(tokens)!: prefer lowercase, hyphenated font names in font stacks (#2007)([e978a3a](https://github.com/adobe/spectrum-css/commit/e978a3a)), closes[#2007](https://github.com/adobe/spectrum-css/issues/2007)

      	###
      	🛑 BREAKING CHANGES

      		*
      		updates the font-family stacks to remove the provided

  value from `@adobe/spectrum-tokens`, and instead use the "older" naming
  syntax that Spectrum CSS had used previously.

<a name="10.2.2"></a>

## 10.2.2

🗓 2023-07-11 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@10.2.1...@spectrum-css/tokens@10.2.2)

### 🐛 Bug fixes

\*revert prettier version bump ([#2004](https://github.com/adobe/spectrum-css/issues/2004))([29b179c](https://github.com/adobe/spectrum-css/commit/29b179c))

<a name="10.2.1"></a>

## 10.2.1

🗓 2023-06-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@10.2.0...@spectrum-css/tokens@10.2.1)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="10.2.0"></a>

## 10.2.0

🗓 2023-06-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@10.1.2...@spectrum-css/tokens@10.2.0)

### ✨ Features

- **tokens:**update to spectrum-tokens v12.12.0([1bf989f](https://github.com/adobe/spectrum-css/commit/1bf989f))

<a name="10.1.2"></a>

## 10.1.2

🗓 2023-06-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@10.1.1...@spectrum-css/tokens@10.1.2)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="10.1.1"></a>

## 10.1.1

🗓 2023-05-23 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@10.1.0...@spectrum-css/tokens@10.1.1)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="10.1.0"></a>

## 10.1.0

🗓 2023-05-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@10.0.0...@spectrum-css/tokens@10.1.0)

### ✨ Features

- **alertbanner:** add AlertBanner component ([#1798](https://github.com/adobe/spectrum-css/issues/1798)) ([1610e7a](https://github.com/adobe/spectrum-css/commit/1610e7a))

<a name="10.0.0"></a>

## 10.0.0

🗓 2023-05-10 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@9.3.0...@spectrum-css/tokens@10.0.0)

- chore(colorhandle, colorloupe, tokens)!: remove custom tokens (#1826) ([c41af3a](https://github.com/adobe/spectrum-css/commit/c41af3a)), closes [#1826](https://github.com/adobe/spectrum-css/issues/1826)

### 🛑 BREAKING CHANGES

- removes several Color-component related tokens from `@spectrum-css/tokens`

- chore(colorhandle): remove custom tokens
- chore(colorhandle): remove use of custom tokens
- chore(colorloupe): update tokens for colorloupe
- chore(colorhandle, colorloupe): remove comments

<a name="9.3.0"></a>

## 9.3.0

🗓 2023-05-08 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@9.2.0...@spectrum-css/tokens@9.3.0)

### ✨ Features

- **tokens:** use v12.8.0 of @adobe/spectrum-tokens ([#1843](https://github.com/adobe/spectrum-css/issues/1843)) ([19abf2f](https://github.com/adobe/spectrum-css/commit/19abf2f))

<a name="9.2.0"></a>

## 9.2.0

🗓 2023-05-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@9.1.0...@spectrum-css/tokens@9.2.0)

### ✨ Features

- **tokens:** update to latest release ([c775889](https://github.com/adobe/spectrum-css/commit/c775889))

<a name="9.1.0"></a>

## 9.1.0

🗓 2023-05-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@9.0.4...@spectrum-css/tokens@9.1.0)

### ✨ Features

- **tokens:** add custom drop zone rgb background color tokens ([#1834](https://github.com/adobe/spectrum-css/issues/1834)) ([b637006](https://github.com/adobe/spectrum-css/commit/b637006))

<a name="9.0.4"></a>

## 9.0.4

🗓 2023-04-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@9.0.3...@spectrum-css/tokens@9.0.4)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="9.0.3"></a>

## 9.0.3

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@9.0.1...@spectrum-css/tokens@9.0.3)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="9.0.2"></a>

## 9.0.2

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@9.0.1...@spectrum-css/tokens@9.0.2)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="9.0.1"></a>

## 9.0.1

🗓 2023-04-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@9.0.0...@spectrum-css/tokens@9.0.1)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="9.0.0"></a>

## 9.0.0

🗓 2023-04-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@8.1.1...@spectrum-css/tokens@9.0.0)

- chore(tokens)!: use v12.6.0 release of @adobe/spectrum-tokens ([419aa49](https://github.com/adobe/spectrum-css/commit/419aa49))

### 🛑 BREAKING CHANGES

- updates to `@adobe/spectrum-tokens@12.6.0`.

- Includes additions and deprecations from `12.5.0`
- https://github.com/adobe/spectrum-tokens/releases/tag/%40adobe%2Fspectrum-tokens%4012.5.0
- Includes additions, updates, and deprecations from `12.6.0`
- https://github.com/adobe/spectrum-tokens/releases/tag/%40adobe%2Fspectrum-tokens%4012.6.0

<a name="8.1.1"></a>

## 8.1.1

🗓 2023-04-20 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@8.1.0...@spectrum-css/tokens@8.1.1)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="8.1.0"></a>

## 8.1.0

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@8.0.4...@spectrum-css/tokens@8.1.0)

### ✨ Features

- **tokens:** bring in latest tokens (field, picker) ([#1776](https://github.com/adobe/spectrum-css/issues/1776)) ([19c7474](https://github.com/adobe/spectrum-css/commit/19c7474))

<a name="8.0.4"></a>

## 8.0.4

🗓 2023-04-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@8.0.2...@spectrum-css/tokens@8.0.4)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="8.0.3"></a>

## 8.0.3

🗓 2023-04-14 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@8.0.2...@spectrum-css/tokens@8.0.3)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="8.0.2"></a>

## 8.0.2

🗓 2023-04-06 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@8.0.0...@spectrum-css/tokens@8.0.2)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="8.0.1"></a>

## 8.0.1

🗓 2023-04-04 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@8.0.0...@spectrum-css/tokens@8.0.1)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="8.0.0"></a>

## 8.0.0

🗓 2023-04-03 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@7.7.0...@spectrum-css/tokens@8.0.0)

- fix(tokens)!: rgb transform to split out rgb values from css attributes (#1590) ([b714db4](https://github.com/adobe/spectrum-css/commit/b714db4)), closes [#1590](https://github.com/adobe/spectrum-css/issues/1590)

### 🛑 BREAKING CHANGES

- transforms color tokens to split out their `rgb` values

Co-authored-by: castastrophe <castastrophe@users.noreply.github.com>

<a name="7.7.0"></a>

## 7.7.0

🗓 2023-03-31 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@7.6.1...@spectrum-css/tokens@7.7.0)

### ✨ Features

- **tokens:** add open type conversion to style-dictionary ([7a423aa](https://github.com/adobe/spectrum-css/commit/7a423aa))

<a name="7.6.1"></a>

## 7.6.1

🗓 2023-03-27 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@7.6.0...@spectrum-css/tokens@7.6.1)

### 🐛 Bug fixes

- **tokens:** add 'px' to zero length value for combobox ([#1683](https://github.com/adobe/spectrum-css/issues/1683)) ([f17c67e](https://github.com/adobe/spectrum-css/commit/f17c67e))

<a name="7.6.0"></a>

## 7.6.0

🗓 2023-03-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@7.5.1...@spectrum-css/tokens@7.6.0)

### ✨ Features

- **tokens:** updates accordion, colorhandle, coachmark, menuitem tokens ([#1678](https://github.com/adobe/spectrum-css/issues/1678)) ([d480489](https://github.com/adobe/spectrum-css/commit/d480489))

<a name="7.5.1"></a>

## 7.5.1

🗓 2023-03-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@7.5.0...@spectrum-css/tokens@7.5.1)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="7.5.0"></a>

## 7.5.0

🗓 2023-03-07 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@7.4.0...@spectrum-css/tokens@7.5.0)

### ✨ Features

- **tokens:** add medium, large tokens for rating-icon-spacing ([#1664](https://github.com/adobe/spectrum-css/issues/1664)) ([955b2b3](https://github.com/adobe/spectrum-css/commit/955b2b3))

<a name="7.4.0"></a>

## 7.4.0

🗓 2023-03-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@7.3.0...@spectrum-css/tokens@7.4.0)

### ✨ Features

- adds colorwheel custom express tokens ([#1647](https://github.com/adobe/spectrum-css/issues/1647)) ([5d8e671](https://github.com/adobe/spectrum-css/commit/5d8e671))

<a name="7.3.0"></a>

## 7.3.0

🗓 2023-02-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@7.2.0...@spectrum-css/tokens@7.3.0)

### ✨ Features

- **tokens:** adds menu scale and theme tokens ([#1641](https://github.com/adobe/spectrum-css/issues/1641)) ([f477c60](https://github.com/adobe/spectrum-css/commit/f477c60))

<a name="7.2.0"></a>

## 7.2.0

🗓 2023-02-24 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@7.1.0...@spectrum-css/tokens@7.2.0)

### ✨ Features

- **tokens:** adds colorwheel and colorhandle custom tokens ([#1634](https://github.com/adobe/spectrum-css/issues/1634)) ([e55c35d](https://github.com/adobe/spectrum-css/commit/e55c35d))

<a name="7.1.0"></a>

## 7.1.0

🗓 2023-02-21 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@7.0.0...@spectrum-css/tokens@7.1.0)

### ✨ Features

- **tokens:** use full v12 release ([#1624](https://github.com/adobe/spectrum-css/issues/1624)) ([b921bb2](https://github.com/adobe/spectrum-css/commit/b921bb2))

<a name="7.0.0"></a>

## 7.0.0

🗓 2023-02-01 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@6.3.0...@spectrum-css/tokens@7.0.0)

- chore(tokens)!: use latest dependency & fix build error (#1591) ([f2532e7](https://github.com/adobe/spectrum-css/commit/f2532e7)), closes [#1591](https://github.com/adobe/spectrum-css/issues/1591)

### 🛑 BREAKING CHANGES

- uses latest `@adobe/spectrum-tokens` dependency which includes token renames

<a name="6.3.0"></a>

## 6.3.0

🗓 2023-01-25 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@6.2.2...@spectrum-css/tokens@6.3.0)

### ✨ Features

- **tokens:** adds platform size props for slider ([#1594](https://github.com/adobe/spectrum-css/issues/1594)) ([d889fdf](https://github.com/adobe/spectrum-css/commit/d889fdf))

<a name="6.2.2"></a>

## 6.2.2

🗓 2023-01-18 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@6.2.0...@spectrum-css/tokens@6.2.2)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="6.2.1"></a>

## 6.2.1

🗓 2023-01-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@6.2.0...@spectrum-css/tokens@6.2.1)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="6.2.0"></a>

## 6.2.0

🗓 2023-01-05 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@6.1.0...@spectrum-css/tokens@6.2.0)

### ✨ Features

- **tokens:** adds global animation vars ([#1570](https://github.com/adobe/spectrum-css/issues/1570)) ([0450c28](https://github.com/adobe/spectrum-css/commit/0450c28))

<a name="6.1.0"></a>

## 6.1.0

🗓 2022-12-15 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@6.0.0...@spectrum-css/tokens@6.1.0)

### ✨ Features

- **tokens:** use spectrum-tokens v12.0.0-beta.63 ([#1566](https://github.com/adobe/spectrum-css/issues/1566)) ([c91d20a](https://github.com/adobe/spectrum-css/commit/c91d20a))

<a name="6.0.0"></a>

## 6.0.0

🗓 2022-12-09 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@5.0.0...@spectrum-css/tokens@6.0.0)

- feat(tray)!: migrate to core tokens (#1535) ([442c5f6](https://github.com/adobe/spectrum-css/commit/442c5f6)), closes [#1535](https://github.com/adobe/spectrum-css/issues/1535)

### 🛑 BREAKING CHANGES

- migrates the Tray to core tokens

- removes the `375px` breakpoint, which was previously used to apply a `max-width` and border radius to the Tray, and instead this uses an orientation media query to apply these styles when viewport is in landscape orientation or when the width is greater than the height.

Co-authored-by: Patrick Fulton <pfulton@adobe.com>

<a name="5.0.0"></a>

## 5.0.0

🗓 2022-11-29 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@4.0.0...@spectrum-css/tokens@5.0.0)

- chore(tokens)!: use latest spectrum-tokens release (#1553) ([9ba68a3](https://github.com/adobe/spectrum-css/commit/9ba68a3)), closes [#1553](https://github.com/adobe/spectrum-css/issues/1553)

### 🛑 BREAKING CHANGES

- updates to the latest @adobe/spectrum-tokens release which includes many renamed and deleted tokens.

<a name="4.0.0"></a>

## 4.0.0

🗓 2022-10-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@3.0.0...@spectrum-css/tokens@4.0.0)

- feat(tokens)!: use latest beta release ([b60a8e7](https://github.com/adobe/spectrum-css/commit/b60a8e7))

### 🛑 BREAKING CHANGES

- removes and renames a number of tokens already being used by consuming packages

feat: adds 114 new tokens
refactor: renames 10 tokens
refactor: updates 14 existing token values
refactor: removes 13 tokens from the system

Full release notes can be found here: https://github.com/adobe/spectrum-tokens/releases/tag/v12.0.0-beta.53

<a name="3.0.0"></a>

## 3.0.0

🗓 2022-09-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@2.0.0...@spectrum-css/tokens@3.0.0)

- feat(switch)!: migrating switch to core-tokens (CSS-42, CSS-100) (#1496) ([aab46c3](https://github.com/adobe/spectrum-css/commit/aab46c3)), closes [#1496](https://github.com/adobe/spectrum-css/issues/1496)

### 🛑 BREAKING CHANGES

- migrates Switch to core tokens

Also, adds t-shirt sizes

<a name="2.0.0"></a>

## 2.0.0

🗓 2022-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@1.0.8...@spectrum-css/tokens@2.0.0)

- chore(tokens)!: use latest core tokens dependency ([0a54a0e](https://github.com/adobe/spectrum-css/commit/0a54a0e))

### 🛑 BREAKING CHANGES

- letter case in `CJK-` tokens is now lower case.

<a name="1.0.8"></a>

## 1.0.8

🗓 2022-09-13 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@1.0.7...@spectrum-css/tokens@1.0.8)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="1.0.7"></a>

## 1.0.7

🗓 2022-08-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@1.0.6...@spectrum-css/tokens@1.0.7)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="1.0.6"></a>

## 1.0.6

🗓 2022-08-17 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@1.0.5...@spectrum-css/tokens@1.0.6)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="1.0.5"></a>

## 1.0.5

🗓 2022-08-16 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@1.0.4...@spectrum-css/tokens@1.0.5)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="1.0.4"></a>

## 1.0.4

🗓 2022-08-02 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@1.0.3...@spectrum-css/tokens@1.0.4)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="1.0.3"></a>

## 1.0.3

🗓 2022-07-26 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@1.0.2...@spectrum-css/tokens@1.0.3)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="1.0.2"></a>

## 1.0.2

🗓 2022-07-22 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@1.0.1...@spectrum-css/tokens@1.0.2)

**Note:** Version bump only for package @spectrum-css/tokens

<a name="1.0.1"></a>

## 1.0.1

🗓 2022-06-28 • 📝 [Commits](https://github.com/adobe/spectrum-css/compare/@spectrum-css/tokens@1.0.0...@spectrum-css/tokens@1.0.1)

### 🐛 Bug fixes

- **actionbutton:** update to latest tokens pkg ([ccd2d65](https://github.com/adobe/spectrum-css/commit/ccd2d65))

<a name="1.0.0"></a>

## 1.0.0

🗓 2022-06-16

### ✨ Features

- add core tokens ([f603e16](https://github.com/adobe/spectrum-css/commit/f603e16))
- add core tokens ([d0a07a1](https://github.com/adobe/spectrum-css/commit/d0a07a1))
- add support for switching on --system ([e5a66e4](https://github.com/adobe/spectrum-css/commit/e5a66e4))
- define --system for completeness, don't ignore usage in builder ([cae6252](https://github.com/adobe/spectrum-css/commit/cae6252))
- prefer separate custom-\* files for overrides ([86d7fb3](https://github.com/adobe/spectrum-css/commit/86d7fb3))
- split things out, combine things ([3a817bc](https://github.com/adobe/spectrum-css/commit/3a817bc))

### 🐛 Bug fixes

- tweaks after merging in component-builder-simple ([ec8345a](https://github.com/adobe/spectrum-css/commit/ec8345a))
