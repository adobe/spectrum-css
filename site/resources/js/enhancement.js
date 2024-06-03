/*!
Copyright 2024 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

/* Global holder tracking open pickers to ensure only 1 is ever open at a time */
let openPicker;

function furthest(el, selector) {
	let lastMatch;
	while (el) {
		if (el.matches && el.matches(selector)) lastMatch = el;
		el = el.parentNode;
	}

	return lastMatch;
}

// Add or remove focused or keyboard focused classes on element.
function setFocusClasses(element, target, focused) {
	const focusClass = target.classList.contains("is-keyboardFocused")
		? "is-keyboardFocused"
		: "is-focused";

	if (focused) {
		element.classList.add(focusClass);
	}
	else {
		element.classList.remove("is-keyboardFocused");
		element.classList.remove("is-focused");
	}
}

function togglePicker(picker, force = undefined) {
	if (!picker) return;

	const isOpen = force !== undefined ? force : !picker.classList.contains("is-open");

	if (isOpen) {
		picker.setAttribute("aria-expanded", "true");

		if (openPicker && openPicker !== picker) {
			togglePicker(openPicker, false);
		}
		openPicker = picker;
	}
	else {
		picker.removeAttribute("aria-expanded");
	}

	picker.classList.toggle("is-open", isOpen);
	picker.classList.toggle("is-selected", isOpen);

	const popover = picker.nextElementSibling?.matches(".spectrum-Popover") ? picker.nextElementSibling : undefined;
	if (!popover) return;

	// We have to get the coordinates relative to the parent
	const parent = popover.closest(".spectrum-CSSExample-container") ?? document.querySelector("body");
	const parentRect = parent.getBoundingClientRect();

	const transforms = [];
	popover.style.zIndex = 1;

	const rect = picker.getBoundingClientRect();
	const triggerBottom = rect.bottom - parentRect.top;

	popover.style.left = rect.left - parentRect.left + "px";
	popover.style.top = triggerBottom + "px";
	popover.style.transform = transforms.join(" ");

	popover.classList.toggle("is-open", isOpen);
	popover.querySelector(".spectrum-Menu-item").focus();
}

function setPickerValue(picker, value, label = undefined) {
	if (!picker) return;

	picker.setAttribute("value", value);

	const menu = picker.nextElementSibling.querySelector(".spectrum-Menu");
	if (!menu) return;

	const menuItem = menu.querySelector(
		".spectrum-Menu-item[value=\"" + value + "\"]"
	);

	if (menuItem) {
		const selectedMenuItem = menu.querySelector(
			".spectrum-Menu-item[selected]"
		);

		if (selectedMenuItem) {
			selectedMenuItem.classList.remove("is-selected");
			selectedMenuItem.removeAttribute("aria-selected");
		}

		menuItem.classList.add("is-selected");
		menuItem.setAttribute("aria-selected", "true");

		if (!label) {
			const menuLabel = menuItem.querySelector(".spectrum-Menu-itemLabel");
			if (menuLabel) {
				label = menuLabel.innerHTML;
			}
		}
	}

	if (picker && label) {
		const pickerLabel = picker.querySelector(".spectrum-Picker-label");
		if (pickerLabel) {
			pickerLabel.innerHTML = label;
		}
	}

	picker.dispatchEvent(new CustomEvent("picker:change", {
		bubbles: true,
		detail: { label, value },
	}));
}

