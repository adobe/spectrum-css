var currentDialog = null;

function openDialog(dialog, withOverlay) {
  if (withOverlay !== false) {
    document.getElementById('spectrum-underlay').classList.add('is-open');
  }

  if (dialog.parentNode.classList.contains('spectrum-Dialog-wrapper')) {
    dialog.parentNode.classList.add('is-open');
  }

  dialog.classList.add('is-open');

  currentDialog = dialog;
}

function closeDialog(dialog) {
  document.getElementById('spectrum-underlay').classList.remove('is-open');
  dialog.classList.remove('is-open');

  if (dialog.parentNode.classList.contains('spectrum-Dialog-wrapper')) {
    dialog.parentNode.classList.remove('is-open');
  }

  if (dialog === currentDialog) {
    currentDialog = null;
  }
}

function closeCurrentDialog() {
  if (currentDialog) {
    closeDialog(currentDialog);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('spectrum-underlay').addEventListener('click', closeCurrentDialog);
});
