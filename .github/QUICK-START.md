# Quick start guide

This guide will show you how to quickly install Spectrum CSS and use it to display the Button component.

## Install using Node/yarn

Install the components you want along with their dependencies. Here's an example:

```shell
yarn add -DW @spectrum-css/tokens @spectrum-css/typography @spectrum-css/page @spectrum-css/icon @spectrum-css/button
```

Spectrum CSS components utilize custom properties in order to express our design language through a set of core tokens. We leverage the `@adobe/spectrum-tokens` data as a source of this design data and convert it into a set of CSS custom properties. This allows us to use the tokens in our components and to create a consistent design language across all of our components.

Some of these tokens have different values depending on the visual language or scale being used. The default values for all tokens are set to the default values for the light theme and medium scale.

To force the dark theme, you can add `color-scheme: dark` to your container element. Doing this will force the dark value to be used for all tokens that have one. This can be done at any level of the DOM and by leveraging the cascade, the color schemes can be nested or changed at any level. For example, if you want to force the dark theme for a specific component, you can add `color-scheme: dark` to that component's container element.

```html
<style>
	:root {
		/* Allow user preference to control the color scheme at first */
		color-scheme: light dark;
	}
</style>
<div class="container" style="color-scheme: dark">
	<p>A dark themed container</p>
	<div class="container" style="color-scheme: light">
		<p>A light themed container</p>
	</div>
</div>
```

The design language also includes a set of token values that represent different device sizes. At the moment, these values are only defined as "medium" and "large", with "medium" as the default which maps generally to a desktop or laptop screen. The "large" value is intended for smaller devices, such as phones and tablets. The default value for all tokens is set to the default value for the medium scale. To force the large scale, you can load the CSS overrides for the large scale:

```html
<link rel="stylesheet" href="node_modules/@spectrum-css/tokens/dist/css/mobile.css" />
```

This will override the default value for all tokens to the value for the large scale.

Use the `index.css` files in your project to include component and global styles ([background theme/colorstop](https://github.com/adobe/spectrum-css?tab=readme-ov-file#themes-colorstops), [platform scaling](https://github.com/adobe/spectrum-css?tab=readme-ov-file#scales), etc.) for the component. If you don't need all of the global styles, peek at the docs for [including assets](https://github.com/adobe/spectrum-css?tab=readme-ov-file#including-assets)). Use this file by including the stylesheet (plus stylesheets for dependencies) in the `<head>` tag:

```html
<head>
	<!-- Include global tokens depedency first -->
	<link
		rel="stylesheet"
		href="node_modules/@spectrum-css/tokens/dist/css/index.css"
	/>

	<!-- Include index.css for the components you're using -->
	<link
		rel="stylesheet"
		href="node_modules/@spectrum-css/button/dist/index.css"
	/>
</head>
```

Inside the `<body>` tag, add the markup for your component (Spectrum button in our example). The example also includes the CSS class names `spectrum-Button--fill` and `spectrum-Button--accent`, to use the accent variant:

```html
<button
	class="spectrum-Button spectrum-Button--fill spectrum-Button--accent spectrum-Button--sizeM"
>
	<span class="spectrum-Button-label">Button</span>
</button>
```

To put it all together, your final html file will look like this:

```html
<html class="spectrum spectrum--light spectrum--medium">
	<head>
		<link
			rel="stylesheet"
			href="node_modules/@spectrum-css/tokens/dist/css/index.css"
		/>
		<link
			rel="stylesheet"
			href="node_modules/@spectrum-css/button/dist/index.css"
		/>
	</head>
	<body>
		<button
			class="spectrum-Button spectrum-Button--fill spectrum-Button--accent spectrum-Button--sizeM"
		>
			<span class="spectrum-Button-label">Button</span>
		</button>
	</body>
</html>
```

## Include files from a CDN

Another way to include Spectrum CSS components in your project is to use a CDN to link to the components you want, plus their dependencies, in the `<head>` tag of your HTML. If you choose to use a CDN, please note that Spectrum CSS doesn't manage a CDN, cannot confirm the availability or up-time of external CDNs, and doesn't recommend using a CDN for Spectrum CSS in a production environment.
