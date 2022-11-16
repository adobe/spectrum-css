const eleventySass = require("eleventy-sass")
const util = require("./site/util.js")
const prism = require("prismjs")
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")

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



  eleventyConfig.addPlugin(syntaxHighlight, {
    init: function ({ Prism }) {
      Prism.languages["html-live"] = Prism.languages.html
      Prism.languages["html-no-demo"] = Prism.languages.html
    },
  })


  // eleventyConfig.addExtension('css', {
  //   outputFileExtension: 'css',
  //   compile: async (inputContent, inputPath) => {
  //     let output = await postcss([
  //       pimport,
  //       autoprefixer,
  //       csso
  //     ]).process(inputContent, { from: inputPath });
  
  //     return async () => {
  //       return output.css;
  //     }
  //   }
  // });

  return {
    dir: {
      input: "site",
      output: "_site",
    },
    passthroughFileCopy: true,
    templateFormats: ["njk", "md", "css", "yml"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  }
}
