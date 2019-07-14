window.addEventListener('DOMContentLoaded', function() {
  var selectedNavItem = null;
  function selectNavItem(example) {
    var navItem = document.querySelector('[data-example="' + example + '"]');
    if (navItem) {
      if (selectedNavItem) {
        selectedNavItem.classList.remove('is-selected');
      }
      navItem.classList.add('is-selected');
      selectedNavItem = navItem;
    }
  }

  function loadPage(href) {
    function handleLoad() {
      var template = document.createElement('template');
      template.innerHTML = this.responseText;

      var newMainContainer = template.content.querySelector('.spectrum-Site-mainContainer');

      if (newMainContainer) {
        var oldMainContainer = document.querySelector('.spectrum-Site-mainContainer');
        oldMainContainer.parentNode.insertBefore(newMainContainer, oldMainContainer);
        oldMainContainer.parentNode.removeChild(oldMainContainer);
      }
      else {
        console.error('Could not find main container within loaded HTML file');
      }
    }

    var req = new XMLHttpRequest();
    req.addEventListener('load', handleLoad);
    req.open('GET', './' + href);
    req.send();
  }

  function navigate(href) {
    window.history.replaceState({}, '', href);

    selectNavItem(href);

    loadPage(href);
  }

  document.addEventListener('click', function(event) {
    var target = event.target.closest('a');
    if (target && target.classList.contains('js-fastLoad')) {
      navigate(target.getAttribute('href'));
      event.preventDefault();
    }
  });
});
