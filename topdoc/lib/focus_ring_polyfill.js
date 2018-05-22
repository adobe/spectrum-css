// This is focus-ring-polyfill - since it's small and we're trying to remove internal 
// dependencies, it shall live here

// Provides explicit indication of elements receiving focus through keyboard interaction rather than mouse or touch.
(function(doc) {
  // In case file is imported in SSR context, don't polyfill anything
  if (!doc) {
    return;
  }

  var NAVIGATION_KEYS = [
    'Tab',
    'ArrowUp',
    'ArrowRight',
    'ArrowDown',
    'ArrowLeft',
    'Home',
    'End',
    'PageUp',
    'PageDown',
    'Enter',
    ' ',
    'Escape',

    /* IE9 and Firefox < 37 */
    'Up',
    'Right',
    'Down',
    'Left',
    'Esc'
  ];
  var keyboardFocus = false;
  var elements = doc.getElementsByClassName('focus-ring');

  function onKeydownHandler(event) {
    if (event.ctrlKey || event.altKey || event.metaKey || NAVIGATION_KEYS.indexOf(event.key) === -1) {
      return;
    }
    keyboardFocus = true;

    if (doc.activeElement && doc.activeElement !== doc.body) {
      doc.activeElement.classList.add('focus-ring');
    }
  }

  function onMousedownHandler() {
    keyboardFocus = false;

    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.remove('focus-ring');
    }

  }

  function onFocusHandler(event) {
    if (keyboardFocus) {
      event.target.classList.add('focus-ring');
    }
  }

  function onBlurHandler(event) {
    event.target.classList.remove('focus-ring');
  }

  doc.addEventListener('keydown', onKeydownHandler, true);
  doc.addEventListener('mousedown', onMousedownHandler, true);
  doc.addEventListener('focus', onFocusHandler, true);
  doc.addEventListener('blur', onBlurHandler, true);
}(document));