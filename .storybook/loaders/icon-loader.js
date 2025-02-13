import { cleanUiIconName, cleanWorkflowIconName } from "@spectrum-css/icon/stories/utilities.js";

/**
 * Loads all SVG files from both icon sets, and stores a string with the SVG markup.
 *
 * Excludes "22x20" workflow icons as they are not yet used within the design system.
 *
 * @see https://storybook.js.org/docs/writing-stories/loaders
 * @see https://vite.dev/guide/features#glob-import
 */
export const IconLoader = async () => {
	let iconData = {
		icons: {
			workflow: await import.meta.glob(
				[
					"/node_modules/@adobe/spectrum-css-workflow-icons/dist/assets/svg/*.svg",
					"!/node_modules/@adobe/spectrum-css-workflow-icons/dist/assets/svg/*_22x20*.svg",
				],
				{
					eager: true,
					query: "?raw",
					import: "default",
				}
			),
			ui: await import.meta.glob(
				"/node_modules/@spectrum-css/ui-icons/dist/svg/*.svg",
				{
					eager: true,
					query: "?raw",
					import: "default",
				}
			),
		},
	};

	/**
	 * Changes all keys in the IconLoader object to be just the cleaned icon name used within our Storybook's Icon component,
	 * instead of the full file name and directory that was loaded.
	 *
	 * E.g. "/node_modules/@adobe/spectrum-css-workflow-icons/dist/assets/svg/S2_Icon_3DAsset_20_N.svg" would become just "3DAsset".
	 */
	iconData.icons.workflow = Object.fromEntries(
		Object.entries(iconData.icons.workflow).map(
			([key, value]) => [cleanWorkflowIconName(key.split("/").pop()), value]
		)
	);

	iconData.icons.ui = Object.fromEntries(
		Object.entries(iconData.icons.ui).map(
			([key, value]) => [cleanUiIconName(key.split("/").pop()), value]
		)
	);

	return iconData;
};
