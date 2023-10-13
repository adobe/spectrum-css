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

export default class TextField extends LitElement {
  // This allows us to use web component syntax without the shadow dom
  // we want this to act like a regular HTML element with external styles
  createRenderRoot() {
    return this;
  }

  get input() {
    return this.querySelector("input");
  }

  get icon() {
    return this.querySelector(".spectrum-TextField-icon");
  }

  get form() {
    return this.closest("form");
  }

  constructor() {
    super();

    this.classList.add("spectrum-TextField");

    if (this.input) this.input.classList.add("spectrum-TextField-input");

    this.addEventListener("focusin", () => {
      this.focus = true;
    });

    this.addEventListener("focusout", () => {
      this.focus = false;
    });

    this.handleKeyDown = this.handleKeyDown.bind(this);

    this.input.addEventListener("keydown", this.handleKeyDown);
    // this.input.addEventListener('keypress', this.handleKeyPress.bind(this));
    // this.input.addEventListener('focus', (event) => {
    //   // Immediately hide results, otherwise they show up in the wrong position since we're in the middle of animation
    //   this.hideResults();

    //   if (typeof options.onFocusCallback === 'function') {
    //     options.onFocusCallback(event);
    //   }
    // });
  }

  set focus(state) {
    if (this.classList.contains("focus-ring") || !state) {
      this.classList?.toggle("is-keyboardFocused", state);
    } else if (!this.classList.contains("focus-ring") || !state) {
      this.classList?.toggle("is-focused", state);
    }
  }

  get focus() {
    return (
      this.classList.contains("focus-ring") ||
      this.classList.contains("is-keyboardFocused") ||
      this.classList.contains("is-focused")
    );
  }

  get isEmpty() {
    return (
      !this.input.value ||
      this.input.value === "" ||
      this.input.value.length === 0
    );
  }

  reset() {
    this.input.value = "";
  }

  handleKeyDown(event) {
    switch (event.key) {
      case "ArrowDown":
      case "Enter":
        if (!this.form) break;
        if (this.form.requestSubmit) this.form.requestSubmit();
        else this.form.submit();
        break;
      case "Escape":
        if (!this.form) break;
        this.form.reset();
        break;
      default:
        if (event.isComposing) break;
    }
  }
}

if (!customElements.get('spectrum-textfield')) {
  customElements.define('spectrum-textfield', TextField);
}
