import { useOf } from '@storybook/blocks';
import { ResetWrapper } from "@storybook/components";
import { styled } from "@storybook/theming";
import React, { useEffect, useState } from "react";
import { Code } from "./Typography.jsx";
import { fetchToken } from "./utilities.js";

export const DList = styled.dl`
	display: grid;
	grid-template-columns: max-content 1fr;
	column-gap: 20px;
	row-gap: 14px;
	padding-block: 0.75rem;
	margin-block: 0.5rem 2.5rem;
	border-block: ${props => !props.skipBorder ? "1px solid hsla(203deg, 50%, 30%, 15%)" : "0"};

	& & {
		border-block: 0px;
		margin-block: 0;
		padding-inline-start: 0.75rem;
		padding-block-start: 0.25rem;
	}

	details > & {
		margin-inline-start: 12px;
	}
`;

export const DTerm = styled.dt`
	font-weight: ${props => props.theme.typography.weight.bold ?? "bold"};
	padding: 0;
	margin: 0;
	font-size: ${props => props.theme.typography.size.s};
`;

export const Details = styled.details`
	cursor: pointer;
	grid-column: 1 / 3;
	padding: 0;

	&[open] > summary::before {
		transform: rotate(90deg);
	}
`;

export const Summary = styled.summary`
	display: inline-flex;
	align-items: center;
	font-weight: ${props => props.theme.typography.weight.bold ?? "bold"};
	padding: 0;
	padding-block-end: 0.75rem;
	margin: 0;
	font-size: ${props => props.theme.typography.size.s};
	list-style: none;

	&::-webkit-details-marker {
		display: none;
	}

	&::before {
		content: '';
		width: 10px;
		height: 10px;
		background-image: url('data:image/svg+xml,<svg focusable="false" aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10"><path d="M3 9.95a.875.875 0 0 1-.615-1.498L5.88 5 2.385 1.547A.875.875 0 0 1 3.615.302L7.74 4.377a.876.876 0 0 1 0 1.246L3.615 9.698A.87.87 0 0 1 3 9.95"></path></svg>');
		background-size: cover;
		margin-inline-end: .75em;
		transition: 0.2s;
	}
`;

export const DDefinition = styled.dd`
	font-style: normal;
	padding: 0;
	margin: 0;
	font-size: ${props => props.theme.typography.size.s};
`;

export const DSet = ({ term, children }) => {
	return (
		<>
			<DTerm><Code style={{ display: "inline-block" }}>{term}</Code></DTerm>
			<DDefinition>{children}</DDefinition>
		</>
	)
};

export const StatusLight = styled.span(({ variant = "positive", ...props }) => `
	border-radius: 50%;
	vertical-align: middle;
	/* Scale this in relation to the typography */
	block-size: 0.6rem;
	inline-size: 0.6rem;
	background-color: ${fetchToken(`${variant}-visual-color`)};
	display: inline-block;
	line-height: 2;
	margin-inline-end: ${["l", "xl"].includes(props.size) ? 10 : 8}px;
	margin-block-end: 1px;
`);

export const ResourceSection = styled.section`
	display: flex;
	flex-flow: row wrap;
	align-items: center;
`;
	
export const ResourceLink = styled.a`
	position: relative;
	display: inline-flex;
	flex-direction: row;
	align-items: center;
	margin-block-end: 16px;
	margin-inline-end: 16px;
	box-sizing: border-box;
	text-decoration: none;
	min-inline-size: 100px;
	border: 1px solid transparent;
	border-radius: 5px;
	border-color: rgb(230, 230, 230);
	overflow: hidden;

	&:hover {
		border-color: rgb(213, 213, 213);
	}
`;

export const ResourceIconWrapper = styled.div`
	background-color: ${props => props.backgroundColor ?? "rgba(248, 248, 248)"};
	padding: 12px;
	display: flex;
	inline-size: 40px;
	block-size: 40px;
`;

export const ResourceTextWrapper = styled.div`
	margin-inline: 16px;
`;

