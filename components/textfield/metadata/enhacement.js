function setFocus(textfield, input, focused) {
    const focusClass = input.classList.contains("focus-ring") ? "is-keyboardFocused" : "is-focused";
    if (focused) {
        textfield.classList.add(focusClass);
    } else {
        textfield.classList.remove("is-keyboardFocused");
        textfield.classList.remove("is-focused");
    }
}

document.addEventListener("focusin", (event) => {
    const textfield = event.target.closest(".spectrum-Textfield");
    if (!textfield) return;
    setFocus(textfield, event.target, true);
});

document.addEventListener("focusout", (event) => {
    const textfield = event.target.closest(".spectrum-Textfield");
    if (!textfield) return;
    setFocus(textfield, event.target, false);
});
