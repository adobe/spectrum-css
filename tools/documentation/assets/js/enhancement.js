/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

// Load switch functionality from components/switch/metadata/enhancement.js
// Load asset card functionality from components/assetcard/metadata/enhancement.js
// Load rating functionality from components/rating/metadata/enhancement.js
// Load textfield functionality from components/textfield/metadata/enhancement.js

// Load Inputgroup functionality from components/Inputgroup/metadata/enhancement.js
// Load Stepper functionality from components/stepper/metadata/enhancement.js
// Load Picker functionality from components/picker/metadata/enhancement.js
// Load Treeview functionality from components/treeview/metadata/enhancement.js
// Load Accordion functionality from components/accordion/metadata/enhancement.js
// Load Cyclebutton functionality from components/cyclebutton/metadata/enhancement.js
// Load Sliders functionality from components/slider/metadata/enhancement.js
// Load Dial functionality from components/dial/metadata/enhancement.js

//Dialog
function openDialog(dialog, withOverlay) {
  if (withOverlay !== false) {
    document.getElementById('spectrum-underlay').classList.add('is-open');
  }

  dialog.classList.add('is-open');

  // Support wrapped dialogs
  var innerDialog = dialog.querySelector('.spectrum-Modal');
  if (innerDialog) {
    innerDialog.classList.add('is-open');
  }
}

function closeDialog(dialog) {
  document.getElementById('spectrum-underlay').classList.remove('is-open');
  dialog.classList.remove('is-open');

  // Support wrapped dialogs
  var innerDialog = dialog.querySelector('.spectrum-Modal');
  if (innerDialog) {
    innerDialog.classList.remove('is-open');
  }

  setTimeout(function() {
    dialog.classList.remove('spectrum-CSSExample-dialog');
  }, 130);
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
  if (value > 0 && value <= 50) {
    angle = -180 + (value / 50 * 180);
    submask1.style.transform = 'rotate(' + angle + 'deg)';
    submask2.style.transform = 'rotate(-180deg)';
  } else if (value > 50) {
    angle = -180 + (value - 50) / 50 * 180;
    submask1.style.transform = 'rotate(0deg)';
    submask2.style.transform = 'rotate(' + angle + 'deg)';
  }
}



animateCircleLoaders();