const VersionDetails = ({ tag, data = {}, isDeprecated = false, skipDate = false, skipLink = false }) => {
	let statusType = "notice";
	let statusMessage = "Not yet available on the npm registry.";

	if (isDeprecated) {
		statusType = "negative";
		statusMessage = "Deprecated; no longer maintained.";
	} else if (data.date) {
		statusType = "positive";
		statusMessage = "Available on the npm registry.";
	}

	if (!isDeprecated && tag !== "latest") {
		statusType = "notice";
		statusMessage = `Available on the npm registry but not recommended for production use.`;
	}

	if (tag === "local") {
		statusType = "negative";
		statusMessage = `Not yet published to the npm registry.`;
	}

	return (
		<>
			<StatusLight variant={statusType} title={statusMessage}/>
			{!skipLink && data.link ? <a href={data.link} rel="noopener noreferrer">{data.version}</a> : data.version}
			{!skipDate && data.date ? ` ${data.date}` : ""}
		</>
	);
};

// link icons/svgs for ResourceLinkContent
const npmSvg = () => {
	return (
		<ResourceIconWrapper backgroundColor="rgba(203, 56, 55, 0.1)">
			<svg viewBox="0 0 18 7" focusable="false" aria-hidden="true" aria-label="npm">
				<path fill="#CB3837" d="M0,0h18v6H9v1H5V6H0V0z M1,5h2V2h1v3h1V1H1V5z M6,1v5h2V5h2V1H6z M8,2h1v2H8V2z M11,1v4h2V2h1v3h1V2h1v3h1V1H11z"></path>
				<polygon fill="#FFFFFF" points="1,5 3,5 3,2 4,2 4,5 5,5 5,1 1,1 "></polygon>
				<path fill="#FFFFFF" d="M6,1v5h2V5h2V1H6z M9,4H8V2h1V4z"></path>
				<polygon fill="#FFFFFF" points="11,1 11,5 13,5 13,2 14,2 14,5 15,5 15,2 16,2 16,5 17,5 17,1 "></polygon>
			</svg>
		</ResourceIconWrapper>
	)
};

const githubSvg = () => {
	return (
		<ResourceIconWrapper backgroundColor="rgba(0, 0, 0, 0.1)">
			<svg focusable="false" aria-hidden="true" aria-label="GitHub" viewBox="0 0 36 36">
				<path fill="rgb(0, 0, 0)" d="M17.988 2a16.291 16.291 0 0 0-5.147 31.747c.814.149 1.111-.354 1.111-.786 0-.386-.014-1.411-.022-2.77-4.531.984-5.487-2.184-5.487-2.184a4.32 4.32 0 0 0-1.809-2.383c-1.479-1.01.112-.99.112-.99a3.42 3.42 0 0 1 2.495 1.679 3.468 3.468 0 0 0 4.741 1.353 3.482 3.482 0 0 1 1.034-2.177C11.4 25.078 7.6 23.68 7.6 17.438a6.3 6.3 0 0 1 1.677-4.371 5.863 5.863 0 0 1 .16-4.311s1.368-.438 4.479 1.67a15.451 15.451 0 0 1 8.157 0c3.109-2.108 4.475-1.67 4.475-1.67a5.857 5.857 0 0 1 .162 4.311 6.286 6.286 0 0 1 1.674 4.371c0 6.258-3.808 7.635-7.437 8.038a3.888 3.888 0 0 1 1.106 3.017c0 2.177-.02 3.934-.02 4.468 0 .436.293.943 1.12.784A16.292 16.292 0 0 0 17.988 2z"></path>
			</svg>
		</ResourceIconWrapper>
	)
};

const adobeSvg = () => {
	return (
		<ResourceIconWrapper>
			<svg viewBox="0 0 36 36" focusable="false" aria-hidden="true" aria-label="AdobeLogo">
				<path fill="rgb(250, 15, 0)" d="M22.175 4H34v28L22.175 4zm-8.336 0H2v28L13.839 4zm4.165 10.317l7.538 17.682h-4.939l-2.258-5.632h-5.517l5.176-12.05z"></path>
			</svg>
		</ResourceIconWrapper>
	)
};

/**
 * Determines which SVG to use based on the resource link
 */
