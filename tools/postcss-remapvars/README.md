# postcss-remapvars
> Remap variables to create variable-driven CSS components

## Installation

```sh
npm install postcss-remapvars
postcss -u postcss-remapvars -o dist/index.css src/index.css
```

## Usage

Assuming you have some variables defined and a rule whose properties reference them:

```css
:root {
  --component-background-color: blue;
  --component-s-width: 10px;
  --component-s-height: 10px;
  --component-l-width: 20px;
  --component-l-height: 20px;
}

.component {
  background-color: var(--component-background-color);

  width: var(--component-width);
  height: var(--component-height);
}
```

Define additional rules, calling `@remapvars { find: STRING | REGEXP, replace: STRING }` to re-define the variables with their modified versions:

```css
.component--small {
  @remapvars {
    find: --component-s-;
    replace: --component-;
  }
}

.component--large {
  @remapvars {
    find: --component-l-;
    replace: --component-;
  }
}
```

The result are classes that re-define variables to change the visual style of a component. That is, instead of modifying CSS properties to reference new variables, you override the variables that the CSS properties already reference:

```css
:root {
  --component-background-color: blue;
  --component-s-width: 10px;
  --component-s-height: 10px;
  --component-l-width: 20px;
  --component-l-height: 20px;
}

.component {
  background-color: var(--component-background-color);

  width: var(--component-width);
  height: var(--component-height);
}

.component--small {
  --component-width: var(--component-s-width);
  --component-height: var(--component-s-height);
}

.component--large {
  --component-width: var(--component-l-width);
  --component-height: var(--component-l-height);
}
```

## Advanced Usage

Regular expressions can be used as well, and flags are supported ala `/whatever/i`:

```css
:root {
  --component-background-color: black;
  --component-text-color: black;
  --component-border-style: solid;
  --component-border-color: orange;
  --component-border-width: 1px;

  --component-background-color-hover: blue;
  --component-text-color-hover: blue;
  --component-border-color-hover: green;
}

.component {
  background-color: var(--component-background-color);
  color: var(--component-text-color);
  border: var(--component-border-width) var(--component-border-color) var(--component-border-style);
}

.component--hover {
  @remapvars {
    find: /(--component-.+)-hover/;
    replace: $1;
  }
}
```

The result is the same, variable-driven classes:

```css
:root {
  --component-background-color: black;
  --component-text-color: black;
  --component-border-style: solid;
  --component-border-color: orange;
  --component-border-width: 1px;

  --component-background-color-hover: blue;
  --component-text-color-hover: blue;
  --component-border-color-hover: green;
}

.component {
  background-color: var(--component-background-color);
  color: var(--component-text-color);
  border: var(--component-border-width) var(--component-border-color) var(--component-border-style);
}

.component--hover {
  --component-background-color: var(--component-background-color-hover);
  --component-text-color: var(--component-text-color-hover);
  --component-border-color: var(--component-border-color-hover);
}
```
