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
export default class Picker {
    constructor(el) {
        if (!el) return;

        this.el = el;

        this.keydownHandler = this.keydownHandler.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.clickHandler = this.clickHandler.bind(this);

        if (this.keyBindings && typeof this.keyBindings === "object") {
            document.addEventListener("keydown", this.keydownHandler);
        } else {
            this.el.addEventListener("keydown", this.keydownHandler);
        }

        this.el.addEventListener("change", this.changeHandler);
        this.el.addEventListener("click", this.clickHandler);

        document.addEventListener("closePickers", (event) => {
            if (event.detail.picker === this) return;
            this.isOpen = false;
        });
    }

    get popover() {
        return this.el.nextElementSibling(".spectrum-Picker-popover");
    }

    get value() {
        return this.el.getAttribute("value");
    }

    set value(input) {
        if (!input || !this.menu) return;

        // Pass changes down to the menu
        this.menu.value = input;

        if (this.label && this.menu.activeItem?.labelText) {
            this.updateLabel(this.menu.activeItem.labelText);
        }

        this.el.dispatchEvent(
            new CustomEvent("change", {
                bubbles: true,
                detail: {
                    label: this.menu?.activeItem?.labelText,
                    value: input,
                },
            }),
        );
    }

    _keyBindings = {};
    get keyBindings() {
        return this._keyBindings;
    }

    set keyBindings(input) {
        if (typeof input === "undefined") {
            this._keyBindings = {};

            return;
        }

        if (typeof input !== "object") {
            console.warn("The key bindings must be provided as an object.");
            return;
        }

        this._keyBindings = input;
    }

    /* -- State utilities -- */
    get isSelected() {
        return this.el.classList.contains("is-selected");
    }

    set isSelected(state) {
        this.el.classList.toggle("is-selected", state);
    }

    get isOpen() {
        return this.el.classList.contains("is-open");
    }

    set isOpen(state) {
        this.isSelected = state;
        this.el.classList.toggle("is-open", state);

        if (state) {
            this.el.setAttribute("aria-expanded", "true");

            // Close other pickers
            this.el.dispatchEvent(
                new CustomEvent("closePickers", {
                    bubbles: true,
                    detail: {
                        picker: this,
                        id: this.el.id,
                    },
                }),
            );
        } else this.el.removeAttribute("aria-expanded");

        // If a popover is present, toggle its state
        if (!this.popover) return;
        this.popover.isOpen = state;
    }
    /** -- end -- */

    // @todo should we run this as part of a mutation observer too?
    getOptions() {
        const options = [];
        this.el.querySelectorAll(".spectrum-Menu-item").forEach((item) => {
            // Push the value of the item if it exists to the options array
            if (item.getAttribute("value")) options.push(item.getAttribute("value"));
        });

        return options;
    }

    /** -- Label utilities -- */
    get label() {
        return this.el.querySelector(".spectrum-Picker-label");
    }

    get labelText() {
        return this.label?.textContent;
    }

    set labelText(input) {
        if (this.labelText === input) return;

        if (typeof input === "undefined") {
            this.el.removeAttribute("aria-label");
            this.hideLabel();
            return;
        }

        this.el.setAttribute("aria-label", input);
        this.showLabel();
        this.updateLabel(input);
    }

    updateLabel(labelText) {
        if (!this.label) return;
        this.label.innerText = labelText;
    }

    hideLabel() {
        if (!this.label) return;
        this.label.setAttribute("hidden", "");
    }

    showLabel() {
        if (!this.label) return;
        this.label.removeAttribute("hidden", "");
    }
    /** -- end -- */

    /** -- Render utilities -- */
    renderIcon() {
        const icon = this.el.querySelector(".spectrum-Icon") ?? document.createElement("svg");

        ["spectrum-UIIcon-ChevronDown100", "spectrum-Picker-menuIcon"].forEach((className) => {
            if (!icon.classList.includes(className)) {
                icon.classList.add(className);
            }
        });

        icon.setAttribute("focusable", "false");
        icon.setAttribute("aria-hidden", "true");

        if (!icon.querySelector("use")) {
            icon.appendChild(
                document.createElement("use")?.setAttribute("xlink:href", "#spectrum-css-icon-ChevronDown100"),
            );
        }
        // @todo inject the icon into the picker
    }
    /** -- end -- */

    /** -- Event handlers -- */
    changeHandler(event) {
        const value = event.target.value ?? this.default;
        if (!this.allowed.includes(value)) return;

        let updated = false;
        if (typeof this.changeCallback === "function") {
            this.changeCallback().bind(this);
            updated = true;
        }

        if (updated) this.value = value;
    }

    keydownHandler(event) {
        event.preventDefault();

        // todo: enter or space to open?

        // If the menu is closed and the arrow down is pressed, open the menu
        if (event.key === "ArrowDown" && !this.isOpen) {
            if (!this.isOpen) this.isOpen = true;
        }

        if (!event.ctrlKey || !(this.keyBinding && this.keyBindings[event.key])) return;
        this.value = this.keyBindings[event.key];
    }

    clickHandler(event) {
        event.preventDefault();
        this.isOpen = !this.isOpen;
    }
    /** -- end -- */
}
