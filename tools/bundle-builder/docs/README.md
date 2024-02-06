# Spectrum CSS Component Documentation

Component documentation is built using [Pug templates](https://pugjs.org/api/getting-started.html).

## Structure

The top level of the `.yml` files can have the following properties:

- `id` - If the name of the component doesn't match DNA, provide the DNA ID here.
- `name` - The name of the component (appears in the navigation and as the heading of the page). If not provided, it will be loaded from DNA based on the id.
- `description` - The topmost description of the component. This will be loaded from DNA if something matches the ID of the component.
- `status` - The status of the overall component's design review; one of `Unverified`, `Verified`, or `Deprecated`. This will be pulled from DNA if not provided.
- `examples` - An array of examples which should show each variant of the component (see properties below).
- `examplesHeading` - The heading to use for examples. Default is "Variants"
- `sections` - An optional array of sections to provide additional information (see properties below).

Each item in the `examples` array supports the following properties:

- `id` - Provide the DNA ID here to fetch the status of this example.
- `name` - The name of the example. If not provided, it will be loaded from DNA.
- `description` - The example's description, written in markdown. All links, headings, code blocks, and tables will automatically get Spectrum CSS classes applied to them.
- `markup` - The markup example
- `status` - The status of the example's design review; one of `Unverified`, `Verified`, or `Deprecated`.

Each item in the `sections` array supports the following properties:

- `name` - The name of the example (appears in the navigation and as the heading of the page). If not provided, it will be loaded from DNA.
- `description` - The content of the section, written in markdown. All links, headings, code blocks, and tables will automatically get Spectrum CSS classes applied to them.
- `markup` - An optional markup example for the section

## Architecture

Documentation is built by parsing `.yml` files within component packages that contain examples and their metadata and combining that with ID-matching of DNA data in `@spectrum-css/vars/spectrum-metadata.json`.

The dependencies for the component's documentation page are determined by parsing the `package.json` and building a dependency graph which is then topologically sorted using [`dependency-solver`](https://www.npmjs.com/package/dependency-solver). This means that all dependencies and dependencies of dependencies will be included in the documentation pages for the component automatically.

Within each component package, the `metadata.yml` file contains all of the examples that should appear on the main page for a given component. These examples will be printed one after another on the page for that component.

Additional examples that should appear in the navigation independent of the main component page can be added as `metadata/*.yml`. These are treated as a separate documentation page completely, but they share the same dependencies as the main page.

See the [site documentation](../site/README.md) for details on dependency lazy-loading when navigating.

## Viewing documentation

1. Run `gulp dev` at the top level of the project and the site will build and open up in your browser.

## Editing documentation

1. Run `gulp dev` at the top level of the project.
2. Edit the `metadata.yml` and `metadata/*.yml` files within each component package and the site will live reload with your changes.

## Adding a one-off example page

See the [site documentation](../site/README.md) for details on adding a one-off example page for a given component.

## Adding and editing resources

See the [site documentation](../site/README.md) for details on adding and editing resources.
