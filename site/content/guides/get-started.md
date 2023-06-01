---
layout: pages.njk
title: Get started
permalink: get-started/
eleventyNavigation:
  title: Get started
  key: get-started
  order: 1
---

<article>

# Get started with Spectrum CSS {.spectrum-Heading .spectrum-Heading--sizeXXL .spectrum-Heading--serif #get-started}

We have a number of resources that outline how to set up Spectrum CSS for your project, as well as an introductory tutorial that's a hands-on way to understand how our implementation works. {.spectrum-Body .spectrum-Body--sizeXXL}

<section>

## Resources

If you're ready to jump in, here's how to set up Spectrum CSS on our GitHub: {.spectrum-Body .spectrum-Body--sizeL}

<br/>

- [Full README](https://github.com/adobe/spectrum-css/blob/main/README.md)
- [Importing icons](https://github.com/adobe/spectrum-css/blob/main/README.md#importing-ui-icons)

{.spectrum-Body .spectrum-Body--sizeL}

</section>

<section>

## Install

Spectrum CSS requires a Node.js environment with a minimum version of 10.

First, install the required button dependencies by running:

```sh
yarn add -D @spectrum-css/vars @spectrum-css/button @spectrum-css/page
```

## Applying styles

### Setting context

At the root of your project, add the classes necessary to render components in the correct context. For example, are you building a dark themed app? You'll want to leverage the `spectrum--dark` class. Working in a mobile-first environment? Leverage the `spectrum--large` context.

For displaying a button in Spectrum's light color theme and medium scale, added to the document's `<html>` tag:

```html
<html class="spectrum spectrum--medium spectrum--light"></html>
```

### Stylesheets

Inside the `<head>` tag, include the stylesheets that contain the design system tokens for global variables, scales, and color themes, as well as the stylesheets for the components themselves:

```html
<head>
	<link
		rel="stylesheet"
		href="node_modules/@spectrum-css/vars/dist/spectrum-global.css"
	/>
	<link
		rel="stylesheet"
		href="node_modules/@spectrum-css/vars/dist/spectrum-medium.css"
	/>
	<link
		rel="stylesheet"
		href="node_modules/@spectrum-css/vars/dist/spectrum-light.css"
	/>
	<link
		rel="stylesheet"
		href="node_modules/@spectrum-css/button/dist/index-vars.css"
	/>
</head>
```

## Semantic markup

Inside your application, be sure to use the recommended markup for a Spectrum button. Note that the example also includes the CSS class name, `spectrum-Button--fill spectrum-Button--accent`, to use a call-to-action styling.

```html
<button
	class="spectrum-Button spectrum-Button--fill spectrum-Button--accent spectrum-Button--sizeM"
>
	<span class="spectrum-Button-label">Button</span>
</button>
```

Here's what it all looks like together:

```html
<html class="spectrum spectrum--light spectrum--medium">
	<head>
		<link
			rel="stylesheet"
			href="node_modules/@spectrum-css/vars/dist/spectrum-global.css"
		/>
		<link
			rel="stylesheet"
			href="node_modules/@spectrum-css/vars/dist/spectrum-medium.css"
		/>
		<link
			rel="stylesheet"
			href="node_modules/@spectrum-css/vars/dist/spectrum-light.css"
		/>
		<link
			rel="stylesheet"
			href="node_modules/@spectrum-css/page/dist/index-vars.css"
		/>
		<link
			rel="stylesheet"
			href="node_modules/@spectrum-css/button/dist/index-vars.css"
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

![Screenshot of the rendered CTA button in a browser window](/assets/images/button-screen-shot.png){.spectrum-Image--centered}

</section>

<section>

## Contribute to Spectrum CSS

This project relies on the contributions of developers like you. We welcome contributions of all kinds, from simple bug reports through to direct code contributions. You know what your project needs and we value your help in making Spectrum CSS better.

We'd love for you to contribute to the project. Please review the [contribution guidelines on our GitHub](https://github.com/adobe/spectrum-css/blob/main/.github/CONTRIBUTING.md){.spectrum-Link.spectrum-Link--quiet} to get started.

</section>

</article>
