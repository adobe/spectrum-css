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

const fs = require("fs");
const fsp = require("fs").promises;
const path = require("path");

const fg = require("fast-glob");
const postcss = require("postcss");

async function main(dir = __dirname) {
    for (const file of await fg(`${dir}/**/*.css`)) {
        const dir = path.dirname(file);

        const result  = new Set();
        postcss.parse(fs.readFileSync(file, "utf8")).walkDecls(decl => {
            if (decl.prop.indexOf("--mod-") != -1) {
                const modVariable = decl.prop;
                result.add(modVariable);
            }
        });

        if (result.size === 0) return;
        const formattedResults = [...result].map((result) => `|\`${result}\`|`);
        const tableHeader = `| Custom property API |\n| --- |`;
        formattedResults.unshift(tableHeader);
        return fsp.writeFile(`${dir}/metadata/mods.md`, formattedResults.join('\n'));
    }
}

main();
