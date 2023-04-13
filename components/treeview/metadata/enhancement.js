function furthest(el, selector) {
  var lastMatch = null
  while (el) {
    if (el.matches && el.matches(selector)) {
      lastMatch = el
    }
    el = el.parentNode
  }
  return lastMatch
}

window.addEventListener('click', function(event) {
  var treeviewItem = event.target.closest('.spectrum-TreeView-item');
  if (!treeviewItem) {
    return;
  }

  var isDisabled = treeviewItem.classList.contains('is-disabled');
  if (isDisabled) {
    return;
  }

  var el;

  if ((el = event.target.closest('.spectrum-TreeView-itemIndicator')) !== null) {
    treeviewItem.classList.toggle('is-open');
    event.preventDefault();
  } else if ((el = event.target.closest('.spectrum-TreeView-itemLink')) !== null) {
    if (!(event.shiftKey || event.metaKey)) {
      // Remove other selected items
      let outerTreeview = furthest(el, '.spectrum-TreeView');
      if (outerTreeview) {
        Array.prototype.forEach.call(outerTreeview.querySelectorAll('.spectrum-TreeView-item.is-selected'), function(item) {
          if (item != treeviewItem) {
            item.classList.remove('is-selected');

            var thumbnail = item.querySelector('.spectrum-TreeView-itemThumbnail');
            if (thumbnail) {
              thumbnail.classList.remove('is-focused');
            }
          }
        });
      }
    }
    let selected = treeviewItem.classList.toggle('is-selected');

    var thumbnail = treeviewItem.querySelector('.spectrum-TreeView-itemThumbnail');
    if (thumbnail) {
      thumbnail.classList[selected ? 'add' : 'remove']('is-focused');
    }
    event.preventDefault();
  }
});