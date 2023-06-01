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

export default class Slider {
	constructor(el, options = {}) {
		if (!el) return;

		this.el = el;
		this.activeHandle = null;
		this.label = el.querySelector(".spectrum-Slider-label");
		this.controls = el.querySelector(".spectrum-Slider-controls");
		this.handles = [...el.querySelectorAll(".spectrum-Slider-handle")];
		this.tracks = [...el.querySelectorAll(".spectrum-Slider-track")];
		this.ticks = [...el.querySelectorAll(".spectrum-Slider--tick")];
		this.buffers = [...el.querySelectorAll(".spectrum-Slider-buffer")];
		this.fill = el.querySelector(".spectrum-Slider-fill");
		this.valueContainer = el.querySelector(".spectrum-Slider-value");

		el.addEventListener("mousedown", this.mouseDownHandler.bind(this));

		// Sliders with three handles are range sliders
		if (this.handles.length === 3) {
			this.el.classList.add("spectrum-Slider--range");
		}
	}

	get isDoubleSlider() {
		return this.handles.length > 1;
	}

	get isRange() {
		return this.el.classList.includes("spectrum-Slider--range");
	}

	get isRamp() {
		return this.el.classList.includes("spectrum-Slider-ramp");
	}

	get isDisabled() {
		return this.el.classList.contains("is-disabled");
	}

	get isColor() {
		return this.el.classList.contains("spectrum-Slider--color");
	}

	get isFilled() {
		return this.el.classList.contains("spectrum-Slider--filled");
	}

	get isRTL() {
		return this.el.dir === "rtl" ?? this.el.ownerDocument.dir === "rtl";
	}

	toggleDragged(handle) {
		handle.classList.toggle("is-dragged");
	}

	toggleFocused(handle) {
		handle.classList.toggle("is-focused");
	}

	updatePosition(xPosition) {
		if (!this.el || this.isDisabled) return;

		const [leftHandle, rightHandle] = this.handles;
		const percent = this.calculateSliderPercent(xPosition);

		const leftTrack = this.tracks[0];
		const middleTrack = this.tracks.length > 2 ? this.tracks[1] : null;
		const rightTrack = this.tracks[this.tracks.length - 1];

		if (this.activeHandle) {
			if (this.activeHandle === leftHandle) {
				let upperBound;
				if (this.isRTL) upperBound = parseFloat(rightHandle.style.right);
				else upperBound = parseFloat(rightHandle.style.left);

				if (percent < upperBound) {
					if (this.isRTL) {
						leftHandle.style.right = percent + "%";
						leftHandle.style.left = "auto";
					} else {
						leftHandle.style.right = "auto";
						leftHandle.style.left = percent + "%";
					}

					leftTrack.style.width = percent + "%";
				} else {
				}
			} else {
				let upperBound;

				if (this.isRTL) upperBound = parseFloat(leftHandle.style.right);
				else upperBound = parseFloat(leftHandle.style.left);

				if (percent > upperBound) {
					if (this.isRTL) {
						rightHandle.style.right = percent + "%";
						rightHandle.style.left = "auto";
					} else {
						rightHandle.style.left = percent + "%";
						rightHandle.style.right = "auto";
					}

					rightTrack.style.width = 100 - percent + "%";
				}
			}

			if (middleTrack) {
				if (this.isRTL) {
					if (leftHandle) middleTrack.style.right = leftHandle.style.right;
					if (rightHandle)
						middleTrack.style.left =
							100 - parseFloat(rightHandle.style.right) + "%";
				} else {
					if (leftHandle) middleTrack.style.left = leftHandle.style.left;
					if (rightHandle)
						middleTrack.style.right =
							100 - parseFloat(rightHandle.style.left) + "%";
				}
			}
		} else {
			if (!this.isColor) {
				if (leftTrack) leftTrack.style.width = percent + "%";
				if (rightTrack) rightTrack.style.width = 100 - percent + "%";
			}

			const handle = this.handles[0];

			this.updateHandlePosition(handle, percent);
			this.updateBufferPosition(handle, percent);
			this.updateFillPosition(percent);
		}
	}

	get value() {
		if (!this.el || !this.valueContainer) return;
		return parseInt(this.valueContainer.innerHTML, 10);
	}

	set value(val) {
		if (!this.el || !this.valueContainer) return;
		if (this.value !== val) {
			this.valueContainer.innerHTML = val;
		}
	}

	mouseUpHandler(event) {
		document.removeEventListener("mouseup", this.mouseUpHandler);
		document.removeEventListener("mousemove", this.mouseMoveHandler);

		// @todo smarter way to determine which handle is being dragged?
		this.toggleDragged(this.handles[0]);
		this.activeHandle = null;
	}

	mouseMoveHandler(event) {
		if (!this.activeHandle) return;

		updatePosition(event.x);
	}

	mouseDownHandler(event) {
		const handle = this.handles.find((handle) => handle === event.target);
		if (!handle) return;

		this.activeHandle = handle;

		document.addEventListener("mouseup", this.mouseUpHandler);
		document.addEventListener("mousemove", this.mouseMoveHandler);

		// @todo smarter way to determine which handle is being dragged?
		this.toggleDragged(handle);

		// To move by merely clicking on the track
		this.mouseMoveHandler(DragEvent); // @todo should this be run here?
	}

