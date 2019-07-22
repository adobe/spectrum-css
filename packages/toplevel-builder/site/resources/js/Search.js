function Search(el) {
  this.index = null;
  this.el = el;

  this.el.innerHTML = `
<form class="spectrum-Search js-form">
  <input type="search" placeholder="Search" name="search" autocomplete="off" class="spectrum-Textfield spectrum-Search-input js-input">
  <svg class="spectrum-Icon spectrum-UIIcon-Magnifier spectrum-Search-icon" focusable="false" aria-hidden="true">
    <use xlink:href="#spectrum-css-icon-Magnifier" />
  </svg>
  <button type="reset" value="Reset" class="spectrum-ClearButton js-clearButton" tabindex="-1" hidden>
    <svg class="spectrum-Icon spectrum-UIIcon-CrossSmall" focusable="false" aria-hidden="true">
      <use xlink:href="#spectrum-css-icon-CrossSmall" />
    </svg>
  </button>
</form>
<div class="spectrum-Popover spectrum-Site-searchResults js-popover">
</div>
`;

  this.form = this.el.querySelector('.js-form');
  this.popover = this.el.querySelector('.js-popover');
  this.input = this.el.querySelector('.js-input');
  this.clearButton = this.el.querySelector('.js-clearButton');

  this.clearButton.addEventListener('click', this.hideResults.bind(this));
  this.el.addEventListener('submit', this.handleSubmit.bind(this));
  this.el.addEventListener('reset', this.showHideClear.bind(this));
  this.input.addEventListener('keyup', this.handleKey.bind(this));

  this.popover.addEventListener('keyup', this.handlePopoverNavigation.bind(this));
  this.popover.addEventListener('click', this.hideResults.bind(this));
  this.el.addEventListener('focusout', function(e) {
    if (!this.el.contains(e.relatedTarget)) {
      this.hideResults();
    }
  }.bind(this));

  this.input.addEventListener('focus', function() {
    if (this.input.value.length) {
      this.doSearch();
    }
  }.bind(this));

  document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
      this.input.focus();
      this.input.classList.add('focus-ring');
      e.preventDefault();
    }
  }.bind(this));

  this.loadIndex();
  this.loadStore();
}

Search.Categories = [
  'components',
];

Search.CategoryNames = {
  components: 'Components'
};

function loadJSON(url, callback) {
  function handleLoad() {
    var object = null;
    try {
      object = JSON.parse(req.responseText);
    }
    catch (err) {
      console.error(`Failed to load JSON from ${url}: ${err}`);
      callback(err);
    }

    callback(null, object);
  }

  var req = new XMLHttpRequest();
  req.addEventListener('load', handleLoad.bind(this));
  req.open('GET', url);
  req.send();
}

Search.prototype.loadStore = function() {
  loadJSON('./store.json', function(err, object) {
    this.store = object;
  }.bind(this));
}

Search.prototype.loadIndex = function() {
  loadJSON('./index.json', function(err, object) {
    this.index = lunr.Index.load(object);
  }.bind(this));
}

Search.prototype.handleSubmit = function(event) {
  event.preventDefault();
};

Search.prototype.handleReset = function(event) {
  this.hideResults();
  this.showHideClear();
};

Search.prototype.showHideClear = function(event) {
  this.clearButton.hidden = this.input.value.length === 0;
};

Search.prototype.hideResults = function(event) {
  this.popover.classList.remove('is-open');
};

Search.prototype.showResults = function(event) {
  var inputRect = this.input.getBoundingClientRect();
  this.popover.style.top = `${inputRect.bottom + 10}px`;
  this.popover.style.left = `${inputRect.left}px`;
  this.popover.classList.add('is-open');
};

Search.prototype.handlePopoverNavigation = function(e) {
  let currentItem = document.activeElement;
  if (currentItem.classList.contains('spectrum-Menu-item')) {
    let items = Array.prototype.slice.call(this.popover.querySelectorAll('.spectrum-Menu-item'));
    let currentItemIndex = items.indexOf(currentItem);
    let newItemIndex = -1;
    if (e.key === 'ArrowDown') {
      newItemIndex = currentItemIndex + 1 < items.length ? currentItemIndex + 1 : 0;
    }
    else if (e.key === 'ArrowUp') {
      newItemIndex = currentItemIndex - 1 >= 0 ? currentItemIndex - 1 : items.length - 1;
    }
    else if (e.key === 'home') {
      newItemIndex = 0;
    }
    else if (e.key === 'end') {
      newItemIndex = items.length - 1;
    }
    if (newItemIndex !== -1) {
      items[newItemIndex].focus();
    }
  }
};

Search.prototype.handleKey = function(e) {
  if (e.key === 'ArrowDown') {
    let firstItem = this.popover.querySelector('.spectrum-Menu-item');
    if (firstItem) {
      firstItem.focus();
    }
  }
  else if (e.key === 'Enter') {
    let firstItem = this.popover.querySelector('.spectrum-Menu-item');
    if (firstItem) {
      firstItem.click();
      this.hideResults();
    }
  }
  else {
    this.showHideClear();
    if (this.input.value.length === 0) {
      this.hideResults();
    }
    else {
      this.doSearch();
    }
  }
};

Search.prototype.doSearch = function() {
  this.search(this.input.value);
};

Search.prototype.search = function(val) {
  this.searchVal = val;

  let components = [];

  let results = [];
  if (val.length > 2) {
    let searchParam = val.trim().split(' ').map((term) => `+${term}*`).join(' ');
    try {
      results = this.index.search(searchParam);
    }
    catch (err) {
      this.popover.innerHTML = `
<div class="spectrum-IllustratedMessage spectrum-Site-noSearchResults">
  <h2 class="spectrum-Heading spectrum-Heading--pageTitle spectrum-IllustratedMessage-heading">Search error</h2>
  <p class="spectrum-Body--secondary spectrum-IllustratedMessage-description"><em>${err}</em></p>
</div>
`;
      this.showResults();
      return;
    }
  }

  results = {
    length: results.length,
    components: results.map(function(result) {
      return this.store[result.ref];
    }, this)
  };

  let markup = `
<div>
  ${
    results.length === 0 ?
    `
    <div class="spectrum-IllustratedMessage spectrum-Site-noSearchResults">
      <h2 class="spectrum-Heading spectrum-Heading--pageTitle spectrum-IllustratedMessage-heading">No results found</h2>
      <p class="spectrum-Body--secondary spectrum-IllustratedMessage-description"><em>Try another search term.</em></p>
    </div>
    ` : `
    <ul class="spectrum-Menu" role="listbox">
      ${
        Search.Categories.map(function(category) {
          return results[category].length ?
            `
            <li role="group" aria-labelledby="searchResults-${category}">
              <span class="spectrum-Menu-sectionHeading" id="searchResults-${category}" aria-hidden="true">${Search.CategoryNames[category]}</span>
              <ul class="spectrum-Menu" role="presentation">
                ${
                  results[category].map(function(result, i) {
                    return `
                    <a class="spectrum-Menu-item js-fastLoad" href="${result.href}" role="option">
                      <span class="spectrum-Menu-itemLabel">${result.name}</span>
                    </a>
                    `
                  }).join('\n')
                }
              </ul>
            </li>
            ` : ''
        }).join('\n')
      }
    </ul>
    `
  }
</div>
`;

  this.popover.innerHTML = markup;
  this.showResults();
};

