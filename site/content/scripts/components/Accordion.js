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

class AccordionItem extends LitElement {
  // This allows us to use web component syntax without the shadow dom
  // we want this to act like a regular HTML element with external styles
  createRenderRoot() {
    return this;
  }

  get isOpen() {
    return this.classList.contains("is-open");
  }

  set isOpen(state) {
    // cast to boolean if passed a string
    state = Boolean(state);
    if (state === this.isOpen) return;
    this.classList.toggle("is-open", state);

    if (!this.isDemo) return;

    // Dispatch a custom event so that the preview can update the markup
    this.dispatchEvent(
      new CustomEvent("markupChanged", { bubbles: true }),
    );
  }

  get isDisabled() {
    return this.classList.contains("is-disabled");
  }

  set isDisabled(state) {
    // cast to boolean if passed a string
    state = Boolean(state);
    if (state === this.isDisabled) return;
    this.classList.toggle("is-disabled", state);
  }

  constructor() {
    super();

    this.classList.add("spectrum-Accordion-item");

    this.clickHandler = this.clickHandler.bind(this);
    this.keydownHandler = this.keydownHandler.bind(this);

    this.addEventListener("click", this.clickHandler);
    this.addEventListener("keydown", this.keydownHandler);
  }

  clickHandler(event) {
    if (this.isDisabled) return;
    event.preventDefault();
    this.isOpen = !this.isOpen;
  }

  keydownHandler(event) {
    if (this.isDisabled) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      this.isOpen = !this.isOpen;
    }
  }
}

export default class Accordion extends LitElement {
  // This allows us to use web component syntax without the shadow dom
  // we want this to act like a regular HTML element with external styles
  createRenderRoot() {
    return this;
  }

  get items() {
    return [...this.querySelectorAll(".spectrum-Accordion-item")];
  }

  constructor() {
    super();

    this.classList.add("spectrum-Accordion");
  }

  get isDemo() {
    return this.closest(".site-Example-preview") !== null;
  }

  get markupChangeEvent() {
    return new CustomEvent("markupChanged", { bubbles: true });
  }
}



if (!customElements.get('spectrum-accordion')) {
  customElements.define('spectrum-accordion', AccordionItem);
}

if (!customElements.get('spectrum-accordion-item')) {
  customElements.define('spectrum-accordion-item', Accordion);
}
