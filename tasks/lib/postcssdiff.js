/*
Copyright 2019 Adobe. All rights reserved.
This file is licensed to you under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License. You may obtain a copy
of the License at http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under
the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
OF ANY KIND, either express or implied. See the License for the specific language
governing permissions and limitations under the License.
*/
var Transform = require('readable-stream/transform');
var fs = require('fs');
var postcss = require('postcss');

module.exports = function(pathFunc, contentsFunc) {
  return new Transform({
    objectMode: true,
    transform: function(file, enc, callback) {
      // Parse input
      var modPath = pathFunc(file);


      var modContents = fs.readFileSync(modPath);
      if (contentsFunc) {
        modContents = contentsFunc(modContents);
      }

      var baseRoot = postcss.parse(file.contents);
      var modRoot = postcss.parse(modContents);

      if (baseRoot.nodes.length != modRoot.nodes.length) {
        throw new Error(`Rule count mismatch between ${file.path} and ${modPath}`);
      }

      console.log(`Diffing ${file.path} against ${modPath}`);

      var baseRules = [];
      baseRoot.walkRules((baseRule) => {
        baseRules.push(baseRule);
      });

      var modRules = [];
      modRoot.walkRules((modRule) => {
        modRules.push(modRule);
      });

      if (baseRules.length !== modRules.length) {
        throw new Error(`Rule count mismatch between ${file.path} and ${modPath}`);
      }

      // Iterate over everything so indicies match when performing lookups with nodes[]
      modRules.forEach((modRule, ruleIndex) => {
        var baseRule = baseRules[ruleIndex];
        if (!baseRule) {
          throw new Error(`Rule mismatch: expecting rule #${ruleIndex} to be ${modRule.selector}, but found no rule`);
        }

        if (baseRule.selector != modRule.selector) {
          throw new Error(`Rule mismatch: expecting ${modRule.selector}, but found ${baseRule.selector}`);
        }

        var baseDecls = [];
        baseRule.walkDecls((baseDelc) => {
          baseDecls.push(baseDelc);
        });

        var modDecls = [];
        modRule.walkDecls((modDecl) => {
          modDecls.push(modDecl);
        });

        var removedDecls = 0;
        modDecls.forEach((modDecl, delcIndex) => {
          var baseDecl = baseDecls[delcIndex];
          if (!baseDecl) {
            throw new Error(`Declaration mismatch: expecting declaration #${declIndex} to be ${modDecl.prop} but found no declaration`);
          }

          if (baseDecl.prop != modDecl.prop) {
            throw new Error(`Declaration mismatch: expecting ${modDecl.prop}, but found ${baseDecl.prop}`);
          }

          if (modDecl.value === baseDecl.value) {
            // Delete the dupe
            modDecl.remove();
            removedDecls++;
          }
        });

        // Delete the rule if it's empty
        if (removedDecls === modDecls.length) {
          modRule.remove();
        }
      });

      // Delete all comments
      modRoot.walkComments((modComment) => {
        modComment.remove();
      });

      file.contents = new Buffer(modRoot.toString());

      callback(null, file);
    }
  });
};
