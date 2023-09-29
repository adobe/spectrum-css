# stylelint-suit-naming-pattern

> Validates class names based on an interpretation of SUIT[^1] and Spectrum naming conventions.

## Installation

```sh
yarn add -D @spectrum-tools/stylelint-suit-naming-pattern
```

## Description

When an invalid class format is identified, a lint error is thrown. Classes are expected to follow some of the following naming conventions:

### Component class names

- All classes should be prefixed with the Spectrum namespace (e.g. `.spectrum-`)
- Component names should be written in PascalCase (e.g. `.spectrum-ComponentName`)
- Descendant names should be written in camelCase (e.g. `.spectrum-ComponentName-descendantName`)
- Modifier names should be written in camelCase preceeded by a double dash (e.g. `.spectrum-ComponentName--modifierName`)

### State class names

Also known as utility classes deviate from the SUIT conventions by replacing the `u-` for the more commonly used `is-` prefix to denote state. These should be active words that describe the state of the component. For example, `.is-focused` or `.is-disabled`. For more complex states, the state name should be written in camelCase (e.g. `.is-keyboardFocused`).

### Contextual class names

These classes are used to describe the context in which the component is being used and are typically hosts for variable definitions. For example, `.spectrum-light` or `.spectrum-medium`.

- All classes should be prefixed with the Spectrum namespace (e.g. `.spectrum-`)
- Context names should be simple, single word descriptions of the context (e.g. `.spectrum-light`)
  - They should represent the context in which components might exist such as themes, scales, or library

## Usage

In your configuration (e.g. `stylelintrc.json`) add `stylelint-suit-naming-pattern` to your plugins array and to your rules array, i.e.:

```js
plugins: ['stylelint-suit-naming-pattern'],
rules: {
  "spectrum-tools/suit-naming-pattern": true,
}
```

### ✅ Valid examples

#### Component selectors

```css
/* All classes should be prefixed with spectrum to avoid clashes */
.spectrum-Boomer {
	...;
}
.spectrum-GenX {
	...;
}
/* Descendants describe elements that compose the parent */
.spectrum-Millenial-socialMedia {
	...;
}
/* Typically modifiers describe a variant */
.spectrum-Millenial--avocadoLover {
	...;
}
```

#### State selectors

```css
.is-open {
	...;
}
.is-focused {
	...;
}
.is-keyboardFocused {
	...;
}
```

#### Context selectors

```css
.spectrum {
	...;
}
.spectrum-medium {
	...;
}
.spectrum-light {
	...;
}
```

#### Compound selectors

```css
.spectrum-Boomer.spectrum-GenX.spectrum-Millenial {
	...;
}
.spectrum-Boomer:not(.is-notDeadYet) {
	...;
}
```

```css
.spectrum-Well-container {
  background-color: var(--prefix-component-background-color);
}
```

### 🙅🏽‍♂️ Invalid examples

```css
/* Descendants should be written in camelCase */
.spectrum-Component-NewName {
	...;
}
/* Modifiers should use camelCase */
.spectrum-Component--SizeXS {
	...;
}
/* Should be prefixed with is- */
.active {
	...;
}
```

```css
/* Descendants should be written in camelCase with single dash */
.spectrum-Well--Container {
  background-color: var(--prefix-component-background-color);
}
```

[^1]: [SUIT Naming Conventions](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md)
