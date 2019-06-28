window.addEventListener('DOMContentLoaded', function() {
  var selectedNavItem = null;
  function selectNavItem(navItem) {
    if (selectedNavItem) {
      selectedNavItem.classList.remove('is-selected');
    }
    navItem.classList.add('is-selected');
    selectedNavItem = navItem;
  }

  function navigate(component, example) {
    const params = new URLSearchParams(location.search);
    params.set('component', component);
    params.set('example', example);
    window.history.replaceState({}, '', `${location.pathname}?${params}`);
  }

  if (window.location.search) {
    const params = new URLSearchParams(location.search);
    var iframe = document.querySelector('iframe');
    iframe.src = 'packages/' + params.get('component') + '/dist/docs/' + params.get('example') + '.html';
    var navItem = document.querySelector('[data-component="' + params.get('component') + '"][data-example="' + params.get('example') + '"]');
    if (navItem) {
      selectNavItem(navItem.parentElement);
    }
  }

  document.addEventListener('click', function(event) {
    var target = event.target;
    if (target.classList.contains('js-componentLink')) {
      navigate(target.getAttribute('data-component'), target.getAttribute('data-example'));
      selectNavItem(target.parentElement);
    }
  });
});
