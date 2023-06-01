---
tags:
  - component
pagination:
  data: "component"
  size: 1
  alias: "component"
  addAllPagesToCollections: true
eleventyComputed:
  title: "{{ component.title }}"
  description: "{{ component.description }}"
  permalink: "{{ component.permalink }}"
  eleventyNavigation:
    title: "{{ component.title }}"
    key: "{{ component.id }}"
    parent: "{{ component.parent }}"
---
