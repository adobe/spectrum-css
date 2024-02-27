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

const md = require("markdown-it")({
	html: true,
	linkify: false,
	typographer: true,
	breaks: true,
});

function defaultRenderer(tokens, idx, options, env, self) {
	return self.renderToken(tokens, idx, options, env, self);
}

let ruleClassnames = {
	link_open: "spectrum-Link",
	table_open: "spectrum-Table spectrum-Table--sizeM",
	thead_open: "spectrum-Table-head",
	tr_open: "spectrum-Table-row",
	tbody_open: "spectrum-Table-body",
	th_open: "spectrum-Table-headCell",
	td_open: "spectrum-Table-cell",
	code_inline: "spectrum-Code spectrum-Code--sizeS",
	code_block: "spectrum-Code spectrum-Code--sizeS",
};

for (let [rule, className] of Object.entries(ruleClassnames)) {
	md.renderer.rules[rule] = (function (className) {
		const oldRule = md.renderer.rules[rule] || defaultRenderer;
		return function (tokens, idx, options, env, self) {
			tokens[idx].attrPush(["class", className]);
			return oldRule(tokens, idx, options, env, self);
		};
	})(className);
}

const code_inline = md.renderer.rules.code_inline || defaultRenderer;
md.renderer.rules.code_inline = function (tokens, idx, options, env, self) {
	const token = tokens[idx];
	// ~ indicates markup that should be red
	if (token.content.substr(0, 1) === "~" && token.content.substr(-1) === "~") {
		let aIndex = tokens[idx].attrIndex("class");

		let className = "spectrum-CSSExample-oldAPI";
		if (aIndex < 0) {
			// add class
			tokens[idx].attrPush(["class", className]);
		} else {
			// append class
			tokens[idx].attrs[
				aIndex
			][1] = `${tokens[idx].attrs[aIndex][1]} ${className}`;
		}

		token.content = token.content.slice(1, -1);
	}
	return code_inline(tokens, idx, options, env, self);
};

const headingMap = {
	h1: "spectrum-Heading spectrum-Heading--sizeL",
	h2: "spectrum-Heading spectrum-Heading--sizeM",
	h3: "spectrum-Heading spectrum-Heading--sizeS",
	h4: "spectrum-Heading spectrum-Heading--sizeXS",
	h5: "spectrum-Heading spectrum-Heading--sizeXXS",
};

md.renderer.rules.heading_open = function (tokens, idx, options, env, self) {
	let headingClass = headingMap[tokens[idx].tag];
	if (headingClass) {
		tokens[idx].attrPush(["class", headingClass]);
	}
	return defaultRenderer(tokens, idx, options, env, self);
};

exports.markdown = md;

exports.Prism = require("prismjs");

const statusLightVariants = {
	Deprecated: "negative",

	"Beta Contribution": "notice",

	Contribution: "notice",
	Unverified: "notice",

	Canon: "positive",
	Verified: "positive",
};

const dnaStatusTranslation = {
	Released: "Canon",
	Beta: "Contribution",
	Precursor: "Contribution",
};

const cssStatusTranslation = {
	Contribution: "Unverified",
	Unverified: "Unverified",
	Verified: "Verified",
};

exports.getStatusLightVariant = function (status) {
	return statusLightVariants[status] || "neutral";
};

exports.getDNAStatus = function (dnaComponentId, dnaStatus, cssStatus) {
	if (cssStatus === "Deprecated") {
		dnaStatus = "Deprecated";
	}

	if (!dnaStatus) {
		dnaStatus = "Contribution";
	}

	return dnaStatusTranslation[dnaStatus] || dnaStatus;
};

exports.getCSSStatus = function (dnaComponentId, cssStatus) {
	if (!cssStatus) {
		cssStatus = "Contribution";
	}
	return cssStatusTranslation[cssStatus] || cssStatus;
};

exports.getSlug = function (name, subName) {
	if (subName) {
		name += `-${subName}`;
	}
	return name.toLowerCase().replace(/[^a-z\-]/g, "");
};

exports.populateDNAInfo = function (component, dnaVars) {
	// Get DNA information
	var dnaComponentId = component.id || component.name.toLowerCase();

	// Get info based on component variation first, then component name second
	var dnaComponentTitle = dnaVars["spectrum-" + dnaComponentId + "-name"];

	var cssStatus = this.getCSSStatus(dnaComponentId, component.status);
	var dnaStatus = this.getDNAStatus(
		dnaComponentId,
		dnaVars["spectrum-" + dnaComponentId + "-status"] || component.dnaStatus,
		cssStatus
	);

	// Store the info
	component.name = component.name || dnaComponentTitle;
	component.cssStatus = cssStatus;
	component.dnaStatus = dnaStatus;

	// Add other data
	component.id = dnaComponentId;
	try {
		component.slug = this.getSlug(component.name);
	} catch (err) {
		console.error("Could not get slug for:", component);
	}

	if (component.examples) {
		for (id in component.examples) {
			let example = component.examples[id];
			if (typeof example === "string") {
				// Handle markup only examples
				example = {
					id: id,
					markup: example,
				};
				component.examples[id] = example;
			} else {
				example.id = example.id || id;
			}

			// All examples are verified if the outer component is verified
			if (component.status === "Verified") {
				example.status = "Verified";
			}

			// The example is canon if the component is Canon and Verified
			if (component.dnaStatus === "Canon" && component.status === "Verified") {
				example.dnaStatus = "Canon";
			}

			this.populateDNAInfo(example, dnaVars);
		}
	}
};
