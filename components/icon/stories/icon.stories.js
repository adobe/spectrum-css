// More on default export: https: //storybook.js.org/docs/web-components/writing-stories/introduction#default-export
// More on args: https: //storybook.js.org/docs/web-components/writing-stories/args
import { html } from 'lit-html';
import { repeat } from 'lit-html/directives/repeat.js';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';

import { basename } from 'path';

// Import the component markup template
import { Template } from "./template";

import iconOpts from '@adobe/spectrum-css-workflow-icons';

// Load styles for this component
import '../index.css';
import './custom.css';

export default {
  title: "Icon",
  description: "The icons component contains all UI icons used for components as well as the CSS for UI and workflow icons.",
  component: "Icon",
  argTypes: {
    /* Turn off express theme for icon preview b/c they use a separate icon set */
    express: { table: { disable: true } },
    reducedMotion: { table: { disable: true } },
    iconName: {
      name: 'Icon name',
      type: { name: 'string', required: true },
      options: iconOpts.map(icon => basename(icon, '.svg')),
      control: { type: 'select' },
      table: {
        type: { summary: "string" },
        category: "Component"
      }
    },
    size: {
      name: "Size",
      type: { name: "string", required: true },
      defaultValue: "m",
      table: {
        type: { summary: "string" },
        category: "Component",
        defaultValue: { summary: "m" }
      },
      options: ["s", "m", "l", "xl"],
      control: "select"
    },
    fill: {
      name: "Fill color",
      type: { name: "string", required: false },
      table: {
        type: { summary: "string" },
        category: "Advanced",
      },
      control: "color"
    },
  },
  args: {
    iconName: 'ABC',
    size: "xl",
  },
  parameters: {
    actions: {
      handles: [],
    },
    status: {
      type: process.env.MIGRATED_PACKAGES.includes('icon') ? 'migrated' : undefined
    }
  }
};

export const Default = Template.bind({});
Default.args = {};

export const AllIcons = ({ fill, size, scale, }) => {
  if (!iconOpts) return html`<p>Icons not found</p>`;

  import(/* webpackPrefetch: true */ '@spectrum-css/thumbnail');
  import(/* webpackPrefetch: true */ '@spectrum-css/toast');
  import(/* webpackPrefetch: true */ '@spectrum-css/typography');
  import(/* webpackPrefetch: true */ '@spectrum-css/closebutton');

  const workflowIcons = require(/* webpackPrefetch: true */ '!!raw-loader!@adobe/spectrum-css-workflow-icons/dist/spectrum-icons.svg').default;
  const icons = require(/* webpackPrefetch: true */ '!!raw-loader!../dist/spectrum-css-icons.svg').default;

  const toggleToast = (id, open = true) => {
    const toast = document.querySelector(`#${id}`);
    if (!toast) return;
    if (open) toast.removeAttribute('hidden');
    else toast.setAttribute('hidden', '');
  };

  return html`
    <div class="spectrum-Toast spectrum-Toast--positive" id="success" hidden>
      ${Template({ iconName: 'CheckmarkCircle', size: 's', scale, customClasses: ['spectrum-Toast-typeIcon'], useRef: true, setName: 'workflow' })}
      <div class="spectrum-Toast-body">
        <div class="spectrum-Toast-content">Icon filename copied to clipboard.</div>
      </div>
      <div class="spectrum-Toast-buttons">
        <button class="spectrum-CloseButton spectrum-CloseButton--sizeM spectrum-CloseButton--staticWhite" @click=${() => {
          toggleToast('failure', false);
        }}>
          ${Template({ iconName: 'Cross100', size: 's', customClasses: ['spectrum-CloseButton-UIIcon'], useRef: true, setName: 'ui' })}
        </button>
      </div>
    </div>
    <div class="spectrum-Toast spectrum-Toast--negative" id="failure" hidden>
      ${Template({ iconName: 'Alert', size: 's', scale, customClasses: ['spectrum-Toast-typeIcon'], useRef: true, setName: 'workflow' })}
      <div class="spectrum-Toast-body">
        <div class="spectrum-Toast-content">Failed to copy icon filename to clipboard.</div>
      </div>
      <div class="spectrum-Toast-buttons">
        <button class="spectrum-CloseButton spectrum-CloseButton--sizeM spectrum-CloseButton--staticWhite" @click=${() => {
          toggleToast('failure', false);
        }}>
          ${Template({ iconName: 'Cross100', size: 's', customClasses: ['spectrum-CloseButton-UIIcon'], useRef: true, setName: 'ui' })}
        </button>
      </div>
    </div>
    <div class="icon-list">
      ${repeat(iconOpts, (icon) => icon, (icon) => html`
        <div class="spectrum-Thumbnail spectrum-Thumbnail--sizeL"
          @click=${() => {
            if (navigator.clipboard) {
              navigator.clipboard.writeText(icon).then(() => {
                toggleToast('success');
                setTimeout(() => { toggleToast('success', false) }, 1000);
              }).catch((err) => {
                toggleToast('failure');
                setTimeout(() => { toggleToast('failure', false) }, 1000);
              })
            }
          }}
        >
          ${Template({
            iconName: basename(icon, '.svg'),
            size,
            fill,
            scale,
            customClasses: ['spectrum-Thumnail-image'],
            useRef: true,
            setName: 'workflow'
          })}
        </div>`
      )}
    </div>
    ${unsafeHTML(workflowIcons)}
    ${unsafeHTML(icons)}
  `;
};
AllIcons.argTypes = {
  iconName: { table: { disable: true } },
};
AllIcons.parameters = {
  html: false,
  docs: false,
  controls: {
    hideNoControlsWarning: true,
  },
};
AllIcons.args = {};
