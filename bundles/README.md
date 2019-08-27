# Spectrum CSS Bundles

Bundles are packages that contain a collection of specific versions of Spectrum CSS components.

In order to not leave existing consumers stranded and unable to follow updates of the project as we move to individual versioning, the bundle `@adobe/spectrum-css` is released with only 2.x-compatible components based on our individually versioned components.

In order to simplify consumption of the project, the bundle package `@spectrum-css/spectrum-css` is released with the latest version of every component (based on our individually versioned components) on a schedule such that breaking changes to components will be batched together.

### Releasing bundles

Any change to a component included by a bundle or a component's dependencies results in a release of that bundle. Bundle releases cannot be done ala carte and must be done from the top-level, managed by lerna.

See [Releasing](/README.md#Releasing) for more information.