window.addEventListener("DOMContentLoaded", () => {
	[...document.querySelectorAll(".spectrum-DropZone")].forEach((dropzone) => {
		dropzone.addEventListener("dragover", (event) => {
			// prevent default to allow drop
			event.preventDefault();
		}, false);

		dropzone.addEventListener("dragenter", () => {
			dropzone.classList.add("is-dragged");
		});

		dropzone.addEventListener("dragleave", () => {
			dropzone.classList.remove("is-dragged");
		});

		dropzone.addEventListener("drop", (event) => {
			event.preventDefault();
		});
	});

	[...document.querySelectorAll(".spectrum-Swatch")].forEach((swatch) => {
		swatch.addEventListener("click", (event) => {
			const el = event.target;
			if (el.classList.contains("is-disabled")) return;

			el.classList.toggle("is-selected");
		});
	});

	[...document.querySelectorAll(".spectrum-AssetCard")].forEach((assetcard) => {
		assetcard.addEventListener("click", () => {
			const checkbox = assetcard.querySelector(".spectrum-Checkbox-input");
			if (checkbox) {
				checkbox.checked = !assetcard.classList.contains("is-selected");
			}

			assetcard.classList.toggle("is-selected");
		});
	});

	/* TODO: is there a keypress behavior for rating? */
	[...document.querySelectorAll(".spectrum-Rating")].forEach((rating) => {
		rating.addEventListener("focusin", (event) => {
			const el = event.target;
			el.classList.add("is-focused");
		});

		rating.addEventListener("focusout", (event) => {
			const el = event.target;
			el.classList.remove("is-focused");
		});

		const input = rating.querySelector(".spectrum-Rating-input");
		input.addEventListener("change", (event) => {
			const el = event.target;
			if (el.hasAttribute("readonly")) {
				event.preventDefault();
				el.value = event.defaultValue;
			}
			else {
				const value = parseInt(el.value, 10);
				input.value = value;

				[...rating.querySelectorAll(".spectrum-Rating-icon")].forEach((el, index) => {
					el.classList[index <= value - 1 ? "add" : "remove"]("is-selected");
					el.classList[index === value - 1 ? "add" : "remove"]("is-currentValue");
				});
			}
		});

		[...rating.querySelectorAll(".spectrum-Rating-icon")].forEach((icon, idx, allIcons) => {
			icon.addEventListener("click", () => {
				const value = allIcons[idx] + 1;
				input.value = value;

				allIcons.forEach((el, index) => {
					el.classList[index <= value - 1 ? "add" : "remove"]("is-selected");
					el.classList[index === value - 1 ? "add" : "remove"]("is-currentValue");
				});
			});
		});
	});

	[...document.querySelectorAll(".spectrum-Textfield, .spectrum-Combobox, .spectrum-Stepper")].forEach((input) => {
		// -- Bubble up focus classes to component's parent element.
		input.addEventListener("focusin", (event) => {
			setFocusClasses(input, event.target, true);
		});
		input.addEventListener("focusout", (event) => {
			setFocusClasses(input, event.target, false);
		});
	});

	[...document.querySelectorAll(".spectrum-Menu")].forEach((menu) => {
		menu.addEventListener("click", (event) => {
			const popover = menu.closest(".spectrum-Popover");
			const picker = popover?.previousElementSibling?.matches(".spectrum-Picker") ? popover.previousElementSibling : undefined;

			const menuItem = event.target.closest(".spectrum-Menu-item");
			if (!menuItem) return;

			const menuLabel = menuItem.querySelector(".spectrum-Menu-itemLabel");
			if (!menuLabel) return;

			const pickerLabel = picker.querySelector(".spectrum-Picker-label");
			if (!pickerLabel) return;

			pickerLabel.innerHTML = menuLabel.innerHTML;

			event.stopPropagation();

			const value = menuItem.getAttribute("value");
			const label = menuLabel.innerHTML;

			if (picker) {
				togglePicker(picker, false);
				setPickerValue(picker, value, label);
			}
		});
	});

	[...document.querySelectorAll(".spectrum-Picker")].forEach((picker) => {
		picker.addEventListener("click", (event) => {
			const el = event.target;
			const isOpen = !el.classList.contains("is-open");
			togglePicker(picker, isOpen);
		});
	});

	[...document.querySelectorAll(".spectrum-Accordion")].forEach((accordion) => {
		[...accordion.querySelectorAll(".spectrum-Accordion-item")].forEach(accordionItem => {
			const button = accordionItem.querySelector(".spectrum-Accordion-itemHeading");
			button.addEventListener("click", (event) => {
				const isDisabled = accordionItem.classList.contains("is-disabled");
				if (isDisabled) return;

				accordionItem.classList.toggle("is-open");
				event.preventDefault();
			});
		});
	});

	[...document.querySelectorAll(".spectrum-CycleButton")].forEach((cycleButton) => {
		cycleButton.addEventListener("click", () => {
			const icons = [...cycleButton.querySelectorAll(".spectrum-Icon")];
			const currentIcon = cycleButton.querySelector(".spectrum-Icon[selected]");
			const currentIconIndex = icons.indexOf(currentIcon);

			if (!currentIcon) return;
			currentIcon.classList.remove("is-selected");

			const newIndex = currentIconIndex + 1 < icons.length ? currentIconIndex + 1 : 0;
			icons[newIndex].classList.add("is-selected");
		});
	});

	[...document.querySelectorAll(".spectrum-TreeView")].forEach((treeview) => {
		[...treeview.querySelectorAll(".spectrum-TreeView-item")].forEach(treeviewItem => {
			treeviewItem.addEventListener("click", (event) => {
				const isDisabled = treeviewItem.classList.contains("is-disabled");
				if (isDisabled) return;

				let el;

				if (
					(el = event.target.closest(".spectrum-TreeView-itemIndicator")) !== null
				) {
					treeviewItem.classList.toggle("is-open");
					event.preventDefault();
				}
				else if (
					(el = event.target.closest(".spectrum-TreeView-itemLink")) !== null
				) {
					if (!(event.shiftKey || event.metaKey)) {
						// Remove other selected items
						const outerTreeview = furthest(el, ".spectrum-TreeView");
						if (outerTreeview) {
							[...outerTreeview.querySelectorAll(".spectrum-TreeView-item[selected]")].forEach(item => {
								if (item != treeviewItem) {
									item.classList.remove("is-selected");

									var thumbnail = item.querySelector(
										".spectrum-TreeView-itemThumbnail"
									);
									if (thumbnail) {
										thumbnail.classList.remove("is-selected");
									}
								}
							});
						}
					}

					const thumbnail = treeviewItem.querySelector(".spectrum-TreeView-itemThumbnail");
					if (thumbnail) {
						const selected = treeviewItem.classList.toggle("is-selected");
						thumbnail.classList.toggle("is-selected", !selected);
					}

					event.preventDefault();
				}
			});
		});
	});

	[...document.querySelectorAll(".spectrum-Slider")].forEach(slider => {
		const handles = [...slider.querySelectorAll(".spectrum-Slider-handle")];

		const isColor = slider.classList.contains("spectrum-Slider--color");
		const value = slider.querySelector(".spectrum-Slider-value");
		const fill = slider.querySelector(".spectrum-Slider-fill");

		let init;

		if (handles.length > 1) {
			let handle;

			const onMouseUp = function () {
				window.removeEventListener("mouseup", onMouseUp);
				window.removeEventListener("mousemove", onMouseMove);
				document.body.classList.remove("u-isGrabbing");
				handle = undefined;
			};

			const onMouseMove = function (e) {
				if (!handle) return;

				const [leftTrack, middleTrack, rightTrack] = [...slider.querySelectorAll(".spectrum-Slider-track")];

				const leftHandle = handles[0];
				const rightHandle = handles[1];

				const sliderOffsetWidth = slider.offsetWidth;
				const sliderOffsetLeft = slider.offsetLeft + slider.offsetParent.offsetLeft;

				const x = Math.max(Math.min(e.x - sliderOffsetLeft, sliderOffsetWidth), 0);
				let percent = Math.round((x / sliderOffsetWidth) * 100);

				const isRTL = slider.dir === "rtl";

				if (isRTL) {
					percent = 100 - percent;
				}

				if (handle === leftHandle) {
					if (percent < parseFloat(rightHandle.style[isRTL ? "right" : "left"])) {
						if (isRTL) {
							handle.style.right = `${percent}%`;
							handle.style.left = "auto";
						}
						else {
							handle.style.right = "auto";
							handle.style.left = `${percent}%`;
						}

						leftTrack.style.width = `${percent}%`;
					}
				}
				else {
					if (percent > parseFloat(leftHandle.style[isRTL ? "right" : "left"])) {
						if (isRTL) {
							handle.style.right = `${percent}%`;
							handle.style.left = "auto";
						}
						else {
							handle.style.right = "auto";
							handle.style.left = `${percent}%`;
						}

						rightTrack.style.width = `${100 - percent}%`;
					}
				}

				if (isRTL) {
					middleTrack.style.right = leftHandle.style.right;
					middleTrack.style.left = 100 - parseFloat(rightHandle.style.right) + "%";
				}
				else {
					middleTrack.style.left = leftHandle.style.left;
					middleTrack.style.right = 100 - parseFloat(rightHandle.style.left) + "%";
				}
			};

			const onMouseDown = function (e) {
				if (e.target.classList.contains("spectrum-Slider-handle")) {
					handle = e.target;
					window.addEventListener("mouseup", onMouseUp);
					window.addEventListener("mousemove", onMouseMove);
					document.body.classList.add("u-isGrabbing");
				}
			};

			init = function () {
				const [leftTrack, middleTrack, rightTrack] = [...slider.querySelectorAll(".spectrum-Slider-track")];

				const leftHandle = handles[0];
				const rightHandle = handles[1];

				const isRTL = slider.dir === "rtl";

				// Set initial track position
				let startPercent, endPercent;
				if (isRTL) {
					leftHandle.style.right = leftHandle.style.left;
					leftHandle.style.left = leftHandle.style.right;
					rightHandle.style.right = rightHandle.style.left;
					rightHandle.style.left = rightHandle.style.right;

					startPercent = parseFloat(leftHandle.style.right);
					endPercent = parseFloat(rightHandle.style.right);

					middleTrack.style.right = startPercent + "%";
					middleTrack.style.left = 100 - endPercent + "%";
				}
				else {
					startPercent = parseFloat(leftHandle.style.left);
					endPercent = parseFloat(rightHandle.style.left);

					middleTrack.style.left = startPercent + "%";
					middleTrack.style.right = 100 - endPercent + "%";
				}

				leftTrack.style.width = startPercent + "%";
				rightTrack.style.width = 100 - endPercent + "%";

				if (!slider.classList.contains("is-disabled")) {
					slider.addEventListener("mousedown", onMouseDown);
				}
			};
		}
		else {
			const handle = handles[0];

			const buffers = [...slider.querySelectorAll(".spectrum-Slider-buffer")];

			let leftBuffer, rightBuffer, bufferedAmount;
			if (buffers.length) {
				const isRTL = slider.dir === "rtl";

				leftBuffer = buffers[0];
				rightBuffer = buffers[1];

				bufferedAmount =
					parseInt(handle.style[isRTL ? "right" : "left"], 10) +
					parseInt(rightBuffer.style.width, 10);
			}

			const onMouseUp = function () {
				window.removeEventListener("mouseup", onMouseUp);
				window.removeEventListener("mousemove", onMouseMove);
				handle.classList.remove("is-dragged");
			};

			const onMouseMove = function (e) {
				const [leftTrack, rightTrack] = [...slider.querySelectorAll(".spectrum-Slider-track")];

				const sliderOffsetWidth = slider.offsetWidth;
				const sliderOffsetLeft = slider.offsetLeft + slider.offsetParent.offsetLeft;

				const x = Math.max(Math.min(e.x - sliderOffsetLeft, sliderOffsetWidth), 0);
				let percent = Math.round((x / sliderOffsetWidth) * 100);

				const isRTL = slider.dir === "rtl";

				if (isRTL) {
					percent = 100 - percent;
				}

				if (value) {
					value.innerText = percent;
				}

				if (leftTrack && rightTrack && !isColor) {
					leftTrack.style.width = `${percent}%`;
					rightTrack.style.width = `${100 - percent}%`;
				}

				if (isRTL) {
					handle.style.right = `${percent}%`;
					handle.style.left = "auto";
				}
				else {
					handle.style.right = "auto";
					handle.style.left = `${percent}%`;
				}

				if (buffers.length) {
					if (percent >= bufferedAmount) {
						// Hide the right buffer
						rightBuffer.style.width = 0;
						rightBuffer.style.left = "auto";
						rightBuffer.style.right = "auto";

						// This disgusting calculation takes into account the pretty gap
						const bufferStyle = window.getComputedStyle(leftBuffer);

						// The left buffer is offset by the gap and some margin, so we have to add that back to make it actually hit the desired value
						let handleGap, bufferOffset, bufferMaxWidth;
						if (isRTL) {
							handleGap = parseInt(bufferStyle.paddingLeft, 10);
							bufferOffset = parseInt(bufferStyle.marginRight, 10) * -1;
							bufferMaxWidth = (handle.parentElement.offsetWidth - handle.offsetLeft) + handle.offsetWidth / 2;
						}
						else {
							handleGap = parseInt(bufferStyle.paddingRight, 10);
							bufferOffset = parseInt(bufferStyle.marginLeft, 10) * -1;
							bufferMaxWidth = handle.offsetLeft + handle.offsetWidth / 2;
						}

						const actualMiddle =
							handle.parentElement.offsetWidth / 2 + bufferOffset + handleGap;

						// Keep the left buffer to account for the nasty gaps
						leftBuffer.style.width = Math.min(bufferMaxWidth, actualMiddle) + "px";
					}
					else {
						leftBuffer.style.width = `${percent}%`;
						rightBuffer.style.width = "auto";

						if (isRTL) {
							rightBuffer.style.right = `${percent}%`;
							rightBuffer.style.left = `${100 - bufferedAmount}%`;
						}
						else {
							rightBuffer.style.right = `${100 - bufferedAmount}%`;
							rightBuffer.style.left = `${percent}%`;
						}
					}
				}

				if (fill) {
					if (isRTL) {
						fill.style.right = `${(percent < 50 ? percent : 50)}%`;
					}
					else {
						fill.style.left = `${(percent < 50 ? percent : 50)}%`;
					}

					fill.style.width = `${(percent < 50 ? 50 - percent : percent - 50)}%`;
					fill.classList.toggle("spectrum-Slider-fill--right", percent > 50);
				}
			};

			const onMouseDown = function (e) {
				window.addEventListener("mouseup", onMouseUp);
				window.addEventListener("mousemove", onMouseMove);
				handle.classList.add("is-dragged");
				// to move by merely clicking on the track
				onMouseMove(e);
			};

			init = function () {
				const isRTL = slider.dir === "rtl";
				const [leftTrack, rightTrack] = [...slider.querySelectorAll(".spectrum-Slider-track")];

				if (isRTL) {
					handle.style.right = handle.style.left;
					handle.style.left = handle.style.right;
					if (fill) {
						fill.style.right = fill.style.left;
						fill.style.left = fill.style.right;
					}

					if (buffers.length) {
						var oldRightRight = rightBuffer.style.right;
						rightBuffer.style.right = rightBuffer.style.left;
						rightBuffer.style.left = oldRightRight;
						var oldLeftRight = leftBuffer.style.right;
						leftBuffer.style.right = leftBuffer.style.left;
						leftBuffer.style.left = oldLeftRight;
					}

					if (tracks.length) {
						// Flip colors
						if (tracks[0].style.background) {
							tracks[0].style.background = tracks[0].style.background.replace(
								"right",
								"left"
							);
						}
					}
				}

				// Set initial track position
				let percent;
				if (isRTL) {
					percent = parseInt(handle.style.right, 10);
				}
				else {
					percent = parseInt(handle.style.left, 10);
				}

				if (leftTrack && rightTrack && !isColor) {
					leftTrack.style.width = `${percent}%`;
					rightTrack.style.width = `${100 - percent}%`;
				}

				if (!slider.classList.contains("is-disabled")) {
					slider.addEventListener("mousedown", onMouseDown);
				}
			};
		}

		const observer = new MutationObserver(function (mutations) {
			mutations.forEach(function (mutation) {
				if (mutation.type === "attributes" && mutation.attributeName === "dir") {
					init();
				}
			});
		});

		observer.observe(document.documentElement, {
			attributes: true, //configure it to listen to attribute changes
		});

		init();
	});

	[...document.querySelectorAll(".spectrum-Dial")].forEach(dial => {
		const dialOffsetWidth = dial.offsetWidth;
		const dialOffsetLeft = dial.offsetLeft + dial.offsetParent.offsetLeft;
		const handle = dial.querySelector(".spectrum-Dial-handle");
		const min = -45;
		const max = 225;

		function onMouseDown() {
			window.addEventListener("mouseup", onMouseUp);
			window.addEventListener("mousemove", onMouseMove);
			document.body.classList.add("u-isGrabbing");
		}

		function onMouseUp() {
			window.removeEventListener("mouseup", onMouseUp);
			window.removeEventListener("mousemove", onMouseMove);
			document.body.classList.remove("u-isGrabbing");
		}

		function onMouseMove(e) {
			const x = Math.max(Math.min(e.x - dialOffsetLeft, dialOffsetWidth), 0);
			const percent = (x / dialOffsetWidth) * 100;

			const deg = percent * 0.01 * (max - min) + min;
			handle.style.transform = `rotate(${deg}deg)`;
		}

		if (!dial.classList.contains("is-disabled")) {
			dial.addEventListener("mousedown", onMouseDown);
		}
	});

	// Kicks off the loader animation
	let value = 0;
	setInterval(() => {
		const loaders = [...document.querySelectorAll(
			".spectrum-CircleLoader:not(spectrum-CircleLoader--indeterminate)"
		)];
		if (!loaders.length) return;

		loaders.forEach(loader => {
			const v = value++;

			let submask1 = loader.querySelector(".spectrum-CircleLoader-fillSubMask1");
			let submask2 = loader.querySelector(".spectrum-CircleLoader-fillSubMask2");
			let angle;

			if (v > 0 && v <= 50) {
				angle = -180 + (v / 50) * 180;
				submask1.style.transform = "rotate(" + angle + "deg)";
				submask2.style.transform = "rotate(-180deg)";
			}
			else if (v > 50) {
				angle = -180 + ((v - 50) / 50) * 180;
				submask1.style.transform = "rotate(0deg)";
				submask2.style.transform = "rotate(" + angle + "deg)";
			}
		});

		if (value >= 100) value = 0;
	}, 500);
});

