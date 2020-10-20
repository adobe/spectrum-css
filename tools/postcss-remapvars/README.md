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

Define additional rules, calling `@remapvars { find: STRING | REGEXP, replace: STRING, filter: [STRING | REGEXP] }` to re-define the variables with their modified versions:

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

### RegEx

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

### Filters

A list of filter patterns can be provided . If any of them is matched, the variable is skipped.

```css
:root {
  --prefix-component-background-color: blue;
  --prefix-component-shadow-size: 1px;
  --prefix-component-halo-size: 1px;
  --prefix-component-s-width: 10px;
  --prefix-component-s-height: 10px;
  --prefix-component-s-background-color: blue;
  --prefix-component-s-shadow-size: 1px;
  --prefix-component-s-halo-size: 1px;
  --prefix-component-l-width: 20px;
  --prefix-component-l-height: 20px;
  --prefix-component-l-background-color: blue;
  --prefix-component-l-shadow-size: 1px;
  --prefix-component-l-halo-size: 1px;
}

.component {
  background-color: var(--prefix-component-background-color);

  width: var(--prefix-component-width);
  height: var(--prefix-component-height);
}

.component--small {
  @remapvars {
    find: --prefix-component-s-;
    filter: color, /shadow|halo/;
    replace: --prefix-component-;
  }
}

.component--large {
  @remapvars {
    find: --prefix-component-l-;
    filter: color, /shadow|halo/;
    replace: --prefix-component-;
  }
}
```

Even though `--prefix-component-s-background-color`, `--prefix-component-shadow-size`, and `--prefix-component-l-halo-size` match the `find` pattern, they will be excluded as they match one of the `filter` patterns, and won't be included in the remap:

```css
:root {
  --prefix-component-background-color: blue;
  --prefix-component-shadow-size: 1px;
  --prefix-component-halo-size: 1px;
  --prefix-component-s-width: 10px;
  --prefix-component-s-height: 10px;
  --prefix-component-s-background-color: blue;
  --prefix-component-s-shadow-size: 1px;
  --prefix-component-s-halo-size: 1px;
  --prefix-component-l-width: 20px;
  --prefix-component-l-height: 20px;
  --prefix-component-l-background-color: blue;
  --prefix-component-l-shadow-size: 1px;
  --prefix-component-s-halo-size: 1px;
}

.component {
  background-color: var(--prefix-component-background-color);

  width: var(--prefix-component-width);
  height: var(--prefix-component-height);
}

.component--small {
  --prefix-component-width: var(--prefix-component-s-width);
  --prefix-component-height: var(--prefix-component-s-height);
}

.component--large {
  --prefix-component-width: var(--prefix-component-l-width);
  --prefix-component-height: var(--prefix-component-l-height);
}

```
