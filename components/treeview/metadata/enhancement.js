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
