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
/* eslint-disable no-unused-vars */
/* global document, window, Element, loadIcons, URLSearchParams */

function setPickerValue(picker, value, label) {
  const menu = picker.nextElementSibling.querySelector(".spectrum-Menu");
  const menuItem = menu.querySelector(`.spectrum-Menu-item[value="${value}"]`);

  if (menuItem) {
    const selectedMenuItem = menu.querySelector(".spectrum-Menu-item.is-selected");
    if (selectedMenuItem) {
      selectedMenuItem.classList.remove("is-selected");
      selectedMenuItem.removeAttribute("aria-selected");
    }

    menuItem.classList.add("is-selected");
    menuItem.setAttribute("aria-selected", "true");

    if (!label) {
      const menuLabel = menuItem.querySelector(".spectrum-Menu-itemLabel");
      if (menuLabel) label = menuLabel.innerHTML;
    }
  }

  picker.setAttribute("value", value);

  const fieldButton = picker;
  if (fieldButton && label) {
    const pickerLabel = fieldButton.querySelector(".spectrum-Picker-label");
    if (pickerLabel) pickerLabel.innerHTML = label;
  }

  picker.dispatchEvent(new CustomEvent("change", {
    bubbles: true,
    detail: {
      label: label,
      value: value,
    },
  }))
}

window.addEventListener('DOMContentLoaded', function() {
  // Switcher
  const scalePicker = document.querySelector('#switcher-scale');
  const themePicker = document.querySelector('#switcher-theme');
  const directionPicker = document.querySelector('#switcher-direction');
  const varsPicker = document.querySelector('#switcher-vars-version');

  let switcher = window.switcher;
  if (typeof SpectrumSwitcher === 'undefined') {
    console.trace('SpectrumSwitcher not defined yet.');
  } else if (typeof switcher === 'undefined') {
    switcher = new SpectrumSwitcher({
      callback: function(event) {
        if (!setPickerValue) return;
        switch (event.property) {
          case 'scale':
            setPickerValue(scalePicker, event.value);
            break;
          case 'theme':
            setPickerValue(themePicker, event.value);
            break;
          case 'direction':
            setPickerValue(directionPicker, event.value);
            break;
          case 'vars':
            setPickerValue(varsPicker, event.value);
            break;
        }
      }
    });
  }

  // Sidebar + picker
  const sideBar = document.querySelector('#site-sidebar');
  const overlay = document.querySelector('#site-overlay');
  const scaleMQL = window.matchMedia('(max-width: 768px)');
  scaleMQL.addListener(handleScaleMQLChange);

  function handleScaleMQLChange() {
    if (typeof switcher === 'undefined') {
      console.trace('Switcher not defined yet.');
      return;
    };
    if (scaleMQL.matches) {
      switcher.scale = 'large';
    } else {
      switcher.scale = 'medium';
    }

    if (scalePicker) {
      setPickerValue(scalePicker, switcher.scale);
    }
  }

  document.body.addEventListener('change', function(event) {
    if (typeof switcher === 'undefined') {
      console.trace('Switcher not defined yet.');
      return;
    };

    if (event.target.id === 'switcher-scale') {
      switcher.scale = event.detail.value;
    }
    else if (event.target.id === 'switcher-theme') {
      switcher.theme = event.detail.value;
    }
    else if (event.target.id === 'switcher-direction') {
      switcher.direction = event.detail.value;
    }
    else if (event.target.id === 'switcher-vars-version') {
      switcher.varsVersion = event.detail.value;
    }
  });

  window.addEventListener('PageFastLoaded', function updateScalePickers() {
    if (typeof switcher === 'undefined') {
      console.trace('Switcher not defined yet.');
      return;
    };

    scalePicker = document.querySelector('#switcher-scale');
    themePicker = document.querySelector('#switcher-theme');
    directionPicker = document.querySelector('#switcher-direction');
    varsPicker = document.querySelector('#switcher-vars-version');
    if (scalePicker) {
      setPickerValue(scalePicker, switcher.scale);
    }
    if (themePicker) {
      setPickerValue(themePicker, switcher.theme);
    }
    if (directionPicker) {
      setPickerValue(directionPicker, switcher.direction);
    }
    if (varsPicker) {
      setPickerValue(varsPicker, switcher.varsVersion);
    }
  });

  var sidebarMQL = window.matchMedia('(max-width: 960px)');
  function handleSidebarMQLChange() {
    if (!sidebarMQL.matches) {
      // Get rid of the overlay if we resize while the sidebar is open
      hideSideBar();
    }
  }
  sidebarMQL.addListener(handleSidebarMQLChange);

  handleScaleMQLChange();
  handleSidebarMQLChange();

  function showSideBar() {
    if (sidebarMQL.matches) {
      if (overlay) overlay.addEventListener('click', hideSideBar);
      if (sideBar) sideBar.classList.add('is-open');
      if (overlay) overlay.classList.add('is-open');
    }
  }

  function hideSideBar() {
    if (overlay) {
      overlay.removeEventListener('click', hideSideBar);
      overlay.classList.remove('is-open');
    }

    if (sideBar) {
      sideBar.classList.remove('is-open');
    }

    if (window.siteSearch) {
      window.siteSearch.hideResults();
    }
  }

  document.querySelector('#site-menu')?.addEventListener('click', function(event) {
    if (sideBar?.classList.contains('is-open')) {
      hideSideBar();
    }
    else {
      showSideBar();
    }
  });

  // Search isn't supported on IE 11 and sideBar will not be exist in test mode
  if (typeof Search !== 'undefined' && document.querySelector('#site-search')) {
    window.siteSearch = new Search(document.querySelector('#site-search'))
  }

  window.addEventListener('SearchFocused', function() {
    showSideBar();

    // Immediately hide results, otherwise they show up in the wrong position since we're in the middle of animation
    siteSearch.hideResults();
  });
});