window.addEventListener("click", (event) => {
	const menu = event.target.closest(".spectrum-Menu");
	const picker = event.target.closest(".spectrum-Picker");

	if (!picker && !menu && openPicker) togglePicker(openPicker, false);
});

document.addEventListener("keypress", (event) => {
	const swatch = event.target.closest(".spectrum-Swatch");
	if (swatch && (event.key === "Enter" || event.key === " ")) {
		if (!swatch.classList.contains("is-disabled")) {
			swatch.classList.toggle("is-selected", !swatch.classList.contains("is-selected"));
		}

		event.preventDefault();
	}

	const assetcard = event.target.closest(".spectrum-AssetCard");
	if (assetcard && (event.key === "Enter" || event.key === " ")) {
		const checkbox = assetcard.querySelector(".spectrum-Checkbox-input");
		if (checkbox) {
			checkbox.checked = !assetcard.classList.contains("is-selected");
		}

		assetcard.classList.toggle("is-selected");

		event.preventDefault();
	}

	const menuItem = event.target.closest(".spectrum-Menu-item");
	if (menuItem) {
		const menu = menuItem.closest(".spectrum-Menu");
		if (menuItem.classList.contains("spectrum-Menu-item")) {
			const items = [...menu.querySelectorAll(".spectrum-Menu-item:not([disabled])")];
			const menuItemIndex = items.indexOf(menuItem);
			let newItemIndex = -1;
			if (event.key === "ArrowDown") {
				newItemIndex =
					menuItemIndex + 1 < items.length ? menuItemIndex + 1 : 0;
			}
			else if (event.key === "ArrowUp") {
				newItemIndex =
					menuItemIndex - 1 >= 0 ? menuItemIndex - 1 : items.length - 1;
			}
			else if (event.key === "Home") {
				newItemIndex = 0;
			}
			else if (event.key === "End") {
				newItemIndex = items.length - 1;
			}
			else if (event.key === "Escape") {
				const picker = event.target.closest(".spectrum-Picker");
				togglePicker(picker, false);
				picker.focus();
			}
			else if (event.key === "Enter") {
				const value = menuItem.getAttribute("value");
				const menuLabel = menuItem.querySelector(".spectrum-Menu-itemLabel");
				const label = menuLabel.innerHTML;

				if (picker) {
					togglePicker(picker, false);
					setPickerValue(picker, value, label);
				}

				const picker = popover?.previousElementSibling?.matches(".spectrum-Picker") ? popover.previousElementSibling : undefined;
				const popover = menu.closest(".spectrum-Popover");

				togglePicker(picker, false);
				picker.focus();

				event.preventDefault();
			}
			if (newItemIndex !== -1) {
				items[newItemIndex].focus();

				// Don't scroll the list
				event.preventDefault();
			}
		}
	}
	else if (event.key === "ArrowDown") {
		const targetPicker = event.target.closest(".spectrum-Picker");
		if (targetPicker) togglePicker(targetPicker, true);
	}
});

