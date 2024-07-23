import { Variants } from "@spectrum-css/preview/decorators";
import { svg } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-ColorLoupe",
	isOpen = true,
	isDisabled = false,
	customStyles = {},
	customClasses = [],
}) => svg`
    <svg
      class=${classMap({
        [rootClass]: true,
        "is-open": isOpen,
        "is-disabled": isDisabled,
        ...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
      })}
      style=${styleMap({
        "--spectrum-picked-color": "rgba(255, 0, 0, 0.5)",
        "inset-block-start": "5px",
        "inset-inline-start": "5px",
        ...customStyles
      })}
    >
      <defs>
        <path
          id="loupe-path"
          d="M 22 60 C 18.2 56 14.6 51.7 11.3 47.2 C 8.3 43.3 5.7 39.1 3.5 34.7 C 1.2 30 0 25.9 0 22.4 C 0 17.2 1.8 12.2 5 8.2 C 8.2 4.2 12.7 1.5 17.6 0.4 C 22.6 -0.6 27.8 0.2 32.3 2.6 C 36.8 5 40.3 8.9 42.3 13.7 C 43.4 16.4 44 19.4 44 22.4 C 44 25.9 42.8 30 40.5 34.7 C 38.3 39.1 35.7 43.3 32.7 47.3 C 29.4 51.7 25.8 56 22 60 Z"
          transform="translate(2, 2)" />
        <mask id="loupe-mask">
          <rect x="0" y="0" height="100" width="100" fill="white"/>
          <use xlink:href="#loupe-path" fill="black" />
        </mask>
        <pattern id="checkerboard-primary" patternUnits="userSpaceOnUse" width="16" height="16" class="spectrum-ColorLoupe-checkerboard-pattern">
          <rect x="0" y="0" width="8" height="8"/>
          <rect x="8" y="8" width="8" height="8"/>
        </pattern>
        <pattern id="checkerboard-secondary" patternUnits="userSpaceOnUse" width="20" height="20" class="spectrum-ColorLoupe-checkerboard-pattern">
          <rect x="0" y="0" width="10" height="10"/>
          <rect x="10" y="10" width="10" height="10"/>
        </pattern>
      </defs>
      <g>
        <use xlink:href="#loupe-path" class="spectrum-ColorLoupe-checkerboard-background" />
        <use xlink:href="#loupe-path" class="spectrum-ColorLoupe-checkerboard-fill" />
        <use xlink:href="#loupe-path" class="spectrum-ColorLoupe-inner-border" />
        <use xlink:href="#loupe-path" mask="url(#loupe-mask)" class="spectrum-ColorLoupe-outer-border" />
      </g>
    </svg>
`;

export const ColorLoupeGroup = Variants({
	Template,
	skipBorders: true,
	testData: [
		{
			testHeading: "Default",
			wrapperStyles: {
				"block-size": "100px",
			}
		},
		{
			testHeading: "Custom color",
			customStyles: {
				"--spectrum-picked-color": "teal",
			},
			wrapperStyles: {
				"block-size": "100px",
			}
		},
	],
	stateData: [
		// @todo there aren't any disabled styles
		// {
		// 	testHeading: "Disabled",
		// 	isDisabled: true,
		// },
	],
});
