import { Template as OpacityCheckerboard } from "@spectrum-css/opacitycheckerboard/stories/template.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

import { useArgs } from '@storybook/client-api';

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Swatch",
	size = "m",
  isSelected = false,
  isDisabled = false,
  customClasses = [],
	styles = {"--spectrum-picked-color": "rgb(174, 216, 230)"},
	id,
	...globals
}) => {
	const { express } = globals;
  const [_, updateArgs] = useArgs();

	try {
		if (!express) import(/* webpackPrefetch: true */ "../themes/spectrum.css");
		else import(/* webpackPrefetch: true */ "../themes/express.css");
	} catch (e) {
		console.warn(e);
	}

  return html`
    <div
      class=${classMap({
        [rootClass]: true,
        [`${rootClass}--size${size?.toUpperCase()}`]: typeof size !== "undefined",
        'is-selected': !isDisabled && isSelected,
        'is-disabled': isDisabled,
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      ?disabled=${isDisabled}
      id=${ifDefined(id)}
	  style=${styleMap(styles)}
	  tabindex="0"
      @click=${(e) => {
        updateArgs({ isSelected: !isSelected });
      }}
      @focusout=${() => updateArgs({ isSelected: false })}
      @keypress=${(e) => {
        if (e.key !== 'Enter' && e.key !== ' ') return;
        updateArgs({ isSelected: !isSelected });
      }}
    >
		${OpacityCheckerboard({
			...globals,
			componentOnly: true,
			customClasses: [`${rootClass}-fill`],
		})}
		</div>
	`;
};
