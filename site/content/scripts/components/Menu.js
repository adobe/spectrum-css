/*!
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

import { LitElement, property, customElement } from "lit";

@customElement("spectrum-menu")
export default class Menu extends LitElement {
  // This allows us to use web component syntax without the shadow dom
  // we want this to act like a regular HTML element with external styles
  createRenderRoot() {
    return this;
  }

  @property({ type: String })
  selectedDefault;

  @property({ type: String, reflect: true })
  value;

  set value(input) {
    if (this.value === input) return;

    const v = input ?? this.selectedDefault;

    this.setAttribute("value", v);

    // Loop through all menu items and update selected state
    this.items.forEach((item) => {
      item.isSelected = item.value === v;
    });
  }

  // Not optimal but 🤷‍♀️ it's a lightweight demo site
  get items() {
    return (
      [...this.querySelectorAll("spectrum-menu-item", ".spectrum-Menu-item")] ??
      []
    );
  }

  // Pointer to the popover element
  get popover() {
    return (
      this.closest("spectrum-popover") ?? this.closest(".spectrum-Popover")
    );
  }

  // Pointer to the picker element
  get picker() {
    let sibling;
    if (
      (sibling = this.popover?.previousElementSibling) &&
      sibling &&
      (sibling.tagName === "SPECTRUM-PICKER" ??
        sibling.classList?.contains("spectrum-Picker"))
    ) {
      return sibling;
    }

    return;
  }

  constructor() {
    super();

    this.classList.add("spectrum-Menu");

    this.addEventListener("keydown", this.keydownHandler);
    this.addEventListener("change", this.changeHandler);
  }

  get selectedItem() {
    return this.items.find((item) => item.isSelected);
  }

  set selectedItem(state) {
    if (!this.selectedItem) return;
    this.selectedItem.isSelected = state;
  }

  // Select an item via the index of the item in the items array
  selectItem(idx) {
    // If the index is out of bounds, do nothing
    if (idx < 0 || idx > this.items.length - 1 || this.items[idx].isDisabled)
      return;

    this.activeItem = this.items[idx];

    return this.items[idx];
  }

  get activeItem() {
    return this.items.find((item) => item.value === this.value);
  }

  set activeItem(item) {
    if (!item || !this.items.includes(item)) return;

    this.activeItem.isSelected = false;
    item.isSelected = true;
    this.value = item.value;

    this.activeItem.click();
  }

  previousItem() {
    const items = this.items.filter((item) => !item.isDisabled);
    const idx =
      this.activeItem.idx - 1 >= 0 ? this.activeItem.idx - 1 : items.length - 1;
    return this.selectItem(idx);
  }

  nextItem() {
    const items = this.items.filter((item) => !item.isDisabled);
    const idx =
      this.activeItem.idx + 1 < items.length ? this.activeItem.idx + 1 : 0;
    return this.selectItem(idx);
  }

  firstItem() {
    return this.selectItem(0);
  }

  lastItem() {
    return this.selectItem(items.length - 1);
  }

  changeHandler = (event) => {
    const value = event.target.value ?? this.default;
    // if (!options.includes(value)) return;

    let updated = false;
    if (typeof this.changeCallback === "function") {
      this.changeCallback().bind(this);
      updated = true;
    }

    if (updated) this.value = value;
  };

  keydownHandler = (event) => {
    switch (event.key) {
      case "ArrowDown":
        this.nextItem()?.focus();
        break;
      case "ArrowUp":
        this.previousItem()?.focus();
        break;
      case "Home":
        this.firstItem()?.focus();
        break;
      case "End":
        this.lastItem()?.focus();
        break;
      case "Enter" && this.picker:
        this.picker.isOpen = false;
        this.picker.value = this.activeItem.value;
        this.picker.focus();
        break;
      case "Escape" && this.picker:
        this.picker.isOpen = false;
        this.picker.focus();
        break;
    }

    event.preventDefault();
  };
}

@customElement("spectrum-menu-item")
export class MenuItem extends LitElement {
  createRenderRoot() {
    return this;
  }

  _ariaProperty = "aria-selected";

  @property({ type: String })
  value;

  // Other valid values: menuitemcheckbox, menuitemradio
  @property({ type: String, reflect: true })
  role = "option";

  set role(value) {
    // Do nothing if the role has not changed
    if (value === this.role) return;

    // Start by removing the old role if it exists
    if (this.hasAttribute(this._ariaProperty)) {
      this.removeAttribute(this._ariaProperty);
    }

    this._ariaProperty = role !== "option" ? "aria-checked" : "aria-selected";

    // trigger an update of the selected property
    this.isSelected = this.isSelected;
  }

  @state()
  isDisabled = false;

  set isDisabled(state) {
    this.classList.toggle("is-disabled", state);
  }

  @state()
  isSelected = false;

  set isSelected(state) {
    // Only toggle the class if the state has changed
    if (this.isSelected !== state) {
      this.classList.toggle("is-selected", state);
    }

    // Even if the state has not changed, update the attributes
    if (state) this.setAttribute(this._ariaProperty, "true");
    else this.removeAttribute(this._ariaProperty);
  }

  @state()
  isHighlighted = false;

  set isHighlighted(state) {
    this.classList.toggle("is-highlighted", state);
  }

  // Pointer to the label element
  get label() {
    // @todo: this needs to be updated to aria-label on the host
    return this.closest(".spectrum-Menu-itemLabel");
  }

  // Pointer to the icon element
  get icon() {
    return this.closest(".spectrum-Menu-itemIcon");
  }

  connectedCallback() {
    super.connectedCallback();

    this.classList.add("spectrum-Menu-item");
    this.setAttribute("tabindex", "-1");

    this.addEventListener("click", this.clickHandler);
  }

  disconnectedCallback() {
    this.removeEventListener("click", this.clickHandler);

    super.disconnectedCallback();
  }

  clickHandler = async (event) => {
    if (this.isDisabled) return;
    this.isSelected = !this.isSelected;

    await this.updateComplete;

    // Sends a custom event to the menu
    const event = new Event("change", { bubbles: true });
    this.dispatchEvent(event);
  };
}
