function openDialog(dialog, withOverlay) {
  if (withOverlay !== false) {
    document.getElementById("spectrum-underlay").classList.add("is-open")
  }

  dialog.classList.add("is-open")

  // Support wrapped dialogs
  var innerDialog = dialog.querySelector(".spectrum-Modal")
  if (!innerDialog) return
  innerDialog.classList.add("is-open")
}

function closeDialog(dialog) {
  document.getElementById("spectrum-underlay").classList.remove("is-open")
  dialog.classList.remove("is-open")

  // Support wrapped dialogs
  var innerDialog = dialog.querySelector(".spectrum-Modal")
  if (!innerDialog) return
  innerDialog.classList.remove("is-open")

  setTimeout(function () {
    dialog.classList.remove("spectrum-CSSExample-dialog")
  }, 130)
}