// eslint-disable-next-line no-unused-vars -- Used in dialog docs
function openDialog(dialog, withOverlay) {
	if (withOverlay !== false) {
		document.getElementById("spectrum-underlay").classList.add("is-open");
	}

	dialog.classList.add("is-open");

	// Support wrapped dialogs
	const innerDialog = dialog.querySelector(".spectrum-Modal");
	if (!innerDialog) return;

	innerDialog.classList.add("is-open");
}

// eslint-disable-next-line no-unused-vars -- Used in dialog docs
function closeDialog(dialog) {
	document.getElementById("spectrum-underlay").classList.remove("is-open");
	dialog.classList.remove("is-open");

	// Support wrapped dialogs
	const innerDialog = dialog.querySelector(".spectrum-Modal");
	if (innerDialog) {
		innerDialog.classList.remove("is-open");
	}

	setTimeout(() => {
		dialog.classList.remove("spectrum-CSSExample-dialog");
	}, 130);
}

// eslint-disable-next-line no-unused-vars -- Used in popover docs
function toggleSpectrumPopover(popover) {
	popover.classList.contains("is-open")
		? popover.classList.remove("is-open")
		: popover.classList.add("is-open");
}

// Focus Indicator Classes
const NAVIGATION_KEYS = [
	"Tab",
	"ArrowUp",
	"ArrowRight",
	"ArrowDown",
	"ArrowLeft",
	"Home",
	"End",
	"PageUp",
	"PageDown",
	"Enter",
	" ",
	"Escape",

	/* IE9 and Firefox < 37 */
	"Up",
	"Right",
	"Down",
	"Left",
	"Esc"
];

