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

class AccordionItem {
    constructor(el) {
        if (!el) return;

        this.el = el;

        this.clickHandler = this.clickHandler.bind(this);
        this.keydownHandler = this.keydownHandler.bind(this);

        this.el.addEventListener("click", this.clickHandler);
        this.el.addEventListener("keydown", this.keydownHandler);
    }

    get isDemo() {
        return this.el.closest(".site-Example-preview") !== null;
    }

    get isOpen() {
        return this.el.classList.contains("is-open");
    }

    set isOpen(state) {
        // cast to boolean if passed a string
        state = Boolean(state);
        if (state === this.isOpen) return;
        this.el.classList.toggle("is-open", state);

        if (!this.isDemo) return;

        // Dispatch a custom event so that the preview can update the markup
        this.el.dispatchEvent(new CustomEvent("markupChanged", { bubbles: true }));
    }

    get isDisabled() {
        return this.el.classList.contains("is-disabled");
    }

    set isDisabled(state) {
        // cast to boolean if passed a string
        state = Boolean(state);
        if (state === this.isDisabled) return;
        this.el.classList.toggle("is-disabled", state);
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

export default class Accordion {
    constructor(el) {
        if (!el) return;

        this.el = el;

        this.items.forEach((item) => {
            new AccordionItem(item);
        });
    }

    get items() {
        return [...this.el.querySelectorAll(".spectrum-Accordion-item")];
    }

    get isDemo() {
        return this.el.closest(".site-Example-preview") !== null;
    }

    get markupChangeEvent() {
        return new CustomEvent("markupChanged", { bubbles: true });
    }
}
