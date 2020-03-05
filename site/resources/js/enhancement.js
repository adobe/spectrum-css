/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

// Rating
(function() {
  function setFocus(rating, focused) {
    rating.classList[focused ? 'add' : 'remove']('is-focused');
  }

  function setValue(rating, value) {
    var input = rating.querySelector('.spectrum-Rating-input');
    input.value = value;
    Array.prototype.forEach.call(rating.querySelectorAll('.spectrum-Rating-icon'), function(el, index) {
      el.classList[index <= value - 1 ? 'add' : 'remove']('is-selected');
      el.classList[index === value - 1 ? 'add' : 'remove']('is-currentValue');
    });
  }

  document.addEventListener('focusin', function(event) {
    var rating = event.target.closest('.spectrum-Rating');

    if (rating) {
      setFocus(rating, true);
    }
  });

  document.addEventListener('focusout', function(event) {
    var rating = event.target.closest('.spectrum-Rating');

    if (rating) {
      setFocus(rating, false);
    }
  });

  document.addEventListener('change', function(event) {
    var input = event.target.closest('.spectrum-Rating-input');
    if (input) {
      if (input.hasAttribute('readonly')) {
        event.preventDefault();
        input.value = event.defaultValue;
      }
      else {
        var value = parseInt(input.value, 10);
        var rating = event.target.closest('.spectrum-Rating');
        setValue(rating, value);
      }
    }
  });

  document.addEventListener('click', function(event) {
    var icon = event.target.closest('.spectrum-Rating-icon');
    if (icon) {
      var rating = event.target.closest('.spectrum-Rating');
      var value = Array.prototype.indexOf.call(rating.querySelectorAll('.spectrum-Rating-icon'), icon) + 1;
      setValue(rating, value);
    }
  });
}());

