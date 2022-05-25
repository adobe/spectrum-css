# postcss-splitinator
> Splits custom properties organized by classes into named tokens

## Installation

```sh
npm install postcss-splitinator
postcss -u postcss-splitinator -o dist/index.css src/index.css
```

## Usage

This plugin turns this:

```css
@container(--system: standard) {
  .component {
    --background-color: blue;
  }
  .component.is-selected {
    --background-color: darkblue;
  }
  .component .icon {
    --color: gray;
  }
}

@container(--system: express) {
  .component {
    --background-color: purple;
  }
  .component.is-selected {
    --background-color: darkpurple;
  }
  .component .icon {
    --color: white;
  }
}

```

Into this:

```
.spectrum {
  --system-component-background-color: blue;
  --system-component-selected-background-color: darkblue;
}

.spectrum--express {
  --system-component-background-color: blue;
  --system-component-selected-background-color: darkblue;
}

.component {
  --background-color: var(--system-component-background-color);
}

.component.is-selected {
  --background-color: var(--system-component-selected-background-color);
}
```
