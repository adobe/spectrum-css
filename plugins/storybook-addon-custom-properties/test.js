/*!
 * Copyright 2024 Adobe. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at <http://www.apache.org/licenses/LICENSE-2.0>
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import test from "ava";
import { readFileSync } from "fs";
import { extract } from "./tools/extractor.js";

function compare(
	t,
	fixtureFilePath,
	expectedFilePath,
	options = {}
) {
    const content = readFile(`./fixtures/${fixtureFilePath}`);
    const actual = extract(content, options);

    const expected = readFile(`./expected/${expectedFilePath}`);

    t.deepEqual(actual, JSON.parse(expected));

    // writeFileSync(`./expected/${expectedFilePath}`, JSON.stringify(actual, null, 2), { encoding: "utf8" });
}

function readFile(filename) {
	return readFileSync(filename, { encoding: "utf8" });
}

test("create basic output", (t) => {
	return compare(t, "basic.css", "basic.json");
});
