window.addEventListener("click", function (event) {
  var button = event.target.closest(".spectrum-CycleButton")
  if (!button) return
  var icons = button.querySelectorAll(".spectrum-Icon")
  var currentIcon = button.querySelector(".spectrum-Icon.is-selected")
  var currentIconIndex = Array.prototype.slice.call(icons).indexOf(currentIcon)
  if (currentIcon) {
    currentIcon.classList.remove("is-selected")

    var newIndex =
      currentIconIndex + 1 < icons.length ? currentIconIndex + 1 : 0
    icons[newIndex].classList.add("is-selected")
  }
})
