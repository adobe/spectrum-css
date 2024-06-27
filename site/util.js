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

/** @type import('markdown-it') */
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
		const oldRule = md.renderer.rules[rule] ?? defaultRenderer;
		return function (tokens, idx, options, env, self) {
			tokens[idx].attrPush(["class", className]);
			return oldRule(tokens, idx, options, env, self);
		};
	})(className);
}

const code_inline = md.renderer.rules.code_inline ?? defaultRenderer;
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

/* --------- EXPORTS --------- */

/** @type import('markdown-it') */
exports.markdown = md;

/** @type import('prismjs').Prism */
exports.Prism = require("prismjs");

exports.prettyPrintJSON = (json) => JSON.stringify(json, null, 2);

/** @type (status: string) => "negative"|"notice"|"positive"|"neutral" */
exports.getStatusLightVariant = (status) => ({
	Deprecated: "negative",
	"Beta Contribution": "notice",
	Contribution: "notice",
	Unverified: "notice",
	Canon: "positive",
	Verified: "positive",
}[status] ?? "neutral");

exports.getSlug = function (name, subName = undefined) {
	if (!name) return;
	if (subName) name += `-${subName}`;
	return name.toLowerCase().replace(/[^a-z-]/g, "");
};

exports.populateDNAInfo = function (component) {
	const getDNAStatus = function (dnaStatus) {
		if (!dnaStatus) dnaStatus = "Contribution";

		return {
			Released: "Canon",
			Beta: "Contribution",
			Precursor: "Contribution",
		}[dnaStatus] ?? dnaStatus;
	};

	if (!component.id) component.id = component.name?.toLowerCase();
	if (!component.status) component.status = "Contribution";
	if (!component.slug) component.slug = this.getSlug(component.name);

	component.cssStatus = {
		Contribution: "Unverified",
		Unverified: "Unverified",
		Verified: "Verified",
		Deprecated: "Deprecated",
	}[component.status];

	const dnaComponentStatus = component.dnaStatus;
	component.dnaStatus = component.cssStatus === "Deprecated" ? "Deprecated" : getDNAStatus(dnaComponentStatus);

	if (!component?.examples) return;

	return Promise.all(
		component.examples.map(example => {
			const pageData = {};
			if (typeof example === "string") {
				pageData.id = component.name;
				pageData.markup = example;
			} else {
				pageData.id = example.id ?? component.name;
			}

			// All examples are verified if the outer component is verified
			if (component.status === "Verified") {
				pageData.status = "Verified";
			}

			// The example is canon if the component is Canon and Verified
			if (component.dnaStatus === "Canon" && component.status === "Verified") {
				pageData.dnaStatus = "Canon";
			}

			component.examples[pageData.id] = pageData;

			this.populateDNAInfo(pageData);
		})
	);
};
