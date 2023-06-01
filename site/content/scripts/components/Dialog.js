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

export default class Dialog {
	constructor(el, options = {}) {
		if (!el) return;

		this.el = el;
		this.underlay = document.getElementById("spectrum-underlay");
		this.innerModal = this.el.querySelector(".spectrum-Modal");
	}

	open(withOverlay) {
		if (!this.el) return;
		if (withOverlay !== false) {
			this.underlay?.classList?.add("is-open");
		}

		this.el.classList.add("is-open");
		// Support wrapped dialogs
		this.innerModal?.classList?.add("is-open");
	}

	close() {
		if (!this.el) return;

		this.underlay?.classList?.remove("is-open");
		this.el.classList.remove("is-open");
		this.innerModal?.classList?.remove("is-open");

		setTimeout(() => this.el.classList.remove("site-Example-dialog"), 130);
	}
}