// Dropdown
(function() {
  var openDropdown = null;

  function toggleOpen(dropdown, force) {
    var isOpen = force !== undefined ? force : !dropdown.classList.contains('is-open');
    var fieldButton = dropdown.querySelector('.spectrum-Dropdown-trigger');
    var popover = dropdown.querySelector('.spectrum-Dropdown-popover');

    dropdown[isOpen ? 'setAttribute' : 'removeAttribute']('aria-expanded', 'true');
    dropdown.classList[isOpen ? 'add' : 'remove']('is-open');
    fieldButton.classList[isOpen ? 'add' : 'remove']('is-selected');

    if (popover) {
      popover.style.zIndex = 1;
      popover.classList[isOpen ? 'add' : 'remove']('is-open');
    }

    if (isOpen) {
      openDropdown = dropdown;
    }
  }

  function closeAndFocusDropdown(dropdown) {
    if (dropdown) {
      toggleOpen(dropdown, false);
      var fieldButton = dropdown.querySelector('.spectrum-Dropdown-trigger');
      if (fieldButton) {
        fieldButton.focus();
      }
    }
  }

  window.addEventListener('keydown', function(event) {
    var menuItem = event.target.closest('.spectrum-Menu-item');
    if (menuItem) {
      var menu = menuItem.closest('.spectrum-Menu');
      if (menuItem.classList.contains('spectrum-Menu-item')) {
        var items = Array.prototype.slice.call(menu.querySelectorAll('.spectrum-Menu-item:not(.is-disabled)'));
        var menuItemIndex = items.indexOf(menuItem);
        var newItemIndex = -1;
        if (event.key === 'ArrowDown') {
          newItemIndex = menuItemIndex + 1 < items.length ? menuItemIndex + 1 : 0;
        }
        else if (event.key === 'ArrowUp') {
          newItemIndex = menuItemIndex - 1 >= 0 ? menuItemIndex - 1 : items.length - 1;
        }
        else if (event.key === 'Home') {
          newItemIndex = 0;
        }
        else if (event.key === 'End') {
          newItemIndex = items.length - 1;
        }
        else if (event.key === 'Escape') {
          var dropdown = event.target.closest('.spectrum-Dropdown');
          closeAndFocusDropdown(dropdown);
        }
        else if (event.key === 'Enter') {
          handleMenuChange(menu, menuItem);

          var dropdown = event.target.closest('.spectrum-Dropdown');
          closeAndFocusDropdown(dropdown);
          event.preventDefault();
        }
        if (newItemIndex !== -1) {
          items[newItemIndex].focus();

          // Don't scroll the list
          event.preventDefault();
        }
      }
    }
    else {
      if (event.key === 'ArrowDown') {
        var dropdown = event.target.closest('.spectrum-Dropdown');
        if (dropdown) {
          var menu = dropdown.querySelector('.spectrum-Menu');
          if (menu) {
            var menuItem = menu.querySelector('.spectrum-Menu-item');
            if (menuItem) {
              event.preventDefault();
              menuItem.focus();
            }
          }
        }
      }
    }
  });

  function setDropdownValue(dropdown, value, label) {
    var menu = dropdown.querySelector('.spectrum-Menu');
    var menuItem = dropdown.querySelector('.spectrum-Menu-item[value="'+value+'"]');

    if (menuItem) {
      var selectedMenuItem = menu.querySelector('.spectrum-Menu-item.is-selected');
      if (selectedMenuItem) {
        selectedMenuItem.classList.remove('is-selected');
        selectedMenuItem.removeAttribute('aria-selected');
      }

      menuItem.classList.add('is-selected');
      menuItem.setAttribute('aria-selected', 'true');

      if (!label) {
        var menuLabel = menuItem.querySelector('.spectrum-Menu-itemLabel');
        if (menuLabel) {
          label = menuLabel.innerHTML;
        }
      }
    }

    dropdown.setAttribute('value', value);
    var fieldButton = dropdown.querySelector('.spectrum-Dropdown-trigger');
    if (fieldButton && label) {
      var dropdownLabel = fieldButton.querySelector('.spectrum-Dropdown-label');
      if (dropdownLabel) {
        dropdownLabel.innerHTML = label;
      }
    }

    var event = new CustomEvent('change', {
      bubbles: true,
      detail: {
        label: label,
        value: value
      }
    });

    dropdown.dispatchEvent(event);
  }

  function handleMenuChange(menu, menuItem) {
    var value = menuItem.getAttribute('value');
    var menuLabel = menuItem.querySelector('.spectrum-Menu-itemLabel');
    var label = menuLabel.innerHTML;

    var dropdown = menu.closest('.spectrum-Dropdown');
    if (dropdown) {
      toggleOpen(dropdown, false);
      setDropdownValue(dropdown, value, label);
    }
  }

  window.addEventListener('click', function(event) {
    var dropdown = event.target.closest('.spectrum-Dropdown');

    if (dropdown) {
      toggleOpen(dropdown);

      var menuItem = event.target.closest('.spectrum-Menu-item');
      if (menuItem) {
        var fieldButton = dropdown.querySelector('.spectrum-Dropdown-trigger');
        var menuLabel = menuItem.querySelector('.spectrum-Menu-itemLabel');
        if (menuLabel) {
          var dropdownLabel = fieldButton.querySelector('.spectrum-Dropdown-label');
          if (dropdownLabel) {
            dropdownLabel.innerHTML = menuLabel.innerHTML;

            event.stopPropagation();
            handleMenuChange(menuItem.parentElement, menuItem);
          }
        }
      }
    }
    else {
      if (openDropdown) {
        toggleOpen(openDropdown, false);
      }
    }
  });

  window.setDropdownValue = setDropdownValue;
}());

// Treeview
window.addEventListener('click', function(event) {
  var isDisabled = event.target.closest('.spectrum-TreeView-item') !== null &&
    event.target.closest('.spectrum-TreeView-item').classList.contains('is-disabled');
  var el;
  if ((el = event.target.closest('.spectrum-TreeView-item')) !== null && !isDisabled) {
    el.classList.toggle('is-open');
    event.preventDefault();
  }
});

// Accordion
window.addEventListener('click', function(event) {
  let heading = event.target.closest('.spectrum-Accordion-itemHeading');
  if (heading) {
    let item = event.target.closest('.spectrum-Accordion-item');
    let isDisabled = item.classList.contains('is-disabled');
    if (!isDisabled) {
      item.classList.toggle('is-open');
      event.preventDefault();
    }
  }
});

// Cyclebutton
window.addEventListener('click', function(event) {
  var button = event.target.closest('.spectrum-CycleButton');
  if (button) {
    var icons = button.querySelectorAll('.spectrum-Icon');
    var currentIcon = button.querySelector('.spectrum-Icon.is-selected');
    var currentIconIndex = Array.prototype.slice.call(icons).indexOf(currentIcon);
    if (currentIcon) {
      currentIcon.classList.remove('is-selected');

      var newIndex = currentIconIndex + 1 < icons.length ? currentIconIndex + 1 : 0;
      icons[newIndex].classList.add('is-selected');
    }
  }
});

