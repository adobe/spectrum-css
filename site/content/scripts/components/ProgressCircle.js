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

export default class ProgressCircle {
	constructor(el, options = {}) {
		if (!el) return;

		this.el = el;
		this.submask1 = this.el.querySelector(
			".spectrum-ProgressCircle-fillSubMask1"
		);
		this.submask2 = this.el.querySelector(
			".spectrum-ProgressCircle-fillSubMask2"
		);

		this.isIndeterminate = options.isIndeterminate || this.isIndeterminate;

		// Wait until the DOM content is loaded and then start the animation
		window.addEventListener("DOMContentLoaded", this.animate.bind(this));
	}

	get isIndeterminate() {
		return this.el.classList.contains("spectrum-ProgressCircle--indeterminate");
	}

	set isIndeterminate(state) {
		this.el.classList.toggle("spectrum-ProgressCircle--indeterminate", state);
	}

	update(value) {
		if (value > 0 && value <= 50) {
			const angle = -180 + (value / 50) * 180;
			if (this.submask1)
				this.submask1.style.transform = "rotate(" + angle + "deg)";
			if (this.submask2) this.submask2.style.transform = "rotate(-180deg)";
			return;
		}

		if (value > 50) {
			const angle = -180 + ((value - 50) / 50) * 180;
			if (this.submask1) this.submask1.style.transform = "rotate(0deg)";
			if (this.submask2)
				this.submask2.style.transform = "rotate(" + angle + "deg)";
		}
	}

	animate() {
		let value = 0;
		setInterval(() => {
			if (this.isIndeterminate) return;

			this.update(++value);
			if (value >= 100) value = 0;
		}, 500);
	}
}
