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

module.exports = ({ id, name, description, dnaStatus, cssStatus, status, examples = [], sections = []}) => {
  if (!id || !name) {
    console.error(new Error('Component data required to fetch vars metadata'));
    return;
  }

  // const quiet = typeof process.env.VERBOSE === undefined || process.env.VERBOSE?.toLowerCase() !== 'true' ? true : false;
  const varsMetadata = require('@spectrum-css/vars');
  if (!varsMetadata) {
    console.warn(`No metadata found for ${name} in @spectrum-css/vars.`)
    return;
  }

  const cleanId = id.replace('-', '');
  const idParts = id.split('-');

  const strictRegex = new RegExp(`spectrum-${cleanId}(?:-[s|m|l|xl])?-(name|status|version)`);
  const looseRegex = new RegExp(`spectrum-${cleanId}(?:-\\w+)*-(name|status|version)`);
  const tshirtRegex = new RegExp(`spectrum-${idParts[0]}(?:-[s|m|l|xl])?${idParts[1] ? `-${idParts[1]}`: ``}(?:-\\w+)*-(name|status|version)`);

  // Get DNA information
  const dnaComponent = Object.keys(varsMetadata).filter(varKey =>
      varKey.match(strictRegex) ||
      varKey.match(looseRegex) ||
      varKey.match(tshirtRegex)
    ).reduce((acc, varKey) => {
      let key = varKey.match(strictRegex)?.[1];
      if (!key) key = varKey.match(looseRegex)?.[1];
      if (!key) key = varKey.match(tshirtRegex)?.[1];
      if (!key) return acc;

      acc[key] = varsMetadata[varKey];
      return acc;
    }, {});

  /* Get DNA status for documentation */
  dnaStatus = dnaComponent.status ?? dnaStatus ?? 'Contribution';
  if (status === 'Deprecated') dnaStatus = 'Deprecated';

  const parsedExamples = examples.map((example, id) => {
    let ret = {};
    if (typeof example === 'string') {
      // Handle markup only examples
      ret.id = id;
      ret.markup = example;
    } else {
      ret = example;
      if (!example.id) ret.id = id;
    }

    // All examples are verified if the outer component is verified
    if (status === 'Verified' && !example.status) {
      ret.status = 'Verified';
    }

    // The example is canon if the component is Canon and Verified
    if (dnaStatus === 'Canon' && status === 'Verified') {
      ret.dnaStatus = 'Canon';
    }

    if (dnaStatus === 'Deprecated' || cssStatus === 'Deprecated') {
      ret.status = 'Deprecated';
    } else if (cssStatus === 'Verified' || dnaStatus === 'Canon') {
      ret.status = 'Verified';
    }

    return ret;
  });

  return {
    id,
    name: name ?? dnaComponent.name,
    title: name,
    description,
    cssStatus: status ?? 'Unverified',
    dnaStatus,
    status: status ?? 'Contribution',
    examples: parsedExamples,
    sections
  };
};
