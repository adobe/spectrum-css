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
