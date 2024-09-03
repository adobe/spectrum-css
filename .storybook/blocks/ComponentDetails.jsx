import { useOf } from '@storybook/blocks';
import { styled } from "@storybook/theming";
import React from "react";
import { fetchToken } from "./utilities.js";

export const DList = styled.dl({
	"display": "grid",
	"grid-template-columns": "max-content 1fr",
	"column-gap": 20,
	"row-gap": 14,
	"padding-block": "0.75rem",
	"margin-block": "0.5rem 2.5rem",
	"border-block": "1px solid hsla(203deg, 50%, 30%, 15%)",
});

export const DTerm = styled.dt({
	"font-style": "normal",
	"padding": 0,
	"margin": 0,
	"font-size": 14,
});

export const DDefinition = styled.dd({
	"font-style": "normal",
	"padding": 0,
	"margin": 0,
	"font-size": 14,
});

export const StatusLight = styled.span(({ size = "m" }) => ({
	"border-radius": "50%",
	"height": ["l", "xl"].includes(size) ? 10 : 8,
	"width": ["l", "xl"].includes(size) ? 10 : 8,
	"background": fetchToken("negative-visual-color"),
	"display": "inline-block",
	"margin-inline-end": ["l", "xl"].includes(size) ? 10 : 8,
}));

/**
 * Displays the current version number of the component. The version is read from
 * the component's parameters, where it was sourced from the package.json file.
 *
 * Also displays a component status of "deprecated" if it is set in the story's
 * parameters.
 *
 * Usage of this doc block within MDX template(s):
 *  <ComponentDetails />
 */
export const ComponentDetails = () => {
	const storyMeta = useOf('meta');
	const versionNumber = storyMeta?.csfFile?.meta?.parameters?.componentVersion ?? "Unavailable";

	return (
		<DList className="sb-unstyled">
			<DTerm>Current version:</DTerm>
			<DDefinition>{versionNumber}</DDefinition>

			{ storyMeta?.csfFile?.meta?.parameters?.status?.type == "deprecated"
				?	<>
						<DTerm>Component status:</DTerm>
						<DDefinition><StatusLight/>Deprecated</DDefinition>
					</>
				: ""
			}
		</DList>
	);
};

export default ComponentDetails;
