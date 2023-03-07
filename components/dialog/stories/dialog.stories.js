import { html } from "lit-html";

// Import the component markup template
import { Template } from "./template";

export default {
  title: "Dialog",
  description:
    "A Dialog displays important information that users need to acknowledge. They appear over the interface and block further interactions.",
  component: "Dialog",
  argTypes: {
    heading: {
      name: "Heading",
      type: { name: "string" },
      table: {
        type: { summary: "string" },
        category: "Component",
      },
      control: { type: "text" },
    },
    content: { table: { disable: true } },
    isDismissable: {
      name: "Dismissable",
      type: { name: "boolean" },
      table: {
        type: { summary: "boolean" },
        category: "Component",
      },
      control: "boolean",
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
  },
  args: {
    rootClass: "spectrum-Dialog",
    isDismissable: true,
    showModal: false,
    isOpen: true,
  },
  parameters: {
    actions: {
      handles: [],
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes("dialog")
        ? "migrated"
        : undefined,
    },
  },
};

export const Default = Template.bind({});
Default.args = {
  heading: "Disclaimer",
  showModal: true,
  content: [
    html`<p class="spectrum-Body spectrum-Body--sizeM">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Auctor augue mauris
      augue neque gravida. Libero volutpat sed ornare arcu. Quisque egestas diam
      in arcu cursus euismod quis viverra. Posuere ac ut consequat semper
      viverra nam libero justo laoreet. Enim ut tellus elementum sagittis vitae
      et leo duis ut. Neque laoreet suspendisse interdum consectetur libero id
      faucibus nisl. Diam volutpat commodo sed egestas egestas. Dolor magna eget
      est lorem ipsum dolor. Vitae suscipit tellus mauris a diam maecenas sed.
      Turpis in eu mi bibendum neque egestas congue. Rhoncus est pellentesque
      elit ullamcorper dignissim cras lobortis.
    </p>`,
  ],
};
