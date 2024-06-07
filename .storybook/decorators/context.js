import { makeDecorator, useEffect } from "@storybook/preview-api";
import { html } from "lit";

/**
 * @type import('@storybook/csf').DecoratorFunction<import('@storybook/web-components').WebComponentsFramework>
 * @description Global properties added to each component; determines what stylesheets are loaded
 **/
export const withContextWrapper = makeDecorator({
	name: "withContextWrapper",
	parameterName: "context",
	wrapper: (StoryFn, context) => {
		const { args = {}, argTypes = {}, viewMode, id, loaded = {} } = context;
		const { tokens = {} } = loaded;

		const getDefaultValue = (type) => {
			if (!type) return null;
			if (type.defaultValue) return type.defaultValue;
			return type.options ? type.options[0] : null;
		};

		// This property informs which context stylesheets to source
		//    but does not source a stylesheet for itself
		/** @type boolean */
		const isExpress = args.express
			? args.express
			: getDefaultValue(argTypes.express);
		/** @type string */
		const color = args.color ? args.color : getDefaultValue(argTypes.color) ?? "light";
		/** @type string */
		const scale = args.scale ? args.scale : getDefaultValue(argTypes.scale) ?? "medium";

		useEffect(() => {
			const toggleStyles = (container, id, styleObj, add = true) => {
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
			};

			let containers = [document.body];

			const roots = [
				...document.querySelectorAll(`#story--${id}`),
				...document.querySelectorAll(`#story--${id}--primary`)
			];
			if (viewMode === "docs" && roots.length > 0) {
				containers = roots.map(root => root.closest(".docs-story") ?? root);
			}

			for (const container of containers) {
				const styleContainer = container.querySelector("#styles-container");
				const globalContainer = styleContainer.querySelector("#global");
				const colorsContainer = styleContainer.querySelector("#colors");
				const scalesContainer = styleContainer.querySelector("#scale");
				const contextContainer = styleContainer.querySelector("#context");

				container.classList.toggle("spectrum", true);
				container.classList.toggle("spectrum--express", isExpress);

				toggleStyles(globalContainer, "vars-base", tokens?.global?.base, true);
				toggleStyles(contextContainer, "vars-base-spectrum", tokens?.spectrum?.base, true);
				toggleStyles(contextContainer, "vars-base-express", tokens?.express?.base, isExpress);

				for (const c of ["light", "dark", "darkest"]) {
					container.classList.toggle(`spectrum--${c}`, c === color);

					toggleStyles(colorsContainer, `vars-${c}`, tokens?.global?.[c], c === color);
					toggleStyles(colorsContainer, `vars-${c}-spectrum`, tokens?.spectrum?.[c], c === color);
					toggleStyles(colorsContainer, `vars-${c}-express`, tokens?.express?.[c], isExpress && c === color);
				}

				for (const s of ["medium", "large"]) {
					container.classList.toggle(`spectrum--${s}`, s === scale);

					toggleStyles(scalesContainer, `vars-${s}`, tokens?.global?.[s], s === scale);
					toggleStyles(scalesContainer, `vars-${s}-spectrum`, tokens?.spectrum?.[s], s === scale);
					toggleStyles(scalesContainer, `vars-${s}-express`, tokens?.express?.[s], isExpress && s === scale);
				}

				container.style.removeProperty("background");
				const hasStaticElement = container.querySelector(`.${args.rootClass}--staticWhite, .${args.rootClass}--staticBlack, .${args.rootClass}--overBackground`);
				if (hasStaticElement) {
					if (container.querySelector(`.${args.rootClass}--staticBlack`)) {
						container.style.background = "rgb(181, 209, 211)";
					}
					else if (container.querySelector(`.${args.rootClass}--staticWhite, .${args.rootClass}--overBackground`)) {
						container.style.background = "rgb(15, 121, 125)";
					}
				}
			}
		}, [color, scale, isExpress, tokens, args.staticColor]);

		return html`
			<div id="styles-container">
				<div id="global"></div>
				<div id="colors"></div>
				<div id="scale"></div>
				<div id="context"></div>
			</div>
			${StoryFn(context)}
		`;
	},
});
