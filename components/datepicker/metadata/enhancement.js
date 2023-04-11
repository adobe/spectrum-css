/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

function setFocus(inputgroup, focused, event) {
    var textfields = inputgroup.querySelectorAll(".spectrum-Textfield")
    var inputs = inputgroup.querySelectorAll(".spectrum-InputGroup-input")
    var input = inputs[0]
    var focusClass = event.target.classList.contains("focus-ring")
        ? "is-keyboardFocused"
        : "is-focused"
    var pickerButton = inputgroup.querySelector(".spectrum-PickerButton")
    if (focused) {
        inputgroup.classList.add(focusClass)
        if (!pickerButton) return
        pickerButton.classList.add(focusClass)
        if (event.target.tagName !== "INPUT") {
            input.focus()
        }

        Array.prototype.forEach.call(textfields, (textfield) => {
            textfield.classList.add(focusClass)
        })
    } else {
        if (pickerButton) pickerButton.classList.remove("is-keyboardFocused")
        if (pickerButton) pickerButton.classList.remove("is-focused")
        inputgroup.classList.remove("is-keyboardFocused")
        inputgroup.classList.remove("is-focused")

        Array.prototype.forEach.call(textfields, (textfield) => {
            textfield.classList.remove("is-focused")
            textfield.classList.remove("is-keyboardFocused")
        })
    }
}

document.addEventListener("focusin", function (event) {
    var inputgroup = event.target.closest(".spectrum-InputGroup")

    if (event.target.closest(".spectrum-Menu")) {
        // Don't mess with focus on menuitems
        return
    }
    if (!inputgroup) return
    setFocus(inputgroup, true, event)
})

document.addEventListener("focusout", function (event) {
    var inputgroup = event.target.closest(".spectrum-InputGroup")
    if (!inputgroup) return
    setFocus(inputgroup, false, event)
})
