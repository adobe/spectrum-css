const FULLSCREEN_COMPONENT_IDS = [
	'components-alert-dialog',
	'components-dialog',
	'components-modal',
	'components-ray',
	'components-underlay',
	'components-menu--tray-submenu'
];

export const isFullscreen = (context) => {
	const { id } = context;
	const isFullscreenComponent = FULLSCREEN_COMPONENT_IDS.find((componentName) => id.includes(componentName));
	return (isFullscreenComponent) ? true : false;
};

const POPOVER_COMPONENT_IDS = [
	'components-alert-banner',
	'components-coach-mark',
	'components-color-loupe',
	'components-combobox',
	'components-contextual-help',
	'components-datepicker',
	'components-picker',
	'components-popover',
	'components-search-within'
];

export const isPopover = (context) => {
	const { id } = context;
	const isPopoverComponent = POPOVER_COMPONENT_IDS.find((componentName) => id.includes(componentName));
	return (isPopoverComponent) ? true : false;
};
