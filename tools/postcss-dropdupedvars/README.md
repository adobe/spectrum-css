# postcss-dropdupedvars
> Drop duplicate vars

## Installation

```sh
npm install postcss-dropdupedvars
postcss -u postcss-dropdupedvars -o dist/index.css src/index.css
```

## Usage

Assuming you have some variables defined that are overridden in the same rule:

```css
:root {
  --prefix-component-background-color: blue;

  --prefix-component-width: 10px;
  --prefix-component-height: 10px;
  --prefix-component-size: 10px;

  --prefix-component-width: 12px;
  --prefix-component-height: 12px;
}
```

The the overridden definitions will be removed from output:

```css
:root {
  --prefix-component-background-color: blue;
  --prefix-component-size: 10px;

  --prefix-component-width: 12px;
  --prefix-component-height: 12px;
}
```
