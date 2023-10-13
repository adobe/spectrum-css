/*!
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

module.exports = ({
  clean = false,
  idPrefix = false,
  classPrefix = "spectrum-UIIcon",
  removeViewBox = false,
} = {}) => ({
  multipass: true,
  js2svg: {
    indent: 2,
    pretty: true,
  },
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          cleanupIds: clean,
          removeDesc: false,
          removeTitle: false,
          removeViewBox,
          removeUnusedNS: false,
        },
      },
    },
    clean
      ? {
          name: "removeAttrs",
          params: {
            attrs: ["class", "data-name", "id"],
          },
        }
      : undefined,
    idPrefix
      ? {
          name: "prefixIds",
          params: { delim: "-", prefix: idPrefix, prefixClassNames: false },
        }
      : undefined,
    classPrefix
      ? {
          name: "prefixIds",
          params: {
            delim: "--",
            prefix: classPrefix,
            prefixClassNames: true,
            prefixIds: false,
          },
        }
      : undefined,
  ].filter(Boolean),
});