// Picker
let openPicker;

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
  } else if (openPicker) {
    toggleOpen(openPicker, false)
  }
});

class SpectrumSwitcher {
  constructor(options) {
    options = options || {};

    this._rootEl = document.body;
    this._theme = options.theme || 'light';
    this._scale = options.scale || 'medium';
    this._direction = options.direction || 'ltr';
    this._varsVersion = options.varsVersion || 'default';
    this._callback = options.callback || null;
  }

  set theme(theme) {
    // If they match, do nothing
    if (theme === this._theme) return;

    ['light', 'dark', 'darkest'].forEach((otherTheme) => {
      this._rootEl.classList.remove(`spectrum--${otherTheme}`);
    });

    this._rootEl.classList.add(`spectrum--${theme}`);

    this.updateCodeBlocks(theme);

    this._theme = theme;
  };

  get theme() {
    return this._theme;
  };

  set varsVersion(v) {
    // If they match, do nothing
    if (v === this._varsVersion) return;

    // default and express path names
    const defaultName = 'vars';
    const expressName = 'expressvars';

    // if the selection is 'default', switch the path to be 'express', and vice-versa
    const pathNameToUpdate = (v === 'default') ? expressName : defaultName;

    // get all relevant stylesheets that need to be switched
    const styleSheets = document.querySelectorAll(`link[href*="/components/${pathNameToUpdate}/"]`);

    // update each relevant stylesheet with the selected path
    [...styleSheets].map(sheet => {
      if (pathNameToUpdate === defaultName) {
        sheet.setAttribute('href', sheet.href.replaceAll(defaultName, expressName));
      } else {
        sheet.setAttribute('href', sheet.href.replaceAll(expressName, defaultName));
      }
    });

    if (varsVersion === 'express') {
      this._rootEl.classList.add('spectrum--express');
    }
    else {
      this._rootEl.classList.remove('spectrum--express');
    }

    this._varsVersion = varsVersion;
  };

  get varsVersion() {
    return this._varsVersion;
  };

  set scale(s) {
    // If they match, do nothing
    if (s === this._scale) return;

    ['medium', 'large'].forEach((otherScale) => {
      this._rootEl.classList.remove(`spectrum--${otherScale}`);
    });
    this._rootEl.classList.add(`spectrum--${s}`);

    this._scale = s;
  };

  get scale() {
    return this._scale;
  };

  set direction(d) {
    this._rootEl.setAttribute('dir', d);
    this._direction = d;
  };

  get direction() {
    return this._direction;
  };

  VarsVersionKeys = {
    'd': 'default',
    'e': 'express',
  };

  ThemeKeys = {
    '1': 'light',
    '2': 'dark',
    '3': 'darkest',
  };

  ScaleKeys = {
    'm': 'medium',
    'l': 'large'
  };

  DirectionKeys = {
    'r': 'rtl',
    'n': 'ltr'
  };

  keydown(event) {
    console.log(event);
    if (!event || !event.ctrlKey) return;

    const key = event.key.toLowerCase();

    let property;
    let value;
    if (value = this.ThemeKeys[key]) {
      property = 'theme';
    } else if (value = this.ScaleKeys[key]) {
      property = 'scale';
    } else if (value = this.DirectionKeys[key]) {
      property = 'direction';
    } else if (value = this.VarsVersionKeys[key]) {
      property = 'varsVersion';
    }

    this[property] = value;

    if (this._callback && typeof this._callback === 'function') {
      this._callback({ property, value });
    }
  }

  updateCodeBlocks(theme) {
    const prismLink = this._rootEl.querySelector('[data-prism]');
    const prismDarkLink = this._rootEl.querySelector('[data-prism-dark]');

    if (theme === 'dark' || theme === 'darkest') {
      if (!prismLink) return;
      if (!prismDarkLink) {
        prismDarkLink = document.createElement('link');
        prismDarkLink.setAttribute('rel', 'stylesheet');
        prismDarkLink.setAttribute('data-prism-dark', '');
        prismDarkLink.setAttribute('type', 'text/css');
        prismDarkLink.setAttribute('href', 'css/prism/prism-dark.min.css');
      }

      prismLink.parentElement.insertBefore(prismDarkLink, prismLink.nextElementSibling);
    } else if (prismDarkLink) {
      prismDarkLink.parentElement.removeChild(prismDarkLink);
    }
  }
}

document.addEventListener('keydown', SpectrumSwitcher.keydown);
