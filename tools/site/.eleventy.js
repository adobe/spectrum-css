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
// const util = require("./util.js")
// const prism = require("prismjs")

const { resolve } = require("path");
const { readFile } = require("fs").promises;
const { writeFileSync } = require("fs");

const yaml = require("js-yaml")
const fg = require("fast-glob")
const ext = require("replace-ext")

const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const markdownIt = require("markdown-it")
const markdownItAnchors = require("markdown-it-anchor")

const lunr = require("lunr");

module.exports = function (eleventyConfig) {
  const output_dir = resolve(process.cwd(), "../../_site");
  const components_root = resolve(process.cwd(), "../../components");

  eleventyConfig.addNunjucksGlobal("WATCH_MODE", process.env.WATCH_MODE)
  eleventyConfig.setUseGitIgnore(false)

  eleventyConfig.addPassthroughCopy({ "assets/css": "css" })
  eleventyConfig.addPassthroughCopy({ "assets/img": "img" })
  eleventyConfig.addPassthroughCopy({ "assets/js": "js" })
  eleventyConfig.addPassthroughCopy({ "assets/favicon.ico": "favicon.ico" })

  eleventyConfig.addPassthroughCopy({ 
    [require.resolve("loadicons/index.js")]: "dependencies/loadicons.js",
    [require.resolve("@adobe/focus-ring-polyfill/index.js")]: "dependencies/focus-ring-polyfill.js",
    [require.resolve("lunr/lunr.js")]: "dependencies/lunr.js",
    [require.resolve("prismjs/themes/prism.css")]: "dependencies/prism.css",
    [require.resolve("@adobe/spectrum-css-workflow-icons/dist/spectrum-icons.svg")]: "icons/workflow/spectrum-icons.svg",
    [`${resolve(components_root)}/icon/dist/*.svg`]: "icons/ui/",
  });

  for (const folder of fg.sync(`${components_root}/*`, { onlyDirectories: true })) {
    const componentName = folder.split("/").pop();
      eleventyConfig.addPassthroughCopy({
        [`${folder}/dist/*.css`]: `components/${componentName}`,
      });
  }

  eleventyConfig.addCollection("components", (collection) => {
    return collection.getFilteredByGlob(`${components_root}/*`).sort((a,b) => {
      if(a.data.title < b.data.title) return -1;
      if(a.data.title > b.date.title) return 1;
      return 0;
    });
  });

  eleventyConfig.addGlobalData("dependencyOrder", [
    "icon",
    "statuslight",
    "link",
    "page",
    "site",
    "typography",
    "tooltip",
    "sidenav",
    "actionbutton",
    "button",
    "textfield",
    "clearbutton",
    "search",
    "menu",
    "fieldlabel",
    "picker",
    "popover",
    "underlay",
    "card",
    "divider",
    "illustratedmessage",
    "accordion",
    "table"
  ]);

  eleventyConfig.addGlobalData("components", function () {
    const nav = [];

    for (const folder of fg.sync(`${components_root}/*`, { onlyDirectories: true })) {
      const componentName = folder.split("/").pop();
      for (const metadata of fg.sync(`${folder}/metadata/*.yml`)) {
        const componentData = readFile(metadata, "utf8")
          .then(yaml.load)
          .catch((safeloadError) => {
            throw safeloadError
          });

          nav.push({
            name: componentData.name,
            component: componentName,
            hide: componentData.hide,
            fastLoad: componentData.fastLoad,
            href: ext(componentName, ".html"),
            description: componentData.description,
          });
      }
    }

    return nav;
  });

  const md = markdownIt({
    html: true,
    linkify: false,
    typographer: true,
    breaks: true,
  });

  /** Updating the renderer to use spectrum classes */
  const defaultRenderer = ((tokens, idx, options, env, self) => self.renderToken(tokens, idx, options));
  
  for (let [rule,className] of Object.entries({
    "link_open": "spectrum-Link",
    "table_open": "spectrum-Table spectrum-Table--sizeM",
    "thead_open": "spectrum-Table-head",
    "tr_open": "spectrum-Table-row",
    "tbody_open": "spectrum-Table-body",
    "th_open": "spectrum-Table-headCell",
    "td_open": "spectrum-Table-cell",
    "code_inline": "spectrum-Code spectrum-Code--sizeS",
    "code_block": "spectrum-Code spectrum-Code--sizeS"
  })) {
    md.renderer.rules[rule] = ((className) => {
      const oldRule = md.renderer.rules[rule] || defaultRenderer;
      return (tokens, idx, options, env, self) => {
        tokens[idx].attrPush(["class", className]);
        return oldRule(tokens, idx, options, env, self);
      };
    })(className);
  }

  md.renderer.rules.code_inline = ((tokens, idx, options, env, self) => {
    const token = tokens[idx];
    // ~ indicates markup that should be red
    if (token.content.slice(0, 1) === "~" && token.content.slice(-1) === "~") {
      let tIdx = token.attrIndex("class");
      let className = 'spectrum-CSSExample-oldAPI';
      if (tIdx < 0) {
        token.attrPush(["class", className]);
      } else {
        token.attrs[tIdx][1] += `${token.attrs[tIdx][1]} ${className}`;
      }

      token.content = token.content.slice(1, -1);
    }
    return (md.renderer.rules.code_inline || defaultRenderer)(tokens, idx, options, env, self);
  });


const tagMap = {
  'h1': 'spectrum-Heading spectrum-Heading--sizeL',
  'h2': 'spectrum-Heading spectrum-Heading--sizeM',
  'h3': 'spectrum-Heading spectrum-Heading--sizeS',
  'h4': 'spectrum-Heading spectrum-Heading--sizeXS',
  'h5': 'spectrum-Heading spectrum-Heading--sizeXXS'
};

md.renderer.rules.heading_open = function(tokens, idx, options, env, self) {
  const className = tagMap[tokens[idx].tag];
  if (className) { tokens[idx].attrPush(['class', className]); }
  return defaultRenderer(tokens, idx, options, env, self);
};
/** End renderer updates */

  eleventyConfig.setLibrary("md", md.use(markdownItAnchors, {
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
    init: ({ Prism }) => {
      Prism.languages["html-live"] = Prism.languages.html
      Prism.languages["html-no-demo"] = Prism.languages.html
    },
    preTag: "code-example",
    codeTag: "pre",
  });

  eleventyConfig.on("afterBuild", () => {
    let docs = readFile(`${output_dir}/raw.json`,"utf-8").then(JSON.parse)
      .catch((safeloadError) => {
        logger.error("yaml loading failed for".yellow, componentName.red);
        throw safeloadError;
      });
    let idx = lunr(function () {
      this.ref("id");
      this.field("title");
      this.field("content");
  
      if (!docs.length) return;

      docs.forEach(function (doc, idx) {
        doc.id = idx;
        this.add(doc); 
      }, this);
    });
  
    writeFileSync(`${output_dir}/index.json`, JSON.stringify(idx));
  });

  return {
    dir: {
      input: "./",
      output: output_dir
    },
    passthroughFileCopy: true,
    templateFormats: ["njk", "md", "yml", "html"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  }
}
