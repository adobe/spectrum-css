import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import { Template } from "./template";

import { default as IconStories } from "@spectrum-css/icon/stories/icon.stories.js";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";

/**
 * A tag categorizes content. They can represent keywords or people, and are grouped to describe an item or a search request.
 */
export default {
	title: "Components/Tag",
	component: "Tag",
	argTypes: {
		size: {
			name: "Size",
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["s", "m", "l"],
			control: "select",
		},
		iconName: {
			...(IconStories?.argTypes?.iconName ?? {}),
			if: { arg: "visual", eq: "Icon" },
		},
		avatarUrl: {
			name: "Avatar image",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "file", accept: ".svg,.png,.jpg,.jpeg,.webc" },
			if: { arg: "visual", eq: "Avatar" },
		},
		visual: {
			name: "Visual",
			description: "The type of visual element displayed before the label",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: [
				"None",
				"Avatar",
				"Icon",
				"Thumbnail",
			],
			control: "select",
		},
		label: {
			name: "Label",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "text" },
		},
		isEmphasized: {
			name: "Emphasized styling",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
			if: { arg: "isInvalid", truthy: false },
		},
		isInvalid: {
			name: "Invalid",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		isDisabled: {
			name: "Disabled",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
			if: { arg: "isInvalid", truthy: false },
		},
		isSelected: {
			name: "Selected",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		hasClearButton: {
			name: "Clear button",
			description: "True if a button is present to clear the tag.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-Tag",
		size: "m",
		label: "Tag label",
		iconName: "Info",
		avatarUrl: "example-ava.png",
		isSelected: false,
		isDisabled: false,
		isInvalid: false,
		isEmphasized: false,
		hasClearButton: false,
		visual: "none",
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: "migrated",
		},
	},
	decorators: [
		(Story, context) => html`
			<style>
				.spectrum-Detail { display: inline-block; }
				.spectrum-Typography > div {
					border: 1px solid var(--spectrum-gray-200);
					border-radius: 4px;
					padding: 0 1em 1em;
					/* Why seafoam? Because it separates it from the component styles. */
					--mod-detail-font-color: var(--spectrum-seafoam-900);
				}
			</style>
			<div
				style=${styleMap({
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
					gap: "1rem",
					"--mod-detail-margin-end": ".3rem",
				})}
			>
				${Story(context)}
			</div>
		`,
	],
};

const Tags = (args) => html` <div
	style=${styleMap({
		display: "flex",
		gap: "1rem",
	})}
>
	${Template({...args})}
	${when(window.isChromatic(), () =>
		Template({
			...args,
			label: "Tag with longer content that truncates",
		})
	)}
	${when(window.isChromatic() && !args.isInvalid, () =>
		Template({
			...args,
			visual: "Icon",
		})
	)}
	${when(window.isChromatic() && !args.isInvalid, () =>
		Template({
			...args,
			visual: "Avatar",
		})
	)}
	${when(window.isChromatic() && !args.isInvalid, () =>
		Template({
			...args,
			visual: "Thumbnail",
		})
	)}
</div>`;

const States = (args) =>
	html` <div>
			${Typography({
				semantics: "detail",
				size: "m",
				content: ["Default"],
			})}
			${Tags(args)}
		</div>
		<div>
			${Typography({
				semantics: "detail",
				size: "m",
				content: ["Selected"],
			})}
			${Tags({
				...args,
				isSelected: true,
			})}
		</div>
		${args.isInvalid ? "" : html`
			<div>
				${Typography({
					semantics: "detail",
					size: "m",
					content: ["Disabled"],
				})}
				${Tags({
					...args,
					isDisabled: true,
				})}
			</div>
		`}
	`;

const Sizes = (args) =>
	html` ${["s", "m", "l"].map((size) => {
		return html` <div>
			${Typography({
				semantics: "detail",
				size: "s",
				content: [
					{
						s: "Small",
						m: "Medium",
						l: "Large",
					}[size],
				]
			})}
			${Tags({
				...args,
				size,
			})}
		</div>`;
	})}`;

const Variants = (args) =>
	html` ${window.isChromatic()
		? html`<div class="spectrum-Typography">
				${Typography({
					semantics: "detail",
					size: "l",
					content: ["Standard"],
				})}
				<div
					style=${styleMap({
						display: "flex",
						flexDirection: "column",
						gap: ".3rem",
					})}
				>
				${States(args)}
				</div>
			</div>
			<div class="spectrum-Typography">
				${Typography({
					semantics: "detail",
					size: "l",
					content: ["Emphasized"],
				})}
				<div
					style=${styleMap({
						display: "flex",
						flexDirection: "column",
						gap: ".3rem",
					})}
				>
					${States({
						...args,
						isEmphasized: true,
					})}
				</div>
			</div>
			<div class="spectrum-Typography">
				${Typography({
					semantics: "detail",
					size: "l",
					content: ["Invalid"],
				})}
				<div
					style=${styleMap({
						display: "flex",
						flexDirection: "column",
						gap: ".3rem",
					})}
				>
					${States({
						...args,
						isInvalid: true,
					})}
				</div>
			</div>
			<div class="spectrum-Typography">
				${Typography({
					semantics: "detail",
					size: "l",
					content: ["With clear button"],
				})}
				<div
					style=${styleMap({
						display: "flex",
						flexDirection: "column",
						gap: ".3rem",
					})}
				>
					${States({
						...args,
						hasClearButton: true,
					})}
				</div>
			</div>
			<div class="spectrum-Typography">
				${Typography({
					semantics: "detail",
					size: "l",
					content: ["Sizing"],
				})}
				<div
					style=${styleMap({
						display: "flex",
						flexDirection: "column",
						gap: ".3rem",
					})}
				>
					${Sizes(args)}
				</div>
			</div>`
		: Tags(args)
	}`;

export const Default = Variants.bind({});
Default.args = {};

export const Removable = Variants.bind({});
Removable.args = {
	hasClearButton: true,
};