	// @todo grok these
	calculateSliderPercent(mouseX) {
		const sliderOffsetWidth = this.el.offsetWidth;
		const sliderOffsetLeft =
			this.el.offsetLeft + this.el.offsetParent.offsetLeft;

		const x = Math.max(
			Math.min(mouseX - sliderOffsetLeft, sliderOffsetWidth),
			0
		);
		const percent = (x / sliderOffsetWidth) * 100;

		if (this.isRTL) return 100 - percent;
		return percent;
	}

	swapStyles(el, prop1, prop2) {
		if (!el) return;

		if (this.isRTL) {
			const hold = el.style[prop1];
			el.style[prop1] = el.style[prop2];
			el.style[prop2] = hold;
		} else {
			const hold = el.style[prop2];
			el.style[prop2] = el.style[prop1];
			el.style[prop1] = hold;
		}
	}

	checkSliderHandleStyles(handle) {
		const [leftTrack, rightTrack] = this.tracks;

		this.swapStyles(handle, "right", "left");

		// Swap the styles if we're using RTL
		if (this.isRTL) {
			const position = handle.style.right;
			const percent = parseInt(position, 10);
			if (!this.isColor) {
				if (leftTrack) leftTrack.style.width = percent + "%";
				if (rightTrack) rightTrack.style.width = 100 - percent + "%";
			}
		} else {
			const position = handle.style.left;
			const percent = parseInt(position, 10);
			if (!this.isColor) {
				if (rightTrack) rightTrack.style.width = percent + "%";
				if (leftTrack) leftTrack.style.width = 100 - percent + "%";
			}
		}
	}

	checkTrackStyles(track) {
		if (!track || !track.style.background) return;

		if (this.isRTL)
			track.style.background = track.style.background.replace("right", "left");
		else
			track.style.background = track.style.background.replace("left", "right");
	}

	initializeSliderTrackPosition() {
		this.handles.forEach((handle, idx) => {
			let percent;
			if (this.isRTL) percent = parseFloat(handle.style.right);
			else percent = parseFloat(handle.style.left);

			if (!percent) return;

			if (this.tracks[idx]) {
				if (idx === 0) this.tracks[idx].style.width = percent + "%";
				else this.tracks[idx + 1].style.width = 100 - percent + "%";
			}

			if (this.tracks[idx + 1]) {
				if (idx > 0) percent = 100 - percent;
				if ((idx === 0 && this.isRTL) || (idx > 0 && !this.isRTL)) {
					this.tracks[idx + 1].style.right = percent + "%";
				} else {
					this.tracks[idx + 1].style.left = percent + "%";
				}
			}
		});
	}

	updateSliderDirection() {
		if (!this.el) return;

		this.handles.forEach(this.checkSliderHandleStyles);
		this.tracks.forEach(this.checkTrackStyles);

		this.swapStyles(this.fill, "right", "left");
		this.buffers.forEach((buffer) => this.swapStyles(buffer, "right", "left"));
	}

	updateBufferPosition(handle, percent) {
		if (!this.buffers || this.buffers.length === 0) return;

		const [leftBuffer, rightBuffer] = this.buffers;
		const bufferedAmount = percent + parseInt(rightBuffer.style.width, 10);

		if (percent >= bufferedAmount) {
			// Hide the right buffer
			rightBuffer.style.width = 0;
			rightBuffer.style.left = "auto";
			rightBuffer.style.right = "auto";

			// This calculation takes into account the gap between the handle and the buffer
			const bufferStyle = window.getComputedStyle(leftBuffer);
			// The left buffer is offset by the gap and some margin, so we have to add that back to make it actually hit the desired value
			let handlePosition, offset, gap;
			if (this.isRTL) {
				offset = parseInt(bufferStyle.marginRight, 10) * -1;
				gap = parseInt(bufferStyle.paddingLeft, 10);
				handlePosition =
					handle.parentElement.offsetWidth -
					handle.offsetLeft +
					handle.offsetWidth / 2;
			} else {
				offset = parseInt(bufferStyle.marginLeft, 10) * -1;
				gap = parseInt(bufferStyle.paddingRight, 10);
				handlePosition = handle.offsetLeft + handle.offsetWidth / 2;
			}

			const actualMiddle = handle.parentElement.offsetWidth / 2 + offset + gap;

			// Keep the left buffer to account for the nasty gaps
			leftBuffer.style.width = Math.min(handlePosition, actualMiddle) + "px";
		} else {
			leftBuffer.style.width = percent + "%";
			rightBuffer.style.width = "auto";

			if (this.isRTL) {
				rightBuffer.style.right = percent + "%";
				rightBuffer.style.left = 100 - bufferedAmount + "%";
			} else {
				rightBuffer.style.right = 100 - bufferedAmount + "%";
				rightBuffer.style.left = percent + "%";
			}
		}
	}

	updateHandlePosition(handle, percent) {
		if (this.isRTL) {
			handle.style.right = percent + "%";
			handle.style.left = "auto";
		} else {
			handle.style.right = "auto";
			handle.style.left = percent + "%";
		}
	}

	updateFillPosition(percent) {
		if (!this.fill) return;

		if (percent >= 50) {
			this.fill.style.width = percent - 50 + "%";
			this.fill.classList.add("spectrum-Slider-fill--right");

			if (this.isRTL) this.fill.style.right = "50%";
			else this.fill.style.left = "50%";
		} else {
			this.fill.style.width = 50 - percent + "%";
			this.fill.classList.remove("spectrum-Slider-fill--right");

			if (this.isRTL) fill.style.right = percent + "%";
			else this.fill.style.left = percent + "%";
		}
	}
}