const iconSvgs = (linkType) => {
	let svgAsset;

	switch(linkType) {
		case "package": 
			svgAsset = npmSvg()
			break;
		case "repository": 
			svgAsset = githubSvg()
			break;
		case "guidelines": 
			svgAsset = adobeSvg()
			break;
		default: 
			break;
	}

	return svgAsset;
};

/**
 * Converts the linkType to the subtitle text
 */
const convertLinkTypeText = (linkType) => {
	switch(linkType) {
		case "package": 
			linkType = "npm"
			break;
		case "repository": 
			linkType = "GitHub"
			break;
		case "guidelines": 
			linkType = "Spectrum website"
			break;
		default: 
			break;
	}
	return linkType;
};

export const ResourceLinkContent = ({data, linkType=["package", "repository", "guidelines"]}) => {
	const packageJson = data;

	// componentGuidelinesName
	let packageName = "";
	let packageLink = "";

	// componentBetaName: for components with guidelines that are still on spectrum-contributions/beta site
	let packageAltName = "";
	let packageAltLink = "";

	// For form and meter, both are nested within other component package.json files
  let nestedComponent = packageJson?.nestedComponentName ?? undefined;
	
	if(linkType === "package") {
		// NPM package name and link 
		packageName = packageJson?.name ?? undefined;
		packageLink = (packageName && typeof packageName !== "undefined") ? `https://npmjs.com/${packageName}` : false;
	}
	
	else if (linkType === "repository") {
		// repo name and link 
		packageName = packageJson?.name ? packageJson?.name.split('/').pop() : undefined;
		packageLink = (packageName && typeof packageName !== "undefined") ? `https://github.com/adobe/spectrum-css/tree/main/components/${packageName}` : false;
	}

	else if (linkType === "guidelines") {
		// guidelines site name and link 
		packageName = packageJson?.componentGuidelinesName ?? undefined;

		 // TODO: This may not be a sustainable approach to targeting specific nested components. For example, text area is sort of nested under text field, but we don't surface text area as a separate component, like meter or form. We should probably refactor this to either support nested components more dynamically or potentially un-nest components.
		if (nestedComponent === "form") {
			packageName = undefined;
		}

		if (nestedComponent === "meter") {
			packageName = nestedComponent;
		}

		packageLink = (packageName && typeof packageName !== "undefined") ? `https://spectrum.adobe.com/page/${packageName}` : false;

		// internal contributions/beta guidelines name and link
		packageAltName = (packageName) ? undefined : packageJson?.componentBetaName;

		if (!packageLink) {
			packageAltLink = (packageAltName && typeof packageAltName !== "undefined") ? `https://spectrum-contributions.corp.adobe.com/page/${packageAltName}` : false;
			packageLink = packageAltLink;
		}
	}

	else {
		throw new Error(`Are you sure you mean "${linkType}"? Please use a valid link type instead: "package", "repository", "guidelines"`);
	}

	return (
		<>
			{packageLink ? <>
				<ResourceLink href={packageLink} rel="noopener" className="sb-unstyled">
					{iconSvgs(linkType)}
					<ResourceTextWrapper>
						<div className="spectrum-Heading spectrum-Heading--sizeXS">View {linkType}</div>
						<div className="spectrum-Body spectrum-Body--sizeS">{convertLinkTypeText(linkType)}</div>
					</ResourceTextWrapper>
				</ResourceLink>
				</>
				: ""
			}
		</>
	)
};

/**
 * Displays the list of relevant component links (to NPM, repo, guidelines, etc). 
 * 
 * Usage of this doc block within MDX template(s):
 *  <ResourceListDetails />
 */
export const ResourceListDetails = () => {
	const storyMeta = useOf('meta');

	const packageJson = storyMeta?.csfFile?.meta?.parameters?.packageJson ?? {};

	if (!packageJson?.name) return;

	const [isLoading, setIsLoading] = useState(true);
	const [npmData, setnpmData] = useState({});

	fetchNpmData(packageJson.name, setnpmData, setIsLoading);

	return (
		<ResetWrapper>
			{ !isLoading
				? <>
						<ResourceSection skipBorder={true} className="sb-unstyled">
							<ResourceLinkContent className="doc-block-links" linkType="guidelines" data={packageJson}/>
							<ResourceLinkContent className="doc-block-links" linkType="repository" data={packageJson}/>
							<ResourceLinkContent className="doc-block-links" linkType="package" data={packageJson}/>
						</ResourceSection>
					</>
				: ""
			}
		</ResetWrapper>
	)
};

