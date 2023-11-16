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
const path = require("path");

exports.vars = require("@spectrum-css/vars");

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
	table_open: "spectrum-Table spectrum-Table--quiet spectrum-Table--sizeM",
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

exports.getStatusLight = function (status) {
	return {
		Deprecated: "negative",
		"Beta Contribution": "notice",
		Contribution: "notice",
		Unverified: "notice",
		Canon: "positive",
		Verified: "positive",
	}[status] ?? "neutral";
};

exports.getSlug = (name, subName = undefined) =>
	`${name}${subName ? `-${subName}` : ""}`.toLowerCase().replace(/\s/g, "-");

exports.populateInfo = function (data) {
	if (!data) return;

	if (typeof data !== "object") {
		data = { markup: data };
	}

	if (!data.name && this.vars) data.name = this.vars[`spectrum-${data.id}-name`];
	if (!data.id) data.id = data.name.toLowerCase().replace(/\s/g, "-");

	if (!data.status) {
		data.status = this.vars[`spectrum-${data.id}-status`] ?? "Contribution";
	}

	data.slug = data.slug ?? this.getSlug(data.name);

	data.sections = data.sections ?? [];

	if(fs.existsSync(path.join(__dirname, `../components/${data.id.replace("-", "")}/metadata/mods.md`))) {
		data.api = fs.readFileSync(path.join(__dirname, `../components/${data.id.replace("-", "")}/metadata/mods.md`), "utf-8").toString();
	} else {
		data.api = "";
	}

	if (data.examples && !Array.isArray(data.examples)) {
		data.examples = [data.examples];
	}

	data.examples = (data.examples ?? []).map((example, idx) => {
		// Handle markup only examples
		if (typeof example === "string") {
			example = {
				id: `${data.id}-${idx}`,
				markup: example,
			};
		}

		if (!example.id) example.id = `${data.id}-${idx}`;

		// All examples are deprecated or verified if the outer component is
		if (['Deprecated', 'Verified'].includes(data.status)) {
			example.status = data.status;
		} else if (!example.status) {
			example.status = 'Contribution';
		}

		// Self-referential function; fetches the CSS status of the example alone
		return this.populateInfo(example);
	});

	return data;
};
