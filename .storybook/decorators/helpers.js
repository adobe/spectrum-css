import { global } from '@storybook/global';

/**
 * @type (container: HTMLElement, id: string, styleObj: object, add: boolean = true) => void
 * @description Fetches the style container for the given ID or creates a new one
 **/
export function toggleStyles(container, id, styleObj, add = true) {
	if (!container && !id) return;

	let style = container.querySelector(`#${id}`);
	const styles = styleObj ? Object.values(styleObj)[0] : undefined;

	if (!add) {
		if (style) style.remove();
		return;
	}

	if (!style) {
		style = document.createElement("style");
		style.id = id;
		container.appendChild(style);
	}

	if (!style) return;

	if (add && styles) style.innerHTML = styles;
	else style.remove();
}

/**
 * @type (id: string, container: HTMLElement) => HTMLElement
 * @description Fetches the style container for the given ID or creates a new one
 **/
export function fetchStyleContainer(id, container) {
	if (!id) return;

    const { document } = global;
    if (!container) container = document.body;

	let styleContainer = container.querySelector(`#${id}`);
	if (styleContainer) return styleContainer;

	const styles = document.createElement("div");
	styles.id = id;
	// @todo add styles to the top part of the container
	container.appendChild(styles);
	return styles;
}

/**
 * @type (id: string, isDocs: boolean = false) => HTMLElement[]
 * @description Fetches the style container for the given ID or creates a new one
 **/
export function fetchContainers(id, isDocs = false) {
    if (!id) return [];
    const { document } = global;

    let containers = [document.body];

    // Storybook IDs used to target the container element for the docs pages
    const roots = [
        ...document.querySelectorAll(`#story--${id}`),
        ...document.querySelectorAll(`#story--${id}--primary`)
    ];

    // viewMode is either "docs" or "story"
    if (isDocs && roots.length > 0) {
        containers = roots.map(root => root.closest(".docs-story") ?? root);
    }

    return containers;
}
