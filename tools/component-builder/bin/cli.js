#!/usr/bin/env node

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

const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');

const build = require('./css.js');
const clean = require('./clean.js');
const lint = require('./lint.js');

yargs(hideBin(process.argv)).usage('Usage: $0 <command> [options]')
  .command('build', 'Build CSS assets', (yargs) => {
    yargs.option('legacy', {
      describe: 'Force a legacy build; script will attempt to detect if a legacy build is needed when this option is not specified',
      type: 'boolean',
      default: false
    });
  }, async (argv) => {
    const { legacy = false } = argv;
    return build(legacy);
  })
  .command('clean', 'Clean built assets from a project', clean)
  .command('lint', 'Lint the component assets', lint)
  .demandCommand(1, 'You need at least one command before moving on')
  .strict()
  .recommendCommands()
  .help('h')
  .alias('h', 'help').argv;
