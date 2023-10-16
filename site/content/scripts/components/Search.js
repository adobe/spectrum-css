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

import lunr from "lunr";

export default class Search extends LitElement {
    // This allows us to use web component syntax without the shadow dom
    // we want this to act like a regular HTML element with external styles
    createRenderRoot() {
        return this;
    }

    hasResults = false;
    Categories = ["components"];
    CategoryNames = {
        components: "Components",
    };

    _index;
    get index() {
        return this._index;
    }

    set index(value) {
        this._index = lunr.Index.load(value ?? {});
    }

    constructor() {
        super();

        this.classList.add("site-Search");
        this.setAttribute("role", "search");

        if (this.form) {
            this.form.classList.add("spectrum-Search", "site-Search-form");
            this.form.setAttribute("role", "combobox");
            this.form.setAttribute("aria-haspopup", "listbox");
        }

        if (this.popover) {
            this.popover.classList.add("site-Search-results", "site-Search-popover");
        }

        if (this.textfield) {
            this.textfield.classList.add("spectrum-Search-textfield");
            if (this.textfield.input) {
                this.textfield.input.classList.add("spectrum-Search-input", "site-Search-input");
            }
        }

        if (this.searchResults) {
            this.searchResults.classList.add("site-Search-searchResults");
            if (!this.searchResults.label) {
                this.searchResults.label = "Search";
            }
        }

        this.resetForm = this.resetForm.bind(this);
        this.focusoutHandler = this.focusoutHandler.bind(this);
        this.keydownHandler = this.keydownHandler.bind(this);

        this.addEventListener("reset", this.resetForm);
        this.addEventListener("submit", (event) => event.preventDefault());
        this.addEventListener("focusout", this.focusoutHandler);

        if (this.textfield) {
            this.textfield.addEventListener("keydown", this.handleKeyDown.bind(this));
            this.textfield.addEventListener("keypress", this.handleKeyPress.bind(this));
            this.textfield.addEventListener("focus", () => {
                // Immediately hide results, otherwise they show up in the wrong position since we're in the middle of animation
                this.hideResults();
            });
        }

        if (this.popover) {
            this.popover.addEventListener("click", this.hideResults.bind(this));
            this.popover.addEventListener("focusin", this.handleListInteraction.bind(this));
            this.popover.addEventListener("mouseenter", this.handleListInteraction.bind(this));
            this.popover.addEventListener("keydown", this.handleListInteraction.bind(this));
        }

        document.addEventListener("keydown", this.keydownHandler);
    }

    set isOpen(state) {
        // cast to boolean if passed a string
        state = Boolean(state);
        if (state === this.isOpen) return;
        this.popover.classList.toggle("is-open", state);
        this.form.setAttribute("aria-expanded", state ? "true" : "false");
    }

    get isOpen() {
        return this.popover.classList.contains("is-open");
    }

    connectedCallback() {
        super.connectedCallback();
        this.isOpen = false;
    }

    get popover() {
        return this.querySelector(".spectrum-Popover");
    }

    get form() {
        return this.querySelector("form");
    }

    get textfield() {
        return this.querySelector(".spectrum-Textfield");
    }

    get searchResults() {
        return this.querySelector("#search-results-listbox");
    }

    get clearButton() {
        return this.querySelector(".site-Search-clearButton");
    }

    /* These templates are iterated over to render the search results */
    get errorTemplate() {
        return this.querySelector("template#search-message-title");
    }

    get resultTemplate() {
        return this.querySelector("template#search-result-title");
    }

    get resultLinkTemplate() {
        return this.querySelector("template#search-result-item-link");
    }

    get isRTL() {
        return window.getComputedStyle(document.documentElement, null).getPropertyValue("direction") === "rtl";
    }

    keydownHandler(e) {
        if (e.key !== "/" || document.activeElement !== document.body) return;
        if (!this.textfield) return;

        this.textfield.classList.add("focus-ring");
        this.textfield.setSelectionRange(0, this.textfield.value.length);

        setTimeout(this.textfield.focus.bind(this.textfield), 100);

        e.preventDefault();
    }

    focusoutHandler({ relatedTarget }) {
        if (!relatedTarget) return;

        if (!this.contains(relatedTarget) && !this.popover?.contains(relatedTarget)) {
            // Don't do this right away due to a Safari issue
            setTimeout(this.hideResults.bind(this), 100);
        }
    }

    resetForm() {
        this.hasResults = false;
        this.hideResults();
        this.toggleClearButton();
    }

    toggleClearButton() {
        if (!this.clearButton || !this.textfield) return;

        this.clearButton.hidden = this.textfield.isEmpty;
    }

    hideResults() {
        if (this.form) this.form.setAttribute("aria-expanded", "false");
        if (this.popover) this.popover.isOpen = false;
    }

