# Change Log

## 0.0.0-s2-foundations.3

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`7fa37a7`](https://github.com/adobe/spectrum-css/commit/7fa37a7503e791e6bc8c62a3ea15600a56e23127) Thanks [@pfulton](https://github.com/pfulton)! - Removes empty theme assets from the component; no longer publishing a themes folder or index-theme.css map.

## 0.0.0-s2-foundations.2

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`f6ad55e`](https://github.com/adobe/spectrum-css/commit/f6ad55eea019f2d6c583a71b6652995a1c7c7a55) Thanks [@pfulton](https://github.com/pfulton)! - feat: s2 foundations non-gray-800 colors update

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

### Patch Changes

- Updated dependencies [[`f6ad55e`](https://github.com/adobe/spectrum-css/commit/f6ad55eea019f2d6c583a71b6652995a1c7c7a55)]:
  - @spectrum-css/tokens@15.0.0-s2-foundations.29

## 0.0.0-s2-foundations.1

### Major Changes

- [#2786](https://github.com/adobe/spectrum-css/pull/2786) [`085ecbc`](https://github.com/adobe/spectrum-css/commit/085ecbc739cf736e8d95377d605f2a7c4104bcc0) Thanks [@pfulton](https://github.com/pfulton)! - Pulled out _form_ from _fieldlabel_ package.
  Pulled out _meter_ from _progressbar_ package.

  [SWC-522] fix hover style regression