// Display InputGroup focus style
function toggleInputGroupFocus(event) {
  var classList = event.target.classList;
  var closestSelector;
  // target within InputGroup
  if (classList.contains('spectrum-InputGroup-field') ||
      classList.contains('spectrum-FieldButton')) {
    closestSelector = '.spectrum-InputGroup';
  }
  // target within a Slider
  else if (classList.contains('spectrum-Slider-input')) {
    closestSelector = '.spectrum-Slider-handle';
  }
  else {
    return;
  }
  var func = event.type === 'focus' ? 'add' : 'remove';
  var closestElement = event.target.closest(closestSelector);
  if (closestElement) {
    closestElement.classList[func]('is-focused');
  }
}

document.addEventListener('focus', toggleInputGroupFocus, true);
document.addEventListener('blur', toggleInputGroupFocus, true);

function isRTL() {
  return document.documentElement.getAttribute('dir') === 'rtl';
}

function toggleRTL(left, right) {
  return isRTL() ? right : left;
}

// Sliders
function makeDoubleSlider(slider) {
  var tracks = slider.querySelectorAll('.spectrum-Slider-track');
  var leftTrack = tracks[0];
  var middleTrack = tracks[1];
  var rightTrack = tracks[2];
  var handles = slider.querySelectorAll('.spectrum-Slider-handle');
  var leftHandle = handles[0];
  var rightHandle = handles[1];

  var handle = null;
  function onMouseDown(e, sliderHandle) {
    if (e.target.classList.contains('spectrum-Slider-handle')) {
      handle = e.target;
      window.addEventListener('mouseup', onMouseUp);
      window.addEventListener('mousemove', onMouseMove);
      document.body.classList.add('u-isGrabbing');
    }
  }
  function onMouseUp(e, sliderHandle) {
    window.removeEventListener('mouseup', onMouseUp);
    window.removeEventListener('mousemove', onMouseMove);
    document.body.classList.remove('u-isGrabbing');
    handle = null;
  }
  function onMouseMove(e, sliderHandle) {
    if (!handle) {
      return;
    }

    var sliderOffsetWidth = slider.offsetWidth;
    var sliderOffsetLeft = slider.offsetLeft + slider.offsetParent.offsetLeft;

    var x = Math.max(Math.min(e.x-sliderOffsetLeft, sliderOffsetWidth), 0);
    var percent = (x / sliderOffsetWidth) * 100;

    if (isRTL()) {
      percent = 100 - percent;
    }

    if (handle === leftHandle) {
      if (percent < parseFloat(rightHandle.style[toggleRTL('left', 'right')])) {
        handle.style[toggleRTL('left', 'right')] = percent + '%';
        handle.style[toggleRTL('right', 'left')] = 'auto';
        leftTrack.style.width = percent + '%';
      }
    }
    else {
      if (percent > parseFloat(leftHandle.style[toggleRTL('left', 'right')])) {
        handle.style[toggleRTL('left', 'right')] = percent + '%';
        handle.style[toggleRTL('right', 'left')] = 'auto';
        rightTrack.style.width = (100 - percent) + '%';
      }
    }
    middleTrack.style[toggleRTL('left', 'right')] = leftHandle.style[toggleRTL('left', 'right')];
    middleTrack.style[toggleRTL('right', 'left')] = (100 - parseFloat(rightHandle.style[toggleRTL('left', 'right')])) + '%';
  }

  function init() {
    if (isRTL()) {
      leftHandle.style.right = leftHandle.style.left;
      leftHandle.style.left = leftHandle.style.right;
      rightHandle.style.right = rightHandle.style.left;
      rightHandle.style.left = rightHandle.style.right;
    }

    // Set initial track position
    var startPercent = parseFloat(leftHandle.style[toggleRTL('left', 'right')]);
    var endPercent = parseFloat(rightHandle.style[toggleRTL('left', 'right')]);
    leftTrack.style.width = startPercent + '%';
    middleTrack.style[toggleRTL('left', 'right')] = startPercent + '%';
    middleTrack.style[toggleRTL('right', 'left')] = (100 - endPercent) + '%';
    rightTrack.style.width = (100 - endPercent) + '%';

    if (!slider.classList.contains('is-disabled')) {
      slider.addEventListener('mousedown', onMouseDown);
    }
  }

  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'attributes' && mutation.attributeName === "dir") {
        init();
      }
    });
  });

  observer.observe(document.documentElement, {
    attributes: true //configure it to listen to attribute changes
  });

  init();
}

