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
})

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
  closestElement.classList[func]('is-focused');
}

document.addEventListener('focus', toggleInputGroupFocus, true);
document.addEventListener('blur', toggleInputGroupFocus, true);

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
    }
  }
  function onMouseUp(e, sliderHandle) {
    window.removeEventListener('mouseup', onMouseUp);
    window.removeEventListener('mousemove', onMouseMove);
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

    if (handle === leftHandle) {
      if (percent < parseFloat(rightHandle.style.left)) {
        handle.style.left = percent + '%';
        leftTrack.style.width = percent + '%';
      }
    }
    else {
      if (percent > parseFloat(leftHandle.style.left)) {
        handle.style.left = percent + '%';
        rightTrack.style.width = (100 - percent) + '%';
      }
    }
    middleTrack.style.left = leftHandle.style.left;
    middleTrack.style.right = (100 - parseFloat(rightHandle.style.left)) + '%';
  }

  // Set initial track position
  var startPercent = parseFloat(leftHandle.style.left);
  var endPercent = parseFloat(rightHandle.style.left);
  leftTrack.style.width = startPercent + '%';
  middleTrack.style.left = startPercent + '%';
  middleTrack.style.right = (100 - endPercent) + '%';
  rightTrack.style.width = (100 - endPercent) + '%';

  if (!slider.classList.contains('is-disabled')) {
    slider.addEventListener('mousedown', onMouseDown);
  }
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
    var bufferedAmount = parseInt(handle.style.left, 10) + parseInt(rightBuffer.style.width, 10);
  }

  function onMouseDown(e, sliderHandle) {
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mousemove', onMouseMove);
  }
  function onMouseUp(e, sliderHandle) {
    window.removeEventListener('mouseup', onMouseUp);
    window.removeEventListener('mousemove', onMouseMove);
  }
  function onMouseMove(e, sliderHandle) {
    var sliderOffsetWidth = slider.offsetWidth;
    var sliderOffsetLeft = slider.offsetLeft + slider.offsetParent.offsetLeft;

    var x = Math.max(Math.min(e.x-sliderOffsetLeft, sliderOffsetWidth), 0);
    var percent = (x / sliderOffsetWidth) * 100;
    if (leftTrack && rightTrack && !isColor) {
      leftTrack.style.width = percent + '%';
      rightTrack.style.width = (100 - percent) + '%';
    }
    handle.style.left = percent + '%';

    if (buffers.length) {
      if (percent >= bufferedAmount) {
        // Don't show right buffer bar
        rightBuffer.style.width = 0;
        rightBuffer.style.left = 'auto';
        rightBuffer.style.right = 'auto';
        leftBuffer.style.width = bufferedAmount + '%';
      }
      else {
        leftBuffer.style.width = percent + '%';
        rightBuffer.style.width = 'auto';
        rightBuffer.style.left = percent + '%';
        rightBuffer.style.right = (100 - bufferedAmount) + '%';
      }
    }

    if (fill) {
      fill.style.left = (percent < 50 ? percent : 50) + '%';
      fill.style.width = (percent < 50 ? 50 - percent : percent - 50) + '%';
      if (percent > 50) {
        fill.classList.add('spectrum-Slider-fill--right');
      }
      else {
        fill.classList.remove('spectrum-Slider-fill--right');
      }
    }
  }

  // Set initial track position
  var percent = parseInt(handle.style.left, 10);
  if (leftTrack && rightTrack && !isColor) {
    leftTrack.style.width = percent + '%';
    rightTrack.style.width = (100 - percent) + '%';
  }

  if (!slider.classList.contains('is-disabled')) {
    slider.addEventListener('mousedown', onMouseDown);
  }
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
  }
  function onMouseUp(e, sliderHandle) {
    window.removeEventListener('mouseup', onMouseUp);
    window.removeEventListener('mousemove', onMouseMove);
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
}

function closeDialog(dialog) {
  document.getElementById('spectrum-underlay').classList.remove('is-open');
  dialog.classList.remove('is-open');
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
