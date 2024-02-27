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

const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const builder = require("./builder.js");
const server = require("./server.js");

require("colors");

async function main({ start }) {
    /** The default action is build */
	return builder().then(() => {
		/** If start is true, start the server and watch for changes */
		if (start) server();
	});
}

const {
	start = false
} = yargs(hideBin(process.argv)).option("start", {
	describe: "Start the development server",
	type: "boolean",
}).argv;

main({ start }).catch((err) => {
	console.error(err);
	process.exit(1);
});
