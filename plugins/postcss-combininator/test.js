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
const test = require("ava");
const postcss = require("postcss");
const plugin = require("./index.js");

function compare(
	t,
	fixtureFilePath,
	expectedFilePath,
	options = {
		processIdentifier: (identifier) => {
			if (identifier === "express") {
				return "spectrum--express";
			}
			return identifier;
		},
	}
) {
	return postcss([plugin(options)])
		.process(readFile(`./fixtures/${fixtureFilePath}`), {
			from: fixtureFilePath,
		})
		.then((result) => {
			const actual = result.css;
			const expected = readFile(`./expected/${expectedFilePath}`);
			t.is(actual, expected);
			t.is(result.warnings().length, 0);
		});
}

function readFile(filename) {
	return fs.readFileSync(filename, "utf8");
}

test("create basic output", (t) => {
	return compare(t, "basic.css", "basic.css");
});
