import { Template, ChromaticVariants } from "./template";
import {styleMap } from "lit/directives/style-map.js";
import { html } from "lit";
import { Template as Typography } from "@spectrum-css/typography/stories/template.js";

/**
 * A dialog displays important information that users need to acknowledge. They appear over the interface and block further interactions.
 */
export default {
	title: "Components/Dialog",
	component: "Dialog",
	argTypes: {
		heading: {
			name: "Heading",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "text" },
		},
		header: { 
			name: "Additional header content",
			description: "Controls header content",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "text" },
		},
		content: { table: { disable: true } },
		footer: {
			name: "Footer content",
			description: "Controls footer content",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "text" },
		},
		buttons: { table: { disable: true } },
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["s", "m", "l"],
			control: "select",
		},
		layout: {
			name: "Layout",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["default", "fullscreen", "fullscreenTakeover"],
			control: "select",
		},
		isDismissable: {
			name: "Dismissable",
			description: "Controls whether a dialog can be dismissed without taking an action. Dismissible dialogs should never have buttons.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
			if: { arg: "layout", eq: "default" },
		},
		showModal: {
			name: "Wrap the dialog in a modal",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		isOpen: {
			name: "Open",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		hasHeroImage: {
			name: "Has hero image",
			description: "Adds a background cover image to the dialog header.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Content",
			},
			control: "boolean",
			if: { arg: "layout", eq: "default" },
		},
		heroImageUrl: {
			name: "Hero Image",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: { type: "file", accept: ".svg,.png,.jpg,.jpeg,.webc" },
			if: { arg: "hasHeroImage", truthy: true },
		},
	},
	args: {
		rootClass: "spectrum-Dialog",
		isDismissable: false,
		showModal: false,
		isOpen: true,
		size: "m",
		layout: "default",
		hasHeroImage: false,
	},
	parameters: {
		actions: {
			handles: [],
		},
		docs: {
			story: {
				height: "500px",
			},
		},
		status: {
			type: "migrated",
		},
	},
	decorators: [
		(Story, context) => {
			if (!window.isChromatic()) return Story(context);
			return html`
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
			`;
		}
	],
};

const ExampleButtonGroup = [{
	variant: "secondary",
	treatment: "outline",
	label: "Remind me later"
}, {
	variant: "emphasized",
	treatment: "fill",
	label: "Rate now",
}];

export const Default = (args) => window.isChromatic() ? ChromaticVariants(args) : Template(args);

Default.args = {
	heading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
	header: "* Required",
	showModal: true,
	content: [
		() => Typography({
			semantics: "body",
			size: "m",
			content: [
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor augue mauris augue neque gravida. Libero volutpat sed ornare arcu. Quisque egestas diam in arcu cursus euismod quis viverra. Posuere ac ut consequat semper viverra nam libero justo laoreet. Enim ut tellus elementum sagittis vitae et leo duis ut. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Diam volutpat commodo sed egestas egestas. Dolor magna eget est lorem ipsum dolor. Vitae suscipit tellus mauris a diam maecenas sed. Turpis in eu mi bibendum neque egestas congue. Rhoncus est pellentesque elit ullamcorper dignissim cras lobortis."
			]
		}),
	],
	footer: "Please select.",
	buttons: ExampleButtonGroup,
};