const FOCUS_COMPONENTS = [
	"assetlist",
	"button",
	"calendar",
	"card",
	"closebutton",
	"colorarea",
	"colorhandle",
	"colorslider",
	"colorwheel",
	"combobox",
	"menu",
	"picker",
	"pickerbutton",
	"rating",
	"sidenav",
	"slider",
	"steplist",
	"stepper",
	"table",
	"tag",
	"tooltip"
];

const KEYBOARD_FOCUS_COMPONENTS = [
	"closebutton",
	"combobox",
	"datepicker",
	"pickerbutton",
	"sidenav",
	"stepper",
	"table",
];

// If pathname matches a component in the focus or keyboard focus arrays,
// we know that component should get/is setup to handle the focus class
function getsFocusClasses(componentArray) {
	return componentArray.some((componentPath) => {
		const currentPath = window.location.pathname;
		return currentPath.includes(componentPath);
	});
}

let keyboardFocus = false;

// Display InputGroup focus style
function toggleInputGroupFocus(event) {
	const classList = event.target.classList;

	let closestSelector;
	// target within InputGroup
	if (!classList) return;
	if (
		classList.contains("spectrum-InputGroup-input") ||
		classList.contains("spectrum-ActionButton spectrum-ActionButton--sizeM")
	) {
		closestSelector = ".spectrum-InputGroup";
	}
	// target within a Slider
	else if (classList.contains("spectrum-Slider-input")) {
		closestSelector = ".spectrum-Slider-handle";
	}
	else return;

	const closestElement = event.target.closest(closestSelector);
	if (!closestElement) return;

	closestElement.classList.toggle("is-focused", event.type === "focus");
}

