# Spectrum CSS Site

The site is built using [Pug templates](https://pugjs.org/api/getting-started.html).

## Structure

```
site/
├── getting-started.pug - instructions on getting started
├── includes
│   ├── dependencies.pug - dependencies common to all pages
│   ├── nav.pug - the navigation (within the sidebar)
│   └── sidebar.pug - the left sidebar
├── index.pug - main homepage
└── resources
    ├── css
    │   ├── docs.css - CSS related specifically to markup examples and component documentation
    │   └── site.css - CSS common to the entire site
    ├── img
    └── js
        ├── SpectrumSwitcher.js - A class that supports switching colorstops
        ├── enhancement.js - Enhancements that make examples interactive
        ├── polyfills.js - Polyfills for old browsers
        ├── site.js - The actual site navigation code
        └── typekit.js - Typekit that knows how to choose large/small kits based on the langage attribute
```

## Architecture

The site build process generates separate `.html` files for each of the `*.pug` files in the `site/` folder, as well as `.html` pages for each of the component examples within each package (`docs.yml` and `docs/*.yml`). The navigation on the left is generated from the list of examples + the hardcoded pages in the menu, and is injected at build time. All of the generated `.html` files are standalone documents with the same navigation and common dependencies, with component example pages adding only the additional dependencies that are required to render its examples.

When clicking an item in the nav or using the browser history, instead of simply navigating to the new page, the page is requested with `XMLHTTPRequest`, parsed, and the content is extracted and injected. Additionally, the dependencies included on the page (any `link` tag with the `data-dependecy="$NAME"`) are diffed with the existing dependencies on the page, and the new dependencies are asynchronously loaded before the page content so as to prevent FOUC (flash of unstyled content). Finally, the corresponding item in the side nav is selected.

Because the dependencies included in the component example pages are sorted in topological order with [`dependency-solver`](https://www.npmjs.com/package/dependency-solver), it is not possible for dependencies to be loaded out of order, even if navigating between pages in a different order -- only the new dependencies will be added to the end of the list of dependencies, so precidence will be preserved.

## Viewing the site

1. Run `gulp dev` at the top level of the project and the site will build and open up in your browser.

## Editing content

1. Run `gulp dev` at the top level of the project.
2. Edit the `*.pug` files in this folder as well as `includes/*.pug` and the site will live reload with your changes.

## Adding a new page

1. Run `gulp dev` at the top level of the project.
2. Create the Pug template file for the page in this folder by copying an existing page:

```shell
cp getting-started.pug new-page.pug
```

3. Manually add the new page to the navigation in `includes/nav.pug`, including the `.js-fastLoad` class on the link and the `is-selected` switch on the list item:

```pug
      li.spectrum-SideNav-item(class=pageURL === 'new-page.html' ? 'is-selected' : '')
        a.spectrum-SideNav-itemLink.js-fastLoad(href='new-page.html') New Page
```

4. Your new page will appear in the navigation. You can continue to edit it and it will live reload.
5. If you page uses other Spectrum CSS components, link to them as necessary beneath the `dependencies.pug` include:

```pug
    include includes/dependencies.pug
    link(rel='stylesheet', type='text/css', href='../components/table/index-vars.css')
```

## Adding a one-off example page

Follow the instructions for adding a new page, but do not add it to the navigation. You can link to it from other document using markdown:

```markdown
See the [internationalized typography example page](typography-i18n.html) for Japanese, Han, and Arabic examples.
```

## Adding and editing resources

You can add and edit site resources to the `resources/` folder. These are copied directly into the root of the site and can be included as necessary. Editing existing resources while `gulp dev` is running will inject the new resources.
