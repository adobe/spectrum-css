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

/**
 * @description global method for picker which is required for every component ui
 * @param {*} picker 
 * @param {*} value 
 * @param {*} label 
 */
function setPickerValue(picker, value, label) {
    var menu = picker.nextElementSibling.querySelector(".spectrum-Menu")
    var menuItem = menu.querySelector(
      '.spectrum-Menu-item[value="' + value + '"]'
    )
  
    if (menuItem) {
      var selectedMenuItem = menu.querySelector(".spectrum-Menu-item.is-selected")
      if (selectedMenuItem) {
        selectedMenuItem.classList.remove("is-selected")
        selectedMenuItem.removeAttribute("aria-selected")
      }
  
      menuItem.classList.add("is-selected")
      menuItem.setAttribute("aria-selected", "true")
  
      if (!label) {
        var menuLabel = menuItem.querySelector(".spectrum-Menu-itemLabel")
        if (menuLabel) {
          label = menuLabel.innerHTML
        }
      }
    }
  
    picker.setAttribute("value", value)
    var fieldButton = picker
    if (fieldButton && label) {
      var pickerLabel = fieldButton.querySelector(".spectrum-Picker-label")
      if (pickerLabel) {
        pickerLabel.innerHTML = label
      }
    }
  
    var event = new CustomEvent("change", {
      bubbles: true,
      detail: {
        label: label,
        value: value,
      },
    })
  
    picker.dispatchEvent(event)
  }


  window.setPickerValue = setPickerValue
