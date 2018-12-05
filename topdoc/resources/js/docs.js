/* eslint-disable no-unused-vars */
/* global document, window, Element, loadIcons, URLSearchParams */

'use strict';

// Polyfill closest() on IE 11
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function(s) {
    var el = this;
    var ancestor = this;
    if (!document.documentElement.contains(el)) return null;
    do {
      if (ancestor.matches(s)) return ancestor;
      ancestor = ancestor.parentElement;
    } while (ancestor !== null);
    return null;
  };
}

var curColorstop = 'light';
function changeCSS(colorStop) {
  curColorstop = colorStop;
  Array.prototype.forEach.call(document.getElementsByClassName('spectrum'), function(el) {
    el.classList.remove('spectrum--lightest');
    el.classList.remove('spectrum--light');
    el.classList.remove('spectrum--dark');
    el.classList.remove('spectrum--darkest');
    el.classList.add('spectrum--'+colorStop);
  });

  if (colorStop === 'light' || colorStop === 'lightest') {
    document.querySelector('link[data-prism]').setAttribute('href', 'css/vendor/prism.css');
  }
  else {
    document.querySelector('link[data-prism]').setAttribute('href', 'css/vendor/prism-tomorrow.css');
  }

  setURLParams();
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
    dialog.classList.remove('cssdocs-Dialog');
  }, 10);
}

// Show and hide code samples
function toggleMarkupVisibility(event) {
  event.preventDefault();
  var exampleMarkup = event.target.closest('.cssdocs-example-markup');
  var style = window.getComputedStyle(exampleMarkup);
  var isOpen = exampleMarkup.classList.contains('is-open');
  event.target.innerHTML = isOpen ? 'Show Markup' : 'Hide Markup';
  exampleMarkup.classList.toggle('is-open');
}

document.addEventListener('click', function(event) {
  if (event.target.classList.contains('js-markup-toggle')) {
    toggleMarkupVisibility(event);
  }
});

window.addEventListener('click', function(event) {
  var isDisabled = event.target.closest('.spectrum-TreeView-item') !== null &&
    event.target.closest('.spectrum-TreeView-item').classList.contains('is-disabled');
  var el;
  if ((el = event.target.closest('.spectrum-TreeView-item')) !== null && !isDisabled) {
    el.classList.toggle('is-open');
    event.preventDefault();
  }
});

// Display Slider focus style
function toggleSliderFocus(event) {
  if (!event.target.classList.contains('spectrum-Slider-input')) {
    return;
  }
  var func = event.type === 'focus' ? 'add' : 'remove';
  var handle = event.target.closest('.spectrum-Slider-handle');
  handle.classList[func]('is-focused');
}

var currentTitle = null;
var titles;
function setHashFromScroll() {
  var scrollTop = document.querySelector('.sdldocs-components').scrollTop;
  var minTitleCloseness = Infinity;
  var closestTitle = null;
  for (var i = 0; i < titles.length; i++) {
    var title = titles[i];
    var titleCloseness = Math.abs(scrollTop - title.offsetTop);
    if (titleCloseness < minTitleCloseness) {
      minTitleCloseness = titleCloseness;
      closestTitle = title;
    }

    if (closestTitle !== null && titleCloseness > minTitleCloseness) {
      // We're not finding closer titles now
      break;
    }
  }
  if (closestTitle && currentTitle !== closestTitle) {
    selectNavItem(closestTitle.getAttribute('href'));
    currentTitle = closestTitle;
  }
}

var selectedNavItem = null;
var nav;
function selectNavItem(href) {
  var navLink = document.querySelector('.sdldocs-nav [href="' + href + '"]');
  if (navLink) {
    var navItem = navLink.parentElement;

    if (navItem != selectedNavItem) {
      if (selectedNavItem) {
        selectedNavItem.classList.remove('is-selected');
      }
      navItem.classList.add('is-selected');

      if (navItem.offsetTop + navItem.offsetHeight > nav.scrollTop + nav.offsetHeight) {
        // Scroll down to the item
        nav.scrollTop = navItem.offsetTop - nav.offsetHeight + navItem.offsetHeight;
      }
      else if (navItem.offsetTop < nav.scrollTop) {
        // Scroll up to the item
        nav.scrollTop = navItem.offsetTop;
      }

      selectedNavItem = navItem;
    }
  }
}

window.ignoreScroll = false;

