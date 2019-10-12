# Spectrum CSS legacy usage

To enable graceful change to individual components, and to let you consume only the changes you want to consume on the timeline you want to consume it, Spectrum CSS has moved to individually versioned components. Also, we've moved to a CSS custom properties approach as our default usage method.

Though these were necessary moves, we didn't want to leave existing users stranded while making them. As such, we still support the following legacy usage and distribution methods detailed below.

## Bundle packages

Bundle packages with all of the Spectrum CSS components are available for existing consumers that aren't yet ready to move to individually versioned components. All of the same files included in the individually versioned releases are present, albeit within `dist/components/`.

**Avoid the bundle packages if you're starting fresh with Spectrum CSS, and instead [install only the components you need](README.md#using-spectrum-css).**

### Backwards-compatible bundle

This package WILL NOT get updates to components that have had breaking changes, so it should be used only as a stand-in until your team has time to move to individually versioned components.

To install the backwards-compatible bundle:

```
npm install @adobe/spectrum-css
```

### Latest bundle

To install the bundle with the latest components:

```
npm install @spectrum-css/spectrum-css
```

### CSS variables in bundles

Since bundles know exactly which components they're using, they ship with a set of files that contain only the variables used by the components in the bundle.

In the `dist/vars/` folder, you'll find the following files:

* `spectrum-dark-unique.css`
* `spectrum-darkest-unique.css`
* `spectrum-global-unique.css`
* `spectrum-large-unique.css`
* `spectrum-light-unique.css`
* `spectrum-lightest-unique.css`
* `spectrum-medium-unique.css`

These files can be imported instead of their not `-unique` counterparts for a slightly smaller bundle size.

## Legacy usage

The following are legacy methods for using Spectrum CSS. The [CSS custom properties method](README.md#using-spectrum-css) is preferred.

Spectrum CSS also builds 'multi-stop' and 'single-stop' versions of the CSS for older browsers (IE 11). This enables a consumer to either allow for multiple Spectrum color-stops in a single CSS file or can limit the number of selectors to only those needed for a single color-stop.

**Do not use these methods if you are starting fresh with Spectrum CSS and do not need to support IE 11.**

### Multi-stop Strategy

The first method of applying color-stops, *multistop*, makes it possible to have any number of color-stops on the same page. This method results in slightly larger CSS files with more selectors but is the method most products will use as dark and light color-stops are commonly mixed in Spectrum designs.

1. To get all Spectrum components, include `dist/spectrum-core.css` then `dist/spectrum-COLORSTOP.css` for each color-stop you need (where `COLORSTOP` is light, dark, etc).

2. To get only the CSS for components and color-stops you need, include the following to start:

* `node_modules/@spectrum-css/page/dist/index.css`
* `node_modules/@spectrum-css/page/dist/multiStops/COLORSTOP.css` for each color-stop
* `node_modules/@spectrum-css/typography/dist/index.css`
* `node_modules/@spectrum-css/typography/dist/multiStops/COLORSTOP.css` for each color-stop

Then, for each component you need:

* `node_modules/@spectrum-css/COMPONENT/dist/index.css` for each component
* `node_modules/@spectrum-css/COMPONENT/dist/multiStops/COLORSTOP.css` for each color-stop

Set `<body class="spectrum spectrum--light">` to skin the page with light colors, and add `<div class="spectrum--dark">` wherever you need dark styles, or any combination of the above.

Note that, due to CSS selector specificity, whatever color-stop you import last will win if you nest color-stops 3 levels deep. That is, if you first import the `light` color-stop, the `dark` color-stop, and you have the following HTML, the 3rd button ends up dark.

```html
<body class="spectrum spectrum--light">
  <button class="spectrum-Button">I'm light!</button>

  <div class="spectrum--dark">
    <button class="spectrum-Button">I'm dark!</button>

    <div class="spectrum--light">
      <button class="spectrum-Button">I'm still dark!</button>
    </div>
  </div>
</body>
```

### Single-stop Strategy

The second method of applying color-stops, *singlestops*, makes it so it's only possible to have a single color-stop on the page at once. This method results in fewer selectors and smaller CSS files.

1. To get all Spectrum components for a specific color-stop, include only `dist/standalone/spectrum-COLORSTOP.css`.

2. To get only the CSS for components you need and a single color-stop, include the following to start:

* `node_modules/@spectrum-css/page/dist/index.css`
* `node_modules/@spectrum-css/page/dist/colorStops/COLORSTOP.css` for the single color-stop
* `node_modules/@spectrum-css/typography/dist/index.css`
* `node_modules/@spectrum-css/typography/dist/colorStops/COLORSTOP.css` for the single color-stop

Then, for each component you need:

* `node_modules/@spectrum-css/COMPONENT/dist/index.css` for each component
* `node_modules/@spectrum-css/COMPONENT/dist/colorStops/COLORSTOP.css` for the single color-stop

As there is CSS for only one color stop present, simply set `<body class="spectrum">`. If mixing with individual components using the *multistop* strategy, you can add `class="spectrum--dark"` on `<body>` or anywhere else, but it only affects components whose color-stops were imported using the individual component multistop strategy.

### Import Order and Components

With Spectrum CSS, dependency management between components is the responsibility of the consumer, you. The framework you're building likely has dependencies itself, such as `dropdown` depends on `button`, and each of the components includes its CSS. If this is the case, you'll get the CSS in the right order automatically, since `dropdown` is going to depend on `button`, and `button` will import the necessary CSS.

However, if you're doing a more manual inclusion of CSS files, the easiest thing to do is to use the fully built `dist/spectrum-core.css` + `dist/spectrum-light.css` or `dist/standalone/spectrum-light.css` files described above. If you need only specific components, be sure to follow the order in `src/components.css` so components can override styles of their dependencies.

### Import Order and Colorstops

If your pages are light by default, with some dark elements embedded within (shell, etc), you should import the light color-stop first, adding `.spectrum--light` to an outer container (affecting the whole page), and adding `.spectrum--dark` to an inner container when you need dark elements (affecting only elements inside of it). That is, the import order of color-stops should match the nesting on your page.

### Scale support

Spectrum CSS supports two scale sizes:

* Medium - Desktop
* Large - Mobile

#### Medium only

By default, when you import `index.css` for each component or `spectrum-core.css`, you'll get the Medium-scale.

#### Large only

If your site is always mobile, you can get large by default by importing `index-lg.css` for individual components, or `spectrum-core-lg.css` for all components.

#### Medium and Large

If you need to display both Medium and Large, you can import `index.css` and `index-diff.css` for individual components, or `spectrum-core.css` and `spectrum-core-diff.css` for all components.

You can then switch scales by adding the `.spectrum--large`  or `.spectrum--medium` class on the `<html>` element.

Note that the Spectrum CSS UI icons must change as well, see below for a full example.
