var switcher = new Switcher({
  method: 'vars'
});

document.addEventListener('DOMContentLoaded', function() {
  switcher.theme = 'light';
  switcher.scale = 'medium';

  var themeKeys = {
    '1': 'lightest',
    '2': 'light',
    '3': 'dark',
    '4': 'darkest',
  };
  var scaleKeys = {
    'm': 'medium',
    'l': 'large'
  };
  document.addEventListener('keydown', function(event) {
    if (event.ctrlKey) {
      if (themeKeys[event.key]) {
        switcher.theme = themeKeys[event.key];
      }
      else if (scaleKeys[event.key]) {
        switcher.scale = scaleKeys[event.key];
      }
    }
  });
});
