# stylelint-suit-naming-pattern

> Validates classnames on SUIT naming pattern

[SUIT Docs](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md)

## Description

Let's say you have a classname `.spectrum-Well-Component{}`. This will show a lint error because it expects the classname to follow SUIT naming convention like`.spectrum-Well-component{}`

Valid classnames:

```css
.spectrum {...}
.spectrum-Component {...}
.spectrum-Component-newName {...}
.spectrum-Component--state {...}
.is-focused {...}
.spectrum-ComponentName.spectrum-ComponentX {...}
.spectrum-ComponentName-descendant1.spectrum-ComponentX-descendant2 {...}
.u-camelCase {...}
```

Invalid classnames:

```css
.spectrum-Component-NewName {...}
.spectrum-Component--SizeXS {...}
```

## Installation

```sh
yarn add -D stylelint-suit-naming-pattern
```

## How to use

In your stylelintrc.json add stylelint-suit-naming-pattern to your plugins array and to your rules array like this:

```json
{
  plugins: ['stylelint-suit-naming-pattern'],
  rules: {
    "custom-rule/suit-naming-pattern": true,
  }
}
```

## Usage

Wrong: Throws an error here

```css
.spectrum-Well-Component {
  background-color: var(--prefix-component-background-color);
}
```

Correct:

```css
.spectrum-Well-component {
  background-color: var(--prefix-component-background-color);
}
```
