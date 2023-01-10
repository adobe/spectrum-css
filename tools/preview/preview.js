import {
  withContextWrapper,
  withTextDirectionWrapper,
  withLanguageWrapper,
  withReducedMotionWrapper
} from "./decorators/index.js";

import '@spectrum-css/vars/css/globals/index.css';
import '@spectrum-css/expressvars/css/globals/index.css';

import '@spectrum-css/vars/css/components/index.css';
import '@spectrum-css/expressvars/css/components/index.css';

import '@spectrum-css/vars/css/themes/spectrum-light.css';
import '@spectrum-css/vars/css/themes/spectrum-dark.css';
import '@spectrum-css/vars/css/themes/spectrum-darkest.css';

import '@spectrum-css/expressvars/css/themes/spectrum-light.css';
import '@spectrum-css/expressvars/css/themes/spectrum-dark.css';
import '@spectrum-css/expressvars/css/themes/spectrum-darkest.css';

import '@spectrum-css/vars/css/scales/spectrum-medium.css';
import '@spectrum-css/vars/css/scales/spectrum-large.css';

import '@spectrum-css/expressvars/css/scales/spectrum-medium.css';
import '@spectrum-css/expressvars/css/scales/spectrum-large.css';

import '@spectrum-css/tokens/dist/index.css';

window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('spectrum');
});

// Rendered as controls; these properties are assigned
//      to the document root element
// @todo: resolve errors on 'name' and 'title' in console
export const globalTypes = {
  textDirection: {
    title: 'Text Direction',
    description: 'Direction of the content flow',
    showName: true,
    defaultValue: 'ltr',
    toolbar: {
        items: [
            { value: 'ltr', title: 'ltr', right: 'left to right' },
            { value: 'rtl', title: 'rtl', right: 'right to left' },
        ],
        dynamicTitle: true,
    },
  },
  lang: {
    title: 'Language',
    showName: true,
    icon: 'globe',
    description: 'Language of the content',
    defaultValue: 'en-US',
    toolbar: {
        items: [
            { value: 'en-US', title: '🇺🇸', right: 'English (US)' },
            { value: 'ja', title: '🇯🇵', right: 'Japanese' },
            { value: 'ko', title: '🇰🇷', right: '한국어' },
            { value: 'zh', title: '🇨🇳', right: '中文' },
        ],
        dynamicTitle: true,
    },
  },
};

// Global properties added to each component;
//      determines what stylesheets are loaded
export const argTypes = {
    color: {
      name: 'Color',
      description: 'Controls the color context of the component.',
      options: ['light', 'dark', 'darkest'],
      defaultValue: 'light',
      type: { required: true },
      table: { category: "Global", defaultValue: { summary: 'light' } },
      control: {
        type: 'select',
        labels: {
          light: 'Light (default)',
          dark: 'Dark',
          darkest: 'Darkest',
        }
      }
    },
    scale: {
      name: 'Platform scale',
      defaultValue: 'medium',
      table: { category: "Global", defaultValue: { summary: 'm' } },
      options: ['medium', 'large'],
      type: { required: true },
      control: {
          type: 'radio',
          labels: {
              medium: 'Medium (default)',
              large: 'Large',
          },
      },
    },
    // @todo https://jira.corp.adobe.com/browse/CSS-314
    reducedMotion: {
      name: 'Reduce motion',
      title: 'Reduce motion',
      description: 'Reduce animation and transitions',
      defaultValue: false,
      control: { type: 'boolean' },
      table: { category: "Global", defaultValue: { summary: false } },
      type: { required: true },
    },
    express: {
      name: 'Express',
      description: 'Use the express theme',
      defaultValue: false,
      table: { category: "Global", defaultValue: { summary: false } },
      type: { required: true },
      control: { type: 'boolean' },
    },
};

export const args = {
    color: 'light',
    scale: 'medium',
    reducedMotion: false,
    express: false,
};

export const parameters = {
  layout: 'padded', // Valid: 'centered' | 'fullscreen' | 'padded' | 'none';
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  isToolShown: false,
  isFullscreen: false,
  controls: {
    expanded: false,
    hideNoControlsWarning: true,
    sort: 'requiredFirst',
  },
  html: {
    root: '#root-inner',
    removeComments: true,
    prettier: {
      tabWidth: 4,
      useTabs: false,
      htmlWhitespaceSensitivity: 'ignore',
    },
    highlighter: {
      showLineNumbers: true,
      wrapLines: true,
    },
  },
  docs: {
    inlineStories: true,
    source: {
        type: 'dynamic',
        language: 'html',
    },
    iframeHeight: '200px',
  },
  status: {
    statuses: {
      migrated: {
        background: '#f0f0f0',
        color: '#444',
        description: 'Migrated to the latest tokens.',
      },
    },
  },
};

export const decorators = [
  withTextDirectionWrapper,
  withLanguageWrapper,
  withReducedMotionWrapper,
  withContextWrapper
];
