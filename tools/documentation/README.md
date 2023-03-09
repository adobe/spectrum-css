# Spectrum CSS documentation

Documentation is built using [11ty](https://www.11ty.dev/docs/getting-started/).

## Structure

```
documentation/
├── _data
│   ├── component.js - this global data file parses individual components and creates the [data for each page](https://www.11ty.dev/docs/pages-from-data/)
├── _includes
│   ├── context-switcher.njk
│   ├── details-table.njk
│   ├── example.njk
│   ├── footer.njk
│   ├── header.njk
│   ├── logo.njk
│   ├── meta-info.njk
│   ├── section.njk
│   ├── sidenav.njk - the left sidebar navigation
├── _layouts
│   ├── layout.njk
│   ├── pages.njk
├── assets
│   ├── css
│   │   ├── docs.css - CSS related specifically to markup examples and component documentation
│   │   └── site.css - CSS common to the entire site
│   ├── img - folder containing any image assets for the site
│   ├── js
│       ├── docs.js -
│       ├── enhancement.js - Enhancements that make examples interactive
│       ├── polyfills.js - Polyfills for old browsers (@todo do we still need this?)
│       ├── Search.js -
│       ├── site.js - The actual site navigation code
│       ├── SpectrumSwitcher.js - A class that supports switching colorstops
│       └── typekit.js - Typekit that knows how to choose large/small kits based on the language attribute
├── content
│   ├── components.njk - template to build individual component pages from the global component dataset
│   ├── get-started.md - instructions for getting started with the Spectrum CSS project
│   ├── github.md
│   ├── index.njk - homepage
│   ├── lunr.11ty.js
│   ├── store.11ty.js
├── scripts
│   ├── fetchCustomProps.js
│   ├── getMetadata.js
│   ├── markdownSettings.js
│   ├── utilities.js
├── .eleventy.js - core [configuration file](https://www.11ty.dev/docs/config/) for the site builder
├── .eleventyignore - [files that should not be processed by 11ty](https://www.11ty.dev/docs/ignores/)
```

## Architecture

The site build process generates separate `.html` files for each of the files in the `content/` folder, as well as `.html` pages for each of the component examples within each package (`metadata.yml` and `metadata/*.yml`). The navigation on the left is generated automatically using [Eleventy navigation](https://www.11ty.dev/docs/plugins/navigation/). All of the generated `.html` files are standalone documents with the same navigation and common dependencies, with component example pages adding only the additional dependencies that are required to render its examples.

<!-- When clicking an item in the nav or using the browser history, instead of simply navigating to the new page, the page is requested with `XMLHTTPRequest`, parsed, and the content is extracted and injected. Additionally, the dependencies included on the page (any `link` tag with the `data-dependency="$NAME"`) are diffed with the existing dependencies on the page, and the new dependencies are asynchronously loaded before the page content so as to prevent FOUC (flash of unstyled content). Finally, the corresponding item in the side nav is selected. -->

Because the dependencies included in the component example pages are sorted in topological order with [`dependency-solver`](https://www.npmjs.com/package/dependency-solver), it is not possible for dependencies to be loaded out of order, even if navigating between pages in a different order -- only the new dependencies will be added to the end of the list of dependencies, so precedence will be preserved.

## Viewing the site

1. Run `yarn dev:docs` at the top level of the project and the site will build and open up in your browser.

## Editing content

1. Run `yarn dev:docs` at the top level of the project.
2. Edit the files in the content folder as well as supporting assets in the `_includes`, `_layouts`, or `_data` folders and the site will live reload with your changes.

## Adding a new page

1. Run `yarn dev:docs` at the top level of the project.
2. Create the file for the page in the `content` folder.
3. Your page's front matter should include a layout, title, permalink, and eleventyNavigation data:

  ```md
  ---
  layout: pages.njk
  title: Get started
  permalink: /docs/get-started/index.html
  eleventyNavigation:
      key: Get started
      order: 1
  ---
  ```

4. As you edit it, the site will live reload.

<!-- If your page uses other Spectrum CSS components, link to them as necessary beneath the `dependencies.pug` include:

```pug
    include includes/dependencies.pug
    link(rel='stylesheet', type='text/css', href='../components/table/index-vars.css')
``` -->

## Adding a one-off example page

Follow the instructions for adding a new page, but do not add it to the navigation. You can link to it from another document using markdown:

```markdown
See the [internationalized typography example page](typography-i18n.html) for Japanese, Han, and Arabic examples.
```

## Adding and editing resources

You can add and edit site resources to the `assets/` folder. These are copied directly into the root of the site and can be included as necessary. Editing existing resources while `yarn dev:docs` is running will inject the new resources.
