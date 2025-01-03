---
"@spectrum-css/tokens": major
---

## Breaking change

🎉 Welcome Spectrum 2! This update brings in a set of new tokens to bring existing components closer to the new Spectrum 2 look-and-feel. As part of the update, the token library is no longer shipping Express theme values or any Spectrum 1 custom overrides. Any manual token overrides needed are now sourced from a folder named `custom` inside the tokens package and the file name matches the context in which those overrides apply (i.e., `dark-vars.css` for dark-context, and `global-vars.css` for static values). These values will be concatenated to the `dist/css` output file with a matching name.

The `darkest` and `lightest` themes are deprecated and no longer shipped with this release.

### Corner rounding

| Property name                   | Old value           | Updated value |
| ------------------------------- | ------------------- | ------------- |
| `--spectrum-corner-radius-0`    | **new**             | 0px           |
| `--spectrum-corner-radius-75`   | 2px                 | 4px           |
| `--spectrum-corner-radius-100`  | 4px / 5px (mobile)  | 8px           |
| `--spectrum-corner-radius-200`  | 8px / 10px (mobile) | 10px          |
| `--spectrum-corner-radius-300`  | **new**             | 6px           |
| `--spectrum-corner-radius-400`  | **new**             | 7px           |
| `--spectrum-corner-radius-500`  | **new**             | 8px           |
| `--spectrum-corner-radius-600`  | **new**             | 9px           |
| `--spectrum-corner-radius-700`  | **new**             | 10px          |
| `--spectrum-corner-radius-800`  | **new**             | 16px          |
| `--spectrum-corner-radius-1000` | **new**             | 0.5           |

#### New aliases

| Property name                                      | Maps to                         |
| -------------------------------------------------- | ------------------------------- |
| `--spectrum-corner-radius-none`                    | `--spectrum-corner-radius-0`    |
| `--spectrum-corner-radius-small-default`           | `--spectrum-corner-radius-100`  |
| `--spectrum-corner-radius-medium-default`          | `--spectrum-corner-radius-500`  |
| `--spectrum-corner-radius-large-default`           | `--spectrum-corner-radius-700`  |
| `--spectrum-corner-radius-extra-large-default`     | `--spectrum-corner-radius-800`  |
| `--spectrum-corner-radius-full`                    | `--spectrum-corner-radius-1000` |
| `--spectrum-corner-radius-small-size-small`        | `--spectrum-corner-radius-75`   |
| `--spectrum-corner-radius-small-size-medium`       | `--spectrum-corner-radius-100`  |
| `--spectrum-corner-radius-small-size-large`        | `--spectrum-corner-radius-200`  |
| `--spectrum-corner-radius-small-size-extra-large`  | `--spectrum-corner-radius-300`  |
| `--spectrum-corner-radius-medium-size-extra-small` | `--spectrum-corner-radius-300`  |
| `--spectrum-corner-radius-medium-size-small`       | `--spectrum-corner-radius-400`  |
| `--spectrum-corner-radius-medium-size-medium`      | `--spectrum-corner-radius-500`  |
| `--spectrum-corner-radius-medium-size-large`       | `--spectrum-corner-radius-600`  |
| `--spectrum-corner-radius-medium-size-extra-large` | `--spectrum-corner-radius-700`  |

#### Component-specific updates

| Property name                             | Old value                           | Updated value                                     |
| ----------------------------------------- | ----------------------------------- | ------------------------------------------------- |
| `--spectrum-color-area-border-rounding`   | `var(--spectrum-corner-radius-100)` | `var(--spectrum-corner-radius-medium-size-small)` |
| `--spectrum-color-slider-border-rounding` | `4px`                               | `var(--spectrum-corner-radius-medium-size-small)` |

### Color updates

| Property name               | Context | Old value          | Updated value      |
| --------------------------- | ------- | ------------------ | ------------------ |
| `--spectrum-blue-800`       | dark    | rgb(69, 110, 254)  | rgb(64, 105, 253)  |
| `--spectrum-red-800`        | dark    | rgb(230, 54, 35)   | rgb(223, 52, 34)   |
| `--spectrum-orange-800`     | dark    | rgb(205, 86, 0)    | rgb(199, 82, 0)    |
| `--spectrum-yellow-800`     | dark    | rgb(169, 110, 0)   | rgb(164, 106, 0)   |
| `--spectrum-chartreuse-800` | dark    | rgb(109, 131, 0)   | rgb(106, 127, 0)   |
| `--spectrum-celery-800`     | dark    | rgb(69, 138, 19)   | rgb(66, 134, 18)   |
| `--spectrum-green-800`      | dark    | rgb(6, 140, 82)    | rgb(6, 136, 80)    |
| `--spectrum-seafoam-800`    | dark    | rgb(8, 138, 116)   | rgb(8, 134, 112)   |
| `--spectrum-cyan-800`       | dark    | rgb(15, 128, 194)  | rgb(13, 125, 186)  |
| `--spectrum-indigo-800`     | dark    | rgb(119, 97, 252)  | rgb(116, 91, 252)  |
| `--spectrum-purple-800`     | dark    | rgb(161, 84, 229)  | rgb(157, 78, 228)  |
| `--spectrum-fuchsia-800`    | dark    | rgb(192, 64, 212)  | rgb(186, 60, 206)  |
| `--spectrum-magenta-800`    | dark    | rgb(231, 41, 105)  | rgb(224, 38, 101)  |
| `--spectrum-pink-800`       | dark    | rgb(220, 47, 156)  | rgb(213, 45, 151)  |
| `--spectrum-turqoise-800`   | dark    | rgb(9, 135, 147)   | rgb(9, 131, 142)   |
| `--spectrum-brown-800`      | dark    | rgb(148, 118, 73)  | rgb(143, 114, 69)  |
| `--spectrum-silver-800`     | dark    | rgb(123, 123, 123) | rgb(118, 118, 118) |
| `--spectrum-cinnamon-800`   | dark    | rgb(179, 103, 64)  | rgb(176, 98, 59)   |

## New tokens

| Property name | Context | Value |
| ------------- | ------- | ----- |
|               |         |       |

## Removed tokens

| Property name | Context | Value |
| ------------- | ------- | ----- |
|               |         |       |
