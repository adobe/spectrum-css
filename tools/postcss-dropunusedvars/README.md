# postcss-dropunusedvars
> Remap variables to create variable-driven CSS components

## Installation

```sh
npm install postcss-dropunusedvars
postcss -u postcss-dropunusedvars -o dist/index.css src/index.css
```

## Usage

Assuming you have some variables defined and rule(s) that use them:

```css
:root {
  --prefix-component-background-color: blue;
  --prefix-component-width: 10px;
  --prefix-component-height: 10px;
  --prefix-component-size: 10px;
}

.component {
  background-color: var(--prefix-component-background-color);

  width: var(--prefix-component-width);
  height: var(--prefix-component-height);
}
```

The variables that are not used in any rule will be removed from the output:

```css
:root {
  --prefix-component-background-color: blue;
  --prefix-component-width: 10px;
  --prefix-component-height: 10px;
}

.component {
  background-color: var(--prefix-component-background-color);

  width: var(--prefix-component-width);
  height: var(--prefix-component-height);
}
```
