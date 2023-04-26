/*
Copyright 2023 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/

module.exports = function fetchMarkdownRules() {
  const mdContainer = require('markdown-it-container');
  const mdAnchor = require('markdown-it-anchor');

  function containerBuilder(md, keyword, openTemplate, closeTemplate) {
    const matchString = `^${keyword}(.*)$`;
    return {
      validate: function (params) {
        return params.trim().match(matchString, 'g');
      },
      render: function (tokens, idx) {
        const matches = tokens[idx]?.info?.trim()?.match(matchString, 'g');
        if (!matches || matches.length < 2) return;

        const [_, content] = matches;

        if (tokens[idx].nesting === 1) {
          if (typeof openTemplate === 'function') return openTemplate(md.render(content));
          else return openTemplate + md.render(content);
        } else if (typeof closeTemplate === 'function') return closeTemplate();
        else return closeTemplate;
      }
    };
  }

  const md = require('markdown-it')({
    html: true,
    linkify: false,
    typographer: true,
    breaks: true
  });

  md.use(require('markdown-it-attrs'));
  md.use(mdAnchor, {
    level: [2, 3, 4],
    permalink: mdAnchor.permalink.headerLink({ safariReaderFix: true }),
    permalinkClass: 'spectrum-BigSubtleLink',
    permalinkHref: (slug, state) => {
      const { page } = state.env;
      const { url } = page;
      return `${url}#${slug}`;
    },
    permalinkAttrs: () => ({ 'aria-label': '§' }),
  });
  md.use(mdContainer, 'section', containerBuilder(md, 'section', (content) => `<section>\n${content}\n`, () => `</section>\n`));
  md.use(mdContainer, 'header', containerBuilder(md, 'header', (content) => `<header>\n${content}\n`, () => `</header>\n`));
  md.use(mdContainer, 'article', containerBuilder(md, 'article', (content) => `<article>\n${content}\n`, () => `</article>\n`));
  md.use(require("eleventy-plugin-code-clipboard").markdownItCopyButton);

  md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
    tokens[idx].attrPush(['class', 'spectrum-Link']);
    return self.renderToken(tokens, idx, options, env, self);
  };

  md.renderer.rules.hr = (tokens, idx, options, env, self) => {
    tokens[idx].attrPush(['class', 'spectrum-Divider spectrum-Divider--large']);
    return self.renderToken(tokens, idx, options, env, self);
  };

  md.renderer.rules.paragraph_open = (tokens, idx, options, env, self) => {
    tokens[idx].attrPush(['class', 'spectrum-Body spectrum-Body--sizeL']);
    return self.renderToken(tokens, idx, options, env, self);
  };

  md.renderer.rules.table_open = (tokens, idx, options, env, self) => {
    tokens[idx].attrPush(['class', 'spectrum-Table spectrum-Table--sizeM']);
    return self.renderToken(tokens, idx, options, env, self);
  };

  md.renderer.rules.thead_open = (tokens, idx, options, env, self) => {
    tokens[idx].attrPush(['class', 'spectrum-Table-head']);
    return self.renderToken(tokens, idx, options, env, self);
  };

  md.renderer.rules.tr_open = (tokens, idx, options, env, self) => {
    tokens[idx].attrPush(['class', 'spectrum-Table-row']);
    return self.renderToken(tokens, idx, options, env, self);
  };

  md.renderer.rules.tbody_open = (tokens, idx, options, env, self) => {
    tokens[idx].attrPush(['class', 'spectrum-Table-body']);
    return self.renderToken(tokens, idx, options, env, self);
  };

  md.renderer.rules.th_open = (tokens, idx, options, env, self) => {
    tokens[idx].attrPush(['class', 'spectrum-Table-headCell']);
    return self.renderToken(tokens, idx, options, env, self);
  };

  md.renderer.rules.td_open = (tokens, idx, options, env, self) => {
    tokens[idx].attrPush(['class', 'spectrum-Table-cell']);
    return self.renderToken(tokens, idx, options, env, self);
  };

  md.renderer.rules.code_inline = (tokens, idx, options, env, self) => {
    tokens[idx].attrPush(['class', 'spectrum-Code spectrum-Code--sizeS']);
    return self.renderToken(tokens, idx, options, env, self);
  };

  md.renderer.rules.code_block = (tokens, idx, options, env, self) => {
    tokens[idx].attrPush(['class', 'spectrum-Code spectrum-Code--sizeS']);
    return self.renderToken(tokens, idx, options, env, self);
  };

  /** @type import('markdown-it').Renderer.RenderRule */
  md.renderer.rules.heading_open = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    switch(token.tag) {
      case 'h1':
        token.attrPush(['class', 'spectrum-Heading spectrum-Heading--sizeL']);
        break;
      case 'h2':
        token.attrPush(['class', 'spectrum-Heading spectrum-Heading--sizeM']);
        break;
      case 'h3':
        token.attrPush(['class', 'spectrum-Heading spectrum-Heading--sizeS']);
        break;
      case 'h4':
        token.attrPush(['class', 'spectrum-Heading spectrum-Heading--sizeXS']);
        break;
      case 'h5':
        token.attrPush(['class', 'spectrum-Heading spectrum-Heading--sizeXXS']);
        break;
    }

    return self.renderToken(tokens, idx, options, env, self);
  };

  // md.renderer.rules.heading_close = (tokens, idx, options, env, self) => {
  //   const token = tokens[idx];
  //   if (token.tag === 'h2') {
  //     return '</h2>\n<hr class="spectrum-Divider spectrum-Divider--large">\n';
  //   }
  // };

  md.renderer.rules.code_inline = (tokens, idx, options, env, self) => {
    const token = tokens[idx];
    // ~ indicates markup that should be red
    if (token.content.substr(0, 1) === '~' && token.content.substr(-1) === '~') {
      let aIndex = tokens[idx].attrIndex('class');
      if (aIndex < 0) {
        // add class
        tokens[idx].attrPush(['class', 'spectrum-CSSExample-oldAPI']);
      } else {
        // append class
        tokens[idx].attrs[aIndex][1] = `${tokens[idx].attrs[aIndex][1]} spectrum-CSSExample-oldAPI`;
      }

      token.content = token.content.slice(1, -1);
    }

    return self.renderToken(tokens, idx, options, env, self);
  };

  return md;
}
