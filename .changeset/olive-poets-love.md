---
"@spectrum-css/tokens": major
---

### Breaking change

This update removes the compiled `components` directory from the token output. Instead, customers are asked to source the theming data from the component's `theme/(express,spectrum,spectrum-two).css` and `index-theme.css`. For example:

```
import "@spectrum-css/actionbutton/dist/index-base.css";
import "@spectrum-css/actionbutton/dist/index-theme.css";
import "@spectrum-css/actionbutton/dist/themes/express.css";
```

In addition, the `custom-*-vars.css` files previously shipped in the `spectrum` and `express` folders will no longer be shipped separately. This data already exists in the `*-vars.css` file with a matching name. For example, `spectrum/custom-large-vars.css` already exists within `spectrum/large-vars.css`, concatenated with the token-generated output.

### Minor

Whitespace has been cleaned up in the exported content for readability.
