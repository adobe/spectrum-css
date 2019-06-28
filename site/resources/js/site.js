window.addEventListener('DOMContentLoaded', function() {
  if (window.location.search) {
    const params = new URLSearchParams(location.search);
    var iframe = document.querySelector('iframe');
    iframe.src = 'packages/' + params.get('component') + '/dist/docs/' + params.get('example') + '.html';
  }

  document.addEventListener('click', function(event) {
    var target = event.target;
    if (target.classList.contains('js-componentLink')) {
      navigate(target.getAttribute('data-component'), target.getAttribute('data-example'));
    }
  });
});

function navigate(component, example) {
  const params = new URLSearchParams(location.search);
  params.set('component', component);
  params.set('example', example);
  window.history.replaceState({}, '', `${location.pathname}?${params}`);
}