function makeSlider(slider) {
  var tracks = slider.querySelectorAll('.spectrum-Slider-track');
  var leftTrack = tracks[0];
  var rightTrack = tracks[1];
  var handles = slider.querySelectorAll('.spectrum-Slider-handle');
  var handle = handles[0];
  var isColor = slider.classList.contains('spectrum-Slider--color');
  var fill = slider.querySelector('.spectrum-Slider-fill');

  if (handles.length > 1) {
    makeDoubleSlider(slider);
    return;
  }

  var buffers = slider.querySelectorAll('.spectrum-Slider-buffer');
  if (buffers.length) {
    var leftBuffer = buffers[0];
    var rightBuffer = buffers[1];
    var bufferedAmount = parseInt(handle.style[toggleRTL('left', 'right')], 10) + parseInt(rightBuffer.style.width, 10);
  }

  function onMouseDown(e, sliderHandle) {
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);
    document.body.classList.add('u-isGrabbing');
  }
  function onMouseUp(e, sliderHandle) {
    window.removeEventListener('mouseup', onMouseUp);
    window.removeEventListener('mousemove', onMouseMove);
    document.body.classList.remove('u-isGrabbing');
  }
  function onMouseMove(e, sliderHandle) {
    var sliderOffsetWidth = slider.offsetWidth;
    var sliderOffsetLeft = slider.offsetLeft + slider.offsetParent.offsetLeft;

    var x = Math.max(Math.min(e.x-sliderOffsetLeft, sliderOffsetWidth), 0);
    var percent = (x / sliderOffsetWidth) * 100;

    if (isRTL()) {
      percent = 100 - percent;
    }

    if (leftTrack && rightTrack && !isColor) {
      leftTrack.style.width = percent + '%';
      rightTrack.style.width = (100 - percent) + '%';
    }

    handle.style[toggleRTL('left', 'right')] = percent + '%';
    handle.style[toggleRTL('right', 'left')] = 'auto';

    if (buffers.length) {
      if (percent >= bufferedAmount) {
        // Hide the right buffer
        rightBuffer.style.width = 0;
        rightBuffer.style.left = 'auto';
        rightBuffer.style.right = 'auto';

        // This disgusting calculation takes into account the pretty gap
        var bufferStyle = window.getComputedStyle(leftBuffer);
        var handleGap = parseInt(bufferStyle[toggleRTL('paddingRight', 'paddingLeft')], 10);
        var handlePosition = toggleRTL(handle.offsetLeft, handle.parentElement.offsetWidth - handle.offsetLeft) + handle.offsetWidth / 2;
        var bufferMaxWidth = handlePosition;

        // The left buffer is offset by the gap and some margin, so we have to add that back to make it actually hit the desired value
        var bufferOffset = parseInt(bufferStyle[toggleRTL('marginLeft', 'marginRight')], 10) * -1;
        var actualMiddle = handle.parentElement.offsetWidth / 2 + bufferOffset + handleGap;

        // Keep the left buffer to account for the nasty gaps
        leftBuffer.style.width = Math.min(bufferMaxWidth, actualMiddle) + 'px';
      }
      else {
        leftBuffer.style.width = percent + '%';
        rightBuffer.style.width = 'auto';
        rightBuffer.style[toggleRTL('left', 'right')] = percent + '%';
        rightBuffer.style[toggleRTL('right', 'left')] = (100 - bufferedAmount) + '%';
      }
    }

    if (fill) {
      fill.style[toggleRTL('left', 'right')] = (percent < 50 ? percent : 50) + '%';
      fill.style.width = (percent < 50 ? 50 - percent : percent - 50) + '%';
      if (percent > 50) {
        fill.classList.add('spectrum-Slider-fill--right');
      }
      else {
        fill.classList.remove('spectrum-Slider-fill--right');
      }
    }
  }
  function init() {
    if (isRTL()) {
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
          tracks[0].style.background = tracks[0].style.background.replace('right', 'left');
        }
      }
    }

    // Set initial track position
    var percent = parseInt(handle.style[toggleRTL('left', 'right')], 10);
    if (leftTrack && rightTrack && !isColor) {
      leftTrack.style.width = percent + '%';
      rightTrack.style.width = (100 - percent) + '%';
    }

    if (!slider.classList.contains('is-disabled')) {
      slider.addEventListener('mousedown', onMouseDown);
    }
  }

  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'attributes' && mutation.attributeName === "dir") {
        init();
      }
    });
  });

  observer.observe(document.documentElement, {
    attributes: true //configure it to listen to attribute changes
  });

  init();
}

