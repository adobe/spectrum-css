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

export default class Dial {
	constructor(el, options = {}) {
		if (!el) return;

		this.el = el;
		this.min = -45;
		this.max = 225;

		this.handle = this.el.querySelector(".spectrum-Dial-handle");

		this.onMouseDownHandler = this.onMouseDownHandler.bind(this);
		this.onMouseUpHandler = this.onMouseUpHandler.bind(this);
		this.onMouseMoveHandler = this.onMouseMoveHandler.bind(this);

		this.el.addEventListener("mousedown", this.onMouseDownHandler);
	}

	get isDisabled() {
		return this.el.classList.contains("is-disabled");
	}

	onMouseDownHandler() {
		if (this.isDisabled) return;

		this.el.addEventListener("mouseup", this.onMouseUpHandler);
		this.el.addEventListener("mousemove", this.onMouseMoveHandler);

		this.el.getRootNode()?.classList?.add("u-isGrabbing");
	}

	onMouseUpHandler() {
		this.el.removeEventListener("mouseup", this.onMouseUpHandler);
		this.el.removeEventListener("mousemove", this.onMouseMoveHandler);

		this.el.getRootNode()?.classList?.remove("u-isGrabbing");
	}

	onMouseMoveHandler({ x }) {
		const dialOffsetWidth = this.el.offsetWidth;
		const dialOffsetLeft = this.el.offsetLeft + this.el.offsetParent.offsetLeft;
		const newX = Math.max(Math.min(x - dialOffsetLeft, dialOffsetWidth), 0);
		const percent = (newX / dialOffsetWidth) * 100;

		const deg = percent * 0.01 * (this.max - this.min) + this.min;
		this.handle.style.transform = "rotate(" + deg + "deg" + ")";
	}
}
