import { useEffect } from '@storybook/client-api';

import '@spectrum-css/vars/dist/spectrum-global.css';
import '@spectrum-css/vars/dist/components/index.css';

import '@spectrum-css/vars/dist/spectrum-light.css';
import '@spectrum-css/vars/dist/spectrum-dark.css';
import '@spectrum-css/vars/dist/spectrum-darkest.css';

import '@spectrum-css/vars/dist/spectrum-medium.css';
import '@spectrum-css/vars/dist/spectrum-large.css';

import expressBase from '!!style-loader?{"injectType":"lazyStyleTag","attributes":{"id":"express-base"}}!css-loader!@spectrum-css/expressvars/dist/spectrum-global.css';
import expressComponents from '!!style-loader?{"injectType":"lazyStyleTag","attributes":{"id":"express-components"}}!css-loader!@spectrum-css/expressvars/dist/components/index.css';

import expressLight from '!!style-loader?{"injectType":"lazyStyleTag","attributes":{"id":"express-light"}}!css-loader!@spectrum-css/expressvars/dist/spectrum-light.css';
import expressDark from '!!style-loader?{"injectType":"lazyStyleTag","attributes":{"id":"express-dark"}}!css-loader!@spectrum-css/expressvars/dist/spectrum-dark.css';
import expressDarkest from '!!style-loader?{"injectType":"lazyStyleTag","attributes":{"id":"express-darkest"}}!css-loader!@spectrum-css/expressvars/dist/spectrum-darkest.css';

import expressMedium from '!!style-loader?{"injectType":"lazyStyleTag","attributes":{"id":"express-medium"}}!css-loader!@spectrum-css/expressvars/dist/spectrum-medium.css';
import expressLarge from '!!style-loader?{"injectType":"lazyStyleTag","attributes":{"id":"express-large"}}!css-loader!@spectrum-css/expressvars/dist/spectrum-large.css';

const stylesheets = [
  expressBase, expressComponents,
  expressLight, expressDark, expressDarkest,
  expressMedium, expressLarge
];

export const withContextWrapper = (StoryFn, context) => {
  const { args, argTypes } = context;

  const getDefaultValue = (type) => {
      return type.defaultValue ?? type.options[0] ?? null;
  };

  // This property informs which context stylesheets to source
  //    but does not source a stylesheet for itself
  const isExpress = Boolean(args.express ?? window.__spectrum_context__.express ?? getDefaultValue(argTypes.express));
  const color = args.color ?? window.__spectrum_context__.color ?? getDefaultValue(argTypes.color);
  const scale = args.scale ?? window.__spectrum_context__.scale ?? getDefaultValue(argTypes.scale);

  useEffect(() => {
    if (window.__spectrum_context__.express !== isExpress) {
      window.__spectrum_context__.express = isExpress;

      if (isExpress) {
        stylesheets.forEach(style => style.use());
        document.body.classList.add('spectrum--express');
      } else {
        stylesheets.forEach(style => style.unuse());
        document.body.classList.remove('spectrum--express');
      }
    }
    
    if (window.__spectrum_context__.color !== color) {
      window.__spectrum_context__.color = color;
      ['light', 'dark', 'darkest'].forEach(c => document.body.classList.remove(`spectrum--${c}`));
      if (color) document.body.classList.add(`spectrum--${color}`);
    }
  
    if (window.__spectrum_context__.scale !== scale) {
      window.__spectrum_context__.scale = scale;
      ['medium', 'large'].forEach(s => document.body.classList.remove(`spectrum--${s}`));
      if (scale) document.body.classList.add(`spectrum--${scale}`);
    }
  }, [color, scale, isExpress]);

  return StoryFn(context);
};