/**
 * Process the npm data to determine the versions to display.
 * @param {object>} storyMeta
 * @param {object} npmData
 * @returns
 */
function processReleaseData(storyMeta, npmData) {
	const previewURL = "https://www.npmjs.org/package/";

	const packageJson = storyMeta?.csfFile?.meta?.parameters?.packageJson ?? {};
	const ignoredTags = storyMeta?.csfFile?.meta?.parameters?.ignoredTags ?? [];

	const tags = [
		// Force "local" to be included in the list because we won't fetch it from npm
		// but we want to show it in the list of tags
		"local",
		...Object.keys(npmData?.["dist-tags"] ?? {})
	].filter(tag => !ignoredTags.includes(tag));

	const mapVersions = new Map();
	for (const tag of tags) {
		let version = npmData?.versions?.[npmData?.["dist-tags"]?.[tag]]?.version;
		let date = npmData?.time?.[npmData?.["dist-tags"]?.[tag]] ? "published " + new Date(npmData?.time?.[npmData?.["dist-tags"]?.[tag]]).toLocaleDateString("en-US", {
			year: 'numeric',
			month: 'short',
			day: '2-digit',
		}) : null;
		const link = npmData?.["dist-tags"]?.[tag] ? `${previewURL}${packageJson.name}/v/${npmData?.["dist-tags"]?.[tag]}` : null;

		// Prefer the version from the package.json file if this is the "local" tag
		if (tag === "local") {
			version = packageJson?.version;
			date = "unpublished";
		}

		mapVersions.set(tag, {
			version,
			date,
			link
		});
	}

	const allVersions = [...mapVersions.entries()].sort(([aTag, a], [bTag, b]) => {
		// Sort the local tag to the top, followed by the latest tag
		// then sort the rest of the tags by date in descending order
		if (aTag === "local") return -1;
		if (bTag === "local") return 1;
		if (aTag === "latest") return -1;
		if (bTag === "latest") return 1;
		return new Date(b.date) - new Date(a.date);
	});

	// Remove the local tag from the list if the latest tag is available and it's larger than the local tag using semver
	if (tags.includes("local") && tags.includes("latest")) {
		const localVersion = allVersions.find(([tag]) => tag === "local")?.[1]?.version;
		const latestVersion = allVersions.find(([tag]) => tag === "latest")?.[1]?.version;
		if (localVersion && latestVersion && localVersion === latestVersion) {
			allVersions.splice(allVersions.findIndex(([tag]) => tag === "local"), 1);
		} else if (localVersion && latestVersion && localVersion !== latestVersion) {
			// Check if the local version is a lower semver than the latest version
			const localSemver = localVersion.split(".");
			const latestSemver = latestVersion.split(".");
			const localMajor = parseInt(localSemver[0]);
			const latestMajor = parseInt(latestSemver[0]);
			if (localMajor < latestMajor) {
				allVersions.splice(allVersions.findIndex(([tag, data]) => tag === "local"), 1);
			} else if (localMajor === latestMajor) {
				const localMinor = parseInt(localSemver[1]);
				const latestMinor = parseInt(latestSemver[1]);
				if (localMinor < latestMinor) {
					allVersions.splice(allVersions.findIndex(([tag, data]) => tag === "local"), 1);
				} else if (localMinor === latestMinor) {
					const localPatch = parseInt(localSemver[2]);
					const latestPatch = parseInt(latestSemver[2]);
					if (localPatch < latestPatch) {
						allVersions.splice(allVersions.findIndex(([tag, data]) => tag === "local"), 1);
					}
				}
			}
		}
	}

	// A boolean to determine if the local version should be shown based on if it still exists in the list of all versions
	const showLocalVersion = allVersions.find(([tag]) => tag === "local");

	return {
		showLocalVersion,
		allVersions,
	};
}

