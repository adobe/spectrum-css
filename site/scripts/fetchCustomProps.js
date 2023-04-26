/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

const postcss = require('postcss');

module.exports = async function (content) {
    const mods = [];
    const internal = [];
    const a11y = [];
    const other = [];

    postcss.parse(content).walkRules((rule) => {
        rule.walkDecls((decl) => {
            // Check the property & the values for defined custom properties
            const value = decl.value.match(/--[\w-]+\w/g) || [];
            for (const val of [...value, decl.prop]) {
                if (val.startsWith('--mod-')) {
                    if (!mods.includes(val)) mods.push(val);
                    continue;
                }
                if (val.startsWith('--spectrum-')) {
                    if (!internal.includes(val)) internal.push(val);
                    continue;
                }
                if (val.startsWith('--highcontrast-')) {
                    if (!a11y.includes(val)) a11y.push(val);
                    continue;
                }
                if (val.startsWith('--') && !val.startsWith('--system-')) {
                    if (!other.includes(val)) other.push(val);
                    continue;
                }
            }
        });
    });

    return Promise.resolve({ mods, internal, a11y, other });
};
