import { useOf } from '@storybook/blocks';
import React from "react";
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
  
  const packageName = storyMeta?.csfFile?.meta?.parameters?.componentPkgName ?? undefined;
  const packageLink = (packageName && typeof packageName !== "undefined") ? `https://npmjs.com/${packageName}` : false;
  
  const packageGitHubName = packageLink ? packageName.split('/').pop() : undefined;
  const packageGitHubLink = (packageGitHubName && typeof packageGitHubName !== "undefined") ? `https://github.com/adobe/spectrum-css/tree/main/components/${packageGitHubName}` : false;

  const componentGuidelinesName = storyMeta?.csfFile?.meta?.parameters?.componentGuidelinesName ?? undefined;
  const componentGuidelinesLink = (componentGuidelinesName && typeof componentGuidelinesName !== "undefined") ? `https://spectrum.adobe.com/page/${componentGuidelinesName}` : false;

	return (
		<dl className="spectrum-storybook-component-details">
			<dt>Current version:</dt>
			<dd>{versionNumber}</dd>

      {
        packageLink && 
        <>
          <dt>npm link:</dt>
          <dd><a href={packageLink} rel="noopener">{packageLink}</a></dd>
        </>
      }

      {
        packageGitHubLink && 
        <>
          <dt>view repository:</dt>
          <dd><a href={packageGitHubLink} rel="noopener">{packageGitHubLink}</a></dd>
        </>
      }

      {
        componentGuidelinesLink && 
        <>
          <dt>view guidelines:</dt>
          <dd><a href={componentGuidelinesLink} rel="noopener">{componentGuidelinesLink}</a></dd>
        </>
      }

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
