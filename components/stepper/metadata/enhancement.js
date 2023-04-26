function setFocus(stepper, input, focused) {
  var focusClass = input.classList.contains("focus-ring")
    ? "is-keyboardFocused"
    : "is-focused"
  if (focused) {
    stepper.classList.add(focusClass)
  } else {
    stepper.classList.remove("is-keyboardFocused")
    stepper.classList.remove("is-focused")
  }
}

document.addEventListener("focusin", function (event) {
  var stepper = event.target.closest(".spectrum-Stepper")
  if (!stepper) return
  setFocus(stepper, event.target, true)
})

document.addEventListener("focusout", function (event) {
  var stepper = event.target.closest(".spectrum-Stepper")
  if (!stepper) return
  setFocus(stepper, event.target, false)
})
