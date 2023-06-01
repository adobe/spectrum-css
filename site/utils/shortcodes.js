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
const { outdent } = require("outdent");

const markdown = require("./markdown");
const md = markdown();

module.exports = {
	addShortcode: {
		// Allow embedding svg icon
		// {% icon "github.svg", "my-class", [24, 24] %}
		icon: (name, className, size = iconDefaultSize) => {
			if (!Array.isArray(size)) size = [size];
			return outdent({ newline: "" })`
            <svg class="icon icon--${name} ${
				className || "spectrum-Icon"
			}" role="img" aria-hidden="true" width="${size[0]}" height="${
				size[1] || size[0]
			}">
            <use xlink:href="/assets/images/sprite.svg#${name}"></use>
            </svg>`;
		},
	},
	addPairedShortcode: {
		// Allow embedding markdown in `.njk` files
		// {% markdown %}
		// # Heading
		// {% endmarkdown %}
		markdown: (content) => md.render(outdent.string(content)),
	},
};
