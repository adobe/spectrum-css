(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{Vdly:function(e,s){const r=[{name:"Breadcrumbs",examples:[{id:"breadcrumb",name:"Standard",status:"Verified",markup:'<nav>\n  <ul class="spectrum-Breadcrumbs">\n    <li class="spectrum-Breadcrumbs-item">\n      <div class="spectrum-Breadcrumbs-itemLink" role="link" tabindex="0">Nav Root</div>\n      <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightSmall spectrum-Breadcrumbs-itemSeparator" focusable="false" aria-hidden="true">\n        <use xlink:href="#spectrum-css-icon-ChevronRightSmall" />\n      </svg>\n    </li>\n    <li class="spectrum-Breadcrumbs-item">\n      <div class="spectrum-Breadcrumbs-itemLink" role="link" tabindex="0">Trend</div>\n      <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightSmall spectrum-Breadcrumbs-itemSeparator" focusable="false" aria-hidden="true">\n        <use xlink:href="#spectrum-css-icon-ChevronRightSmall" />\n      </svg>\n    </li>\n    <li class="spectrum-Breadcrumbs-item">\n      <a class="spectrum-Breadcrumbs-itemLink" role="link" aria-current="page">January 2019 Assets</a>\n    </li>\n  </ul>\n</nav>\n'},{id:"breadcrumb",name:"Dragged",status:"Verified",markup:'<nav>\n  <ul class="spectrum-Breadcrumbs">\n    <li class="spectrum-Breadcrumbs-item">\n      <div class="spectrum-Breadcrumbs-itemLink" role="link" tabindex="0">Nav Root</div>\n      <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightSmall spectrum-Breadcrumbs-itemSeparator" focusable="false" aria-hidden="true">\n        <use xlink:href="#spectrum-css-icon-ChevronRightSmall" />\n      </svg>\n    </li>\n    <li class="spectrum-Breadcrumbs-item is-dragged">\n      <div class="spectrum-Breadcrumbs-itemLink" role="link" tabindex="0">Trend</div>\n      <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightSmall spectrum-Breadcrumbs-itemSeparator" focusable="false" aria-hidden="true">\n        <use xlink:href="#spectrum-css-icon-ChevronRightSmall" />\n      </svg>\n    </li>\n    <li class="spectrum-Breadcrumbs-item">\n      <a class="spectrum-Breadcrumbs-itemLink" role="link" aria-current="page">January 2019 Assets</a>\n    </li>\n  </ul>\n</nav>\n'},{id:"breadcrumb",name:"Nested",status:"Verified",markup:'<nav>\n  <ul class="spectrum-Breadcrumbs">\n    <li class="spectrum-Breadcrumbs-item">\n      <button class="spectrum-ActionButton spectrum-ActionButton--quiet">\n        <svg class="spectrum-Icon spectrum-UIIcon-FolderBreadcrumb spectrum-Breadcrumbs-folder" focusable="false" aria-hidden="true">\n          <use xlink:href="#spectrum-css-icon-FolderBreadcrumb" />\n        </svg>\n      </button>\n      <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightSmall spectrum-Breadcrumbs-itemSeparator" focusable="false" aria-hidden="true">\n        <use xlink:href="#spectrum-css-icon-ChevronRightSmall" />\n      </svg>\n    </li>\n    <li class="spectrum-Breadcrumbs-item">\n      <div class="spectrum-Breadcrumbs-itemLink" role="link" tabindex="0">Sub Item</div>\n      <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightSmall spectrum-Breadcrumbs-itemSeparator" focusable="false" aria-hidden="true">\n        <use xlink:href="#spectrum-css-icon-ChevronRightSmall" />\n      </svg>\n    </li>\n    <li class="spectrum-Breadcrumbs-item">\n      <div class="spectrum-Breadcrumbs-itemLink" role="link" tabindex="0">Trend</div>\n      <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightSmall spectrum-Breadcrumbs-itemSeparator" focusable="false" aria-hidden="true">\n        <use xlink:href="#spectrum-css-icon-ChevronRightSmall" />\n      </svg>\n    </li>\n    <li class="spectrum-Breadcrumbs-item">\n      <a class="spectrum-Breadcrumbs-itemLink" role="link" aria-current="page">January 2019 Assets</a>\n    </li>\n  </ul>\n</nav>\n'},{id:"breadcrumb",name:"Nested (root visible)",status:"Verified",markup:'<nav>\n  <ul class="spectrum-Breadcrumbs">\n    <li class="spectrum-Breadcrumbs-item">\n      <div class="spectrum-Breadcrumbs-itemLink" role="link" tabindex="0">Nav Root</div>\n      <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightSmall spectrum-Breadcrumbs-itemSeparator" focusable="false" aria-hidden="true">\n        <use xlink:href="#spectrum-css-icon-ChevronRightSmall" />\n      </svg>\n    </li>\n    <li class="spectrum-Breadcrumbs-item">\n      <button class="spectrum-ActionButton spectrum-ActionButton--quiet">\n        <svg class="spectrum-Icon spectrum-UIIcon-FolderBreadcrumb spectrum-Breadcrumbs-folder" focusable="false" aria-hidden="true">\n          <use xlink:href="#spectrum-css-icon-FolderBreadcrumb" />\n        </svg>\n      </button>\n      <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightSmall spectrum-Breadcrumbs-itemSeparator" focusable="false" aria-hidden="true">\n        <use xlink:href="#spectrum-css-icon-ChevronRightSmall" />\n      </svg>\n    </li>\n    <li class="spectrum-Breadcrumbs-item">\n      <div class="spectrum-Breadcrumbs-itemLink" role="link" tabindex="0">Trend</div>\n      <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightSmall spectrum-Breadcrumbs-itemSeparator" focusable="false" aria-hidden="true">\n        <use xlink:href="#spectrum-css-icon-ChevronRightSmall" />\n      </svg>\n    </li>\n    <li class="spectrum-Breadcrumbs-item">\n      <a class="spectrum-Breadcrumbs-itemLink" role="link" aria-current="page">January 2019 Assets</a>\n    </li>\n  </ul>\n</nav>\n'},{id:"breadcrumb-multiline",name:"Multiline",status:"Verified",markup:'<nav>\n  <ul class="spectrum-Breadcrumbs spectrum-Breadcrumbs--multiline">\n    <li class="spectrum-Breadcrumbs-item">\n      <a class="spectrum-Breadcrumbs-itemLink" href="#">Nav Root</a>\n      <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightSmall spectrum-Breadcrumbs-itemSeparator" focusable="false" aria-hidden="true">\n        <use xlink:href="#spectrum-css-icon-ChevronRightSmall" />\n      </svg>\n    </li>\n    <li class="spectrum-Breadcrumbs-item">\n      <a class="spectrum-Breadcrumbs-itemLink" role="link" tabindex="0">Trendy</a>\n      <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightSmall spectrum-Breadcrumbs-itemSeparator" focusable="false" aria-hidden="true">\n        <use xlink:href="#spectrum-css-icon-ChevronRightSmall" />\n      </svg>\n    </li>\n    <li class="spectrum-Breadcrumbs-item">\n      <a class="spectrum-Breadcrumbs-itemLink" role="link" aria-current="page">January 2019 Assets</a>\n    </li>\n  </ul>\n</nav>\n'},{id:"breadcrumb-multiline",name:"Multiline (dragged)",status:"Verified",markup:'<nav>\n  <ul class="spectrum-Breadcrumbs spectrum-Breadcrumbs--multiline">\n    <li class="spectrum-Breadcrumbs-item">\n      <a class="spectrum-Breadcrumbs-itemLink" href="#">Nav Root</a>\n      <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightSmall spectrum-Breadcrumbs-itemSeparator" focusable="false" aria-hidden="true">\n        <use xlink:href="#spectrum-css-icon-ChevronRightSmall" />\n      </svg>\n    </li>\n    <li class="spectrum-Breadcrumbs-item is-dragged">\n      <a class="spectrum-Breadcrumbs-itemLink" role="link" tabindex="0">Trendy</a>\n      <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightSmall spectrum-Breadcrumbs-itemSeparator" focusable="false" aria-hidden="true">\n        <use xlink:href="#spectrum-css-icon-ChevronRightSmall" />\n      </svg>\n    </li>\n    <li class="spectrum-Breadcrumbs-item">\n      <a class="spectrum-Breadcrumbs-itemLink" role="link" aria-current="page">January 2019 Assets</a>\n    </li>\n  </ul>\n</nav>\n'},{id:"breadcrumb-multiline",name:"Multiline Nested",status:"Verified",markup:'<nav>\n  <ul class="spectrum-Breadcrumbs spectrum-Breadcrumbs--multiline">\n    <li class="spectrum-Breadcrumbs-item">\n      <button class="spectrum-ActionButton spectrum-ActionButton--quiet">\n        <svg class="spectrum-Icon spectrum-UIIcon-FolderBreadcrumb spectrum-Breadcrumbs-folder" focusable="false" aria-hidden="true">\n          <use xlink:href="#spectrum-css-icon-FolderBreadcrumb" />\n        </svg>\n      </button>\n      <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightSmall spectrum-Breadcrumbs-itemSeparator" focusable="false" aria-hidden="true">\n        <use xlink:href="#spectrum-css-icon-ChevronRightSmall" />\n      </svg>\n    </li>\n    <li class="spectrum-Breadcrumbs-item">\n      <a class="spectrum-Breadcrumbs-itemLink" href="#">Sub Item</a>\n      <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightSmall spectrum-Breadcrumbs-itemSeparator" focusable="false" aria-hidden="true">\n        <use xlink:href="#spectrum-css-icon-ChevronRightSmall" />\n      </svg>\n    </li>\n    <li class="spectrum-Breadcrumbs-item">\n      <a class="spectrum-Breadcrumbs-itemLink" role="link" tabindex="0">Trendy</a>\n      <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightSmall spectrum-Breadcrumbs-itemSeparator" focusable="false" aria-hidden="true">\n        <use xlink:href="#spectrum-css-icon-ChevronRightSmall" />\n      </svg>\n    </li>\n    <li class="spectrum-Breadcrumbs-item">\n      <a class="spectrum-Breadcrumbs-itemLink" role="link" aria-current="page">January 2019 Assets</a>\n    </li>\n  </ul>\n</nav>\n'},{id:"breadcrumb-multiline",name:"Multiline Nested (root visible)",status:"Verified",markup:'<nav>\n  <ul class="spectrum-Breadcrumbs spectrum-Breadcrumbs--multiline">\n    <li class="spectrum-Breadcrumbs-item">\n      <a class="spectrum-Breadcrumbs-itemLink" href="#">Nav Root</a>\n      <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightSmall spectrum-Breadcrumbs-itemSeparator" focusable="false" aria-hidden="true">\n        <use xlink:href="#spectrum-css-icon-ChevronRightSmall" />\n      </svg>\n    </li>\n    <li class="spectrum-Breadcrumbs-item">\n      <button class="spectrum-ActionButton spectrum-ActionButton--quiet">\n        <svg class="spectrum-Icon spectrum-UIIcon-FolderBreadcrumb spectrum-Breadcrumbs-folder" focusable="false" aria-hidden="true">\n          <use xlink:href="#spectrum-css-icon-FolderBreadcrumb" />\n        </svg>\n      </button>\n      <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightSmall spectrum-Breadcrumbs-itemSeparator" focusable="false" aria-hidden="true">\n        <use xlink:href="#spectrum-css-icon-ChevronRightSmall" />\n      </svg>\n    </li>\n    <li class="spectrum-Breadcrumbs-item">\n      <a class="spectrum-Breadcrumbs-itemLink" role="link" tabindex="0">Trendy</a>\n      <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightSmall spectrum-Breadcrumbs-itemSeparator" focusable="false" aria-hidden="true">\n        <use xlink:href="#spectrum-css-icon-ChevronRightSmall" />\n      </svg>\n    </li>\n    <li class="spectrum-Breadcrumbs-item">\n      <a class="spectrum-Breadcrumbs-itemLink" role="link" aria-current="page">January 2019 Assets</a>\n    </li>\n  </ul>\n</nav>\n'},{id:"breadcrumb-compact",name:"Compact",status:"Verified",markup:'<nav>\n  <ul class="spectrum-Breadcrumbs spectrum-Breadcrumbs--compact">\n    <li class="spectrum-Breadcrumbs-item">\n      <a class="spectrum-Breadcrumbs-itemLink" href="#">Nav Root</a>\n      <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightSmall spectrum-Breadcrumbs-itemSeparator" focusable="false" aria-hidden="true">\n        <use xlink:href="#spectrum-css-icon-ChevronRightSmall" />\n      </svg>\n    </li>\n    <li class="spectrum-Breadcrumbs-item">\n      <a class="spectrum-Breadcrumbs-itemLink" role="link" tabindex="0">Trendy</a>\n      <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightSmall spectrum-Breadcrumbs-itemSeparator" focusable="false" aria-hidden="true">\n        <use xlink:href="#spectrum-css-icon-ChevronRightSmall" />\n      </svg>\n    </li>\n    <li class="spectrum-Breadcrumbs-item">\n      <a class="spectrum-Breadcrumbs-itemLink" role="link" aria-current="page">January 2019 Assets</a>\n    </li>\n  </ul>\n</nav>\n'},{id:"breadcrumb-compact",name:"Compact Nested",status:"Verified",markup:'<nav>\n  <ul class="spectrum-Breadcrumbs spectrum-Breadcrumbs--compact">\n    <li class="spectrum-Breadcrumbs-item">\n      <button class="spectrum-ActionButton spectrum-ActionButton--quiet">\n        <svg class="spectrum-Icon spectrum-UIIcon-FolderBreadcrumb spectrum-Breadcrumbs-folder" focusable="false" aria-hidden="true">\n          <use xlink:href="#spectrum-css-icon-FolderBreadcrumb" />\n        </svg>\n      </button>\n      <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightSmall spectrum-Breadcrumbs-itemSeparator" focusable="false" aria-hidden="true">\n        <use xlink:href="#spectrum-css-icon-ChevronRightSmall" />\n      </svg>\n    </li>\n    <li class="spectrum-Breadcrumbs-item">\n      <a class="spectrum-Breadcrumbs-itemLink" href="#">Sub Item</a>\n      <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightSmall spectrum-Breadcrumbs-itemSeparator" focusable="false" aria-hidden="true">\n        <use xlink:href="#spectrum-css-icon-ChevronRightSmall" />\n      </svg>\n    </li>\n    <li class="spectrum-Breadcrumbs-item">\n      <a class="spectrum-Breadcrumbs-itemLink" role="link" tabindex="0">Trendy</a>\n      <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightSmall spectrum-Breadcrumbs-itemSeparator" focusable="false" aria-hidden="true">\n        <use xlink:href="#spectrum-css-icon-ChevronRightSmall" />\n      </svg>\n    </li>\n    <li class="spectrum-Breadcrumbs-item">\n      <a class="spectrum-Breadcrumbs-itemLink" role="link" aria-current="page">January 2019 Assets</a>\n    </li>\n  </ul>\n</nav>\n'},{id:"breadcrumb-compact",name:"Compact Nested (root visible)",status:"Verified",markup:'<nav>\n  <ul class="spectrum-Breadcrumbs spectrum-Breadcrumbs--compact">\n    <li class="spectrum-Breadcrumbs-item">\n      <a class="spectrum-Breadcrumbs-itemLink" href="#">Nav Root</a>\n      <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightSmall spectrum-Breadcrumbs-itemSeparator" focusable="false" aria-hidden="true">\n        <use xlink:href="#spectrum-css-icon-ChevronRightSmall" />\n      </svg>\n    </li>\n    <li class="spectrum-Breadcrumbs-item">\n      <button class="spectrum-ActionButton spectrum-ActionButton--quiet">\n        <svg class="spectrum-Icon spectrum-UIIcon-FolderBreadcrumb spectrum-Breadcrumbs-folder" focusable="false" aria-hidden="true">\n          <use xlink:href="#spectrum-css-icon-FolderBreadcrumb" />\n        </svg>\n      </button>\n      <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightSmall spectrum-Breadcrumbs-itemSeparator" focusable="false" aria-hidden="true">\n        <use xlink:href="#spectrum-css-icon-ChevronRightSmall" />\n      </svg>\n    </li>\n    <li class="spectrum-Breadcrumbs-item">\n      <a class="spectrum-Breadcrumbs-itemLink" role="link" tabindex="0">Trendy</a>\n      <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightSmall spectrum-Breadcrumbs-itemSeparator" focusable="false" aria-hidden="true">\n        <use xlink:href="#spectrum-css-icon-ChevronRightSmall" />\n      </svg>\n    </li>\n    <li class="spectrum-Breadcrumbs-item">\n      <a class="spectrum-Breadcrumbs-itemLink" role="link" aria-current="page">January 2019 Assets</a>\n    </li>\n  </ul>\n</nav>\n'},{id:"breadcrumb-title",name:"Title",status:"Deprecated",details:"Use the `multiline` variant instead",markup:'<nav>\n  <ul class="spectrum-Breadcrumbs spectrum-Breadcrumbs--title">\n    <li class="spectrum-Breadcrumbs-item">\n      <a class="spectrum-Breadcrumbs-itemLink" href="#">Home</a>\n      <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightSmall spectrum-Breadcrumbs-itemSeparator" focusable="false" aria-hidden="true">\n        <use xlink:href="#spectrum-css-icon-ChevronRightSmall" />\n      </svg>\n    </li>\n    <li class="spectrum-Breadcrumbs-item">\n      <a class="spectrum-Breadcrumbs-itemLink" role="link" tabindex="0">Playground</a>\n      <svg class="spectrum-Icon spectrum-UIIcon-ChevronRightSmall spectrum-Breadcrumbs-itemSeparator" focusable="false" aria-hidden="true">\n        <use xlink:href="#spectrum-css-icon-ChevronRightSmall" />\n      </svg>\n    </li>\n    <li class="spectrum-Breadcrumbs-item">\n      <h1 class="spectrum-Heading--pageTitle">\n        <a class="spectrum-Breadcrumbs-itemLink" role="link" aria-current="page">Sliders</a>\n      </h1>\n    </li>\n  </ul>\n</nav>\n'}]}];e.exports=r.length<=1?r[0]:r}}]);