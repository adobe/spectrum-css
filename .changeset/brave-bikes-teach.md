---
"@spectrum-css/actionmenu": major
"@spectrum-css/actionbutton": minor
"@spectrum-css/menu": patch
"@spectrum-css/actiongroup": patch
---

### Action menu component (now with custom styles!)

Introduces `@spectrum-css/actionmenu`, a composition of `ActionButton`, `Popover`, and `Menu` to present action lists from a trigger. Now with custom styles!

- Adds wrapper classes: `spectrum-ActionMenu`, `spectrum-ActionMenu-trigger`, `spectrum-ActionMenu-popover`, and `spectrum-ActionMenu-menu`.
- Supports long press triggers and four placements (start/end, top/bottom) via the underlying popover API.
- Design reference: [Figma S2 token specs](https://www.figma.com/design/eoZHKJH9a3LJkHYCGt60Vb/S2-Token-specs?node-id=19758-3424).

#### Migration notes

- If you previously composed an action menu manually (action button + popover + menu), you can adopt the new wrapper classes without changing the underlying markup semantics. Ensure the trigger has `aria-haspopup="menu"` and manages `aria-expanded` according to your application logic.
- For spacing customizations previously done with ad‑hoc margins, switch to the new `--spectrum-actionmenu-button-to-menu-gap` custom property.

Example markup:

```html
<div class="spectrum-ActionMenu">
	<button
		class="spectrum-ActionMenu-trigger spectrum-ActionButton"
		aria-haspopup="menu"
		aria-expanded="false"
	>
		<!-- icon/label -->
	</button>
	<div class="spectrum-ActionMenu-popover spectrum-Popover">
		<ul class="spectrum-ActionMenu-menu spectrum-Menu">
			<!-- menu items -->
		</ul>
	</div>
	<!-- popover positioning/visibility is owned by your implementation -->
	<!-- use long-press behavior when appropriate to your UX -->
	<!-- use Popover placement options: bottom-start, bottom-end, start-top, end-top -->
</div>
```

### Menu refinements

Updates `@spectrum-css/menu` styles to align with latest Spectrum 2 design specifications and improve accessibility.

- Focus indicator tokens wired through: width, color, gap/offset, and outline style.
- CJK line-height tokens applied for labels, descriptions, and section headers.
- External link and drill‑in icon sizing variables exposed; thumbnail sizing and alignment refined.
- Forced-colors improvements and readability adjustments.
- Non-breaking; no class or DOM changes required.

### Action button refinements

- Selection styling now applies when components use ARIA pressed/expanded semantics, not just `.is-selected`.
- Implemented with `:where()` to keep selector specificity low and prevent downstream specificity battles.
- Non-breaking; no class changes required.

### Action group refinements

Aligns selection behavior of grouped items with action button updates.

- Adds `:where([aria-pressed="true"], [aria-expanded="true"])` alongside `.is-selected` on items to cover more accessibility use-cases while keeping specificity low.
- Non-breaking; no class changes required.
