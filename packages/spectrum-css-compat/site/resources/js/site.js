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

  function loadExample(example) {
    function handleLoad() {
      var data;
      try {
        data = JSON.parse(this.responseText);
      }
      catch (err) {
        console.error('Could not load example ' + example + ': ' + err);
        return;
      }

      document.querySelector('.spectrum-Site-mainContainer').innerHTML = data.markup;
    }

    var req = new XMLHttpRequest();
    req.addEventListener('load', handleLoad);
    req.open('GET', './' + example + '.json');
    req.send();
  }

  function navigate(example) {
    const params = new URLSearchParams(location.search);
    params.set('example', example);
    window.history.replaceState({}, '', `${location.pathname}?${params}`);

    selectNavItem(example);

    loadExample(example);
  }

  if (window.location.search) {
    const params = new URLSearchParams(location.search);
    navigate(params.get('example'));
  }

  document.addEventListener('click', function(event) {
    var target = event.target;
    if (target.classList.contains('js-componentLink')) {
      navigate(target.getAttribute('data-example'));
      event.preventDefault();
    }
  });
});
