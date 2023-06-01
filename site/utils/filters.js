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

const md = require("./markdown");

module.exports = {
	markdownify: (value) => md().render(value),
	jsonify: (value) => JSON.stringify(value, null, 2),
	dedupe: (value) => [...new Set(value)].filter(Boolean),
	getStatusLight: (status) => {
		if (!status) return "neutral";
		if (status === "Deprecated") return "negative";
		if (["Beta Contribution", "Contribution", "Unverified"].includes(status))
			return "notice";
		if (["Canon", "Verified"].includes(status)) return "positive";
		return "neutral";
	},
	log: (value) => console.log(value),
	map: (row, valueKey = "fallback") => [row[0], row[1][valueKey]],
	mapToArray: (map) => [...map].filter(Boolean),
	basename: (str) => str.split("/").pop(),
	find: (arr = [], key = "", value) => arr?.find((item) => item[key] === value),
};