var curScale = 'medium';
var curMethod = 'standalone';
var scaleAbbreviations = {
  'medium': 'md',
  'large': 'lg'
};
function changeScale(scale, method, noState) {
  method = method || curMethod;
  scale = scale || curScale;

  if (method === 'diff') {
    document.querySelector('link[data-spectrum-core]').setAttribute('href', '../spectrum-core.css');
    document.querySelector('link[data-spectrum-core-diff]').setAttribute('href', '../spectrum-core-diff.css');
  }
  else if (method === 'standalone') {
    if (scale !== 'medium') {
      document.querySelector('link[data-spectrum-core]').setAttribute('href', '../spectrum-core-' + scaleAbbreviations[scale] + '.css');
    }
    else {
      document.querySelector('link[data-spectrum-core]').setAttribute('href', '../spectrum-core.css');
    }
    document.querySelector('link[data-spectrum-core-diff]').setAttribute('href', '');
  }

  Object.keys(scaleAbbreviations).forEach(function(otherScale) {
    document.documentElement.classList.remove('spectrum--' + otherScale);
  });
  document.documentElement.classList.add('spectrum--' + scale);

  // Scroll to the same place we were before
  if (currentTitle) {
    var count = 0;
    window.ignoreScroll = true;
    document.querySelector('.sdldocs-components').scrollTop = currentTitle.offsetTop;
    var interval = window.setInterval(function() {
      document.querySelector('.sdldocs-components').scrollTop = currentTitle.offsetTop;
      count++;
      if (count > 50) {
        clearInterval(interval);
        window.ignoreScroll = false;
      }
    }, 10);
  }

  curScale = scale;
  curMethod = method;

  if (!noState) {
    setURLParams();
  }
}

var scaleDropdown;
var colorstopDropdown;
function setURLParams(hash) {
  hash = hash || window.location.hash;
  window.history.pushState({}, '', '?color='+curColorstop+'&scale='+curScale+'&method='+curMethod+hash);

  // Set radio buttons
  scaleDropdown.value = curScale+','+curMethod;
  colorstopDropdown.value = curColorstop;
}

window.addEventListener('DOMContentLoaded', function() {
  // Get elements once
  titles = document.getElementsByClassName('js-hashtitle');
  nav = document.querySelector('.sdldocs-nav');
  scaleDropdown = document.querySelector('#scale');
  colorstopDropdown = document.querySelector('#colorstop');

  var searchParams = new URLSearchParams(document.location.search.substring(1));
  // Set scale from params
  var colorStop = searchParams.get('color');
  var scale = searchParams.get('scale');
  var method = searchParams.get('method');
  if (scale || method) {
    curColorstop = colorStop;
    curScale = scale;
    curMethod = method;
    changeCSS(curColorstop);
    changeScale(curScale, curMethod, true);
  }

  if (window.location.hash) {
    // Scroll to the hash
    // This is required for refreshes when the size is changed
    var el = document.querySelector(window.location.hash);
    if (el) {
      document.querySelector('.sdldocs-components').scrollTop = el.offsetTop;
    }
  }
  else {
    // Make it #official
    setHashFromScroll();
  }

  // Set the hash while scrolling
  var scrollTimeDelay = 100;
  var hashTimeout;
  document.querySelector('.sdldocs-components').addEventListener('scroll', function() {
    clearTimeout(hashTimeout);
    if (window.ignoreScroll) {
      return;
    }
    hashTimeout = setTimeout(setHashFromScroll, scrollTimeDelay);
  });
});

document.addEventListener('focus', toggleSliderFocus, true);
document.addEventListener('blur', toggleSliderFocus, true);

// Load and store references to icon SVGs
// var mediumIcons;
// var largeIcons;
// AdobeSpectrum.loadIcons('../icons/spectrum-css-icons-medium.svg', function(err, svg) {
//   mediumIcons = svg;
// });
// AdobeSpectrum.loadIcons('../icons/spectrum-css-icons-large.svg', function(err, svg) {
//   largeIcons = svg;

//   // Immediately remove from the DOM -- it will be added back when we switch scale
//   largeIcons.parentElement.removeChild(largeIcons);
// });
loadIcons('../icons/spectrum-css-icons.svg');
loadIcons('../icons/spectrum-icons.svg');

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

window.addEventListener('DOMContentLoaded', function() {
  Array.prototype.forEach.call(document.querySelectorAll('.spectrum-Slider'), function(slider) {
    makeSlider(slider);
  });
  Array.prototype.forEach.call(document.querySelectorAll('.spectrum-Dial'), function(dial) {
    makeDial(dial);
  });
});