    // Activate and align the popover with the results
    showResults() {
        if (!this.popover || !this.textfield) return;

        this.popover.alignment(this.textfield.input.el, 10);
        this.popover.isOpen = true;

        if (this.form) this.form.setAttribute("aria-expanded", "true");

        const firstItem = this.popover.menu?.items?.[0];
        if (!firstItem) return;

        // Provide some visual indication that we will navigate here on enter
        firstItem.isHighlighted = true;
        firstItem.focus();
    }

    handleListInteraction() {
        const firstItem = this.popover.menu?.items?.[0];
        if (!firstItem) return;

        firstItem.isHighlighted = false;
    }

    handleKeyDown(e) {
        if (e.key === "ArrowDown") {
            const firstItem = this.popover.menu?.items?.[0];
            if (firstItem) this.showResults();
        } else if (e.key === "Escape") {
            this.resetForm();
        }
    }

    handleKeyPress(e) {
        if (e.key === "Enter") {
            if (!this.popover || !this.popover.menu) return;

            const hasItems = this.popover.menu.items?.length > 0;
            if (!hasItems) return;

            this.popover.menu.firstItem();
            if (this.textfield) this.textfield.blur();

            this.hideResults();
        } else if (e.key !== "Escape") {
            this.toggleClearButton();

            if (this.textfield && this.textfield.input.value.length === 0) {
                this.resetForm();
            } else this.search(this.textfield.value);
        }
    }

    renderTemplate(content) {
        if (!content || !content.type) return;

        if (content.type === "error") {
            if (!this.errorTemplate) return;
            const message = this.errorTemplate?.content?.cloneNode(true);

            if (message.querySelector("#search-message-title") && content.title) {
                message.querySelector("#search-message-title").textContent = content.title;
            }

            if (message.querySelector("#search-message-content") && content.error) {
                message.querySelector("#search-message-content").textContent = content.error;
            }

            return message;
        } else if (content.type === "result") {
            if (!this.resultTemplate) return;

            const item = this.resultTemplate.content?.cloneNode(true);
            if (!item) return;

            if (item && item.querySelector("li") && content.category) {
                item.querySelector("li").setAttribute("aria-labelledby", `search-result-${content.category}`);
            }

            let resultItem;
            if ((resultItem = item.querySelector("#search-result-category") && content.category)) {
                if (this.CategoryNames[content.category]) resultItem.textContent = this.CategoryNames[content.category];

                // Update the ID to be unique for this result category
                resultItem.setAttribute("id", `search-result-${content.category}`);
            }

            results[category].map((result) => {
                const link = this.renderTemplate({
                    type: "link",
                    href: result.href,
                    name: result.name,
                });
                if (link && item.querySelector("#search-result-category-item")) {
                    item.querySelector("#search-result-category-item").appendChild(link);
                }
            });
            return item;
        } else if (content.type === "link") {
            if (!this.resultLinkTemplate) return;

            const link = this.resultLinkTemplate.content?.cloneNode(true);
            if (!link) return;

            if (link && link.querySelector("a")) {
                if (content.href) link.querySelector("a").setAttribute("href", content.href);
                if (content.name) link.querySelector("a").textContent = content.name;
            }

            return link;
        }
    }

    search(val = undefined) {
        // We can't search without an index or a store of data
        if (!this.index || !this.store) return;

        // We can fetch the value from the input if it's not provided
        if (!val) val = this.textfield.value;
        // One character or fewer just isn't enough to search yet
        if (!val || val.length < 1) return;

        /* Create a fuzzy search for more flexible results */
        // @todo probably need to add some logic to capture common mispellings or close matches
        const searchParam = val
            .trim()
            .split(" ")
            .map((term) => `${term}* ${term}`)
            .join(" ");

        let r;

        try {
            r = this.index.search(searchParam);
        } catch (err) {
            const message = this.renderTemplate({
                type: "error",
                title: "Search error",
                error: err.toString(),
            });
            if (message && this.popover) {
                this.popover.content = message;
            }

            // Assign newly created message with a global variable
            this.searchError = this.popover.querySelector(".site-Search-searchError");

            this.showResults();
            return;
        }

        const results = {
            length: r.length,
            components: r.map(async (result) => this.store[result.ref], this),
        };

        this.hasResults = !!r.length;

        /* HUZZAH! Results! */
        if (this.hasResults) {
            if (this.searchError) {
                this.searchError.hidden = true;
            }

            if (this.searchResults) {
                this.searchResults.innerHTML = "";
                this.searchResults.hidden = false;

                this.Categories.map((category) => {
                    const item = this.renderTemplate({
                        type: "result",
                        category,
                        results,
                    });
                    if (!item) return;

                    this.searchResults.appendChild(item);
                });
            }
        } else {
            /* Whomp whomp, no results */
            if (this.searchError) this.searchError.hidden = false;
            if (this.searchResults) this.searchResults.hidden = true;
        }

        this.showResults();
    }
}
