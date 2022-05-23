# postcss-containerizer
> Turn container queries into var space hacks

## Installation

```sh
npm install postcss-containerizer
postcss -u postcss-containerizer -o dist/index.css src/index.css
```

## Usage

This plugin turns this:

```css
@container(--system: standard) {
  .component {
    --background-color: blue;
  }
}

@container(--system: express) {
  .component {
    --background-color: purple;
  }
}
```

Into this:

```
.component {
  --system-spectrum-component-background-color: var(--system-spectrum) blue;
  --system-express-component-background-color: var(--system-express) purple;

  --background-color: var(
    --system-express-component-background-color,
    var(--system-spectrum-component-background-color)
  );
}
```

Or should it turn:

```css
@container(--system: standard) {
  .component {
    --background-color: blue;
  }
}

@container(--system: express) {
  .component {
    --background-color: purple;
  }
}
```

Into this:

```
.component {
  --system-express-background-color: var(--system-express) purple;

  --background-color: var(
    --system-express-background-color,
    blue
  );
}
```

