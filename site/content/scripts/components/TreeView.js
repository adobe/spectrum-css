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

import { LitElement } from "lit";

export default class TreeView extends LitElement {
  // This allows us to use web component syntax without the shadow dom
  // we want this to act like a regular HTML element with external styles
  createRenderRoot() {
    return this;
  }

  get items() {
    return [...this.querySelectorAll(".spectrum-TreeView-item")];
  }

  constructor() {
    super();

    this.classList.add("spectrum-TreeView");
  }
}

export class TreeViewItem extends LitElement {
  // This allows us to use web component syntax without the shadow dom
  // we want this to act like a regular HTML element with external styles
  createRenderRoot() {
    return this;
  }

  get indicator() {
    return this.querySelector(".spectrum-TreeView-itemIndicator");
  }

  get link() {
    return this.querySelector(".spectrum-TreeView-itemLink");
  }

  get thumbnail() {
    return this.querySelector(".spectrum-TreeView-itemThumbnail");
  }

  constructor() {
    super();

    this.classList.add("spectrum-TreeView-item");

    this.clickHandler = this.clickHandler.bind(this);

    this.addEventListener("click", this.clickHandler);
  }

  set isSelected(state) {
    this.classList.toggle("is-selected", state);
  }

  get isSelected() {
    return this.classList.contains("is-selected");
  }

  set isOpen(state) {
    this.classList.toggle("is-open", state);
  }

  get isOpen() {
    return this.classList.contains("is-open");
  }

  get isDisabled() {
    return this.classList.contains("is-disabled");
  }

  clickHandler(event) {
    if (!this || this.isDisabled) return;

    if (this.indicator) this.isOpen = !this.isOpen;
    else if (this.link && !(event.shiftKey || event.metaKey)) {
      // Remove other selected items
      if (!this.parent) return;
      this.parent.items.forEach((item) => {
        if (item.isSelected && item !== this) {
          item.isSelected = false;
        }

        item?.thumbnail?.classList?.toggle("is-focused", false);
      });

      this.thumbnail?.classList?.toggle("is-focused", this.isSelected);
    }

    event.preventDefault();
  }
}

if (!customElements.get('spectrum-treeview')) {
  customElements.define('spectrum-treeview', TreeView);
}

if (!customElements.get('spectrum-treeview-item')) {
  customElements.define('spectrum-treeview-item', TreeViewItem);
}
