/*
Copyright 2022 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

// all imports
// const eleventySass = require("eleventy-sass")
// const util = require("./site/util.js")
// const prism = require("prismjs")
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")
const getAllYMLFiles = require('./site/scripts/build_navigation-items.cjs')


module.exports = function (eleventyConfig) {
  eleventyConfig.addNunjucksGlobal("WATCH_MODE", process.env.WATCH_MODE)
  eleventyConfig.setUseGitIgnore(false)
  //   eleventyConfig.addPassthroughCopy('resources/');
  eleventyConfig.addPassthroughCopy({ "site/resources/img": "img" })
  eleventyConfig.addPassthroughCopy({ "site/resources/js": "js" })
  eleventyConfig.addPassthroughCopy({ "site/resources/css": "css" })

  eleventyConfig.addPassthroughCopy("components")
  let markdownIt = require("markdown-it")
  let markdownItAnchors = require("markdown-it-anchor")
  let options = {
    html: true,
  }
  // debug filter
  // remove from prod
  eleventyConfig.addFilter("debugger", (...args) => {
    // console.log(...args)
    debugger
  })

  eleventyConfig.setLibrary(
    "md",
    markdownIt(options).use(markdownItAnchors, {
      level: [2, 3, 4],
      permalink: true,
      permalinkSymbol: "#",
      permalinkAttrs: () => ({ "aria-label": "§" }),
      renderPermalink: (slug, opts, state, idx) => {
        const space = () =>
          Object.assign(new state.Token("html_block", "", 0), {
            content: "&nbsp;",
          })

        const linkTokens = [
          Object.assign(new state.Token("link_open", "sp-link", 1), {
            attrs: [
              ["class", opts.permalinkClass],
              ["href", opts.permalinkHref(slug, state)],
              ...Object.entries(opts.permalinkAttrs(slug, state)),
            ],
          }),
          Object.assign(new state.Token("html_block", "", 0), {
            content: opts.permalinkSymbol,
          }),
          new state.Token("link_close", "sp-link", -1),
        ]

        const position = {
          false: "push",
          true: "unshift",
        }
        // `push` or `unshift` according to position option.
        // Space is at the opposite side.
        if (opts.permalinkSpace) {
          linkTokens[position[!opts.permalinkBefore]](space())
        }
        // `push` or `unshift` according to position option.
        // Link tokens are at the opposite side.
        state.tokens[idx + 1].children[position[opts.permalinkBefore]](
          ...linkTokens
        )
      },
    })
  )
  // plugin for sysntax highlighting
  eleventyConfig.addPlugin(syntaxHighlight, {
    init: function ({ Prism }) {
      Prism.languages["html-live"] = Prism.languages.html
      Prism.languages["html-no-demo"] = Prism.languages.html
    },
  })

  eleventyConfig.addNunjucksGlobal("template", function () {
    const root_folder = "components"
    return getAllYMLFiles(root_folder)
  })

  return {
    dir: {
      input: "site",
      output: "_site"
    },
    passthroughFileCopy: true,
    templateFormats: ["njk", "md", "css", "yml"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  }
}
