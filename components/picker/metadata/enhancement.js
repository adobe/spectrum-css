// Picker

var openPicker = null

function toggleOpen(picker, force) {
  var isOpen =
    force !== undefined ? force : !picker.classList.contains("is-open")
  var popover = getPopoverForPicker(picker)

  picker[isOpen ? "setAttribute" : "removeAttribute"]("aria-expanded", "true")
  picker.classList[isOpen ? "add" : "remove"]("is-open")
  picker.classList[isOpen ? "add" : "remove"]("is-selected")

  if (popover) {
    popover.style.zIndex = 1
    var rect = picker.getBoundingClientRect()
    popover.style.top = rect.bottom + "px"
    popover.classList[isOpen ? "add" : "remove"]("is-open")
    popover.querySelector(".spectrum-Menu-item").focus()
  }

  if (isOpen) {
    if (openPicker && openPicker !== picker) {
      toggleOpen(openPicker, false)
    }
    openPicker = picker
  }
}

function closeAndFocusPicker(picker) {
  if (!picker) return
  toggleOpen(picker, false)
  picker.focus()
}

window.addEventListener("keydown", function (event) {
  var menuItem = event.target.closest(".spectrum-Menu-item")
  if (menuItem) {
    var menu = menuItem.closest(".spectrum-Menu")
    if (menuItem.classList.contains("spectrum-Menu-item")) {
      var items = Array.prototype.slice.call(
        menu.querySelectorAll(".spectrum-Menu-item:not(.is-disabled)")
      )
      var menuItemIndex = items.indexOf(menuItem)
      var newItemIndex = -1
      if (event.key === "ArrowDown") {
        newItemIndex = menuItemIndex + 1 < items.length ? menuItemIndex + 1 : 0
      } else if (event.key === "ArrowUp") {
        newItemIndex =
          menuItemIndex - 1 >= 0 ? menuItemIndex - 1 : items.length - 1
      } else if (event.key === "Home") {
        newItemIndex = 0
      } else if (event.key === "End") {
        newItemIndex = items.length - 1
      } else if (event.key === "Escape") {
        var picker = event.target.closest(".spectrum-Picker")
        closeAndFocusPicker(picker)
      } else if (event.key === "Enter") {
        handleMenuChange(menu, menuItem)

        closeAndFocusPicker(getPickerForMenu(menu))
        event.preventDefault()
      }
      if (newItemIndex !== -1) {
        items[newItemIndex].focus()

        // Don't scroll the list
        event.preventDefault()
      }
    }
  } else {
    if (event.key === "ArrowDown") {
      var picker = event.target.closest(".spectrum-Picker")
      if (picker) {
        toggleOpen(picker, true)
      }
    }
  }
})



function getPickerForMenu(menuOrMenuItem) {
  var popover = menuOrMenuItem.closest(".spectrum-Popover")
  return popover &&
    popover.previousElementSibling &&
    popover.previousElementSibling.matches(".spectrum-Picker")
    ? popover.previousElementSibling
    : null
}

function getPopoverForPicker(picker) {
  return picker &&
    picker.nextElementSibling &&
    picker.nextElementSibling.matches(".spectrum-Popover")
    ? picker.nextElementSibling
    : null
}

function handleMenuChange(menu, menuItem) {
  var value = menuItem.getAttribute("value")
  var menuLabel = menuItem.querySelector(".spectrum-Menu-itemLabel")
  var label = menuLabel.innerHTML

  var picker = getPickerForMenu(menu)
  if (!picker) return
  toggleOpen(picker, false)
  setPickerValue(picker, value, label)
}

window.addEventListener("click", function (event) {
  var menu = event.target.closest(".spectrum-Menu")

  var picker = event.target.closest(".spectrum-Picker")
  if (picker) {
    toggleOpen(picker)
  } else if (menu) {
    var popover = menu.closest(".spectrum-Popover")
    picker =
      popover.previousElementSibling &&
      popover.previousElementSibling.matches(".spectrum-Picker")
        ? popover.previousElementSibling
        : null

    var menuItem = event.target.closest(".spectrum-Menu-item")
    if (menuItem) {
      var menuLabel = menuItem.querySelector(".spectrum-Menu-itemLabel")
      if (menuLabel) {
        var pickerLabel = picker.querySelector(".spectrum-Picker-label")
        if (pickerLabel) {
          pickerLabel.innerHTML = menuLabel.innerHTML

          event.stopPropagation()
          handleMenuChange(menuItem.parentElement, menuItem)
        }
      }
    }
  } else {
    if (openPicker) {
      toggleOpen(openPicker, false)
    }
  }
})