function makeDial(dial) {
  var dialOffsetWidth = dial.offsetWidth;
  var dialOffsetLeft = dial.offsetLeft + dial.offsetParent.offsetLeft;
  var input = dial.querySelector('input');
  var handle = dial.querySelector('.spectrum-Dial-handle');
  var min = -45;
  var max = 225;
  function onMouseDown(e, sliderHandle) {
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);
    document.body.classList.add('u-isGrabbing');
  }
  function onMouseUp(e, sliderHandle) {
    window.removeEventListener('mouseup', onMouseUp);
    window.removeEventListener('mousemove', onMouseMove);
    document.body.classList.remove('u-isGrabbing');
  }
  function onMouseMove(e, sliderHandle) {
    var x = Math.max(Math.min(e.x - dialOffsetLeft, dialOffsetWidth), 0);
    var percent = (x / dialOffsetWidth) * 100;

    var deg = percent * 0.01 * (max - min) + min;
    handle.style.transform = 'rotate('+ deg + 'deg'+')';
  }

  if (!dial.classList.contains('is-disabled')) {
    dial.addEventListener('mousedown', onMouseDown);
  }
}

function openDialog(dialog, withOverlay) {
  if (withOverlay !== false) {
    document.getElementById('spectrum-underlay').classList.add('is-open');
  }

  dialog.classList.add('is-open');

  // Support wrapped dialogs
  var innerDialog = dialog.querySelector('.spectrum-Dialog');
  if (innerDialog) {
    innerDialog.classList.add('is-open');
  }
}

function closeDialog(dialog) {
  document.getElementById('spectrum-underlay').classList.remove('is-open');
  dialog.classList.remove('is-open');

  // Support wrapped dialogs
  var innerDialog = dialog.querySelector('.spectrum-Dialog');
  if (innerDialog) {
    innerDialog.classList.remove('is-open');
  }

  setTimeout(function() {
    dialog.classList.remove('spectrum-CSSExample-dialog');
  }, 10);
}

function animateCircleLoaders() {
  var value = 0;
  setInterval(function() {
    var loaders = document.querySelectorAll('.spectrum-CircleLoader:not(spectrum-CircleLoader--indeterminate)');
    if (loaders.length) {
      changeLoaders(loaders, value++);
      if (value >= 100) {
        value = 0;
      }
    }
  }, 500);
}

function changeLoaders(nodeList, value) {
  Array.prototype.slice.call(nodeList).forEach(function(loader) {
    changeLoader(loader, value);
  });
}

function changeLoader(loader, value, submask1, submask2) {
  submask1 = submask1 || loader.querySelector('.spectrum-CircleLoader-fillSubMask1');
  submask2 = submask2 || loader.querySelector('.spectrum-CircleLoader-fillSubMask2');
  var angle;
  if(value > 0 && value <= 50) {
    angle = -180 + (value/50 * 180);
    submask1.style.transform = 'rotate('+angle+'deg)';
    submask2.style.transform = 'rotate(-180deg)';
  }
  else if (value > 50) {
    angle = -180 + (value-50)/50 * 180;
    submask1.style.transform = 'rotate(0deg)';
    submask2.style.transform = 'rotate('+angle+'deg)';
  }
}

function enhanceAll() {
  Array.prototype.forEach.call(document.querySelectorAll('.spectrum-Slider'), function(slider) {
    makeSlider(slider);
  });

  Array.prototype.forEach.call(document.querySelectorAll('.spectrum-Dial'), function(dial) {
    makeDial(dial);
  });
}

animateCircleLoaders();
window.addEventListener('PageFastLoaded', enhanceAll);
window.addEventListener('DOMContentLoaded', enhanceAll);
