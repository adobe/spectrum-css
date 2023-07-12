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

module.exports = ({ replaceWith = false }) => {
	return {
		postcssPlugin: "postcss-notnested",
		Rule(rule) {
			if (!rule.selectors || rule.selects.length === 0) return;

			const selectors = new Set();
			if (typeof replaceWith !== "string") {
				// Kill the selector with the stray ampersand -- it's not nested!
				selectors.add(...selectors.filter((s) => !/^&/.test(s)));
			} else {
				rule.selectors.map((selector) => {
					// Match ampersands at the start of a given selector
					if (!/^&/.test(selector)) {
						selectors.add(selector);
						return;
					}

					// Handle special case where the replacement selector === the existing selector
					if (selector.replace(/^&/, "") === replaceWith) {
						selectors.add(replaceWith);
					}

					selectors.add(selector.replace(/^&/, replaceWith));
				});
			}

			if (selectors.length == 0) {
				// If no selectors remain, remove the rule completely
				rule.remove();
			} else if (selectors.length != rule.selectors.length) {
				// Only replace the selectors if we changed something (avoids extra work for every selector)
				rule.selectors = selectors;
			}
		},
	};
};
