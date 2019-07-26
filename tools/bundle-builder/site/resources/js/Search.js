function Search(el) {
  this.index = null;
  this.hasResults = false;
  this.el = el;

  this.el.innerHTML = `
<div class="spectrum-Site-search" role="search">
  <form class="spectrum-Search js-form" role="combobox" aria-expanded="false" aria-owns="search-results-listbox" aria-haspopup="listbox">
    <input type="search" placeholder="Search" name="search" autocomplete="off" class="spectrum-Textfield spectrum-Search-input js-input" aria-autocomplete="list" aria-owns="search-results-listbox" aria-label="Search">
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
    <ul class="spectrum-Menu js-searchResults" id="search-results-listbox" role="listbox" aria-label="Search">
    </ul>
    <div class="spectrum-IllustratedMessage spectrum-Site-noSearchResults js-searchError">
      <div class="spectrum-IllustratedMessage spectrum-Site-noSearchResults">
        <h2 class="spectrum-Heading spectrum-Heading--pageTitle spectrum-IllustratedMessage-heading">No results found</h2>
        <p class="spectrum-Body--secondary spectrum-IllustratedMessage-description"><em>Try another search term.</em></p>
      </div>
    </div>
  </div>
</div>
`;

  this.form = this.el.querySelector('.js-form');
  this.popover = this.el.querySelector('.js-popover');
  this.input = this.el.querySelector('.js-input');
  this.searchResults = this.el.querySelector('.js-searchResults');
  this.searchError = this.el.querySelector('.js-searchError');
  this.clearButton = this.el.querySelector('.js-clearButton');
  document.body.appendChild(this.popover);

  this.clearButton.addEventListener('click', this.hideResults.bind(this));
  this.el.addEventListener('submit', this.handleSubmit.bind(this));
  this.el.addEventListener('reset', this.showHideClear.bind(this));
  this.input.addEventListener('keypress', this.handleKey.bind(this));

  this.popover.addEventListener('keydown', this.handlePopoverNavigation.bind(this));
  this.popover.addEventListener('click', this.hideResults.bind(this));

  this.popover.addEventListener('focusin', this.handleListInteraction.bind(this));
  this.popover.addEventListener('mouseenter', this.handleListInteraction.bind(this));
  this.popover.addEventListener('keydown', this.handleListInteraction.bind(this));

  this.el.addEventListener('focusout', function(e) {
    if (!this.el.contains(e.relatedTarget) && !this.popover.contains(e.relatedTarget)) {
      // Don't do this right away or Safari gets all pissy
      setTimeout(this.hideResults.bind(this), 100);
    }
  }.bind(this));

  this.input.addEventListener('focus', function() {
    if (this.input.value.length) {
      this.doSearch();
    }

    var event = new Event('SearchFocused');
    window.dispatchEvent(event);
  }.bind(this));

  document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'f') {
      this.input.focus();
      this.input.classList.add('focus-ring');
      this.input.setSelectionRange(0, this.input.value.length);
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
  this.form.setAttribute('aria-expanded', 'false');
  this.popover.classList.remove('is-open');
};

Search.prototype.showResults = function(event) {
  this.form.setAttribute('aria-expanded', 'true');
  var inputRect = this.input.getBoundingClientRect();
  this.popover.style.top = `${inputRect.bottom + 10}px`;
  this.popover.style.left = `${inputRect.left}px`;
  this.popover.classList.add('is-open');

  let firstItem = this.popover.querySelector('.spectrum-Menu-item');
  if (firstItem) {
    // Provide some visual indication that we will navigate here on enter
    firstItem.classList.add('is-highlighted');
  }
};

Search.prototype.handleListInteraction = function(e) {
  let firstItem = this.popover.querySelector('.spectrum-Menu-item');
  if (firstItem) {
    firstItem.classList.remove('is-highlighted');
  }
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
    else if (e.key === 'Home') {
      newItemIndex = 0;
    }
    else if (e.key === 'End') {
      newItemIndex = items.length - 1;
    }
    else if (e.key === 'Escape') {
      this.input.focus();
      this.hideResults();
    }
    if (newItemIndex !== -1) {
      items[newItemIndex].focus();

      // Don't scroll the list
      e.preventDefault();
    }
  }
};

Search.prototype.handleKey = function(e) {
  if (e.key === 'ArrowDown') {
    let firstItem = this.popover.querySelector('.spectrum-Menu-item');
    if (firstItem) {
      this.showResults();
      firstItem.focus();
    }
  }
  else if (e.key === 'Enter') {
    let firstItem = this.popover.querySelector('.spectrum-Menu-item');
    if (firstItem) {
      firstItem.click();
      this.input.blur();
      this.hideResults();
    }
  }
  else if (e.key === 'Escape') {
    this.hideResults();
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

  let r = [];
  if (val.length > 1) {
    let searchParam = val.trim().split(' ').map((term) => `${term}* ${term}`).join(' ');
    try {
      r = this.index.search(searchParam);
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

  let results = {
    length: r.length,
    components: r.map(function(result) {
      return this.store[result.ref];
    }, this)
  };

  this.hasResults = !!r.length;

  if (results.length) {
    this.searchError.hidden = true;
    this.searchResults.hidden = false;

    let markup = `
<ul class="spectrum-Menu" id="search-results-listbox" role="listbox" aria-label="Search">
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
`;
    this.searchResults.innerHTML = markup;

  }
  else {
    this.searchError.hidden = false;
    this.searchResults.hidden = true;
  }

  this.showResults();
};

