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
/* eslint-disable no-unused-vars */
/* global document, window, Element, loadIcons, URLSearchParams */

'use strict';

loadIcons('../components/icons/spectrum-css-icons.svg');

// Workflow icons disabled for now
// loadIcons('components/icons/spectrum-icons.svg');

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
    dialog.classList.remove('spectrum-CSSExample-dialog');
  }, 10);
}

// Show and hide code samples
function toggleMarkupVisibility(event) {
  event.preventDefault();
  var exampleMarkup = event.target.closest('.spectrum-CSSExample-markup');
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
    document.body.classList.remove('spectrum--' + otherScale);
  });
  document.body.classList.add('spectrum--' + scale);

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
});

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
