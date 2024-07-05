import React from "react";
import { useOf } from '@storybook/blocks';
import "./component-details.css";

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
const ComponentDetails = () => {
	const storyMeta = useOf('meta');
	const versionNumber = storyMeta?.csfFile?.meta?.parameters?.componentVersion ?? "Unavailable";

	return (
		<dl className="spectrum-storybook-component-details">
			<dt>Current version:</dt>
			<dd>{versionNumber}</dd>

			{ storyMeta?.csfFile?.meta?.parameters?.status?.type == "deprecated" 
				?	<>
						<dt>Component status:</dt>
						<dd>Deprecated</dd>
					</>
				: ""
			}
		</dl>
	);
};

export default ComponentDetails;
