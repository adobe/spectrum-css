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

const fs = require("fs");
const { join } = require("path");

const test = require("ava");
const postcss = require("postcss");

const plugin = require("./index.js");

function compare(t, fixtureFilePath, expectedFilePath, options = {}) {
    return postcss([plugin(options)])
        .process(readFile(`./fixtures/${fixtureFilePath}`), {
            from: fixtureFilePath,
        })
        .then((result) => {
            const expected = result.css;
            const actual = readFile(`./expected/${expectedFilePath}`);
            t.is(expected, actual);
            t.is(result.warnings().length, 0);
        });
}

function readFile(filename) {
    return fs.readFileSync(join(__dirname, filename), "utf8");
}

test("drop unused vars", (t) => {
    return compare(t, "unused.css", "unused.css");
});

test("drop unused vars, even if referenced by other vars", (t) => {
    return compare(t, "varRefs.css", "varRefs.css");
});