document.addEventListener("focus", toggleInputGroupFocus, true);
document.addEventListener("blur", toggleInputGroupFocus, true);

window.addEventListener("keydown", (event) => {
	if (event.ctrlKey || event.altKey || event.metaKey || NAVIGATION_KEYS.indexOf(event.key) === -1) {
		return;
	}
	keyboardFocus = true;

	if (getsFocusClasses(KEYBOARD_FOCUS_COMPONENTS)
		&& document.activeElement
		&& document.activeElement !== document.body) {
		document.activeElement.classList.add("is-keyboardFocused");
	}
}, true);

window.addEventListener("focusin", (event) => {
	const classList = event.target.classList;
	if (classList && keyboardFocus && getsFocusClasses(KEYBOARD_FOCUS_COMPONENTS)) {
		classList.add("is-keyboardFocused");
	}
}, true);

window.addEventListener("focusout", (event) => {
	const classList = event.target.classList;
	if (!classList) return;

	classList.remove("is-keyboardFocused");
	classList.remove("is-focused");
}, true);

window.addEventListener("mousedown", () => {
	keyboardFocus = false;

	if (getsFocusClasses(FOCUS_COMPONENTS)
		&& document.activeElement
		&& document.activeElement !== document.body) {
		document.activeElement.classList.add("is-focused");
	}
}, true);
