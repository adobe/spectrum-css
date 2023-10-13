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
export default class Popover {
    /* -- State utilities -- */
    get isOpen() {
        return this.el.classList.contains("is-open");
    }

    set isOpen(state) {
        this.el.classList.toggle("is-open", state);
    }
    /** -- end -- */

    get hasTip() {
        return this.el.classList.contains("spectrum-Popover--withTip");
    }

    set hasTip(state) {
        this.el.classList.toggle("spectrum-Popover--withTip", state);
    }

    /**
     * @description Sets the position of the popover relative to the trigger
     * @memberof Popover
     * @param {(top|bottom|left|right|start|end)[]} position
     */
    set position(position = []) {
        // @todo could do validation here
        this.el.classList.toggle(`spectrum-Popover--${position.join("-")}`, true);
    }

    get menu() {
        return this.el.querySelector(".spectrum-Menu");
    }

    constructor(el) {
        this.el = el;

        if (this.el.previousElementSibling) {
            this.alignment(this.el.previousElementSibling, 8);
        }
    }

    alignment(relativeTo, offset = 0) {
        if (!relativeTo) return;
        const rect = relativeTo.getBoundingClientRect();
        this.el.style.top = `${rect.bottom + offset}px`;

        if (this.el.isRTL) {
            this.el.style.right = `${window.innerWidth - rect.right}px`;
            this.el.style.left = "auto";
        } else {
            this.el.style.right = "auto";
            this.el.style.left = `${rect.left}px`;
        }
    }

    /**
     * @param {string|HTMLElement} content
     */
    set content(content) {
        if (typeof content === "string") {
            this.el.innerHTML = content;
        } else if (content instanceof HTMLElement) {
            this.el.innerHTML = "";
            this.el.appendChild(content);
        }
    }
}

window.addEventListener("DOMContentLoaded", () => {
    [...document.querySelectorAll(".spectrum-Popover")].forEach((el) => {
        new Popover(el);
    });
});