function initCache(key) {
	const [cache, setCache] = useState(JSON.parse(localStorage.getItem(key)) ?? {});

	useEffect(() => {
		try {
			localStorage.setItem(key, JSON.stringify(cache));
		} catch (error) {/* empty */}
	}, [key, cache]);

	return [cache, setCache];
}

function fetchNpmData(packageName, setnpmData, setIsLoading) {
	const [cache, setCache] = initCache(packageName);

	// Capture the npm data for the component from the registry
	useEffect(() => {
		if (typeof cache === "object" && Object.keys(cache).length > 0) {
			setnpmData(cache);
			setIsLoading(false);
			return;
		}

		fetch("https://registry.npmjs.org/" + packageName).then(async (response) => {
			if (!response.ok) {
				console.warn(`Failed to fetch npm data for ${packageName}`);
				return;
			}

			const json = await response.json();

			if (!json) {
				console.warn(`Failed to fetch npm data for ${packageName}`);
				return;
			}

			setnpmData(json);
			setCache(json);
			setIsLoading(false);
		}).catch((error) => {
			console.warn(error?.message ?? error);
		});
	}, [cache, setCache, packageName, setnpmData, setIsLoading]);
}

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

	const isDeprecated = storyMeta?.csfFile?.meta?.parameters?.status?.type == "deprecated";
	const packageJson = storyMeta?.csfFile?.meta?.parameters?.packageJson ?? {};

	if (!packageJson?.name) return;

	const [isLoading, setIsLoading] = useState(true);
	const [npmData, setnpmData] = useState({});

	fetchNpmData(packageJson.name, setnpmData, setIsLoading);

	const { showLocalVersion, allVersions } = processReleaseData(storyMeta, npmData);

	return (
		<ResetWrapper>
			{ !isLoading ?
				<DList className="docblock-metadata sb-unstyled">
					{ isDeprecated
						?	<>
								<DTerm key={'status'}>Status:</DTerm>
								<DDefinition key={'status-data'}>Deprecated</DDefinition>
							</>
						: ""
					}
					{ showLocalVersion
						?	<>
								<DTerm key={'version-label'}>Local version:</DTerm>
								<DDefinition key={'version'}><VersionDetails tag={"local"} data={allVersions && allVersions.find(([tag]) => tag === "local")?.[1]} isDeprecated={isDeprecated} /></DDefinition>
							</>
						: <>
							<DTerm key={'version-label'}>Latest version:</DTerm>
							<DDefinition key={'version'}><VersionDetails tag={"latest"} data={allVersions && allVersions.find(([tag]) => tag === "latest")?.[1]} isDeprecated={isDeprecated} skipLink={true} /></DDefinition>
						</>
					}
				</DList>
			: ""}
		</ResetWrapper>
	);
};

/**
 * Displays the tagged releases of the component. The tagged releases are read from npm.
 *
 * Usage of this doc block within MDX template(s):
 *  <TaggedReleases />
 */
export const TaggedReleases = () => {
	const storyMeta = useOf('meta');

	const isDeprecated = storyMeta?.csfFile?.meta?.parameters?.status?.type == "deprecated";
	const packageJson = storyMeta?.csfFile?.meta?.parameters?.packageJson ?? {};

	const [isLoading, setIsLoading] = useState(true);
	const [npmData, setnpmData] = useState({});

	fetchNpmData(packageJson.name, setnpmData, setIsLoading);

	const { allVersions } = processReleaseData(storyMeta, npmData);

	return (
		<ResetWrapper>
			{ !isLoading ?
				<DList skipBorder={true} className="docblock-releases sb-unstyled">
					{ allVersions.filter(([tag]) => tag !== "local").map(([tag, data], idx) => (
						<DSet key={`${tag}-${idx}`} term={tag}>
							<VersionDetails tag={tag} data={data} isDeprecated={isDeprecated} skipDate={true} />
						</DSet>
					))}
				</DList>
				: ""
			}
		</ResetWrapper>
	);
};

export default ComponentDetails;
