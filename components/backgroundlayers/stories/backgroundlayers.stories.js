import { Template } from "./template";
import { html } from 'lit';

export default {
  title: "UtilityClasses/Background layers",
  description: "The background layers is a series of classes used to style background layers.",
  component: "BackgroundLayers",
  argTypes: {},
  args: {
    rootClass: "spectrum-BackgroundLayers",
  },
  parameters: {
    actions: {
      handles: []
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('backgroundlayers') ? 'migrated' : undefined
    }
  }
};

const EditingContext = ({
}) => {
	return html`
		<div style="display: flex; justify-content: flex-start; position: relative; block-size: 150px;">
			${Template({
        style: "z-index: 4; inset-inline-start: 10px; inset-block-start: 10px;",
				layer: 'elevated',
			})}
			${Template({
        style: "z-index: 3; inset-inline-start: 20px; inset-block-start: 20px;",
				layer: 'layer2',
			})}
			${Template({
        style: "z-index: 2; inset-inline-start: 30px; inset-block-start: 30px;",
				layer: 'layer1',
			})}
			${Template({
        style: "z-index: 1; inset-inline-start: 40px; inset-block-start: 40px;",
				layer: "pasteboard",
			})}
		</div>
	`;
};

const BrowsingContext = ({
}) => {
	return html`
		<div style="display: flex; justify-content: flex-start; position: relative; block-size: 150px;">
			${Template({
        style: "z-index: 3; inset-inline-start: 10px; inset-block-start: 10px;",
				layer: 'elevated',
			})}
			${Template({
        style: "z-index: 2; inset-inline-start: 20px; inset-block-start: 20px;",
				layer: 'layer1',
			})}
			${Template({
        style: "z-index: 1; inset-inline-start: 30px; inset-block-start: 30px;",
				layer: "base",
			})}
		</div>
	`;
};
export const Editing = EditingContext.bind({});
Editing.args = {};

export const Browsing = BrowsingContext.bind({});
Browsing.args = {};
